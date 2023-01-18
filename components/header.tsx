"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { CartIcon } from "./icons/cart";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  const path = usePathname();

  return (
    <header className="relative z-10 w-full bg-beige">
      <Container className="flex items-center py-8 border-b border-black">
        <Link href="/" className="text-3xl font-bold">
          Grasp
        </Link>
        <nav>
          <ul className="ml-12 flex [&_li]:ml-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="relative" href={link.href}>
                  {link.href === path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[1px] w-full bg-black"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="flex flex-row ml-auto">
          <CartIcon />
          <span className="sr-only">Open cart</span>
          <span className="flex items-center justify-center w-5 h-5 ml-2 text-white bg-black rounded-full">
            1
          </span>
          <span className="sr-only">items in cart cart</span>
        </button>
      </Container>
    </header>
  );
};
