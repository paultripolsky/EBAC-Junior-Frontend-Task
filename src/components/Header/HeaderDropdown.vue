<template>
  <div
    class="header-dropdown"
    @click.stop="isVisible = !isVisible"
    ref="dropdown"
  >
    <div class="header-dropdown__wrapper">
      <div class="header-dropdown__trigger">
        {{ triggerText }}
        <svg
          class="header-dropdown__trigger-arrow"
          :class="{ 'header-dropdown__trigger-arrow--rotate': isVisible }"
          fill="#000000"
          height="13px"
          width="13px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="-16.5 -16.5 363.00 363.00"
          xml:space="preserve"
          stroke="#000000"
          stroke-width="9.9"
        >
          <g
            id="SVGRepo_bgCarrier"
            stroke-width="0"
          ></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="1.98"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            ></path>
          </g>
        </svg>
      </div>
      <div
        class="header-dropdown__content"
        v-if="isVisible"
      >
        <ul class="header-dropdown__items">
          <li
            v-for="item in contentItems"
            :key="item.name"
            class="header-dropdown__item"
          >
            <router-link
              class="header-dropdown__item-link"
              :to="item.link"
            >
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useClickOutside from '@/composables/useClickOutside'

let props = defineProps({
  triggerText: {
    type: String,
    required: true,
  },
  contentItems: {
    type: Array,
    required: true,
  },
})

let isVisible = ref(false)
let dropdown = ref(null)
useClickOutside(dropdown, () => {
  isVisible.value = false
})
</script>

<style lang="scss" scoped>
.header-dropdown {
  &__wrapper {
    position: relative;
  }

  &__trigger {
    cursor: pointer;
    display: flex;
  }

  &__trigger-arrow {
    transition: all 0.2s ease-in-out;
    margin: 6px 0 0 6px;

    &--rotate {
      transform: rotate(180deg);
    }
  }

  &__content {
    position: absolute;
    box-shadow: 0 0 14px -6px rgb(24 39 75 / 40%);
    border-radius: 12px;
    padding: 16px;
    min-width: 190px;
    right: -30px;
    top: 40px;
    background-color: $smoky-white;

    &:after {
      position: absolute;
      content: '';
      width: 20px;
      height: 10px;
      background-image: linear-gradient(to bottom right, transparent 50%, $smoky-white 0),
        linear-gradient(to top right, $smoky-white 50%, transparent 0);
      background-size: 50% 100%;
      background-repeat: no-repeat;
      background-position: left, right;
      top: -10%;
      right: 45%;
    }
  }

  &__item {
    @include header-nav-item-14;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}
</style>
