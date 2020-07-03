<template>
  <div>
    <v-col
      v-for="(item, key) in repos"
      :key="key"
      cols="12"
      md="5"
      sm="12"
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
        <v-item-group multiple>
          <v-item>
            Language: {{item.language}}
          </v-item>
          <v-item v-if="item.license && item.license.spdx_id !== 'NOASSERTION'">
            License: {{item.license.spdx_id}}
          </v-item>
          <v-item>
            <v-icon>info</v-icon> {{item.stargazers_count}}
          </v-item>
          <v-item>
            Issues: {{item.open_issues_count}}
          </v-item>
          <v-item>
            Ultima Atualização: {{item.updated_at}}
          </v-item>
        </v-item-group>
      </card-component>
    </v-col>
  </div>
</template>
<script>
import CardComponent from './CardComponent.vue';

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
  },
};
</script>
