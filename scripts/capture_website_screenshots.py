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

time.sleep(3)
print("Preview server started.")

try:
    # 1. Main Website with Pooja Stand Category selected
    url_cat = f"http://localhost:{PORT}/?category=Pooja%20Stand"
    out_cat = os.path.abspath("public/screenshots/website_pooja_category.png")
    cmd_cat = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,1100",
        f"--screenshot={out_cat}",
        url_cat
    ]
    print(f"Capturing: {url_cat} -> {out_cat}")
    subprocess.run(cmd_cat, timeout=15)
    
    # 2. Comparison / Showcase HTML preview page
    url_preview = f"http://localhost:{PORT}/preview_pooja.html"
    out_preview = os.path.abspath("public/screenshots/website_pooja_showcase.png")
    cmd_preview = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,1200",
        f"--screenshot={out_preview}",
        url_preview
    ]
    print(f"Capturing: {url_preview} -> {out_preview}")
    subprocess.run(cmd_preview, timeout=15)

    print("Screenshots captured successfully!")

finally:
    print("Terminating preview server...")
    preview_proc.terminate()
    try:
        preview_proc.wait(timeout=3)
    except:
        preview_proc.kill()

