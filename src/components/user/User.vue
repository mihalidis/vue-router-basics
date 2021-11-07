<template>
  <div class="container">
    <router-view></router-view>
    <button class="btn btn-success" @click.prevent="goToHome">HomePage</button>
    <hr>
  </div>
</template>
<script>
  export default {
    name: 'User',
    computed: {
      id() {
        return this.$route.params.id;
      }
    },
    methods: {
      goToHome() {
        this.$router.push({ name : 'homePage' });
      }
    }
  }
</script>
