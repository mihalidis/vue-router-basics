<template>
  <div class="container">
  <div class="row">
    <div class="col-12">
      <br>
      <Header />
      <br>
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  components: {
    Header
  }
}
</script>

<style>

</style>
