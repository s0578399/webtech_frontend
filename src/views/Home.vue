<template>
  <div class="home">
    <img src="../assets/ThePlantshop.png" height="500" width="500"/>
    <h2 class="header">Willkommen bei THE PLANT SHOP! Dein Versandhandel für Pflanzen, Blumen und Co.</h2>
    <h4>Die ist kein echter Online-Shop. Er dient nur zu Bildungszwecken.</h4>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  computed: {
    product () {
      return this.$store.state.products1
    }
  }
}
</script>
<style scoped>
.home {
  padding-top: 55px;
  padding-bottom: 55px;
}
img {
  border-radius: 55px;
}
.header {
  padding-top: 35px;
  padding-bottom: 60px;
}
h4 {
  color: red;
}
</style>
