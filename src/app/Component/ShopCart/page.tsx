"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useCart } from "@/app/utility/cartContext";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  quantity: number;
}

const ShopCart = () => {
  const { cartItems } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: string) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const allProducts = response.data.products;
        setProducts(allProducts);

        const total = cartItems.reduce((acc, itemId) => {
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

  const TAX_RATE = 0.1;

  const subtotal = cartItems.reduce((acc, itemId) => {
    const product = products.find((prod) => prod.id === itemId);
    if (!product) return acc;

    const finalPrice = product.price * (1 - product.discountPercentage / 100);
    const itemTotal = finalPrice * quantity;
    return acc + itemTotal;
  }, 0);

  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  return (
    <>
      <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <h3 className="text-3xl leading-normal font-semibold">SHOPCART</h3>
          </div>

          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 flex items-center">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                <Link href="/">Cartzio</Link>
              </li>

              <li className="inline-block px-[10px] text-[16px] text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <FaChevronRight size={16} />
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold text-orange-500"
                aria-current="page"
              >
                SHOPCART
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid lg:grid-cols-1">
            <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
              <table className="w-full text-start">
                <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="p-4 w-4"></th>
                    <th scope="col" className="text-start p-4 min-w-[220px]">
                      Product
                    </th>
                    <th scope="col" className="p-4 w-24 min-w-[100px]">
                      Price
                    </th>
                    <th scope="col" className="p-4 w-56 min-w-[220px]">
                      Qty
                    </th>
                    <th scope="col" className="p-4 w-24 min-w-[100px]">
                      Total($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.slice(0, 3).map((itemId) => {
                      const product = products.find(
                        (prod) => prod.id === itemId
                      );
                      if (!product) return null;

                      const finalPrice =
                        product.price * (1 - product.discountPercentage / 100);

                      return (
                        <tr
                          key={product.id}
                          className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800"
                        >
                          <td className="p-4">
                            <a href="/shop-cart">
                              <i className="mdi mdi-window-close text-red-600"></i>
                            </a>
                          </td>

                          <td className="p-4">
                            <span className="flex items-center">
                              <Image
                                src={product.thumbnail}
                                alt={product.title}
                                width={48}
                                height={48}
                                className="rounded shadow dark:shadow-gray-800"
                              />
                              <span className="ms-3">
                                <span className="block font-semibold">
                                  {product.title}
                                </span>
                              </span>
                            </span>
                          </td>

                          <td className="p-4 text-center">
                            ${finalPrice.toFixed(2)}
                          </td>

                          <td className="p-4 text-center">
                            <div className="qty-icons">
                              <button
                                onClick={() =>
                                  handleQuantityChange("decrement")
                                }
                                className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white minus"
                              >
                                -
                              </button>
                              <input
                                min="0"
                                name="quantity"
                                type="number"
                                readOnly
                                className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 text-orange-500 pointer-events-none w-16 ps-4 quantity mx-1"
                                value={quantity}
                                onChange={(e) =>
                                  setQuantity(Number(e.target.value))
                                }
                              />
                              <button
                                onClick={() =>
                                  handleQuantityChange("increment")
                                }
                                className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white plus"
                              >
                                +
                              </button>
                            </div>
                          </td>

                          <td className="p-4 text-end">
                            ${Number(finalPrice * quantity).toFixed(2)}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-4 text-center">
                        No items in the cart.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
              <div className="lg:col-span-9 md:order-1 order-3">
                <div className="space-x-1">
                  <Link
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-orange-500 text-white rounded-md mt-2"
                    href="/Component/Checkout"
                  >
                    Checkout
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-3 md:order-2 order-1">
                <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
                  <li className="flex justify-between p-4">
                    <span className="font-semibold text-lg">Subtotal :</span>
                    <span className="text-slate-400">
                      ${subtotal.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="font-semibold text-lg">Taxes :</span>
                    <span className="text-slate-400">${taxes.toFixed(2)}</span>
                  </li>
                  <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
                    <span className="font-semibold text-lg">Total :</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCart;
