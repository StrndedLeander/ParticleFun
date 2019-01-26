<template>
  <div id="app">
    <Playground></Playground>
  </div>
</template>

<script>
import Playground from "./components/Playground.vue";

export default {
  name: "app",
  components: {
    Playground
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
