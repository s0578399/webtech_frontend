<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <img class="navbar-brand" src="../assets/ThePlantshop.png" height="70" width="70"/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">Über uns</router-link>
          <router-link class="nav-link" to="/products">Produkte</router-link>
          <router-link class="nav-link" to="/shoppingCart">Warenkorb</router-link>
          <router-link class="nav-link" to="/orderForm">orderForm</router-link>
<!--          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">About</a>
          <a class="nav-link" href="#">Produkte</a>
          <a class="nav-link disabled">Kategorien</a>-->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.cart {
  text-align: right;
}
.navbar-nav {
  text-align: right;
}

</style>
