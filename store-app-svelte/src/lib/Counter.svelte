<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let value;
  export let min;
  export let max;
  let clazz = "";
  export { clazz as class };

  const dispatch = createEventDispatcher();

  function onChangeEvent(value) {
    if (min && value < min) {
      return;
    }

    if (max && value > max) {
      return;
    }

    dispatch("change", {
      value,
    });
  }

  function onIncrement() {
    let valueCache = value;
    valueCache = valueCache + 1;

    onChangeEvent(valueCache);
  }

  function onDecrement() {
    let valueCache = value;
    valueCache = valueCache - 1;

    onChangeEvent(valueCache);
  }
</script>

<div class={`counter ${clazz || ""}`}>
  <button>-</button>
  <input type="text" value={`${value}`} />
  <button>+</button>
</div>

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
