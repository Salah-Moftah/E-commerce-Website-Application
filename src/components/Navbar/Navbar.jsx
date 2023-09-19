"use client";

import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import CardWithList from "../CardWithList/CardWithList";
import { links } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ThemeContextMode } from "src/context/ThemeContext";
import { CartContext } from "../../context/cartContext";
import { themenavbar } from "./themeNavbar";
import { Flowbite } from 'flowbite-react';
import { Dropdown, Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {

  const manu = links.map((link) => {
    return (
      <Navbar.Link href={link.url} key={link.id} style={{ fontSize: "16px", fontWeight: "500" }}>
        {link.title}
      </Navbar.Link>
    );
  });
  const [show, setShow] = useState("none");

  const { mode } = useContext(ThemeContextMode);
  const { cart } = useContext(CartContext);

  return (
    <Flowbite theme={{ theme: themenavbar }}>
      <Navbar
        fluid
        rounded
        style={{marginBottom: "20px" }}
        className="shadow-md"
      >
        <Navbar.Brand href="/">
          <span style={{ fontSize: "20px", color: mode === 'dark' ? '#53c28b': '#53c28b', fontWeight: '800'}} className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MOSHOP
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-2 items-center">
          <div
              className="relative inline-flex iconShopping cursor-pointer"
              onClick={() => {
                setShow(show === "none" ? "block" : "none");
              }}
            >
              <div
                style={{ display: show === "none" ? "none" : "block" }}
                className="cardWithList"
              
              >
                <CardWithList />
              </div>
              <FontAwesomeIcon
                style={{ color: mode === "dark" ? "#bbb" : "#53c28b", fontSize: '19px' }}
                className="CartShopping"
                icon={faCartShopping}
              />
              <div style={{ backgroundColor: mode === "dark" ? "#bbb" : "#53c28b", color: mode === "dark" ? "#111" : "#fff" }} className="absolute cardQuantity">{cart.length}</div>
          </div>
          <Dropdown
            inline
          >
            
            <Dropdown.Header>
              <span className="block text-sm">
                Salah Moftah
              </span>
              <span className="block truncate text-sm font-medium">
                name@gamil.com
              </span>
            </Dropdown.Header>
              <div className="flex justify-between items-center p-3">
                <div style={{cursor: 'pointer'}}>
                  Sign out
                </div>
                <div>
                  <DarkModeToggle />
                </div>
              </div>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {manu}
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  )
}
