<!--
  @component
  An accordion component

  @param title Title for the panel header.

  @slot content The content to be displayed when the panel is open.
-->
<script lang="ts">
  import Accordion, {Panel, Header, Content} from '@smui-extra/accordion';

  export let title: string;
</script>

<Accordion>
  <Panel>
    <Header> {title} </Header>
    <Content>
      <slot name="content" />
    </Content>
  </Panel>
</Accordion>