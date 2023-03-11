<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container">
          <RouterLink class="navbar-brand" to="/">
            CRUD App
          </RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/" active-class="active navActive">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about" active-class="active navActive">About Us</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/employees" active-class="active navActive">Employee List</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
  <Footer class="footer" />
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import {onMounted } from "vue";
import Footer from "../src/views/FooterView.vue"
const router = useRouter();

onMounted(async () => {
  await router.isReady();
})
</script>

<style scoped>
.navActive {
  background: chocolate;
  border: 2px solid #2c3e50;
  border-radius: 5px;
}
.footer {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #232f3e;
  padding: 10px;
  color: #fff;
  text-align: center;
}
</style>

