"use client";
import { Table } from "flowbite-react";
import { useContext, useState } from "react";
import { CartContext } from "src/context/cartContext.js";
import Link from "next/link";
import QuantityCart from "src/components/Quantity/quantityCart";
import { Button, Modal } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import { customThemeDelete } from "src/components/Button/customThemeDelete";
import { themeTable } from "./themeTable";
import Image from "next/image";
import shopping_cart from "public/images/shopping_cart.png";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const cartDetails = cart.map((c) => {
    return (
      <Table.Row
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
        key={c.id}
      >
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {c.name}
        </Table.Cell>
        <Table.Cell>${new Intl.NumberFormat().format(c.unitPrice)}</Table.Cell>
        <Table.Cell>
          <div>
            <QuantityCart
              quantity={c.quantityProduct}
              id={c.id}
              cart={cart}
              setCart={setCart}
            />
          </div>
        </Table.Cell>
        <Table.Cell
          style={{ color: "var(--color-primary)", fontWeight: "600" }}
        >
          ${new Intl.NumberFormat().format(c.totalPrice?.toFixed(2))}
        </Table.Cell>
        <Table.Cell>
          <Link
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 hover:text-red-700"
            href="#"
          >
            <p
              style={{ fontWeight: "600" }}
              onClick={() => {
                const deleteItem = cart.filter((d) => {
                  return d.id !== c.id;
                });
                setCart(deleteItem);
                localStorage.setItem("cart", JSON.stringify(deleteItem));
              }}
            >
              Delete
            </p>
          </Link>
        </Table.Cell>
      </Table.Row>
    );
  });

  const totalPrice = cart
    .map((t) => t.totalPrice)
    .reduce((acc, curr) => acc + curr, 0);

  function handleDeleteAll() {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <div style={{ maxWidth: "300px" }}>
          <div>
            <Image
              src={shopping_cart}
              width={200}
              height={200}
              priority
              alt="Your Shopping Cart Is Empty"
            />
          </div>
          <p className="mb-3">Your Shopping Cart Is Empty</p>
          <Link href="/products">
            <Button color="success" className="w-full">
              Go Shopping Now
            </Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ minHeight: "calc(100vh - (160px))" }}>
        <Flowbite theme={{ theme: themeTable }}>
          <Table striped>
            <Table.Head className="bg-gray-100">
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Unit Price</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell>Total Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Actions</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">{cartDetails}</Table.Body>
          </Table>
          <div className="shadow-md flex justify-between bg-gray-100 mt-7 dark:bg-gray-700 p-4 rounded-lg items-end">
            <Flowbite theme={{ theme: customThemeDelete }}>
              <Button
                onClick={() => props.setOpenModal("dismissible")}
                color="gray"
                style={{ fontWeight: "600" }}
              >
                <MdDelete className="mr-2 h-5 w-5" />
                Clear Cart
              </Button>
            </Flowbite>
            <Modal
              dismissible
              show={props.openModal === "dismissible"}
              onClose={() => props.setOpenModal(undefined)}
            >
              <Modal.Header>Delete Cart</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete the shopping cart?
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => {
                    handleDeleteAll();
                    props.setOpenModal(undefined);
                  }}
                  color="failure"
                >
                  Delete
                </Button>
                <Button
                  color="gray"
                  onClick={() => props.setOpenModal(undefined)}
                >
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="w-44 md:w-56" style={{ fontWeight: "600" }}>
              <div className="text-xs md:text-base" style={{ marginBottom: "8px" }}>
                Total <span>({cart.length} iteams): </span>
                <span
                  className="text-sm md:text-lg"
                  style={{ color: "var(--color-primary)", fontWeight: "700" }}
                >
                  ${new Intl.NumberFormat().format(totalPrice.toFixed(2))}
                </span>
              </div>
              <Button
                className="w-full"
                style={{ fontSize: "29px" }}
                color="success"
              >
                Check Out
              </Button>
            </div>
          </div>
        </Flowbite>
      </div>
    );
  }
}
