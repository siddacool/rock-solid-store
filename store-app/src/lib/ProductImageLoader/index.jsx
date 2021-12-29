import { onMount } from 'solid-js';
import ImageLoader from 'lib:ImageLoader';
import { item, fetchItemById } from 'store:item';

export default function ProductImageLoader() {
  onMount(() => {
    const id = window.location.hash.replace('#', '');

    console.log(id);

    fetchItemById(id)
      .then((res) => {
        console.log(item.data.image);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <Show when={item.data && item.data.title ? true : false}>
      <ImageLoader src={item.data.image} alt={item.data.title} />
    </Show>
  );
}
