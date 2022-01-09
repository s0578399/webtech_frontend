<template>
  <div class="home">
    <img src="../assets/ThePlantshop.png" height="500" width="500"/>
    <HelloWorld msg="Hello World!"/>
    <h1>{{ product.productName }} - {{ product.id }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    product () {
      return this.$store.state.products1
    }
  }
}
</script>
