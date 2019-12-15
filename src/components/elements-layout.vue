<template>
  <div class="elements-layout">
    <soft-btn
        type="soft"
        class="soft"
    />
    <soft-btn-icon
        class="soft"
    />
    <soft-container
        class="soft"
        :content="content"
    />
    <soft-dropdown
        class="soft"
        :options="dropDownOptions"
        :selectedOption="dropDownSelectedOption"
        @select="dropDownSelection"
    />
  </div>
</template>

<script>
  import softBtn from './ui-elements/soft-btn'
  import softBtnIcon from './ui-elements/soft-btn-icon'
  import softDropdown from './ui-elements/soft-dropdown'
  import softContainer from './ui-elements/soft-container'

  export default {
    name: "elements-layout",
    components: {
      softBtn,
      softBtnIcon,
      softDropdown,
      softContainer,
    },
    data() {
      return {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        dropDownOptions: [
          {title: 'option 1', value: 1},
          {title: 'option 2', value: 2},
          {title: 'option 3', value: 3},
          {title: 'option 4', value: 4},
        ],
        dropDownSelectedOption: {title: 'Select'}
      }
    },
    methods: {
      dropDownSelection(item) {
        this.dropDownSelectedOption = item;
      }
    }
  }
</script>

<style lang="scss">
  .elements-layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
</style>