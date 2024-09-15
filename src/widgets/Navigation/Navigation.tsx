"use client";

import { cn } from "@shared/utils";
import Link from "next/link";
import { FC } from "react";
import { navigationRoutes } from "./constants";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn("self-end", className)}>
      <ul className="flex">
        {navigationRoutes.map(({ label, path }, index) => (
          <li
            key={index}
            className={cn(
              "p-4 spin-in-1 text-lg hover:bg-accent-50 rounded-t-lg whitespace-nowrap",
              pathname === path && "bg-accent-100",
            )}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
