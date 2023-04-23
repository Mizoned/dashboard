<template>
  <div class="product-create">
    <div class="v-row product-create__row">
      <div class="v-column product-create__column">
        <v-box class="product-create__card">
          <template #head>
            <v-widget-title title="Name & description" color="green"/>
            <v-button label="Back" before-svg-component-name="VIconArrow" color="secondary" size="sm"></v-button>
          </template>
          <template #body>
            <div class="product-create__fieldset">
              <v-label-box label="Product title" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">
                <v-input
                    type="text"
                    name="name"
                    autocomplete="name"
                />
              </v-label-box>
              <v-label-box label="Description" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">
                <v-textarea/>
              </v-label-box>
<!--              <v-label-box label="Key features" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">-->
<!--                <div class="product-create__key-features">-->
<!--                  <v-input class="product-create__key-features-input" placeholder="Value"/>-->
<!--                  <v-input class="product-create__key-features-input" placeholder="Value"/>-->
<!--                  <v-input class="product-create__key-features-input" placeholder="Value"/>-->
<!--                  <v-input class="product-create__key-features-input" placeholder="Value"/>-->
<!--                </div>-->
<!--              </v-label-box>-->
            </div>
          </template>
        </v-box>
        <v-box class="product-create__card">
          <template #head><v-widget-title title="Images & CTA" color="blue"/></template>
          <template #body>
            <v-label-box label="Cover images" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">
              <v-upload-input label-button="Click or drop image"></v-upload-input>
            </v-label-box>
          </template>
        </v-box>
        <v-box class="product-create__card">
          <template #head><v-widget-title title="Price" color="orange"/></template>
          <template #body>
            <div class="product-create__fieldset">
              <v-label-box label="Amount" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">
                <v-input-icon svg-name-component="VIconDollar"></v-input-icon>
              </v-label-box>
<!--              <div>-->
<!--                <v-toggle label="Allow customers to pay they want" :useDivider="true" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">-->
<!--                  <v-switch :checked="true"/>-->
<!--                </v-toggle>-->
<!--                <div>-->
<!--                  <v-input-icon label-text="Minimum amount" svg-name-component="VIconDollar"></v-input-icon>-->
<!--                  <v-input-icon label-text="Suggested amount" svg-name-component="VIconDollar"></v-input-icon>-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </template>
        </v-box>
        <v-box class="product-create__card">
          <template #head><v-widget-title title="Category & attributes" color="purple"/></template>
          <template #body>
            <v-label-box label="Compatability" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">
              <div class="product-create__compatability">
                <v-checkbox class="product-create__compatability-checkbox" label="Sketch"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Figma"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Adobe XD"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Photoshop"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Cinema 4D"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Wordpress"/>
                <v-checkbox class="product-create__compatability-checkbox" label="HTML"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Keynote"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Maya"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Blender"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Procreate"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Illustrator"/>
                <v-checkbox class="product-create__compatability-checkbox" label="Framer"/>
                <v-checkbox class="product-create__compatability-checkbox" label="In Design"/>
                <v-checkbox class="product-create__compatability-checkbox" label="After Effect"/>
              </div>
            </v-label-box>
          </template>
        </v-box>
        <v-box class="product-create__card">
          <template #head>
            <v-widget-title title="Product files" color="yellow"/>
          </template>
          <template #body>
            <div class="product-create__fieldset">
              <v-label-box label="Content" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">
                <v-upload-input label-button="Click or drop files"></v-upload-input>
              </v-label-box>
              <v-label-box label="Fonts" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">
                <v-upload-input label-button="Click or drop files"></v-upload-input>
              </v-label-box>
            </div>
          </template>
        </v-box>
<!--        <v-box class="product-create__card">-->
<!--          <template #head><v-widget-title title="Discussion" color="blue"/></template>-->
<!--          <template #body>-->
<!--            <v-label-box label="Message to reviewer" tooltip-message="Maximum 100 characters. No HTML or emoji allowed">-->
<!--              <v-textarea/>-->
<!--            </v-label-box>-->
<!--          </template>-->
<!--        </v-box>-->
      </div>
      <div class="v-column product-create__column">
        <v-box class="product-create__card product-create__preview">
          <template #head>
            <v-widget-title title="Preview" color="blue"/>
            <v-button before-svg-component-name="VIconExpand" color="transparent" size="square"></v-button>
          </template>
          <template #body>
          </template>
        </v-box>
      </div>
    </div>

  </div>
  <div class="panel">
    <div class="panel__info">
      <v-icon-check-all/>
      Last saved
      <span>Oct 4, 2021 - 23:32</span>
    </div>
    <div class="panel__buttons">
      <v-button label="Save Draft" color="secondary"/>
      <v-button label="Publish now"/>
    </div>
  </div>
</template>

<script>
import VInputIcon from "@/components/UI/VInputIcon.vue";
import VTextarea from "@/components/UI/VTextarea.vue";
import VCheckbox from "@/components/UI/VCheckbox.vue";
import VLabel from "@/components/UI/VLabel.vue";
import VInput from "@/components/UI/VInput.vue";
import VLabelBox from "@/components/UI/VLabelBox.vue";
import VBox from "@/components/VBox.vue";
import VUploadInput from "@/components/UI/VUploadInput.vue";
import VButton from "@/components/UI/VButton.vue";
import VIconCheck from "@/components/icons/VIconCheck.vue";

export default {
  name: "ProductCreate",
  components: { VIconCheck, VButton, VUploadInput, VBox, VLabelBox, VInput, VLabel, VCheckbox, VTextarea, VInputIcon }
}
</script>

<style scoped lang="scss">
  .panel {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    margin: auto -40px -40px -40px;
    padding: 60px 40px 20px;
    z-index: 1;

    &:before {
      content: "";
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color: var(--neutral-light-black-background-color);
      box-shadow: inset 1px 0px 0px var(--neutral-dark-black-background-color);
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    &__info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: var(--primary-dark-white-color);

      span {
        color: var(--neutral-champagne-color);
        transition: color 0.3s;
      }
    }

    &__buttons {
      display: flex;
      gap: 8px;
    }
  }

  .product-create {
    &__card {
      padding: 24px;
      border-radius: 8px;
      background-color: var(--neutral-light-black-background-color);

    }

    &__row {

    }

    &__column {
      &:first-child {
        flex: 0 0 calc(100% - 340px);
        width: calc(100% - 340px);
      }
      &:last-child {
        flex-shrink: 0;
        width: 340px;
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

    &__key-features {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      &-input {
        flex: 0 0 calc(50% - 12px);
        width: calc(50% - 12px);

        @media screen and (max-width: 768px) {
          flex: 0 0 100%;
          width: calc(50% - 12px);
        }
      }
    }

    &__compatability {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;

      &-checkbox {
        flex: 0 0 calc(33.33% - 16px);
        width: calc(33.333% - 16px);
      }
    }

    &__preview {
      position: sticky;
      top: -16px;
    }
  }

  .v-row {
    display: flex;
    gap: 8px;
  }
  .v-column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>