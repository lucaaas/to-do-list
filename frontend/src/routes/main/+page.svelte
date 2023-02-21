<script lang="ts">
    import Icon from '@smui/textfield/icon';
    import { onMount } from 'svelte';
    import CardComponent from '../../lib/cardComponent/CardComponent.svelte';
    import CheckboxComponent from '../../lib/checkbox/CheckboxComponent.svelte';
    import TextFieldComponent from '../../lib/textField/TextFieldComponent.svelte';
    import { ItemModel } from '../../models/item.model';
    import { ItemController } from './item.controller';

    let controller: ItemController = new ItemController();

    let newItem: string = '';
    let items: { completedItems: Array<ItemModel>; uncompletedItems: Array<ItemModel> } = {
      completedItems: [],
      uncompletedItems: []
    };

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
        items.uncompletedItems.push(item);
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
     * @param checked The value of item conclusion
     */
    async function updateItem(item: ItemModel, checked: boolean) {
      if (item.done !== checked) {
        item.done = checked;
        await controller.updateItem(item);

        if (checked) {
          const index: number = items.uncompletedItems.lastIndexOf(item);
          items.uncompletedItems.splice(index, 1);
          items.completedItems.push(item);
        } else {
          const index: number = items.completedItems.lastIndexOf(item);
          items.completedItems.splice(index, 1);
          items.uncompletedItems.push(item);
        }
        items = items;
      }
    }

    /**
     * Returns a boolean that indicates whether the item is completed or not.
     *
     * @param item Item to be checked.
     */
    function isItemCompleted(item: ItemModel) {
      return items.completedItems.includes(item);
    }
</script>

<CardComponent>
  <span slot="title"> Lista TO-DO </span>
  <span slot="content">
    {#each items.uncompletedItems as item, index}
      <TextFieldComponent label="" value={item.description} onKeyEnter={() => {}}>
        <CheckboxComponent slot="leading" checked={item.done} onToggle={(value) => updateItem(item, value)} />
      </TextFieldComponent>
    {/each}

    <TextFieldComponent bind:value={newItem} label="Novo item" onKeyEnter={addItem}>
      <Icon class="material-icons" slot="leading"> add </Icon>
    </TextFieldComponent>

    {#each items.completedItems as item, index}
      <TextFieldComponent label="" value={item.description} onKeyEnter={() => {}}>
        <CheckboxComponent slot="leading" checked={isItemCompleted(item)} onToggle={(value) => updateItem(item, value)} />
      </TextFieldComponent>
    {/each}
  </span>
</CardComponent>