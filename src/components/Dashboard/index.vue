<template>
  <div id="box" class="app-sidebar-fixed app-navbar-fixed ">
    <!-- toaster directive -->
    <Toaster></Toaster>
  <!-- / toaster directive -->
      <sidebar></sidebar>
      <div class="app-content">
        <!-- top navbar -->
        <top-navbar></top-navbar>
        <!-- / top navbar -->
        <!-- main content -->
        <div  class="main-content">
          <div class="wrap-content container">
           <breadcrumb></breadcrumb>
            <router-view transition="fadeInRight" transition-mode="out-in"></router-view>
          </div>
        </div>
        <!-- / main content -->
      </div>
      <!-- <chatbox api="http://demo1429768.mockable.io/messages"></chatbox> -->
  </div>
</template>

<script>
  import sidebar from './Sidebar.vue'
  import topNavbar from './TopNavbar.vue'
  import chatbox from './Chatbox.vue'
  import Breadcrumb from './Breadcrumb.vue'
  import toaster from '../Toaster.vue'
  export default {
    replace: false,
    components: {
      toaster, sidebar, topNavbar, chatbox, Breadcrumb
    }
  }
</script>

