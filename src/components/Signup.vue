<template>
  <div class="container">
    <!-- Logo Div -->
    <div class="row">
      <div class="col-12 text-center pt-3">
        <router-link :to="{ name: 'HomeView' }">
        </router-link>
      </div>
    </div>

    <!-- Form Header -->
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signup-div" class="flex-item border">
          <h2 class="pt-4 pl-4">Tạo tài khoản</h2>
          <form @submit="signup" class=" pt-4 pl-4 pr-4">
            <!-- Email Input -->
            <div class="form-group " >
              <input
                type="email"
                class="form-control"
                v-model="email"
                required
                placeholder="Email" 
              />
            </div>

            <!-- First Name and Last Name Inputs -->
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    v-model="firstName"
                    required
                     placeholder="First name" 
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    v-model="lastName"
                    required
                     placeholder="Last Name" 
                  />
                </div>
              </div>
            </div>
            <!-- Password Input -->
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="password"
                required
                 placeholder="Password" 
              />
            </div>
            <!-- Confirm Password Input -->
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="passwordConfirm"
                required
                 placeholder="Password confirm" 
              />
            </div>
      <!-- Đoạn mã lựa chọn user hoặc admin  -->
          <div class="form-group" >
            <select
              name="roles"
              v-model="roles"
              class="form-control"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
            <!-- Create Account Button -->
            <button type="submit" class="btn btn-primary mt-2 py-0">
              Create Account
            </button>
          </form>
          <!-- Horizontal Line -->
          <hr />
          <!-- Already Have an Account? Text -->
          <small class="form-text text-muted pt-2 pl-4 text-center">
            Already Have an Account?
          </small>
          <!-- Sign In Link (commented out) -->
          <p class="text-center">
            <!-- <router-link
              class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
              :to="{ name: 'Signin' }"
            >Signin Here</router-link> -->
          </p>
        </div>
      </div>
    </div>
     <!-- Display user information -->
    <div v-if="users.length > 0" >
      <h2>Users Information</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.firstName }} {{ user.lastName }} - {{ user.email }} (roles: {{ user.roles }})
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';
import axios from 'axios';
  export default {
    name: "SignupWebsite",
    props :  ["baseURL"],
    data(){
        return {
            id:null,
            email:null,
            firstName :null,
            lastName:null,
            password:null,
            passwordConfirm:null,
            roles:[""],
            users: [], // Initialize users as an empty array
        };
    },
    methods:{
        addUserToUsers(user) {
          this.users.push(user);
          console.log("Updated users:", this.users);
        },
        
        async signup(e){
          
            e.preventDefault();
                if(this.password ===this.passwordConfirm){
                    //You will make the post of user 
                    const user ={
                        id:this.id,
                        email:this.email,
                        firstName : this.firstName,
                        lastName:this.lastName,
                        password:this.password,
                        roles:this.roles
                    }
                    //gọi tới api 
                   
                  await axios 
                    .post(`${this.baseURL}users`, user)
                    .then(()=>{
                        //redict to home page . it mean if you sign up a success then it redict to home page .
                        
                        this.$router.replace("/");
                        //notification
                         swal({
                          text: "User signup successful. Please Login",
                          icon: "success",
                          closeOnClickOutside: false,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                }
                else{
                    //password doesn't match 
                     swal({
                        text: "Error! Passwords are not matching",
                        icon: "error",
                        closeOnClickOutside: false,
                    });
                }
                // // Gọi API lấy token 
                // let response = await axios.post(`${this.baseURL}users`, { 
                //     username: this.username,
                //     password: this.password
                // })

                // let token = response.data.token
                // console.log('token :',token);
            },
            
        },
      
    }
</script>
<style scoped>
#signup-div{
  width:500px;
  padding:10px;
}
lable{
  margin-right: 300px;
}
.form-group{
  padding-bottom:20px;
}
</style>