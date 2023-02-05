<template>
  <div class="profile-data">
    <div class="profile-data__headline">Your profile</div>
    <div class="profile-data__fields">
      <div
        class="profile-data__field"
        v-if="profile.full_name"
      >
        <div class="profile-data__field-headline">Full Name</div>
        <span class="profile-data__field-separator"></span>
        <div
          class="profile-data__field-value"
          type="text"
        >
          {{ profile.full_name }}
        </div>
      </div>
      <div
        class="profile-data__field"
        v-if="profile.birthday"
      >
        <div class="profile-data__field-headline">Birthday</div>
        <span class="profile-data__field-separator"></span>
        <div
          class="profile-data__field-value"
          type="text"
        >
          {{ profile.birthday }}
        </div>
      </div>
      <div
        class="profile-data__field"
        v-if="profile.email"
      >
        <div class="profile-data__field-headline">Email</div>
        <span class="profile-data__field-separator"></span>
        <div
          class="profile-data__field-value"
          type="text"
        >
          {{ profile.email }}
        </div>
      </div>
      <div
        class="profile-data__field"
        v-if="profile.city"
      >
        <div class="profile-data__field-headline">City</div>
        <span class="profile-data__field-separator"></span>
        <div
          class="profile-data__field-value"
          type="text"
        >
          {{ profile.city }}
        </div>
      </div>
      <div
        class="profile-data__field"
        v-if="profile.password"
      >
        <div class="profile-data__field-headline">Password</div>
        <span class="profile-data__field-separator"></span>
        <div
          class="profile-data__field-value"
          type="text"
        >
          {{ profile.password }}
        </div>
      </div>
      <div
        class="profile-data__field"
        v-if="profile.country_code && profile.phone"
      >
        <div class="profile-data__field-headline">Phone</div>
        <span class="profile-data__field-separator"></span>
        <div
          class="profile-data__field-value"
          type="text"
        >
          {{ `${profile.country_code}${profile.phone}` }}
        </div>
      </div>
      <div
        class="profile-data__field"
        v-if="profile.languages"
      >
        <div class="profile-data__field-headline">Languages</div>
        <span class="profile-data__field-separator"></span>
        <div
          class="profile-data__field-value"
          type="text"
        />
        <div class="profile-data__languages">
          <div
            class="profile-data__language"
            v-for="language of profile.languages"
            :key="language.id"
          >
            {{ language.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfileStore } from '@/stores/profile'

let { profile } = useProfileStore()
</script>

<style lang="scss" scoped>
.profile-data {
  &__headline {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    line-height: 125%;
    color: $black;
    font-weight: 600;
  }

  &__fields {
    margin-top: 32px;
    min-width: 400px;
    @media screen and (max-width: 680px) {
      min-width: 100%;
    }
  }

  &__field {
    display: flex;
    padding: 4px;
    justify-content: space-between;
  }

  &__field-headline {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 125%;
    color: $black;
    flex-shrink: 0;
    padding-right: 8px;
    margin-top: auto;
  }

  &__field-separator {
    width: 100%;
    padding: 0 8px;
    height: 5px;
    border-bottom: 1px dashed #cacaca;
    margin-top: auto;
    margin-bottom: 7px;
  }

  &__field-value, &__language {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 125%;
    flex-shrink: 0;
    margin-left: auto;
    padding-left: 8px;
    color: $black;
  }
}
</style>
