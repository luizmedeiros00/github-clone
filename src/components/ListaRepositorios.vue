<template>
  <div>
      <v-col
        v-for="(item, key) in repos"
        :key="key"
        cols="12"
        md="3"
        sm="12"
      >
        <card-component
          :title="item.name"
          :subtitle="item.description"
        />
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
