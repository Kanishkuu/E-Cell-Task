import React from 'react';
import Navbar from '../components/Navbar';
import personal from '../assets/personal.jpeg'; 
import backgroundImage from '../assets/squid.jpg'; 
import instaLogo from '../assets/instagram.png'; 

function SecondPage() {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center bg-fixed items-start" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar style={{ fontFamily: "YourCustomFont" }} />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-3 py-10 text-white">
        {/* Instagram Card */}
        <div className="w-full max-w-xs flex justify-center items-center bg-gray-500 bg-opacity-70 rounded-lg shadow-lg p-6 mt-24">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={instaLogo}
              alt="Instagram Logo"
              className="w-16 h-16 object-contain" 
            />
            <h3 className="text-2xl font-bold">Kanishk Kabra</h3>
            <p className="text-lg">@kanishkkk.k</p>
            <a
              href="https://www.instagram.com/kanishkkk.k/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#FF4081] text-white font-bold text-lg rounded-lg shadow-lg hover:bg-[#FF0079] transition-all"
            >
              Follow Me on Instagram
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="w-full max-w-xs mt-12"> 
          <div
            className="w-full h-80 rounded-lg shadow-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${personal})`,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 p-6 mt-12">
              <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "YourCustomFont" }}>Kanishk Kabra</h2>
              <p className="text-lg">Registration Number: 20233154</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
