import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

const navbarItems = [
  {
    item: "Home",
    path: "/",
  },
  {
    item: "Shop",
    path: "/shop",
  },
  {
    item: "Reviews",
    path: "/reviews",
  },
  {
    item: "Order Tracking",
    path: "/ordertracking",
  },
  {
    item: "Help",
    path: "/help",
  },
];

function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const dropdown = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showNav) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowNav(false);
      }
    }
    window.addEventListener("click", handleClick);

    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showNav]);

  return (
    <nav className="bg-white shadow h-20 md:mt-3">
      <div className="container mx-auto md:px-6 px-3   flex justify-between md:items-center">
        <Link href="/">
          <a className="block   text-xl font-bold md:text-2xl  " href="#">
            <Image src="/images/injestic_logo.png" width={180} height={60} />
          </a>
        </Link>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className={`${showNav ? "" : "hidden lg:block"} `}>
          {/* <div className="flex flex-col  lg:flex-row md:mx-6"> */}
          <ul
            className={`flex flex-col  lg:flex-row md:mx-6 ${
              showNav &&
              `
              transform transition-transform ease-linear delay-1000 duration-1000
              absolute lg:static 
              top-20 
              left-0

              z-50

              py-10 lg:py-0
          
              px-10 lg:px-0
              shadow-md lg:shadow-none
              
              text-center
              w-screen lg:w-full
              flex 
              flex-col lg:flex-row
              justify-center
              items-start
              space-y-5 lg:space-y-0
              bg-white`
            }`}
          >
            {navbarItems.map((navItem) => (
              <li key={navItem.item} className="list-none text-left">
                <Link href={`${navItem.path}`}>
                  <a
                    className={
                      router.pathname === `${navItem.path}`
                        ? "border-blue-500 text-gray-800 text-lg border-b-2 mx-1.5 sm:mx-6 transition ease-in duration-300"
                        : "text-gray-800 text-lg  mx-1.5 sm:mx-6"
                    }
                  >
                    {navItem.item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-5 ">
          {/* cart */}
          <div
            ref={dropdown}
            className="flex justify-center items-center md:block"
          >
            <Link href="#">
              <a className="relative text-gray-700 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>

                <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
              </a>
            </Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setShowNav(!showNav)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
