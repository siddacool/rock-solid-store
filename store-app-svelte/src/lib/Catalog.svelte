<script lang="ts">
  import { onMount } from "svelte";
  import { catalog, fetchCatalog } from "store:catalog";
  import CatalogItem from "lib:CatalogItem";

  onMount(() => {
    fetchCatalog();
  });
</script>

<div class="catalog">
  <ul>
    {#each $catalog as { title, id, image }}
      <CatalogItem {title} {id} {image} />
    {/each}
  </ul>
</div>

<style lang="scss">
  .catalog {
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }

    @media (min-width: 900px) {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
</style>
