import { createStore } from 'solid-js/store';
import catalogData from './catalog.json';
import type { ICatalogState } from '../types';

const catalogBaseState: ICatalogState = {
  loading: false,
  list: [],
};

const [catalogState, setCatalog] = createStore(catalogBaseState);

const sleep = (m) => new Promise((r) => setTimeout(r, m));

export const fetchCatalog = async () => {
  try {
    setCatalog('loading', () => true);

    await sleep(2000);
    // const res = await fetch('https://fakestoreapi.com/products').then((res) =>
    //   res.json(),
    // );

    setCatalog('list', () => catalogData);

    return Promise.resolve(catalogData);
  } catch (e) {
    return Promise.reject(e);
  } finally {
    setCatalog('loading', () => false);
  }
};

export const catalog = catalogState;
