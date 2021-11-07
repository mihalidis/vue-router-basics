<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
      Name: {{ $route.query.name }}
    </p>
    <p>
      Lastname: {{ $route.query.lastname }}
    </p>
    <br>
    <button class="btn btn-warning" @click="saved = true">Try me!</button>
    <br>
    <hr>
    <p style="height:800px;background-color:#89B5AF">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <p style="height:800px;background-color:#96C7C1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <p style="height:800px;background-color:#DED9C4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <p id="data" style="height:800px;background-color:#DA7F8F">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <p style="height:800px;background-color:#D0CAB2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
  </div>
</template>
<script>
  export default {
    name: 'UserEdit',
    data() {
      return {
        saved: false
      }
    },
    beforeRouteLeave(to, from, next) {
      if(this.saved) {
        next();
      } else {
        if(confirm("Are you sure to exit?")) {
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>
