<script lang="ts">
  export let title = "";
  export let image = "";
  export let id = "";
</script>

<li>
  <a href={`/product#${id}`}>
    <div class="image">
      <img src={image} alt={title} />
    </div>

    <div class="title backdrop-filter">{title}</div>
  </a>
</li>

<style lang="scss">
  li {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 24px;
    width: 100%;

    @media (min-width: 900px) {
      margin-left: 12px;
      margin-right: 12px;
      width: initial;
      flex: 1;
      min-width: calc(33.333% - 24px);
      max-width: calc(33.333% - 24px);
    }
  }
  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    color: var(--color-font-dark);
    cursor: pointer;
    text-decoration: none;

    &:hover {
      transform: scale(1.01);
      opacity: 0.9;
    }
  }

  .image {
    height: 410px;
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

  .title {
    padding: 24px;
    flex: 1;
    font-weight: 500;
    background-color: var(--color-bg);
  }
</style>
