<template>
   <div>
      <TopHeader/>
<h1>Hello {{name}}, welcome to the home page</h1>
<table border="1" class="size">
   <tr class="size">
      <td>ID</td>
      <td>Name</td>
      <td>City</td>
      <td>Area</td>
   </tr>
   <tr class="size" v-for="item in restaurants" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.city}}</td>
      <td>{{item.area}}</td>
   </tr>
</table>
   </div>

</template>

<script>
      import TopHeader from './Header.vue'
      import axios from 'axios'
         export default {
         name: 'HomePage',
         data() {
            return {
               name: '',
               restaurants: [],
            }
         },
         components: 
         {
            TopHeader
         },
         async mounted() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            let result = await axios.get('http://localhost:3000/restaurants');
            console.log(result);
            this.restaurants = result.data;
            console.log(this.restaurants)
        }
        }
</script>

<style>
   td{
      width: 300px;
      height: 25px;
   }
</style>