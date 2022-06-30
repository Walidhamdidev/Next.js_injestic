import { useState } from "react";

export function OrderTrackingCom() {
  const [track, setTrack] = useState("");

  const handleChange = ({ currentTarget }) => {
    const value = currentTarget.value;

    setTrack(value);
  };

  const doTrack = () => {
    if (track === "") {
      alert("Enter your number.");
      return;
    }

    YQV5.trackSingle({
      YQ_ContainerId: "YQContainer",
      YQ_Height: 560,
      YQ_Fc: "0",
      YQ_Lang: "en",
      YQ_Num: track,
    });
  };

  return (
    <div className="leading-10 text-lg p-8 rounded-md w-full h-[90vh] flex flex-col justify-center items-center">
      <h2 className="text-gray-600 font-bold text-2xl">
        Please enter you tracking number below.
      </h2>
      <span className="font-normal">
        If your tracking number doesn't work feel free to contact us at
        support@injestic.com.
      </span>

      <input
        className="bg-gray-50 outline-none  border-yellow-200 rounded-full ml-1 mt-10 block px-10 py-2"
        type="text"
        autoFocus
        value={track}
        onChange={(e) => handleChange(e)}
        placeholder="search..."
      />

      <div className="inline-block align-bottom mt-10 text-sm">
        <button
          onClick={(e) => doTrack(e)}
          className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
        >
          <i className="fa fa-shopping-cart -ml-2 mr-2" aria-hidden="true"></i>
          Track
        </button>
      </div>
    </div>
  );
}
