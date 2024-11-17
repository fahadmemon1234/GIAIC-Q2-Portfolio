"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/utility/cartContext";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
}

const DropdownMenu = () => {
  debugger;
  const { cartItems } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const allProducts = response.data.products;
        setProducts(allProducts);
        debugger;
        const total = cartItems.reduce((acc, itemId, finalPrice) => {
          const product = allProducts.find((prod: any) => prod.id === itemId);
          return product ? acc + product.price : acc;
        }, 0);

        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [cartItems]);

  let totalFinalPrice = 0;

  return (
    <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
      <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
        {cartItems.length > 0 ? (
          cartItems.slice(0, 3).map((itemId) => {
            const product = products.find((prod) => prod.id === itemId);

            if (!product) return null;
            const finalPrice = (
              product.price *
              (1 - product.discountPercentage / 100)
            ).toFixed(2);

            totalFinalPrice += parseFloat(finalPrice);

            return (
              <li key={product.id} className="ms-0">
                <Link
                  className="flex items-center justify-between py-1.5 px-4"
                  href={`/product-detail-one/${product.id}`}
                >
                  <span className="flex items-center">
                    <Image
                      src={product.thumbnail}
                      className="rounded shadow dark:shadow-gray-800"
                      width={36}
                      height={36}
                      alt={product.title}
                    />
                    <span className="ms-3">
                      <span className="block font-semibold">
                        {product.title}
                      </span>
                    </span>
                  </span>
                  <span className="font-semibold">${finalPrice}</span>
                </Link>
              </li>
            );
          })
        ) : (
          <li className="ms-0">
            <span className="block py-2 px-4">Your cart is empty.</span>
          </li>
        )}

        <li className="border-t border-gray-100 dark:border-gray-800 my-2 ms-0"></li>

        <li className="flex items-center justify-between py-1.5 px-4 ms-0">
          <h6 className="font-semibold mb-0">Total($):</h6>
          <h6 className="font-semibold mb-0">${totalFinalPrice}</h6>
        </li>

        <li className="py-1.5 px-4 ms-0">
          <span className="text-center block">
            <Link
              className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white me-1"
              href="/Component/ShopCart"
            >
              View Cart
            </Link>
            <Link
              className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white"
              href="/product-detail-one/2"
            >
              Checkout
            </Link>
          </span>
          <p className="text-sm text-slate-400 mt-1">*T&amp;C Apply</p>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
