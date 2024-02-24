import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-10 cursor-pointer"
          onClick={toggleMenuhandler}
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
        />
        <img
          className="h-11"
          alt="logo"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/240_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>
      <div className="col-span-10 p-1 m-1">
        <input
          type="text"
          className="w-1/2 text-center px-10 border border-gray-400 p-1 my-1 rounded-l-2xl"
        />
        <button className="border border-gray-400 p-1 my-1 rounded-r-2xl bg-gray-300">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          src="data:image/png;base64,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"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
