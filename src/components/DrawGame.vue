<template lang="">
<navbar />
<div class="container align-self-center text-center mt-5">
    <div v-for="i in 36" :key="i">
        <div v-if="i%6==1" class="row justify-content-center">
            <div class="d-flex flex-column  border border-5 rounded-3 shadow m-1 p-0 draw-item" v-for="j in 6" :key="j">
                <div @click.prevent="test(i+j-1)" v-bind:class="{ 'card-back': (!card_status[i+j-1])||(gift_list[i+j-1]==''), }" class="unselectable h-100  border d-flex text-algin-center justify-content-center"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navbar from "./navbar.vue"
import gift_list from './json/gift.json'
// import axios from "axios"
export default {
    data() {
        return {
            card_status: {},
            gift_list: gift_list
        }
    },
    created() {
        if (localStorage.card_status) {
            this.card_status = JSON.parse(localStorage.card_status);
        }else{
            var init_status = new Object();
            for(var i = 1;i<=36;i++){
                init_status[i] = true;
            }
            this.card_status = init_status;
            localStorage.card_status = JSON.stringify(init_status);
        }
        console.log(this.card_status)
    },
    components: {
        navbar
    },
    watch: {
        card_status(new_card_status) {
            console.log("status changed")
            localStorage.card_status = JSON.stringify(new_card_status);
        }
    },
    methods: {
        test(n) {
            // const json = JSON.stringify({ Hash_id:1 });
            // axios.post('/get_item',json).
            //     then((res)=>{
            //         // if(this.formData.username=="admin")
            //         //     this.$cookies.set('ID','admin');
            //         //     this.$router.push("/");
            //         //     console.table(res);
            //         console.log(res);
            //     }).catch((err)=>console.error(err));
            if (this.card_status[n] && this.gift_list[n] != '') {
                this.$swal.fire({
                    title: this.gift_list[n],
                    width: 600,
                    padding: '3em',
                    background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                    backdrop: `rgba(0,0,123,0.4)
                        url("https://gist.githubusercontent.com/GeekTree0101/05d338bb59109fc71871711c6fa49377/raw/3ff868ffcf2f84d419c392667335fe7e9f1bf155/dancing-gopher.gif")
                        top
                        no-repeat`
                }).then(() => {
                    this.card_status[n] = false;
                    localStorage.card_status = JSON.stringify(this.card_status);
                    console.log(n, this.card_status[n]);
                })
            }
        }
    },

}
</script>

<style lang="">

</style>
