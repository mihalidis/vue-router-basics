<template>
  <div class="container">
    <h1>There is no page like this!!!</h1>
    <img src="../../src/assets/table-cat.jpg" alt="table cat">
    <router-link tag="button" class="btn btn-warning home-btn" to="/">
    Go to homepage
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Error",
  methods: {
    playAgain() {
      location.reload();
    }
  }
}
</script>

<style scoped>
.container {
  margin: 120px auto 64px;
  max-width: 1163px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
}
.home-btn {
  padding: 12px;
  background-color: #3D2C8D;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>