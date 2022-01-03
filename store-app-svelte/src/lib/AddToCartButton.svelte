<script lang="ts">
  import Button from "lib:Button";
  import { product } from "store:product";
  import { addToCart } from "store:cart";
  import Counter from "lib:Counter";

  let count = 1;

  const handleCountChange = (event) => {
    count = event.detail.value;
  };
</script>

<div class="add-to-cart-button">
  <Counter min={1} max={17} value={count} on:change={handleCountChange} />
  <Button on:click={() => addToCart({ id: $product.id, count })}>
    Add to cart
  </Button>
</div>

<style lang="scss">
  .add-to-cart-button {
    padding-top: 24px;
  }
</style>
