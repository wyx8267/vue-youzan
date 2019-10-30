let url = {
    hotLists: '/hotLists',
    banner: '/bannerlists',
    topList: '/category/topLists',
    subList: '/category/subLists',
    rank: '/category/rank',
    searchList: '/search/lists',
    details: '/goods/details',
    deal: '/goods/deal',
    cartAdd: '/cart/add',
    cartLists: '/cart/list',
    cartReduce: '/cart/reduce',
    cartUpdate: '/cart/update',
    cartRemove: '/cart/remove',
    cartMremove: '/cart/mremove',
    addressLists: '/address/list',
    addressAdd: '/address/add',
    addressRemove: '/address/remove',
    addressUpdate: '/address/update',
    addressSetDefault: '/address/setDefault'
}

// let host = 'http://rap2api.taobao.org/app/mock/7058'
const host = 'https://mockapi.eolinker.com/xCpzskt6d079826f9913e75ceb3606e774a72480c695c48'

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url