import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('saludo', {
    template: '<h1>Hola - Introducción a Componentes.</h1>'
});
new Vue({
    el: '#app'
})