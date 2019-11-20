<template>
  <div class="header">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DuHeader",
  data() {
    return {};
  }
};
</script>
