<template>
  <div class="sidebar" v-click-outside="onClickOutsideHandler">
    <div class="sidebar__header">
      <v-logotype class="sidebar__logotype"/>
    </div>
    <div class="sidebar__menu">
      <template v-for="item in menuItems">
        <sidebar-element-dropdown class="sidebar-item" v-if="item?.children?.length" :label="item.name" :children="item.children" :iconComponentName="item.iconComponentName"/>
        <sidebar-link-element class="sidebar-item" v-else :label="item.name" :href="item.href" :iconComponentName="item.iconComponentName"/>
      </template>
    </div>
    <div class="sidebar__footer">
      <theme-switcher></theme-switcher>
    </div>
  </div>
</template>

<script>
import VLogotype from "@/components/VLogotype.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import SidebarLinkElement from "@/components/UI/Sidebar/SidebarLinkElement.vue";
import SidebarElementDropdown from "@/components/UI/Sidebar/SidebarElementDropdown.vue";
import { mapMutations } from "vuex";

export default {
  name: "Sidebar",
  components: { SidebarElementDropdown, SidebarLinkElement, ThemeSwitcher, VLogotype },
  data() {
    return {
      menuItems: [
        {
          name: 'Home',
          href: '/',
          iconComponentName: 'VIconHome'
        },
        {
          name: "Products",
          iconComponentName: 'VIconDiamond',
          children: [
            {
              name: 'Dashboard',
              href: '/products-dashboard'
            },
            {
              name: 'Drafts',
              href: '/products-drafts',
              counter: 2,
              counterColor: 'orange'
            },
            {
              name: 'Released',
              href: '/products-released'
            },
            {
              name: 'Comments',
              href: '/products-comments'
            },
            {
              name: 'Scheduled',
              href: '/products-scheduled',
              counter: 8,
              counterColor: 'green'
            }
          ]
        },
        {
          name: "Customers",
          iconComponentName: 'VIconProfileCircled',
          children: [
            {
              name: 'Overview',
              href: '/customer-overview'
            },
            {
              name: 'Customer list',
              href: '/customer-list'
            }
          ]
        },
        {
          name: 'Shop',
          href: '/shop',
          iconComponentName: 'VIconStore'
        },
        {
          name: "Income",
          iconComponentName: 'VIconPieChart',
          children: [
            {
              name: 'Earning',
              href: '/income-earning'
            },
            {
              name: 'Refunds',
              href: '/income-refunds'
            },
            {
              name: 'Payouts',
              href: '/income-payouts'
            },
            {
              name: 'Statements',
              href: '/income-statements'
            }
          ]
        },
        {
          name: 'Promote',
          href: '/promote',
          iconComponentName: 'VIconPromotion'
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      'setIsOverlayActive': 'overlay/setIsOverlayActive'
    }),
    onClickOutsideHandler() {
      this.setIsOverlayActive(false);
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    display: flex;
    gap: 48px;
    padding: 24px;
    flex-direction: column;
    background-color: var(--neutral-light-black-background-color);
    transition: background-color 0.3s;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    &__header {
      &__header-close {
        display: none;
      }
    }

    &__menu {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__footer {
      margin-top: auto;
    }
  }
</style>