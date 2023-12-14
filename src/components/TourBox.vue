<template>
    <div class="card">
      <div class="embed-responsive">
          <img 
          :src="tours.imageURL" 
          alt="Card image tour">
      </div>
      <div class="card-body">
        <h5 class = "card-title">
          {{tours.name}}
        </h5>
        <p class="cart-text">
          {{tours.description}}
        </p>
        <button class="btn btn-primary">Edit</button>
      </div>

  </div>
</template>

<script>
export default {
    props:["tours"],
    data(){
      return{
      }
    },

}

</script>

<style>

</style>