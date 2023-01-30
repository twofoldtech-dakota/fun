"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigationLinks } from "../lib/constants";

export const SideNav = () => {
  const path = usePathname();
  console.log("path", path);

  return (
    <div
      className=" sticky top-0 bottom-0 left-0 z-40 hidden h-screen w-[90px] transform-none items-center justify-between overflow-hidden border-r border-lighter_black bg-black p-4 transition-transform md:flex md:flex-col lg:w-auto lg:items-start"
      aria-labelledby="drawer-navigation-label"
    >
      <div className="">
        <h5
          id="drawer-navigation-label"
          className="p-2 text-2xl font-semibold text-white uppercase ltlg:text-center"
        >
          <Link href="/" title="Home">
            G
          </Link>
        </h5>
        <ul className="flex flex-col gap-4 py-5">
          {mainNavigationLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`flex items-center rounded-lg p-2 text-base font-normal text-white hover:bg-lighter_black 
                  ${path === link.href ? " bg-light_black underline" : ""}
                `}
                title={link.label}
              >
                <iconify-icon
                  icon={link.icon}
                  width="24"
                  height="24"
                ></iconify-icon>
                <span className="hidden ml-3 lg:block">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/settings"
        className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-lighter_black "
        title="Settings"
      >
        <iconify-icon
          icon="lucide:settings"
          width="24"
          height="24"
        ></iconify-icon>
        <span className="hidden ml-3 lg:block">Settings</span>
      </Link>
    </div>
  );
};
