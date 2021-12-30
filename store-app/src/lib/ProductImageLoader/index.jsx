import { onMount } from 'solid-js';
import ImageLoader from 'lib:ImageLoader';
import { product, fetchProductById } from 'store:product';

export default function ProductImageLoader() {
  onMount(() => {
    const id = window.location.hash.replace('#', '');
    fetchProductById(id);
  });

  return (
    <Show when={product.data && product.data.title ? true : false}>
      <ImageLoader src={product.data.image} alt={product.data.title} />
    </Show>
  );
}
