<script setup lang="ts">
import { useNewsStore } from "@/stores/news";

const store = useNewsStore();
</script>

<template>
  <div class="relative h-full w-full text-white">
    <img
      class="absolute h-3/4 z-[-1] object-fill"
      :src="store.headlineInfo?.urlToImage"
      alt="imagen"
    />
    <h1>{{ store.headlineInfo?.title }}</h1>
    <p>{{ store.headlineInfo?.description }}</p>
  </div>
</template>
