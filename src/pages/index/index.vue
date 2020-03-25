<template>
  <div id='index' v-infinite-scroll="getListDataMore" infinite-scroll-disabled="lock" infinite-scroll-immediate-check="false" infinite-scroll-distance="0">
        <!-- banner -->
        <music-banner :json='bannerJson'></music-banner>
        <!-- 推荐 -->
        <div class="recommend">
            <div class="recommen-title">echo每日推荐</div>
            <!-- 一键播放 -->
            <div class="playAll" @click="playAll">
                <div class="my-icon-arrow playAll-icon"></div>
                <div class="playAll-label" type="default">一键播放</div>
            </div>
            <!-- 列表 -->
            <music-list :json='listJson' />
        </div>
        <!-- 底部加载提示 -->
        <bottom-loading :loading="loading" />
        
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getBanner, getList } from '@/api'
import MusicBanner from '@/components/MusicBanner'
import MusicList from '@/components/MusicList'
import BottomLoading from '@/components/BottomLoading'
export default {
    name: 'index',
    components: { MusicBanner, MusicList, BottomLoading},
    data() {
        return {
            bannerJson: [],
            listJson: [],
            page: 1,
            loading: false,
            lock: false
        }
    }
};
</script>

<style>
</style>
