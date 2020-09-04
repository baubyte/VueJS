import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
    //Componentes (Extendiendo)
    /*var componente1 = Vue.extend({
        template: '<h1>Hola - Introducción a Componentes.</h1>'
    })
    var componente2 = Vue.extend({
        template: '<h3>{{subtitulo}}</h3>',
        data() {
            return {
                subtitulo: 'Listado de Frameworks JavaScripts.'
            }
        }
    })
    var componente3 = Vue.extend({
        template: '<div><ul><framework v-for="framework in frameworks" :key=framework.id>{{framework.titulo}}</framework></ul></div>',
        data() {
            return {
                frameworks: [
                    { id: 1, titulo: 'Vue.js' },
                    { id: 2, titulo: 'Angular' },
                    { id: 3, titulo: 'React' }
                ]
            }
        }
    })
    Vue.component('componente-en-linea', {
        data() {
            return {
                titulo: 'Hola - Componentes En Linea.'
            }
        },
        methods: {
            display() {
                console.log('Hola');
            }
        }
    });
    Vue.component('componente-saludo', componente1);
    Vue.component('componente-titulo', componente2);
    Vue.component('componente-lista', componente3);
    Vue.component('framework', {
        //Para el encadenado de componentes
template: '<li><slot></slot></li>'
}); */

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});
