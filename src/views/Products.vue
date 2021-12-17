<template>
    <div class="row row-cols-1 row-cols-md-4 col-lg-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card h100">
          <img :src="getPicture(product)" class="card-img-top" :alt="product.productName">
          <div class="card-body">
            <h5 class="card-title">{{ product.productName }}</h5>
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

  methods: {
    getPicture (product) {
      if (product.productName === 'Rose') {
        return require('../assets/rose.webp')
      } else if (product.productName === 'Kaktus') {
        return require('../assets/cactus.jpg')
      } else if (product.productName === 'Buchsbaum') {
        return require('../assets/tree.jpg')
      } else return require('../assets/plant.webp')
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product'
    console.log(endpoint)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(product => {
        this.products.push(product)
      }))
      .catch(error => console.log('error', error))
  },
  beforeMount () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product'
    console.log(endpoint)
  }
}

</script>

<style scoped>
</style>
