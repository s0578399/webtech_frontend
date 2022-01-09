<template>
  <section class="pt-4 pb-5">
  <h3>Produkt bearbeiten</h3>
  <hr class="hr mx-auto">
  <p>Hier können die Produktdaten bearbeitet werden</p>
  <div class="container">
    <div class="row pt-4">
      <div class="container productview col-lg-3 col-md-6 col-12">
        <h3>{{ product.productName }}</h3>
        <img :src="product.productUrl" class="img-fluid mb-3">
        <p>{{ product.productDescription }}</p>
        <h6>{{ product.costs }}€</h6>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <ProductForm :id="this.id" :create-or-update="update"></ProductForm>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import ProductForm from '@/components/ProductForm'
export default {
  name: 'EditProduct',
  components: { ProductForm },
  data () {
    return {
      update: 'update',
      product: {
        id: '',
        productName: '',
        productDescription: '',
        costs: null,
        productUrl: ''
      }
    }
  },
  mounted () {
    this.id = this.$route.params.id
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product/' + this.id
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
.hr {
  width: 300px;
  height: 3px;
  background-color: darkgreen;
  position: center;
}
section {
}
.container .productview {
  padding-top: 50px;
  position: relative;
  top: 20px;
  text-align: left;
}
.row {
  position: relative;
  right: 160px;
}
img{
  width: 250px;
  height: 300px;
}

</style>
