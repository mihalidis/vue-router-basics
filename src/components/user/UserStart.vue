<template>
  <div class="container">
    <h3>User Start Component</h3>
    <hr>
    <ul class="list-group">
      <router-link tag="li"
                   v-for="item in userList"
                   :key="item.id"
                   class="list-group-item user-list"
                   :to="{ name: 'UserDetailPage', params: { id: item.id } }"
      >
        {{ item.name }}
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        userList: [
          {
            id: 1,
            name: 'User 1'
          },
          {
            id: 2,
            name: 'User 2'
          },
          {
            id: 3,
            name: 'User 3'
          },
          {
            id: 4,
            name: 'User 4'
          },
        ]
      }
    },
    methods: {}
  }
</script>

<style>
.user-list:hover {
  cursor: pointer;
  background-color: #CEE5D0;
}
</style>
