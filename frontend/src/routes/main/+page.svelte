<script lang="ts">
    import Icon from '@smui/textfield/icon';
    import { onMount } from 'svelte';
    import AccordionComponent from '../../lib/accordion/AccordionComponent.svelte';
    import CardComponent from '../../lib/cardComponent/CardComponent.svelte';
    import TextFieldComponent from '../../lib/textField/TextFieldComponent.svelte';
    import { ItemModel } from '../../models/item.model';
    import ItemListComponent from './components/itemList/ItemListComponent.svelte';
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
     * Resets the new item field with an empty value.
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
    async function toggleDone(item: ItemModel, checked: boolean) {
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
     * Updates an item with a new description.
     *
     * @param item Item to be updated.
     * @param newDescription new description to be saved.
     */
    async function updateItem(item: ItemModel, newDescription: string) {
      item.description = newDescription;
      await controller.updateItem(item);
    }
</script>

<CardComponent>
  <span slot="title"> Lista TO-DO </span>
  <span slot="content">
    <ItemListComponent items={items.uncompletedItems} onToggle={toggleDone} onEditItem={updateItem} />

    <TextFieldComponent bind:value={newItem} label="Novo item" onKeyEnter={addItem}>
      <Icon class="material-icons" slot="leading"> add </Icon>
    </TextFieldComponent>

    <hr />

    {#if items.completedItems.length > 0}
      <AccordionComponent title="{items.completedItems.length} itens concluídos">
        <ItemListComponent slot="content" items={items.completedItems} onToggle={toggleDone} onEditItem={updateItem} />
      </AccordionComponent>
    {/if}
  </span>
</CardComponent>