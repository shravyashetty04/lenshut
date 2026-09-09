import json
import re
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

# Extract id and image path from data.js
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

products = []
matches = re.finditer(r'id:\s*(\d+).*?image:\s*"([^"]+)"', content, re.DOTALL)
for m in matches:
    pid = int(m.group(1))
    pimg = m.group(2)
    products.append((pid, pimg))

products = sorted(products, key=lambda x: x[0])

# Settings for mosaic
thumb_w, thumb_h = 250, 150
cols = 8
rows = (len(products) + cols - 1) // cols
mosaic_w = cols * thumb_w
mosaic_h = rows * thumb_h

mosaic = Image.new('RGB', (mosaic_w, mosaic_h), (255, 255, 255))
draw = ImageDraw.Draw(mosaic)

base_dir = Path('c:/Users/91895/OneDrive/Desktop/Lenshut')

for i, (pid, pimg) in enumerate(products):
    img_path = base_dir / pimg
    try:
        if img_path.exists():
            img = Image.open(img_path)
            img.thumbnail((thumb_w - 20, thumb_h - 40))
            
            # Calculate position
            col = i % cols
            row = i // cols
            x = col * thumb_w
            y = row * thumb_h
            
            # Center image in cell
            paste_x = x + (thumb_w - img.width) // 2
            paste_y = y + (thumb_h - 40 - img.height) // 2
            
            mosaic.paste(img, (paste_x, paste_y))
            
            # Draw text
            text = f'ID: {pid}'
            draw.text((x + 10, y + thumb_h - 30), text, fill=(0,0,0))
    except Exception as e:
        print(f'Error with {pimg}: {e}')

mosaic.save('mosaic.jpg')
print(f'Created mosaic.jpg with {len(products)} images.')
