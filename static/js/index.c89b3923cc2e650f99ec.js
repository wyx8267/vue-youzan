webpackJsonp([2],{"035s":function(t,e){},"97Sy":function(t,e){},BpKH:function(t,e){},TFhR:function(t,e,a){"use strict";var s={hotLists:"/hotLists",banner:"/bannerlists",topList:"/category/topLists",subList:"/category/subLists",rank:"/category/rank",searchList:"/search/lists",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartUpdate:"/cart/update",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var n in s)s.hasOwnProperty(n)&&(s[n]="https://mockapi.eolinker.com/xCpzskt6d079826f9913e75ceb3606e774a72480c695c48"+s[n]);e.a=s},U67u:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("97Sy"),n=(a.n(s),a("bCKv")),i=a.n(n),r=a("035s"),o=(a.n(r),a("eChN")),c=(a.n(o),a("7+uW")),d=a("mtWM"),l=a.n(d),u=a("TFhR"),p=a("nq5D"),h=a("gN+L");c.default.use(i.a);new c.default({el:"#app",data:{lists:null,bannerLists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1},components:{Foot:p.a,Swipe:h.a},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,l.a.post(u.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;a.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(a):t.lists=a,t.pageNum++,t.loading=!1}))},getBanner:function(){var t=this;l.a.get(u.a.banner).then(function(e){t.bannerLists=e.data.lists})}}})},eChN:function(t,e){},"gN+L":function(t,e,a){"use strict";var s=a("j7an"),n=(a("BpKH"),{name:"swipe",props:{lists:{type:Array,required:!0}},mounted:function(){this.init()},methods:{init:function(){new s.a(".swiper-container",{pagination:{el:".swiper-pagination"},loop:!0,autoplay:!0})}}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{key:t.img,staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(t){a("sBkH")},"data-v-7bd34a88",null);e.a=r.exports},nq5D:function(t,e,a){"use strict";var s=a("mw3O"),n=a.n(s).a.parse(location.search.substr(1)).index,i=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],r={data:function(){return{navConfig:i,curIndex:parseInt(n)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,s){return a("li",{key:e.name,class:{active:s===t.curIndex},on:{click:function(a){return t.changeNav(e,s)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]};var c=a("VU/8")(r,o,!1,function(t){a("y3H4")},"data-v-dd934628",null);e.a=c.exports},sBkH:function(t,e){},y3H4:function(t,e){}},["U67u"]);