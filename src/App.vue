<template>
  <div class="d-flex flex-column h-100">
    <header class="flex-shrink-0">
      <Navbar />
    </header>

    <main class="flex-shrink-0 bg-white">
      <router-view />
    </main>

    <footer class="footer mt-auto py-1 bg-dark">
        <Footer />
    </footer>
  </div>
</template>

<script>
import store from '@/store';

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  store,
  components: {
    Navbar,
    Footer,
  },
}
</script>