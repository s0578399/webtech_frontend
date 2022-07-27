import { createStore } from 'vuex'

export default createStore({
  state: {
    productsInShoppingCart: [],
  },
  getters: {},
  mutations: {
    addProduct (state, product) {
      state.productsInShoppingCart.push(product)
    },
    deleteProduct (state, product, i) {
      state.productsInShoppingCart.splice(i, 1)
    }
  },
  actions: {},
  modules: {}
})
