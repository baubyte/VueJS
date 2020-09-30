<template>
  <div class="hello">
    <!-- Usando Estados con Vuex sin Getters -->
    <!--  <h1>{{ $store.state.msg }}</h1> -->
    <!-- Usando Estados con Vuex con Getters -->
    <h1>{{ $store.getters.mensaje }}</h1>
    <h3>{{ $store.getters.nombreCompleto }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
