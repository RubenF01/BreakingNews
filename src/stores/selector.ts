import { defineStore } from 'pinia';

export const useSelectorStore = defineStore("selector", {
 state: () => {
  return {
   option: "science"
  }
 },
 actions: {
  setOption(value: string) {
   this.option = value;
  }
 }
})