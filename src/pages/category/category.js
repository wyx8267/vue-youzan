import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
// import Foot from 'components/Foot.vue'
import mixin from 'js/mixin'

new Vue({
    el: '#app',
    data: {
        topLists: null,
        topIndex: 0,
        subData: null,
        rankData: null
    },
    created() {
        this.getTopList()
        this.getSubList()
    },
    methods: {
        getTopList() {
            axios.get(url.topList).then(res => {
                this.topLists = res.data.lists
            })
        },
        getSubList(index = 0, id = 0) {
            this.topIndex = index
            if (index === 0) {
                this.getRank()
            } else {
                axios.post(url.subList, { id }).then(res => {
                    this.subData = res.data.data
                })
            }
        },
        getRank() {
            axios.get(url.rank).then(res => {
                this.rankData = res.data.data
            })
        },
        toSearch(list) {
            location.href = `search.html?keyword=${list.name}&id=${list.id}`
        }
    },
    mixins: [mixin]
})