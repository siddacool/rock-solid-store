<script lang="ts">
  import Button from "lib:Button";
  import { createEventDispatcher } from "svelte";
  export let value = 1;
  export let min = 0;
  export let max = 99;
  let clazz = "";
  export { clazz as class };

  const dispatch = createEventDispatcher();

  function onChangeEvent(value) {
    if ((min || min === 0) && value < min) {
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
    valueCache += 1;

    onChangeEvent(valueCache);
  }

  function onDecrement() {
    let valueCache = value;
    valueCache -= 1;

    onChangeEvent(valueCache);
  }
</script>

<div class={`counter ${clazz || ""}`}>
  <Button
    on:click={onDecrement}
    disabled={(min || min === 0) && value <= min}
    class="counter-button">-</Button
  >
  <input type="text" value={`${value}`} readonly />
  <Button
    on:click={onIncrement}
    disabled={max && value >= max}
    class="counter-button">+</Button
  >
</div>

<style lang="scss">
  .counter {
    display: inline-flex;
    color: var(--color-font-light);
    border: none;
    outline: none;
    margin-right: 24px;
    margin-bottom: 24px;
    font-size: 1.2rem;
    align-items: center;

    input {
      padding: 12px 24px;
      font-size: 1.2rem;
      border: 2px solid var(--color-bg);
      background-color: transparent;
      outline: none;
      filter: brightness(0.7) saturate(2.2);
      border-left-color: transparent;
      border-right-color: transparent;
      border-right-width: 0;
      border-left-width: 0;
      width: 100px;
      height: 46px;
    }

    :global(.counter-button) {
      min-width: initial;
      padding: 12px 0;
      width: 45px;

      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
</style>
