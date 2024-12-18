<template>
  <div>
    <h1>Vista de Administración</h1>

    <!-- Formulario para registrar el usuario -->
    <form @submit.prevent="registrarUsuario">
      <input v-model="nombre" placeholder="Nombre" required />
      <input v-model="apellido" placeholder="Apellido" required />
      <button type="submit">Registrar</button>
    </form>

    <!-- Resumen del usuario -->
    <div v-if="usuario">
      <h2>Resumen de tu cuenta</h2>
      <p>Nombre: {{ usuario.nombre }}</p>
      <p>Apellido: {{ usuario.apellido }}</p>

      <!-- Mostrar la actividad del usuario -->
      <div v-if="actividad.length > 0">
        <h3>Tu actividad</h3>
        <ul>
          <li v-for="(comentario, index) in actividad" :key="index">
            En <strong>{{ comentario.juego }}</strong>: "{{ comentario.text }}"
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No has realizado ninguna actividad aún.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdministracionView',
  data() {
    return {
      nombre: '',
      apellido: '',
      usuario: null,
      actividad: [], // Lista de comentarios realizados por el usuario
    };
  },
  created() {
    // Cargar usuario desde localStorage
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      this.usuario = JSON.parse(storedUser);
      this.cargarActividad();
    }
  },
  methods: {
    registrarUsuario() {
      if (this.nombre.trim() && this.apellido.trim()) {
        // Guardar usuario en data y localStorage
        this.usuario = {
          nombre: this.nombre,
          apellido: this.apellido,
        };
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
        this.cargarActividad();
        alert('Usuario registrado correctamente.');
      }
    },
    cargarActividad() {
      const actividad = [];
      // Iterar sobre todas las claves en localStorage
      for (const key in localStorage) {
        if (key.startsWith('opiniones_')) {
          // Obtener comentarios almacenados para cada juego
          const opiniones = JSON.parse(localStorage.getItem(key)) || [];
          opiniones.forEach((opinion) => {
            // Filtrar solo los comentarios del usuario actual
            if (opinion.usuario === `${this.usuario.nombre} ${this.usuario.apellido}`) {
              actividad.push({
                juego: key.replace('opiniones_', ''), // Extraer el nombre del juego de la clave
                text: opinion.text,
              });
            }
          });
        }
      }
      this.actividad = actividad;
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
h3 {
  margin-top: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
