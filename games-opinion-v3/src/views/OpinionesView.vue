<template>
  <div>
    <h1>Opiniones sobre {{ gameName }}</h1>
    <div v-if="opiniones.length > 0">
      <div v-for="(opinion, index) in opiniones" :key="index" class="opinion-item">
        <p>{{ opinion.text }}</p>
        <button @click="editarOpinion(index)">Editar</button>
        <button @click="eliminarOpinion(index)">Eliminar</button>
      </div>
    </div>
    <div v-else>
      <p>No hay opiniones sobre este juego.</p>
    </div>
    <textarea v-model="nuevaOpinion" placeholder="Escribe tu opinión aquí"></textarea>
    <button @click="agregarOpinion">Agregar</button>
  </div>
</template>

<script>
export default {
  name: 'Opiniones',
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
textarea {
  width: 100%;
  height: 100px;
  margin: 10px 0;
}
button {
  margin: 5px;
}
</style>
