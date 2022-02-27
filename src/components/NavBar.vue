<script setup lang="ts">
import { useSelectorStore } from "../stores/selector";

const store = useSelectorStore();
</script>

<template>
  <div class="w-full border-b-2">
    <div class="flex justify-between max-w-7xl mx-auto pb-2">
      <h1 class="text-red-900 font-bold text-3xl">BreakingNews</h1>
      <select :value="store.option" id="news" @change="(e) => store.setOption(e.target.value)">
        <option value="science">Science</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </div>
  </div>
</template>
