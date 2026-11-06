from PIL import Image

im1 = Image.open('scratch/candidates/zephyr_candidate_1.jpg')
print("zephyr_candidate_1:", im1.size, im1.format)

# Let's crop headboard and base
w, h = im1.size
headboard = im1.crop((w*0.2, h*0.2, w*0.8, h*0.55))
headboard.save('scratch/zephyr_cand1_headboard.jpg')
print("Saved scratch/zephyr_cand1_headboard.jpg")

