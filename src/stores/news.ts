import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", {
  state: () => {
    return {
      news: [],
    };
  },
  actions: {
    async fetchNews(category: string) {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    headlineInfo: (state) => {
      const { articles } = state.news;
      const { title, description, urlToImage } = articles[0];
      return {
        title,
        description,
        urlToImage,
      };
    },
  },
});
