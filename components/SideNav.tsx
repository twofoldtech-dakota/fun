import Link from "next/link";

export const SideNav = () => {
  return (
    // <!-- drawer component -->
    <div
      id="drawer-navigation"
      className=" sticky top-0 bottom-0 left-0 z-40 hidden h-screen w-[90px] transform-none items-center justify-between overflow-hidden border-r border-lighter_black bg-black p-4 transition-transform md:flex md:flex-col lg:w-auto lg:items-start"
      aria-labelledby="drawer-navigation-label"
    >
      <div className="">
        <h5
          id="drawer-navigation-label"
          className="p-2 text-2xl font-semibold uppercase text-white ltlg:text-center"
        >
          <Link href="/" title="Home">
            G
          </Link>
        </h5>
        <ul className="flex flex-col gap-4 py-5">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center rounded-lg p-2 text-base font-normal text-white hover:bg-light_black "
              title="Dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h7v9H3zm11 0h7v5h-7zm0 9h7v9h-7zM3 16h7v5H3z"
                />
              </svg>

              <span className="ml-3 hidden lg:block">Dashboard</span>
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/screener"
              className="flex items-center rounded-lg p-2 text-base font-normal text-white hover:bg-light_black "
              title="Screener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3"
                />
              </svg>
              <span className="ml-3 hidden lg:block">Screener</span>
            </Link>
          </li>
        </ul>
      </div>
      <Link
        href="/settings"
        className="flex items-center rounded-lg p-2 text-base font-normal text-white hover:bg-light_black "
        title="Settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </g>
        </svg>

        <span className="ml-3 hidden lg:block">Settings</span>
      </Link>
    </div>
  );
};
