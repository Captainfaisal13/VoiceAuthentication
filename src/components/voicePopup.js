import React, { useContext } from "react";
import { AppContext } from "../context";

const VoicePopup = () => {
  const { setShowPopup } = useContext(AppContext);
  return (
    <div className="absolute w-full h-full top-0 left-0 flex  justify-center align-middle p-2 sm:p-20 lg:p-40">
      <div className="my-auto bg-[#00073E] text-white px-20 py-8 flex flex-col gap-3 rounded-md drop-shadow-xl">
        <h1 className="text-3xl font-bold text-center">Listening....</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero delectus
          velit minima consequuntur amet fugit aliquam, provident ipsum
          reprehenderit officia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illum, natus? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Iste modi, assumenda odio doloribus
          perferendis cupiditate libero error, obcaecati non accusamus adipisci
          quasi quidem quam! Nobis magnam praesentium ad. Maxime, cupiditate.
        </p>
        <div className="text-center">
          <button className="bg-white p-2 rounded-md text-xs text-black font-semibold">
            start
          </button>
        </div>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-[#F4098A] hover:bg-[#f40992] ease-in-out text-xs py-4 rounded-md font-bold mt-2"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default VoicePopup;
