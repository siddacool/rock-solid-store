import { writable } from "svelte/store";
import type { ICartItem } from "../types";

const catalogBaseState: ICartItem[] = [
  {
    id: "1",
    count: 2,
  },
  {
    id: "2",
    count: 1,
  },
  {
    id: "3",
    count: 4,
  },
];

export const cart = writable(catalogBaseState);

export const getCartCount = () => {
  console.log(cart);
};

export const addToCart = (item: ICartItem) => {
  cart.update((data) => {
    const newData = [...data];

    newData.push(item);

    return newData;
  });
};
