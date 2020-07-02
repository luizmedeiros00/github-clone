<template>
  <div class="home">
    <v-container fluid>
      <lista-repositorios :repos="repos" />
    </v-container>
  </div>
</template>

<script>
import RepositorioService from '@/service/repositorio/RepositorioService';
import ListaRepositorios from '@/components/ListaRepositorios.vue';

export default {
  name: 'Home',
  components: {
    ListaRepositorios,
  },
  data() {
    return {
      RepositorioService: new RepositorioService(),
      repos: [],
    };
  },
  methods: {
    async onLoadRepositorio() {
      const data = await this.RepositorioService.show('camunda');
      this.repos = [...data];
    },
  },
  created() {
    this.onLoadRepositorio();
  },
};
</script>
