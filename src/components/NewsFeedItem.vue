<script lang="ts">
export default {
  name: "NewsFeedItem",
  props: ["title", "description"],
};
</script>

<template>
  <div>
    <h1 class="font-bold">{{ title }}</h1>
    <p class="text-clip">{{ description }}</p>
  </div>
</template>
