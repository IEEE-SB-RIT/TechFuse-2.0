import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/button";
import { X } from "lucide-react";

interface Speaker {
  name: string;
  description: string;
}

interface Modal {
  src: string;
  description: string;
  name: string;
  free?: boolean;
  speakers?: Speaker[];
  price?: string[];
}

interface EventModalProps {
  data: Modal;
  onClose?: () => void;
}

export default function EventModal({ data, onClose }: EventModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(t);
  }, []);
  const closeModal = () => {
    setShow(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function detectOutsideClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("mousedown", detectOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", detectOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // @ts-ignore
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative flex flex-col md:flex-row gap-6  gap-5 w-3xl max-w-full max-h-[90vh] overflow-y-auto   bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-6 transition-all duration-300 ease-in-out ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        ref={modalRef}
      >
        {onClose && (
          <button
            onClick={closeModal}
            className="absolute md:top-4 md:right-4 md:w-9 md:h-9 flex items-center justify-center
                               rounded-full  hover:bg-white/30 backdrop-blur-lg
                               border border-white/30 shadow-lg transition cursor-pointer w-6 h-6 top-2 right-2"
          >
            <X size={20} className="text-white" />
          </button>
        )}
        <Image
          src={data.src}
          alt={data.name}
          width={400}
          height={300}
          className="object-cover rounded-2xl shadow-lg w-full md:w-[320px] h-[220px] md:h-auto"
        />

        <div className="flex flex-col justify-center gap-5 pr-1 md:pr-3">
          <h1 className="text-2xl font-bold ">{data.name}</h1>
          <p className="leading-relaxed ">{data.description}</p>

          {data.speakers && data.speakers.length > 0 && (
            <div className="mt-3 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Speakers</h2>

              <div className="flex flex-col gap-2">
                {data.speakers.map((sp, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-lg bg-white/10 border border-white/20"
                  >
                    <p className="font-medium">{sp.name}</p>
                    <p className="text-sm opacity-80">{sp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.free ? (
            <Button text="Register Now" link="$" />
          ) : (
            <>
              {/*<div className="flex flex-col bg-red-500">*/}
              {/*    {data.price && (*/}
              {/*        data.price.map((price, index) => (*/}
              {/*            <li>*/}
              {/*                {price}*/}
              {/*            </li>*/}
              {/*        ))*/}
              {/*    )}*/}
              {/*</div>*/}
              <Button text="Get Tickets" link="https://www.yepdesk.com/techfuse1" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
