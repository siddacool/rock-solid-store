<script lang="ts">
  export let disabled = false;
  let clazz = "";
  export { clazz as class };
</script>

<button on:click class={`button ${clazz || ""}`} class:disabled {disabled}>
  <slot />
</button>

<style lang="scss">
  .button {
    color: var(--color-constant-font-light);
    border: none;
    outline: none;
    padding: 12px 24px;
    border-radius: 6px;
    background-color: var(--color-main);
    cursor: pointer;
    font-size: 1.2rem;
    min-width: 100px;

    &:hover {
      &:not(.disabled) {
        filter: brightness(1.2);
      }
    }

    &:active {
      &:not(.disabled) {
        filter: brightness(1.2) saturate(1.2);
      }
    }

    &.disabled {
      filter: grayscale(1) brightness(2.6);
      color: #000;
      opacity: 0.4;
    }
  }
</style>
