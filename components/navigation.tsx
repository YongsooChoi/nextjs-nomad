"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={style.nav}>
      <ul>
        <li className={style["list-item"]}>
          <Link href="/">Home</Link> {path === "/" ? "⌵" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>{" "}
          {path === "/about-us" ? "⌵" : ""}
        </li>
      </ul>
    </nav>
  );
}
