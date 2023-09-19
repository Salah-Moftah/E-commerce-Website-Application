"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useContext, useState, useEffect } from "react";
import { CategoryContext } from "src/context/categoryContext.js";

export default function ProductsContent() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categories } = useContext(CategoryContext);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`https://dummyjson.com${categories}`);
      const result = await response.json();
      const product = result.products;
      setProducts(product);
      setLoading(false);
    }
    fetchProducts();
  }, [categories]);

  return (
    <>
      {loading ? (
        <div style={{height: 'calc(100vh - 242px)'}} className="flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className={styles.mainContainer}>
          {products.map((p) => (
            <div key={p.id} className={`dark:bg-bgDark dark:hover:bg-gray-600 dark:hover:text-white hover:bg-gray-100 ${styles.post}`}>
              <Link href={`/products/${p.id}`} passHref>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    fill={true}
                    src={`${p.thumbnail}`}
                    alt="Photo"
                    priority
                    sizes="100vh"
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.title}>{p.title}</h1>
                  <h1 className={styles.price}>
                    $
                    {(p.price - p.price * (p.discountPercentage / 100)).toFixed(
                      2
                    )}
                  </h1>
                  <div>
                    <span className={styles.priceOriginal}>
                      {p.price?.toFixed(2)}
                    </span>
                    <span className={styles.discount}>
                      {p.discountPercentage}% OFF
                    </span>
                  </div>
                  <p className={styles.text}>{p.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
