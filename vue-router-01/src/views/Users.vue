<template>
  <div>
    <h1>Informacion de Usuario</h1>
    <router-link :to="{ name:'users', params:{id:item}}" v-for="(item,index) of arrayUsers " :key="index">
        <button type="button" class="btn btn-success">{{item}}</button>
    </router-link>
    <user/>
  </div>
</template>
<script>
import User from '@/components/User.vue'
export default {
    components:{
        User
    },
    data(){
        return{
            arrayUsers:['BAUBYTE','YOSHI','BAU']
        }
    }
}
</script>