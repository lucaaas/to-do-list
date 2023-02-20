<script lang="ts">
    import Icon from '@smui/textfield/icon';
    import { onMount } from 'svelte';
    import CardComponent from '../../lib/cardComponent/CardComponent.svelte';
    import CheckboxComponent from '../../lib/checkbox/CheckboxComponent.svelte';
    import TextFieldComponent from '../../lib/textField/TextFieldComponent.svelte';
    import { ItemModel } from '../../models/item.model';
    import { ItemController } from './item.controller';

    let controller: ItemController = new ItemController();

    let items: Array<ItemModel> = [];
    let newItem: string = '';

    onMount(async () => {
      items = await controller.getItems();
    });

    /**
     * Adds an item to the items list
     * @param description item's description to be added
     */
    async function addItem(description: string): Promise<void> {
      if (description !== '') {
        resetNewField();

        const item: ItemModel = await controller.save(description);
        items.push(item);
        items = items;
      }
    }

    /**
     * Resets the new item field with a empty value.
     */
    function resetNewField() {
      newItem = '';
    }

    /**
     * Updates the conclusion of an item.
     *
     * @param item Item to be updated.
     * @param value The value of item conclusion
     */
    function updateItem(item: ItemModel, value: boolean) {
      item.done = value;
      controller.updateItem(item);
    }
</script>

<h1> Hello world </h1>

<CardComponent>
  <span slot="title"> Lista TO-DO </span>
  <span slot="content">
    {#each items as item, index }
      <TextFieldComponent label="" value={item.description}>
        <CheckboxComponent slot="leading" checked={item.done} onToggle={(value) => updateItem(item, value)} />
      </TextFieldComponent>
    {/each}

    <TextFieldComponent bind:value={newItem} label="Novo item" onKeyEnter={addItem}>
      <Icon class="material-icons" slot="leading"> add </Icon>
    </TextFieldComponent>
  </span>
</CardComponent>