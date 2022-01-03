import { writable } from "svelte/store";
import type { ICartItem } from "../types";

const catalogBaseState = {
  "1": {
    count: 1,
  },
  "3": {
    count: 2,
  },
};

export const cart = writable(catalogBaseState);

export const addToCart = (item: ICartItem) => {
  cart.update((data) => {
    const newData = { ...data };

    if (!newData[item.id]) {
      newData[item.id] = { count: 0 };
    }

    if (item.force) {
      newData[item.id].count = item.count;
    } else {
      newData[item.id].count = newData[item.id].count + item.count;
    }

    return newData;
  });
};
