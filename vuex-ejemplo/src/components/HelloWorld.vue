<template>
  <div class="hello">
    <!-- Usando Estados con Vuex sin Getters -->
    <!--  <h1>{{ $store.state.msg }}</h1> -->
    <!-- Usando Estados con Vuex con Getters -->
    <h1>{{ $store.getters.mensaje }}</h1>
    <h3>{{ $store.getters.nombreCompleto }}</h3>
    <h2>Amigos</h2>
    <input type="text" v-model="amigo">
    <button @click="addAmigo">Agregar Amigo</button>
    <!-- Muataciones Action -->
    <ul>
      <li v-for="(amigo, index) in $store.state.amigos" :key="index">
        {{amigo}}
        <button @click="$store.dispatch('delAmigoAction',index)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return{
      amigo:''
    }
  },
  methods:{
    addAmigo(){
      //this.$store.state.amigo = this.amigo;
      /**Llamamos a la Action */
      this.$store.dispatch('addAmigoAction', this.amigo);
      this.amigo='';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
