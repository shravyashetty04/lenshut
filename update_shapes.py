import re
import json

shapes_map = {
    1: 'round', 2: 'rectangle', 3: 'rectangle', 4: 'rectangle', 5: 'cat-eye',
    6: 'rectangle', 7: 'rectangle', 8: 'rectangle', 9: 'cat-eye', 10: 'aviator',
    11: 'oval', 12: 'oval', 13: 'cat-eye', 14: 'oval', 15: 'rectangle',
    16: 'cat-eye', 17: 'round', 18: 'aviator', 19: 'aviator', 20: 'aviator',
    21: 'round', 22: 'rectangle', 23: 'rectangle', 24: 'cat-eye', 25: 'rectangle',
    26: 'rectangle', 27: 'rectangle', 28: 'square', 29: 'rectangle', 30: 'round',
    31: 'cat-eye', 32: 'cat-eye', 33: 'round', 34: 'rectangle', 35: 'oval',
    36: 'square', 37: 'oval', 38: 'round', 39: 'rectangle', 40: 'cat-eye',
    41: 'rectangle', 42: 'rectangle', 43: 'cat-eye', 44: 'square', 45: 'aviator',
    46: 'round', 47: 'aviator', 48: 'cat-eye', 49: 'rectangle', 50: 'rectangle',
    51: 'rectangle', 52: 'square', 53: 'rectangle', 54: 'rectangle', 55: 'square',
    56: 'round', 57: 'rectangle', 58: 'rectangle', 59: 'rectangle', 60: 'rectangle',
    61: 'rectangle', 62: 'cat-eye', 63: 'aviator', 64: 'rectangle', 65: 'aviator',
    66: 'round', 67: 'oval', 68: 'square', 69: 'oval', 70: 'rectangle',
    71: 'rectangle', 72: 'rectangle', 73: 'cat-eye', 74: 'cat-eye', 75: 'cat-eye',
    76: 'oval', 77: 'round', 78: 'square', 79: 'cat-eye', 80: 'cat-eye',
    81: 'rectangle', 82: 'oval', 83: 'rectangle', 84: 'rectangle', 85: 'rectangle',
    86: 'rectangle', 87: 'rectangle', 88: 'round', 89: 'rectangle', 90: 'rectangle',
    91: 'rectangle', 92: 'rectangle', 93: 'square', 94: 'rectangle', 95: 'aviator',
    96: 'rectangle', 97: 'cat-eye', 98: 'oval', 99: 'round', 100: 'oval',
    101: 'rectangle', 102: 'rectangle', 103: 'square', 104: 'round'
}

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to process each product object in data.js
# A product object looks like:
# {
#     id: 1, code: "...", name: "...",
#     brand: "...", desc: "...",
#     ...
#     shape: "...",
#     ...
# }

def replace_product(match):
    block = match.group(0)
    pid_match = re.search(r'id:\s*(\d+)', block)
    if not pid_match:
        return block
        
    pid = int(pid_match.group(1))
    if pid not in shapes_map:
        return block
        
    actual_shape = shapes_map[pid]
    capitalized_shape = actual_shape.title()
    
    # Replace shape property
    block = re.sub(r'shape:\s*"[^"]+"', f'shape: "{actual_shape}"', block)
    
    # Add shape to name
    # e.g., name: "EBBA0643 Classic Frame" -> name: "EBBA0643 Classic Rectangle"
    block = re.sub(r'name:\s*"([^"]+) Frame"', f'name: "\\1 {capitalized_shape}"', block)
    block = re.sub(r'name:\s*"([^"]+) premium"', f'name: "\\1 {capitalized_shape}"', block)
    
    # Add shape to desc (replace the generic "frame" or "premium" if it stands out, or just inject it)
    # Actually, we can just replace 'prescription frame' or 'sunglasses' or whatever with '{shape} frame'
    if 'premium frame' in block:
        block = block.replace('premium frame', f'{actual_shape} frame')
    elif 'prescription frame' in block:
        block = block.replace('prescription frame', f'{actual_shape} prescription frame')
    elif 'frame' in block and 'premium frame' not in block and 'prescription frame' not in block:
        # Just replace first occurrence of 'frame' in desc
        desc_match = re.search(r'desc:\s*"([^"]+)"', block)
        if desc_match:
            old_desc = desc_match.group(1)
            new_desc = old_desc.replace('frame', f'{actual_shape} frame', 1)
            block = block.replace(f'desc: "{old_desc}"', f'desc: "{new_desc}"')

    return block

# Match each object { ... }
# Since data.js has an array const products = [ { ... }, { ... } ];
# We can regex sub over the chunks.

new_content = re.sub(r'\{[^{}]*id:\s*\d+[^}]*\}', replace_product, content)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
