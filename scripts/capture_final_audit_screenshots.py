import subprocess
import time
import os
import requests

os.makedirs('public/screenshots', exist_ok=True)
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORT = 4173

print("Starting Vite preview...")
preview_proc = subprocess.Popen(
    ['npx.cmd', 'vite', 'preview', '--port', str(PORT)],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE
)

# Wait until responsive
ready = False
for _ in range(15):
    time.sleep(1)
    try:
        r = requests.get(f"http://localhost:{PORT}/", timeout=1)
        if r.status_code == 200:
            ready = True
            print("Preview server is UP!")
            break
    except:
        pass

if not ready:
    print("Warning: server didn't respond within 15 seconds")

screenshots = [
    # Desktop captures (1440x960)
    {
        'name': 'desktop_furniture_catalog.png',
        'url': f'http://localhost:{PORT}/furniture',
        'w': 1440,
        'h': 1200
    },
    {
        'name': 'desktop_center_table_category.png',
        'url': f'http://localhost:{PORT}/furniture?category=Center%20Table',
        'w': 1440,
        'h': 1200
    },
    {
        'name': 'desktop_steel_bureau_category.png',
        'url': f'http://localhost:{PORT}/furniture?category=Steel%20Bureau',
        'w': 1440,
        'h': 1200
    },
    {
        'name': 'desktop_steel_cot_category.png',
        'url': f'http://localhost:{PORT}/furniture?category=Steel%20Cot',
        'w': 1440,
        'h': 1200
    },
    {
        'name': 'desktop_pooja_stand_category.png',
        'url': f'http://localhost:{PORT}/furniture?category=Pooja%20Stand',
        'w': 1440,
        'h': 1200
    },
    {
        'name': 'desktop_homepage.png',
        'url': f'http://localhost:{PORT}/',
        'w': 1440,
        'h': 1200
    },
    # Tablet captures (768x1024)
    {
        'name': 'tablet_furniture_catalog.png',
        'url': f'http://localhost:{PORT}/furniture',
        'w': 768,
        'h': 1024
    },
    # Mobile captures (375x812)
    {
        'name': 'mobile_furniture_catalog.png',
        'url': f'http://localhost:{PORT}/furniture',
        'w': 375,
        'h': 812
    },
    {
        'name': 'mobile_homepage.png',
        'url': f'http://localhost:{PORT}/',
        'w': 375,
        'h': 812
    },
    {
        'name': 'mobile_center_table_category.png',
        'url': f'http://localhost:{PORT}/furniture?category=Center%20Table',
        'w': 375,
        'h': 812
    }
]

try:
    for s in screenshots:
        out_f = os.path.abspath(f"public/screenshots/{s['name']}")
        cmd = f'"{CHROME}" --headless=new --disable-gpu --hide-scrollbars --window-size={s["w"]},{s["h"]} --virtual-time-budget=6000 --screenshot="{out_f}" "{s["url"]}"'
        print(f"Capturing {s['name']} ({s['w']}x{s['h']})...")
        subprocess.run(cmd, shell=True, timeout=30)
        if os.path.exists(out_f) and os.path.getsize(out_f) > 10000:
            print(f"  OK: {s['name']} ({os.path.getsize(out_f) / 1024:.1f} KB)")
        else:
            print(f"  FAILED or empty: {s['name']}")

    print("\nAll screenshot tasks completed successfully!")
finally:
    preview_proc.terminate()
    try:
        preview_proc.wait(timeout=2)
    except:
        preview_proc.kill()

