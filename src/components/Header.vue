<template>
<ul class="nav nav-pills">
  <router-link tag="li"
               to="/"
               active-class="active"
               exact>
    <a>Home</a>
  </router-link>
  <router-link tag="li"
               to="/user"
               active-class="active"
               exact>
    <a>User</a>
  </router-link>
</ul>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>