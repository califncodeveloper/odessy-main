with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# The 5 pooja products block:
start_marker = "  {\n    id: 'dzyn-traditional-teak-mandir',"
end_marker = "    warranty: '24 Months (2 Years) Manufacturer Warranty'\n  }"

# Find all occurrences of the pooja block
blocks = []
curr = 0
while True:
    pos = content.find(start_marker, curr)
    if pos == -1:
        break
    end_pos = content.find(end_marker, pos)
    if end_pos == -1:
        break
    end_pos += len(end_marker)
    blocks.append((pos, end_pos))
    curr = end_pos

print(f"Found {len(blocks)} pooja blocks")

# We want to keep ONLY the one that is placed after 'verta-modular-wardrobe' (the last one before FURNITURE_SUBCATEGORIES)
# Remove all the earlier ones:
# Sort blocks in reverse order of index to remove without shifting indices
for pos, end_pos in reversed(blocks[:-1]):
    # Also check if there's a leading comma
    # Look back for comma or newline
    # content[pos-2:end_pos]
    slice_to_remove = content[pos:end_pos]
    # Check if there is a trailing comma or preceding comma
    if content[pos-4:pos] == ',\n  {\n':
        pass
    print(f"Removing duplicate block at {pos}:{end_pos}")
    # Replace the duplicate block and the preceding comma
    prefix = content[:pos]
    if prefix.endswith(',\n'):
        prefix = prefix[:-2]
    content = prefix + content[end_pos:]

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned up products.ts successfully!")

