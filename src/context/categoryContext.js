"use client";

import { createContext, useState } from "react";
import { listData } from "../components/buttonGroup/dataButtonGroup";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState('/products?limit=100')

  const list = listData.map(c => {
    if (c.category === categories) {
      return categories
    }
  })
  return (
    <CategoryContext.Provider value={{ categories, setCategories, list }}>
      {children}
    </CategoryContext.Provider>
  );
};