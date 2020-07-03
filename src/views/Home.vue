<template>
  <div class="home">
    <v-container fluid>
      <info-repositorio :repositorio="repositorio" />
      <v-divider />

      <v-col
        cols="12"
        md="6"
      >
        <v-card flat>
          <v-card-title>
            Lista de Repositórios <v-chip class="ml-3">{{repositorio.public_repos}}</v-chip>
          </v-card-title>
          <lista-repositorios :repos="listaRepos" />
        </v-card>
        <v-card-actions class="text-center">
          <v-pagination
            @input="onLoadListaRepositorios($event)"
            v-model="page"
            :length="6"
          ></v-pagination>
        </v-card-actions>
      </v-col>
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
      page: null,
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
    async onLoadListaRepositorios(page) {
      this.page = page || 1;
      const data = await this.RepositorioService.list(this.users, this.page);
      this.listaRepos = [...data];
    },
  },
  created() {
    this.onLoadInfoRepositorio();
    this.onLoadListaRepositorios();
  },
};
</script>
