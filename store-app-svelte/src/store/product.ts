import { writable } from "svelte/store";
import type { IProduct, ProductId } from "../types";
import catalogData from "./catalog.json";

const productBaseState: IProduct = {};

export const product = writable(productBaseState);

export const fetchProductById = (id: ProductId) => {
  if (!id) {
    return null;
  }

  const res = catalogData.find((itd) => itd.id === `${id}`) || {};

  product.update(() => res);
};