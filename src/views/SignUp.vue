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
                  ref="email"
                  type="text"
                  placeholder="Your email"
                  v-model="email"
                  :label-text="'Or continue with email address'"
                  :isError="v$.email.$invalid && v$.email.$error"
                  :errorMessage="v$.email?.$errors[0]?.$message"
                  @clear="resetVuelidateProperty('email')"
                  @update:modelValue="updateProperty($event, 'email')"
                  @blur="v$.email.$touch()"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 6H19C19.3862 6 19.7213 6.21897 19.8879 6.53954L12.5547 11.4283C12.2188 11.6523 11.7812 11.6523 11.4453 11.4283L4.11209 6.53953C4.27868 6.21896 4.61377 6 5 6ZM4 8.8685V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8.86852L13.6641 13.0924C12.6564 13.7642 11.3436 13.7642 10.3359 13.0924L4 8.8685ZM2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z" fill="#6F767E"/></svg>
              </v-input-icon>
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
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.7324Z" fill="#6F767E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 8V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V8C18.6569 8 20 9.34315 20 11V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V11C4 9.34315 5.34315 8 7 8ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V8H9V7ZM6 11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V11Z" fill="#6F767E"/></svg>
              </v-input-icon>
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
import VInputIcon from "@/components/UI/VInputIcon";
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
          console.log(errors);
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
          this.$router.push({ name: 'home' });
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