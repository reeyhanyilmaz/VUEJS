const { createApp } = Vue;
createApp({
  data() {
    return {
      name: "reyhan",
      website: "https://reyhanyilmaz.vercel.app/",
      aTag: '<a href="https://reyhanyilmaz.vercel.app/">Web site a tag gösterimi</a>',
      number: 10,
      X: 0,
      Y: 0,
    };
  },
  //   function
  methods: {
    increase: function () {
      // this ile data içindeki degiskene erisilir
      this.number++;
    },
    decrease: function () {
      this.number--;
    },
    addTen: function (num) {
      this.number += num;
    },
    extractionTen: function (num) {
      this.number -= num;
    },
    // böylede func yazılır
    updateCoordinates(event) {
      console.log("event :>> ", event);
      this.X = event.offsetX;
      this.Y = event.offsetY;
    },
  },
}).mount("#app");
