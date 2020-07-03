<template>
  <div>
    <v-col
      v-for="(item, key) in repos"
      :key="key"
    >
      <card-component
        :title="item.name"
        :subtitle="item.description"
      >
        <v-chip-group column>
          <v-chip
            v-for="topic in item.topics"
            :key="topic"
            small
          >{{topic}}</v-chip>
        </v-chip-group>

        <lista-component
          :values="values"
          :items="item"
        >
          <v-col>
            Última atualização {{item.updated_at | dateFilter}}
          </v-col>
        </lista-component>

      </card-component>
    </v-col>
  </div>
</template>
<script>
import CardComponent from './CardComponent.vue';
import ListaComponent from './ListaComponent.vue';

export default {
  name: 'ListaRepositorios',
  props: {
    repos: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CardComponent,
    ListaComponent,
  },
  data() {
    return {
      values: [
        { value: 'language' },
        { value: 'stargazers_count', icon: 'mdi-star' },
        { value: 'open_issues_count', icon: 'mdi-information-outline' },
      ],
    };
  },

};
</script>
