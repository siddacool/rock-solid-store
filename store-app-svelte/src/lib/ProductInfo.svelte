<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import ProductImage from "lib:ProductImage";
  import ProductDetails from "lib:ProductDetails";
  import BreadCrumbs from "lib:BreadCrumbs";
  import AddToCartButton from "lib:AddToCartButton";

  import { product, fetchProductById } from "store:product";

  let crumbs = [{ name: "product", path: "" }];

  const unsubscribe = product.subscribe((details) => {
    const newCrumbs = [{ name: details.title, path: "" }];

    crumbs = [...newCrumbs];
  });

  onMount(() => {
    const id = window.location.hash.replace("#", "");
    fetchProductById(id);
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<BreadCrumbs {crumbs} />
<article>
  <section><ProductImage /></section>
  <section><ProductDetails /> <AddToCartButton /></section>
</article>

<style lang="scss">
  article {
    @media (min-width: 900px) {
      display: flex;
    }
  }

  section {
    @media (min-width: 900px) {
      flex: 1;
    }

    &:first-child {
      display: flex;
      background-color: var(--color-backdrop-light);
      height: 400px;
      border-radius: 6px;
      overflow: hidden;
      padding: 16px;
      align-items: center;
      justify-content: center;

      @media (min-width: 900px) {
        max-width: 600px;
        height: calc(100vh - 160px);
        position: sticky;
        top: 0;
        left: 0;
      }
    }

    &:last-child {
      @media (min-width: 900px) {
        padding: 16px;
      }

      @media (min-width: 1200px) {
        padding-left: 100px;
      }
    }
  }
</style>
