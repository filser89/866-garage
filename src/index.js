import Vue from "vue";

const app = new Vue({
  el: "#app",
  data: {
    cars: [],
    brand: "",
    model: "",
    owner: "",
    plate: "",
  },

  methods: {
    fetchCars() {
      fetch("https://wagon-garage-api.herokuapp.com/866/cars")
        .then((res) => res.json())
        .then((data) => {
          this.cars = data;
        });
    },
    postCar() {
      const body = {
        brand: this.brand,
        model: this.model,
        owner: this.owner,
        plate: this.plate,
      };
      fetch("https://wagon-garage-api.herokuapp.com/866/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.cars.push(data);
          this.brand = "";
          this.model = "";
          this.plate = "";
          this.owner = "";
        });
    },
  },
  mounted() {
    console.log("page is mounted");
    this.fetchCars();
  },
});
