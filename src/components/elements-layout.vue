<template>
  <div class="elements-layout">
    <soft-btn
        type="soft"
        class="soft"
    />
    <soft-btn-icon/>
    <soft-dropdown
        class="soft"
        :options="dropDownOptions"
        :selectedOption="dropDownSelectedOption"
        @select="dropDownSelection"
    />
    <flex-container
        class="justify-around align-baseline"
    >
      <soft-inset-container
          class="col-4"
      >
        <p>Inset container</p>
      </soft-inset-container>
      <flex-container
          class="col-4 justify-around align-center"
      >
        <soft-container>
          <soft-inset-container>
            <p>Inset container in Outset container</p>
          </soft-inset-container>
        </soft-container>
      </flex-container>
      <soft-container class="col-4">
        <p>Outset container</p>
      </soft-container>
    </flex-container>
  </div>
</template>

<script>
  import softBtn from './ui-elements/soft-btn'
  import softBtnIcon from './ui-elements/soft-btn-icon'
  import softDropdown from './ui-elements/soft-dropdown'
  import softContainer from './ui-elements/layouts/soft-container'
  import softInsetContainer from './ui-elements/layouts/soft-inset-container'
  import flexContainer from './ui-elements/layouts/flex-container'

  export default {
    name: "elements-layout",
    components: {
      softBtn,
      softBtnIcon,
      softDropdown,
      softContainer,
      softInsetContainer,
      flexContainer
    },
    data() {
      return {
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
    .flex-container .soft-container:first-of-type {
      margin-bottom: $padding;
    }
  }
</style>