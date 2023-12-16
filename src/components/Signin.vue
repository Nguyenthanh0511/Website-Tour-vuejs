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
    <div class="row">
        <div v-for="user in users" :key="user.email">
            <UserBox :user = "user"/>
        </div>
    </div>
        
  </div>
</template>

<script>
import swal from 'sweetalert';
import UserBox from'./UserBox.vue'
// import axios from 'axios';
    export default {
        props:["users"],
        components: {UserBox},
        name:"SigninWebsite",
        data(){
            return{
                email:null,
                password:null,
                // loading: null,
            }
        },
         methods: {
            async signin(e) {
            e.preventDefault();
            this.loading = true;

            const user = {
                email: this.email,
                password: this.password,
            };

             // Kiểm tra xem users có tồn tại không
            if (this.users && this.users.length > 0) {
                try {
                // Tìm người dùng với email tương ứng trong mảng users
                const foundUser = this.users.find(u => u.email === user.email);

                if (foundUser && foundUser.password === user.password) {
                    // Đăng nhập thành công
                localStorage.setItem("UserRole", foundUser.roles); // khóa và value 

                this.$emit("fetchData");
                this.$router.replace("/Home");

                swal({
                text: "Đăng nhập thành công",
                icon: "success",
                closeOnClickOutside: true,
                });
                } else {
                    // Người dùng không tìm thấy hoặc mật khẩu không khớp
                    throw new Error("Email hoặc mật khẩu không đúng");
                }
                } catch (err) {
                console.error("Đăng nhập thất bại:", err);

                    swal({
                        text: "Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập của bạn.",
                        icon: "error",
                        closeOnClickOutside: true,
                    });
                    } finally {
                    this.loading = false;
                    }
                } else {
                    console.error("Mảng users không tồn tại hoặc là mảng trống");
                }
            },
        },
        // methods:{
        //     async signin(e){
        //        e.prevenDefault();
        //        if(!this.email && this.password){
        //              swal("Error!", "Please fill in all fields!");
        //              console.log("false")
        //             return;
        //        }
        //        // Find matching user in users array
        //        const matchingUser = this.users.find((user)=>user.email ===this.email&&user.password ===this.password);
        //        // Check if user exists and password matches
        //         if (!matchingUser) {
        //             swal("Error!", "Invalid email or password!");
        //             console.log("false")
        //             return;
        //         }
        //         //loadding sucess 
        //          // Login successful
        //         // this.loading = true; // Show loading indicator
        //         try {
        //             // Send login request to the backend (replace with your actual API call)
        //             const response = await axios.post(`${this.baseURL}/UpdateDatUsers`, {
        //             email: this.email,
        //             password: this.password,
        //             });

        //             // Handle successful login response
        //             if (response.data.success) {
        //             // Store JWT token or other login information
        //             localStorage.setItem("token", response.data.token);

        //             // Redirect to protected route (replace with your desired route)
        //             // this.$router.push("/dashboard");
        //             } else {
        //             swal("Error!", response.data.message);
        //             // this.loading = false; // Hide loading indicator
        //             }
        //         } catch (error) {
        //             console.error(error);
        //             swal("Error!", "Something went wrong!");
        //             // this.loading = false; // Hide loading indicator
        //         }

        //     }
        // },
        mounted(){ 
        // this.loading=false; // Phần mouted này lại liên quan đến 
    }
    }
</script>

<style scoped>
 #signup-div{
    width:500px;
    padding:10px;
}

</style>