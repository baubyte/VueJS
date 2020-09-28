<template>
    <div>
        <!-- Pasamos lo Parametros -->
        <h1>Datos del Usuario: {{ $route.params.id}}</h1>
    </div>
</template>
<script>
export default {
    name: 'User'
}
</script>