<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Buat Akun!</h1>
              </div>
              <form class="user" @submit.prevent="registerUser">
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" v-model="name" placeholder="Nama">
                  </div>
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="number" class="form-control form-control-user" v-model="nik" placeholder="NIK">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6">
                    <input type="number" class="form-control form-control-user" v-model="phone" placeholder="No Telepon">
                  </div>
                  <div class="col-sm-6">
                    <input type="email" class="form-control form-control-user" v-model="email" placeholder="Email">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" class="form-control form-control-user" v-model="password" placeholder="Password">
                  </div>
                  <div class="col-sm-6">
                    <input type="password" class="form-control form-control-user" v-model="repeatPassword" placeholder="Ulangi Password">
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-user btn-block">Daftar</button>
              </form>
              <hr>
              <div class="text-center">
                <router-link class="small" to="/lupa-password">Lupa Password?</router-link>
              </div>
              <div class="text-center">
                <router-link class="small" to="/">Sudah punya akun? Login!</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  mounted() {
    const body = document.querySelector('body');
    body.style.backgroundImage = 'url(/img/wilayah.png)';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
  },
  data() {
    return {
      name: '',
      nik: '',
      phone: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  },
  methods: {
    registerUser() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('nik', this.nik);
      formData.append('telp', this.phone);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('password', this.password);
      formData.append('confirm_password', this.repeatPassword);

      // Kirim permintaan POST menggunakan Axios
      axios.post('http://localhost:8080/api/register', formData)
        .then(response => {
          console.log(response.data);
          // Menampilkan SweetAlert sukses
          Swal.fire({
            icon: 'success',
            title: 'Pendaftaran berhasil!',
            text: 'Anda telah berhasil mendaftar.',
            confirmButtonText: 'OK'
          }).then(() => {
            // Arahkan pengguna ke rute '/'
            this.$router.push('/');
          });
        })
        .catch(error => {
          console.error(error);
          if (error.response && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            let errorMessages = '';
            Object.keys(errors).forEach(key => {
              errorMessages += `${errors[key]}\n`;
            });

            // Menampilkan SweetAlert error dengan pesan kesalahan
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: errorMessages
            });
          } else {
            // Menampilkan SweetAlert error umum
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Terjadi kesalahan saat mendaftar.'
            });
          }
        });
    }
  }
};
</script>
