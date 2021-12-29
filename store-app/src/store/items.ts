import { createStore } from 'solid-js/store';
import json from './items-data.json';

const [itemsState, setItems] = createStore({
  loading: false,
  list: [],
});

const sleep = (m) => new Promise((r) => setTimeout(r, m));

export const fetchItems = async () => {
  try {
    setItems('loading', () => true);

    await sleep(2000);
    // const res = await fetch('https://fakestoreapi.com/products').then((res) =>
    //   res.json(),
    // );

    setItems('list', () => json);

    return Promise.resolve(json);
  } catch (e) {
    return Promise.reject(e);
  } finally {
    setItems('loading', () => false);
  }
};

export const items = itemsState;
