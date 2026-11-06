import requests

url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFwSV9Hg8_y4Ikujqp72Rx0pA1vGRvAB4ZAs7byu29W6ZEddQaYTmmjh4yo3Zb5rjv52h-OHu5gWWHM47q8rCUyTi_0PrF-QeVSZRx9E2WY0rdokN8ww23KwucJTpiv1g_G1swcSGxa1u9b-49UzI_hZ0XeDWVxFe9DTd5mLQs6jQZrW7h6sW-JRxO1-YiSScTueBVnHSP6jLrm_yP5QEyogipqwRemJmIBfon5u-_lTpjv"

r = requests.head(url, allow_redirects=False)
print("Redirect target:", r.headers.get('Location'))

