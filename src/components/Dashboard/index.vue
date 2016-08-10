<template>
  <div id="box" class="app-sidebar-fixed app-navbar-fixed ">
    <!-- toaster directive -->
    <!-- <Toaster></Toaster> -->
  <!-- / toaster directive -->
      <!-- <sidebar></sidebar> -->
      <div class="app-content">
        <!-- top navbar -->
        <!-- <top-navbar></top-navbar> -->
        <!-- / top navbar -->
        <!-- main content -->
        <div  class="main-content">
          <div class="wrap-content container">
           <!-- <breadcrumb></breadcrumb> -->
            <router-view></router-view>
          </div>
        </div>
        <!-- / main content -->
      </div>
      <!-- <chatbox api="http://demo1429768.mockable.io/messages"></chatbox> -->
  </div>
</template>

<script>
  // import sidebar from './Sidebar.vue'
  // import topNavbar from './TopNavbar.vue'
  // import chatbox from './Chatbox.vue'
  // import Breadcrumb from './Breadcrumb.vue'
  // import toaster from '../Toaster.vue'
  // import fullscreen from '../Fullscreen'
  export default {
    replace: false,
    components: {
      // sidebar, topNavbar, chatbox, fullscreen, toaster, Breadcrumb
    }
    /**
     * Cookie 'wxToken' not found that means it had been expired
     * so it need refresh token
     */
  }
</script>

