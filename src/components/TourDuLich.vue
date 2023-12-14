<!-- views/TourDuLich.vue -->
<template>

  <div>
    <div class="container">
      <h2>Danh Sách Tour Du Lịch</h2>
      <div class="row">
        <div
          v-for="tour in tours " :key ="tour.id"
          class="col-md-6 col-xl-4 col-12 d-flex"
        >
          <!-- <router-link :to="{ name: 'tour-detail', params: { id: tour.id }}"> -->
            <!-- Sử dụng router-link để điều hướng đến trang chi tiết -->
          <TourBox :tours="tour"/>
          <!-- </router-link> -->
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
import TourBox from './TourBox.vue'
export default {
 components:{TourBox},
  data() {
    return {
      tours: [], // Dữ liệu tours sẽ được lấy từ API hoặc data.json
      pageSize : 4,
      currentPage :1,
    };
  },
  computed:{
    startIndex(){
      return (this.currentPage-1)*this.pageSize;
    },
    sliceProduct(){
      return this.tours.slice(this.startIndex,this.startIndex + this.pageSize);
    }
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
    methods:{
      loadMore(){
            this.currentPage++;
          },
        AgainMore(){
            this.currentPage--;
        }
      },
    };
</script>

<style scoped>
/* CSS styles cho component nếu cần */
</style>