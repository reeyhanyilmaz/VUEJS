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
      name_2: "",
      age: "",
      // computed properties
      a: 0,
      b: 0,
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
    // böylede func yazılır,
    // mouse event
    updateCoordinates(event) {
      console.log("event :>> ", event);
      this.X = event.offsetX;
      this.Y = event.offsetY;
    },
    // event modifier
    alertFunc() {
      alert("Clicked!");
    },

    //computed properties
    aYaEkle: function () {
      console.log("A kontrol edildi");
      return this.a + this.age;
    },
    bYeEkle: function () {
      console.log("B kontrol edildi");
      return this.b + this.age;
    },
  },
  //vue js her değisimde kontrol etmesin sadece degisen degiskeni kontrol etsin diye computed kulllanıyoruz.
  // methods kısmında yazdıgımızda a degisse bile b'yide konttol ediyordu ve html kısmında () böyle calıstıyoruyoz.
  // Ancak Computed ile sadece func. ismi yazılır
  computed: {
    aYaEkle: function () {
      console.log("A kontrol edildi");
      return this.a + this.age;
    },
    bYeEkle: function () {
      console.log("B kontrol edildi");
      return this.b + this.age;
    },
  },
}).mount("#app");
