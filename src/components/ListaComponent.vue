<template>
<v-item-group>
          <v-row>
            <v-col
              v-for="(value, key) in values"
              :key="key"
            >
              <v-chip outlined>
                <v-icon
                  left
                  v-if="value.icon"
                >{{value.icon}}</v-icon>
                {{items[value.value]}}
              </v-chip>
            </v-col>

            <slot />

          </v-row>
        </v-item-group>
</template>
<script>
export default {
  name: 'ListaComponent',
  props: {
    values: {
      type: Array,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>
