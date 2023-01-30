<template>
  <div>
    <TopHeader />
  <h1>Hello User, welcome to the Update page</h1></div>
  
</template>
    
    <script>
import TopHeader from "./Header.vue";
export default {
  name: "UpdateRes",
  components: {
    TopHeader
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  }
};
</script>