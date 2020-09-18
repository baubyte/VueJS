<template>
  <div class="card my-5">
    <div class="card-body">
      <h5 class="text-center card-title">{{producto.titulo}}</h5>
      <img :src="producto.imagen" :alt="producto.titulo" class="card-img-top" />
      <p class="text-center text-muted card-text display-4">$ {{ Number(producto.precio).toFixed()}}</p>
      <button
        @click="agregarCarrito(producto)"
        :disabled="estaEnCarrito"
        class="btn btn-success form-control"
      >{{estaEnCarrito?'Agregado':'Agregar al Carrito'}}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Producto",
  props: ["producto", "estaEnCarrito"],
  methods: {
    agregarCarrito(producto) {
      this.$emit("agregar-carrito", producto);
    },
  },
};
</script>
<style>
</style>