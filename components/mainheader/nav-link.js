"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const currentPath = usePathname();
  return (
    <>
      <Link
        href={href}
        className={currentPath.startsWith(href) ? classes.active : null}
      >
        {children}
      </Link>
    </>
  );
}
