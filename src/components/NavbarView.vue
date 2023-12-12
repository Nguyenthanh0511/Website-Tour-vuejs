<template>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Logo -->
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img id="logo" class="" src="../assets/illustrations/Logo.png" />
    </router-link>

    <!-- Burger Button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible Content -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <!-- Search Bar -->
      <form class="form-inline ml-auto mr-auto mb-2 mb-lg-0">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </form>

      <!-- DropDowns -->
      <ul class="navbar-nav ml-auto">
        <!-- Browse dropdown -->
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Browse
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="dropdown-item" :to="{ name: 'Category' }">Category</router-link>
          </div>
        </li>

        <!-- Accounts dropdown -->  
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdownAccounts"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Accounts
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownAccounts">
            <router-link class="dropdown-item" :to="{ name: 'AdminView' }">Admin</router-link>
            <router-link v-if="!token" class="dropdown-item" :to="{ name: 'SignIn' }">Log In</router-link>
            <router-link v-if="!token" class="dropdown-item" :to="{ name: 'SignUp' }">Sign Up</router-link>
            <router-link v-if="!token" class="dropdown-item" :to="{ name: 'WishList' }">Wish list</router-link>
          </div>
        </li>
        <li class="wc-menu-item menu-item-align-right">
          <a href="https://webaoe.com/cart/" class="cart-contents shopping-cart has-svg-icon" title="View your shopping cart" data-wpel-link="internal"><span class="gp-icon shopping-cart">
          <svg viewBox="0 0 576 512" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" style="margin-left: 10px;">
              <path fill="none" d="M0 0h576v512H0z"></path>
              <path d="M181.54 409.6c-29.249 0-52.914 23.04-52.914 51.2 0 28.16 23.665 51.2 52.915 51.2 29.249 0 53.18-23.04 53.18-51.2 0-28.16-23.931-51.2-53.18-51.2zM22 0v51.2h53.18l95.725 194.304-35.897 62.464C115.598 342.272 141.124 384 181.54 384h319.08v-51.2h-319.08l29.249-51.2h198.096c19.943 0 37.492-10.496 46.533-26.368L550.61 89.088c9.838-16.896-2.925-37.888-23.133-37.888H133.944L108.95 0H22zm425.442 409.6c-29.25 0-52.915 23.04-52.915 51.2 0 28.16 23.665 51.2 52.915 51.2 29.249 0 53.18-23.04 53.18-51.2 0-28.16-23.931-51.2-53.18-51.2z"></path>
          </svg>
          </span><span class="number-of-items no-items"></span><span class="amount"></span></a>
        </li>
      </ul>
    </div>
  </nav>
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

<style>
#logo{
  width:300px;
}
</style>