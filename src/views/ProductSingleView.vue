<template>
  <div class="card" style="width: 50rem;">
    <img :src= "product.productUrl" class="card-img-top" alt="card-pic">
    <div class="card-body">
      <h5 class="card-title"> {{ product.productName }} </h5>
      <p class="card-text"> {{ product.productDescription }} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="costs"> {{ product.costs }} € </li>
    </ul>
    <div class="card-body">
      <button v-on:click="addItemToCart(product)" type="button" class="btn btn-primary btn-lg">Zum Warenkorb hinzufügen</button>
    </div>
  </div>
  <div v-for="product in cart" :key="product.id">
    <p> {{ product.productName }} </p>
  </div>
  <div>
  </div>
</template>

<script>
export default {
  name: 'ProductSingleView',
  data () {
    return {
      product: {
        id: null,
        productName: null,
        productDescription: null,
        costs: null,
        productUrl: null
      },
      cart: []
    }
  },

  methods: {
    addItemToCart (product) {
      this.$store.commit('addProduct', product)
      console.log(this.$store.state.productsInShoppingCart)
    }
  },
  mounted () {
    this.id = this.$route.params.id
    console.log(this.id)
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product/' + this.id
    console.log(endpoint)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(response => { this.product.productName = response.productName; this.product.id = response.id; this.product.productDescription = response.productDescription; this.product.costs = response.costs; this.product.productUrl = response.productUrl })
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
.card {
  position: absolute;
  margin-left: 20px;
  margin-right: 20px;
}

</style>
