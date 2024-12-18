<template>
  <div>
    <h1>Bienvenido a Games Opinion</h1>
    <div class="games-list">
      <!-- Itera sobre los juegos obtenidos de la API -->
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
import axios from 'axios';
import GameCard from '../components/GameCard.vue';

export default {
  name: 'HomeView',
  components: {
    GameCard,
  },
  data() {
    return {
      games: [], // Lista de juegos obtenida de la API
    };
  },
  created() {
    this.fetchGames(); // Llama a la API al crear el componente
  },
  methods: {
    // Método para obtener juegos de la API
    async fetchGames() {
      try {
        const apiKey = 'ec10bbd834b449879285372e22b82728'; // Reemplaza con tu clave de API
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${apiKey}`
        );

        // Mapea los resultados para obtener solo la información relevante
        this.games = response.data.results.map((game) => ({
          id: game.id,
          name: game.name,
          image: game.background_image,
          rating: game.rating,
        }));
      } catch (error) {
        console.error('Error al obtener los juegos:', error);
      }
    },
    // Redirige a la ruta de opiniones con el nombre del juego
    goToOpiniones(gameName) {
      this.$router.push(`/opiniones/${gameName}`);
    },
  },
};
</script>

<style scoped>
/* Contenedor de tarjetas de juegos */
.games-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
h1 {
  text-align: center;
  margin: 20px 0;
}
</style>
