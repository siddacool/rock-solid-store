import { createStore } from 'solid-js/store';
import catalogData from './catalog.json';
import type { IProductState, ProductId } from '../types';

const productBaseState: IProductState = {
  loading: false,
  data: {},
};

const [productState, setProduct] = createStore(productBaseState);

export const fetchProductById = async (id: ProductId) => {
  try {
    if (!id) {
      return Promise.reject('No Id');
    }

    setProduct('loading', () => true);

    // const res = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    //   (res) => res.json(),
    // );

    const res = catalogData.find((itd) => itd.id === `${id}`) || {};

    setProduct('data', () => res);

    return Promise.resolve(res);
  } catch (e) {
    return Promise.reject(e);
  } finally {
    setProduct('loading', () => false);
  }
};

export const product = productState;
