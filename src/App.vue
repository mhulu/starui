<template>
    <div>
      <router-view></router-view>
    </div>
</template>
<script>
  import store from './vuex/store'
  export default {
    store
  }
</script>
<style lang="scss">
  @import "~src/sass/app";
</style>
