interface AboutData {
  heading?: string | string[]; // accept single string or array of strings
  src: string;
  description: string | string[]; // accept single string or array of strings
  className?: string;
}

const aboutData: AboutData[] = [
  {
    heading: "TechFuse 2.0",
    src: "/techfuselogo.webp",
    description:
      "Join us for TechFuse 2.0, the ultimate three-day event organized by IEEE SPS SBC RIT in partnership with IEEE SPS Kerala Chapter hosted at Rajiv Gandhi Institute of Technology, Kottayam! Dive into hands-on workshops, interactive sessions, and expert talks focused on cutting-edge signal processing and technology. Unleash your creativity through hands-on learning in Edge AI and IoT, Virtual Reality, and ADAS using embedded systems. TechFuse 2.0 is your ticket to innovation and collaboration—let's inspire the engineer in you to explore, create, and excel! Don’t miss out!",
    className: "object-contain md:w-[520px] md:h-[320px] bg-tf-radial-pattern",
  },
  {
    heading: "IEEE SB RIT and IEEE SPS SBC RIT",
    src: "/about-us-image-2.webp", // you can pick one main image or merge images
    description: [
      "The IEEE SB RIT, established in January 2006 at Rajiv Gandhi Institute of Technology Kottayam, is one of the most vibrant and significant student branches in the Kerala section, powered by highly dedicated and energetic volunteers.",
      "Founded on February 2, 2022, IEEE SPS SBC RIT has rapidly emerged as a standout chapter in the IEEE Kerala Section, hosting impactful events that bridge theory with real-world signal processing applications and earning multiple grants, reflecting its commitment to excellence and community impact.",
    ],
  },
  {
    heading: "IEEE SPS Kerala Chapter",
    src: "/sps_kerala_chap.webp",
    description:
      "The IEEE Signal Processing Society (SPS) Kerala Chapter is an exciting community of 23 student leaders and 20 industry professionals dedicated to transforming signal processing! With support from a dynamic advisory body, they organize impactful events and empower SPS branches across Kerala, contributing to prestigious events like ICIP and ICASSP. Their vibrant collaborations with other IEEE chapters create a global network that sparks creativity and knowledge-sharing in this ever-evolving field!",
  },
];

export default aboutData;
