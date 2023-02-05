<template>
  <button class="text-button">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    required: true,
    type: String,
  },
})
</script>

<style lang="scss" scoped>
.text-button {
  @include button-text;
  background: linear-gradient(0deg, $black, $black);
  padding: 4px 14px;
  color: $white;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;

  &--empty {
    background: transparent;
    border: 1px solid $black;
    color: $black;

    &:hover {
      background: linear-gradient(90deg, #3f7af8, #8a53f7);
      color: $white;
      border: 1px solid transparent;
    }
  }

  &:hover {
    background: linear-gradient(90deg, #3f7af8, #8a53f7);
  }
}
</style>
