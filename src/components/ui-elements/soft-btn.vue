<template>
  <div class='soft-btn'
       :class="{'active': isBtnClicked}"
       @mousedown="click"
       @mouseup="click"
  >{{title}}
  </div>
</template>

<script>
  export default {
    name: "soft-btn",
    props: {
      title: {
        type: String,
        default: 'Press'
      },
      type: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isBtnClicked: false
      }
    },
    methods: {
      click() {
        this.isBtnClicked = !this.isBtnClicked;
      }
    }
  }
</script>

<style lang="scss">
  .soft-btn {
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    border-radius: $padding/2;
    padding: $padding $padding*2;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
</style>