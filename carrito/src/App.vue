<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="produc in productos" :key="produc.id">
            <producto
              :producto="produc"
              v-on:agregar-carrito="agregarProdCarrito"
              :estaEnCarrito="estaEnCarrito(produc)"
            ></producto>
          </div>
        </div>
      </div>
      <div class="col-md-5 my-5">
        <carrito :items="carrito" v-on:pagar="pagar" v-on:remover-item="removerProducto"></carrito>
      </div>
    </div>
  </div>
</template>

<script>
import productos from "./productos.json";
import Producto from "./components/Producto.vue";
import Carrito from "./components/Carrito.vue";
export default {
  name: "App",
  components: {
    Producto,
    Carrito,
  },
  data() {
    return {
      productos,
      carrito: [],
    };
  },
  methods: {
    agregarProdCarrito(producto) {
      this.carrito.push(producto);
    },
    estaEnCarrito(producto) {
      const item = this.carrito.find((item) => item.id === producto.id);
      if (item) {
        return true;
      } else {
        return false;
      }
    },
    removerProducto(producto){
      this.carrito = this.carrito.filter(item => item.id != producto.id);
    },
    pagar(){
      /**Vciamos el Carrito */
      this.carrito= [];
      alert('El Pago se Realizo Correctamente.');
    }
  },
};
</script>

<style>
</style>
