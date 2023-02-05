<template>
  <div class="footer">
    <div class="footer__wrapper">
      <UILogo
        class="header__logo"
        href="/"
      />
      <router-link
        to="#"
        class="footer__privacy"
        >Política de Privacidade e Contrato de Prestação de Serviço
      </router-link>
      <div class="footer__copyright">© 2023, Test task for junior frontend dev in EBAC, Paul Tripolsky</div>
    </div>
  </div>
</template>

<script setup>
import UILogo from '@/components/UI/UILogo.vue'
</script>

<style lang="scss" scoped>
.footer {
  padding: 20px 24px;
  background: $smoky-white;
  border-radius: 24px 24px 0 0;

  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 680px) {
      flex-direction: column;
      align-items: initial;
    }
  }

  &__privacy {
    margin-left: 32px;
    font-size: 12px;
    line-height: 160%;
    color: #797979;

    &:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 680px) {
      margin-left: initial;
      margin-top: 16px;
    }
  }

  &__copyright {
    font-size: 12px;
    line-height: 160%;
    color: #797979;
    margin-left: auto;
    @media screen and (max-width: 680px) {
      margin-left: initial;
      margin-top: 32px;
    }
  }
}
</style>
