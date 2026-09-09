import csv
import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

products = []
matches = re.finditer(r'id:\s*(\d+).*?code:\s*"([^"]+)".*?shape:\s*"([^"]+)".*?image:\s*"([^"]+)"', content, re.DOTALL)
for m in matches:
    pid = int(m.group(1))
    code = m.group(2)
    shape = m.group(3)
    img = m.group(4)
    products.append([pid, code, img, shape, ''])

products = sorted(products, key=lambda x: x[0])

with open('products_shapes.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['ID', 'Product Code', 'Image File', 'Current Shape', 'Correct Shape (Client Fill)'])
    for p in products:
        writer.writerow(p)

print('CSV created.')
