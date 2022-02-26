<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Headline from "./components/Headline.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <NavBar />

    <div>
      <Headline />
    </div>
    <Footer>
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-heart" />
      </template>
    </Footer>
  </main>
</template>

<style>
@import "./index.css";
</style>
