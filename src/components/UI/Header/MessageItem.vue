<template>
  <div :class="[ 'message-item', { 'message-item--new': isNew }]">
    <div class="message-item__avatar">
      <img src="@/assets/images/profile3.jpg" alt="avatar">
      <!--TODO Сделать динамическую подгрузку аватара в свойство avatar-->
    </div>
    <div class="message-item__details">
      <div class="message-item__line">
        <div class="message-item__name">{{ name }}</div>
        <div class="message-item__data">
          <div class="message-item__time">{{ time }}</div>
          <div class="message-item__status"></div>
        </div>
      </div>
      <div class="message-item__message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    isNew: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .message-item {
    display: grid;
    grid-template-columns: 56px 1fr;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background-color: transparent;
    border-radius: 12px;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: var(--neutral-dark-gray-background-color);
    }

    &__avatar {
      position: relative;
      width: 56px;
      height: 56px;
      flex-shrink: 0;

      &--online {
        &::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          width: 12px;
          height: 12px;
          background-color: var(--primary-green-color);
          border: 4px solid var(--neutral-dark-gray-background-color);
          border-radius: 100%;
          transition: background-color 0.3s, border-color 0.3s;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
      }
    }

    &__details {
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: 4px;
      width: 100%;
    }

    &__line {
      display: flex;
      gap: 24px;
      justify-content: space-between;
      align-items: center;
    }

    &__name {
      font-weight: 700;
      font-size: 15px;
      letter-spacing: -0.01em;
      color: var(--neutral-champagne-color);
      transition: color 0.3s;
    }

    &__data {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    &__time {
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: var(--primary-ivory-color);
      transition: color 0.3s;
    }

    &__status {
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background-color: var(--primary-ivory-color);
      transition: background-color 0.3s;
    }

    &__message {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.015em;
      color: var(--primary-dark-white-color);
      padding-right: 24px;
    }

    &--new {
      .message-item__status {
        background-color: var(--primary-blue-color);
        transition: background-color 0.3s;
      }
    }
  }
</style>