<script lang="ts">
  export let value = 0;

  let clazz = "";
  export { clazz as class };
</script>

<span class={`count-display ${clazz || ""}`}>
  {#if value > 99}
    99+
  {:else}
    {value}
  {/if}
</span>

<style lang="scss">
  .count-display {
    background-color: var(--color-main);
    min-width: 22px;
    height: 22px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: var(--color-constant-font-light);
    padding: 0 4px;
    border-radius: 50%;
  }
</style>
