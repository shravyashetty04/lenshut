import re

sunglasses_ids = {5, 10, 12, 21, 23, 24, 43, 44, 45, 46, 47, 48, 65, 66, 67, 68, 69, 73, 74, 75, 76, 93, 94, 95}

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_category(match):
    block = match.group(0)
    pid_match = re.search(r'id:\s*(\d+)', block)
    if not pid_match:
        return block
    pid = int(pid_match.group(1))
    if pid in sunglasses_ids:
        block = re.sub(r'category:\s*"[^"]+"', 'category: "sunglasses"', block)
    return block

new_content = re.sub(r'\{[^{}]*id:\s*\d+[^}]*\}', replace_category, content)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
