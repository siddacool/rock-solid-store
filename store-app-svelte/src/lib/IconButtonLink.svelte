<script lang="ts">
  export let href = "";
  export let alt = "";
</script>

<a class="icon-button-link" {href} {alt}>
  <slot />
</a>

<style lang="scss">
  .icon-button-link {
    color: var(--color-font-dark);
    width: 30px;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;

    :global(svg) {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
</style>
