<template>
    <div class="card">
      <div class="embed-responsive">
          
      </div>
      <div class="card-body">
        <h5 class = "card-title">
          {{user.firstName}}
        </h5>
        <p class="cart-text">
          {{user.email}}
        </p>

         
      </div>

  </div>
</template>

<script>
export default {
    props:["tour","user"],
    data(){
      return{
       
      }
    },
    methods:{

    }

}

</script>

<style>

</style>