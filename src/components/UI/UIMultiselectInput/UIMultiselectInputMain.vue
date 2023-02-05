<template>
  <div class="multiselect-input">
    <div class="multiselect-input__row">
      <div class="multiselect-input__name">{{ groupName }}</div>
    </div>
    <div class="multiselect-input__row"></div>
    <input
      class="multiselect-input__input"
      @focus="visibleWhenInputOnFocus"
      @click.stop
      v-model="searchQuery"
      @input="search"
    />
    <div
      class="multiselect-input__selected"
      v-if="selectedItems.length"
    >
      <div class="multiselect-input__selected-headline">{{ itemsGroupName }}</div>
      <div
        class="multiselect-input__selected-items"
        ref="multiselectContent"
      >
        <div
          class="multiselect-input__selected-item"
          v-for="(item, index) of selectedItems"
          :key="item.id"
          @click="deleteFromSelected(index)"
        >
          <div class="multiselect-input__selected-item-text">
            {{ item.value }}
          </div>
          <svg
            class="multiselect-input__selected-item-icon"
            fill="#000000"
            height="10px"
            width="10px"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 460.775 460.775"
            xml:space="preserve"
          >
            <path
              d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div
      class="multiselect-input__searchable-items"
      v-if="isVisible"
      @click.stop
    >
      <div
        class="multiselect-input__searchable-item"
        v-for="(item, index) of searchableItems"
        :key="item.id"
        @click="addToSelected(item, index)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useClickOutside from '@/composables/useClickOutside'

let props = defineProps({
  groupName: {
    type: String,
  },
  itemsGroupName: {
    type: String,
    required: true,
  },
  inputItems: {
    type: Array,
    required: true,
  },
})

let emit = defineEmits(['change'])

let selectedItems = ref([])
let isVisible = ref(false)
let multiselectContent = ref(null)
let searchQuery = ref('')
let searchableItems = ref(props.inputItems)

function addToSelected(item) {
  isVisible.value = false
  searchQuery.value = ''
  searchableItems = ref(props.inputItems)

  if (selectedItems.value.includes(item)) {
    let i = selectedItems.value.findIndex((obj) => obj.id === item.id)
    selectedItems.value.splice(i, 1)
  } else {
    selectedItems.value.push(item)
    selectedItems.value = selectedItems.value.sort((a, b) => a.id - b.id)
  }
  emit('change', selectedItems.value)
}

function deleteFromSelected(item) {
  isVisible.value = false
  let i = selectedItems.value.findIndex((obj) => obj.id === item.id)
  selectedItems.value.splice(i, 1)
  emit('change', selectedItems.value)
}

function visibleWhenInputOnFocus() {
  isVisible.value = true
}

function search() {
  let queryString = searchQuery.value.toLowerCase()
  let filteredArr = props.inputItems.filter((el) => el.value.toLowerCase().includes(queryString))
  if (queryString.length && filteredArr.length) {
    searchableItems.value = filteredArr
  } else {
    searchableItems.value = props.inputItems
  }
}

useClickOutside(multiselectContent, () => {
  isVisible.value = false
})
</script>

<style lang="scss" scoped>
.multiselect-input {
  position: relative;

  &__row {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
  }

  &__name,
  &__selected-headline {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    margin-left: 10px;
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
  }

  &__searchable-items {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: #f7f7f9;
    border-radius: 4px;
    position: absolute;
    top: 65px;
  }

  &__searchable-item,
  &__selected-item {
    white-space: nowrap;
    font-size: 14px;
    line-height: 125%;
    padding: 5px;
    cursor: pointer;
    border: 1px solid transparent;
    display: flex;
    align-items: center;

    &:hover {
      border: 1px solid $black;
    }
  }

  &__selected {
    margin-top: 8px;
  }

  &__selected-items {
    display: flex;
    margin-top: 4px;
  }

  &__selected-item {
    background: $smoky-white;

    &:not(:first-child) {
      margin-left: 8px;
    }
  }

  &__selected-item-icon {
    margin: 1px 0 0 4px;
  }
}
</style>
