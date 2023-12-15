<template>
  <div>

    <Nav/>
    <hr>
    <!-- <Tour /> -->
    <router-view v-if="tours"
    :baseURL ="baseURL"
    :tours = "tours"
    @fetchData="fetchData"
    >
    </router-view>
    <hr>
    <CtaOne class="ss1"/>
    <hr>
    <Footer></Footer>

  </div>
</template>


<script>
import axios from'axios'
// import Hero from "./components/HeroComponent.vue";
// import Tour from "./components/TourDuLich.vue";
import Footer from"./components/FooterComponent.vue";
import Nav from './components/NavbarView.vue'
import CtaOne from './components/CtaOneComponent.vue'
export default {
  components: {CtaOne ,Footer,Nav},
  data() {
    return {
      baseURL: "http://localhost:3001/",
      tours:null, // khởi tọa tours
      userss:null,
      admins:null
    }
  },
  methods: {
    async fetchData(){
      await axios.get(this.baseURL +"tours")
      .then((res)=>{
        this.tours = res.data;
      }
      )
      .catch((err)=>console.log('err :',err))
      await axios.get(this.baseURL +"users")
      .then(
        (res)=>{
          this.users = res.data;
        }
      )
      .catch((err)=>console.log('err',err));
      await axios.get(this.baseURL +"admins")
      .then(
        (res)=>{
          this.admins = res.data;
        }
      )
      .catch((err)=>console.log('err',err));
    }
  },
  mounted(){
    this.fetchData();
  }
  
}
</script>
<style scoped>
.ss1{
  height:500px;
}
</style>
