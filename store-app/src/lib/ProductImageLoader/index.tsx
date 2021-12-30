import { onMount } from 'solid-js';
import type { Component } from 'solid-js';
import ImageLoader from 'lib:ImageLoader';
import { product, fetchProductById } from 'store:product';

const ProductImageLoader: Component = () => {
  onMount(() => {
    const id = window.location.hash.replace('#', '');
    fetchProductById(id);
  });

  return (
    <Show when={product.data && product.data.title ? true : false}>
      <ImageLoader src={product.data.image} alt={product.data.title} />
    </Show>
  );
};

export default ProductImageLoader;
