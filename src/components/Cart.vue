<template>
  <div class="container">
    <div class="col-12 text-center">
      <h3 class="pt-">
        Shopping cart Tour
      </h3>
    </div>
    <!-- Loop cart -->
    <div v-for="cartItem in cartTour" :key="cartItem.id" class="row mt-2 pt-3">
      <div class="col-2"></div>
      <div class="col-md-3 embed-responsive">
        <img :src="cartItem.tourId.imageURL" alt="" class="w-100" style="object-fit: cover" />
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            {{ cartItem.tourId.name }}
          </h6>
          <p class="md-0 font-weight-bold" id="item-price">
            ${{ cartItem.tourId.price }} cái
          </p>
          <p class="mb-0">
            Quantity: {{ cartItem.quantity }}
          </p>
        </div>
        <p class="mb-0">
          price total: ${{ cartItem.tourId.price * cartItem.quantity }}
        </p>
        <!-- Các nút và hành động khác -->
        <br>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>
    <div class="d-flex justify-content-center total-cost pt-2 text-right">
      <h5>Total cost all: ${{ totalCost }}</h5>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ["cartTour", "baseURL"],
  name: "CartView",
  computed: {
    totalCost() {
      return this.cartTour.reduce((total, cartItem) => {
        const itemPrice = cartItem.tourId.price;
        const quantity = cartItem.quantity;
        return total + itemPrice * quantity;
      }, 0);
    },
  },
 methods: {
  deleteItem(itemId) {
    axios
      .delete(`${this.baseURL}cart/${itemId}`)
      .then((response) => {
        if (response.status === 200) {
          window.location.reload(); // Perform a full page reload
        }
        this.$emit('fetchData');
      })
      .catch((error) => {
        console.log(error);
      });
  },
},
};
</script>

<style>

</style>