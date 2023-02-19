<script lang="ts">
    import Icon from '@smui/textfield/icon';
    import { onMount } from 'svelte';
    import CardComponent from '../../lib/cardComponent/CardComponent.svelte';
    import TextFieldComponent from '../../lib/textField/TextFieldComponent.svelte';
    import { ItemModel } from '../../models/item.model';
    import { ItemController } from './item.controller';

    let controller: ItemController = new ItemController();

    let items: Array<ItemModel> = [];
    let newItem: string = '';

    onMount(async () => {
      items = await controller.getItems();
      console.log(items);
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

    function resetNewField() {
      newItem = '';
    }
</script>

<h1> Hello world </h1>

<CardComponent>
  <span slot="title"> Lista TO-DO </span>
  <span slot="content">
    {#each items as item, index }
      <TextFieldComponent label="" value={item.description}>
        <Icon class="material-icons" slot="leading"> add </Icon>
      </TextFieldComponent>
    {/each}

    <TextFieldComponent label="Novo item" onKeyEnter={addItem} bind:value={newItem}>
      <Icon class="material-icons" slot="leading"> add </Icon>
    </TextFieldComponent>
  </span>
</CardComponent>

{items}
