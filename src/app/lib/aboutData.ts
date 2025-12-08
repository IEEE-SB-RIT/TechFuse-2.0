import {lorem} from "next/dist/next-devtools/dev-overlay/utils/lorem";

interface aboutData {
    heading?: string;
    src: string;
    description: string;
}

const aboutData: aboutData[] = [
  {
      heading: "Tech Fuse 2.0",
    src: "/about-us-image-1.webp",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi, delectus eaque esse eum excepturi impedit maiores maxime nobis numquam odio odit officiis quas quod reprehenderit totam unde? Architecto, reprehenderit"

  },
  {
      heading: "IEEE SB RIT ",
    src: "/about-us-image-2.webp",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi, delectus eaque esse eum excepturi impedit maiores maxime nobis numquam odio odit officiis quas quod reprehenderit totam unde? Architecto, reprehenderit"

  },
  {
      heading: "IEEE SPS RIT",
    src: "/about-us-image-3.webp",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi, delectus eaque esse eum excepturi impedit maiores maxime nobis numquam odio odit officiis quas quod reprehenderit totam unde? Architecto, reprehenderit"

  }
];
export default aboutData;