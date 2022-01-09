<template>
  <div class="form container">
    <h5 class="pb-2">Bitte neue Produktdaten eingeben</h5>
    <input type="text" class="form-control" placeholder="Produktname" aria-label="Produktname" v-model="productName">
    <input type="text" class="form-control" placeholder="Produktbeschreibung" aria-label="Produktbeschreibung" v-model="productDescription">
    <input type="text" class="form-control" placeholder="Preis" aria-label="Preis" v-model="costs">
    <input type="text" class="form-control" placeholder="Bild-URL" aria-label="Bild-URL" v-model="productUrl">
    <div class="changebutton"><button type="submit" @click="decideIfCreateOrUpdate" class="btn btn-success">Produkt aktualisieren</button></div>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  props: ['id', 'createOrUpdate'],
  data () {
    return {
      product: {
        productName: '',
        productDescription: '',
        costs: null,
        productUrl: ''
      }
    }
  },
  methods: {
    decideIfCreateOrUpdate () {
      if (this.$props.createOrUpdate === 'create') {
        this.createProduct()
      } else if (this.$props.createOrUpdate === 'update') {
        this.updateProduct()
      }
    },
    createProduct () {
      const myHeaders = new Headers()
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product'
      myHeaders.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        productName: this.productName,
        productDescription: this.productDescription,
        costs: this.costs,
        productUrl: this.productUrl
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
      alert('Produkt wurde erstellt')
    },
    updateProduct () {
      const myHeaders = new Headers()
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/product/' + this.$props.id
      myHeaders.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        productName: this.productName,
        productDescription: this.productDescription,
        costs: this.costs,
        productUrl: this.productUrl
      })

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: payload,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
      alert('Produkt wurde geändert')
    }
  }
}

</script>

<style scoped>
.container {
  margin-top: 20px;
  margin: 0 auto;
  padding: 40px;
}
input {
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 250px;
}
.btn {
  width: 200px;
  background: darkgreen;
  color: white;
  border-radius: 20px;
  box-shadow: 0 10px 10px silver;
}
.changebutton {
  padding-top: 10px;
}

.btn:active {
  box-shadow: 0 3px 0 silver;
  top: 3px;
}

</style>
