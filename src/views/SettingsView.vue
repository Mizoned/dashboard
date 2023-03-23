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
                    <img ref="profileImage" :src="imagePath" alt="">
                    <button class="settings__m-remove">
                      <v-icon-close/>
                    </button>
                  </div>
                  <div class="settings__profile-controls">
                    <label class="settings__profile-controls-file">
                      <input ref="profilePictureUpload" type="file" @change="pictureLoadingHandler" accept="image/*">
                      <v-button before-svg-component-name="VIconAdd" label="Upload new picture" @click="this.$refs.profilePictureUpload.click()"></v-button>
                    </label>
                    <v-button class="settings__d-remove" label="Remove" color="secondary" @click="pictureRemovingHandler"></v-button>
                  </div>
                </div>
                <div class="settings__fieldset">
                  <v-input v-model="displayName"
                           @update:modelValue="updateProperty($event, 'displayName')"
                           :isError="this.v$.displayName.$invalid && this.v$.displayName.$error"
                           :errorMessage="v$.displayName?.$errors[0]?.$message"
                           label-text="Display name"
                           type="text"
                           name="name"
                           autocomplete="name"
                           @blur="v$.displayName.$touch()"
                  />
                  <v-input v-model="email"
                           @update:modelValue="updateProperty($event, 'email')"
                           :isError="this.v$.email.$invalid && this.v$.email.$error"
                           :errorMessage="v$.email?.$errors[0]?.$message"
                           label-text="Email"
                           type="email"
                           name="email"
                           autocomplete="email"
                           @blur="v$.email.$touch()"
                  />
                  <v-input v-model="location"
                           @update:modelValue="updateProperty($event, 'location')"
                           :isError="this.v$.location.$invalid && this.v$.location.$error"
                           :errorMessage="v$.location?.$errors[0]?.$message"
                           label-text="Location"
                           type="text"
                           name="location"
                           autocomplete="location"
                           @blur="v$.location.$touch()"
                  />
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
                  <v-input v-model="oldPassword"
                           label-text="Old password"
                           @update:modelValue="updateProperty($event, 'oldPassword')"
                           :isError="v$.oldPassword.$invalid && v$.oldPassword.$error"
                           :errorMessage="v$.oldPassword?.$errors[0]?.$message"
                           type="password"
                           name="oldPassword"
                           autocomplete="oldPassword"
                           @blur="v$.oldPassword.$touch()"
                  />
                  <div class="settings__fieldset-box">
                    <v-input v-model="newPassword"
                             label-text="New password"
                             @update:modelValue="updateProperty($event, 'newPassword')"
                             :isError="v$.newPassword.$invalid && v$.newPassword.$error"
                             :errorMessage="v$.newPassword?.$errors[0]?.$message"
                             type="password"
                             @blur="v$.newPassword.$touch()"
                             name="newPassword"
                             autocomplete="newPassword"
                    />
                    <v-input v-model="confirmNewPassword"
                             label-text="Confirm new password"
                             @update:modelValue="updateProperty($event, 'confirmNewPassword')"
                             :isError="v$.confirmNewPassword.$invalid && v$.confirmNewPassword.$error"
                             :errorMessage="v$.confirmNewPassword?.$errors[0]?.$message"
                             type="password"
                             @blur="v$.confirmNewPassword.$touch()"
                             name="confirmNewPassword"
                             autocomplete="confirmNewPassword"
                    />
                  </div>
                  <v-button
                      :disabled="isReadyUpdatePassword"
                      class="settings__login-btn"
                      label="Update password"
                      color="secondary"
                      :is-loading="isProfileUpdatePasswordLoading"
                      @click="updateProfilePasswordHandler"
                  />
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
                <v-toggle v-for="setting in notificationSettings" :label="setting.label" :useDivider="setting.useDivider">
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
      <v-button :disabled="isReadyUpdateProfileData"
                class="settings__save-btn"
                label="Save"
                @click="updateDataChangeHandler"
                :is-loading="isProfileChangeLoading"
                v-scroll-to="{ parentSelector: '.main__view', targetSelector: '#profile-information' }"
      />
    </div>
  </div>
</template>

<script>
import VToggle from "@/components/UI/VToggle.vue";
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers, minLength, maxLength, sameAs } from '@vuelidate/validators';
import { useToast } from "vue-toastification";
import { mapState, mapActions } from "vuex";
import checkFileSize from "@/utils/validators/checkFileSize";
import isImageFile from "@/utils/validators/isImageFile";

const validateImageFileType = helpers.withParams(
    { type: 'imageFileType' },
    isImageFile
);

const validateImageFileSize = helpers.withParams(
    { type: 'imageFileSize' },
    (value) => checkFileSize(value, 5)
);

export default {
  name: "SettingsView",
  components: { VToggle },
  data() {
    return {
      v$: useVuelidate(),
      isProfileChangeLoading: false,
      isProfileUpdatePasswordLoading: false,
      activeLinkKey: 0,
      toast: useToast(),
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
      displayName: this.$store.state?.auth?.user?.displayName ?? '',
      email: this.$store.state?.auth?.user?.email ?? '',
      location: this.$store.state.auth.user?.location ?? '',
      notificationSettings: [
        { name: 'notifyAboutProductUpdates', checked: this.$store.state?.auth?.user?.notifyAboutProductUpdates ?? '', useDivider: true, label: 'Product updates and community announcements' },
        { name: 'notifyAboutMarketNewsletter', checked: this.$store.state?.auth?.user?.notifyAboutMarketNewsletter ?? '', useDivider: true, label: 'Market newsletter' },
        { name: 'notifyAboutComments', checked: this.$store.state?.auth?.user?.notifyAboutComments ?? '', useDivider: true, label: 'Comments' },
        { name: 'notifyAboutPurchases', checked: this.$store.state?.auth?.user?.notifyAboutPurchases ?? '', useDivider: true, label: 'Purchases' },
      ],
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      profilePictureUpload: null,
      vuelidateExternalResults: {
        displayName: '',
        email: '',
        location: '',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        profilePictureUpload: null
      }
    }
  },
  validations () {
    return {
      email: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        email: helpers.withMessage('Email введён некорректно', email)
      },
      displayName: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        minLength: helpers.withMessage('Отображаемое имя должно быть больше 3 символов', minLength(4)),
        maxLength: helpers.withMessage('Отображаемое имя должно быть меньше 24 символов', maxLength(24)),
      },
      location: {
        maxLength: helpers.withMessage('Местоположение должно быть меньше 32 символов', maxLength(32)),
      },
      oldPassword: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        minLength: helpers.withMessage('Пароль должен быть больше 8 символов', minLength(9)),
        maxLength: helpers.withMessage('Пароль должен быть меньше 32 символов', maxLength(32)),
      },
      newPassword: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        minLength: helpers.withMessage('Пароль должен быть больше 8 символов', minLength(9)),
        maxLength: helpers.withMessage('Пароль должен быть меньше 32 символов', maxLength(32)),
      },
      confirmNewPassword: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        minLength: helpers.withMessage('Пароль должен быть больше 8 символов', minLength(9)),
        maxLength: helpers.withMessage('Пароль должен быть меньше 32 символов', maxLength(32)),
        sameAsNewPassword: helpers.withMessage('Пароли не совпадают', sameAs(this.newPassword)),
      },
      profilePictureUpload: {
        validateImageFileType: helpers.withMessage('Файл должен быть изображением. Вы выбрали файл другого типа', validateImageFileType),
        validateImageFileSize: helpers.withMessage('Размер файла не должен превышать 5 мегабайт', validateImageFileSize)
      }
    }
  },
  computed: {
    ...mapState({
      imagePath: state => state.auth.user.imagePath
    }),
    isReadyUpdateProfileData() {
      return this.v$.displayName.$invalid && this.v$.displayName.$error
          || this.v$.email.$invalid && this.v$.email.$error
          || this.v$.location.$invalid && this.v$.location.$error
          || this.isProfileChangeLoading
    },
    isReadyUpdatePassword() {
      return this.v$.oldPassword.$invalid && this.v$.oldPassword.$error
          || this.v$.newPassword.$invalid && this.v$.newPassword.$error
          || this.v$.confirmNewPassword.$invalid && this.v$.confirmNewPassword.$error
          || this.isProfileUpdatePasswordLoading
    }
  },
  methods: {
    ...mapActions({
      updateProfileData: 'user/updateProfileData',
      updateProfilePassword: 'user/updateProfilePassword',
      updateProfilePicture: 'user/updateProfilePicture',
      removeProfilePicture: 'user/removeProfilePicture'
    }),
    changeActiveLink(key) {
      this.settingsLinks[this.activeLinkKey].state = false;
      this.settingsLinks[key].state = true;
      this.activeLinkKey = key;
    },
    updateProperty(value, propertyName) {
      this.v$.$clearExternalResults();
      if (!value) {
        this.resetVuelidateProperty(propertyName);
      }
    },
    resetVuelidateProperty(propertyName) {
      this[propertyName] = '';
      this.v$[propertyName].$reset();
    },
    async updateDataChangeHandler() {
      if (this.v$.email.$invalid || this.v$.displayName.$invalid || this.v$.location.$invalid) {
        this.v$.email.$touch();
        this.v$.displayName.$touch();
        this.v$.location.$touch();
        return;
      }

      this.isProfileChangeLoading = true;

      let data = this.getPreparedDataFromForm();

      this.updateProfileData(data)
          .then(() => {
            this.showSuccessNotification('Данные профиля успешно изменены!');
          })
          .catch(error => {
            const errors = error?.response?.data?.errors;
            errors?.forEach(error => {
              this.vuelidateExternalResults[error.param] = error.msg;
            });
            this.showErrorNotification('Не все поля заполнены верно!');
          })
          .finally(() => {
            this.isProfileChangeLoading = false;
          });
    },
    getPreparedDataFromForm() {
      let data = {
        displayName: this.displayName,
        email: this.email,
        location: this.location
      };

      this.notificationSettings.forEach((setting) => {
        data[setting.name] = setting.checked;
      });

      return data;
    },
    async updateProfilePasswordHandler() {
      let data = this.getPreparedDataPasswords();

      if (this.v$.oldPassword.$invalid || this.v$.newPassword.$invalid || this.v$.confirmNewPassword.$invalid) {
        this.v$.oldPassword.$touch();
        this.v$.newPassword.$touch();
        this.v$.confirmNewPassword.$touch();
        return;
      }

      this.isProfileUpdatePasswordLoading = true;

      this.updateProfilePassword(data)
          .then(() => {
            this.showSuccessNotification('Пароль успешно изменен!');
          })
          .catch(error => {
            const errors = error?.response?.data?.errors;
            errors?.forEach(error => {
              this.vuelidateExternalResults[error.param] = error.msg;
            });
            this.showErrorNotification('Не все поля заполнены верно!');
          })
          .finally(() => {
            this.isProfileUpdatePasswordLoading = false;
          });
    },
    getPreparedDataPasswords() {
      return {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        confirmNewPassword: this.confirmNewPassword
      }
    },
    pictureLoadingHandler(event) {
      this.profilePictureUpload = event.target.files[0];
      this.v$.profilePictureUpload.$touch();

      if (this.v$.profilePictureUpload.$invalid) {
        this.showErrorNotification(this.v$.profilePictureUpload?.$errors[0]?.$message);
      } else {
        let data = new FormData();
        data.append('picture', this.profilePictureUpload);

        this.updateProfilePicture(data)
            .then(() => {
              this.showSuccessNotification('Картинка профиля успешно изменена!');
            })
            .catch((error) => {
              if (error?.response?.data?.errors[0].msg) {
                this.showErrorNotification(error?.response?.data?.errors[0].msg);
              } else {
                this.showErrorNotification(error?.message);
              }
            });
      }
    },
    pictureRemovingHandler() {
      this.removeProfilePicture()
          .then(() => {
            this.showSuccessNotification('Картинка профиля успешно удалена!');
          })
          .catch((error) => {
            if (error?.response?.data?.errors[0].msg) {
              this.showErrorNotification(error?.response?.data?.errors[0].msg);
            } else {
              this.showErrorNotification(error?.message);
            }
          });
    },
    showErrorNotification(message) {
      this.toast.error(message);
    },
    showSuccessNotification(message) {
      this.toast.success(message);
    },
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

      &-file {
        position: relative;

        input[type="file"] {
          position: absolute;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          opacity: 0;
        }
      }
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