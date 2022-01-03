<script lang="ts">
  import { onMount } from "svelte";
  import { cart } from "store:cart";
  import { fetchCatalog } from "store:catalog";
  import CartItem from "lib:CartItem";

  onMount(() => {
    fetchCatalog();
  });
</script>

<div class="cart-list">
  <ul>
    {#each Object.entries($cart) as [id, objectVal]}
      <CartItem {id} count={objectVal.count} />
    {/each}
  </ul>
</div>

<style lang="scss">
  .cart-list {
    ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
  }
</style>
