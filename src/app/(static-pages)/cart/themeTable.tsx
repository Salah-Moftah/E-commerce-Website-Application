import type { CustomFlowbiteTheme } from 'flowbite-react';

export const themeTable: CustomFlowbiteTheme = {
  table: {
    "row": {
      "striped": "odd:bg-white even:bg-gray-100 odd:dark:bg-gray-800 even:dark:bg-gray-800"
    },
    "head": {
      "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      "cell": {
        "base": "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-100 dark:bg-gray-700 px-6 py-3"
      }
    },
    "root": {
      "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      "shadow": "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
      "wrapper": "relative overflow-auto shadow-md"
    },
  }
};