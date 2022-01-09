<template>
  <section class="container">
    <h3>Admin Seite</h3>
    <hr class="hr mx-auto">
    <p class="pb-3">Herzlich willkommen zurück Admin!</p>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12"></div>
      <div id="wrapper" class="col-lg-4 col-md-6 col-12">
        <div class="container">
          <router-link to="/createProduct"><button type="button" class="btn btn-success">Produkt erstellen</button></router-link>
        </div>
        <div class="container">
          <router-link to="/adminProductOverview"><button type="button" class="btn btn-success">Produkte bearbeiten</button></router-link>
        </div>
        <div class="container">
          <router-link to="/home"><button type="button" class="btn btn-success">Bestellungen ansehen</button></router-link>
        </div>
      </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<style scoped>
.hr {
  width: 300px;
  height: 3px;
  background-color: darkgreen;
  position: center;
}
#buttons {
  padding: 20px;
  margin: 20px;
  position: center;
}

.row {
  padding: 20px;
  margin: 20px;
}
button {
  padding: 20px;
  width: 250px;
}
.container {
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
