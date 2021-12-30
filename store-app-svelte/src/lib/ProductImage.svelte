<script lang="ts">
  import { onMount } from "svelte";
  import { product, fetchProductById } from "store:product";

  onMount(() => {
    const id = window.location.hash.replace("#", "");
    fetchProductById(id);
  });
</script>

<img src={$product.image} alt={$product.title} />

<style lang="scss">
  img {
    display: block;
    width: 80%;
    height: auto;
    object-fit: contain;
  }
</style>
