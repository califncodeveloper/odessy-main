import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

# Let's test a known Pepperfry CDN image
test_urls = [
    # Marlow (product 1959724 or similar)
    'https://ii1.pepperfry.com/media/catalog/product/m/a/800x880/marlow-solid-wood-king-size-bed-in-honey-oak-finish-with-drawer-storage-by-woodsworth-marlow-solid-wood-k-mshd9k.jpg',
    # Zephyr bed 1959741
    'https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zephyr-sheesham-wood-king-size-bed-in-honey-oak-finish-with-hydraulic-storage-1959741_1.jpg',
    'https://ii1.pepperfry.com/media/catalog/product/z/e/800x880/zephyr-sheesham-wood-king-size-bed-in-honey-oak-finish-with-hydraulic-storage-by-woodsworth-1959741_1.jpg',
    'https://ii1.pepperfry.com/media/catalog/product/z/e/1600x1760/zephyr-sheesham-wood-king-size-bed-in-honey-oak-finish-with-hydraulic-storage-by-woodsworth-1959741_1.jpg'
]

for u in test_urls:
    try:
        r = requests.head(u, headers=headers, timeout=5)
        print(f"Status {r.status_code}: {u}")
    except Exception as e:
        print(f"Error: {e}")

