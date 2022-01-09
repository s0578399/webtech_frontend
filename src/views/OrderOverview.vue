<template>
  <section class="container pt-4 pb-6">
    <h3>Bestellungen Übersicht</h3>
    <hr class="hr mx-auto">
    <p>Hier ist eine Übersicht über die Bestellungen</p>
  </section>
  <section id="orders-container" class="row pb-4">
    <div class="col-lg-3 col-md-6 col-12"></div>
    <div class="col-lg-4 col-md-6 col-12">
      <table width="100%">
        <thead>
        <tr>
          <td>Bestellung ID</td>
          <td>Vorname</td>
          <td>Nachname</td>
          <td>Stadt</td>
          <td>Bestellwert</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in orders" :key="order.id">
          <router-link to="/home">
          <td>{{ order.id }}</td>
          </router-link>
          <td width="100%">{{ order.surname }}</td>
          <td width="100%">{{ order.lastname }}</td>
          <td width="250%">{{ order.city }}</td>
          <td width="100%">{{ calculateOrderValue(order) }}€</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-lg-3 col-md-6 col-12"></div>
  </section>
</template>

<script>
export default {
  name: 'OrderOverview',
  data () {
    return {
      orders: [],
      productsInOrder: []
    }
  },
  methods: {
    calculateOrderValue (order) {
      let orderValue = 0
      order.products.forEach(product => {
        orderValue += product.costs
      })
      return orderValue
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
#orders-container {
  overflow-x: auto;
}
#orders-container table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
}
#orders-container table thead {
  font-weight: 700;
}
#orders-container table thead td {
  background-color: darkgreen;
  color: #fff;
  border: solid;
  padding: 6px 0;
}

#orders-container table td{
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
  width: 150px;
  font-weight: 700;
  font-size: 18px;
}
table thead td {
  font-size: 20px;
}
</style>
