import{c as W,n as O,t as G,d as E,q as P,aQ as Y,v as q,a as d,L as U,aO as H,I as D,w as Q,ab as p,ac as s,ad as a,G as f,aj as v,aR as X,ag as e,ak as l,aS as J,ao as A,ae as V,af as N,aP as M,aM as j,aq as Z,aT as $,C as tt,aU as et,am as st,b as K,k as at,al as b,aV as ct}from"./index-ba1e3a98.js";import{R as ot,c as nt}from"./index-e4fa7259.js";import{c as lt,S as it}from"./axios-36aa4f50.js";import{u as dt}from"./useScroll-469c5136.js";const[rt,k]=W("nav-bar"),ut={title:String,fixed:Boolean,zIndex:O,border:G,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:G};var _t=E({name:rt,props:ut,emits:["clickLeft","clickRight"],setup(t,{emit:r,slots:i}){const c=P(),n=Y(c,k),o=x=>r("clickLeft",x),u=x=>r("clickRight",x),m=()=>i.left?i.left():[t.leftArrow&&d(D,{class:k("arrow"),name:"arrow-left"},null),t.leftText&&d("span",{class:k("text")},[t.leftText])],w=()=>i.right?i.right():d("span",{class:k("text")},[t.rightText]),h=()=>{const{title:x,fixed:y,border:S,zIndex:z}=t,T=q(z),C=t.leftArrow||t.leftText||i.left,_=t.rightText||i.right;return d("div",{ref:c,style:T,class:[k({fixed:y}),{[H]:S,"van-safe-area-top":t.safeAreaInsetTop}]},[d("div",{class:k("content")},[C&&d("div",{class:[k("left"),t.clickable?U:""],onClick:o},[m()]),d("div",{class:[k("title"),"van-ellipsis"]},[i.title?i.title():x]),_&&d("div",{class:[k("right"),t.clickable?U:""],onClick:u},[w()])])])};return()=>t.fixed&&t.placeholder?n(h):h()}});const ht=Q(_t);const mt="data:image/png;base64,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";const ft={emits:["tabClick"],props:{titles:{type:Array,default:()=>[]}},data(){return{currentIndex:0}},methods:{itemClick(t){this.currentIndex=t,this.$emit("tabClick",t)},setCurrentIndex(t){this.currentIndex=t}}},bt={class:"tab-bar"},vt=["onClick"];function pt(t,r,i,c,n,o){return s(),a("div",bt,[(s(!0),a(f,null,v(i.titles,(u,m)=>(s(),a("div",{key:u,onClick:w=>o.itemClick(m),class:X({active:m===n.currentIndex})},[e("span",null,l(u),1)],10,vt))),128))])}const yt=p(ft,[["render",pt],["__scopeId","data-v-542b12ff"]]);const xt=t=>(V("data-v-e6b8b41d"),t=t(),N(),t),gt={class:"section"},kt={class:"header"},St={class:"title"},Mt={class:"content"},At=xt(()=>e("h3",null,"我是默认内容",-1)),Ct={key:0,class:"footer"},wt={class:"more"},Tt={__name:"detail-section",props:{title:{type:String,default:"默认标题"},moreText:{type:String,default:""}},setup(t){return(r,i)=>{const c=D;return s(),a("div",gt,[e("div",kt,[e("h2",St,l(t.title),1)]),e("div",Mt,[J(r.$slots,"default",{},()=>[At],!0)]),t.moreText.length?(s(),a("div",Ct,[e("span",wt,l(t.moreText),1),d(c,{name:"arrow"})])):A("",!0)])}}},L=p(Tt,[["__scopeId","data-v-e6b8b41d"]]);const Rt=t=>(V("data-v-2daec79c"),t=t(),N(),t),It={class:"facility"},Bt={class:"facility-inner"},Pt={key:0,class:"item"},zt={class:"head"},Vt=["src"],Nt={class:"text"},Lt={class:"list"},Kt=Rt(()=>e("i",{class:"icon_check icon"},null,-1)),jt={__name:"detail_03-facility",props:{houseFacility:{type:Object,default:()=>({})}},setup(t){return(r,i)=>(s(),a("div",It,[d(L,{title:"房屋设施","more-text":"查看全部设施"},{default:M(()=>[e("div",Bt,[(s(!0),a(f,null,v(t.houseFacility.houseFacilitys,(c,n)=>{var o;return s(),a(f,{key:n},[(o=t.houseFacility.facilitySort)!=null&&o.includes(n)?(s(),a("div",Pt,[e("div",zt,[e("img",{src:c.icon,alt:""},null,8,Vt),e("div",Nt,l(c.groupName),1)]),e("div",Lt,[(s(!0),a(f,null,v(c.facilitys.slice(0,4),(u,m)=>(s(),a("div",{key:m,class:"iten"},[Kt,e("span",null,l(u.name),1)]))),128))])])):A("",!0)],64)}),128))])]),_:1})]))}},Dt=p(jt,[["__scopeId","data-v-2daec79c"]]);const $t={class:"swipe"},Ft=["src"],Gt={class:"custom-indicator"},Ut={key:0,class:"count"},Xt={__name:"detail_01-swipe",props:{swipeData:{type:Array}},setup(t){const r=t,i={};for(const o of r.swipeData){let u=i[o.enumPictureCategory];u||(u=[],i[o.enumPictureCategory]=u),u.push(o)}const c=o=>i[o.enumPictureCategory].findIndex(m=>m===o)+1,n=o=>o.replace("：","").replace("【","").replace("】","");return(o,u)=>{const m=lt,w=it;return s(),a("div",$t,[d(w,{class:"swipe-list",autoplay:3e3,"indicator-color":"white"},{indicator:M(({active:h,total:x})=>[e("div",Gt,[(s(),a(f,null,v(i,(y,S,z)=>{var T,C;return e("span",{class:X(["text",{active:((T=t.swipeData[h])==null?void 0:T.enumPictureCategory)==S}])},[j(l(n(y[0].title))+" ",1),((C=t.swipeData[h])==null?void 0:C.enumPictureCategory)==S?(s(),a("span",Ut,l(c(t.swipeData[h]))+"/"+l(y.length),1)):A("",!0)],2)}),64))])]),default:M(()=>[(s(!0),a(f,null,v(t.swipeData,(h,x)=>(s(),Z(m,{class:"swipe-item"},{default:M(()=>[e("img",{src:h.url,alt:""},null,8,Ft)]),_:2},1024))),256))]),_:1})])}}},Zt=p(Xt,[["__scopeId","data-v-a47b081e"]]);const Wt={class:"infos"},Ot={class:"name"},Et={class:"tags"},Yt={class:"comment extra"},qt={class:"left"},Ht={class:"score"},Qt={class:"title"},Jt={class:"brief"},te={class:"right"},ee={class:"count"},se={class:"position extra"},ae={class:"left address"},ce={class:"right"},oe={__name:"detail_02-infos",props:{topInfos:{type:Object,default:()=>({})}},setup(t){return(r,i)=>{const c=D;return s(),a("div",Wt,[e("div",Ot,l(t.topInfos.houseName),1),e("div",Et,[(s(!0),a(f,null,v(t.topInfos.houseTags,(n,o)=>(s(),a(f,{key:o},[n.tagText?(s(),a("span",{key:0,class:"item",style:$({color:n.tagText.color,background:n.tagText.background.color})},l(n.tagText.text),5)):A("",!0)],64))),128))]),e("div",Yt,[e("div",qt,[e("span",Ht,l(t.topInfos.commentBrief.overall),1),e("span",Qt,l(t.topInfos.commentBrief.scoreTitle),1),e("span",Jt,l(t.topInfos.commentBrief.commentBrief),1)]),e("div",te,[e("span",ee,[j(l(t.topInfos.commentBrief.totalCount)+"条评论 ",1),d(c,{name:"arrow"})])])]),e("div",se,[e("div",ae,l(t.topInfos.nearByPosition.address),1),e("div",ce,[j(" 地图·周边 "),d(c,{name:"arrow"})])])])}}},ne=p(oe,[["__scopeId","data-v-91da9c31"]]);const le=t=>(V("data-v-dbd28d98"),t=t(),N(),t),ie={class:"landlord"},de={class:"intro"},re={class:"top"},ue=["src"],_e={class:"header"},he={class:"left"},me={class:"avatar"},fe=["src"],be={class:"info"},ve={class:"name"},pe={class:"tags"},ye={key:0,class:"divider"},xe=le(()=>e("div",{class:"right"},[e("div",{class:"contact"},"联系房东")],-1)),ge={class:"bottom"},ke={class:"item"},Se={class:"title"},Me={class:"score"},Ae={class:"desc"},Ce={__name:"detail_04-landlord",props:{landlord:{type:Object,default:()=>({})}},setup(t){return(r,i)=>(s(),a("div",ie,[d(L,{title:"房东介绍","more-text":"查看房东主页"},{default:M(()=>[e("div",de,[e("div",re,[e("img",{src:t.landlord.topScroll,alt:""},null,8,ue)]),e("div",_e,[e("div",he,[e("div",me,[e("img",{src:t.landlord.hotelLogo,alt:""},null,8,fe)]),e("div",be,[e("div",ve,l(t.landlord.hotelName),1),e("div",pe,[(s(!0),a(f,null,v(t.landlord.hotelTags,(c,n)=>(s(),a("div",{class:"item",style:$({color:c.tagText.color})},[e("span",null,l(c.tagText.text),1),n!==t.landlord.hotelTags.length-1?(s(),a("span",ye,"|")):A("",!0)],4))),256))])])]),xe]),e("div",ge,[(s(!0),a(f,null,v(t.landlord.hotelSummary,(c,n)=>(s(),a("div",ke,[e("div",Se,l(c.title),1),e("div",Me,l(c.introduction),1),e("div",Ae,l(c.tip),1)]))),256))])])]),_:1})]))}},we=p(Ce,[["__scopeId","data-v-dbd28d98"]]);const Te=t=>(V("data-v-0157890d"),t=t(),N(),t),Re={class:"comment"},Ie={class:"comment-inner"},Be={class:"header"},Pe={class:"left"},ze={class:"score"},Ve={class:"text"},Ne=Te(()=>e("div",{class:"line"},null,-1)),Le={class:"info"},Ke={class:"title"},je={class:"count"},De={class:"star"},$e={class:"right"},Fe={class:"tags"},Ge={class:"content"},Ue={class:"user"},Xe={class:"avatar"},Ze=["src"],We={class:"profile"},Oe={class:"name"},Ee={class:"date"},Ye={class:"text"},qe={__name:"detail_05-comment",props:{comment:{type:Object,default:()=>({})}},setup(t){return(r,i)=>{const c=ot;return s(),a("div",Re,[d(L,{title:"热门评论","more-text":`查看全部${t.comment.totalCount}条评论`},{default:M(()=>[e("div",Ie,[e("div",Be,[e("div",Pe,[e("div",ze,[e("span",Ve,l(t.comment.overall),1),Ne]),e("div",Le,[e("div",Ke,l(t.comment.scoreTitle),1),e("div",je,l(t.comment.totalCount)+"条评论",1),e("div",De,[d(c,{modelValue:t.comment.overall,"onUpdate:modelValue":i[0]||(i[0]=n=>t.comment.overall=n),color:"#ff9645",size:"12",readonly:"","allow-half":""},null,8,["modelValue"])])])]),e("div",$e,[(s(!0),a(f,null,v(t.comment.subScores,(n,o)=>(s(),a("span",{key:n,class:"item"},l(n),1))),128))])]),e("div",Fe,[(s(!0),a(f,null,v(t.comment.commentTagVo,(n,o)=>(s(),a("span",{key:o,class:"item",style:$({color:n.color,background:n.backgroundColor})},l(n.text),5))),128))]),e("div",Ge,[e("div",Ue,[e("div",Xe,[e("img",{src:t.comment.comment.userAvatars,alt:""},null,8,Ze)]),e("div",We,[e("div",Oe,l(t.comment.comment.userName),1),e("div",Ee,l(t.comment.comment.checkInDate),1)])]),e("div",Ye,l(t.comment.comment.commentDetail),1)])])]),_:1},8,["more-text"])])}}},He=p(qe,[["__scopeId","data-v-0157890d"]]);const Qe={class:"notice"},Je={class:"notice-inner"},ts={class:"title"},es={class:"intro"},ss={key:0,class:"tip"},as={__name:"detail_06-notice",props:{orderRules:{type:Array,default:()=>[]}},setup(t){return(r,i)=>(s(),a("div",Qe,[d(L,{title:"预定须知"},{default:M(()=>[e("div",Je,[(s(!0),a(f,null,v(t.orderRules,(c,n)=>(s(),a("div",{key:n,class:"item"},[e("span",ts,l(c.title),1),e("span",es,l(c.introduction),1),c.tips?(s(),a("span",ss,"查看说明")):A("",!0)]))),128))])]),_:1})]))}},cs=p(as,[["__scopeId","data-v-9a276207"]]);const os={class:"map"},ns={__name:"detail_07-map",props:{position:{type:Object,default:()=>({})}},setup(t){const r=t,i=P();return tt(()=>{const c=new BMapGL.Map(i.value),n=new BMapGL.Point(r.position.longitude,r.position.latitude);c.centerAndZoom(n,15);var o=new BMapGL.Marker(n);c.addOverlay(o)}),(c,n)=>(s(),a("div",os,[d(L,{title:"地图周边","more-text":"查看更多周边信息"},{default:M(()=>[e("div",{class:"baidu",ref_key:"mapRef",ref:i},null,512)]),_:1})]))}},ls=p(ns,[["__scopeId","data-v-d8251ae5"]]);const is={class:"intro"},ds={class:"title"},rs={class:"content"},us={__name:"detail_08-intro",props:{priceIntro:{type:Object,default:()=>({})}},setup(t){return(r,i)=>(s(),a("div",is,[e("h2",ds,l(t.priceIntro.title),1),e("div",rs,l(t.priceIntro.introduction),1)]))}},_s=p(us,[["__scopeId","data-v-f1a47169"]]);const hs=t=>(V("data-v-4089390c"),t=t(),N(),t),ms=hs(()=>e("div",{class:"footer"},[e("img",{src:mt,alt:""}),e("div",{class:"text"},"弘源旅途, 永无止境!")],-1)),fs={__name:"detail",setup(t){const r=et(),i=st(),c=P({}),n=()=>{i.back()};nt(r.params.id).then(_=>{c.value=_.data.data});const o=K(()=>{var _;return(_=c==null?void 0:c.value)==null?void 0:_.mainPart}),u=P(),{scrollTop:m}=dt(u),w=K(()=>m.value>=300),h=P({}),x=K(()=>Object.keys(h.value)),y=_=>{var g;if(!_)return;const R=(g=_.$el)==null?void 0:g.getAttribute("name");h.value[R]=_.$el};let S=!1,z=-1;const T=_=>{const R=Object.keys(h.value)[_];let I=h.value[R].offsetTop-44;S=!0,z=I,u.value.scrollTo({top:I,behavior:"smooth"})},C=P();return at(m,_=>{var F;if(_===z&&(S=!1),S)return;const g=Object.values(h.value).map(B=>B.offsetTop);let I=g.length-1;for(let B=0;B<g.length;B++)if(g[B]>_+44){I=B-1,console.log(I);break}(F=C.value)==null||F.setCurrentIndex(I)}),(_,R)=>{const g=ht;return s(),a("div",{class:"detail topPage",ref_key:"detailRef",ref:u},[b(w)?(s(),Z(yt,{key:0,ref_key:"tabControlRef",ref:C,onTabClick:T,titles:b(x),class:"tabs"},null,8,["titles"])):A("",!0),d(g,{class:"nav-bar",title:"房屋详情","left-text":"返回","left-arrow":"",onClickLeft:n}),b(o)?ct([b(o)],()=>(s(),a("div",{key:1},[d(Zt,{"swipe-data":b(o).topModule.housePicture.housePics},null,8,["swipe-data"]),d(ne,{"top-infos":b(o).topModule},null,8,["top-infos"]),d(Dt,{name:"设施",ref:y,"house-facility":b(o).dynamicModule.facilityModule.houseFacility},null,8,["house-facility"]),d(we,{name:"房东",ref:y,landlord:b(o).dynamicModule.landlordModule},null,8,["landlord"]),d(He,{name:"评论",ref:y,comment:b(o).dynamicModule.commentModule},null,8,["comment"]),d(cs,{name:"须知",ref:y,orderRules:b(o).dynamicModule.rulesModule.orderRules},null,8,["orderRules"]),d(ls,{name:"周边",ref:y,position:b(o).dynamicModule.positionModule},null,8,["position"]),d(_s,{"price-intro":b(o).introductionModule},null,8,["price-intro"])])),R,0):A("",!0),ms],512)}}},xs=p(fs,[["__scopeId","data-v-4089390c"]]);export{xs as default};
