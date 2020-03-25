<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 音乐控制条 -->
    <!-- <music-bar /> -->
    <!-- 页面加载进度条 -->
    <!-- <vue-progress-bar /> -->
  </div>
</template>

<script>
import { mapState, mapAction } from 'vuex'
export default {

}
</script>

<style lang="stylus">
#app {
  position:relative;  
}
</style>
