<template>
    <navbar/>
</template>

<script>
    import navbar from './navbar.vue'
    // import axios from "axios"
    export default {
        data(){
            return {
                test:[1,2,3],
            } 
        },
        components:{
            navbar
        },
        created() { 
            // axios.get('https://script.google.com/macros/s/AKfycbwnxysFBU1_Q3RE1ku5ryF3cR9Cj-sm0YBvQZtCq5PCHCJuRV4FyQhhpBlopcuG40M/exec"').
                // then((res)=>{
                //     console.log(res);
                // }).catch((err)=>console.error(err));
            // console.log(123)
        }
    }

</script>

<style scoped>
    
</style>