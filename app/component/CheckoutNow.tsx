"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

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
      variant={"secondary"}
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}

export default CheckoutNow;
