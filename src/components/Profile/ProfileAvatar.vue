<template>
  <div class="profile-avatar">
    <div class="profile-avatar__img-container">
      <img
        :src="imageSource"
        alt=""
        class="profile-avatar__img"
      />
      <div class="profile-avatar__buttons">
        <UITextButton
          class="profile-avatar__button"
          text="Upload"
        />
        <UITextButton
          class="profile-avatar__button text-button--empty"
          text="Delete"
        />
      </div>
    </div>
    <div class="profile-avatar__id">@paultripolsky</div>
  </div>
</template>

<script setup>
import UITextButton from '@/components/UI/UITextButton.vue'

defineProps({
  imageSource: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  width: fit-content;

  &__img-container {
    width: 180px;
    height: 180px;
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 680px) {
      overflow: initial;
      display: flex;
    }

    &:hover {
      & .profile-avatar__buttons {
        opacity: 1;
      }
    }

    @media screen and (max-width: 680px) {
      width: 120px;
      height: 120px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 100%;
  }

  &__buttons {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    background: rgba(255, 255, 255, 0.7);
    @media screen and (max-width: 680px) {
      position: initial;
      margin-left: 16px;
      opacity: 1
    }
  }

  &__button {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }

  &__id {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    margin-top: 8px;
  }
}
</style>
