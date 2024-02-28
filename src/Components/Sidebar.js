// Sidebar.js
import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 flex flex-col bg-white h-screen">
      <ul className="text-lg">
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          <svg
            className="w-8 h-8 text-gray-600 inline mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          Home
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          <svg
            className="w-8 h-8 text-gray-600 inline mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
          Shorts
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          <svg
            className="w-8 h-8 text-gray-600 inline mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 10l-9.5 9.5-5-5L3 15"
            ></path>
          </svg>
          Videos
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          <svg
            className="w-8 h-8 text-gray-600 inline mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
          Live
        </li>
      </ul>
      <h1 className="font-bold pt-5 text-xl">Subscriptions</h1>
      <ul className="text-lg">
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          Music
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          Sports
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          Gaming
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          Movies
        </li>
      </ul>
      <h1 className="font-bold pt-5 text-xl">Watch Later</h1>
      <ul className="text-lg">
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          Music
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          Sports
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          Gaming
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
