import React from "react";

function NotificationBanner() {
  return (
    <div className="sticky top-0 bg-[#000000c0] text-white z-50">
      <div
        className=" flex items-center 
      justify-between 
      max-w-6xl py-2 px-10 
      mx-auto 
      lg:max-w-screen-xl"
      >
        <div className="flex items-center space-x-7 text-xl ">
          <p className="tracking-widest">WINTER SALE</p>
          <p>-</p>
          <p className="tracking-widest	">Limited Time Only!</p>
        </div>
        <div className="flex items-center  space-x-3">
          <p className="space-x-3 mr-5">
            <span>1 DAYS </span>
            <span>16 HRS</span>
            <span>13 MIN </span>
            <span>16 SEC</span>
          </p>
          <button className="rounded-full px-3 py-1 transition-all duration-300  bg-[#ff5f49] hover:bg-white  text-black">
            For Music
          </button>
          <button className="rounded-full px-3 py-1 transition-all duration-300  bg-[#ff5f49] hover:bg-white  text-black">
            For Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationBanner;
