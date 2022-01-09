<template>
  <section id="products" class="my-5 pb-5">
    <div class="container text-center mt-5 py-5">
      <h3>Produkte bearbeiten</h3>
      <hr class="hr mx-auto">
      <p class="pb-3">Herzlich willkommen zurück Admin!</p>
    </div>
    <div class="row mx-auto container-fluid">
      <div v-for="product in products" :key="product.id" class="product text-center col-lg-3 col-md-6 col-12">
        <router-link :to="{name: 'ProductSingleView', params: {id: product.id}}"><img class="img-fluid mb-3" :src="product.productUrl" height="1161" width="774"/></router-link>
        <h5 class="p-name">{{ product.productName }}</h5>
        <div class="description">
          <p>{{ product.productDescription }}</p>
        </div>
        <h4 class="p-price">{{ product.costs }}€</h4>
        <div class="buttons col">
          <router-link :to="{name: 'EditProduct', params: {id: product.id}}"><button class="edtbtn btn btn-success">Bearbeiten</button></router-link>
          <button @click="deleteProduct(product)" class="dltbtn btn btn-success">Löschen</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EditProducts',
  data () {
    return {
      products: []
    }
  },
  methods: {
    deleteProduct (product) {
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product/' + product.id

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
      alert('Produkt wurde gelöscht')
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
  }
}
</script>

<style scoped>
.hr {
  width: 300px;
  height: 3px;
  background-color: darkgreen;
  position: center;
}
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
.btn {
  width: 110px;
  background: darkgreen;
  color: white;
  transform: translateY(20px);
  opacity: 0;
  transition: 0.3s all;
  box-shadow: 2px 6px 4px silver;
  border-radius: 20px;
}
.product:hover .btn {
  transform: translateY(0);
  opacity: 1;
}
.product {
}

.dltbtn {
  position: relative;
  left: 25px
}
.edtbtn {
  position: relative;
  right: 25px;
}
</style>
