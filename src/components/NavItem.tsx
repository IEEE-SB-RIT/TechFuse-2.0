"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  text: string;
  path: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavItem = ({ text, path, onClick, isMobile }: NavItemProps) => {
  const pathname = usePathname();

  const handleClick = () => {
    if (isMobile && onClick) onClick();
  };

  const isActive = pathname === path;

  return (
    <div>
      <Link
        href={path}
        onClick={handleClick}
        className={`font-josefin px-4 py-2 text-2xl font-medium transition-colors ${
          isActive ? "text-white" : "text-zinc-400 hover:text-[var(--primary)]"
        }`}
      >
        {text}
      </Link>
    </div>
  );
};

export default NavItem;
