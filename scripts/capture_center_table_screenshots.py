import subprocess
import time
import os

os.makedirs('public/screenshots', exist_ok=True)

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORT = 4173

print("Starting Vite preview server...")
preview_proc = subprocess.Popen(
    ['npx.cmd', 'vite', 'preview', '--port', str(PORT)],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE
)

time.sleep(4)
print("Preview server started.")

try:
    # 1. Main Furniture page with Center Table Category selected
    url_cat = f"http://localhost:{PORT}/furniture?category=Center%20Table"
    out_cat = os.path.abspath("public/screenshots/website_center_table_category.png")
    cmd_cat = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,1400",
        "--virtual-time-budget=6000",
        f"--screenshot={out_cat}",
        url_cat
    ]
    print(f"Capturing: {url_cat} -> {out_cat}")
    subprocess.run(cmd_cat, timeout=20)
    
    # 2. Comparison / Showcase HTML preview page
    url_preview = f"http://localhost:{PORT}/preview_center_tables.html"
    out_preview = os.path.abspath("public/screenshots/website_center_table_showcase.png")
    cmd_preview = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,1200",
        "--virtual-time-budget=6000",
        f"--screenshot={out_preview}",
        url_preview
    ]
    print(f"Capturing: {url_preview} -> {out_preview}")
    subprocess.run(cmd_preview, timeout=20)

    print("Screenshots captured successfully!")

finally:
    print("Terminating preview server...")
    preview_proc.terminate()
    try:
        preview_proc.wait(timeout=3)
    except:
        preview_proc.kill()
    print("Preview server stopped.")

