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

try:
    # 1. Category screenshot
    out_cat = os.path.abspath("public/screenshots/website_center_table_category.png")
    cmd_cat = f'"{CHROME}" --headless=new --disable-gpu --hide-scrollbars --window-size=1440,1400 --virtual-time-budget=6000 --screenshot="{out_cat}" "http://localhost:{PORT}/furniture?category=Center%20Table"'
    print("Running:", cmd_cat)
    subprocess.run(cmd_cat, shell=True, timeout=30)
    
    # 2. Preview page screenshot
    out_prev = os.path.abspath("public/screenshots/website_center_table_showcase.png")
    cmd_prev = f'"{CHROME}" --headless=new --disable-gpu --hide-scrollbars --window-size=1440,1200 --virtual-time-budget=6000 --screenshot="{out_prev}" "http://localhost:{PORT}/preview_center_tables.html"'
    print("Running:", cmd_prev)
    subprocess.run(cmd_prev, shell=True, timeout=30)

    print("Screenshots done!")
finally:
    preview_proc.terminate()
    try:
        preview_proc.wait(timeout=2)
    except:
        preview_proc.kill()

