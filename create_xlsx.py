import re
import os
import io
import tempfile
from openpyxl import Workbook
from openpyxl.drawing.image import Image as OpenpyxlImage
from PIL import Image as PILImage

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

products = []
matches = re.finditer(r'id:\s*(\d+).*?code:\s*"([^"]+)".*?shape:\s*"([^"]+)".*?image:\s*"([^"]+)"', content, re.DOTALL)
for m in matches:
    pid = int(m.group(1))
    code = m.group(2)
    shape = m.group(3)
    img_path = m.group(4)
    products.append((pid, code, img_path, shape))

products.sort(key=lambda x: x[0])

wb = Workbook()
ws = wb.active
ws.title = "Review Shapes"

headers = ['ID', 'Product Code', 'Image', 'Current Shape', 'Correct Shape (Fill Here)']
ws.append(headers)

ws.column_dimensions['A'].width = 5
ws.column_dimensions['B'].width = 15
ws.column_dimensions['C'].width = 25  
ws.column_dimensions['D'].width = 15
ws.column_dimensions['E'].width = 30

temp_dir = tempfile.mkdtemp()

for row_idx, p in enumerate(products, start=2):
    pid, code, img_path, shape = p
    
    ws.cell(row=row_idx, column=1, value=pid)
    ws.cell(row=row_idx, column=2, value=code)
    ws.cell(row=row_idx, column=4, value=shape)
    
    ws.row_dimensions[row_idx].height = 90
    
    full_path = os.path.join(os.getcwd(), img_path)
    if os.path.exists(full_path):
        try:
            with PILImage.open(full_path) as img:
                img.thumbnail((180, 110))
                thumb_path = os.path.join(temp_dir, f"thumb_{pid}.jpg")
                # Convert to RGB to save as jpg
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                img.save(thumb_path, 'JPEG')
                
                xl_img = OpenpyxlImage(thumb_path)
                
                # Position image with a tiny offset
                xl_img.anchor = f"C{row_idx}"
                ws.add_image(xl_img)
        except Exception as e:
            ws.cell(row=row_idx, column=3, value=str(e))
    else:
        ws.cell(row=row_idx, column=3, value="Not found")

wb.save("products_shapes_with_images.xlsx")
print("Excel file created: products_shapes_with_images.xlsx")
