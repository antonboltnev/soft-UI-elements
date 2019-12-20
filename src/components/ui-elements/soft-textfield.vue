<template>
  <div class='soft-textfield soft-inset'>
    <input
        type="text"
        :value="value"
        :placeholder="label"
        @input="input"
    />
  </div>
</template>

<script>
  export default {
    name: "soft-textfield",
    props: {
      value: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: 'Text field'
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      input(e) {
        let value = e.target.value;
        this.$emit('input', value);
      },
    }
  }
</script>

<style lang="scss">
  .soft-textfield {
    input {
      border: none;
      padding: $padding $padding*2;
      background: transparent;
      outline: none;
      color: $grey-font-color;
      &::placeholder {
        color: inherit;
      }
    }
  }
</style>