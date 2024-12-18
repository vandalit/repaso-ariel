<template>
  <div>
    <h1>Vista de Administración</h1>

    <!-- Registro de usuario -->
    <form v-if="!usuario" @submit.prevent="registrarUsuario">
      <input v-model="nombre" placeholder="Nombre" required />
      <input v-model="apellido" placeholder="Apellido" required />
      <button type="submit">Registrar</button>
    </form>

    <!-- Login de usuario -->
    <form v-if="!usuario && usuariosGuardados.length > 0" @submit.prevent="loginUsuario">
      <h3>Inicia sesión</h3>
      <select v-model="usuarioSeleccionado">
        <option disabled value="">Selecciona un usuario</option>
        <option v-for="(usuario, index) in usuariosGuardados" :key="index" :value="usuario">
          {{ usuario.nombre }} {{ usuario.apellido }}
        </option>
      </select>
      <button type="submit">Iniciar sesión</button>
    </form>

    <!-- Resumen del usuario -->
    <div v-if="usuario">
      <h2>Bienvenido, {{ usuario.nombre }} {{ usuario.apellido }}</h2>
      <button @click="logoutUsuario">Cerrar sesión</button>

      <!-- Mostrar actividad del usuario -->
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
      usuario: null, // Usuario actual en sesión
      usuariosGuardados: [], // Lista de usuarios registrados
      usuarioSeleccionado: '', // Usuario seleccionado para login
      actividad: [], // Actividad del usuario actual
    };
  },
  created() {
    // Cargar usuarios desde localStorage
    const storedUsers = localStorage.getItem('usuarios');
    if (storedUsers) {
      this.usuariosGuardados = JSON.parse(storedUsers);
    }

    // Cargar usuario en sesión
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      this.usuario = JSON.parse(storedUser);
      this.cargarActividad();
    }
  },
  methods: {
    registrarUsuario() {
      if (this.nombre.trim() && this.apellido.trim()) {
        const nuevoUsuario = {
          nombre: this.nombre,
          apellido: this.apellido,
        };
        this.usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(this.usuariosGuardados));
        alert('Usuario registrado correctamente. Inicia sesión con tu cuenta.');
      }
    },
    loginUsuario() {
      if (this.usuarioSeleccionado) {
        this.usuario = this.usuarioSeleccionado;
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
        this.cargarActividad();
        alert(`Bienvenido de nuevo, ${this.usuario.nombre} ${this.usuario.apellido}.`);
      }
    },
    logoutUsuario() {
      this.usuario = null;
      localStorage.removeItem('usuario');
      alert('Has cerrado sesión.');
    },
    cargarActividad() {
      const actividad = [];
      // Iterar claves en localStorage para buscar opiniones
      for (const key in localStorage) {
        if (key.startsWith('opiniones_')) {
          const opiniones = JSON.parse(localStorage.getItem(key)) || [];
          opiniones.forEach((opinion) => {
            if (opinion.usuario === `${this.usuario.nombre} ${this.usuario.apellido}`) {
              actividad.push({
                juego: key.replace('opiniones_', ''),
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
input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
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
