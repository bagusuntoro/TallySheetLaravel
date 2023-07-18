<script setup>
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
</script>
<template>
  <div id="wrapper">
    <Sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar />

        <!-- Begin Page Content -->
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <h1 class="text-center mb-3">Detail Note</h1>
            <div v-if="isLoading">Loading...</div>
            <div class="row" v-else>
              <div class="col-sm-6">
                <h5>Lokasi :{{note.location}}</h5>
              </div>
              <div class="col-sm-6">
                <h5>Nomor Truk :{{note.no_truck}}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h5>Date :{{note.date}}</h5>
              </div>
              <div class="col-sm-6">
                <h5>Driver :{{note.driver}}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h5>Nomor Container :{{note.no_container}}</h5>
              </div>
              <div class="col-sm-6">
                <h5>Nomor Telp :{{note.telp}}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h5>Nomor Seal :{{note.no_seal}}</h5>
              </div>
              <div class="col-sm-6">
                <h5>Destination :{{note.destination}}</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-1"></div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      isLoading: true,
      note: {},
    };
  },
  mounted() {
    this.fetchNote();
  },
  methods: {
    fetchNote() {
      // Ganti URL API dengan URL yang sesuai
      const apiUrl = `http://localhost:8080/api/note/${this.id}`;

      // Lakukan permintaan HTTP GET ke API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.note = data.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });
    },
  },
};
</script>
