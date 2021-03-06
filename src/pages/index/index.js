import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import { InfiniteScroll } from 'mint-ui';
import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'

Vue.use(InfiniteScroll);

let app = new Vue({
    el: '#app',
    data: {
        lists: null,
        bannerLists: null,
        pageNum: 1,
        pageSize: 6,
        loading: false,
        allLoaded: false
    },
    components: {
        Foot,
        Swipe
    },
    created() {
        this.getLists()
        this.getBanner()
    },
    methods: {
        getLists() {
            if (this.allLoaded) return
            this.loading = true
            axios.post(url.hotLists, {
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }).then(res => {
                let curLists = res.data.lists
                // 判断所有数据是否加载完毕
                if (curLists.length < this.pageSize) {
                    this.allLoaded = true
                }
                if (this.lists) {
                    this.lists = this.lists.concat(curLists)
                } else {
                    // 第一次请求
                    this.lists = curLists
                }
                this.pageNum++
                this.loading = false
            })
        },
        getBanner() {
            axios.get(url.banner).then(res => {
                this.bannerLists = res.data.lists
            })
        }
    }
})