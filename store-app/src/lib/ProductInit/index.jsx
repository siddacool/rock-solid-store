import { onMount } from 'solid-js';
import { fetchItemById } from 'store:item';

export default function ProductInit() {
  onMount(() => {
    const id = window.location.hash.replace('#', '');

    fetchItemById(`${id}`).catch((e) => {
      console.log(e);
    });
  });

  return '';
}
