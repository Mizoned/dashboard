<template>
  <div :class="[ 'actions', { 'actions--active': isActive }]">
    <button class="actions__button" @click="open">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12.0098C8 13.1143 7.10457 14.0098 6 14.0098C4.89543 14.0098 4 13.1143 4 12.0098C4 10.9052 4.89543 10.0098 6 10.0098C7.10457 10.0098 8 10.9052 8 12.0098Z" fill="#FCFCFC"/>
        <path d="M14 12.0098C14 13.1143 13.1046 14.0098 12 14.0098C10.8954 14.0098 10 13.1143 10 12.0098C10 10.9052 10.8954 10.0098 12 10.0098C13.1046 10.0098 14 10.9052 14 12.0098Z" fill="#FCFCFC"/>
        <path d="M20 12.0098C20 13.1143 19.1046 14.0098 18 14.0098C16.8954 14.0098 16 13.1143 16 12.0098C16 10.9052 16.8954 10.0098 18 10.0098C19.1046 10.0098 20 10.9052 20 12.0098Z" fill="#FCFCFC"/>
      </svg>
    </button>
    <div class="actions__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionsButton",
  params: {
    options: Array,

  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    open() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped lang="scss">
  .actions {
    position: relative;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: var(--neutral-06-color);
      border-radius: 100%;
      border: 2px solid transparent;
      cursor: pointer;
      padding: 4px;
    }

    &__body {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      z-index: 2;
      padding: 12px;
      background-color: var(--neutral-08-color);
      border: 1px solid var(--neutral-06-color);
      width: 256px;
      border-radius: 16px;
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s;
    }

    &--active {
      .actions__body {
        visibility: visible;
        opacity: 1;
      }
    }
  }
</style>