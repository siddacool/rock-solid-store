<script lang="ts">
  import Button from "lib:Button";
  import { product } from "store:product";
  import { addToCart } from "store:cart";
</script>

<div class="add-to-cart-button">
  <Button on:click={() => addToCart({ id: "1", count: 1 })}>Add to cart</Button>
</div>

<style lang="scss">
  .add-to-cart-button {
    padding-top: 24px;
  }
</style>
