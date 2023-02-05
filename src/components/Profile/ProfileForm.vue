<template>
  <div class="profile-form">
    <div class="profile-form__headline">Change your profile</div>
    <Form
      @submit="onSubmit"
      v-slot="{ values, errors }"
    >
      <div class="profile-form__inputs">
        <UIInputGroupMain
          class="profile-form__input"
          input-type="text"
          input-name="full_name"
          input-placeholder="Full name"
          group-name="Full name"
          validation-rules="requiredValidation"
          :current-value="profile.full_name"
        />
        <UIInputGroupMain
          class="profile-form__input"
          input-type="date"
          input-name="birthday"
          input-placeholder="Birthday"
          :need-a-date-mask="true"
          group-name="Birthday"
          :current-value="profile.birthday"
        />
        <UIInputGroupMain
          class="profile-form__input"
          input-type="email"
          input-name="email"
          input-placeholder="Email"
          group-name="Email"
          validation-rules="emailValidation"
          :current-value="profile.email"
        />
        <UIInputGroupMain
          class="profile-form__input"
          input-type="text"
          input-name="city"
          input-placeholder="City"
          group-name="City"
          :current-value="profile.city"
        />
        <UIInputGroupMain
          class="profile-form__input"
          input-type="password"
          input-name="password"
          input-placeholder="Enter password"
          group-name="Password"
          :need-a-visibility-controller="true"
          :need-a-question-tooltip="true"
          question-tooltip-text="Password must contain 8+ symbols, 1 special and 2 capital letters"
          validation-rules="passwordValidation"
          :current-value="profile.password"
        />
        <UIInputGroupMain
          class="profile-form__input"
          input-type="password"
          input-name="repeat_password"
          input-placeholder="Repeat password"
          group-name="Repeat password"
          :need-a-visibility-controller="true"
          validation-rules="requiredValidation|confirmedValidation:@password"
        />
        <UIPhoneInputMain
          class="profile-form__input"
          input-name="phone"
          group-name="Phone"
          :mask-items="masks"
          @change-mask="updateCountryCode"
          :current-value="profile.phone"
          :country-code="profile.country_code"
        />
        <UIMultiselectInputMain
          class="profile-form__input"
          group-name="Languages"
          :input-items="languages"
          items-group-name="Selected Languages"
          @change="updateLanguages"
        />
      </div>
      <UITextButton
        class="profile-form__button"
        text="Change"
        type="submit"
      />
    </Form>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate'

import UIInputGroupMain from '@/components/UI/UITextInput/UITextInputMain.vue'
import UITextButton from '@/components/UI/UITextButton.vue'
import UIPhoneInputMain from '@/components/UI/UIPhoneInput/UIPhoneInputMain.vue'
import UIMultiselectInputMain from '@/components/UI/UIMultiselectInput/UIMultiselectInputMain.vue'

import { usePhoneMasksStore } from '@/stores/phoneMasks'
import { useLanguagesStore } from '@/stores/languages'
import { useProfileStore } from '@/stores/profile'

import { usePasswordValidator, useConfirmedValidator, useRequiredValidator, useEmailValidator } from '@/composables/useValidators'
import { ref } from 'vue'

usePasswordValidator()
useConfirmedValidator()
useRequiredValidator()
useEmailValidator()

let emit = defineEmits(['changed'])


let { masks } = usePhoneMasksStore()
let { languages } = useLanguagesStore()
let { profile, updateProfile } = useProfileStore()

let languagesValue = ref(null)
let countryCode = ref(null)

function updateLanguages(languages) {
  languagesValue = Array.from(languages)
}

function updateCountryCode(updatedCountryCode) {
  countryCode = updatedCountryCode
}

function onSubmit(values) {
  values.languages = languagesValue
  values.country_code = countryCode
  updateProfile(values)
  emit('changed')
}
</script>

<style lang="scss" scoped>
.profile-form {
  &__headline {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    line-height: 125%;
    color: $black;
    font-weight: 600;
  }

  &__inputs {
    margin-top: 32px;
  }

  &__input {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }

  &__button {
    height: 50px;
    margin: 24px 0 0 auto;
  }
}
</style>