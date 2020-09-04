<template>
  <div>
    <div class="col-12">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Titulo</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{post.id}}</td>
            <td>{{post.titulo}}</td>
            <td>{{post.body}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "EjemploPost",
  data() {
    return {
      posts:[
        {id:'1',titulo:'Post 1', body:'dsadasdasdasd'},
        {id:'2',titulo:'Post 2', body:'dsadasdasdasd'},
        {id:'3',titulo:'Post 3', body:'dsadasdasdasd'},
      ]
    };
  },
};
</script>
<style>
</style>
