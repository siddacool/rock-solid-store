<script lang="ts">
  let clazz = "";
  export { clazz as class };
</script>

<button on:click class={`button ${clazz || ""}`}>
  <slot />
</button>

<style lang="scss">
  .button {
    color: var(--color-font-light);
    border: none;
    outline: none;
    padding: 12px 24px;
    border-radius: 6px;
    background-color: var(--color-main);
    cursor: pointer;
    font-size: 1.2rem;
    min-width: 100px;

    &:hover {
      filter: brightness(1.2);
    }

    &:active {
      filter: brightness(1.2) saturate(1.2);
    }
  }
</style>
