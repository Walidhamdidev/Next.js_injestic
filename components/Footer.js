import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4    md:px-6 md:py-8 bg-gray-800 text-center">
      <h3 className="text-2xl mb-5 text-gray-400">Customer Care</h3>
      <div className="sm:flex sm:items-center sm:justify-center">
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <Link href="/about">
              <a className="text-lg hover:underline md:mr-6 text-gray-400">
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-lg hover:underline md:mr-6 text-gray-400">
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/allProducts">
              <a className="text-lg hover:underline md:mr-6 text-gray-400">
                All products
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a className="text-lg hover:underline md:mr-6 text-gray-400">
                FAQ
              </a>
            </Link>
          </li>

          <li>
            <Link href="/refund">
              <a className="mr-4 text-lg hover:underline md:mr-6 text-gray-400">
                Refund Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shipping">
              <a className="mr-4 text-lg hover:underline md:mr-6 text-gray-400">
                Shipping Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a className="mr-4 text-lg hover:underline md:mr-6 text-gray-400">
                Privacy Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a className="mr-4 text-lg hover:underline md:mr-6 text-gray-400">
                Terms of Service
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />

      <div className="flex items-center px-10">
        {/* <Link href="/">
          <a className="flex relative ">
            <Image width={180} height={60} src="/images/injestic_logo.png" />
          </a>
        </Link> */}
        <span className="block text-lg m-auto  sm:text-center text-gray-400 ">
          © {new Date().getFullYear().toString()}
          <Link href="https://waleedo.com">
            <a target="_blank" className="hover:underline ml-3">
              Waleedo
            </a>
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
