"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Price from "./price";
import Quantity from "src/components/Quantity/quantity.jsx";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "src/context/cartContext";
import { Flowbite } from "flowbite-react";
import { customTheme } from "src/components/Button/customTheme";

export default function ContentPost({ postId }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch(`https://dummyjson.com/products/${postId}`);
      const result = await response.json();
      setProduct(result);
    }
    fetchTodo();
  }, [postId]);

  const images = product.images?.map((i) => {
    return (
      <div className="relative w-full h-full" key={product.images.indexOf(i)}>
        <Image
          className={styles.image}
          src={`${i}`}
          alt="post image"
          fill
          quality={100}
          sizes="100vh"
          priority
        />
      </div>
    );
  });

  const price = Number(
    (
      product.price -
      product.price * (product.discountPercentage / 100)
    ).toFixed(2)
  );

  const [quantity, setQuantity] = useState(1);

  const { cart, setCart } = useContext(CartContext);

  function handleCart() {
    const editCart = cart.map((p) => {
      if (product.id === p.id) {
        return {
          ...p,
          quantityProduct: quantity,
          unitPrice: price,
          totalPrice: price * quantity,
        };
      } else {
        return p;
      }
    });
    const newProduct = {
      id: product.id,
      name: product.title,
      quantityProduct: quantity,
      unitPrice: price,
      totalPrice: price * quantity,
      image: product.thumbnail,
    };
    if (!editCart.some((p) => p.id === product.id)) {
      editCart.push(newProduct);
    }
    setCart(editCart);
    localStorage.setItem("cart", JSON.stringify(editCart));
  }

  return (
    <div
      style={{
        gap: "26px",
        border: "2px solid #bbb",
        borderRadius: "15px",
        padding: "15px",
      }}
      className="flex flex-wrap lg:flex-nowrap"
    >
      <div className={`${styles.imageContainer} w-full lg:w-2/4`}>
        <Carousel>{images}</Carousel>
      </div>
      <div style={{ padding: "15px" }}>
        <div className="postInfo">
          <h2
            style={{
              fontWeight: "700",
              fontSize: "20px",
              marginBottom: "25px",
              marginTop: "15px",
            }}
          >
            {product.title}
          </h2>
          <p style={{ marginBottom: "20px" }}>{product.description}</p>
          <div className="flex gap-4" style={{ marginBottom: "20px" }}>
            <span>
              <span style={{ color: "var(--color-primary)" }}>Rating: </span>
              {product.rating}
            </span>
            <span style={{ color: "var(--color-primary)" }}>|</span>
            <span>
              <span style={{ color: "var(--color-primary)" }}>Brand: </span>
              {product.brand}
            </span>
            <span style={{ color: "var(--color-primary)" }}>|</span>
            <span>
              <span style={{ color: "var(--color-primary)" }}>Category: </span>
              {product.category}
            </span>
          </div>
        </div>
        <Price product={product} />
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <span>Quantity: </span>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div className="flex gap-2">
          <Flowbite theme={{ theme: customTheme }}>
            <Button color="gray" onClick={handleCart}>
              <HiShoppingCart className="mr-2 h-5 w-5" />
              <p>Add To Cart</p>
            </Button>
            <Button color="success">
              <p>Buy Now</p>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Flowbite>
        </div>
      </div>
    </div>
  );
}
