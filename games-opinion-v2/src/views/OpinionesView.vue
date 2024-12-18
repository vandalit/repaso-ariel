<template>
  <div>
    <h1>Opiniones sobre {{ gameName }}</h1>

    <!-- Validar si hay un usuario registrado -->
    <div v-if="usuario">
      <p>Bienvenido, <strong>{{ usuario.nombre }} {{ usuario.apellido }}</strong>. ¡Puedes agregar tus opiniones!</p>

      <!-- Mostrar opiniones -->
      <div v-if="opiniones.length > 0">
        <div v-for="(opinion, index) in opiniones" :key="index" class="opinion-item">
          <p>{{ opinion.text }} - <strong>{{ opinion.usuario }}</strong></p>
          <button @click="editarOpinion(index)">Editar</button>
          <button @click="eliminarOpinion(index)">Eliminar</button>
        </div>
      </div>
      <div v-else>
        <p>No hay opiniones sobre este juego. Sé el primero en comentar.</p>
      </div>

      <!-- Formulario para agregar opiniones -->
      <textarea v-model="nuevaOpinion" placeholder="Escribe tu opinión aquí"></textarea>
      <button @click="agregarOpinion">Agregar</button>
    </div>

    <!-- Si no hay un usuario registrado -->
    <div v-else>
      <p>Debes registrar un usuario en la sección de administración para dejar opiniones.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpinionesView',
  props: ['gameName'],
  data() {
    return {
      opiniones: [], // Lista de opiniones del juego actual
      nuevaOpinion: '',
      usuario: null, // Usuario registrado
    };
  },
  created() {
    // Validar usuario en localStorage
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      this.usuario = JSON.parse(storedUser);
    }

    // Cargar opiniones del localStorage
    const storedOpiniones = localStorage.getItem(`opiniones_${this.gameName}`);
    if (storedOpiniones) {
      this.opiniones = JSON.parse(storedOpiniones);
    }
  },
  methods: {
    agregarOpinion() {
      if (this.nuevaOpinion.trim()) {
        this.opiniones.push({
          text: this.nuevaOpinion,
          usuario: `${this.usuario.nombre} ${this.usuario.apellido}`,
        });
        localStorage.setItem(`opiniones_${this.gameName}`, JSON.stringify(this.opiniones));
        this.nuevaOpinion = '';
      }
    },
    editarOpinion(index) {
      this.nuevaOpinion = this.opiniones[index].text;
      this.opiniones.splice(index, 1);
      localStorage.setItem(`opiniones_${this.gameName}`, JSON.stringify(this.opiniones));
    },
    eliminarOpinion(index) {
      this.opiniones.splice(index, 1);
      localStorage.setItem(`opiniones_${this.gameName}`, JSON.stringify(this.opiniones));
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  margin: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.opinion-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}
</style>
