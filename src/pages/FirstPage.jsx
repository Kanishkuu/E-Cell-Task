import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import logo from '../assets/ecellLogo.png';

function FirstPage() {
  const [arr, setArr] = useState([]);

  const handleClick = (index) => {
    if (!arr.includes(index)) {
      setArr([...arr, index]);
    }

    if (index === 8) {
      let idx = 0;

      const intervalId = setInterval(() => {
        if (idx < arr.length) {
          setArr((prev) => prev.filter((_, i) => i !== 0));
          idx++;
        } else {
          clearInterval(intervalId);
        }
      },300);
    }
  };

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-center items-center gap-4 p-3 py-10">
        {/* Gradient */}
        <div className="w-80 h-80 md:w-full md:col-span-2 lg:w-80 order-3 md:order-1">
          <div className="w-full h-full rounded-lg shadow-lg bg-gradient-to-br from-[#3300FF] to-[#FA00FF]"></div>
        </div>

        {/* Image */}
        <div className="w-80 h-80 md:w-full md:h-80 lg:w-80 order-2 md:order-1 md:col-span-1">
          <div className="w-full h-full rounded-lg border-2 border-black overflow-hidden">
            <img src={logo} alt="Description" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Grid */}
        <div className="w-80 h-80 md:w-full md:h-80 lg:w-80 order-1 md:order-2 md:col-span-1">
          <div
            className="w-full h-full rounded-lg bg-gray-200 overflow-hidden"
            style={{ boxShadow: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.5)' }}
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full p-5">
              {Array.from({ length: 9 }, (_, i) => (
                <div
                  key={i}
                  className={`${
                    arr.includes(i) || i === 8 ? 'bg-[#800000]' : 'bg-[#034694]'
                  } text-white flex justify-center items-center rounded-lg p-2 cursor-pointer`}
                  onClick={() => handleClick(i)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;