<template>
  <div class="box">
    <div class="item1">
      <img src="../assets/plant.webp" height="1161" width="774" class="img"/>
    </div>
    <div class="item2">item2</div>
  </div>
</template>

<script>
export default {
  name: 'Test'
}
</script>

<style scoped>
.box {
  width: 400px;
  height: 400px;
  border: 5px solid black;
  position: static;
  margin-left: 50px;
}

.item1{
  background-color: #42b983;
}
.item2 {
  background-color: aqua;
}
.item1, .item2{
  width: 150px;
  height: 150px;
}

.img{
  max-width: 150px;
  max-height: 150px;
}
</style>
