(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{282:function(t,a,e){},426:function(t,a,e){"use strict";var n=e(282);e.n(n).a},427:function(t,a,e){},428:function(t,a){},445:function(t,a,e){"use strict";e(109);var n={props:{baseUrl:String,currentPage:Number,totalPages:Number,maxVisibleButtons:{type:Number,required:!1,default:3}},methods:{nextPage:function(t,a){return"".concat(this.baseUrl,"/").concat(t+1)},previousPage:function(t,a){return 2===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t-1)}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var t=[],a=this.startPage;a<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);a+=1)t.push({name:a,isDisabled:a===this.currentPage,link:1===a?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(a)});return t}}},s=(e(426),e(12)),i=Object(s.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[e("a",{staticClass:"pagination-previous",attrs:{href:t.previousPage(t.currentPage,t.totalPages),disabled:1==t.currentPage}},[t._v("Previous")]),e("ul",{staticClass:"pagination-list"},t._l(t.pages,function(a){return e("li",{key:a.name},[e("a",{staticClass:"pagination-link",class:{"is-current":a.name==t.currentPage},attrs:{href:a.link,"aria-label":a.name,"aria-current":a}},[t._v(t._s(a.name))])])}),0),e("a",{staticClass:"pagination-next",attrs:{href:t.nextPage(t.currentPage,t.totalPages),disabled:t.currentPage==t.totalPages}},[t._v("Next page")])])},[],!1,null,null,null);a.a=i.exports},454:function(t,a,e){"use strict";var n=e(427);e.n(n).a},455:function(t,a,e){"use strict";var n=e(428),s=e.n(n);a.default=s.a},487:function(t,a,e){"use strict";e.r(a);var n={components:{BulmaPagination:e(445).a}},s=(e(454),e(12)),i=e(455),r=Object(s.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{staticClass:"content"},[e("h1",{staticClass:"title is-2"},[t._v("Recent Video Youtube")]),e("div",{staticClass:"articles"},t._l(t.$page.videos.edges,function(a){return e("div",{key:a.node.id,staticClass:"article content"},[e("h2",{staticClass:"title is-4"},[e("g-link",{attrs:{to:a.node.path}},[t._v(t._s(a.node.title))])],1)])}),0)]),t.$page.videos.pageInfo.totalPages>1?e("BulmaPagination",{attrs:{baseUrl:"/video",currentPage:t.$page.videos.pageInfo.currentPage,totalPages:t.$page.videos.pageInfo.totalPages,maxVisibleButtons:5}}):t._e()],1)},[],!1,null,null,null);"function"==typeof i.default&&Object(i.default)(r);a.default=r.exports}}]);