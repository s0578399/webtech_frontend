<template>
    <div class="row row-cols-1 row-cols-md-2 col-lg-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card h100">
          <img :src= "product.productUrl" class="card-img-top" :alt="product.productName">
          <div class="card-body">
            <router-link :to="{name: 'ProductSingleView', params: {id: product.id}}">
              <h5 class="card-title">{{ product.productName }}</h5>
              </router-link>
            <p class="card-text">{{ product.productDescription }}</p>
            <h6 class="card-price">{{ product.costs }}</h6>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },

  methods: {},
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
.col{
  margin-left: 20px;
  margin-top: 20px;
}
</style>
