<!--
/**
  @component
  A Svelte component that renders a list of items, each one with a checkbox and a text field.

  @prop items An array of items to be displayed.
  @prop onToggle A function that will be called when the checkbox value changes.
  @prop onEditItem A function that will be called when the description of an Item changes.
-->
<script lang="ts">
  import CheckboxComponent from '../../../../lib/checkbox/CheckboxComponent.svelte';
  import TextFieldComponent from '../../../../lib/textField/TextFieldComponent.svelte';
  import { ItemModel } from '../../../../models/item.model';

  export let items: Array<ItemModel>;
  export let onToggle: (item: ItemModel, value: boolean) => void;
  export let onEditItem: (item: ItemModel, value: string) => void;

  function leaveInput(item: ItemModel, value: string) {
    if (item.description !== value) {
      onEditItem(item, value);
    }
  }

</script>

{#each items as item, index}
  <TextFieldComponent label=""
                      value={item.description}
                      onKeyEnter={(value) => {leaveInput(item, value)}}
                      onFocusOut={(value) => {leaveInput(item, value)}}>
    <CheckboxComponent slot="leading" checked={item.done}
                       onToggle={(value) => onToggle(item, value)} />
  </TextFieldComponent>
{/each}