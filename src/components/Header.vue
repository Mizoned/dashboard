<template>
  <header class="header">
    <v-search v-model="search" class="header__search"/>
    <div class="header__control">
      <div class="header__item">
        <v-button class="header__button" color="primary" label="Create">
          <template #svg-before><svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#FCFCFC"/></svg></template>
        </v-button>
      </div>
      <div class="header__item header-menu">
        <button class="header-menu__button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z" fill="#6F767E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8Z" fill="#6F767E"/>
          </svg>
        </button>
      </div>
      <div class="header__item header-search">
        <button class="header-search__button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177ZM18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z" fill="#6F767E"/>
          </svg>
        </button>
      </div>
      <messages></messages>
      <div class="header__item header-notification">
        <button class="header-notification__button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 16.5959C2 16.2151 2.15471 15.8506 2.42864 15.586L3.45759 14.5922C3.84928 14.2139 4.06977 13.6922 4.06814 13.1476L4.05867 9.9946C4.04543 5.58319 7.61789 2 12.0293 2C16.4314 2 20 5.56859 20 9.97067L20 13.1716C20 13.702 20.2107 14.2107 20.5858 14.5858L21.5858 15.5858C21.851 15.851 22 16.2107 22 16.5858C22 17.3668 21.3668 18 20.5858 18H16C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18H3.40408C2.62863 18 2 17.3714 2 16.5959ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18H10ZM18 13.1716C18 14.2324 18.4214 15.2499 19.1716 16L4.87851 16C5.64222 15.246 6.07136 14.2161 6.06813 13.1416L6.05867 9.9886C6.04875 6.6841 8.7248 4 12.0293 4C15.3268 4 18 6.67316 18 9.97067L18 13.1716Z" fill="#6F767E"/></svg>
        </button>
        <div class="notification__body"></div>
      </div>
      <div class="header__item header-user">
        <button class="header-user__button">
          <img src="../assets/images/profile.jpg" alt="">
        </button>
        <div class="header-user__body"></div>
      </div>
    </div>
  </header>
</template>

<script>
import VSearch from "@/components/UI/VSearch.vue";
import VButton from "@/components/UI/VButton.vue";
import Messages from "@/components/UI/Header/Messages.vue";

export default {
  name: "Header",
  components: {Messages, VButton, VSearch },
  data() {
    return {
      search: ''
    }
  },
}
</script>

<style scoped lang="scss">
  .message-test {
    .item__body {
      width: 500px;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 24px 40px;
    background-color: var(--neutral-07-color);
    box-shadow: inset 1px 0 0 var(--neutral-08-color);

    &__search {
      width: 360px;
      @media screen and (max-width: 768px) {
        width: 100%;
        display: none;
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        padding: 20px;
        background-color: var(--neutral-08-color);
      }
    }

    &__control {
      display: flex;
      gap: 24px;

      @media only screen and (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 16px 24px 16px 16px;
    }

    @media only screen and (max-width: 1024px) {
      &__control &__item:first-child {
        display: none;
      }
    }
  }

  .header-search {
    display: none;

    &__button {
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
    }
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }

  .header-menu {
    display: none;
    margin-right: auto;

    &__button {
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
    }
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }

  .header-messages {
    &__button {
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

  .header-notification {
    &__button {
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

  .header-user {
    &__button {
      position: relative;
      width: 48px;
      height: 48px;
      background: var(--secondary-orange-color);
      border: none;
      border-radius: 50%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      padding: 0;
      cursor: pointer;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
      }
    }
  }
</style>