<script lang="ts">
  import { product } from "store:product";
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
