import requests
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

test_urls = [
    # Abbey: FM1744836
    'https://ii1.pepperfry.com/media/catalog/product/f/m/800x880/abbey-large-solid-wood-coffee-table-in-rustic-teak-finish-by-woodsworth-1744836_1.jpg',
    'https://ii1.pepperfry.com/media/catalog/product/f/m/1600x1760/abbey-large-solid-wood-coffee-table-in-rustic-teak-finish-by-woodsworth-1744836_1.jpg',
    'https://ii1.pepperfry.com/media/catalog/product/a/b/800x880/abbey-large-solid-wood-coffee-table-in-rustic-teak-finish-by-woodsworth-1744836_1.jpg',
    
    # Valencia: FM1823210 or 1823210
    'https://ii1.pepperfry.com/media/catalog/product/v/a/800x880/valencia-sheesham-wood-coffee-table-in-scratch-resistant-provincial-teak-finish-with-glass-top-by-woodsworth-1823210_1.jpg',
    'https://ii1.pepperfry.com/media/catalog/product/f/m/800x880/valencia-sheesham-wood-coffee-table-in-scratch-resistant-provincial-teak-finish-with-glass-top-by-woodsworth-1823210_1.jpg',
    
    # Zyra: 2159069
    'https://ii1.pepperfry.com/media/catalog/product/z/y/800x880/zyra-marble-top-coffee-table-in-cream-and-brown-finish-2159069_1.jpg',
    
    # Galliano: 2186809
    'https://ii1.pepperfry.com/media/catalog/product/g/a/800x880/galliano-metal-coffee-table-in-matte-gold-finish-by-casacraft-2186809_1.jpg',
    
    # Elvas: 1959345
    'https://ii1.pepperfry.com/media/catalog/product/e/l/800x880/elvas-metal-round-nesting-coffee-table-set-in-black-finish-with-white-porcelain-top-set-of-2-1959345_1.jpg'
]

for u in test_urls:
    try:
        r = requests.head(u, headers=headers, timeout=5)
        print(f"Status {r.status_code}: {u}")
    except Exception as e:
        print(f"Error: {e}")

