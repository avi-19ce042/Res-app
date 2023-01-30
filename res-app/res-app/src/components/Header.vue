<template>
    <div class="nav">
    <a v-on:click="home" href="#">Home</a>
    <a v-on:click="add" href="#">Add Restaurant</a>
    <a v-on:click="update" href="#">Update Restaurant</a>
    <a v-on:click="logout" href="#">LogOut</a>
</div>
</template>

<script>
  
    export default {
        name: 'TopHeader',
        methods:{
            logout(){
               localStorage.clear();
               this.$router.push({name: 'LogIn'})
            },
            add() {
                this.$router.push({name: 'AddRes'})
            },
            update() {
                this.$router.push({name: 'UpdateRes'})
            },
            home() {
                this.$router.push({name: 'HomePage'})
            }
        }
    }
</script>

<style>
    .nav {
        background-color: bisque;
        padding: 15px; 
    }
    .nav a {
    padding: 15px;
    color: brown;
    text-decoration: none;
    /* float: left; */
    /* background-color: bisque; */
    /* display: block; */
    }
    .nav a:hover {
        background-color:burlywood ;
    }
    
</style>