<template>
  <div class="container-fluid container-fullw ng-scope">
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-white">
        <div class="panel-body">
          <h5 class="over-title margin-bottom-15">个人资料</h5>
          <div class="row">
            <div class="col-sm-12">
              <tabs :active="activeIndex">
                <tab header="基本资料">
                  <div class="col-md-4">
                                <div class="user-left">
                                    <div class="center">
                                            <div class="user-image">
                                                <div class="thumbnail"><img :src="userInfo.avatar">
                                                </div>
                                            </div>
                                            <h4 class="text-dark">{{userInfo.name}} 
                                            <span v-if="userInfo.sex=='男'" class="badge badge-info"><i class="fa fa-mars"></i></span>
                                            <span v-else class="badge badge-danger"><i class="fa fa-venus"></i></span>
                                            </h4>
                                        <hr>
                                    </div>
                                    <table class="table table-condensed">
                                        <thead>
                                            <tr>
                                                <th colspan="3">联系方式</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>移动电话:</td>
                                                <td><a href="tel:{{userInfo.mobile}}">{{userInfo.mobile}}</a></td>
                                            </tr>
                                            <tr>
                                                <td>电子邮件:</td>
                                                <td>
                                                    <a href="mailto:{{userInfo.email}}">
                                                        {{userInfo.email}}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                              <td>QQ:</td>
                                              <td>{{userInfo.qq}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-condensed">
                                        <thead>
                                            <tr>
                                                <th colspan="3">个人信息</th>
                                            </tr>
                                        </thead>
                                        <tbody>
<!--                                             <tr>
                                              <td>出生地:</td>
                                              <td>{{userInfo.birthplace}}</td>
                                            </tr> -->
                                            <tr>
                                              <td>出生日期</td>
                                              <td>{{userInfo.birthday}}</td>
                                            </tr>
                                            <tr>
                                                <td>所在部门</td>
                                                <td>{{userInfo.unit}}</td>
                                            </tr>
                                            <tr>
                                                <td>站内角色</td>
                                                <td><span class="label label-sm label-info">{{userInfo.role}}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-condensed">
                                        <thead>
                                            <tr>
                                                <th colspan="3">其它信息</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>IM组</td>
                                                <td>暂未设置</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="center">
                                        <a class="btn btn-primary" href="#" @click.stop.prevent=activEditTab>
                                            更改个人资料
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                            <div class="row space20">
                                    <div class="col-sm-4">
                                        <button class="btn btn-icon margin-bottom-5 btn-block">
                                            <i class="fa fa-envelope-o block text-primary text-extra-large margin-bottom-10"></i>
                                            会话列表 <span class="badge badge-danger"> 23 </span>
                                        </button>
                                    </div>
                                    <div class="col-sm-4">
                                        <button class="btn btn-icon margin-bottom-5 btn-block">
                                            <i class="fa fa-calendar block text-primary text-extra-large margin-bottom-10"></i>
                                            日程安排
                                        </button>
                                    </div>
                                    <div class="col-sm-4">
                                        <button class="btn btn-icon margin-bottom-5 btn-block">
                                            <i class="fa fa-bell-o block text-primary text-extra-large margin-bottom-10"></i>
                                            通知提示
                                        </button>
                                    </div>
                                </div>
                              <div class="panel panel-white">
                                <div class="panel-heading border-light">
                                  <h4 class="panel-title text-primary">近期活动事件</h4>
                                </div>
                                <div class="panel-wrapper in collapse">
                                  <div class="panel-body">
                                    <ul class="timeline-xs" v-for="event in userInfo.events">
                                                <li class="timeline-item" :class="event.type">
                                                    <div class="margin-left-15">
                                                        <div class="text-muted text-small">
                                                          {{event.created_at | moment}}
                                                        </div>
                                                        <p>{{event.content}}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                </tab>
                <tab header="修改资料">
                <validator name="profile">
                  <form novalidate @submit.prevent="onSubmit">
                            <fieldset>
                                <legend>
                                    填写或更改信息资料
                                </legend>
                                <div class="row">
                                    <div class="col-md-6">
                                            <div class="row">
                                              <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                            <label class="control-label">
                                                <i class="fa fa-user"></i> 姓名
                                            </label>
                                            <input type="text" placeholder="输入您的姓名" class="form-control input-lg" :value="userInfo.name" 
                                            v-validate:name="{ required: true, minlength: 2, maxlength: 15, name:true }">
                                            <p class="text-danger" v-if="$profile.name.minlength">姓名长度不能少于2个字符</p>
                                            <p class="text-danger" v-if="$profile.name.maxlength">姓名长度不能多于15个字符</p>
                                        </div>
                                              </div>
                                              <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                <label class="control-label"><i class="fa fa-birthday-cake"></i> 出生日期</label>
                                                  <datepicker :time.sync="time" :option="timeoption">
                                                  </datepicker>
                                                </div>
                                              </div>
                                            </div>
                                        <div class="row">
                                          <div class="col-md-6">
                                            <div class="form-group">
                                            <label class="control-label"><i class="fa fa-mobile-phone"></i> 手机号码</label>
                                            <input type="text" placeholder="输入您的手机号码" class="form-control input-lg" name="mobile" :value="userInfo.mobile"
                                            v-validate:mobile="{ required: true, mobile:true }">
                                            <p class="text-danger" v-if="$profile.mobile.mobile">手机号码格式不正确</p>
                                        </div>
                                          </div>
                                          <div class="col-md-6">
                                            <div class="form-group">
                                            <label class="control-label"><i class="fa fa-qq"></i> QQ号码</label>
                                            <input type="text" class="form-control input-lg" :value="userInfo.qq" v-validate:qq="{ qq:true }">      
                                            <p class="text-danger" v-if="$profile.qq.qq">QQ号码格式不正确</p>                                      
                                        </div>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                          <label class="control-label"><i class="fa fa-envelope-o"></i> 电子邮箱</label>
                                            <input type="email" placeholder="输入您的邮箱地址" class="form-control input-lg" name="email" :value="userInfo.email" v-validate:email="{ email:true }">
                                            <p class="text-danger" v-if="$profile.email.email">电子邮件格式不正确</p> 
                                        </div>
<!--                                         <div class="form-group">
                                            <label class="control-label">
                                                <i class="fa fa-map-marker"></i> 籍贯
                                            </label>
                                            <input type="text" placeholder="输入您的籍贯" class="form-control input-lg" name="birthplace" :value="userInfo.birthplace">
                                        </div> -->
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="block">
                                                <i class="fa fa-venus-mars"></i> 您的性别
                                            </label>
                                            <div class="clip-radio radio-primary">
                                                <input type="radio" id="male" name="sex" value="男" v-model="userInfo.sex" v-validate:sex="{required:true}">
                                                <label for="male">
                                                    男
                                                </label>
                                                <input type="radio" id="female" name="sex" value="女" v-model="userInfo.sex">
                                                <label for="female">
                                                    女
                                                </label>
                                                <p class="text-danger" v-if="$profile.sex.required">您需要选择您的性别</p> 
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
                            <div class="center"><button type="submit" class="btn btn-lg btn-blue" :disabled="$profile.invalid"><i class="fa fa-edit"></i> 确认无误，提交修改</button></div>
                        </form>
                        </validator>
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
  import datepicker from '../Datepicker.vue'
  import moment from 'moment'
  export default {
    data () {
      return {
        activeIndex: 0,
        userInfo: JSON.parse(window.localStorage.getItem('userInfo')),
        time: '',
        timeoption: {
          type: 'day',
          week: ['一', '二', '三', '四', '五', '六', '日'],
          month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          format: 'YYYY-MM-DD',
          buttons: {
            ok: '确定',
            cancel: '取消'
          }
        }
      }
    },
    filters: {
      moment: function (time) {
        return moment(time).locale('zh-cn').fromNow()
      }
    },
    methods: {
      onSubmit () {
        window.console.log(this.userInfo.name)
      },
      activEditTab () {
        this.activeIndex = 1
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
    created () {
      this.time = this.userInfo.birthday
    },
    components: {
      tabs, tab, datepicker
    }
  }
</script>
<style lang="scss">
@import "~src/sass/wemesh/timeline";
  thead th {
    font-size: 16px;
  }
  .user-image img {
    max-width: 150px;
}
.input-lg {
  text-align: center;
}
.thumbnail {
  margin-bottom: 0;
}
.user-image {
    position: relative;
    display: inline-block;
}
</style>