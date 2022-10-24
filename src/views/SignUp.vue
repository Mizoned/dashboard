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
        <div class="authorization__main-sign-in">
          Already a member? <a class="v-link" href="#">Sign in</a>
        </div>
      </div>
      <div class="authorization__container">
        <div class="sign-up">
          <h1 class="sign-up__title">Sign up</h1>
          <div class="sign-up__container">
            <div class="sign-up__socials">
              <div class="sign-up__socials-text">Sign up with Open account</div>
              <v-social-list class="sign-up__list"></v-social-list>
            </div>
            <div class="sign-up__hr"></div>
            <form class="sign-up__form form-component">
              <v-label>
                <template v-slot:label>Or continue with email address</template>
                <template v-slot:input>
                  <v-input-icon type="text" placeholder="Your email">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 6H19C19.3862 6 19.7213 6.21897 19.8879 6.53954L12.5547 11.4283C12.2188 11.6523 11.7812 11.6523 11.4453 11.4283L4.11209 6.53953C4.27868 6.21896 4.61377 6 5 6ZM4 8.8685V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8.86852L13.6641 13.0924C12.6564 13.7642 11.3436 13.7642 10.3359 13.0924L4 8.8685ZM2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z" fill="#6F767E"/></svg>
                  </v-input-icon>
                </template>
              </v-label>
              <v-button>Continue</v-button>
              <v-captcha></v-captcha>
            </form>
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

export default {
  name: "SignUp",
  components: {
    VInputIcon, VSocialList, VLabel, VButton, VCaptcha, VLogotype, VPlanIncludes
  },
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
  }

  &__main {
    display: grid;
    grid-template-rows: auto 1fr;
    background-color: var(--neutral-07-color);
    height: 100%;
  }

  &__container {
    padding: 24px;
    align-self: center;
    justify-self: center;
  }

  &__header {
    padding: 24px;
  }

  &__main-sign-in {
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: var(--neutral-shade-04-75-color);
    padding: 16px;
    text-align: right;
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
    color: var(--neutral-01-color);
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
      color: var(--neutral-00-color);
    }
  }

  &__hr {
    height: 2px;
    background-color: var(--neutral-06-color);
    border-radius: 2px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

.v-link {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: var(--neutral-01-color);
  text-decoration: none;
}
</style>