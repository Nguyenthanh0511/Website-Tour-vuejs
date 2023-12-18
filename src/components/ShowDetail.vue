<template>
    <div class="container">
        <div class="row ">
            <div class="col-md-1"></div>
            <!-- display image -->
            <div class="col-md-4 col-12">
                <img :src="tour.imageURL" class="img-fluid">
            </div>
            <!-- display product details -->
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ tour.name }}</h4>
                <h6 class="font-weight-bold"> $ {{ tour.price }}</h6>
                <p>
                    {{ tour.description }}
                </p>
                <!-- Giá tiền  -->

                <div class="d-flex  flex-row justify-content-between">
                     <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Quantity</span>
                        </div>
                    <input class="form-control" type="number" v-model="quantity"  style="width: 80px;"/>
                   </div>
                <!-- add to cart  -->
                <div class="input-group col-md3 col-4 p-0">
                    <button
                    type=""
                    id="add-to-cart-button"
                    class="btn"
                    @click ="addToCart(this.id)"
                    >
                    Thêm cart
                    </button>
                    <ion-icon name="cart-outline" v-pre></ion-icon>
                </div>
                </div>
                <!-- Feature -->
                <div class="features pt-3">
                    <h5><strong>Features</strong></h5>
                     <ul>
                       <li>Vive lopped hear to my face discation here that people It also allows me to allows</li>
                       <li>My favorite hobby is reading. I love to read books of all genres It also allows me to</li>
                       <li>from fiction to non-fiction. I find that reading helps me to relax and It also allows me</li>
                       <li>escape from the stresses of everyday life. It also allows me to It also allows me to</li>
                       <li>learn new things and broaden my horizons.Here is a translation of the paragraph my</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
   export default {
  data() {
    return {
      tour:{},
      swishlist: "Thêm danh sách",
      quantity:1,
      // cart:[],
      tourId:0,
      imageURL:null,
      roles:null
    };
  },
  props: ["baseURL", "tours"],
  methods: {
   async addToCart() {
    try {
      const response = await axios.post(`${this.baseURL}cart`, {
        tourId: this.tours.find(tour=>tour.id ==this.id),
        quantity: this.quantity,
      });

      if (response.status === 201) {
        swal({
          text: "Đã thêm vào giỏ hàng",
          icon: "success",
          closeOnClickOutside: true,
        });

        // Lưu thông tin tour vào giỏ hàng
        // this.cart.push({
        //   tourId: this.id,
        //   quantity: this.quantity,
        //   tour : this.tours.find(tour => tour.id == this.id)
        // //   tour: this.tours, // Lưu thông tin chi tiết của tour
        // });
        console.log("cart :",this.cart);
        //Đưa lên serve
        
        // const express = require('express');
        // const app = express();
        // let cart = [];
        // app.use(express.json());
        // app.post(`${this.baseURL}cart`,(req,res)=>{
        //     tourId:this.id;
        //     quantity:this.quantity;
        //     imageURL:this.cart.tour.imageURL;


        // })


        this.$router.push({ name: 'Cart' });
      }
    } catch (err) {
      console.log(err);
    }
  },
  },
  mounted() {
    this.roles = localStorage.getItem("UserRole")
    this.id = this.$route.params.id;
    console.log('Mounted this.id:', this.id);
    this.tour = this.tours.find(tour => tour.id == this.id);
  },
};
</script>
<style scoped>

.category {
    font-weight: 400;
}
/* #wishlist-button{
    /* background-color : #b9b9b9; 
} */

#show-cart-button {
  background-color: #131921;
  color: white;
  border-radius: 0;
}
.input-group > .form-control, .input-group > .form-select, .input-group > .form-floating {
    position: relative;
    flex: 0 0 auto;
    width: 1%;
    min-width: 0;
    height: 65%;
}
#add-to-cart-button{
   background-color: #febd69 ;
    border-radius: 10px;
}
</style>