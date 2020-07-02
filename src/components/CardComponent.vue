<template>
  <v-card>
    <v-card-title>{{title}}</v-card-title>
    <v-card-subtitle>{{subtitle}}</v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
