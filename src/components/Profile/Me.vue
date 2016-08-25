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
                      <h4 class="text-dark">{{userInfo.name}}</h4>
                  </div>
                  </div>
                  <div class="col-sm-9">
                    <table class="table table-condensed">
                                        <thead>
                                            <tr>
                                                <th colspan="4"><i class="fa fa-newspaper-o"></i> 个人信息卡片</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th><i class="fa fa-user"></i> 姓名</th>
                                                <td>{{userInfo.name}}</td>
                                                <th><i class="fa" v-bind:class="[userInfo.sex=='男' ? 'fa-mars' : 'fa-venus' ]"></i> 性别</th>
                                                <td>{{userInfo.sex}}</td>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-envelope-o"></i> 电子邮件</th>
                                                <td><a :href ="'mailto:' + userInfo.email">{{userInfo.email}}</a></td>
                                                <th><i class="fa fa-phone"></i> 手机号码</th>
                                                <td><a :href = "'tel:' + userInfo.mobile">{{userInfo.mobile}}</a></td>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-sitemap"></i> 所在部门</th>
                                                <td>{{userInfo.unit}}</td>
                                                <th> <i class="fa fa-street-view"></i> 系统角色</th>
                                                <td>{{userInfo.role}}</td>
                                            </tr>
                                            <tr>
                                                <th><i class="fa fa-map-marker"></i> 出生地点</th>
                                                <td>{{userInfo.birthplace}}</td>
                                                <th><i class="fa fa-birthday-cake"></i> 出生日期</th>
                                                <td>{{userInfo.birthday}}</td>
                                            </tr>
                                            <tr>
                                                <th>上次登录时间</th>
                                                <td>{{userInfo.last_login}}</td>
                                                <th>上次登录IP</th>
                                                <td>{{userInfo.last_ip}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                  </div>
                </tab>
                <tab header="修改资料">
                  <form action="/" method="post" @submit.prevent="onSubmit">
                            <fieldset>
                                <legend>
                                    基本信息
                                </legend>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">
                                                真实姓名
                                            </label>
                                            <input type="text" placeholder="输入您的真实姓名" class="form-control" name="name" v-model="userInfo.name" required>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                手机号码
                                            </label>
                                            <input type="text" placeholder="输入您的手机号码" class="form-control" name="mobile" v-model="userInfo.mobile" required>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                电子邮箱
                                            </label>
                                            <input type="email" placeholder="输入您的邮箱地址" class="form-control" name="email" v-model="userInfo.email">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                籍贯
                                            </label>
                                            <input type="text" placeholder="输入您的籍贯" class="form-control" name="birthplace" v-model="userInfo.birthplace">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="block">
                                                您的性别
                                            </label>
                                            <div class="clip-radio radio-primary">
                                                <input type="radio" id="male" name="sex" value="男" v-model="userInfo.sex">
                                                <label for="male">
                                                    男
                                                </label>
                                                <input type="radio" id="female" name="sex" value="女" v-model="userInfo.sex">
                                                <label for="female">
                                                    女
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>
                                                上传头像
                                            </label>
                                            <div>
                                                <div class="user-image">
                                                    <div class="thumbnail margin-bottom-5">
                                                        <img :src="userInfo.avatar">
                                                    </div>
                                                </div>
                                                <div class="user-image-buttons-edit">
                                                    <span class="btn btn-primary btn-file">
                                              <i class="fa fa-pencil"></i>
                                              <input type="file" v-on:change="uploadChanges">
                                          </span>
                                                    <span class="btn btn-danger" @click="removeImage()"><i class="fa fa-times"></i> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="center"><button type="submit" class="btn btn-lg btn-blue"><i class="fa fa-edit"></i> 确认无误，提交修改</button></div>
                        </form>
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
    methods: {
      onSubmit () {
        window.console.log(this.userInfo)
      },
      removeImage () {
        this.userInfo.avatar = 'http://static.stario.net/images/avatar.png'
      },
      uploadChanges (e) {
        if (e.target.files[0]) {
          this.userInfo.avatar = window.URL.createObjectURL(e.target.files[0])
        }
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
.thumbnail {
  margin-bottom: 0;
}
.user-image {
    position: relative;
    display: inline-block;
}
</style>