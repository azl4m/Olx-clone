import olx from "../assets/olx.png";
import lens from "../assets/lens.png";
import arrow from "../assets/arrow.png";
import search from "../assets/search.png";
import Login from "./Login";
import { useState } from "react";
import { useProductContext } from "../context/ProductContext";

const Navbar = () => {
  const { setSearch } = useProductContext();
  const [loginPop, setLoginPop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between p-4 bg-slate-100 shadow-md">
        <div className="flex items-center">
          <img src={olx} className="w-11 h-9" alt="OLX Logo" />
        </div>

        <div className="hidden md:flex items-center space-x-4 flex-grow mx-4">
          <div className="bg-white flex border-2 border-black p-2 rounded-lg w-64">
            <img src={lens} className="w-6 h-5 mt-1" alt="Location" />
            <input
              type="text"
              placeholder="Location"
              className="ml-3 outline-none w-full"
            />
            <img src={arrow} className="w-8 h-7" alt="Arrow" />
          </div>

          <div className="bg-white flex items-center border-2 border-black p-2 rounded-lg w-full max-w-md">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Find Cars, Mobile Phones, and More"
              className="w-full outline-none"
            />
            <img src={search} className="w-6 h-6" alt="Search" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center cursor-pointer">
            <h1 className="font-semibold">ENGLISH</h1>
            <img src={arrow} className="w-6 h-6 ml-1" alt="Arrow" />
          </div>

          <div
            onClick={() => setLoginPop(!loginPop)}
            className="hidden md:flex cursor-pointer underline hover:no-underline"
          >
            <h1 className="font-bold text-lg">Login</h1>
          </div>

          <div className="hidden md:flex items-center px-4 py-2 border border-yellow-500 rounded-full cursor-pointer">
            <h1 className="font-bold text-lg">+ SELL</h1>
          </div>

          <button
            className="md:hidden p-2 border rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col p-4 bg-white shadow-md">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones, and More"
              className="p-2 border rounded-md"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              onClick={() => setLoginPop(!loginPop)}
              className="cursor-pointer underline hover:no-underline"
            >
              <h1 className="font-bold text-lg">Login</h1>
            </div>
            <div className="border border-yellow-500 rounded-full px-4 py-2 cursor-pointer">
              <h1 className="font-bold text-lg">+ SELL</h1>
            </div>
          </div>
        </div>
      )}

      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  );
};

export default Navbar;
