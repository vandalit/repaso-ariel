<template>
    <div>
      <div class="progress-bar" :style="{ width: progress + '%', backgroundColor: color }"></div>
      <button @click="incrementarProgreso">Agregar coins</button>
      <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressBar',
    data() {
      return {
        progress: 0,
        mensaje: '',
      };
    },
    computed: {
      color() {
        if (this.progress <= 20) return 'green';
        if (this.progress <= 30) return 'yellow';
        return 'red';
      },
    },
    methods: {
      incrementarProgreso() {
        if (this.progress < 50) {
          this.progress += 5;
          this.mensaje = '';
        } else {
          this.mensaje = 'Llegaste al máximo de tu crédito';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-bar {
    height: 20px;
    width: 0;
    border-radius: 5px;
    transition: width 0.5s;
  }
  button {
    margin: 10px 0;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .mensaje {
    color: red;
    font-weight: bold;
  }
  </style>
  