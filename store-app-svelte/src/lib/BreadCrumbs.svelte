<script lang="ts">
  export let crumbs = [];

  const isLastChild = (i) => crumbs && crumbs.length && i + 1 === crumbs.length;
</script>

<div class="bread-crumbs">
  <a href="/" class="crumb">Home</a>
  {#each crumbs as { name, path }, i}
    /
    {#if isLastChild(i)}
      <span class="crumb">{name}</span>
    {:else}
      <a href={`/${path}`} class="crumb">{name}</a>
    {/if}
  {/each}
</div>

<style lang="scss">
  .bread-crumbs {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
  }

  .crumb {
    padding: 0 4px;
    font-weight: 500;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  a {
    color: var(--color-font-dark);
  }
</style>
