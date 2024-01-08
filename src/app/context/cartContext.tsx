"use client";
import React from "react";
import { Cart } from "../constants/cartType";
import { CartContextType } from "../constants/cartContextType";

export const CartContext = React.createContext<CartContextType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartValue, setCartValue] = React.useState<Cart[]>([]);
  const addToCart = (
    id: number,
    price: number,
    title: string,
    desc: string,
    type: string
  ) => {
    const isProductAlreadyExists = cartValue.some((e) => e.id === id);
    if (!isProductAlreadyExists)
      setCartValue((allInitialValue) => [
        ...allInitialValue,
        {
          id,
          title,
          desc,
          price,
          type,
        },
      ]);
  };
  const removeFromCart = (type: string) => {
    setCartValue((allCartValues) =>
      allCartValues.filter((e) => e.type !== type)
    );
  };

  const allValues = {
    cartValue,
    setCartValue,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={allValues}>{children}</CartContext.Provider>
  );
};
