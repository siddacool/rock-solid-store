import { createStore } from 'solid-js/store';
import json from './items-data.json';

const [itemState, setItem] = createStore({
  loading: false,
  data: {},
});

export const fetchItemById = async (id) => {
  try {
    if (!id) {
      return Promise.reject('No Id');
    }

    setItem('loading', () => true);

    // const res = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    //   (res) => res.json(),
    // );

    const res = json.find((itd) => itd.id === `${id}`) || {};

    console.log(res);

    setItem('data', () => res);

    return Promise.resolve(res);
  } catch (e) {
    return Promise.reject(e);
  } finally {
    setItem('loading', () => false);
  }
};

export const item = itemState;
