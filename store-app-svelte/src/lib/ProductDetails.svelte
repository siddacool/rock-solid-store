<script lang="ts">
  import { product } from "store:product";
</script>

<div class="product-details">
  <h1>{$product.title}</h1>

  <h2>${$product.price}</h2>

  <p>{$product.description}</p>
</div>
