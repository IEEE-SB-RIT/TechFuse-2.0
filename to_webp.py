
from PIL import Image
import os

source_folder = "E:\\To_Webp"
dest_path="C:\\Users\\farza\\WebstormProjects\\techfuse-2\\public\\techFuseGallery"
web_quality = 85


os.makedirs(dest_path, exist_ok=True)
base_name = "glimpses"

for i, filename in enumerate(sorted(os.listdir(source_folder))):
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):

        webp_path = os.path.join(dest_path, f"{base_name}{i}.webp")
        original_path = os.path.join(source_folder, filename)

        # Skip if WebP version already exists
        if os.path.exists(webp_path):
            print(f"Skipping (already converted): {filename}")
            continue

        try:
            img = Image.open(original_path).convert("RGB")
            img.save(webp_path, "WEBP", quality=web_quality)
            os.remove(original_path)  # delete original after successful conversion
            print(f"Converted and deleted: {filename} -> {base_name}.webp")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")

print("Conversion complete.")