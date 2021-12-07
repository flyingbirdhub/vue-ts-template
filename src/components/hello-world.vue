<template>
  <div class="root">
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    return {
      value: 1,
    };
  },
});
</script>

<style scoped lang="scss">
.root {
  color: red;
}
</style>