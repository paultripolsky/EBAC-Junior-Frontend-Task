<template>
  <div class="profile">
    <div class="profile__wrapper">
      <div class="profile__row">
        <div class="profile__col">
          <ProfileAvatar
            class="profile__avatar"
            image-source="src/assets/images/jpg/avatar.jpg"
          />
        </div>
        <div class="profile__col">
          <ProfileForm
            v-if="changeProfile"
            class="profile__form"
            button-text="Submit"
            @changed="updateProfileData"
          />
          <ProfileData v-else />
          <UITextButton
            v-if="changeProfile"
            class="text-button--empty profile__text-button"
            text="Cancel"
            @click="changeState"
          />
          <UITextButton
            v-else
            class="text-button--empty profile__text-button"
            text="Change profile"
            @click="changeState"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileAvatar from '@/components/Profile/ProfileAvatar.vue'
import ProfileForm from '@/components/Profile/ProfileForm.vue'
import ProfileData from '@/components/Profile/ProfileData.vue'
import UITextButton from '@/components/UI/UITextButton.vue'
import { ref } from 'vue'

let changeProfile = ref(false)

function changeState() {
  changeProfile.value = !changeProfile.value
}

function updateProfileData() {
  changeProfile.value = false
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 70px 0;
  @media screen and (max-width: 680px) {
    padding: 32px 0;
  }

  &__row {
    display: flex;
    @media screen and (max-width: 680px) {
      flex-direction: column;
    }
  }

  &__text-button {
    margin-top: 24px;
  }

  &__col {
    display: flex;
    flex-direction: column;

    &:nth-child(2) {
      margin-left: 150px;
      @media screen and (max-width: 800px) {
        margin-left: 50px;
      }
      @media screen and (max-width: 680px) {
        margin-left: initial;
        margin-top: 32px;
      }
    }
  }
}
</style>
