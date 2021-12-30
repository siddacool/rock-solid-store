import { writable } from "svelte/store";
import type { IProduct } from "../types";
import catalogData from "./catalog.json";

const catalogBaseState: IProduct[] = [];

export const catalog = writable(catalogBaseState);

export const fetchCatalog = () => {
  catalog.update(() => catalogData);
};
