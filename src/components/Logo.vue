<template>
  <img :src="logoImg">
        <h5>{{{logoName}}}</h5>
</template>
<script>
import {siteInfo} from '../config'
export default {
  data: function () {
    return {
      logoImg: siteInfo.logoImg,
      logoName: siteInfo.logoName
    }
  }
}
</script>