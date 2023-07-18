export const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('./components/Login.vue'),
        meta: {
          bodyClass: 'custom-body-style', // Class khusus untuk halaman ini
        },
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('./components/Register.vue')
      },
      {
        path: '/lupa-password',
        name: 'lupa-password',
        component: () => import('./components/LupaPassword.vue')
    },
    // admin
    {
        path: '/admin-dashboard',
        name: 'admin-dashboard',
        component: () => import('./components/admin/DashboardView.vue')
      },
      {
        path: '/admin-barang',
        name: 'admin-barang',
        component: () => import('./components/admin/BarangView.vue')
      },
      {
        path: '/admin-input-barang',
        name: 'admin-inputBarang',
        component: () => import('./components/admin/InputBarangView.vue')
      },
      {
        path: '/admin-update-barang/:id', // Menambahkan parameter :id
        name: 'admin-updateBarang',
        component: () => import('./components/admin/UpdateBarangView.vue'),
        props: true // Mengaktifkan pengiriman props sebagai parameter
      },
      {
        path: '/admin-note',
        name: 'adminnote',
        component: () => import('./components/admin/NoteView.vue')
      },
      {
        path: '/admin-input-note',
        name: 'admin-input-note',
        component: () => import('./components/admin/InputNoteView.vue')
      },
      {
        path: '/admin-update-note/:id', // Menambahkan parameter :id
        name: 'admin-updateNote',
        component: () => import('./components/admin/UpdateNoteView.vue'),
        props: true // Mengaktifkan pengiriman props sebagai parameter
      },
      {
        path: '/admin-input-tumpukan/:id', // Menambahkan parameter :id
        name: 'admin-InputTumpukan',
        component: () => import('./components/admin/InputTumpukanView.vue'),
        props: true // Mengaktifkan pengiriman props sebagai parameter
      },
      {
        path: '/admin-signature/', // Menambahkan parameter :id
        name: 'admin-signature',
        component: () => import('./components/admin/signatureView.vue'),
        props: true // Mengaktifkan pengiriman props sebagai parameter
      },
      {
        path: '/admin-detail-note/:id', // Menambahkan parameter :id
        name: 'admin-detailNote',
        component: () => import('./components/admin/DetailNoteView.vue'),
        props: true // Mengaktifkan pengiriman props sebagai parameter
      },
]