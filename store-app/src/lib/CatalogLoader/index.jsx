import { onMount } from 'solid-js';
import './style.css';
import { catalog, fetchCatalog } from 'store:catalog';
import ProductTile from 'lib:ProductTile';

export default function CatalogLoader() {
  onMount(() => {
    fetchCatalog().catch((e) => {
      console.log(e);
    });
  });

  return (
    <div class="items-loader">
      <Switch fallback={<div>Not Found</div>}>
        <Match when={catalog.loading}>loading</Match>
        <Match when={catalog.list && catalog.list.length}>
          <For each={catalog.list}>{(item) => <ProductTile item={item} />}</For>
        </Match>
      </Switch>
    </div>
  );
}
