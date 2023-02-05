<template>
  <div class="phone-input">
    <div class="phone-input__row">
      <div class="phone-input__name">
        {{ groupName }}
        <span
          v-if="currentValue && countryCode"
          class="phone-input__name-current"
        >
          (current: {{ `${countryCode}${currentValue}` }})
        </span>
      </div>
    </div>
    <div class="phone-input__row">
      <Field
        v-slot="{ field, errors }"
        :name="inputName"
        :rules="validateLength"
        :validate-on-input="true"
        @input="validate"
        v-model="inputValue"
      >
        <UIPhoneInputDropdown
          :mask-items="maskItems"
          @change-mask="changeMask"
          class="phone-input__dropdown"
          :class="{ 'phone-input__input--error': errors[0] }"
        />
        <div class="phone-input__field-group">
          <input
            type="text"
            class="phone-input__input"
            v-bind="field"
            :class="{ 'phone-input__input--error': errors[0] }"
            maxlength="30"
            :placeholder="inputPlaceholder"
            ref="currentInput"
          />
          <span class="phone-input__error-message">{{ errors[0] }}</span>
        </div>
      </Field>
    </div>
  </div>
</template>

<script setup>
import { Field } from 'vee-validate'
import UIPhoneInputDropdown from '@/components/UI/UIPhoneInput/UIPhoneInputDropdown.vue'
import { nextTick, ref } from 'vue'

let props = defineProps({
  maskItems: {
    type: Array,
    required: true,
  },
  groupName: {
    type: String,
  },
  inputName: {
    type: String,
    required: true,
  },
  validationRules: {
    type: [Object, String, Function],
  },
  currentValue: {
    type: String,
  },
  countryCode: {
    type: String
  }
})

let emit = defineEmits(['changeMask'])

let inputMask = ref(null)
let inputValue = ref('')
let inputPlaceholder = ref(null)
let currentInput = ref(null)

function changeMask(maskObj) {
  inputMask.value = maskObj
  inputPlaceholder.value = maskObj.placeholder
  validate()
  emit('changeMask', maskObj.code)
}

function mask(inputValue) {
  let inputNumbersValue = inputValue.value.replace(/\D/g, '')

  nextTick(() => {
    inputValue.value = inputMask.value.mask(inputNumbersValue)
    if (inputValue.value[inputValue.value.length - 1] === '-' || inputValue.value[inputValue.value.length - 1] === ')') {
      inputValue.value = inputValue.value.slice(0, -1)
    }
  })
}

function validate() {
  mask(inputValue)
}

function validateLength(value) {
  if (value.length !== inputMask.value.maxLength) {
    return 'Please enter correct phone number'
  }

  return true
}
</script>

<style lang="scss" scoped>
.phone-input {
  display: flex;
  flex-direction: column;

  &__name {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    margin-left: 10px;
  }

  &__name-current {
    color: #9e9e9e;
  }

  &__dropdown {
    height: 41px;
  }

  &__field-group {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__input {
    padding: 9px 18px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    border-radius: 0 8px 8px 0;
    background-color: $smoky-white;
    border: 1px solid transparent;
    width: 100%;

    &--error {
      background: rgba(255, 102, 131, 0.2);
    }
  }

  &__row {
    display: flex;
    height: 100%;
  }

  &__error-message {
    color: $error-message;
    font-weight: 400;
    font-size: 10px;
    line-height: 200%;
    margin-top: 2px;
    padding: 0 18px;
    max-width: 225px;
    margin-left: -60px;
  }
}
</style>
