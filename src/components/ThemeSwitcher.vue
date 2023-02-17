<template>
  <label class="theme-switcher">
    <input class="theme-switcher__input" type="checkbox" :checked="isDarkThemeMode" @change="toggleThemeMode">
    <span class="theme-switcher__inner">
      <span class="theme-switcher__sun">
        <v-icon-sun :is-active="isDarkThemeMode"/>
        <span class="theme-switcher__label">Light</span>
      </span>
      <span class="theme-switcher__moon">
        <v-icon-moon :is-active="!isDarkThemeMode"/>
        <span class="theme-switcher__label">Dark</span>
      </span>
    </span>
  </label>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ThemeSwitcher",
  methods: {
    ...mapActions({
      toggleThemeMode: 'theme/toggleThemeMode'
    })
  },
  computed: {
    ...mapGetters({
      isDarkThemeMode: 'theme/isDarkThemeMode'
    })
  }
}
</script>

<style scoped lang="scss">
  .theme-switcher {
    position: relative;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &__input {
      position: absolute;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    &__inner {
      display: flex;
      align-items: center;
      gap: 4px;
      position: relative;
      background-color: var(--neutral-dark-black-background-color);
      padding: 4px;
      border-radius: 40px;
      transition: all 0.3s;
      
      @media only screen and (max-width: 1250px) {
        width: 48px;
        height: 48px;
      }
    }

    &__moon, &__sun {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 4px 8px;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.01em;
      background-color: transparent;
      color: var(--neutral-dark-white-background-color);
      box-shadow: unset;
      border-radius: 32px;
      transition: background-color 0.3s, color 0.3s, box-shadow 0.3s, opacity 0.3s, visibility 0.3s;

      &:hover {
        color: var(--neutral-champagne-color) !important;

        &:deep(svg) {
          path {
            fill: var(--neutral-champagne-background-color) !important;
          }
        }
      }

      @media only screen and (max-width: 1250px) {
        padding: 8px;
        position: absolute;
        width: auto;
        visibility: hidden;
        opacity: 0;
      }
    }

    &__sun {
      background-color: var(--neutral-dark-gray-background-color);
      box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.49), inset 0px 2px 1px rgba(255, 255, 255, 0.06);
      color: var(--neutral-champagne-color);

      &:deep(svg) {
        path {
          fill: var(--neutral-champagne-background-color);
        }
      }

      @media screen and (max-width: 1250px) {
        visibility: visible;
        opacity: 1;
        z-index: 1;
      }
    }

    &__label {
      @media screen and (max-width: 1250px) {
        display: none;
      }
    }

    &__input:checked + &__inner &__moon {
      background: var(--neutral-dark-gray-background-color);
      box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.49), inset 0px 2px 1px rgba(255, 255, 255, 0.06);
      color: var(--neutral-champagne-color);

      &:deep(svg) {
        path {
          fill: var(--neutral-champagne-background-color);
        }
      }

      @media screen and (max-width: 1250px) {
        visibility: visible;
        opacity: 1;
        z-index: 2;
      }
    }

    &__input:checked + &__inner &__sun {
      background: transparent;
      box-shadow: unset;
      color: var(--neutral-dark-white-color);

      &:deep(svg) {
        path {
          fill: var(--neutral-dark-white-background-color);
        }
      }

      @media screen and (max-width: 1250px) {
        visibility: hidden;
        opacity: 0;
      }
    }
  }

  .sidebar--open {
    .theme-switcher {
      &__inner {
        @media screen and (max-width: 1250px) {
          width: auto;
          height: auto;
        }
      }

      &__moon, &__sun {
        @media screen and (max-width: 1250px) {
          padding: 4px 8px;
          position: inherit;
          width: 100%;
          visibility: visible !important;
          opacity: 1 !important;
        }
      }

      &__label {
        @media screen and (max-width: 1250px) {
          display: block;
        }
      }
    }
  }
</style>