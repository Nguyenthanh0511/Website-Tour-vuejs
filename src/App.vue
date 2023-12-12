<template>
  <div>
    <Tour />
    <Footer></Footer>
  </div>
</template>


<script>

// import Hero from "./components/HeroComponent.vue";
import Tour from "./components/TourDuLich.vue";
import Footer from"./components/FooterComponent.vue";
export default {
  components: { Tour ,Footer},
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
