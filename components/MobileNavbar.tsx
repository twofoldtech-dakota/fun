"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartIcon } from "./icons/cart";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/screener", label: "Screener" },
  { href: "/about", label: "About" },
];

export const MobileNavbar = () => {
  const path = usePathname();

  const handleMobileNavClick = (e) => {
    e.preventDefault();
    const navbar = document.getElementById("navbar-sticky");
    navbar.classList.toggle("hidden");
  };

  return (
    <header className="relative z-10 block w-full bg-black md:hidden">
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-lighter_black bg-black px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center md:hidden">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              Grasp
            </span>
          </a>

          <div className="flex md:order-2 md:hidden">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center rounded-lg border border-black p-1 text-sm text-white hover:border-lighter_black focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleMobileNavClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 12h16M4 6h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div
            className="hidden w-full items-center justify-between"
            id="navbar-sticky"
          >
            <ul className="border-lighter-black mt-4 flex w-full flex-col p-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block w-full rounded p-2 text-grey hover:bg-light_black hover:text-white"
                    aria-current="page"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
