"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import Link from "next/link";

interface Order {
  id: string;
  status: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  date: string;
}

const mockOrderData: Order = {
  id: "12345",
  status: "Shipped",
  items: [
    { name: "Product A", quantity: 2, price: 50 },
    { name: "Product B", quantity: 1, price: 75 },
  ],
  total: 175,
  date: "2025-01-18",
};

const OrderTracking: React.FC = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState<Order | null>(null);

  const handleTrackOrder = async () => {
    // Simulate fetching order data from an API
    if (orderId === mockOrderData.id) {
      setOrder(mockOrderData);
    } else {
      alert("Order not found. Please check your order ID.");
      setOrder(null);
    }
  };

  const getStatusStep = (status: string) => {
    const steps = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];
    return steps.indexOf(status) + 1;
  };

  return (
    <>
      <Navbar />
      <div className="py-14 bg-white"></div>

      <div className="py-9 bg-gray-light">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <nav>
                <ul className="flex flex-wrap items-center justify-center">
                  <li className="mr-5">
                    <Link
                      href="/"
                      className="text-dark font-medium text-base uppercase transition-all hover:text-orange relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-dark font-medium text-base uppercase mr-5">
                    Order Tracking
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen py-24">
        <div className="container">
          <h1 className="text-2xl font-bold text-center mb-6">
            Track Your Order
          </h1>

          <div className="mb-6">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter Order ID"
              className="rounded border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
            />
            <button
              onClick={handleTrackOrder}
              className="mt-3 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Track Order
            </button>
          </div>

          {order && (
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              <p>
                <strong>Order Date:</strong> {order.date}
              </p>
              <p>
                <strong>Total:</strong> ${order.total}
              </p>

              <div className="my-6">
                <h3 className="font-bold mb-3">Order Status</h3>
                <div className="flex items-center justify-between">
                  {["Ordered", "Shipped", "Out for Delivery", "Delivered"].map(
                    (step, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            getStatusStep(order.status) > index
                              ? "bg-orange-500 text-white"
                              : "bg-gray-300"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <p className="mt-2 text-sm">{step}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">Items</h3>
                <ul className="divide-y divide-gray-300">
                  {order.items.map((item, index) => (
                    <li key={index} className="py-3 flex justify-between">
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span>${item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderTracking;
