"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";

const NavBar = () => {
  const links = [
    { label: "仪表盘", href: "/" },
    { label: "问题", href: "/issues" },
  ];

  const currentHref = usePathname();

  return (
    <nav className="flex space-x-6 border-b h-14 items-center mb-6 px-6">
      <Link href={"/"}>
        <span className="icon-[akar-icons--bug]" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.href}
              className={classnames({
                "text-zinc-950": link.href === currentHref,
                "text-zinc-500": link.href !== currentHref,
                "hover:text-zinc-900 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
