(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{280:function(t,s,e){},281:function(t,s,e){"use strict";var a=e(280);e.n(a).a},282:function(t,s,e){"use strict";var a={props:{uid:String,script:String,async:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){var t=document.createElement("script");t.setAttribute("src",this.script),t.setAttribute("data-uid",this.uid),t.setAttribute("async",this.async),document.getElementById("convertkit").appendChild(t)}},n=(e(281),e(12)),r=Object(n.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"convertkit",align:"center"}})},[],!1,null,null,null);s.a=r.exports},304:function(t,s,e){"use strict";(function(t){var a=e(279),n=e.n(a),r=e(454),i=e(282);e(435);s.a={components:{BulmaTag:r.a,ConvertKit:i.a},metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"description",content:this.$page.post.excerpt},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:description",content:this.$page.post.excerpt},{name:"twitter:title",content:this.$page.post.title},{name:"twitter:site",content:"@therealdanvega"},{name:"twitter:image",content:this.getCoverImage},{name:"twitter:creator",content:"@therealdanvega"},{property:"og:type",content:"article"},{property:"og:title",content:this.$page.post.title},{property:"og:description",content:this.$page.post.excerpt},{property:"og:url",content:"".concat(this.getBaseUrl).concat(this.$page.post.path)},{property:"article:published_time",content:n()(this.$page.post.date).format("MM-DD-YYYY")},{property:"og:updated_time",content:this.$page.post.date},{property:"og:image",content:this.getCoverImage},{property:"og:image:secure_url",content:this.getCoverImage}],script:[{src:"https://platform.twitter.com/widgets.js",async:!0}]}},computed:{formatCreatedOn:function(){return n()(this.$page.post.date).format("MMMM DD, YYYY")},getCoverImage:function(){var t="";return null!=this.$page.post.cover&&(t="".concat(this.getBaseUrl).concat(this.$page.post.cover.src)),t},getBaseUrl:function(){return console.log(t.env.GRIDSOME_BASE_URL),t.env.GRIDSOME_BASE_URL}},mounted:function(){var t=this;Promise.resolve().then(e.bind(null,435)).then(function(s){t.zoom=s.default(".article img")})}}}).call(this,e(80))},305:function(t,s,e){},306:function(t,s,e){},307:function(t,s){},450:function(t,s,e){var a={"./af":308,"./af.js":308,"./ar":309,"./ar-dz":310,"./ar-dz.js":310,"./ar-kw":311,"./ar-kw.js":311,"./ar-ly":312,"./ar-ly.js":312,"./ar-ma":313,"./ar-ma.js":313,"./ar-sa":314,"./ar-sa.js":314,"./ar-tn":315,"./ar-tn.js":315,"./ar.js":309,"./az":316,"./az.js":316,"./be":317,"./be.js":317,"./bg":318,"./bg.js":318,"./bm":319,"./bm.js":319,"./bn":320,"./bn.js":320,"./bo":321,"./bo.js":321,"./br":322,"./br.js":322,"./bs":323,"./bs.js":323,"./ca":324,"./ca.js":324,"./cs":325,"./cs.js":325,"./cv":326,"./cv.js":326,"./cy":327,"./cy.js":327,"./da":328,"./da.js":328,"./de":329,"./de-at":330,"./de-at.js":330,"./de-ch":331,"./de-ch.js":331,"./de.js":329,"./dv":332,"./dv.js":332,"./el":333,"./el.js":333,"./en-SG":334,"./en-SG.js":334,"./en-au":335,"./en-au.js":335,"./en-ca":336,"./en-ca.js":336,"./en-gb":337,"./en-gb.js":337,"./en-ie":338,"./en-ie.js":338,"./en-il":339,"./en-il.js":339,"./en-nz":340,"./en-nz.js":340,"./eo":341,"./eo.js":341,"./es":342,"./es-do":343,"./es-do.js":343,"./es-us":344,"./es-us.js":344,"./es.js":342,"./et":345,"./et.js":345,"./eu":346,"./eu.js":346,"./fa":347,"./fa.js":347,"./fi":348,"./fi.js":348,"./fo":349,"./fo.js":349,"./fr":350,"./fr-ca":351,"./fr-ca.js":351,"./fr-ch":352,"./fr-ch.js":352,"./fr.js":350,"./fy":353,"./fy.js":353,"./ga":354,"./ga.js":354,"./gd":355,"./gd.js":355,"./gl":356,"./gl.js":356,"./gom-latn":357,"./gom-latn.js":357,"./gu":358,"./gu.js":358,"./he":359,"./he.js":359,"./hi":360,"./hi.js":360,"./hr":361,"./hr.js":361,"./hu":362,"./hu.js":362,"./hy-am":363,"./hy-am.js":363,"./id":364,"./id.js":364,"./is":365,"./is.js":365,"./it":366,"./it-ch":367,"./it-ch.js":367,"./it.js":366,"./ja":368,"./ja.js":368,"./jv":369,"./jv.js":369,"./ka":370,"./ka.js":370,"./kk":371,"./kk.js":371,"./km":372,"./km.js":372,"./kn":373,"./kn.js":373,"./ko":374,"./ko.js":374,"./ku":375,"./ku.js":375,"./ky":376,"./ky.js":376,"./lb":377,"./lb.js":377,"./lo":378,"./lo.js":378,"./lt":379,"./lt.js":379,"./lv":380,"./lv.js":380,"./me":381,"./me.js":381,"./mi":382,"./mi.js":382,"./mk":383,"./mk.js":383,"./ml":384,"./ml.js":384,"./mn":385,"./mn.js":385,"./mr":386,"./mr.js":386,"./ms":387,"./ms-my":388,"./ms-my.js":388,"./ms.js":387,"./mt":389,"./mt.js":389,"./my":390,"./my.js":390,"./nb":391,"./nb.js":391,"./ne":392,"./ne.js":392,"./nl":393,"./nl-be":394,"./nl-be.js":394,"./nl.js":393,"./nn":395,"./nn.js":395,"./pa-in":396,"./pa-in.js":396,"./pl":397,"./pl.js":397,"./pt":398,"./pt-br":399,"./pt-br.js":399,"./pt.js":398,"./ro":400,"./ro.js":400,"./ru":401,"./ru.js":401,"./sd":402,"./sd.js":402,"./se":403,"./se.js":403,"./si":404,"./si.js":404,"./sk":405,"./sk.js":405,"./sl":406,"./sl.js":406,"./sq":407,"./sq.js":407,"./sr":408,"./sr-cyrl":409,"./sr-cyrl.js":409,"./sr.js":408,"./ss":410,"./ss.js":410,"./sv":411,"./sv.js":411,"./sw":412,"./sw.js":412,"./ta":413,"./ta.js":413,"./te":414,"./te.js":414,"./tet":415,"./tet.js":415,"./tg":416,"./tg.js":416,"./th":417,"./th.js":417,"./tl-ph":418,"./tl-ph.js":418,"./tlh":419,"./tlh.js":419,"./tr":420,"./tr.js":420,"./tzl":421,"./tzl.js":421,"./tzm":422,"./tzm-latn":423,"./tzm-latn.js":423,"./tzm.js":422,"./ug-cn":424,"./ug-cn.js":424,"./uk":425,"./uk.js":425,"./ur":426,"./ur.js":426,"./uz":427,"./uz-latn":428,"./uz-latn.js":428,"./uz.js":427,"./vi":429,"./vi.js":429,"./x-pseudo":430,"./x-pseudo.js":430,"./yo":431,"./yo.js":431,"./zh-cn":432,"./zh-cn.js":432,"./zh-hk":433,"./zh-hk.js":433,"./zh-tw":434,"./zh-tw.js":434};function n(t){var s=r(t);return e(s)}function r(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=450},451:function(t,s,e){"use strict";var a=e(305);e.n(a).a},452:function(t,s,e){"use strict";var a=e(306);e.n(a).a},453:function(t,s,e){"use strict";var a=e(307),n=e.n(a);s.default=n.a},454:function(t,s,e){"use strict";var a={props:{tags:Array}},n=(e(451),e(12)),r=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tags"},t._l(t.tags,function(s){return e("a",{key:s.id,attrs:{href:"/tag/"+s.title}},[e("span",{staticClass:"tag is-primary is-large"},[e("i",{staticClass:"fas fa-tags"}),t._v("\n       "+t._s(s.title)+"\n    ")])])}),0)},[],!1,null,null,null);s.a=r.exports},465:function(t){t.exports=JSON.parse('{"/blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page":[1,"0d9d45c6"],"/blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql":[1,"0098f323"]}')},472:function(t,s,e){"use strict";e.r(s);var a=e(304).a,n=(e(452),e(12)),r=e(453),i=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Layout",[e("div",{staticClass:"article content"},[e("h1",{staticClass:"title is-2 article-title"},[t._v(t._s(t.$page.post.title))]),e("small",{staticClass:"about"},[t._v(t._s(t.formatCreatedOn)+" • ☕️ "+t._s(t.$page.post.timeToRead)+" min read")]),t.$page.post.video?e("div",{staticClass:"embed-container"},[t.$page.post.video?e("iframe",{attrs:{width:"1000",height:"563",src:t.$page.post.video,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),!t.$page.post.video&&t.$page.post.cover?e("g-image",{staticClass:"cover",attrs:{src:t.$page.post.cover}}):t._e(),e("article",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"article",domProps:{innerHTML:t._s(t.$page.post.content)}}),e("bulma-tag",{attrs:{tags:t.$page.post.tags}}),e("convert-kit",{attrs:{uid:"44cc02ed05",script:"https://f.convertkit.com/44cc02ed05/38739557e4.js"}})],1)])},[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(i);s.default=i.exports}}]);