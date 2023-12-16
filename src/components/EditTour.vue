<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Tour</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form v-if="tour">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="tour.name" required>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" v-model="tour.description" required>
          </div>
          <div class="form-group">
            <label for="imageURL">ImageURL</label>
            <input type="text" class="form-control" v-model="tour.imageURL" required>
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="number" class="form-control" v-model="tour.price" required>
          </div>
          <button type="button" class="btn btn-primary" @click="editTour">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  data() {
    return {
      tour: null,
      id: null,
    };
  },
  props: ["baseURL", "tours"],
  methods: {
    async editTour() {
      try {
        console.log('Current this.id:', this.id);
        console.log('Current this.tour:', this.tour);
        await axios.post(`${this.baseURL}tours/${this.id}`, this.tour);
        this.$emit("fetchData");
        this.$router.push({ name: 'TourDuLich' });
        swal({
          text: "Tour has been updated successfully",
          icon: "success",
        });
      } catch (error) {
        console.error('Error updating tour:', error);
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log('Mounted this.id:', this.id);
    this.tour = this.tours.find(tour => tour.id == this.id);
  },
};
</script>
