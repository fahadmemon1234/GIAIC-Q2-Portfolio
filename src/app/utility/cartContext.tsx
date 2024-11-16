"use client";
import React, { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface CartContextType {
  cartCount: number;
  cartItems: number[]; // Store only product IDs
  addToCart: (productId: number) => void; // Modify the function to accept only the product ID
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<number[]>([]); // Store product IDs only
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (productId: number) => {
    setCartItems((prev) => [...prev, productId]);
    setCartCount((prev) => prev + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
