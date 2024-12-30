<template>
  <div>
    <h1>Vista de Administración</h1>
    <form @submit.prevent="registrarUsuario">
      <input v-model="nombre" placeholder="Nombre" required />
      <input v-model="apellido" placeholder="Apellido" required />
      <button type="submit">Registrar</button>
    </form>
    <div v-if="usuario">
      <h2>Resumen de tu cuenta</h2>
      <p>Nombre: {{ usuario.nombre }}</p>
      <p>Apellido: {{ usuario.apellido }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Administracion',
  data() {
    return {
      nombre: '',
      apellido: '',
      usuario: null,
    };
  },
  methods: {
    registrarUsuario() {
      this.usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
</style>
