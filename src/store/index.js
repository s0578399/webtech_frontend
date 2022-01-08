import { createStore } from 'vuex'

export default createStore({
  state: {
    product: {
      id: 1,
      productName: 'Kaktus',
      productDescription: 'keine Beschreibung',
      costs: 25.00
    },
    productsInShoppingCart: [],
    products1: [
      {
        id: 1,
        productName: 'Kaktus',
        productDescription: 'keine Beschreibung',
        costs: 99.99,
        productUrl: 'keine'
      },
      {
        id: 2,
        productName: 'Apfelbaum',
        productDescription: 'keine Beschreibung',
        costs: 199.99,
        productUrl: 'keine'
      }
    ]
  },
  getters: {},
  mutations: {
    addProduct (state, product) {
      state.productsInShoppingCart.push(product)
    }
  },
  actions: {},
  modules: {}
})
