import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4    md:px-6 md:py-8 bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between ">
        <Link href="/">
          <a className="flex relative">
            <Image width={180} height={60} src="/images/injestic_logo.png" />
          </a>
        </Link>
        <span className="block text-lg  sm:text-center text-gray-400 ">
          © 2022
          <Link href="https://waleedo.com">
            <a target="_blank" className="hover:underline ml-3">
              Waleedo
            </a>
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <Link href="/contact">
              <a className="text-lg hover:underline text-gray-400">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-lg hover:underline text-gray-400">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/privacyPolicy">
              <a className="mr-4 text-lg hover:underline md:mr-6 text-gray-400">
                Privacy Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a className="mr-4 text-lg hover:underline md:mr-6 text-gray-400">
                Terms
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {/* <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" /> */}
    </footer>
  );
}
