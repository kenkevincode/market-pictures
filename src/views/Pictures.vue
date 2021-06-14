<template>
  <div class="content">
    <div class="content__title"><h1>Картины эпохи Возрождения</h1></div>
    <div class="content__items">
      <PictureCard
        v-for='pictureCard in pictures'
        :key='pictureCard.id'
        :pictureCard='pictureCard'
        :basket='basket'
        @buyPictureCard="buyPictureCard"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import PictureCard from '@/components/PictureCard.vue'
import { buyPicture, loadBasket, saveBasket } from '@/net/picture'
import pictures from '@/assets/picturesData'

export default {
  name: 'Pictures',
  components: {
    PictureCard
  },
  data: () => ({
    pictures,
    basket: {} // pictureId to count
  }),
  async created () {
    const basket = await loadBasket()
    if (basket) this.basket = basket
  },
  methods: {
    async buyPictureCard (pictureCard) {
      try {
        await buyPicture(pictureCard.id)

        if (pictureCard.id in this.basket) {
          ++this.basket[pictureCard.id]
        } else {
          Vue.set(this.basket, pictureCard.id, 1)
        }
        await saveBasket(this.basket)
      } catch (error) {
        console.error('buyPicture error:', error)
      } finally {
        console.log('buyPictureCard')
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0px auto;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1200px;
  margin: 0px auto;
  padding: 45px 0;
  flex: 1 1 auto;

  &__items {
    margin-right: -26.5px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-self: stretch;

    & > .card {
      margin: 0 26.5px 26.5px 0;
    }
  }

  &__title {
    margin-bottom: 39px;
  }
}
</style>
