<template>
  <div class='soft-container'>
    {{content.text ? content.text : content}}
  </div>
</template>

<script>
  export default {
    name: "soft-container",
    props: {
      content: {
        type: String || Object,
        default: '' || {}
      }
    },
    data() {
      return {}
    },
  }
</script>

<style lang="scss">
  .soft-container {
    padding: $padding*2 $padding*4;
    border-radius: 8px;
  }
</style>