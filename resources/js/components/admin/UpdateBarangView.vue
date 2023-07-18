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
        <h1 class="text-center mt-3 mb-5">Update Data Barang</h1>
        <form @submit.prevent="updateBarang">
          <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="jenis_barang" class="form-label"
                  >Jenis Barang</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="jenis_barang"
                  placeholder="Masukkan jenis barang"
                  v-model="barang.jenis_barang"
                />
              </div>
            </div>
            <div class="col-sm-2"></div>
          </div>

          <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
              <div class="row">
                <div class="col-sm-6">
                  <router-link
                    to="/admin-barang"
                    class="btn btn-danger mb-5"
                  >
                    Kembali
                  </router-link>
                </div>
                <div class="col-sm-6">
                  <button
                    type="submit"
                    class="btn btn-primary float-end"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </form>
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
import axios from "axios";

export default {
  props: ["id"], // Tambahkan properti 'id' untuk menerima ID dari parameter rute

  data() {
    return {
      barang: [],
    };
  },
  methods: {
    updateBarang() {
      let formData = new FormData();
      formData.append("jenis_barang", this.barang.jenis_barang);
      console.log("test", formData);
      axios
        .post(`http://localhost:8080/api/update-barang/${this.id}`, formData) // Gunakan properti 'id' sebagai bagian dari URL endpoint
        .then((response) => {
          console.log(response.data);
          this.showAlert();
          this.$router.push("/admin-barang");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    showAlert() {
      this.$swal("Data berhasil diperbarui!").then(() => {
        // Aksi lanjutan setelah menampilkan swal
      });
    },
  },
  created() {
    console.log(this.id);
    axios
      .get(`http://localhost:8080/api/barang/${this.id}`) // Gunakan properti 'id' sebagai bagian dari URL endpoint
      .then((response) => {
        this.barang = response.data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
</style>
