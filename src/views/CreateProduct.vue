<template>
  <section class="container pt-5 pb-5">
    <h3>Produkt erstellen</h3>
    <hr class="hr mx-auto">
    <p>Hier kann ein neues Produkt erstellt werden</p>
    <div class="container">
      <ProductForm :create-or-update="create"></ProductForm>
    </div>
  </section>
</template>

<script>
import ProductForm from '@/components/ProductForm'
export default {
  name: 'CreateProduct',
  components: { ProductForm },
  data () {
    return {
      create: 'create'
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
.container{
  padding-bottom: 100px;
}
</style>
