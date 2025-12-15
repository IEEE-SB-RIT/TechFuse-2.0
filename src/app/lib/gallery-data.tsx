export type GalleryItem = {
  id: number;
  src: string;
  category: string;
  alt: string;
  width: number;
  height: number;
};

const IMAGE_COUNT = 10;

export const galleryImages: GalleryItem[] = Array.from(
    { length: IMAGE_COUNT },
    (_, i) => ({
      id: i + 1,
      src: `/techFuseGallery/glimpses${i}.webp`,
      category: "Glimpses",
      alt: "Glimpses of TechFuse",
      width: 800,
      height: 600,
    })
);
