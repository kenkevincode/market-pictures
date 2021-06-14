<template>
  <div id="app" class="app">
    <div class="header">
      <div class="container">
        <Nav :logo="require('@/assets/logo/logo-museum-header.svg')"/>

        <div class="search">
          <div>
            <input class="search__input" type="text" placeholder="Поиск по названию картины"/>
          </div>
          <div class="search__button">
            <h4>Найти</h4>
          </div>
        </div>
      </div>
    </div>

    <router-view/>

    <div class="footer">
      <div class="container">
        <Nav :logo="require('@/assets/logo/logo-museum-footer.svg')"/>

        <div class="requisites">
          <div class="phone">
            <div class="phone__logo">
              <img src="@/assets/logo/phone.svg">
            </div>
            <div class="phone__number">
              <h5>+7 (495) 555-55-55</h5>
            </div>
          </div>

          <div class="address">
            <div class="addres__logo">
              <img src="@/assets/logo/address.svg">
            </div>
            <div class="addres__location">
              <h5>г.Москва, ул.Расплетина, 24</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');
@import 'style/reset';
@import 'style/controls';

$appBg: #F6F3F3;
$headerBorder: #ECEAEA;
$inputBorder: #E1E1E1;
$inputBorderFocus: #B5B5B5;
$inputBg: #F6F3F3;
$inputButtonBg: #403432;
$inputButtonHover: #776763;
$buttonTextColor: #FFFFFF;
$footerBg: #ECEAEA;

#app {
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: $appBg;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0px auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  border-bottom: 1px solid $headerBorder;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 416px;
  height: 48px;

  &__input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 290px;
    height: 48px;
    outline: none;
    padding-left: 16px;
    border: 1px solid $inputBorder;
    background-color: $inputBg;
    border-right: none;

    &:focus {
      border: 1px solid $inputBorderFocus;
      border-right: none;
    }
  }
  &__button {
    padding: 14px;
    width: 122px;
    height: 48px;
    background-color: $inputButtonBg;
    color: $buttonTextColor;
    cursor: pointer;

    &:hover{
      background-color: $inputButtonHover;
    }
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  background-color: $footerBg;
}

.requisites {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 449px;
  height:22px;
}

.phone {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 163px;
  height: 21px;

  &__logo {
    width: 14px;
    height: 14px;
  }

  &__number{
    width: 139px;
    height: 21px;
  }
}

.address {
  width: 238px;
  height: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    width: 16px;
    height: 16px;
  }

  &__location {
    width: 214px;
    height: 21px;
  }
}
</style>
