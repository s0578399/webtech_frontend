<template>
  <section id="blog-home" class="pt-5 mt-5 container">
    <h2>Warenkorb</h2>
    <hr class="hr mx-auto">
  </section>
  <section id="cart-container" class="container my-5">
    <table width="100%">
      <thead>
      <tr>
        <td>Entfernen</td>
        <td>Bild</td>
        <td>Produkt</td>
        <td>Gesamtpreis</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in cart" :key="product.id">
        <td v-on:click="removeItemFromCart(product)" width="100%"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg></a></td>
        <td width="100%"><img :src="product.productUrl" height="1161" width="774"/></td>
        <td width="250%">
          <h5>
            {{ product.productName }}
          </h5>
        </td>
        <td width="100%"><h5>{{ product.costs }}€</h5></td>
      </tr>
      </tbody>
    </table>
  </section>
  <section id="cart-bottom" class="container">
    <div class="row">
      <div class="coupon col-lg-6 col-md-6 col-12 mb-4">
        <div>
          <h5>Gutschein</h5>
          <p>Gib deinen Gutschein-Code hier ein</p>
          <input type="test" placeholder="Gutschein Code">
          <button id="b1" v-on:click="checkCoupon()" type="button" class="btn btn-success">Gutschein einlösen</button>
        </div>
      </div>
      <div class="total col-lg-6 col-md-6 col-12 mb-4">
        <div>
          <h5>Gesamtpreis</h5>
          <div class="d-flex justify-content-between">
            <h6>Zwischensumme</h6>
            <p>{{ calculatePrice() }}€</p>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Versand</h6>
            <p>10€</p>
          </div>
          <hr class="second-hr">
          <div class="d-flex justify-content-between">
            <h6>Gesamt</h6>
            <p>{{ calculateTotal() }}€</p>
          </div>
          <router-link to="orderForm"><button id="b2" type="button" class="btn btn-success pb-2">Bestellung abschließen</button></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data () {
    return {
      products: []
    }
  },
  methods: {
    calculatePrice () {
      let total = 0
      this.$store.state.productsInShoppingCart.forEach(product => {
        total += product.costs
      })
      return total
    },
    checkCoupon () {
      alert('Leider kein gültiger Gutschein-Code')
    },
    calculateTotal () {
      let total = 0
      this.$store.state.productsInShoppingCart.forEach(product => {
        total += product.costs
      })
      return total + 10
    },
    removeItemFromCart (product) {
      const i = this.$store.state.productsInShoppingCart.indexOf(product)
      this.$store.commit('deleteProduct', product, i)
    }
  },
  computed: {
    cart () {
      return this.$store.state.productsInShoppingCart
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
#cart-container {
  overflow-x: auto;
}
#cart-container table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
}
#cart-container table thead {
  font-weight: 700;

}
#cart-container table thead td {
  background-color: darkgreen;
  color: #fff;
  border: solid;
  padding: 6px 0;
}

#cart-container table td{
  border: 1px solid gray;
  text-align: center;
}

#cart-container table div> td:nth-child(1) {
  width: 2px;
}
#cart-container table div>loop td:nth-child(2),
#cart-container table td:nth-child(3) {
  width: 200px;
}
#cart-container table div>loop td:nth-child(4) {
  width: 2px;
}

#cart-container table tbody img {
  width: 100px;
  height: 80px;
  object-fit: cover;
}
#cart-container table tbody svg{
  color: gray;
}

#cart-bottom .coupon>div,
#cart-bottom .total>div {
  border: 1px solid gray;
}

#cart-bottom .coupon h5,
#cart-bottom .total h5 {
  background-color: darkgreen;
  color: #fff;
  border: solid;
  padding: 6px 12px;
  font-weight: 700;
}

#cart-bottom .coupon p,
#cart-bottom .coupon input {
  padding: 0 12px;
}
#cart-bottom .coupon input {
  height: 44px;
}

#cart-bottom .coupon input,
#cart-bottom .coupon button {
  margin: 0 0 20px 12px;
}

#cart-bottom .total div>div {
  padding: 0 12px;
}

#cart-bottom .total h6 {
  color: black;
}

.second-hr {
  background-color: #b8b8b3;
  width: 100%;
  height: 1px;
}

#cart-bottom .total div>button {
  margin: 0 12px 20px 0;
  display: flex;
  justify-content: flex-end;
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
#b2 {
  position: relative;
  margin-bottom: 10px;
}
#b1 {
  position: relative;
  top: 8px;
}
table {
  table-layout: auto;
  width: 150%;
}
td {
  width: 100px;
}
</style>
