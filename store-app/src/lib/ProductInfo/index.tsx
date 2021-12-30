import type { Component } from 'solid-js';
import { product } from 'store:product';

const ProductInfo: Component = () => {
  console.log(product.data);

  return <div>{product.data.title}</div>;
};

export default ProductInfo;
