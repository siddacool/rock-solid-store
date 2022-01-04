<button class="icon-button" on:click>
  <slot />
</button>

<style lang="scss">
  .icon-button {
    color: var(--color-font-dark);
    width: 30px;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
    font-size: 1.8rem;
    cursor: pointer;

    :global(svg) {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
</style>
