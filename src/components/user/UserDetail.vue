<template>
  <div class="container">
    <h3>User - {{ id }} Detail Component</h3>
    <router-link tag="button"
                 class="btn btn-primary"
                 :to="{ name: 'UserEditPage',
                        params: { id: id },
                        query: { name: 'pin', lastname: 'miha' },
                        hash: '#data'
                      }"
    >
      Edit User
    </router-link>
    <hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
  </div>
</template>
<script>
  export default {
    name: 'UserDetail',
    computed: {
      id() {
        return this.$route.params.id;
      }
    },
    // Guard Hook functions dummy
    beforeRouteEnter(to, from, next) {
      console.log("component level access");
      next();
    }
  }
</script>
