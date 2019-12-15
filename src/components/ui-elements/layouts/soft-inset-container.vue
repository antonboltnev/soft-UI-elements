<template>
  <div class='soft-inset-container soft-inset'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "soft-inset-container",
    props: {},
    data() {
      return {}
    },
    computed: {}
  }
</script>

<style lang="scss">
  .soft-inset-container {
    padding: $padding*2;
    border-radius: $radius;
  }
</style>