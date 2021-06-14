import config from '@/config'
import axios from 'axios'

const BASKET_STORAGE = 'basket'

export async function loadBasket () {
  return JSON.parse(localStorage.getItem(BASKET_STORAGE))
}

export async function saveBasket (basket) {
  localStorage.setItem(BASKET_STORAGE, JSON.stringify(basket))
}

export function buyPicture (id) {
  return axios({
    method: 'GET',
    mode: 'cors',
    url: `${config.api}/posts/${id}`
  })
}
