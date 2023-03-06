<template>
  <div class="settings">
    <div class="settings__menu">
      <div v-for="(link, key) in settingsLinks"
           :class="['settings__link', { 'active' : link.state }]"
           v-scroll-to="{ parentSelector: '.main__view', targetSelector: link.targetSelector }"
           @click="changeActiveLink(key)"
      >
        {{ link.label }}
      </div>
    </div>

    <div class="settings__inner">
      <div class="settings__list">
        <div class="settings__item">
          <v-box class="settings__basics">
            <template #head><v-widget-title title="Profile information" color="green" id="profile-information"/></template>
            <template #body>
              <div class="settings__profile">
                <div class="settings__profile-information">
                  <div class="settings__avatar">
                    <img src="@/assets/images/profile4.jpg" alt="">
                    <button class="settings__m-remove">
                      <v-icon-close/>
                    </button>
                  </div>
                  <div class="settings__profile-controls">
                    <v-button before-svg-component-name="VIconAdd" label="Upload new picture"></v-button>
                    <v-button class="settings__d-remove" label="Remove" color="secondary"></v-button>
                  </div>
                </div>
                <div class="settings__fieldset">
                  <v-input v-model="dataSettingsForm.displayName.value" @update:modelValue="updateDisplayName" label-text="Display name"/>
                  <v-input v-model="dataSettingsForm.email.value" @update:modelValue="updateEmail" label-text="Email"/>
                  <v-input v-model="dataSettingsForm.location.value" @update:modelValue="updateLocation" label-text="Location"/>
                </div>
              </div>
            </template>
          </v-box>
        </div>
        <div class="settings__item">
          <v-box class="settings__account">
            <template #head><v-widget-title title="Login" color="purple" id="login"/></template>
            <template #body>
              <div class="settings__login">
                <div class="settings__fieldset">
                  <v-input label-text="Old password"/>
                  <div class="settings__fieldset-box">
                    <v-input label-text="New password"/>
                    <v-input label-text="Confirm new password"/>
                  </div>
                  <v-button class="settings__login-btn" label="Update password" color="secondary"/>
                </div>
              </div>
            </template>
          </v-box>
        </div>
        <div class="settings__item">
          <v-box class="settings__notifications">
            <template #head><v-widget-title title="Notifications" color="orange" id="notification"/></template>
            <template #body>
              <div class="settings__fieldset">
                <v-toggle v-for="setting in dataSettingsForm.notificationSettings" :label="setting.label" :useDivider="setting.useDivider">
                  <v-switch v-model:checked="setting.checked"/>
                </v-toggle>
              </div>
            </template>
          </v-box>
        </div>
        <div class="settings__item">
          <v-box class="settings__payment">
            <template #head><v-widget-title title="Payment" color="green" id="payment"/></template>
            <template #body>
              <div class="settings__fieldset">
                <v-toggle label="Paypal" :useDivider="true">
                  <v-button label="Update" color="secondary"/>
                </v-toggle>
              </div>
            </template>
          </v-box>
        </div>
      </div>
      <v-button class="settings__save-btn" label="Save"/>
    </div>
  </div>
</template>

<script>

import VToggle from "@/components/UI/VToggle.vue";

export default {
  name: "SettingsView",
  components: { VToggle },
  data() {
    return {
      mes: '',
      activeLinkKey: 0,
      settingsLinks: [
        {
          state: true,
          targetSelector: '#profile-information',
          label: 'Base'
        },
        {
          state: false,
          targetSelector: '#login',
          label: 'Account'
        },
        {
          state: false,
          targetSelector: '#notification',
          label: 'Notification'
        },
        {
          state: false,
          targetSelector: '#payment',
          label: 'Payment'
        }
      ],
      dataSettingsForm: {
        displayName: { value: this.$store.state?.auth?.user?.displayName ?? '' },
        email: { value: this.$store.state?.auth?.user?.email ?? '' },
        location: { value: this.$store.state.auth.user?.location ?? '' },
        notificationSettings: [
          { name: 'productUpdates', checked: false, useDivider: true, label: 'Product updates and community announcements' },
          { name: 'marketNewsletter', checked: false, useDivider: true, label: 'Market newsletter' },
          { name: 'comments', checked: false, useDivider: true, label: 'Comments' },
          { name: 'purchases', checked: false, useDivider: true, label: 'Purchases' },
        ]
      }
    }
  },
  methods: {
    changeActiveLink(key) {
      this.settingsLinks[this.activeLinkKey].state = false;
      this.settingsLinks[key].state = true;
      this.activeLinkKey = key;
    },
    updateDisplayName(value) {
      this.dataSettingsForm.displayName.value = value;
    },
    updateEmail(value) {
      this.dataSettingsForm.email.value = value;
    },
    updateLocation(value) {
      this.dataSettingsForm.location.value = value;
    }
  }
}
</script>

<style scoped lang="scss">
  .settings {
    display: flex;
    align-items: flex-start;
    gap: 32px;
    padding: 24px;
    border-radius: 8px;
    background-color: var(--neutral-light-black-background-color);
    transition: background-color 0.3s;

    &__menu {
      display: flex;
      flex-direction: column;
      position: sticky;
      top: -16px;
      width: 280px;
      flex-shrink: 0;
      gap: 8px;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    &__link {
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: var(--primary-dark-white-color);
      text-decoration: none;
      padding: 8px 16px;
      background-color: transparent;
      transition: background-color 0.3s, color 0.3s;
      border-radius: 8px;
      cursor: pointer;

      &.active {
        color: var(--neutral-champagne-color);
        background-color: var(--neutral-dark-gray-background-color);
      }
    }

    &__inner {
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 100%;

      @media screen and (max-width: 768px) {
        gap: 32px;
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 48px;

      @media screen and (max-width: 768px) {
        gap: 32px;
      }
    }

    &__item {
      padding-bottom: 48px;
      border-bottom: 1px solid var(--neutral-dark-gray-background-color);
      transition: border-color 0.3s;

      &:last-child, &:nth-child(3) {
        padding-bottom: unset;
        border-bottom: none;
      }

      @media screen and (max-width: 768px) {
        padding-bottom: 32px;
      }
    }

    &__basics {

    }


    &__profile {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    &__profile-information {
      display: flex;
      align-items: center;
      gap: 32px;

      @media screen and (max-width: 768px) {
        gap: 16px;
      }
    }

    &__avatar {
      position: relative;
      flex-shrink: 0;
      width: 96px;
      height: 96px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    &__profile-controls {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    &__fieldset {
      display: flex;
      flex-direction: column;
      gap: 32px;

      @media screen and (max-width: 768px) {
        gap: 24px;
      }
    }

    &__fieldset-box {
      display: grid;
      gap: 16px;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }

    &__login {

    }

    &__m-remove {
      position: absolute;
      top: 0;
      right: 0;
      display: none;
      border: none;
      border-radius: 50%;
      padding: 4px;
      background-color: var(--neutral-champagne-background-color);

      &:deep(svg) {
        width: 16px;
        height: 16px;

        path {
          fill: var(--neutral-light-black-background-color);
        }
      }

      @media screen and (max-width: 768px) {
        display: flex;
      }
    }

    &__d-remove {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }







    &__save-btn, &__login-btn {
      align-self: flex-start;
    }

    @media screen and (max-width: 768px) {
      padding: 16px;
    }
  }
</style>