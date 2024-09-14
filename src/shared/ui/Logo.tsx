import { cn } from "@shared/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
  url?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Logo: FC<LogoProps> = ({ url, width = 116, height = 24, className }) => {
  return (
    <Link href="/" className={cn("shrink-0", className)}>
      <Image
        src={url || "/images/Logo.png"}
        alt="Harmony HR logo"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Logo;
