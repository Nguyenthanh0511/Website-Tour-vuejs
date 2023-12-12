<!-- views/TourDuLich.vue -->
<template>

  <div>
    <div class="container">
      <h2>Danh Sách Tour Du Lịch</h2>
      <div class="row">
        <div
          v-for="tour in tours"
          :key="tour.id"
          class="col-md-4 col-sm-12 mb-4"
        >
          <!-- <router-link :to="{ name: 'tour-detail', params: { id: tour.id }}"> -->
            <!-- Sử dụng router-link để điều hướng đến trang chi tiết -->
            <div class="card">
              <img :src="tour.imageURL" class="card-img-top" alt="Tour Image" />
              <div class="card-body">
                <h5 class="card-title">{{ tour.name }}</h5>
                <p class="card-text">{{ tour.description }}</p>
              </div>
            </div>
          <!-- </router-link> -->
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from 'axios'

export default {
 
  data() {
    return {
      tours: [] // Dữ liệu tours sẽ được lấy từ API hoặc data.json
    };
  },
  mounted() {
    // Gọi API hoặc đọc từ data.json để lấy danh sách tour
    // Thực hiện yêu cầu HTTP để lấy dữ liệu từ API
    axios.get('http://localhost:3001/tours')
      .then(response => {
        // Gán dữ liệu từ response vào biến tours
        this.tours = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  methods: {
//     fetchTours() {
//       // Thay đổi lấy dữ liệu từ API hoặc data.json tùy thuộc vào môi trường
//       // Ví dụ sử dụng Axios:
//       // axios.get('/api/tours')
//       //   .then(response => {
//       //     this.tours = response.data;
//       //   })
//       //   .catch(error => {
//       //     console.error(error);
//       //   });
//       axios.get('http://localhost:3001/tours')
//       // Giả lập dữ liệu từ data.json
//       this.tours = require('@/data.json').tours
//       .then(response => {
//         // Gán dữ liệu từ response vào biến tours
//         this.tours = response.data;
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//     }
  }
};
</script>

<style scoped>
/* CSS styles cho component nếu cần */
</style>