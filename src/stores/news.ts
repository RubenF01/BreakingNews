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
      console.log(state.news);
      const { articles } = state.news;
      if (!state.news) return;
      if (!articles) return;
      const { title, description, urlToImage } = articles[0];
      return {
        title,
        description,
        urlToImage,
      };
    },

    otherNews: (state) => {
      const { articles } = state.news;
      const articleFeed = articles.slice(1);
      if (!state.news) return;
      if (!articles) return;
      return {
        articleFeed,
      };
    },
  },
});
