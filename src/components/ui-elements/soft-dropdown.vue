<template>
  <div
      class='soft-dropdown'
      :style="{'width': width + 'px'}"
      @click="toggleDropdown"
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
            @click="selectOption(option)"
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
      toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
      },
      selectOption(option) {
        this.$emit('select', option)
      }
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
      top: 40px;
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
    }
  }
</style>