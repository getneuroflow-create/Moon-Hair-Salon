from PIL import Image
import os

src = r"C:\Users\mohib\.cursor\projects\c-Users-mohib-Desktop-Moon-Hair-Studio\assets\c__Users_mohib_AppData_Roaming_Cursor_User_workspaceStorage_64ff7c277b504de8cc003b416fe3db1e_images_image-41cb96e2-d849-4ad4-bec1-4fc6ecbb635f.png"
out_dir = r"C:\Users\mohib\Desktop\Moon Hair Studio\public\brand"
os.makedirs(out_dir, exist_ok=True)

im = Image.open(src).convert("RGBA")
im = im.resize((im.width * 4, im.height * 4), Image.Resampling.LANCZOS)
pixels = im.load()
w, h = im.size

light = Image.new("RGBA", (w, h), (0, 0, 0, 0))
dark = Image.new("RGBA", (w, h), (0, 0, 0, 0))
lp, dp = light.load(), dark.load()

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        lum = (r + g + b) / 3.0
        if lum < 28:
            continue
        alpha = int(min(255, max(0, (lum - 28) / (230 - 28) * 255)))
        lp[x, y] = (245, 245, 245, alpha)
        dp[x, y] = (20, 18, 16, alpha)


def crop_alpha(img, pad=12):
    bbox = img.getbbox()
    if not bbox:
        return img
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(img.width, r + pad)
    b = min(img.height, b + pad)
    return img.crop((l, t, r, b))


light = crop_alpha(light)
dark = crop_alpha(dark)

light_path = os.path.join(out_dir, "logo.png")
dark_path = os.path.join(out_dir, "logo-dark.png")
light.save(light_path, "PNG", optimize=True)
dark.save(dark_path, "PNG", optimize=True)

print("light", light.size, os.path.getsize(light_path))
print("dark", dark.size, os.path.getsize(dark_path))
print("light corner", light.getpixel((0, 0)))
print("dark corner", dark.getpixel((0, 0)))
