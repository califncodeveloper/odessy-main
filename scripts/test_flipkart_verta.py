import requests
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

# The Flipkart redirect link from search_web
redirect_url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4sYKp4s1i3jQ2oPxrbKSxRaCbtXYHSVl42vaqn-ipm6e1-IQRkDzLz6PH3zUjysfhSb6Jr3hPE0OTWK0iyzuaOnoeff1UQ5arlJnCS6CU8u8nxpaocSZQCzGPUIkS171_8tunjK3pkyxRSolGYLgX7lPm1N5tKxd4cFQXjMtruX4-Woqxftzh_C7ETb-GZ-2t-7CIm6-9dX9vR2EagGSrLNFMF9PvvHJ-LVDlNUjZScN4QnLtZr-SFiFIU74wkjwDO_7HXPpYxloM8tm1fYt8jkrLL2CoSar8K8aXMBVU9tP-D3Djbo6XeSrOteCl-MaE5sNOS7PFnhRorJINMLls0NX8yPP0bFKEuSELDXnSvEKii68Kf6E4Q9UO_K4dskCGkmfp_HtvpD_UJOPuNuwYbBzdSSVRxSSL5MsUoxnpXm0="

r = requests.get(redirect_url, headers=headers, allow_redirects=True, timeout=15)
print("Final URL:", r.url)
print("Status code:", r.status_code)

# Find images in the Flipkart page
images = re.findall(r'https://rukminim\d?\.flixcart\.com/image/[^\s"\']+', r.text)
print(f"Found {len(images)} images")
for img in set(images)[:10]:
    # replace resolution in flixcart url with /1200/1200/ or /original/
    high_res = re.sub(r'/image/\d+/\d+/', '/image/1200/1200/', img)
    print("  Flipkart img:", high_res)

