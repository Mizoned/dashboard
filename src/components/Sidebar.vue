<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <v-logotype class="sidebar__logotype"/>
    </div>
    <div class="sidebar__menu">
    </div>
    <div class="sidebar__footer">
    </div>
  </div>
</template>

<script>
import VLogotype from "@/components/VLogotype.vue";

export default {
  name: "Sidebar",
  components: { VLogotype },
  data() {
    return {
      menu: [
        {
          name: 'Home',
          route: '/',
          image: ''
        },
        {
          name: "Products",
          children: [
            {
              name: 'Dashboard',
              route: ''
            },
            {
              name: 'Drafts',
              route: ''
            },
            {
              name: 'Released',
              route: ''
            },
            {
              name: 'Comments',
              route: ''
            },
            {
              name: 'Scheduled',
              route: ''
            }
          ],
          image: ''
        },
        {
          name: "Customers",
          children: [
            {
              name: 'Overview',
              route: ''
            },
            {
              name: 'Customer list',
              route: ''
            }
          ],
          image: ''
        },
        {
          name: 'Shop',
          route: '/shop',
          image: ''
        },
        {
          name: "Income",
          children: [
            {
              name: 'Earning',
              route: ''
            },
            {
              name: 'Refunds',
              route: ''
            },
            {
              name: 'Payouts',
              route: ''
            },
            {
              name: 'Statements',
              route: ''
            }
          ],
          image: ''
        },
        {
          name: 'Promote',
          route: '/shop',
          image: ''
        }
      ]
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

    &__header {
      &__header-close {
      }
    }

    &__menu {
    }

    &__footer {
    }
  }
</style>