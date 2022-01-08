<template>
  <section id="blog-home" class="pt-5 mt-5 container">
    <h2>Einkaufswagen</h2>
    <hr>
  </section>
  <section id="cart-container" class="container my-5">
    <table width="100%">
      <thead>
      <tr>
        <td>Entfernen</td>
        <td>Bild</td>
        <td>Produkt</td>
        <td>Preis</td>
        <td>Menge</td>
        <td>Gesamtpreis</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in cart" :key="product.id">
        <td width="100%"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg></a></td>
        <td width="100%"><img :src="product.productUrl" height="1161" width="774"/></td>
        <td width="200%">
          <h5>
            {{ product.productName }}
          </h5>
        </td>
        <td width="200%"><h5>{{ product.costs }}€</h5></td>
        <td width="170%"><input class= "w-25 p1-1" type="number"></td>
        <td width="170%"><h5>{{ product.costs }}€</h5></td>
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
          <button v-on:click="checkCoupon">Gutschein einlösen</button>
        </div>
      </div>
      <div class="total col-lg-6 col-md-6 col-12 mb-4">
        <div>
          <h5>CART TOTAL</h5>
          <div class="d-flex justify-content-between">
            <h6>Subtotal</h6>
            <p>{{ calculatePrice() }}€</p>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Shipping</h6>
            <p>10€</p>
          </div>
          <hr class="second-hr">
          <div class="d-flex justify-content-between">
            <h6>Total</h6>
            <p>{{ calculateTotal() }}€</p>
          </div>
          <button class="m-auto">PROCEED TO CHECKOUT</button>
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

#cart-container table div>loop td:nth-child(1) {
  width: 100px;
}
#cart-container table div>loop td:nth-child(2),
#cart-container table td:nth-child(3) {
  width: 200px;
}
#cart-container table div>loop td:nth-child(4),
#cart-container table td:nth-child(5),
#cart-container table td:nth-child(6) {
  width: 170px;
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
</style>
