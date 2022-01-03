<script lang="ts">
  import IconButtonLink from "lib:IconButtonLink";
  import CountDisplay from "lib:CountDisplay";
  import { cart } from "store:cart";
</script>

<div class="cart-icon">
  <IconButtonLink href="/cart" alt="cart">
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>

    {#if $cart.length}
      <CountDisplay value={$cart.length} class="cart-count" />
    {/if}
  </IconButtonLink>
</div>

<style lang="scss">
  .cart-icon {
    position: relative;
    margin-right: 16px;

    :global(.cart-count) {
      position: absolute;
      top: 15px;
      right: -9px;
      z-index: 1;
    }
  }
</style>
