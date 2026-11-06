import subprocess
import time
import os
import signal

os.makedirs('public/screenshots', exist_ok=True)

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORT = 4173

print("Starting Vite preview server on port", PORT)
env = os.environ.copy()
env["NODE_OPTIONS"] = "--max-old-space-size=4096"

preview_proc = subprocess.Popen(
    ['npx.cmd', 'vite', 'preview', '--port', str(PORT)],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    env=env
)

time.sleep(4)
print("Preview server started.")

def capture(url, out_name, width=1440, height=1000):
    out_path = os.path.abspath(f"public/screenshots/{out_name}")
    cmd = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        f"--window-size={width},{height}",
        "--virtual-time-budget=6000",
        f"--screenshot={out_path}",
        url
    ]
    print(f"Capturing: {url} ({width}x{height}) -> {out_name}")
    res = subprocess.run(cmd, timeout=25)
    if os.path.exists(out_path):
        print(f"  OK: {out_name} ({os.path.getsize(out_path)} bytes)")
    else:
        print(f"  FAILED: {out_name}")

try:
    # 1. Comparison & QA Showcase
    capture(f"http://localhost:{PORT}/preview_phase12.html", "phase12_preview_showcase.png", 1440, 1600)

    # 2. Beds and Wardrobe Category (Desktop)
    capture(f"http://localhost:{PORT}/furniture?category=Beds%20and%20Wardrobe", "phase12_desktop_beds_wardrobe.png", 1440, 1200)

    # 3. Beds and Wardrobe Category (Mobile)
    capture(f"http://localhost:{PORT}/furniture?category=Beds%20and%20Wardrobe", "phase12_mobile_beds_wardrobe.png", 390, 844)

    # 4. Sofa Category (Desktop)
    capture(f"http://localhost:{PORT}/furniture?category=Sofa", "phase12_desktop_sofas.png", 1440, 1200)

    # 5. Sofa Category (Mobile)
    capture(f"http://localhost:{PORT}/furniture?category=Sofa", "phase12_mobile_sofas.png", 390, 844)

    print("\nAll QA screenshots captured successfully!")

finally:
    print("Stopping preview server...")
    preview_proc.terminate()
    try:
        preview_proc.wait(timeout=3)
    except:
        preview_proc.kill()

