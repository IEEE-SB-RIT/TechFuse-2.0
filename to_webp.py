from PIL import Image
import os

source_folder = r"E:\To_Webp"
dest_path = r"C:\Users\farza\WebstormProjects\techfuse-2\public\techFuseEvents"
web_quality = 85

os.makedirs(dest_path, exist_ok=True)


existing_indices = set()

for f in os.listdir(dest_path):
    if f.startswith("events") and f.endswith(".webp"):
        name = os.path.splitext(f)[0]
        num_part = name.replace("events", "")

        if num_part.isdigit():
            existing_indices.add(int(num_part))

current_index = 1
while current_index in existing_indices:
    current_index += 1

for filename in sorted(os.listdir(source_folder)):
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):

        # Ensure unique basename (skip already existing)
        while True:
            base_name = f"events{current_index:02d}.webp"
            webp_path = os.path.join(dest_path, base_name)
            if not os.path.exists(webp_path):
                break
            current_index += 1

        original_path = os.path.join(source_folder, filename)

        try:
            img = Image.open(original_path).convert("RGB")
            img.save(webp_path, "WEBP", quality=web_quality)
            os.remove(original_path)
            print(f"Converted: {filename} → {base_name}")
            current_index += 1
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")

print("Conversion complete.")
