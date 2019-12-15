<template>
  <div
      class='soft-btn-icon soft'
      :class="{'active': isIconCLicked}"
      @mousedown="click"
      @mouseup="click"
  >
    <i class="material-icons">start</i>
  </div>
</template>

<script>
  export default {
    name: "soft-btn-icon",
    data() {
      return {
        isIconCLicked: false
      }
    },
    methods: {
      click() {
        this.isIconCLicked = !this.isIconCLicked;
      }
    }
  }
</script>

<style lang="scss">
  .soft-btn-icon {
    width: 50px;
    height: 90px;
    cursor: pointer;
    border-radius: 50%;
    padding: 0 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    user-select: none;
    .material-icons {
      width: 24px;
      height: 24px;
    }
  }
</style>