"use client";

import { useContext } from "react";
import { listData } from "./dataButtonGroup";
import { CategoryContext } from "src/context/categoryContext.js";

export default function ButtonGroup() {
  const { setCategories } = useContext(CategoryContext);

  const category = listData.map((c) => {
    return (
      <div className="inline-flex rounded-md shadow-sm" role="group" key={c.id}>
        <button
          onClick={() => {
            setCategories(`${c.request}`);
          }}
          type="button"
          className={`${c.border} px-3 md:px-6 py-2 text-xs md:text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-bgDark focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary dark:bg-bgDark dark:border-gray-600 dark:text-white  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary dark:focus:text-white`}
        >
          {c.category[0].toUpperCase() + c.category.substring(1)}
        </button>
      </div>
    );
  });
  return <>{category}</>;
}


