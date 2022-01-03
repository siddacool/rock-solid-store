<script lang="ts">
  import { onDestroy } from "svelte";
  import { catalog } from "store:catalog";
  import { addToCart } from "store:cart";
  import Counter from "lib:Counter";
  export let id = "";
  export let count = 0;

  let info = {
    id: "",
    title: "",
    image: "",
  };

  const handleCountChange = (event) => {
    count = event.detail.value;

    addToCart({ id: info.id, count, force: true });
  };

  const unsubscribe = catalog.subscribe((items) => {
    const currunt = items.find((item) => item.id === id) || {};

    info = { ...currunt };
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<li>
  <div class="image">
    <img src={info.image} alt={info.title} />
  </div>

  <div class="description">
    <div class="title">{info.title}</div>
    <div class="price">${info.price}</div>
    <div class="counter">
      <Counter
        min={0}
        max={6}
        value={count}
        on:change={handleCountChange}
        class="counter-counter"
      />
    </div>
  </div>
</li>

<style lang="scss">
  li {
    display: flex;
    margin: 0;
    padding: 0;
    margin-bottom: 24px;
    width: 100%;

    @media (min-width: 900px) {
      margin-left: 12px;
      margin-right: 12px;
      width: initial;
    }

    :global(.counter-counter) {
      margin-top: 8px;
      margin-bottom: 0 !important;
      margin-right: 0 !important;
    }
  }

  .image {
    height: 180px;
    width: 100px;
    display: flex;
    padding: 8px;
    background-color: var(--color-backdrop-light);

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .description {
    padding: 24px;
    flex: 1;
    background-color: var(--color-bg);
    filter: brightness(0.9) saturate(1.3);
  }

  .title {
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 1.1rem;
  }
</style>
