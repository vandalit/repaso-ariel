<template>
  <div>
    <h1>Opiniones sobre {{ gameName }}</h1>
    <div v-if="opiniones.length > 0">
      <div v-for="(opinion, index) in opiniones" :key="index" class="opinion-item">
        <p>{{ opinion.text }}</p>
        <button @click="editarOpinion(index)" class="btn btn-edit">Editar</button>
        <button @click="eliminarOpinion(index)" class="btn btn-delete">Eliminar</button>
      </div>
    </div>
    <div v-else>
      <p>No hay opiniones sobre este juego.</p>
    </div>
    <textarea v-model="nuevaOpinion" placeholder="Escribe tu opinión aquí"></textarea>
    <button @click="agregarOpinion" class="btn btn-add">Agregar</button>
  </div>
</template>

<script>
export default {
  name: 'OpinionesView',
  props: ['gameName'],
  data() {
    return {
      opiniones: [],
      nuevaOpinion: '',
    };
  },
  methods: {
    agregarOpinion() {
      if (this.nuevaOpinion.trim()) {
        this.opiniones.push({ text: this.nuevaOpinion });
        this.nuevaOpinion = '';
      }
    },
    editarOpinion(index) {
      this.nuevaOpinion = this.opiniones[index].text;
      this.opiniones.splice(index, 1);
    },
    eliminarOpinion(index) {
      this.opiniones.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.opinion-item {
  margin-bottom: 15px;
}
textarea {
  width: 100%;
  height: 100px;
  margin: 10px 0;
}
.btn {
  margin: 5px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-add {
  background-color: #28a745;
  color: white;
}
.btn-edit {
  background-color: #ffc107;
  color: black;
}
.btn-delete {
  background-color: #dc3545;
  color: white;
}
</style>
