<script setup>
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
</script>
<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <Sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar />

        <!-- Begin Page Content -->
        <h1 class="text-center">Barang Page</h1>
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="row mt-5">
              <div class="col-sm-3">
                <router-link
                  class="btn btn-primary me-2"
                  to="/admin-input-barang"
                >
                  <i class="bi bi-plus"></i>
                </router-link>
              </div>
              <div class="col-sm-9"></div>
            </div>

            <table class="table table-striped mt-2">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Jenis Barang</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in barang" :key="item.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.jenis_barang }}</td>
                  <td>
                    <router-link
                      :to="{
                        name: 'admin-updateBarang',
                        params: { id: item.id },
                      }"
                      class="btn btn-warning me-2"
                    >
                      <i class="bi bi-pencil-square"></i>
                    </router-link>
                    <button
                      @click="confirmDelete(item.id)"
                      class="btn btn-danger"
                    >
                      <i class="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
  <!-- End of Page Wrapper -->
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      barang: [],
    };
  },
  methods: {
    // tanpa token
    // fetchData() {
    //   axios
    //     .get("http://localhost:8080/api/barang")
    //     .then((response) => {
    //       this.barang = response.data.data;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },

    // dengan token
    async fetchData() {
      const response = await axios.get("http://localhost:8080/api/barang",{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
      this.barang = response.data.data;
    },
    confirmDelete(id) {
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin menghapus item ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteItem(id);
        }
      });
    },
    deleteItem(id) {
      axios
        .post(`http://localhost:8080/api/delete-barang/${id}`)
        .then((response) => {
          console.log(response.data);
          this.fetchData();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
</style>
