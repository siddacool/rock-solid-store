import { onMount } from 'solid-js';
import './style.css';
import { items, fetchItems } from 'store:items';
import Item from 'lib:Item';

export default function ItemsLoader() {
  onMount(() => {
    fetchItems().catch((e) => {
      console.log(e);
    });
  });

  return (
    <div class="items-loader">
      <Switch fallback={<div>Not Found</div>}>
        <Match when={items.loading}>loading</Match>
        <Match when={items.list && items.list.length}>
          <For each={items.list}>{(item) => <Item item={item} />}</For>
        </Match>
      </Switch>
    </div>
  );
}
