<script lang="ts">
    import Icon from '@smui/textfield/icon';
    import CardComponent from '../../lib/cardComponent/CardComponent.svelte';
    import TextFieldComponent from '../../lib/textField/TextFieldComponent.svelte';

    let items: Array<string> = [];
    let newItem: string = '';

    /**
     * Adds an item to the items list
     * @param item item to be added
     */
    function addItem(item: string): void {
      if (item !== '') {
        resetNewField();

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
      <TextFieldComponent label="" value={item}>
        <Icon class="material-icons" slot="leading"> add </Icon>
      </TextFieldComponent>
    {/each}

    <TextFieldComponent label="Novo item" onKeyEnter={addItem} bind:value={newItem}>
      <Icon class="material-icons" slot="leading"> add </Icon>
    </TextFieldComponent>
  </span>
</CardComponent>

{items}
