<template>
  <tr v-for="order in orders" :key="order.id">
    <router-link to="/home">
      <td>{{ order.id }}</td>
    </router-link>
    <td width="100%">{{ order.surname }}</td>
    <td width="100%">{{ order.lastname }}</td>
    <td width="250%">{{ order.city }}</td>
    <td width="100%">{{ calculateOrderValue(order) }}€</td>
  </tr>
</template>

<script>
export default {
  name: 'orderSingleView'
}
</script>

<style scoped>

</style>
