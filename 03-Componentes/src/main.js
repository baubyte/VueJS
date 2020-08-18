import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
    /**Componentes (Extendiendo)*/
var componente1 = Vue.extend({
    template: '<h1>Hola - Introducción a Componentes.</h1>'
})
var componente2 = Vue.extend({
    template: '<h3>Listado de Frameworks JavaScripts.</h3>'
})
var componente3 = Vue.extend({
    template: '<ul><li>Vue.js</li><li>Angular</li><li>React</li></ul>'
})
Vue.component('componente-en-linea', {});
Vue.component('componente-saludo', componente1);
Vue.component('componente-titulo', componente2);
Vue.component('componente-lista', componente3);
new Vue({
    el: '#app'
})