<template>
    <div>
        <img class="logo" src="../assets/logo.png" alt="">
        <h3>Sign Up</h3>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter name">
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-bind:onclick="signUp">Sign Up</button>
        </div>
        <p>
                <router-link to="/login">LogIn</router-link>
        </p>
    </div> 
</template>

<script>
    //axios is a http client library used to call API
    import axios from "axios"
    export default {
        name: 'SignUp',
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        //we can make our custom functionality in methods
        methods: {
            async signUp(){
                console.log('Successful')
                let res = await axios.post('http://localhost:3000/users',{
                    name:this.name,
                    email:this.email,
                    password:this.password
                })
                console.log(res);
                if(res.status==201) {
                    localStorage.setItem("user-info",JSON.stringify(res.data))
                    this.$router.push({name:'HomePage'})
                }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if(user){
                 this.$router.push({name:'HomePage'})
            }
        }
    }
</script>

<style>
.logo{
    width: 100px;
}
.register input{
    width: 300px;
    height: 30px;
    padding-left: 15px;
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(64, 4, 143);
}
.register button {
    width: 100px;
    height: 30px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(64, 4, 143);
}
</style>