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
            <div class="row">
              <div class="col-sm-6">
                <h5>Lokasi :{{this.detailNote.location}}</h5>
              </div>
              <div class="col-sm-6">
                <h5>Nomor Truk :{{this.detailNote.no_truck}}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h5>Date :{{this.detailNote.date}}</h5>
              </div>
              <div class="col-sm-6">
                <h5>Driver :{{this.detailNote.driver}}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h5>Nomor Container :{{this.detailNote.no_container}}</h5>
              </div>
              <div class="col-sm-6">
                <h5>Nomor Telp :{{this.detailNote.telp}}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h5>Nomor Seal :{{this.detailNote.no_seal}}</h5>
              </div>
              <div class="col-sm-6">
                <h5>Destination :{{this.detailNote.destination}}</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-1"></div>
        </div>
        <div class="row mt-4">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="row">
              <div class="col-sm-6">
                <label for="barang" class="form-label">Barang</label>
                <div class="row">
                  <div class="col-sm-9">
                    <select
                      v-model="selectedBarang"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option disabled value="">Pilih barang</option>
                      <option
                        v-for="barang in listBarang"
                        :key="barang.id"
                        :value="barang.jenis_barang"
                      >
                        {{ barang.jenis_barang }}
                      </option>
                    </select>
                  </div>
                  <div class="col-sm-3">
                    <button @click="submitBarang" class="btn btn-primary ms-3">
                      <i class="bi bi-arrow-down-square"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-3"></div>
              <div class="col-sm-3">
                <label for="tumpukan" class="form-label">Tumpukan</label>
                <div class="row">
                  <div class="col-sm-9">
                    <div class="row bg-white">
                      <div class="col-sm-8">
                        <h4>{{ this.tumpukan }}</h4>
                      </div>
                      <div class="col-sm-4">
                        <button
                          @click="hitungTumpukan()"
                          class="btn btn-primary ms-3"
                        >
                          <i class="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <button
                      @click="submitTumpukan"
                      class="btn btn-primary ms-3"
                    >
                      <i class="bi bi-arrow-down-square"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="text-center mt-5 mb-3">Data Barang</h4>
            <table class="bordered-table m-auto">
              <thead>
                <tr>
                  <th>Barang</th>
                  <th
                    v-for="header in headers"
                    :key="header"
                    class="text-center"
                  >
                    {{ header }}
                  </th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataBarang" :key="index">
                  <td>{{ item.barang }}</td>
                  <td v-for="header in headers" :key="header">
                    <!-- <ul> -->
                    <p
                      v-for="tumpukan in item.tumpukan[header]"
                      :key="tumpukan"
                      class="bordered-li"
                    >
                      {{ tumpukan }}
                    </p>
                    <!-- </ul> -->
                  </td>
                  <td>{{ getTotalTumpukan(item) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm-1"></div>
        </div>
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <router-link
              to="/admin-signature"
              class="btn btn-primary mb-5"
              style="float: right"
              @click="submitData"
              >Selanjutnya</router-link
            >
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
  props: ["id"],
  data() {
    return {
      tumpukan: 0,
      selectedBarang: "",
      listBarang: [],
      dataBarang: [],
      headers: [], // Menyimpan nama header
      detailNote:[],
    };
  },
  created() {
    this.fetchBarang();
  },
  methods: {
    submitData() {
      console.log(this.dataBarang);

      const requestData = new FormData();
      let tumpukanCount = 1;

      this.dataBarang.forEach((item) => {
        const tumpukanFields = {};
        for (const header in item.tumpukan) {
          tumpukanFields[`tumpukan_${tumpukanCount}`] =
            item.tumpukan[header].join(",");
          tumpukanCount++;
        }

        requestData.append(`id_note`, this.id);
        requestData.append(`id_barang`, item.barang);
        for (const key in tumpukanFields) {
          requestData.append(`${key}`, tumpukanFields[key]);
        }
      });

      axios
        .post("http://localhost:8080/api/createTumpukan", requestData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    fetchBarang() {
      console.log("tesss id :", this.id);
      axios
        .get("http://localhost:8080/api/barang")
        .then((response) => {
          this.listBarang = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get(`http://localhost:8080/api/note/${this.id}`)
        .then((response) => {
          this.detailNote = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(this.detailNote)
    },
    submitBarang() {
      if (this.selectedBarang) {
        this.dataBarang.push({ barang: this.selectedBarang, tumpukan: {} });
        this.selectedBarang = "";
      }
    },
    hitungTumpukan() {
      this.tumpukan = parseInt(this.tumpukan + 1);
    },
    submitTumpukan() {
      if (this.tumpukan && this.dataBarang.length > 0) {
        const lastBarang = this.dataBarang[this.dataBarang.length - 1];
        const header = Object.keys(lastBarang.tumpukan).length + 1;
        if (header <= 10) {
          if (!this.headers.includes(header.toString())) {
            this.headers.push(header.toString());
          }
          if (!lastBarang.tumpukan[header.toString()]) {
            lastBarang.tumpukan[header.toString()] = [];
          }
          lastBarang.tumpukan[header.toString()].push(parseInt(this.tumpukan));
        }
        this.tumpukan = "";
      }
    },
    getTotalTumpukan(item) {
      let total = 0;
      for (const header in item.tumpukan) {
        for (const tumpukan of item.tumpukan[header]) {
          total += tumpukan;
        }
      }
      return total;
    },
  },
};
</script>


<style>
.bordered-table {
  border-collapse: collapse;
}

.bordered-table th,
.bordered-table td {
  border: 1px solid #ccc;
  padding: 5px;
}

.bordered-li {
  border-bottom: 1px solid #ccc;
  padding: 5px;
}
</style>

