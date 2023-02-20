<template>
  <div class="authorization">
    <div class="authorization__plan">
      <div class="authorization__header"><v-logotype class="authorization__logotype"></v-logotype></div>
      <div class="authorization__container">
        <v-plan-includes></v-plan-includes>
      </div>
    </div>
    <div class="authorization__main">
      <div class="authorization__header">
        <div class="authorization__header-logotype"><v-logotype class="authorization__logotype"></v-logotype></div>
        <div class="authorization__main-sign-in">Already a member? <a class="v-link" href="/sign-in">Sign in</a></div>
      </div>
      <div class="authorization__container">
        <div class="sign-up">
          <h1 class="sign-up__title">Sign up</h1>
          <div v-if="step === 1" class="sign-up__container">
            <div class="sign-up__socials">
              <div class="sign-up__socials-text">Sign up with Open account</div>
              <v-social-list class="sign-up__list"/>
              <div class="sign-up__hr"></div>
            </div>
            <div class="sign-up__form form-component">
              <v-input-icon
                  type="text"
                  placeholder="Your email"
                  v-model="email"
                  autocomplete="off"
                  :label-text="'Or continue with email address'"
                  :isError="v$.email.$invalid && v$.email.$error"
                  :errorMessage="v$.email?.$errors[0]?.$message"
                  @clear="resetVuelidateProperty('email')"
                  svg-name-component="VIconMail"
                  @update:modelValue="updateProperty($event, 'email')"
                  @blur="v$.email.$touch()"
              />
              <v-button :disabled="v$.email.$invalid && v$.email.$error" @click="registrationCodeSendHandler" label="Continue" color="primary"></v-button>
              <v-captcha class="sign-up__captcha"/>
            </div>
          </div>
          <div v-else-if="step === 2" class="sign-up__container">
            <div class="sign-up__socials">
              <div  class="sign-up__socials-text">We just send you a verify code. Check your inbox to get them.</div>
            </div>
            <div class="sign-up__form form-component">
              <v-code
                  v-model="code"
                  :isError="v$.code.$invalid && v$.code.$error"
                  :errorMessage="v$.code?.$errors[0]?.$message"
                  @update:modelValue="updateProperty($event, 'code')"
                  @blur="v$.code.$touch()"
              />
              <v-button :disabled="v$.code.$invalid && v$.code.$error" @click="registrationCodeVerifyHandler" label="Continue" color="primary"></v-button>
              <v-captcha class="sign-up__captcha"/>
            </div>
          </div>
          <div v-else-if="step === 3" class="sign-up__container">
            <div class="sign-up__socials">
              <div class="sign-up__socials-text">Sign up with Open account</div>
              <v-social-list class="sign-up__list"/>
            </div>
            <div class="sign-up__form form-component">
              <v-input-icon
                  type="password"
                  autocomplete="off"
                  placeholder="Password"
                  :label-text="'Enter the password for your future account'"
                  v-model="password"
                  :isError="this.v$.password.$invalid && this.v$.password.$error"
                  :errorMessage="v$.password?.$errors[0]?.$message"
                  @clear="resetVuelidateProperty('password')"
                  @update:modelValue="updateProperty($event, 'password')"
                  @blur="v$.password.$touch()"
                  svg-name-component="VIconLock"
              />
              <v-button :disabled="v$.code.$invalid && v$.code.$error" @click="signUpHandler" label="Continue" color="primary"></v-button>
              <v-captcha class="sign-up__captcha"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VInputIcon from "@/components/UI/VInputIcon.vue";
import VSocialList from "@/components/UI/Auth/VSocialList";
import VLabel from "@/components/UI/Auth/VLabel";
import VButton from "@/components/UI/VButton";
import VCaptcha from "@/components/VCaptcha";
import VLogotype from "@/components/VLogotype";
import VPlanIncludes from "@/components/UI/Auth/VPlanIncludes";
import { useVuelidate } from '@vuelidate/core';
import {required, email, helpers, minLength, maxLength} from '@vuelidate/validators';
import VCode from "@/components/UI/Auth/VCode.vue";
import {mapActions} from "vuex";

export default {
  name: "SignUp",
  components: {
    VCode,
    VInputIcon, VSocialList, VLabel, VButton, VCaptcha, VLogotype, VPlanIncludes
  },
  data() {
    return {
      v$: useVuelidate(),
      email: '',
      step: 1,
      code: '',
      password: '',
      vuelidateExternalResults: {
        email: '',
        code: '',
        password: ''
      }
    }
  },
  validations () {
    return {
      email: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        email: helpers.withMessage('Email введён некорректно', email)
      },
      code: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        minLength: helpers.withMessage('Код должен состоять из 4 символов', minLength(4)),
        maxLength: helpers.withMessage('Код должен состоять из 4 символов', maxLength(4)),
      },
      password: {
        required: helpers.withMessage('Поле обязательно для заполнения', required),
        minLength: helpers.withMessage('Пароль должен быть больше 8 символов', minLength(9)),
        maxLength: helpers.withMessage('Пароль должен быть меньше 32 символов', maxLength(32)),
      },
    }
  },
  methods: {
    ...mapActions({
      sendRegistrationCode: 'auth/sendRegistrationCode',
      verifyRegistrationCode: 'auth/verifyRegistrationCode',
      signUp: 'auth/signUp'
    }),
    async registrationCodeSendHandler() {
      if (this.v$.email.$invalid) {
        this.v$.email.$touch();
        return;
      }

      this.sendRegistrationCode({ email: this.email })
        .then((response) => {
          this.step++;
        })
        .catch(error => {
          const errors = error.response.data.errors;
          errors.forEach(error => {
            this.vuelidateExternalResults[error.param] = error.msg;
          });
        });
    },
    async registrationCodeVerifyHandler() {
      if (this.v$.code.$invalid) {
        this.v$.code.$touch();
        return;
      }

      this.verifyRegistrationCode({ email: this.email, code: this.code })
        .then((response) => {
          this.step++;
        })
        .catch(error => {
          this.v$.code.$touch();
          const errors = error.response.data.errors;
          errors.forEach(error => {
            this.vuelidateExternalResults.code = error.msg;
          });
        });
    },
    async signUpHandler() {
      if (this.v$.password.$invalid) {
        this.v$.password.$touch();
        return;
      }

      this.signUp({ email: this.email, password: this.password })
        .then((response) => {
          this.$router.push({ name: 'Home' });
        })
        .catch(error => {
          const errors = error.response.data.errors;
          errors.forEach(error => {
            this.vuelidateExternalResults.password = error.msg;
          });
        });
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
    }
  }
}
</script>

<style scoped lang="scss">
.authorization {
  display: grid;
  grid-template-columns: 400px 1fr;
  height: 100%;

  &__plan {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &__main {
    display: grid;
    grid-template-rows: auto 1fr;
    background-color: var(--neutral-light-black-background-color);
    transition: background-color 0.3s;
    height: 100%;
  }

  &__container {
    padding: 24px;
    align-self: center;
    justify-self: center;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 24px;

    &-logotype {
      display: none;

      @media screen and (max-width: 768px) {
        display: block;
      }
    }
  }

  &__main-sign-in {
    margin-left: auto;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: var(--primary-ivory-color);
    padding: 16px;
    text-align: right;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.sign-up {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 296px;

  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.03em;
    color: var(--neutral-champagne-color);
    margin: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__socials {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-text {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: var(--neutral-champagne-color);
    }
  }

  &__hr {
    height: 2px;
    background-color: var(--neutral-dark-gray-background-color);
    border-radius: 2px;
    margin-top: 12px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__captcha {
    margin-top: 20px;
  }
}

.v-link {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: var(--neutral-champagne-color);
  text-decoration: none;
}
</style>