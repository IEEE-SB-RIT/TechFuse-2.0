export type GalleryItem = {
  id: number;
  src: string;
  category: string;
  alt: string;
  width: number;
  height: number;
};

// You can replace these URLs with your own images later
export const galleryImages: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    category: "Robotics",
    alt: "Robot arm working",
    width: 800,
    height: 1200,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    category: "Cybersecurity",
    alt: "Digital security lock",
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    category: "Network",
    alt: "Global connection",
    width: 800,
    height: 800,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    category: "Coding",
    alt: "Matrix code screen",
    width: 800,
    height: 1000,
  },

  {
    id: 6,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    category: "Future",
    alt: "Futuristic robot face",
    width: 800,
    height: 1200,
  },
];
