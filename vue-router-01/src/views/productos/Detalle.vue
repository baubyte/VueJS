<template>
  <div class="container">
    <div class="cover">
      <div class="col-md-12">
        <h3 class="text-center">Detalle de Producto</h3>
      </div>
      <div class="row">
        <div class="col-md-2">
        </div>
        <div class="col-md-8" >
          <div class="col-md-12 img-section">
            <img src="http://placehold.it/200x100/000" alt="" />
          </div>
          <div class="col-md-12">
            <h4>Titulo Producto {{id}}</h4>
            <p>Descripcion del Producto</p>
            <a href="#" class="btn btn-success btn-sm">Agregar al Carrito</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  /**Capturamos el Datos desde el Modelo */
  data(){
    return {
      id:this.$route.params.id
    }
  }
}
</script>
<style>
.cover {
  padding: 20px;
  margin: 40px 2px;
  border: 1px solid #d2e0e6;
}
.img-section img{
  width: 100%;
  padding: 20px;
  margin: 40px 2px;
  border: 1px solid #d2e0e6;
}
</style>