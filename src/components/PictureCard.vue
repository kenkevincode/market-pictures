<template>
  <div class="card">
    <img class="card__image" :src="pictureCard.image">
    <div class="card__content">
      <div>
        <h2>«{{ pictureCard.title }}»</h2>
      </div>
      <div>
        <h2>{{ pictureCard.painter }}</h2>
      </div>
    </div>

    <div class="card__footer" v-if="!pictureCard.sold">
      <div class="card__coast">
        <div class="card__old-price">
          <h6>{{ pictureCard.oldPrice }}</h6>
        </div>
        <div>
          <h3>{{ pictureCard.price }}</h3>
        </div>
      </div>
      <div v-if="!(pictureCard.id in basket)" class="card__buy-button" @click="buyPicture">
        <h4>Купить</h4>
      </div>
      <div v-else class="card__basket-button">
        <div class="basket-logo">
          <img src="@/assets/logo/basket.svg">
        </div>
        <div>
          <h4>В корзине</h4>
        </div>
      </div>
    </div>
    <div class="card__status" v-else>
      <div class="card__status-title"><h3>Продана на аукционе</h3></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureCard',
  props: {
    pictureCard: {
      type: Object,
      required: true
    },
    basket: {
      type: Object,
      required: true
    }
  },
  methods: {
    buyPicture () {
      this.$emit('buyPictureCard', this.pictureCard)
    }
  }
}
</script>

<style lang="scss">
$borderCard: #E1E1E1;
$buttonBgHover: #776763;
$buttonTextColor: #FFFFFF;
$buttonBuyBg: #403432;
$buttonTextColorOldPrice: #A0A0A0;
$buttonBasketBg: #5B3A32;
$soldBg: rgba(255, 255, 255, 0.568);
$soldTitleTextColor:  rgb(167, 167, 167);

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 328px;
  border: 1px solid $borderCard;

  &__image {
    width: 278px;
    border-bottom: 1px solid $borderCard;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 36px 0 24px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    margin: 24px 24px 24px;
  }

  &__coast {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  &__old-price {
    text-decoration: line-through;
    color: $buttonTextColorOldPrice;
  }

  &__buy-button {
    padding: 13px 0;
    width: 118px;
    height: 48px;
    background-color: $buttonBuyBg;
    color: $buttonTextColor;
    cursor: pointer;

    &:hover{
      background-color: $buttonBgHover;
    }
  }

  &__basket-button {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 13px 0;
    width: 118px;
    height: 48px;
    background-color: $buttonBasketBg;
    color: $buttonTextColor;
    cursor: default;
  }

  &__status {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 278px;
    height: 326px;

    position: absolute;
    top: 0;
    left: 0;
    background-color: $soldBg;
    z-index: 1;
  }

  &__status-title {
    margin: 0 0 32px 24px;
    color: $soldTitleTextColor;
  }
}

.basket-logo {
  width: 13px;
  height: 9px;
}
</style>
