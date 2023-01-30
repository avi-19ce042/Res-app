<template>
  <div>
    <TopHeader />
    <h1>Hello User, welcome to the Add page</h1>
    <div class="form">
      <input type="text" name="name" v-model="restaurants.name" placeholder="Enter name" />
      <input type="text" name="address" v-model="restaurants.address" placeholder="Enter address" />
      <input type="text" name="contact" v-model="restaurants.city" placeholder="Enter city" />
      <button v-on:click="addRes">Add Restaurant</button>
    </div>
  </div>
</template>

<script>
import TopHeader from "./Header.vue";
import axios from "axios";
export default {
  name: "AddRes",
  components: {
    TopHeader
  },
  data() {
    return {
      restaurants: {
        name: "",
        address: "",
        city: ""
      }
    };
  },
  methods: {
    async addRes() {
      // console.log(this.restaurants)
      let result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurants.name,
        address: this.restaurants.address,
        city: this.restaurants.city
      });
      console.log(result);
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  }
};
</script>

<style>
.form input {
  width: 300px;
  height: 30px;
  padding-left: 15px;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.form button {
  width: 200px;
  height: 30px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
</style>







