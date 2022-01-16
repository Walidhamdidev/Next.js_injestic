import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 h-[70vh] pt-24 ">
      <div className="flex items-center justify-center gap-10">
        <div>
          <h1 className="font-bold  space-y-5 w-96 ">
            <p className="text-[2.5rem] tracking-wider leading-tight">
              Technology at your fingertips.
            </p>
            <p className=" text-gray-600 leading-loose">
              Control your creative output with the tilt, pan, roll, vibrato,
              tap, click of your hand.
            </p>
          </h1>
          <div className="mt-5  flex justify-between items-center md:mt-8">
            <Link href="#">
              <a
                href="#"
                className="inline-flex items-center rounded-full justify-center  px-10 mr-6 transition-colors  ease-in-out text-xl font-medium py-3 border-transparent bg-[#ff5f49] hover:bg-white border hover:border-black"
              >
                For Music
              </a>
            </Link>
            <Link href="#">
              <a
                href="#"
                className="inline-flex items-center rounded-full justify-center  px-10 mr-6 transition-colors  ease-in-out text-xl font-medium py-3 border-transparent bg-[#ff5f49] hover:bg-white border hover:border-black"
              >
                For Work
              </a>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="w-[44vw] h-[44vh] border relative rounded-md overflow-hidden">
            <Image src="/images/hero_img.jpg" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
