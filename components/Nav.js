import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <header className="border-b  z-20 bg-[#f0f0f0]">
      <div
        className={`
      flex items-center 
      justify-between 
      max-w-6xl py-5 px-10 
      mx-auto 
      lg:max-w-screen-xl`}
      >
        {" "}
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-2xl pt-1 font-bold text-[#1e1a1a] uppercase">
              Injestic
            </span>
          </a>
        </Link>
        <ul className="flex font-sans text-xl">
          <li className="mr-16">
            <Link href="#">
              <a
                href="#"
                className="text-[#1e1a1a]  pb-1   duration-700  border-b-[1px] border-transparent hover:text-gray-800  hover:border-[#1e1a1a] transition-all ease-in "
              >
                Home
              </a>
            </Link>
          </li>
          <li className="mr-16">
            <Link href="#">
              <a
                href="#"
                className="text-[#1e1a1a] pb-1  duration-700  border-b-[1px] border-transparent hover:text-gray-800  hover:border-[#1e1a1a] transition-all ease-in"
              >
                Store
              </a>
            </Link>
          </li>
          <li className="mr-16">
            <Link href="#">
              <a
                href="#"
                className="text-[#1e1a1a] pb-1  duration-700  border-b-[1px] border-transparent hover:text-gray-800  hover:border-[#1e1a1a] transition-all ease-in"
              >
                About
              </a>
            </Link>
          </li>
          <li className="mr-16">
            <Link href="#">
              <a
                href="#"
                className="text-[#1e1a1a] pb-1  duration-700  border-b-[1px] border-transparent hover:text-gray-800  hover:border-[#1e1a1a] transition-all ease-in"
              >
                Account
              </a>
            </Link>
          </li>
          <Link href={""}>
            <a
              className="text-md  cursor-pointer relative w-7 h-7"
              onClick={() => setCartOpen(!cartOpen)}
              href={""}
            >
              <Image layout="fill" src="/images/shopping_cart.svg" />
              {cartQuantity > 0 && (
                <div className="absolute -top-3 -right-3 bg-[#1e1a1a] w-5 h-5 text-white rounded-full flex justify-center items-center">
                  <p className="font-bold text-sm">{cartQuantity}</p>
                </div>
              )}
            </a>
          </Link>
        </ul>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
}
