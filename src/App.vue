<template>
  <div>
    <Nav/>
    <hr>
    <Tour />
    <hr>
    <CtaOne class="ss1"/>
    <hr>
    <Footer></Footer>

  </div>
</template>


<script>

// import Hero from "./components/HeroComponent.vue";
import Tour from "./components/TourDuLich.vue";
import Footer from"./components/FooterComponent.vue";
import Nav from './components/NavbarView.vue'
import CtaOne from './components/CtaOneComponent.vue'
export default {
  components: {CtaOne, Tour ,Footer,Nav},
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.ss1{
  height:500px;
}
</style>
