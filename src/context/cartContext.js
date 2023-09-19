"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      let cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
      setCart(cartLocalStorage);
    } else {
      let cartLocalStorage = [];
      setCart(cartLocalStorage);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
