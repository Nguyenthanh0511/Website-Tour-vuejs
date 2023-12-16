<template>
    <div class="card">
      <div class="embed-responsive">
          <img 
          :src="tour.imageURL" 
          alt="Card image tour"
          class="img-fluid" style="max-width:250px;height:auto;">
      </div>
      <div class="card-body">
        <h5 class = "card-title">
          {{tour.name}}
        </h5>
        <p class="cart-text">
          {{tour.description}}
        </p>
          <div>
            <div v-if="isRoles()=== 'users'">
              <!-- Phần hiển thị cho user -->
              <button class="btn btn-primary" >Book</button>
            </div>
            <div v-if="isRoles() === 'admin'">
              <!-- Phần hiển thị cho admin -->
              <router-link :to="{name: 'EditTour',params:{id:tour.id}}">
                <button class="btn btn-primary" >Edit</button>
              </router-link>
            </div>
            <div v-if="!isRoles()">
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
        roles:null
      }
    },
    methods:{
      isRoles(){
        const roles = localStorage.getItem("UserRole");
        return roles
      }
    }

}

</script>

<style>

</style>