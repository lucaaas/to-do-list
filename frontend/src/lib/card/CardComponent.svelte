<!--
  @component A custom Svelte component that displays a card with a title, subtitle, content, and actions.

  @prop {function} [onClick] - Function to execute when the Card is clicked.

  @slot title - The card title.
  @slot subtitle - The card subtitle.
  @slot content - The card content.
  @slot actions - The card actions.
-->

<script lang="ts">
	import Card, { Content, PrimaryAction, Actions } from '@smui/card';

	export let onClick: () => void;
</script>

<div class="card-container">
	<PrimaryAction on:click={onClick}>
		<Card variant="outlined">
			<div style="padding: 1rem;">
				<h2 class="mdc-typography--headline6 card-title">
          <slot name="title" />
        </h2>

				<h3 class="mdc-typography--subtitle2 card-subtitle">
          <slot name="subtitle" />
        </h3>
			</div>

      {#if $$slots.content}
        <Content class="mdc-typography--body2">
          <slot name="content" />
        </Content>
      {/if}

      {#if $$slots.actions}
        <Actions>
          <slot name="actions" />
        </Actions>
      {/if}
		</Card>
	</PrimaryAction>
</div>

<style lang="scss">
  @use "styles";
</style>


