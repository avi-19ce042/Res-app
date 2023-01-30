<template>
    <div>
        <img class="logo" src="../assets/logo.png" alt="">
        <h3>Login</h3>
        <div class="login">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-bind:onClick="login">Login</button>
            <p>
                <router-link to="/signup">Sign Up</router-link>
            </p>
        </div>
    </div> 
</template>

<script>
    import axios from 'axios'
    export default {
        name: "LogIn",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async login(){
                console.log(this.email, this.password);
                let result = await axios.get(
                   `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                )

                if(result.status==200 && result.data.length>0){
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                    this.$router.push({name:'HomePage'})
                }
                console.warn(result);
            }
        }
    }
</script>

<style>
    .login input{
    width: 300px;
    height: 30px;
    padding-left: 15px;
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(64, 4, 143);
}
.login button {
    width: 100px;
    height: 30px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(64, 4, 143);
}
</style>