import Image from "next/image";
import Button from "@/app/components/button";

export default function Home() {
  return (
    <div className="flex min-h-screen  flex-col items-center justify-center gap-y-5 font-sans ">
      <Image
        src="/techfuselogo.webp"
        width={800}
        height={500}
        alt="Techfuse 2.0 Logo"
      />
      <Button text={"Tickets Opening Soon"} />
    </div>
  );
}
