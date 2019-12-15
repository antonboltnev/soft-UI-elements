<template>
  <div class='soft-container soft'>
    <slot>
      <slot></slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "soft-container",
    props: {},
    data() {
      return {}
    },
  }
</script>

<style lang="scss">
  .soft-container {
    padding: $padding;
    border-radius: $radius;
  }
</style>