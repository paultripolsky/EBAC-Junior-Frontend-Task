<template>
  <div
    class="phone-input-dropdown"
    ref="phoneInputDropdown"
  >
    <div
      class="phone-input-dropdown__trigger"
      @click="toggle"
    >
      {{ currentMaskValue }}
      <svg
        class="phone-input-dropdown__trigger-arrow"
        fill="#000000"
        height="13px"
        width="13px"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 330 330"
        xml:space="preserve"
        :class="{ 'phone-input-dropdown__trigger-arrow--rotated': contentVisible }"
      >
        <path
          id="XMLID_225_"
          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
        />
      </svg>
    </div>
    <div
      class="phone-input-dropdown__content"
      v-if="contentVisible"
    >
      <div class="phone-input-dropdown__items">
        <div
          class="phone-input-dropdown__item"
          v-for="(item, index) of maskItems"
          :key="item.id"
          @click="changeMask(index)"
        >
          <img
            class="phone-input-dropdown__item-flag"
            :src="item.flag"
            alt=""
          />
          <div class="phone-input-dropdown__item-text">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import useClickOutside from '@/composables/useClickOutside'

let props = defineProps({
  maskItems: {
    type: Array,
    required: true,
  },
})

let emit = defineEmits(['changeMask'])

let contentVisible = ref(false)
let currentMaskValue = ref(null)
let phoneInputDropdown = ref(null)

function toggle() {
  contentVisible.value = !contentVisible.value
}

function changeMask(index) {
  currentMaskValue.value = props.maskItems[index].code
  contentVisible.value = false
  emit('changeMask', props.maskItems[index])
}

onMounted(() => {
  currentMaskValue.value = props.maskItems[0].code
  emit('changeMask', props.maskItems[0])
})

useClickOutside(phoneInputDropdown, () => {
  contentVisible.value = false
})
</script>

<style lang="scss" scoped>
.phone-input-dropdown {
  display: flex;
  position: relative;
  flex-direction: column;
  background: $smoky-white;
  border-radius: 8px 0 0 8px;

  &__trigger {
    height: 100%;
    display: flex;
    padding: 0 10px 0 18px;
    align-items: center;
    justify-content: center;
    color: $black;
    font-size: 14px;
    line-height: 125%;
    cursor: pointer;
  }

  &__trigger-arrow {
    margin-left: 8px;
    transition: all 0.2s ease-in-out;

    &--rotated {
      transform: rotate(180deg);
    }
  }

  &__content {
    position: absolute;
    top: 45px;
    z-index: 10;
  }

  &__items {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $smoky-white;
    border-radius: 4px;
  }

  &__item {
    padding: 5px;
    cursor: pointer;
    border: 1px solid transparent;
    display: flex;
    align-items: center;

    &:hover {
      border: 1px solid $black;
    }
  }

  &__item-flag {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  &__item-text {
    white-space: nowrap;
    font-size: 14px;
    line-height: 125%;
    margin-left: 8px;
  }
}
</style>
