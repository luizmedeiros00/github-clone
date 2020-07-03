<template>
  <div class="home">
    <v-container fluid>
      <info-repositorio :repositorio="repositorio" />
      <lista-repositorios :repos="listaRepos" />
    </v-container>
  </div>
</template>

<script>
import RepositorioService from '@/service/repositorio/RepositorioService';
import ListaRepositorios from '@/components/ListaRepositorios.vue';
import InfoRepositorio from '@/components/InfoRepositorio.vue';

export default {
  name: 'Home',
  props: {
    users: {
      type: String,
      default: 'camunda',
    },
  },
  components: {
    ListaRepositorios,
    InfoRepositorio,
  },
  data() {
    return {
      RepositorioService: new RepositorioService(),
      repositorio: {},
      listaRepos: [],
    };
  },
  methods: {
    async onLoadInfoRepositorio() {
      const data = await this.RepositorioService.show(this.users);
      this.repositorio = { ...data };
    },
    async onLoadListaRepositorios() {
      const data = await this.RepositorioService.list(this.users);
      this.listaRepos = [...data];
    },
  },
  created() {
    console.log(this.$route.params.users);
    this.onLoadInfoRepositorio();
    this.onLoadListaRepositorios();
  },
};
</script>
