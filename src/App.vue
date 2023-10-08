<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
const layout = computed(() => {
            const layout = {
              toString: () => {
                return route?.meta?.layout
              }
            }
            const layoutString = layout.toString()
            if (layout) {
              return `${layoutString}Layout`
            }
            return 'div'
        })
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>