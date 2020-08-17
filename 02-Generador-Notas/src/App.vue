<template>
  <div id="app">
    <h3>{{ titulo }}</h3>
    <div class="form">
      <div class="form-group">
        <label>Titulo</label>
        <input class="form-control" type="text" v-model="nota.titulo" />
      </div>
      <div class="form-group">
        <label>Texto</label>
        <textarea class="form-control" v-model="nota.texto"></textarea>
      </div>
      <button class="btn btn-success" @click="agregarNota">Guardar Nota</button>
    </div>
    <div class="col-sm-12">
      <div class="col-sm-4 nota" v-for="(nota, index) in notas">
        <div class="card">
          <div class="card-block">
            <div class="card-title">{{nota.titulo}}</div>
            <div class="card-subtitle mb-2 text-muted">{{nota.fecha}}</div>
            <div class="card-text">{{nota.texto}}</div>
          </div>
          <button class="close" @click="eliminarNota(index)">&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      titulo: "Gestion de Notas",
      nota: {
        titulo: "",
        texto: "",
      },
      notas: [
        {
          titulo: "Ir al Cine",
          texto: "Ver Peliculas Disponibles en Cartelera",
          fecha: new Date(Date.now()).toLocaleDateString(),
        },
      ],
    };
  },
  methods: {
    agregarNota: function () {
      let { texto, titulo } = this.nota;
      this.notas.push({
        texto,
        titulo,
        fecha: new Date(Date.now()).toLocaleDateString(),
      });
    },
    eliminarNota: function (index) {
      this.notas.splice(index, 1);
    },
  },
};
</script>

<style>
.form {
  text-align: left;
}
.card {
  text-align: left;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  padding-left: 8px;
}
.nota {
  padding: 5px;
}
</style>
