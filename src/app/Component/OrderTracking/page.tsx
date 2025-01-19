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

interface TrackingEvent {
  description: string;
  occurred_at: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
}

interface TrackingData {
  tracking_number: string;
  status_description: string;
  estimated_delivery_date: string;
  carrier_detail: {
    name: string;
  };
  events: TrackingEvent[];
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

  // const handleTrackOrder = async () => {
  //   // Simulate fetching order data from an API
  //   if (orderId === mockOrderData.id) {
  //     setOrder(mockOrderData);
  //   } else {
  //     alert("Order not found. Please check your order ID.");
  //     setOrder(null);
  //   }
  // };

  const getStatusStep = (status: string) => {
    const steps = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];
    return steps.indexOf(status) + 1;
  };

  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrackOrder = async () => {
    if (!trackingNumber) {
      alert("Please enter a tracking number");
      return;
    }

    try {
      const response = await fetch("/Component/api/trackOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackingNumber }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "An error occurred");
        setTrackingData(null);
        return;
      }

      const data: TrackingData = await response.json();
      setTrackingData(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch tracking information");
      setTrackingData(null);
    }
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
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
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
          {error && <p className="text-red-500 mt-4">{error}</p>}

          {trackingData && (
            <div className="bg-white p-6 mt-6 rounded shadow-lg w-3/4">
              <h2 className="text-lg font-bold mb-4">Tracking Information</h2>
              <p>
                <strong>Carrier:</strong> {trackingData.carrier_detail.name}
              </p>
              <p>
                <strong>Status:</strong> {trackingData.status_description}
              </p>
              <p>
                <strong>Estimated Delivery:</strong>{" "}
                {trackingData.estimated_delivery_date}
              </p>

              <h3 className="text-md font-bold mt-6 mb-3">Tracking Events:</h3>
              <ul className="divide-y divide-gray-300">
                {trackingData.events.map((event, index) => (
                  <li key={index} className="py-3">
                    <p>
                      <strong>{event.description}</strong> on{" "}
                      {new Date(event.occurred_at).toLocaleString()}
                    </p>
                    <p>
                      Location: {event.location.city}, {event.location.state},{" "}
                      {event.location.country}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderTracking;
