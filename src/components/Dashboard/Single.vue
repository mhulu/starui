<template>
  <div class="overlay vcenter">
    <div class="overlay_mask"></div>
    <div class="overlay_content">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open () {
      var el = document.querySelector('html')
      el.classList.add('overlay_open')
    }
  },
  ready () {
    this.open()
    if (this.show) {
      this.open()
    }
  }
}
</script>