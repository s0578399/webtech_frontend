<template>
  <div class="container sproduct">
    <div class="row">
      <div class="col-lg-5 col-md-12 col-12">
        <img :src="product.productUrl">
      </div>
      <div class="details col-lg-5 col-md 12 col-12">
        <div class="head">
          <p>Produkte / {{ product.productName }}</p>
          <h1>{{ product.productName }}</h1>
          <h4 class="price">{{ product.costs }}€</h4>
          <button v-on:click="addItemToCart(product)" type="button" class="btn btn-success">Zum Einkaufswagen hinzufügen</button>
          <hr>
          <h3>Product Details</h3>
          <br>
        </div>
        <div class="footer">
          <h6>Eine schöne Pflanze</h6>
          <br>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, co</p>
        </div>
      </div>
    </div>
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
      }
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
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product/' + this.id
    console.log(endpoint)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    const result = null

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(response => { this.product.productName = response.productName; this.product.id = response.id; this.product.productDescription = response.productDescription; this.product.costs = response.costs; this.product.productUrl = response.productUrl })
      .catch(error => console.log('error', error))
    return (result)
  },
  beforeMount () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product'
    console.log(endpoint)
  }
}
</script>

<style scoped>
.sproduct {
  margin-top: 80px;
  margin-bottom: 80px;
}
.sproduct img {
  padding: 0;
  height: 500px;
  width: 500px;
}
.sproduct .co {
  padding: 20px;
  text-align: left;
}
.sproduct h4 {
  margin: 20px 0;
  font-size: 22px;
  font-weight: bold;
}

.sproduct .details .head{
  text-align: left;
}
.sproduct .details .footer {
  text-align: center;
}
.sproduct .btn{
  color: white;
  background-color: darkgreen;
  box-shadow: 3px 8px 6px silver;
  border-radius: 20px;
}
.sproduct .btn:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}
.sproduct .btn:active {
  box-shadow: 0 3px 0 silver;
  top: 3px;
}
.sproduct .details .head p{
  color: darkgray;
}
</style>
