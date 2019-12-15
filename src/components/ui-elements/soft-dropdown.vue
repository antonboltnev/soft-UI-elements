<template>
  <div
      class='soft-dropdown'
      :style="{'width': width + 'px'}"
      @click.stop="showDropdown"
  >
    <div class="soft-dropdown__selected-option">
      <span>{{selectedOption.title}}</span>
      <i
          class="material-icons"
          :class="{'expanded':isDropdownVisible}"
      >keyboard_arrow_down
      </i>
    </div>
    <transition name="dropdown">
      <div
          class="soft-dropdown__options_wrapper soft"
          v-if="isDropdownVisible"
      >
        <div
            class="soft-dropdown__option"
            v-for="option in options"
            :key="option.value"
            @click.stop="selectOption(option)"
        >{{option.title}}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "soft-dropdown",
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selectedOption: {
        type: Object,
        default() {
          return {}
        }
      },
      width: {
        type: Number,
        default: 100
      }
    },
    data() {
      return {
        isDropdownVisible: false
      }
    },
    computed: {},
    methods: {
      showDropdown() {
        this.isDropdownVisible = true;
      },
      hideDropdown() {
          this.isDropdownVisible = false;
      },
      selectOption(option) {
        this.$emit('select', option)
        this.hideDropdown()
      }
    },
    created() {
      document.addEventListener('click', this.hideDropdown)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.hideDropdown)
    }
  }
</script>

<style lang="scss">
  .soft-dropdown {
    position: relative;
    padding:  $padding $padding*2;
    cursor: pointer;
    &__options_wrapper {
      position: absolute;
      top: 45px;
      right: 0;
      width: 100%;
    }
    &__selected-option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .material-icons {
        transition: ease .5s;
        &.expanded {
          transform: rotate(-180deg);
        }
      }
    }
    &__option {
      padding: 16px 0;
      transition: all ease .5s;
      &:hover {
        box-shadow: 4px 3px 3px -2px rgba(0, 0, 0, 0), -4px -5px 6px 0 rgba(255, 255, 255, 0), inset 4px 3px 7px -2px rgba(0, 0, 0, 0.2), inset -4px -5px 6px 0 rgba(255, 255, 255, 0.70);
      }
    }
  }
</style>