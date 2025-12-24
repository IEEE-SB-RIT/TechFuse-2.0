import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://techfuse20.ieeesbrit.com",
      lastModified: new Date(),
    },
    {
      url: "https://techfuse20.ieeesbrit.com/about",
      lastModified: new Date(),
    },
        {
      url: "https://techfuse20.ieeesbrit.com/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://techfuse20.ieeesbrit.com/events",
      lastModified: new Date(),
    },
    {
      url: "https://techfuse20.ieeesbrit.com/contact",
      lastModified: new Date(),
    },
  ];
}
