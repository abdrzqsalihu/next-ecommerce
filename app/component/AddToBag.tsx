"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  price: number;
  image: any;
  description: string;
  currency: string;
  price_id: string;
  // quantity: number;
}

function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    price: price,
    image: urlFor(image).url(),
    description: description,
    currency: currency,
    price_id: price_id,
    // quantity: 1,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to Cart
    </Button>
  );
}

export default AddToBag;
