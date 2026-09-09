import re
import pandas as pd

# Load excel
df = pd.read_excel('products_shapes_with_images new.xlsx')

# Clean shapes
def clean_shape(s):
    if pd.isna(s):
        return None
    s = str(s).lower().strip()
    if s == 'avaitor':
        return 'aviator'
    if s == 'hexogon':
        return 'hexagon'
    return s

df['new_shape'] = df['Correct Shape (Fill Here)'].apply(clean_shape)
shape_map = dict(zip(df['ID'], df['new_shape']))

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_product(match):
    block = match.group(0)
    pid_match = re.search(r'id:\s*(\d+)', block)
    if not pid_match:
        return block
        
    pid = int(pid_match.group(1))
    if pid not in shape_map or not shape_map[pid]:
        return block
        
    new_shape = shape_map[pid]
    
    # Extract current shape from data.js
    curr_shape_match = re.search(r'shape:\s*"([^"]+)"', block)
    if curr_shape_match:
        curr_shape = curr_shape_match.group(1)
    else:
        curr_shape = None
        
    # Replace shape property
    block = re.sub(r'shape:\s*"[^"]+"', f'shape: "{new_shape}"', block)
    
    if curr_shape and curr_shape.lower() != new_shape.lower():
        # Replace in name
        curr_shape_title = curr_shape.title()
        new_shape_title = new_shape.title()
        
        # If current shape title is in name, replace it
        if curr_shape_title in block:
            # We want to only replace it in the 'name' field
            def replace_in_name(m):
                name_val = m.group(1)
                new_name_val = re.sub(re.escape(curr_shape), new_shape_title, name_val, flags=re.IGNORECASE)
                return f'name: "{new_name_val}"'
            block = re.sub(r'name:\s*"([^"]+)"', replace_in_name, block)
            
        # Replace in desc
        def replace_in_desc(m):
            desc_val = m.group(1)
            new_desc_val = re.sub(re.escape(curr_shape), new_shape, desc_val, flags=re.IGNORECASE)
            return f'desc: "{new_desc_val}"'
        block = re.sub(r'desc:\s*"([^"]+)"', replace_in_desc, block)

    return block

new_content = re.sub(r'\{[^{}]*id:\s*\d+[^}]*\}', replace_product, content)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated data.js with new shapes.")
