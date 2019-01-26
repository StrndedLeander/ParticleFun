<template>
  <div class="playGround hero">
    <div class="container is-widescreen"></div>
  </div>
</template>

<script>
export default {
  name: "PlayGround",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-widescreen {
  margin-left: auto;
  margin-right: auto;
  max-width: 1152px;
  height: 700px;
  border: 1px solid black;
}
</style>
