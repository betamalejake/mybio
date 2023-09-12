import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({
  clickScroll,
  clickScroll2,
  pageLoad
}: {
  clickScroll: any;
  clickScroll2: any;
  pageLoad: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width to determine if it's a mobile device
    const isMobileDevice = window.innerWidth < 768; // Adjust the width threshold as needed

    // Update the state based on the screen size
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <>
      <header className="relative">
        <nav
          className={`${
            pageLoad ? "animate-fade-in-top" : "opacity-0"
          } fixed flex w-full z-50 bg-slate-950/80 p-4 sm:px-24 px-4 justify-between items-center`}
        >
          <Link href="/">
            <img
              draggable={false}
              className="h-12 w-12 rounded-full"
              alt="image"
              src="https://r2.e-z.host/8a13052f-8c12-4034-b99f-0155cc616583/7rx2b9xr.png"
            />
          </Link>
          <ul className="flex flex-row gap-x-2 pl-0 sm:pl-4">
            <li>
              <button
                className="text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md"
                onClick={clickScroll}
              >
                About Me
              </button>
            </li>
            <li>
              {isMobile ? ( // Check if it's a mobile device
                <button
                  className="text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md"
                  onClick={clickScroll2}
                >
                  {" "}
                  <Link href="https://aiden.gg">
                  Based on Aiden.gg
                  </Link>
                </button>
              ) : (
                <p className="text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md">
  {" "}
  <Link href="https://aiden.gg">
  Made by RobinTT based on <span className="blue-link">Aiden.gg</span>
  </Link>
</p>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
