<template>
  <div class="nav">
    <router-link to="/">
      <div class="nav__logo">
        <img :src="logo" alt='logo'>
      </div>
    </router-link>
    <div class="nav__items">
      <div class="nav__item"><h5>Каталог</h5></div>
      <div class="nav__item"><h5>Доставка</h5></div>
      <div class="nav__item"><h5>Оплата</h5></div>
      <div class="nav__item"><h5>Контакты</h5></div>
      <div class="nav__item"><h5>О галерее</h5></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: ['logo']
}
</script>

<style lang="scss">
$navHeight: 48px;

.nav {
  display: flex;
  align-items: center;
  height: $navHeight;

  &__logo {
    width: 48px;
    height: $navHeight;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__item {
    margin-left: 48px;
    cursor: pointer;
  }
}
</style>
