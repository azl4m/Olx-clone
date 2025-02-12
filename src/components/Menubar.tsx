import { useProductContext } from "../context/ProductContext";
import { useState } from "react";

const Menubar = () => {
  const { setMenu } = useProductContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex shadow-sm h-12 items-center px-4 bg-white">
        <h1 onClick={() => setMenu("Shirt")} className="cursor-pointer mx-3">Shirt</h1>
        <h1 onClick={() => setMenu("Jacket")} className="cursor-pointer mx-3">Jacket</h1>
        <h1 onClick={() => setMenu("Mobilephones")} className="cursor-pointer mx-3">Mobilephones</h1>
        <h1 onClick={() => setMenu("House")} className="cursor-pointer mx-3">House</h1>
        <h1 onClick={() => setMenu("Scooters")} className="cursor-pointer mx-3">Scooters</h1>
        <h1 onClick={() => setMenu("Bike")} className="cursor-pointer mx-3">Bike</h1>
        <h1 onClick={() => setMenu("Apartments")} className="cursor-pointer mx-3">Apartments</h1>
      </div>

      <div className="md:hidden flex overflow-x-auto shadow-sm h-12 items-center px-4 bg-white">
        <h1 onClick={() => setMenu("Shirt")} className="cursor-pointer px-3 whitespace-nowrap">Shirt</h1>
        <h1 onClick={() => setMenu("Jacket")} className="cursor-pointer px-3 whitespace-nowrap">Jacket</h1>
        <h1 onClick={() => setMenu("Mobilephones")} className="cursor-pointer px-3 whitespace-nowrap">Mobilephones</h1>
        <h1 onClick={() => setMenu("House")} className="cursor-pointer px-3 whitespace-nowrap">House</h1>
        <h1 onClick={() => setMenu("Scooters")} className="cursor-pointer px-3 whitespace-nowrap">Scooters</h1>
        <h1 onClick={() => setMenu("Bike")} className="cursor-pointer px-3 whitespace-nowrap">Bike</h1>
        <h1 onClick={() => setMenu("Apartments")} className="cursor-pointer px-3 whitespace-nowrap">Apartments</h1>
      </div>
    </>
  );
};

export default Menubar;
