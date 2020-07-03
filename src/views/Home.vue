<template>
  <div class="home">
    <v-container fluid>
      <info-repositorio :repositorio="repositorio" />
      <v-divider />
      <v-row>
        <v-col
          cols="12"
          md="7"
        >
          <v-card flat>
            <v-card-title>
              Lista de Repositórios <v-chip class="ml-3">{{repositorio.public_repos}}</v-chip>
            </v-card-title>
            <v-col>

              <v-text-field
                v-model="find"
                outlined
                hide-details
                dense
                label="Procurar um repositório"
                append-outer-icon="mdi-magnify"
                @click:append-outer="onFindRepositorio(find)"
              />
            </v-col>
            <lista-repositorios :repos="listaRepos" />
          </v-card>
          <v-card-actions>
            <v-pagination
              v-if="loaded"
              @input="onLoadListaRepositorios($event)"
              v-model="page"
              :length="length"
            ></v-pagination>
          </v-card-actions>
        </v-col>
        <v-col
          cols="12"
          md="4"
          style="padding-top: 78px"
        >
          <div class="d-flex flex-column">
            <v-col>
              <card-component title="Top languages" />
            </v-col>
            <v-col>
              <card-component title="Most used topics" />
            </v-col>
            <v-col>
              <card-component title="People" />
            </v-col>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import RepositorioService from '@/service/repositorio/RepositorioService';
import ListaRepositorios from '@/components/ListaRepositorios.vue';
import InfoRepositorio from '@/components/InfoRepositorio.vue';
import CardComponent from '@/components/CardComponent.vue';

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
    CardComponent,
  },
  data() {
    return {
      loaded: false,
      page: null,
      find: null,
      RepositorioService: new RepositorioService(),
      repositorio: {},
      listaRepos: [],
    };
  },
  methods: {
    async onLoadInfoRepositorio() {
      this.loaded = false;
      const data = await this.RepositorioService.show(this.users);
      this.repositorio = { ...data };
      this.loaded = true;
    },
    async onLoadListaRepositorios(page) {
      this.page = page || 1;
      const data = await this.RepositorioService.list(this.users, this.page);
      this.listaRepos = [...data];
    },
    onFindRepositorio(find) {
      console.log(find);
    },
  },
  computed: {
    length() {
      return Math.ceil(this.repositorio.public_repos / 30);
    },
  },
  created() {
    this.onLoadInfoRepositorio();
    this.onLoadListaRepositorios();
  },
};
</script>
<style scoped>
.container--fluid {
  max-width: 85% !important;
}
</style>
