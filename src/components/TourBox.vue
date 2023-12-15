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
        <button class="btn btn-primary">Edit</button>
      </div>

  </div>
</template>

<script>
export default {
    props:["tour"],
    data(){
      return{
      }
    },

}

</script>

<style>

</style>