<template>
  <div :class="[ 'header-item', { 'header-item--open': isOpen } ]">
    <button :class="[ 'header-item__head', { 'header-item__head--active': isActive } ]" @click="open">
      <slot name="svg"></slot>
    </button>
    <div class="header-item__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderItem",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped lang="scss">
.header-item {
  position: relative;

  &__head {
    position: relative;
    width: 48px;
    height: 48px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &--active {
      &::after {
        content: '';
        position: absolute;
        top: 10px;
        right: 10px;
        width: 10px;
        height: 10px;
        background-color: var(--primary-orange-color);
        border-radius: 100%;
        border: 2px solid var(--neutral-07-color);
      }
    }
  }

  &__body {
    position: absolute;
    top: calc(100% + 18px);
    right: 0;
    visibility: hidden;
    opacity: 0;
    border: 2px solid var(--neutral-06-color);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s;

    @media only screen and (max-width: 768px) {
      top: calc(100% + 4px);
      right: 16px;
      left: 16px;
    }
  }

  &--open {
    .header-item__body {
      visibility: visible;
      opacity: 1;
    }

    .header-item__head:deep(svg) {
      path {
        fill: var(--neutral-01-color);
      }
    }
  }

  &:hover {
    .header-item__head {
      &:deep(svg) {
        path {
          fill: var(--neutral-01-color);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    position: static;
  }
}
</style>