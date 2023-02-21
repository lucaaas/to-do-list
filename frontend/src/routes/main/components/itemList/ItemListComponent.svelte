<!--
/**
  @component
  A Svelte component that renders a list of items, each one with a checkbox and a text field.

  @param items - An array of items to be displayed.
  @param onToggle - A function that will be called when the checkbox value changes.
-->
<script lang="ts">
  import CheckboxComponent from '../../../../lib/checkbox/CheckboxComponent.svelte';
  import TextFieldComponent from '../../../../lib/textField/TextFieldComponent.svelte';
  import { ItemModel } from '../../../../models/item.model';

  export let items: Array<ItemModel>;
  export let onToggle: (item: ItemModel, value: boolean) => void;
</script>

{#each items as item, index}
  <TextFieldComponent label="" value={item.description} onKeyEnter={() => {}}>
    <CheckboxComponent slot="leading" checked={item.done}
                       onToggle={(value) => onToggle(item, value)} />
  </TextFieldComponent>
{/each}