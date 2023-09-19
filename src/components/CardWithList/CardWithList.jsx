"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "src/context/cartContext.js";
import Link from "next/link";

export default function CardWithList() {
  const { cart } = useContext(CartContext);

  const cartlist = cart.map(c => {
    return (
      <li className="py-3 sm:py-4" key={c.id}>
            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-16">
                <Image
                  alt="image"
                  className='rounded-md'
                  src={c.image}
                  fill
                  sizes="100vh"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  {c.name}
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                Quantity: {c.quantityProduct}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                ${c.totalPrice.toFixed(2)}
              </div>
            </div>
          </li>
    )
  })

  return (
    <Card style={{ maxHeight: '400px', cursor: 'default'}} className="dark:bg-bgDark overflow-auto w-80 md:w-96">
      <div className="mb-4 flex items-center justify-between">
        <h5
          style={{ fontSize: "15px", marginRight: '30px' }}
          className="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Recently Added Products
        </h5>
        <Link
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          href="/cart"
        >
          <p style={{color: 'var(--color-primary'}}>View all</p>
        </Link>
      </div>
      <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {cart.length === 0 ?
          <div style={{height: '40px',  fontWeight: '700', textAlign: 'center', color: 'var(--color-primary'}}>Your Shopping Cart Is Empty</div> 
          :cartlist}
        </ul>
      </div>
    </Card>
  );
}
