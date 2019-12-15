<template>
  <div
      class='flex-container'
      :style="{'flex-direction': direction}"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "flex-container",
    props: {
      direction: {
        type: String,
        default: 'row'
      }
    },
    data() {
      return {}
    },
    computed: {}
  }
</script>

<style lang="scss">
  .flex-container {
    display: flex;
    padding: $padding*2 $padding*4;
  }
</style>