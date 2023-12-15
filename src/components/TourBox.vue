<template>
    <div class="card">
      <div class="embed-responsive">
          <img 
          :src="tour.imageURL" 
          alt="Card image tour">
      </div>
      <div class="card-body">
        <h5 class = "card-title">
          {{tour.name}}
        </h5>
        <p class="cart-text">
          {{tour.description}}
        </p>
          <div>
            <div v-if="users && users.role === 'users'">
              <!-- Phần hiển thị cho user -->
              <p>Welcome, {{ user.name }}! This is user content.</p>
              <button @click="bookTour">Book</button>
            </div>

            <div v-if="user && user.role === 'admin'">
              <!-- Phần hiển thị cho admin -->
              <p>Welcome, {{ user.name }}! This is admin content.</p>
              <button @click="editTour">Edit</button>
            </div>

            <div v-if="!user">
              <!-- Phần hiển thị khi không có người dùng đăng nhập -->
              <p>Please log in to view content.</p>
            </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
    props:["tour","users"],
    data(){
      return{
        user :null,
        tokenAdmin:null
      }
    },
    methods:{

    }

}

</script>

<style>

</style>