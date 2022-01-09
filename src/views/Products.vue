<template>
  <section id="products" class="my-5 pb-5">
    <div class="container text-center mt-5 py-5">
      <h3>Unsere Produkte</h3>
      <hr class="hr mx-auto">
      <p>Hier können Sie unsere Produkte sehen</p>
    </div>
    <div class="row mx-auto container-fluid">
      <div v-for="product in products" :key="product.id" class="product text-center col-lg-3 col-md-12 ">
        <router-link :to="{name: 'ProductSingleView', params: {id: product.id}}"><img class="img-fluid mb-3" :src="product.productUrl" height="1161" width="774"/></router-link>
        <h5 class="p-name">{{ product.productName }}</h5>
        <div class="description">
          <p>{{ product.productDescription }}</p>
        </div>
        <h4 class="p-price">{{ product.costs }}€</h4>
        <button class="buy-btn">Jetzt kaufen</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  computed: {
    cart () {
      return this.$store.state.productsInShoppingCart
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product'
    console.log(endpoint)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    const result = null

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(product => {
        this.products.push(product)
      }))
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
.product {
  cursor: pointer;
  margin-bottom: 2rem;
}

.product img {
  transition: 0.3s all;
  width: 400px;
  height: 400px;
}

.product:hover img {
  opacity: 0.7;
}

.product .buy-btn {
  background: darkgreen;
  color: white;
  transform: translateY(20px);
  opacity: 0;
  transition: 0.3s all;
  box-shadow: 2px 6px 4px silver;
}

.product:hover .buy-btn {
  transform: translateY(0);
  opacity: 1;
}
.hr {
  width: 300px;
  height: 3px;
  background-color: darkgreen;
  position: center;
}
</style>
