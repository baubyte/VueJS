<template>
  <div class="container">
    <!-- Formulario -->
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6">
          <h1>Formulario de Contacto</h1>
          <hr />
          <!-- Nombre -->
          <div class="form-group">
            <label for="nombre">Nombres: </label>
            <!-- Creamos los enlances con v-model -->
            <input
              type="text"
              id="nombre"
              class="form-control"
              v-model="datosPersona.nombre"
            />
          </div>
          <!-- Email -->
          <div class="form-group">
            <label for="email">Email: </label>
            <!-- Creamos los enlances con v-model -->
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="datosPersona.email"
            />
          </div>
        </div>
      </div>
      <!-- Mensaje -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6">
          <label for="mensaje">Mensaje: </label><br />
          <!-- Creamos los enlances con v-model -->
          <textarea
            id="mensaje"
            rows="5"
            cols="30"
            class="form-control"
            v-model="mensaje"
          ></textarea>
        </div>
      </div>
      <!-- CheckBox -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6">
          <div class="form-group">
            <label for="enviarmail">
              <input
                type="checkbox"
                name="enviarmail"
                id="enviarmail"
                value="enviarmail"
                class="form-control"
                v-model="opcionMail"
              />
              Enviar Email
            </label>&nbsp;&nbsp;&nbsp;&nbsp;
            <label for="enviarcopia">
              <input
                type="checkbox"
                name="enviarcopia"
                id="enviarcopia"
                value="enviarcopia"
                class="form-control"
                v-model="opcionMail"
              />
              Enviar una Copia
            </label>
          </div>
        </div>
      </div>
    <!-- Radios -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6">
          <div class="form-group">
            <label for="masculino">
              <input
                type="radio"
                name="masculino"
                id="masculino"
                value="M"
                class="form-control"
                v-model="genero"
              />
              Masculino
            </label>&nbsp;&nbsp;&nbsp;&nbsp;
            <label for="femenino">
              <input
                type="radio"
                name="femenino"
                id="femenino"
                value="F"
                class="form-control"
                v-model="genero"
              />
              Femenino
            </label>
          </div>
        </div>
      </div>
    <!-- Lista Desplegable -->
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6">
            <div class="form-group">
                <label for="horario">Horario: </label>
                <select id="horario" class="form-control" v-model="horario">
                    <option v-for="item in datosHorario" :key="item" :selected="item == 'Mañana'">{{item}}</option>
                </select>
            </div>
        </div>
    </div>
    <!-- Botones  -->
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6">
                <button class="btn btn-primary" @click.prevent="enviar">Enviar Datos</button>
        </div>
    </div>
    </form><br>
    <!-- Mostrado los Datos del Formulario -->
    <div class="row" v-if="enviado">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <div class="panel-default">
          <div class="panel-heading">
            <h3>Datos</h3>
          </div>
          <div class="panel-body">
            <!-- Interpolacion -->
            <p>Nombres: {{ datosPersona.nombre }}</p>
            <!-- Interpolacion -->
            <p>Email: {{ datosPersona.email }}</p>
            <p style="white-space: pre">
              Mensaje:<br />
              {{ mensaje }}
            </p>
            <p>Opcion de Envio: 
                <ul>
                    <!-- Interpolacion con un for -->
                    <li v-for="opcion in opcionMail" :key="opcion">
                        {{opcion}}
                    </li>
                </ul>
            </p>
            <p>
                Genero:
                {{genero}}
            </p>
            <p>Horario: 
                {{horario}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  /**Los datos para el binding */
  data() {
    return {
      /**Creamos el Objeto */
      datosPersona: {
        nombre: "",
        email: "",
      },
      mensaje: "Test Mensaje",
      opcionMail: [],
      genero: "M",
      horario: "Mañana",
      datosHorario: ["Mañana", "Tarde", "Noche"],
      enviado:false
    };
  },
  methods:{
      enviar(){
          this.enviado =true;
      },
  },
};
</script>

<style>
</style>
