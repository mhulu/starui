<template>
    <div class="nav-user-wrapper" >
        <div class="media">
          <div class="media-left">
            <a class="profile-card-photo" href=""><img :src="userInfo.avatar"></a>
          </div>
          <div class="media-body">
            <span class="media-heading text-white">{{userInfo.name}}</span>
            <div class="text-small text-white-transparent">
              {{userInfo.role}}
            </div>
          </div>
          <div class="media-right media-middle">
            <dropdown>
              <a href class="dropdown-toggle btn btn-transparent text-white " type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fa fa-caret-down"></i> </a>
              <ul class="dropdown-menu pull-right fadeInUp">
                <li>
                  <a>个人资料</a>
                </li>
                <li>
                  <a> 消息中心 (2) </a>
                </li>
<!--                 <li>
                  <a> 锁定屏幕 </a>
                </li> -->
                <li class="divider"></li>
                <li>
                  <a href="#" @click.prevent="logout"> 退出账号 </a>
                </li>
              </ul>
            </dropdown>
          </div>
        </div>
      </div>
</template>
<script>
    import { logout } from '../../vuex/actions'
    import Dropdown from '../Dropdown'
    export default {
      data () {
        return {
          userInfo: JSON.parse(window.localStorage.getItem('userInfo'))
        }
      },
      vuex: {
        actions: {
          logout
        }
      },
      components: {
        Dropdown
      }
    }
</script>