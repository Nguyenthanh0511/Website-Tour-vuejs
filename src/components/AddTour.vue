<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Add new Tour</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" required />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="description" required />
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="imageURL" required />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" v-model="price" required />
          </div>
        </form>
        <div>
          <button type="button" class="d-flex justify-content-center btn btn-primary" @click="addTour">Submit</button>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'
export default {
  name: "AddTour",
  data() {
    return {
      id: null,
      name: null,
      description: null,
      imageURL: null,
      price: null
    };
  },
  props: ["baseURL", "tours"],
  methods: {
    async addTour() {
      const newTour = {
        name: this.name,
        description: this.description,
        imageURL: this.imageURL,
        price: this.price
      };

      try {
        // Use axios to send a POST request to add the new tour
        await axios.post(`${this.baseURL}tours`, newTour);

        // Emit event to parent component to fetch updated data
        this.$emit("fetchData");

        // Redirect to the page displaying all tours (adjust route name as needed)
        this.$router.push({ name: "TourDuLich" });

        // Show success message to the user
        swal({
          text: "Tour added successfully!",
          icon: "success",
          closeOnClickOutside: false
        });
      } catch (error) {
        // Handle error and show an error message to the user
        console.error(error);
        swal({
          text: "Failed to add tour. Please try again.",
          icon: "error",
          closeOnClickOutside: false
        });
      }
    }
  }
};
</script>

<style>

</style>
