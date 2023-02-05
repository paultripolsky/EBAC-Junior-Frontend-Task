<script setup>
import { RouterView } from 'vue-router'
import UIContainer from '@/components/UI/UIContainer.vue'
import HeaderMain from '@/components/Header/HeaderMain.vue'
import FooterMain from "@/components/Footer/FooterMain.vue";
</script>

<template>
  <UIContainer class="app__wrapper">
    <HeaderMain style="margin-top: 50px" />
    <RouterView />
    <FooterMain/>
  </UIContainer>
</template>

<style lang="scss" scoped>
.app {
  &__wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}
</style>
