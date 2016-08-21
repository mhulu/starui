<template>
  <div class="container-fluid container-fullw ng-scope">
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-white">
        <div class="panel-body">
          <h5 class="over-title margin-bottom-15">个人资料</h5>
          <div class="row">
            <div class="col-sm-12">
              <tabs>
                <tab header="基本资料">
                  <div class="col-sm-3">
                  <div class="center">
                    <div class="user-image">
                      <div class="thumbnail">
                        <img :src="userInfo.avatar">
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="col-sm-9">
                    <table class="table table-condensed">
                                        <thead>
                                            <tr>
                                                <th colspan="4">信息卡片</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>姓名:</td>
                                                <td>{{userInfo.name}}</td>
                                                <td>性别:</td>
                                                <td>{{userInfo.name}}</td>
                                            </tr>
                                            <tr>
                                                <td>email:</td>
                                                <td>{{userInfo.name}}</td>
                                                <td>{{userInfo.name}}</td>
                                                <td>{{userInfo.name}}</td>
                                            </tr>
                                            <tr>
                                                <td>phone:</td>
                                                <td class="ng-binding">(641)-734-4763</td>
                                                <td>{{userInfo.name}}</td>
                                                <td>{{userInfo.name}}</td>
                                            </tr>
                                            <tr>
                                                <td>skye</td>
                                                <td>{{userInfo.name}}</td>
                                                <td>{{userInfo.name}}</td>
                                                <td>{{userInfo.name}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                  </div>
                </tab>
                <tab header="修改资料">
                  asdfasdfdasf
                </tab>
              </tabs>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  var VueStrap = require('vue-strap/dist/vue-strap.min.js')
  var tabs = VueStrap.tabset
  var tab = VueStrap.tab
  export default {
    data () {
      return {
        userInfo: JSON.parse(window.localStorage.getItem('userInfo'))
      }
    },
    components: {
      tabs, tab
    }
  }
</script>
<style>
  .user-image img {
    max-width: 150px;
}
.user-image {
    position: relative;
    display: inline-block;
}
</style>