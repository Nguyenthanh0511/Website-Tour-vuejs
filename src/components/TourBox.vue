<template>
  <div  v-for="(tour ,index) in sliceTour " :key ="index">
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
        <button class="btn btn-primary">Edit</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    props:["tours"],
    data(){
      return{
        pageSize:4,
        currentPage:1
      }
    },
    computed:{
    startIndex(){
      return (this.currentPage-1)*this.pageSize;
    },
    sliceTour(){
      return this.tour.slice(this.startIndex,this.startIndex + this.pageSize);
    }
  },
}

</script>

<style>

</style>