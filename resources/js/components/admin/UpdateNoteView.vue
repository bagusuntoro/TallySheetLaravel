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
            <h1 class="text-center mt-3 mb-5">Update Data Note</h1>
            <form @submit.prevent="updateBarang">
              <div class="headerNote">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="location" class="form-label">Location</label>
                      <input
                        type="text"
                        class="form-control"
                        id="location"
                        placeholder="input barang"
                        v-model="form.location"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="truck" class="form-label">Nomor Truck</label>
                      <input
                        type="text"
                        class="form-control"
                        id="no_truck"
                        placeholder="input barang"
                        v-model="form.no_truck"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="location" class="form-label">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        id="date"
                        placeholder="input date"
                        v-model="form.date"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="driver" class="form-label">Driver</label>
                      <input
                        type="text"
                        class="form-control"
                        id="driver"
                        placeholder="input driver"
                        v-model="form.driver"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="container" class="form-label"
                        >Nomor Container</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="no_container"
                        placeholder="input nomor container"
                        v-model="form.no_container"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="telp" class="form-label">No Telp</label>
                      <input
                        type="text"
                        class="form-control"
                        id="telp"
                        placeholder="input telp"
                        v-model="form.telp"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="seal" class="form-label">Nomor Seal</label>
                      <input
                        type="text"
                        class="form-control"
                        id="no_seal"
                        placeholder="input nomor seal"
                        v-model="form.no_seal"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6"></div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="destination" class="form-label"
                        >Destination</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="destination"
                        placeholder="input nomor destination"
                        v-model="form.destination"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6"></div>
                </div>
              </div>

              <div class="row mt-3">
                <div class="row">
                  <div class="col-sm-6">
                    <router-link
                      to="/admin-note"
                      class="btn btn-danger mb-5"
                      >Back</router-link
                    >
                  </div>
                  <div class="col-sm-6">
                    <button type="submit" class="btn btn-primary float-end">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
import axios from "axios";

export default {
  props: ["id"], // Tambahkan properti 'id' untuk menerima ID dari parameter rute

  data() {
    return {
      form: [],
    };
  },
  methods: {
    updateBarang() {
      let formData = new FormData();
      formData.append("location", this.form.location);
      formData.append("date", this.form.date);
      formData.append("no_container", this.form.no_container);
      formData.append("no_seal", this.form.no_seal);
      formData.append("destination", this.form.destination);
      formData.append("no_truck", this.form.no_truck);
      formData.append("driver", this.form.driver);
      formData.append("telp", this.form.telp);
      console.log("test", formData);
      axios
        .post(`http://localhost:8080/api/update-note/${this.id}`, formData) // Gunakan properti 'id' sebagai bagian dari URL endpoint
        .then((response) => {
          console.log(response.data);
          this.showAlert();
          this.$router.push("/admin-note");
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
      .get(`http://localhost:8080/api/note/${this.id}`) // Gunakan properti 'id' sebagai bagian dari URL endpoint
      .then((response) => {
        this.form = response.data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
</style>
