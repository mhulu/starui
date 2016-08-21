<template>
  <div class="breadcrumb-wrapper" v-if="currentRoute">
    <h4 class="mainTitle no-margin"><i class="fa"v-bind:class="currentRoute.icon"></i> {{currentRoute.name}}</h4>
    <small>{{currentRoute.description}}</small>
  </div>
</template>

<script>
    import * as utils from 'underscore'
    export default {
      vuex: {
        getters: {
          menuList: state => state.menuList.menuList,
          currentPath: state => state.route.path
        }
      },
      computed: {
        currentRoute () {
          var result = this.currentPath
          if (result === '/') {
            return {'icon': 'fa-dashboard', 'name': '控制面板', 'description': '管理控制中心'}
          } else {
            var collect = utils.where(this.menuList, {url: result.split('/')[1]})
            return utils.first(utils.toArray(collect))
          }
        }
      }
    }
</script>