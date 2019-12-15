<template>
  <div
      class='soft-btn-icon'
      :class="{'active': isIconCLicked}"
      @mousedown="click"
      @mouseup="click"
  ></div>
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
    position: relative;
    width: 50px;
    height: 90px;
    cursor: pointer;
    border-radius: 50%;
    padding: 0 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    &:before {
      content: '\2605';
      position: absolute;
      top: -5px;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>