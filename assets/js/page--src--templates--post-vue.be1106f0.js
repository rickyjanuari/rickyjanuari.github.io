(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{283:function(t,s,e){},284:function(t,s,e){"use strict";var a=e(283);e.n(a).a},286:function(t,s,e){},287:function(t,s,e){"use strict";var a={props:{uid:String,script:String,async:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){var t=document.createElement("script");t.setAttribute("src",this.script),t.setAttribute("data-uid",this.uid),t.setAttribute("async",this.async),document.getElementById("convertkit").appendChild(t)}},n=(e(284),e(12)),r=Object(n.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"convertkit",align:"center"}})},[],!1,null,null,null);s.a=r.exports},436:function(t,s,e){"use strict";(function(t){var a=e(282),n=e.n(a),r=e(451),i=e(287);e(415);s.a={components:{BulmaTag:r.a,ConvertKit:i.a},metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"description",content:this.$page.post.excerpt},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:description",content:this.$page.post.excerpt},{name:"twitter:title",content:this.$page.post.title},{name:"twitter:site",content:"@rickyjanuari"},{name:"twitter:image",content:this.getCoverImage},{name:"twitter:creator",content:"@rickyjanuari"},{property:"og:type",content:"article"},{property:"og:title",content:this.$page.post.title},{property:"og:description",content:this.$page.post.excerpt},{property:"og:url",content:"".concat(this.getBaseUrl).concat(this.$page.post.path)},{property:"article:published_time",content:n()(this.$page.post.date).format("MM-DD-YYYY")},{property:"og:updated_time",content:this.$page.post.date},{property:"og:image",content:this.getCoverImage},{property:"og:image:secure_url",content:this.getCoverImage}],script:[{src:"https://platform.twitter.com/widgets.js",async:!0}]}},computed:{formatCreatedOn:function(){return n()(this.$page.post.date).format("MMMM DD, YYYY")},getCoverImage:function(){var t="";return null!=this.$page.post.cover&&(t="".concat(this.getBaseUrl).concat(this.$page.post.cover.src)),t},getBaseUrl:function(){return console.log(t.env.GRIDSOME_BASE_URL),t.env.GRIDSOME_BASE_URL}},mounted:function(){var t=this;Promise.resolve().then(e.bind(null,415)).then(function(s){t.zoom=s.default(".article img")})}}}).call(this,e(81))},437:function(t,s,e){"use strict";var a=e(286);e.n(a).a},438:function(t,s,e){},439:function(t,s){},451:function(t,s,e){"use strict";var a={props:{tags:Array}},n=(e(437),e(12)),r=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tags"},t._l(t.tags,function(s){return e("a",{key:s.id,attrs:{href:"/tag/"+s.title}},[e("span",{staticClass:"tag is-primary is-large"},[e("i",{staticClass:"fas fa-tags"}),t._v("\n       "+t._s(s.title)+"\n    ")])])}),0)},[],!1,null,null,null);s.a=r.exports},452:function(t,s,e){var a={"./af":288,"./af.js":288,"./ar":289,"./ar-dz":290,"./ar-dz.js":290,"./ar-kw":291,"./ar-kw.js":291,"./ar-ly":292,"./ar-ly.js":292,"./ar-ma":293,"./ar-ma.js":293,"./ar-sa":294,"./ar-sa.js":294,"./ar-tn":295,"./ar-tn.js":295,"./ar.js":289,"./az":296,"./az.js":296,"./be":297,"./be.js":297,"./bg":298,"./bg.js":298,"./bm":299,"./bm.js":299,"./bn":300,"./bn.js":300,"./bo":301,"./bo.js":301,"./br":302,"./br.js":302,"./bs":303,"./bs.js":303,"./ca":304,"./ca.js":304,"./cs":305,"./cs.js":305,"./cv":306,"./cv.js":306,"./cy":307,"./cy.js":307,"./da":308,"./da.js":308,"./de":309,"./de-at":310,"./de-at.js":310,"./de-ch":311,"./de-ch.js":311,"./de.js":309,"./dv":312,"./dv.js":312,"./el":313,"./el.js":313,"./en-SG":314,"./en-SG.js":314,"./en-au":315,"./en-au.js":315,"./en-ca":316,"./en-ca.js":316,"./en-gb":317,"./en-gb.js":317,"./en-ie":318,"./en-ie.js":318,"./en-il":319,"./en-il.js":319,"./en-nz":320,"./en-nz.js":320,"./eo":321,"./eo.js":321,"./es":322,"./es-do":323,"./es-do.js":323,"./es-us":324,"./es-us.js":324,"./es.js":322,"./et":325,"./et.js":325,"./eu":326,"./eu.js":326,"./fa":327,"./fa.js":327,"./fi":328,"./fi.js":328,"./fo":329,"./fo.js":329,"./fr":330,"./fr-ca":331,"./fr-ca.js":331,"./fr-ch":332,"./fr-ch.js":332,"./fr.js":330,"./fy":333,"./fy.js":333,"./ga":334,"./ga.js":334,"./gd":335,"./gd.js":335,"./gl":336,"./gl.js":336,"./gom-latn":337,"./gom-latn.js":337,"./gu":338,"./gu.js":338,"./he":339,"./he.js":339,"./hi":340,"./hi.js":340,"./hr":341,"./hr.js":341,"./hu":342,"./hu.js":342,"./hy-am":343,"./hy-am.js":343,"./id":344,"./id.js":344,"./is":345,"./is.js":345,"./it":346,"./it-ch":347,"./it-ch.js":347,"./it.js":346,"./ja":348,"./ja.js":348,"./jv":349,"./jv.js":349,"./ka":350,"./ka.js":350,"./kk":351,"./kk.js":351,"./km":352,"./km.js":352,"./kn":353,"./kn.js":353,"./ko":354,"./ko.js":354,"./ku":355,"./ku.js":355,"./ky":356,"./ky.js":356,"./lb":357,"./lb.js":357,"./lo":358,"./lo.js":358,"./lt":359,"./lt.js":359,"./lv":360,"./lv.js":360,"./me":361,"./me.js":361,"./mi":362,"./mi.js":362,"./mk":363,"./mk.js":363,"./ml":364,"./ml.js":364,"./mn":365,"./mn.js":365,"./mr":366,"./mr.js":366,"./ms":367,"./ms-my":368,"./ms-my.js":368,"./ms.js":367,"./mt":369,"./mt.js":369,"./my":370,"./my.js":370,"./nb":371,"./nb.js":371,"./ne":372,"./ne.js":372,"./nl":373,"./nl-be":374,"./nl-be.js":374,"./nl.js":373,"./nn":375,"./nn.js":375,"./pa-in":376,"./pa-in.js":376,"./pl":377,"./pl.js":377,"./pt":378,"./pt-br":379,"./pt-br.js":379,"./pt.js":378,"./ro":380,"./ro.js":380,"./ru":381,"./ru.js":381,"./sd":382,"./sd.js":382,"./se":383,"./se.js":383,"./si":384,"./si.js":384,"./sk":385,"./sk.js":385,"./sl":386,"./sl.js":386,"./sq":387,"./sq.js":387,"./sr":388,"./sr-cyrl":389,"./sr-cyrl.js":389,"./sr.js":388,"./ss":390,"./ss.js":390,"./sv":391,"./sv.js":391,"./sw":392,"./sw.js":392,"./ta":393,"./ta.js":393,"./te":394,"./te.js":394,"./tet":395,"./tet.js":395,"./tg":396,"./tg.js":396,"./th":397,"./th.js":397,"./tl-ph":398,"./tl-ph.js":398,"./tlh":399,"./tlh.js":399,"./tr":400,"./tr.js":400,"./tzl":401,"./tzl.js":401,"./tzm":402,"./tzm-latn":403,"./tzm-latn.js":403,"./tzm.js":402,"./ug-cn":404,"./ug-cn.js":404,"./uk":405,"./uk.js":405,"./ur":406,"./ur.js":406,"./uz":407,"./uz-latn":408,"./uz-latn.js":408,"./uz.js":407,"./vi":409,"./vi.js":409,"./x-pseudo":410,"./x-pseudo.js":410,"./yo":411,"./yo.js":411,"./zh-cn":412,"./zh-cn.js":412,"./zh-hk":413,"./zh-hk.js":413,"./zh-tw":414,"./zh-tw.js":414};function n(t){var s=r(t);return e(s)}function r(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=452},464:function(t,s,e){"use strict";var a=e(438);e.n(a).a},465:function(t,s,e){"use strict";var a=e(439),n=e.n(a);s.default=n.a},484:function(t){t.exports=JSON.parse('{"/blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page":[1,"7c41e498"],"/blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql":[1,"0098f323"]}')},496:function(t,s,e){"use strict";e.r(s);var a=e(436).a,n=(e(464),e(12)),r=e(465),i=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Layout",[e("div",{staticClass:"article content"},[e("h1",{staticClass:"title is-2 article-title"},[t._v(t._s(t.$page.post.title))]),e("small",{staticClass:"about"},[t._v(t._s(t.formatCreatedOn)+" • ☕️ "+t._s(t.$page.post.timeToRead)+" min read")]),t.$page.post.video?e("div",{staticClass:"embed-container"},[t.$page.post.video?e("iframe",{attrs:{width:"1000",height:"563",src:t.$page.post.video,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),!t.$page.post.video&&t.$page.post.cover?e("g-image",{staticClass:"cover",attrs:{src:t.$page.post.cover,quality:"75"}}):t._e(),e("article",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"article",domProps:{innerHTML:t._s(t.$page.post.content)}}),e("bulma-tag",{attrs:{tags:t.$page.post.tags}}),e("vue-disqus",{attrs:{shortname:"mygridsomesite",identifier:t.$page.post.title}})],1)])},[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(i);s.default=i.exports}}]);