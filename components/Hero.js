import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-28 h-[70vh] pt-16">
      <div className="flex items-center justify-center gap-10 ">
        <div className="self-start space-y-10">
          <h1 className="font-bold ">
            <p className="text-6xl tracking-wider leading-tight">
              Technology at your fingertips.
            </p>
            <p className="text-xl mt-5 text-gray-600 leading-loose">
              Control your creative output with the tilt, pan, roll, vibrato,
              tap, click of your hand.
            </p>
          </h1>
          <div className="mt-10  flex justify-between items-center md:mt-8">
            <Link href="#">
              <a
                href="#"
                className="inline-flex duration-700 items-center rounded-full justify-center  px-10 mr-6 transition-colors  ease-in-out text-xl font-medium py-3 border-transparent bg-[#ff5f49] hover:bg-white border hover:border-black"
              >
                For Music
              </a>
            </Link>
            <Link href="#">
              <a
                href="#"
                className="inline-flex duration-700 items-center rounded-full justify-center  px-10 mr-6 transition-colors  ease-in-out text-xl font-medium py-3 border-transparent bg-[#ff5f49] hover:bg-white border hover:border-black"
              >
                For Work
              </a>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="w-[40vw] h-[58vh] border relative rounded-md overflow-hidden">
            <Image src="/images/hero_img.jpg" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
