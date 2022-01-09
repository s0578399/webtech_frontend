<template>
  <section class="container">
    <h3>Bestellungen Übersicht</h3>
    <hr class="hr mx-auto">
    <p>Hier ist eine Übersicht über die Bestellungen</p>
  </section>
  <section id="orders-container" class="container my-5">
    <table width="100%">
      <thead>
      <tr>
        <td>Vorname</td>
        <td>Nachname</td>
        <td>Stadt</td>
        <td>Bestellwert</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td width="100%">{{ order.surname }}</td>
        <td width="100%">{{ order.lastname }}</td>
        <td width="250%">{{ order.city }}</td>
        <td width="100%"><h5>{{ calculateOrderValue(order) }}€</h5></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'OrderOverview',
  data () {
    return {
      orders: [],
      orderValue: null,
      productsInOrder: []
    }
  },
  methods: {
    calculateOrderValue (order) {
      order.products.forEach(product => {
        this.productsInOrder.push(product)
      })
      this.productsInOrder.forEach(product => {
        this.orderValue = this.orderValue + product.costs
      })
      return this.orderValue
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/order'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(order => {
        this.orders.push(order)
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

/*
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
*/
table {
  table-layout: auto;
  width: 150%;
}
td {
  width: 100px;
}
</style>
