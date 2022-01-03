<script lang="ts">
  import { product } from "store:product";
</script>

<div class="product-details">
  <h1>{$product.title}</h1>

  <h2>${$product.price}</h2>

  <p>{$product.description}</p>
</div>

<style lang="scss">
  h1 {
    font-size: 2rem;
    margin-bottom: 0;

    @media (min-width: 900px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.3rem;

    @media (min-width: 900px) {
      max-width: 500px;
    }
  }
</style>
