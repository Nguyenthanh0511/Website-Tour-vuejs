<template>
  <div>
    <Nav/>
    <hr>
    <!-- <Tour /> -->
    <router-view
    :baseURL ="baseURL"
    :tours = "tours"
    :users = "users"
    :cartTour = "cartTour"
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
      users:null,
      admins:null,
      cartTour:null,
    }
  },
  methods: {
    async fetchData() {
      try {
        const usersResponse = await axios.get(this.baseURL + "users");
        this.users = usersResponse.data;
        const toursResponse = await axios.get(this.baseURL + "tours");
        this.tours = toursResponse.data;
        const response = await axios.get(this.baseURL+ "cart");
        this.cartTour = response.data;
      } catch (err) {
        console.log('Error:', err);
      }
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
