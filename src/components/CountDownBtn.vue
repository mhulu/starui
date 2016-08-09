<template>
  <button class="btn btn-azure" id="getAuthcode" @click.prevent="getAuthcode($event)"><slot>获取短信验证码</slot></button>
</template>
<script>
  import * as utils from '../utils'
  export default {
    props: {
      duration: {
        default: 60
      }
    },
    methods: {
      getAuthcode (e) {
        utils.countdown(e.target, this.duration)
      }
    }
  }
</script>