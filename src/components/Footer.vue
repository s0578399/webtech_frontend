<template>
  <footer class="mt-2 py-4">
    <div class="row mx-auto pt-2">
      <div class="footer-one col-lg-3 col-md-6 col-12">
        <img id="logo" src="../assets/ThePlantshop.png" height="70" width="70"/>
        <div>
          <h3 id="companyname">THE PLANT SHOP</h3>
        </div>
      </div>
      <div class="footer-one col-lg-3 col-md-6 col-12">
        <h5>Kategorien</h5>
        <ul class="text-uppercase list-unstyled">
          <li>Pflanzen</li>
          <li>Blumen</li>
          <li>Sträucher</li>
          <li>Bäume</li>
          <li>Zimmerpflanzen</li>
        </ul>
      </div>
      <div class="footer-one col-lg-3 col-md-6 col-12">
        <h5 class="pb-2">Kontaktier uns</h5>
        <div>
          <h6 class="text-uppercase">Adresse</h6>
          <p>Musterstraße 4, 12345 Musterstadt</p>
        </div>
        <div>
          <h6 class="text-uppercase">Telefon</h6>
          <p>(123) 4567-890</p>
        </div>
        <div>
          <h6 class="text-uppercase">Email</h6>
          <p>MAIL@EXAMPLE.COM</p>
        </div>
      </div>
      <div class="footer-one col-lg-3 col-md-6 col-12">
        <h5 class="pb-2">Instagram</h5>
        <div class="row mx-auto">
          <img class="img-fluid w-25 h-100 m-1" src="../assets/rose.webp"/>
          <img class="img-fluid w-25 h-100 m-1" src="../assets/plant.webp"/>
          <img class="img-fluid w-25 h-100 m-1" src="../assets/tree.jpg"/>
        </div>
      </div>
    </div>
    <div class="copyright mt-3">
      <div class="row">
        <div class="payment col-lg-3 col-md-6 col-12">
          <img src="../assets/mastercard.jpg" class="payment">
          <img src="../assets/american_express1.png" class="payment"/>
          <img src="../assets/visa1.jpg" class="payment"/>
        </div>
        <div class="col-lg-4 col-md-3 col-12 text-nowrap">
          <p>THE PLANT SHOP eCommerce © 2022. All Rights Reserved</p>
        </div>
        <div class="col-lg-4 col-md-3 col-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.payment {
  width: 65px;
  height: 40px;
}
.copyright {
  display: inline-block;
}
footer {
  background-color: #222222;
}
footer h5 {
  color: #D8D8D8;
  font-weight: 700;
  font-size: 1.2rem;
}
footer li {
  padding-bottom: 4px;
}
footer li {
  font-size: 0.8rem;
  color: #999;
}
footer p {
  color: #999;
  font-size: 0.8rem;
}
footer .copyright svg {
  color: #000;
  width: 38px;
  height: 38px;
  background-color: #fff;
  display: inline-block;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
  transition: 0.3s ease;
  margin: 0 5px;
  position: relative;
  left: 300px;
  bottom: 8px;
}
footer .copyright svg:hover {
  color: #fff;
  background-color: #fb774b;
}
footer .copyright .row .payment {
  position: relative;
  right: 200px;
  display: flex;
  padding: 3px;
}
footer .copyright .row {
  float: left;
}
#logo {
  position: relative;
  right: 100px;
}
#companyname {
  color: white;
  position: relative;
  bottom: 25px;
  left: 65px;
}
</style>
