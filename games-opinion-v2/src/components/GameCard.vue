<template>
    <div class="card">
      <h3>{{ game.name }}</h3>
      <button @click="$emit('opinar')">Opinar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GameCard',
    props: {
      game: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    width: 200px;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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
  </style>
  