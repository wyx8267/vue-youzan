webpackJsonp([1],{AeEs:function(t,e){},AnIW:function(t,e){},BpKH:function(t,e){},"Do/K":function(t,e){},HFfA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("JWK+"),a=(n.n(s),n("pI1A")),i=(n.n(a),n("AeEs")),o=(n.n(i),n("AnIW")),r=(n.n(o),n("d7BR")),c=(n.n(r),n("Do/K")),d=(n.n(c),n("LjF4")),u=(n.n(d),n("7+uW")),l=n("mtWM"),h=n.n(l),f=n("TFhR"),m=n("U/rD"),p=n("mw3O"),v=n.n(p),g=n("gN+L"),w=v.a.parse(location.search.substr(1)).id;new u.default({el:"#app",data:{id:w,details:null,detailTab:["商品详情","本店成交"],tabIndex:0,dealLists:null,bannerLists:null,skuType:1,showSku:!1,skuNum:1,isAddCart:!1,showAddMessage:!1,hotLists:null},components:{Swipe:g.a},created:function(){this.getDetails(),this.getHotLists()},methods:{getDetails:function(){var t=this;h.a.get(f.a.details,{id:w}).then(function(e){t.details=e.data.data,t.bannerLists=[],t.details.imgs.forEach(function(e){t.bannerLists.push({clickUrl:"",img:e})})})},getHotLists:function(){var t=this;h.a.get(f.a.hotLists,{pageNum:1,pageSize:6}).then(function(e){t.hotLists=e.data.lists})},changeTab:function(t){this.tabIndex=t,t&&this.getDeal()},getDeal:function(){var t=this;h.a.get(f.a.deal,{id:w}).then(function(e){t.dealLists=e.data.data.lists})},chooseSku:function(t){this.skuType=t,this.showSku=!0},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;h.a.post(f.a.addCart,{id:w,number:this.skuNum}).then(function(e){200===e.data.status&&(t.showSku=!1,t.isAddCart=!0,t.showAddMessage=!0,setTimeout(function(){t.showAddMessage=!1},1e3))})}},watch:{showSku:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.height.overflow=t?"100%":"auto",document.querySelector("html").height.overflow=t?"100%":"auto"}},mixins:[m.a]})},"JWK+":function(t,e){},LjF4:function(t,e){},TFhR:function(t,e,n){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var a in s)s.hasOwnProperty(a)&&(s[a]="http://rap2api.taobao.org/app/mock/7058"+s[a]);e.a=s},"U/rD":function(t,e,n){"use strict";var s={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>-1){var n=e.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return e+".00"}},components:{Foot:n("nq5D").a}};e.a=s},ZjCQ:function(t,e){},d7BR:function(t,e){},"gN+L":function(t,e,n){"use strict";var s=n("j7an"),a=(n("BpKH"),{name:"swipe",props:{lists:{type:Array,required:!0}},mounted:function(){this.init()},methods:{init:function(){new s.a(".swiper-container",{pagination:{el:".swiper-pagination"},loop:!0,autoplay:!0})}}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{key:t.img,staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(t){n("q6Un")},"data-v-7bd34a88",null);e.a=o.exports},nq5D:function(t,e,n){"use strict";var s=n("mw3O"),a=n.n(s).a.parse(location.search.substr(1)).index,i=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],o={data:function(){return{navConfig:i,curIndex:parseInt(a)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,s){return n("li",{key:e.name,class:{active:s===t.curIndex},on:{click:function(n){return t.changeNav(e,s)}}},[n("a",[n("i",{class:e.icon}),t._v(" "),n("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]};var c=n("VU/8")(o,r,!1,function(t){n("ZjCQ")},"data-v-dd934628",null);e.a=c.exports},pI1A:function(t,e){},q6Un:function(t,e){}},["HFfA"]);
//# sourceMappingURL=goods.105cb2c406fa2bf6171e.js.map