<template>
  <div>
    <ul>
      <li v-for="(item, key) in repos" :key="key">
        {{item.name}} <br>
        <strong>{{item.description}}</strong>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListaRepositorios',
  props: {
    repos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
