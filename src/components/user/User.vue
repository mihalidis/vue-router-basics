<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <button class="btn btn-success" @click.prevent="goToHome">HomePage</button>
  </div>
</template>
<script>
  export default {
    name: 'User',
    methods: {
      goToHome() {
        this.$router.push({ name : 'homePage' });
      }
    }
  }
</script>
