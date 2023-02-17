<template>
  <router-link :to="href" exact class="sidebar-link-element" exact-active-class="active">
    <div class="sidebar-link-element__head">
      <component v-if="iconComponentName" :is="iconComponentName" :isActive="this.$route.name === label"/>
      <span class="sidebar-link-element__name">{{ label }}</span>
    </div>
    <div v-if="counter" class="sidebar-link-element__icons">
      <v-counter v-if="counter && counterColor" :quantity="counter" :color="counterColor"></v-counter>
    </div>
  </router-link>
</template>

<script>
import VCounter from "@/components/VCounter.vue";
import VIconHome from "@/components/icons/VIconHome.vue";

export default {
  name: "SidebarLinkElement",
  components: { VIconHome, VCounter },
  props: {
    href: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    isUseArrow: {
      type: Boolean,
      default: false
    },
    counter: {
      type: Number,
      required: false
    },
    counterColor: {
      type: String,
      required: false,
      default: ''
    },
    iconComponentName: {
      type: String,
      required: false
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .sidebar-link-element {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 12px;
    text-decoration: none;
    color: var(--primary-dark-white-color);
    background-color: transparent;
    box-shadow: unset;
    border-radius: 12px;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.01em;
    transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background-color: var(--neutral-dark-gray-background-color);
      color: var(--neutral-champagne-color);

      &:deep(svg) {
        path {
          fill: var(--neutral-champagne-background-color);
        }
      }
    }

    &.active {
      color: var(--neutral-champagne-color);
      background-color: var(--neutral-dark-gray-background-color);
      box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.4), inset 0px 1px 1px rgba(255, 255, 255, 0.11);

      .sidebar-link-element__head:deep(svg) {
        path {
          fill: var(--neutral-champagne-background-color);
        }
      }
    }

    &__head {
      display: flex;
      align-items: center;
      gap: 12px;

      &:deep(svg) {
        path {
          fill: var(--primary-dark-white-color);
        }
      }
    }

    &__name {
      @media screen and (max-width: 1250px) {
        display: none;
      }
    }

    &__icons {
      display: flex;
      align-items: center;
      gap: 12px;

      @media screen and (max-width: 1250px) {
        display: none;
      }
    }
  }

  .sidebar--open {
    .sidebar-link-element {
      &__name {
        @media screen and (max-width: 1250px) {
          display: block;
        }
      }

      &__icons {
        @media screen and (max-width: 1250px) {
          display: flex;
        }
      }
    }
  }
</style>