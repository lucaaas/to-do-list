<script lang="ts">
  import Checkbox from '@smui/checkbox';

  export let checked: boolean = false;
  export let onToggle: (value: boolean) => void;

  function toggle(): void {
    onToggle(!checked);
  }
</script>

<div class="checkbox">
  <Checkbox bind:checked on:click={toggle} />
</div>

<style lang="scss">
  @use "styles";
  .checkbox {
    align-self: center;
  }
</style>