<template>
<div class="container">
    <div class="row">
        <!-- Logo -->
        <div class="col-lg-4 col-md-6 col-sm-6 col-6">
            <router-link class="navbar-brand" :to="{ name: 'TourDuLich' }">
                <img class="mt-0" id="logo" src="../assets/illustrations/Logo.png" />
            </router-link>
        </div>
                <!-- Search Bar -->
        <div class="mt-4 col-lg-4 col-md-6 col-sm-6 col-6">
            <div class="input-group btn-custom">
                <input type="search" class="btn-custom form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class=" btn btn-outline-primary " style="margin-top: 20px; height:30px;" data-mdb-ripple-init>Search</button>
            </div>
        </div>
        <!-- Login and Accounts -->
        <div class="mt-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <ul class="nav justify-content-center lg-black mt-3 ">
                <li class="nav-item" style="border: 2px solid blue; border-top-left-radius: 10px; border-bottom-left-radius: 10px; background-color: blue; height: 40px;">
                    <!-- <router-link class="nav-link nav-link-custom text-light"  :to="{ name: 'SignIn' }">Login</router-link> -->
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link nav-link-custom text-light bg-secondary" :to="{ name: 'AdminView' }">Accounts</router-link> -->
                </li>
                <li class="nav-item" style="border: 1px solid grey; height: 40px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; background-color: grey;">
                    <!-- <router-link class="nav-link nav-link-custom text-light" :to="{ name: 'WishList' }">WishList</router-link> -->
                </li>
                <!-- <router-link v-if ="this.token" class="link" :to ="{name:'Cart'}"> -->
              <a  class="cart-contents shopping-cart has-svg-icon" title="View your shopping cart" data-wpel-link="internal">
              <span class="gp-icon shopping-cart">
                 <svg viewBox="0 0 576 512" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" style="margin-left: 10px;">
                <path fill="none" d="M0 0h576v512H0z"></path>
                <path d="M181.54 409.6c-29.249 0-52.914 23.04-52.914 51.2 0 28.16 23.665 51.2 52.915 51.2 29.249 0 53.18-23.04 53.18-51.2 0-28.16-23.931-51.2-53.18-51.2zM22 0v51.2h53.18l95.725 194.304-35.897 62.464C115.598 342.272 141.124 384 181.54 384h319.08v-51.2h-319.08l29.249-51.2h198.096c19.943 0 37.492-10.496 46.533-26.368L550.61 89.088c9.838-16.896-2.925-37.888-23.133-37.888H133.944L108.95 0H22zm425.442 409.6c-29.25 0-52.915 23.04-52.915 51.2 0 28.16 23.665 51.2 52.915 51.2 29.249 0 53.18-23.04 53.18-51.2 0-28.16-23.931-51.2-53.18-51.2z"></path>
            </svg>
            </span><span class="number-of-items no-items"></span><span class="amount"></span></a>
            <!-- </router-link> -->
            </ul>

        </div>
    </div>
</div>
</template>

<script>
// const accountDropDown = document.querySelector("#navbarDropdownAccounts")
// accountDropDown.addEventListener("click",()=>{
//   const loginLink = document.querySelector(".dropdown-item[data-href='/login']")
//   // const wishListLink = document.querySelector(".dropdown-item[data-href='/wishList']")
//   loginLink.classList.toggle("show");
// })

export default {

}
</script>

<style scoped>
.container{
  background-color: aliceblue;
}
#logo{
  width:300px;
}

.navbar {
  margin-bottom: 15px;
}
.nav-link {
  color: white;
}

/* #logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
} */
.nav-link {
  color: rgb(215, 206, 206);
}

.nav-link-custom{
  color :#ffffff;
  /* background-color : #ffa500;  */
}
.nav-link-custom:hover{
    border-radius: 15% 10% 10% 15% ;
}
/* Custom CSS */
.btn-custom {
    display: flex;
    align-items: center;
}
.btn-custom input {
    flex: 1;
    margin-right: 5px; /* Điều chỉnh khoảng cách giữa input và button */
}

/* Để giảm kích thước và căn chỉnh button */
.btn-custom button {
    font-size: 14px;
    margin-top: 0; /* Loại bỏ margin top thêm vào từ lớp mt-2 */
}

/* Áp dụng kích thước mới cho button */
.btn-custom .btn-outline-primary {
    padding: 1px 10px;
    font-size: 12px;
}

#cart {
  position: relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.form-control {
  padding: 0.175rem 0.75rem;
}
#search-button-navbar[data-v-0bc4212e] {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>