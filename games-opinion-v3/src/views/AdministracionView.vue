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
        <option v-for="(user, index) in usuariosGuardados" :key="index" :value="user">
          {{ user.nombre }} {{ user.apellido }}
        </option>
      </select>
      <button type="submit">Iniciar sesión</button>
    </form>

    <!-- Resumen del usuario -->
    <div v-if="usuario">
      <h2>Bienvenido, {{ usuario.nombre }} {{ usuario.apellido }}</h2>
      <button @click="logoutUsuario">Cerrar sesión</button>

      <!-- Barra de progreso de Coins -->
      <div class="progress-container">
        <h3>Progreso de Coins</h3>
        <div class="progress-bar">
          <div
            class="progress"
            :class="colorBarra"
            :style="{ width: progreso + '%' }"
          ></div>
        </div>
        <p>{{ coins }} / {{ coinsMax }} coins</p>
        <button :disabled="coins >= coinsMax" @click="agregarCoins">
          Agregar Coins
        </button>
        <p v-if="coins >= coinsMax" class="mensaje-maximo">
          Llegaste al máximo de tu crédito.
        </p>
      </div>

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
  name: "AdministracionView",
  data() {
    return {
      nombre: "",
      apellido: "",
      usuario: null, // Usuario actual
      usuariosGuardados: [], // Lista de usuarios registrados
      usuarioSeleccionado: null, // Usuario seleccionado para login
      actividad: [], // Actividad del usuario actual
      coins: 0, // Progreso de coins
      coinsMax: 50, // Máximo permitido de coins
    };
  },
  created() {
    // Cargar usuarios desde localStorage
    const storedUsers = localStorage.getItem("usuarios");
    if (storedUsers) this.usuariosGuardados = JSON.parse(storedUsers);

    // Cargar usuario en sesión
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      this.usuario = JSON.parse(storedUser);
      this.cargarCoins();
      this.cargarActividad();
    }
  },
  computed: {
    progreso() {
      return Math.min((this.coins / this.coinsMax) * 100, 100);
    },
    colorBarra() {
      if (this.coins <= 20) return "verde";
      if (this.coins <= 30) return "amarillo";
      return "rojo";
    },
  },
  methods: {
    registrarUsuario() {
      if (this.nombre.trim() && this.apellido.trim()) {
        const nuevoUsuario = { nombre: this.nombre, apellido: this.apellido };
        this.usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(this.usuariosGuardados));
        alert("Usuario registrado correctamente. Inicia sesión.");
      }
    },
    loginUsuario() {
      if (this.usuarioSeleccionado) {
        this.usuario = this.usuarioSeleccionado;
        localStorage.setItem("usuario", JSON.stringify(this.usuario));
        this.cargarCoins();
        this.cargarActividad();
        alert(`Bienvenido de nuevo, ${this.usuario.nombre} ${this.usuario.apellido}.`);
      }
    },
/*************  ✨ Codeium Command ⭐  *************/
    /**
     * Carga la actividad del usuario en el estado de la app.
     * Itera sobre las claves en localStorage para buscar opiniones
     * y las agrega a una lista de objetos con la siguiente forma:
     * {
     *   juego: string,
     *   text: string,
     * }
     */
/******  a7387909-a919-4600-be99-c21bb40d1d41  *******/    logoutUsuario() {
      this.usuario = null;
      localStorage.removeItem("usuario");
      this.coins = 0;
      this.actividad = [];
      alert("Has cerrado sesión.");
    },
    cargarCoins() {
      // Clave única para cada usuario
      const claveCoins = `coins_${this.usuario.nombre}_${this.usuario.apellido}`;
      const storedCoins = localStorage.getItem(claveCoins);
      this.coins = storedCoins ? parseInt(storedCoins, 10) : 0;
    },
    agregarCoins() {
      if (this.coins < this.coinsMax) {
        this.coins += 10;
        const claveCoins = `coins_${this.usuario.nombre}_${this.usuario.apellido}`;
        localStorage.setItem(claveCoins, this.coins);
      }
    },
    cargarActividad() {
      const actividad = [];
      // Iterar sobre claves de localStorage para buscar opiniones
      for (const key in localStorage) {
        if (key.startsWith("opiniones_")) {
          const opiniones = JSON.parse(localStorage.getItem(key)) || [];
          opiniones.forEach((opinion) => {
            if (opinion.usuario === `${this.usuario.nombre} ${this.usuario.apellido}`) {
              actividad.push({ juego: key.replace("opiniones_", ""), text: opinion.text });
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
.progress-container {
  margin-top: 20px;
  text-align: center;
}
.progress-bar {
  background: #ddd;
  border-radius: 10px;
  width: 100%;
  height: 20px;
  overflow: hidden;
}
.progress {
  height: 100%;
  transition: width 0.5s ease;
}
.verde {
  background-color: #28a745;
}
.amarillo {
  background-color: #ffc107;
}
.rojo {
  background-color: #dc3545;
}
button[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}
.mensaje-maximo {
  color: #dc3545;
  font-weight: bold;
  margin-top: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f9f9f9;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
}
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