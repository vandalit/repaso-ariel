<template>
  <div>
    <h1>Bienvenido a Games Opinion</h1>
    <div class="games-list">
      <GameCard
        v-for="(game, index) in games"
        :key="index"
        :game="game"
        @opinar="goToOpiniones(game.name)"
      />
    </div>
  </div>
</template>

<script>
import GameCard from '../components/GameCard.vue';

export default {
  name: 'HomeView', // Corrección del nombre del componente
  components: {
    GameCard,
  },
  data() {
    return {
      games: [
        { name: 'Atomicrops', id: 1 },
        { name: 'Hollow Knight', id: 2 },
        { name: 'Celeste', id: 3 },
      ], // Datos simulados. Luego conectaremos con la API.
    };
  },
  methods: {
    goToOpiniones(gameName) {
      this.$router.push(`/opiniones/${gameName}`);
    },
  },
};
</script>

<style scoped>
.games-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
