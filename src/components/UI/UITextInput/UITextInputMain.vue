<template>
  <keep-alive>
    <div
      class="input-group"
      ref="inputGroup"
    >
      <div class="input-group__row">
        <div class="input-group__name">
          {{ groupName }}
          <span
            v-if="currentValue"
            class="input-group__name-current"
            >
            (current: {{ currentValue }})
          </span>
        </div>
        <UIQuestionTooltip
          v-if="needAQuestionTooltip"
          :text="questionTooltipText"
        />
      </div>
      <div class="input-group__row">
        <Field
          v-slot="{ field, errors }"
          :name="inputName"
          :rules="validationRules"
          v-model="inputValue"
          :validate-on-input="true"
        >
          <div class="input-group__field-group">
            <input
              class="input-group__input"
              v-bind="field"
              :type="refInputType"
              :placeholder="inputPlaceholder"
              :style="{ paddingRight: paddingRightOnInputWithVisibilityController }"
              :class="{ 'input-group__input--error': errors[0] }"
              ref="currentInput"
              autocomplete="on"
            />
            <span class="input-group__error-message">{{ errors[0] }}</span>
          </div>
        </Field>
        <UITextInputVisibilitySwitcher
          v-if="inputType === 'password'"
          :input-type="refInputType"
          @change-input-type="changeInputTypeOnPasswordField"
          class="input-group__visibility-switcher"
        />
      </div>
    </div>
  </keep-alive>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Field } from 'vee-validate'
import useFocus from '@/composables/useFocus'

import UIQuestionTooltip from '@/components/UI/UIQuestionTooltip.vue'
import UITextInputVisibilitySwitcher from '@/components/UI/UITextInput/UITextInputVisibilitySwitcher.vue'

let props = defineProps({
  groupName: {
    type: String,
  },
  inputType: {
    type: String,
    required: true,
  },
  inputPlaceholder: {
    type: String,
    required: true,
  },
  inputName: {
    type: String,
    required: true,
  },
  validationRules: {
    type: [Object, String, Function],
  },
  needAQuestionTooltip: {
    type: Boolean,
  },
  questionTooltipText: {
    type: String,
  },
  needADateMask: {
    type: Boolean,
  },
  needAMask: {
    type: Boolean,
  },
  maskItems: {
    type: Array,
  },
  currentValue: {
    type: String,
  },
})

let refInputType = ref(props.inputType)
let currentInput = ref(null)
let inputGroup = ref(null)
let inputValue = ref('')

let paddingRightOnInputWithVisibilityController = computed(() => {
  return props.inputType === 'password' ? '40px' : '18px'
})

function changeInputTypeOnPasswordField(value) {
  refInputType.value = value
  useFocus(currentInput)
}
</script>

<style lang="scss" scoped>
.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
  }

  &__field-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

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

  &__input {
    padding: 9px 18px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    border-radius: 8px;
    background-color: $smoky-white;
    border: 1px solid transparent;
    width: 100%;

    &:focus {
      border: 1px solid $deep-purple-blue;
    }

    &--error {
      background: rgba(255, 102, 131, 0.2);
    }
  }

  &__visibility-switcher {
    position: absolute;
    right: 16px;
    top: 10px;
  }

  &__input-mask-dropdown {
    position: absolute;
    left: 15px;
  }

  &__error-message {
    color: $error-message;
    font-weight: 400;
    font-size: 10px;
    line-height: 200%;
    margin-top: 2px;
    padding: 0 18px;
    max-width: 225px;
  }
}
</style>
