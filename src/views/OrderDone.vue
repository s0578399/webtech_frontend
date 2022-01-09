<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-7 col-12"></div>
      <div class="message col-lg-4 col-md-7 col-12">
        <p class="mb-4">Vielen Dank für deine Bestellung! Wir melden uns nochmal bei dir sobald deine Bestellung verpackt und auf dem Weg zu dir ist.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
        </svg>
      </div>
      <div class="col-lg-4 col-md-7 col-12"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDone'
}
</script>

<style scoped>
.container {
  margin: 50px;
  font-size: 22px;
  font-weight: 700;
  position: center;
}
.message {
  border-style: solid;
  padding: 50px;
  border-radius: 20px;
  border-color: darkgreen;
  box-shadow: 0 10px 10px silver;
}
svg {
  width: 40px;
  height: 40px;
  color: darkgreen;
}

</style>
