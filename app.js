const { createApp } = Vue;
createApp({
  data() {
    return {
      name: "reyhan",
      website: "https://reyhanyilmaz.vercel.app/",
      aTag: '<a href="https://reyhanyilmaz.vercel.app/">Web site a tag gösterimi</a>',
    };
  },
  methods: {},
}).mount("#app");
