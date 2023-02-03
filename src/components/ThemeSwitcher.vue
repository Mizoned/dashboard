<template>
  <label class="theme-switcher">
    <input class="theme-switcher__input" type="checkbox">
    <span class="theme-switcher__inner">
      <span class="theme-switcher__sun">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 16C14.7091 16 16.5 14.2091 16.5 12C16.5 9.79086 14.7091 8 12.5 8C10.2909 8 8.5 9.79086 8.5 12C8.5 14.2091 10.2909 16 12.5 16ZM18.5 12C18.5 15.3137 15.8137 18 12.5 18C9.18629 18 6.5 15.3137 6.5 12C6.5 8.68629 9.18629 6 12.5 6C15.8137 6 18.5 8.68629 18.5 12Z" fill="#6F767E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4951 2C13.0474 2 13.4951 2.44772 13.4951 3V4C13.4951 4.55228 13.0474 5 12.4951 5C11.9428 5 11.4951 4.55228 11.4951 4V3C11.4951 2.44772 11.9428 2 12.4951 2Z" fill="#6F767E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4951 18.9995C13.0474 18.9995 13.4951 19.4472 13.4951 19.9995V20.9963C13.4951 21.5486 13.0474 21.9963 12.4951 21.9963C11.9428 21.9963 11.4951 21.5486 11.4951 20.9963V19.9995C11.4951 19.4472 11.9428 18.9995 12.4951 18.9995Z" fill="#6F767E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.42537 4.92864C5.81589 4.53811 6.44906 4.53811 6.83958 4.92864L7.70405 5.79311C8.09458 6.18363 8.09458 6.8168 7.70405 7.20732C7.31353 7.59784 6.68036 7.59784 6.28984 7.20732L5.42537 6.34285C5.03484 5.95232 5.03484 5.31916 5.42537 4.92864Z" fill="#6F767E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.2931 16.7958C17.6836 16.4053 18.3168 16.4053 18.7073 16.7958L19.5651 17.6537C19.9556 18.0442 19.9556 18.6774 19.5651 19.0679C19.1745 19.4584 18.5414 19.4584 18.1509 19.0679L17.293 18.21C16.9025 17.8195 16.9025 17.1863 17.2931 16.7958Z" fill="#6F767E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.49707 11.998C2.49707 11.4458 2.94479 10.998 3.49707 10.998H4.49707C5.04936 10.998 5.49707 11.4458 5.49707 11.998C5.49707 12.5503 5.04936 12.998 4.49707 12.998H3.49707C2.94479 12.998 2.49707 12.5503 2.49707 11.998Z" fill="#6F767E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.4966 11.998C19.4966 11.4458 19.9443 10.998 20.4966 10.998H21.4934C22.0456 10.998 22.4934 11.4458 22.4934 11.998C22.4934 12.5503 22.0456 12.998 21.4934 12.998H20.4966C19.9443 12.998 19.4966 12.5503 19.4966 11.998Z" fill="#6F767E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.42522 19.0678C5.03469 18.6773 5.03469 18.0441 5.42522 17.6536L6.28615 16.7927C6.67667 16.4021 7.30984 16.4021 7.70036 16.7927C8.09089 17.1832 8.09089 17.8163 7.70036 18.2069L6.83943 19.0678C6.44891 19.4583 5.81574 19.4583 5.42522 19.0678Z" fill="#6F767E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.286 7.20693C16.8955 6.8164 16.8955 6.18323 17.2861 5.79271L18.1506 4.92822C18.5411 4.5377 19.1743 4.53771 19.5648 4.92824C19.9553 5.31878 19.9553 5.95194 19.5648 6.34246L18.7002 7.20695C18.3097 7.59747 17.6765 7.59746 17.286 7.20693Z" fill="#6F767E"/></svg>
        Light
      </span>
      <span class="theme-switcher__moon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.7691 15.3753C21.1118 14.5799 20.366 13.8167 19.5 13.8167C14.5294 13.8167 10.5 9.78724 10.5 4.81667C10.5 3.95063 9.73674 3.20485 8.9414 3.54758C5.74067 4.92685 3.5 8.11009 3.5 11.8167C3.5 16.7872 7.52944 20.8167 12.5 20.8167C16.2066 20.8167 19.3898 18.576 20.7691 15.3753Z" fill="#6F767E"/></svg>
        Dark
      </span>
    </span>
  </label>
</template>

<script>
export default {
  name: "ThemeSwitcher"
}
</script>

<style scoped lang="scss">
  .theme-switcher {
    position: relative;
    cursor: pointer;

    &__input {
      position: absolute;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    &__inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px;
      background-color: var(--neutral-08-color);
      padding: 4px;
      border-radius: 40px;
    }

    &__moon, &__sun {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      padding: 4px 8px;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: var(--neutral-04-color);
      border-radius: 32px;
      transition: all 0.3s;

      &:hover {
        color: var(--neutral-01-color);

        svg {
          path {
            fill: var(--neutral-01-color);
          }
        }
      }
    }

    &__sun {
      background: var(--neutral-06-color);
      box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.49), inset 0px 2px 1px rgba(255, 255, 255, 0.06);
      color: var(--neutral-01-color);

      svg {
        path {
          fill: var(--neutral-01-color);
        }
      }
    }

    &__input:checked + &__inner &__moon {
      background: var(--neutral-06-color);
      box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.49), inset 0px 2px 1px rgba(255, 255, 255, 0.06);
      color: var(--neutral-01-color);
      svg {
        path {
          fill: var(--neutral-01-color);
        }
      }
    }

    &__input:checked + &__inner &__sun {
      background: transparent;
      box-shadow: unset;
      color: var(--neutral-04-color);

      svg {
        path {
          fill: var(--neutral-04-color);
        }
      }
    }
  }
</style>