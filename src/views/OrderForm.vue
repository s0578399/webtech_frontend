<template>
  <section class="container">
    <h3>Bestellung abschließen</h3>
    <hr class="hr mx-auto">
    <p class="pb-3">Bitte gib hier deine Daten ein um die Bestellung abzuschließen</p>
    <div id="123" class="row">
    <div class="form col-lg-6 col-md 12 col-12">
      <div class="row pb-3">
        <div class="col">
          <input type="text" class="form-control" placeholder="Vorname" aria-label="Vorname" v-model="firstname">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Nachname" aria-label="Nachname" v-model="lastname">
        </div>
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="street" placeholder="Straße" v-model="street">
      </div>
      <div class="mb-3">
        <input type="" class="form-control" id="postcode" placeholder="Postleitzahl" v-model="postcode">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="city" placeholder="Stadt" v-model="city">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="country" placeholder="Land" v-model="country">
      </div>
    </div>
    <div id="overview" class="col-lg-6 col-md 12 col-12">
        <div>
          <h5 id="total">Warenkorb gesamt</h5>
          <div class="d-flex justify-content-between">
            <h6>Zwischensumme</h6>
            <p>5€</p>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Versand</h6>
            <p>10€</p>
          </div>
          <hr class="second-hr">
          <div class="d-flex justify-content-between">
            <h6>Gesamt</h6>
            <p>5€</p>
          </div>
          <button @click="createOrder" type="submit" class="btn btn-success">Bestellung abschließen</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderForm',
  data () {
    return {
      firstname: '',
      lastname: '',
      street: '',
      postcode: null,
      city: '',
      country: ''
    }
  },
  methods: {
    createOrder () {
      console.log(this.firstname)
      console.log(this.lastname)
      console.log(this.street)
      console.log(this.postcode)
      console.log(this.city)
      console.log(this.country)
      const myHeaders = new Headers()
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/order'
      myHeaders.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        surname: this.firstname,
        lastname: this.lastname,
        street: this.street,
        postcode: this.postcode,
        city: this.city,
        country: this.country,
        products: this.$store.state.productsInShoppingCart
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
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
#total {
  background-color: darkgreen;
  color: #fff;
  border: solid;
  padding: 6px 12px;
  font-weight: 700;
}
#overview {
  border: 1px solid gray;
  padding: 6px 12px;
  font-weight: 700;
}
.container {
  padding: 50px;
}
.form {
  padding-right: 20px;
}

#overview {
  padding-left: 20px;
}
.btn {
  color: white;
  background-color: darkgreen;
  box-shadow: 3px 8px 6px silver;
  border-radius: 20px;
}
.btn:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}
.btn:active {
  box-shadow: 0 3px 0 silver;
  top: 3px;
}

</style>
