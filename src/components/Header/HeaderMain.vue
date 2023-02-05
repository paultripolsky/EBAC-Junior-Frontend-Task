<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__row">
        <UILogo
          class="header__logo"
          href="/"
        />
        <nav class="header__navigation">
          <ul class="header__navigation-items">
            <li class="header__navigation-item">
              <router-link
                class="header__navigation-item-link"
                to="#"
              >
                Cursos
              </router-link>
            </li>
            <li class="header__navigation-item">
              <router-link
                class="header__navigation-item-link"
                to="#"
              >
                Quem somos
              </router-link>
            </li>
            <li class="header__navigation-item">
              <router-link
                class="header__navigation-item-link"
                to="#"
              >
                Eventos
              </router-link>
            </li>
            <li class="header__navigation-item">
              <router-link
                class="header__navigation-item-link"
                to="#"
              >
                Blog
              </router-link>
            </li>
            <li class="header__navigation-item">
              <HeaderDropdown
                trigger-text="Para empresas"
                :content-items="dropdownContentItems"
              />
            </li>
          </ul>
        </nav>
        <div class="header__phone">
          <a
            class="header__phone-link"
            href="tel:+551130303200"
          >
            +55 (11) 3030-3200
          </a>
        </div>
        <UITextButton text="Login" />
      </div>
    </div>
  </header>
</template>

<script setup>
import UILogo from '@/components/UI/UILogo.vue'
import HeaderDropdown from '@/components/Header/HeaderDropdown.vue'
import UITextButton from '@/components/UI/UITextButton.vue'

let dropdownContentItems = [
  {
    text: 'Educação corporativa',
    link: '#',
  },
  {
    text: 'Atração de Talentos',
    link: '#',
  },
]
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    background-color: $smoky-white;
    padding: 20px 24px;
    border-radius: 24px;
    width: 100%;

  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__navigation {
    padding-left: 24px;
    @media screen and (max-width: 920px) {
      display: none;
    }
  }

  &__navigation-items {
    display: flex;
  }

  &__navigation-item {
    @include header-nav-item-16;

    &:not(:last-child) {
      margin-right: 28px;
    }

    @media screen and (max-width: 1280px) {
      font-size: 14px;
      &:not(:last-child) {
        margin-right: 14px;
      }
    }
  }

  &__phone {
    @media screen and (max-width: 920px) {
      margin-left: auto;
      margin-right: 16px;
    }
    @media screen and (max-width: 420px) {
      display: none;
    }
  }

  &__phone-link {
    @include header-nav-item-16;
    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }
}
</style>
