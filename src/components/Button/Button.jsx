"use client";

import { Button } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { customTheme } from "./customTheme";

export default function CustomButton({ name }) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button className='py-0' color="success" onClick={() => console.log("Log")}>
        {name}
      </Button>
    </Flowbite>
  );
}

