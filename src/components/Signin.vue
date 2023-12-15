<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-center ">
            <!-- <img src="" alt=""> -->
        </div>
    </div>
     <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signup-div" class=" flex-item" style="width:500px; border: 2px solid black; border-radius: 12px;">
                    <h2 class="text-center" style="margin-top: 10px;">Đăng nhập</h2>
                    <form @submit="signin" class="pt-4 pl-4 pr-4 ">
                         <div class="form-group px-3">
                        <!-- <label style="margin-left: -300px;">Email</label> -->
                        <input
                            type="email"
                            class="form-control"
                            v-model="email"
                            required
                            placeholder="Email"
                        />
                        </div>
                        <br>
                        <!-- Tạo form chập  -->
                       
                        <div class="form-group px-3 ">
                        <!-- <label style="margin-left: -270px;">Password</label> -->
                        <input
                            type="password"
                            class="form-control"
                            v-model="password"
                            required
                            placeholder="Password"
                        />
                        </div>
                         <div class="mt-5 d-flex justify-content-center" style="padding :-20px;" >
                            <button type="submit" class="btn btn-primary py-0 px-3">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                     <hr />
                    <small class="form-text text-muted pt-2 pl-4 text-center"
                    >
                    <router-link class="link" :to = "{name:'SignUp'}">
                        <!-- <a class="has-svg-icon" href="">
                            Đăng ký Tài Khoản
                        </a> -->
                        <button class="btn " style="">
                            Đăng Ký tài khoản
                        </button>
                    </router-link>
                    </small
                    >
                    <p class="text-center">
                        <!-- <router-link
                        class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
                        :to="{ name: 'Signin' }"
                        >Signin Here</router-link
                        > -->
                    </p>
                </div>

            </div>

        </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';
export default {
    name:"SigninWebsite",
    props:["baseURL","users","admins"],
    data(){
        return{
            email:null,
            password:null,
            loading: null,
        }
    },
    methods:{
        async signin(e){
            e.preventDefault();
            this.loading = true; //Con trỏ tham chiếu tới giá trị đúng
            const user={
                email:this.email,
                password:this.password,
            }
            await axios
            .post(`${this.baseURL}users`, user)
            .then((res)=>{
                //redict to home page . it mean if you sign up a success then it redict to home page .
                        console.log(res.data); // Log response từ server
                        // const token = localStorage.getItem("Token");
                        localStorage.setItem("Token :",res.data.token)
                        // console.log('token :',token);
                        this.$emit("fetchData")
                        this.$router.replace("/Home ");
                        //notification
                         swal({
                        text: "User signup successful",
                        icon: "success",
                        closeOnClickOutside: true,
                        });
            })
            .catch((err) => {
                console.log(err);
            })
             .finally(()=>{
            this.loading = false;
            })
        }
    },
    mounted(){ 
    this.loading=false; // Phần mouted này lại liên quan đến 
}
}
</script>

<style scoped>
 #signup-div{
    width:500px;
    padding:10px;
}

</style>