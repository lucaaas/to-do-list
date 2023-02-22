<!--
  @component A custom Svelte component that displays an input field with a label, value and callback when enter key is pressed.

  @prop label - The label text for the textfield.
  @prop value - The current value of the textfield. Defaults to ''.
  @prop onKeyEnter - The callback function to execute when the "Enter" key is pressed.
  @prop onFocusOut - The callback function to execute when the field lost focus.

  @slot leading - The icon shown at the start of the textfield.
  @slot trailing - The icon show at the end of the textfield.
-->
<script lang="ts">
  import TextField from '@smui/textfield';

  export let label: string = '';
  export let value: string = '';
  export let onKeyEnter: (value: string) => void;
  export let onFocusOut: (value: string) => void;

  let input: HTMLInputElement;
  function inputHandler (event: KeyboardEvent) {
    const newValue = (event.target as HTMLInputElement).value;
    if (event.key == 'Enter') {
      onKeyEnter(newValue);
    } else {
      value = newValue;
    }
  }
  
  function didLeaveInput(event: FocusEvent) {
    const newValue = (event.target as HTMLInputElement).value;
    onFocusOut(newValue);
  }
</script>

<TextField label={label}
           noLabel={value !== ''}
           invalid={false}
           style="width: 100%"
           bind:value
           on:keypress={inputHandler}
           on:focusout={didLeaveInput}
           bind:this={input} >
  <slot name="leading" slot="leadingIcon" />
  <slot name="trailing" slot="trailingIcon" />
</TextField>