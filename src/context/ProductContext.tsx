import React, { createContext, useContext, useState, useEffect } from "react";

type ProductContextType = {
  products: any[];
  search: string;
  menu: string;
  setSearch: (search: string) => void;
  setMenu: (menu: string) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, search, menu, setSearch, setMenu }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within an ProductContext");
  }
  return context;
};
