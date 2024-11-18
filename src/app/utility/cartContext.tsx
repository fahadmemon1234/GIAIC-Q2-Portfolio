"use client";
import React, { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  FinalPrice: number;
}

interface CartContextType {
  cartCount: number;
  cartItems: number[];
  addToCart: (productId: number, FinalPrice: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (productId: number, quantity: number) => {
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
