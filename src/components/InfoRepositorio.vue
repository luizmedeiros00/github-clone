<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="2"
        sm="12"
      >
      <v-img :src="repositorio.avatar_url" width="200" />
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="12"
      >
        <h2>{{repositorio.name}}</h2>
        {{repositorio.location}} {{repositorio.blog}} {{repositorio.email}}
      </v-col>

    </v-row>
  </div>
</template>
<script>
export default {
  name: 'InfoRepositorio',
  props: {
    repositorio: {
      type: Object,
      default: () => ({}),
    },
  }
  ,
};
</script>
