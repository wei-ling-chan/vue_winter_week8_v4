import{L as v}from"./index-4b6ec3b1.js";import{T as w}from"./toasts-0cc83718.js";import{_ as O,a as o,d as P,b as t,h as r,F as h,l as u,t as l,n as b,g as a,p,w as m,r as y,o as s,q as g}from"./index-01093b7f.js";import"./sweetalert2.all-dbef9969.js";const{VITE_APP_URL:x,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"wlc606",BASE_URL:"/vue_winter_week8_v4/",MODE:"production",DEV:!1,PROD:!0},L={data(){return{order:{user:{}},orderId:"",orderProductsObj:{},localOrder:{},Subtotal:0,color:"#9cd020",isLoading:!1,fullPage:!0,loader:"bars"}},components:{Loading:v},methods:{doAjax(){this.isLoading=!0},getOrder(){const i=`${x}/api/${f}/order/${this.orderId}`;this.$http.get(i).then(n=>{this.order=n.data.order,this.orderProductsObj=n.data.order.products,this.isLoading=!1}).catch(n=>{this.$httpMessageState(n.response,"錯誤訊息")})},payOrder(){const i=`${x}/api/${f}/pay/${this.orderId}`;this.$http.post(i).then(()=>{this.getOrder(),w.fire({width:250,title:"訂購成功",icon:"success"})}).catch(n=>{this.$httpMessageState(n.response,"錯誤訊息")})},getorderinfo(){this.localOrder=JSON.parse(localStorage.getItem("order"))}},computed:{totalSum(){let i=0;for(const n in this.orderProductsObj)Object.prototype.hasOwnProperty.call(this.orderProductsObj,n)&&(i+=this.orderProductsObj[n].total);return i}},mounted(){this.orderId=this.$route.params.orderId,this.getOrder(),this.doAjax(),this.getorderinfo()}},S=t("div",{class:"cart-space"},null,-1),I={class:"check-order d-none d-md-block d-flex flex-column align-items-center mb-0 mb-md-7 mt-4"},T={class:"container px-md-0"},E={key:0},j={key:0,class:"position-relative mx-auto mt-lg-4 mt-md-8 mb-8",style:{width:"50%"}},A=t("div",{class:"progress",style:{height:"1px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"100%","background-color":"black"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})],-1),C=t("button",{type:"button",class:"position-absolute bg-success text-light border border-dark top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill fs-7",style:{width:"6rem",height:"6rem"}}," 購物車 ",-1),V=t("button",{type:"button",class:"position-absolute bg-success text-light boeder border-dark bg-0 top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill fs-7",style:{width:"6rem",height:"6rem"}}," 填寫訂單 ",-1),B=t("button",{type:"button",class:"position-absolute bg-primary text-dark top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill fs-7",style:{width:"6rem",height:"6rem"}}," 完成訂單 ",-1),M=[A,C,V,B],R={key:1,class:"position-relative mx-auto m-4 mb-8",style:{width:"50%"}},U=t("div",{class:"progress",style:{height:"1px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"100%","background-color":"black"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})],-1),N=t("button",{type:"button",class:"position-absolute bg-success text-light border border-dark top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill fs-7",style:{width:"6rem",height:"6rem"}}," 購物車 ",-1),z=t("button",{type:"button",class:"position-absolute bg-success text-light boeder border-dark bg-0 top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill fs-7",style:{width:"6rem",height:"6rem"}}," 填寫訂單 ",-1),D=t("button",{type:"button",class:"position-absolute bg-success text-light top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill fs-7",style:{width:"6rem",height:"6rem"}}," 完成訂單 ",-1),q=[U,N,z,D],F={key:1,class:"mx-auto mb-5 text-center",style:{"margin-top":"-5%"}},H=t("h1",{class:"mb-4"},"付款完成",-1),J=t("p",{class:"fs-6"},"感謝您的訂購，商品將會盡速送達",-1),G=[H,J],K={class:"d-flex justify-content-start align-items-start"},Q={class:"table align-middle border border-dark",style:{width:"50%"}},W=t("thead",null,[t("tr",{class:"table-dark text-center fs-md"},[t("th",{colspan:"4"},"訂單內容")]),t("tr",{class:"fs-md"},[t("th",{class:"table-image text-center order-product"},"商品"),t("th",{class:"text-center order-product"},"品名"),t("th",{class:"text-center order-product"},"數量"),t("th",{class:"text-center fs-7 order-product"},"金額")])],-1),X={class:"text-center"},Y={class:"ms-2 text-center"},Z={key:0,class:"text-center"},$={key:1,class:"text-center"},tt={key:0,class:"text-center text-info"},et={key:1,class:"text-center text-info"},st={key:2,class:"text-center",style:{color:"#a64942"}},ot={key:3,class:"text-center",style:{color:"#a64942"}},rt={key:4,class:"text-center",style:{color:"#a64942"}},lt={class:"d-flex flex-column align-items-center ms-4 mb-1 border border-1 border-dark information",style:{width:"49%"}},dt={class:"text-center p-2 bg-dark text-white w-100 border-bottom border-dark information-titlte fs-md"},nt={class:"badge text-light ms-2 fw-normal",style:{"background-color":"#356408"}},it={class:"table text-start",style:{"margin-bottom":"-1px !important"}},ct={class:"fs-md"},at={style:{height:"46px"}},ht=t("th",{style:{color:"#a64942"}},"取單號",-1),_t={style:{color:"#a64942"}},ut={style:{height:"46px","vertical-align":"middle"}},bt=t("th",null,"Email",-1),pt={style:{height:"46px","vertical-align":"middle"}},mt=t("th",null,"姓名",-1),yt={style:{height:"46px","vertical-align":"middle"}},gt=t("th",null,"收件人電話",-1),xt={style:{height:"46px","vertical-align":"middle"}},ft=t("th",null,"取餐時間",-1),kt={style:{height:"46px","vertical-align":"middle"}},vt=t("th",null,"付款方式",-1),wt={style:{height:"46px","vertical-align":"middle"}},Ot=t("th",null,"付款狀態",-1),Pt={key:0},Lt={key:1,class:"text-success"},St={key:2,class:"text-end align-self-end mt-2"},It={key:3,class:"text-end align-self-end mt-2"},Tt={class:"check-order d-md-none d-flex flex-column align-items-center px-0 table-responsive"},Et={key:0,class:"position-relative mx-auto m-5 mb-7",style:{width:"70%"}},jt=t("div",{class:"progress",style:{height:"1px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"100%","background-color":"black"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})],-1),At=t("button",{type:"button",class:"position-absolute bg-success text-white top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill fs-7",style:{width:"4rem",height:"4rem"}}," 購物車 ",-1),Ct=t("button",{type:"button",class:"position-absolute boeder border-dark bg-success text-light top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill fs-7",style:{width:"4rem",height:"4rem"}}," 填寫訂單 ",-1),Vt={key:0,type:"button",class:"position-absolute bg-success text-light top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill fs-7",style:{width:"4rem",height:"4rem"}},Bt={key:1,type:"button",class:"position-absolute bg-primary text-dark top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill fs-7",style:{width:"4rem",height:"4rem"}},Mt={key:1,class:"check-order-finish mx-auto mb-4 text-center"},Rt=t("h1",{class:"mb-4"},"付款完成",-1),Ut=t("p",{class:"fs-md"},"感謝您的訂購，商品將會盡速送達",-1),Nt=[Rt,Ut],zt={class:"d-flex flex-column px-11 w-100"},Dt={class:"table align-middle border border-dark"},qt=t("thead",null,[t("tr",{class:"table-dark text-center fs-md"},[t("th",{colspan:"4",class:"w-100"},"訂單內容")]),t("tr",{class:"fs-md"},[t("th",{class:"table-image text-center order-product"},"商品"),t("th",{class:"text-center order-product"},"品名"),t("th",{class:"text-center order-productr"},"數量"),t("th",{class:"text-center order-product"},"金額")])],-1),Ft={class:"text-center",style:{width:"40%"}},Ht={class:"ms-2 text-center"},Jt={key:0,class:"text-center"},Gt={key:1,class:"text-center"},Kt={key:0,class:"text-center text-info"},Qt={key:1,class:"text-center text-info"},Wt={key:2,class:"text-center",style:{color:"#a64942"}},Xt={key:3,class:"text-center",style:{color:"#a64942"}},Yt={key:4},Zt={key:5},$t={key:6,class:"text-center"},te={class:"d-flex flex-column align-items-center my-3 border border-1 border-dark information"},ee={class:"text-center p-2 bg-dark text-white w-100 border-bottom border-dark information-title fs-md"},se={class:"badge text-light ms-2 fw-normal",style:{"background-color":"#356408"}},oe={class:"table text-start",style:{"margin-bottom":"-1px !important"}},re={class:"fs-md"},le={style:{height:"46px"}},de=t("th",{style:{color:"#a64942"}},"取單號",-1),ne={style:{color:"#a64942"}},ie={style:{height:"46px","vertical-align":"middle"}},ce=t("th",null,"Email",-1),ae={style:{height:"46px","vertical-align":"middle"}},he=t("th",null,"姓名",-1),_e={style:{height:"46px","vertical-align":"middle"}},ue=t("th",null,"收件人電話",-1),be={style:{height:"46px","vertical-align":"middle"}},pe=t("th",null,"取餐時間",-1),me={style:{height:"46px","vertical-align":"middle"}},ye=t("th",null,"付款方式",-1),ge={style:{height:"46px","vertical-align":"middle"}},xe=t("th",null,"付款狀態",-1),fe={key:0},ke={key:1,class:"text-success"},ve={key:0,class:"text-end align-self-end mb-4"},we={key:1,class:"text-end align-self-end mb-4"};function Oe(i,n,Pe,Le,e,c){const k=y("Loading"),_=y("RouterLink");return s(),o(h,null,[P(k,{active:e.isLoading,"onUpdate:active":n[0]||(n[0]=d=>e.isLoading=d),"can-cancel":!0,color:e.color,"on-cancel":i.onCancel,loader:e.loader,"is-full-page":e.fullPage},null,8,["active","color","on-cancel","loader","is-full-page"]),S,t("div",I,[t("div",T,[e.order.is_paid===!1?(s(),o("div",E,[e.order.is_paid?r("",!0):(s(),o("div",j,M)),e.order.is_paid?(s(),o("div",R,q)):r("",!0)])):r("",!0),e.order.is_paid===!0?(s(),o("div",F,G)):r("",!0),t("div",K,[t("table",Q,[W,t("tbody",null,[e.order?(s(!0),o(h,{key:0},u(e.order.products,d=>(s(),o("tr",{key:d.id,class:"fs-md"},[t("td",null,[t("div",{style:g([{height:"100px","background-size":"cover","background-position":"center",width:"100%"},{backgroundImage:`url(${d.product.imageUrl})`}])},null,4)]),t("td",X,l(d.product.title),1),t("td",null,[t("div",Y,l(d.qty),1)]),d.total===d.final_total?(s(),o("td",Z,l(d.total),1)):r("",!0),d.total!==d.final_total?(s(),o("td",$,l(Math.round(d.final_total)),1)):r("",!0)]))),128)):r("",!0)]),t("tfoot",null,[t("tr",null,[e.order.total!==0?(s(),o("td",tt,"已折扣")):r("",!0),e.order.total!==0?(s(),o("td",et,l(Math.round(c.totalSum-e.order.total)),1)):r("",!0),e.order.total!==0?(s(),o("td",st,"金額")):r("",!0),e.order.total!==0?(s(),o("td",ot,l(c.totalSum),1)):r("",!0),e.order.total===0?(s(),o("td",rt,"總計")):r("",!0),e.order.total===0?(s(),o("td",{key:5,class:b(["text-center",{"text-decoration-line-through":i.cart.total!==i.cart.final_total}]),style:{color:"#a64942"}},l(c.totalSum-e.order.total),3)):r("",!0)])])]),t("div",lt,[t("div",dt,[a("訂單資訊 "),t("span",nt,l(e.localOrder.inOrOut),1)]),t("table",it,[t("tbody",ct,[t("tr",at,[ht,t("td",_t,l(e.localOrder.orderCount),1)]),t("tr",ut,[bt,t("td",null,l(e.order.user.email),1)]),t("tr",pt,[mt,t("td",null,l(e.order.user.name),1)]),t("tr",yt,[gt,t("td",null,l(e.order.user.tel),1)]),t("tr",xt,[ft,t("td",null,l(e.localOrder.payTime),1)]),t("tr",kt,[vt,t("td",null,l(e.localOrder.payBy),1)]),t("tr",wt,[Ot,t("td",null,[e.order.is_paid?(s(),o("span",Lt,"付款完成")):(s(),o("span",Pt,"尚未付款"))])])])])])]),e.order.is_paid===!1?(s(),o("div",St,[t("button",{class:"btn btn-info text-light",onClick:n[1]||(n[1]=(...d)=>c.payOrder&&c.payOrder(...d))},"確認付款去")])):r("",!0),e.order.is_paid===!0?(s(),o("div",It,[e.order.is_paid===!0?(s(),p(_,{key:0,to:"/products",class:"btn btn-info text-light"},{default:m(()=>[a("繼續購物")]),_:1})):r("",!0)])):r("",!0)])]),t("div",Tt,[e.order.is_paid===!1?(s(),o("div",Et,[jt,At,Ct,e.order.is_paid?(s(),o("button",Vt," 完成訂單 ")):(s(),o("button",Bt," 完成訂單 "))])):r("",!0),e.order.is_paid===!0?(s(),o("div",Mt,Nt)):r("",!0),t("div",zt,[t("table",Dt,[qt,t("tbody",null,[e.order?(s(!0),o(h,{key:0},u(e.order.products,d=>(s(),o("tr",{key:d.id,class:"fs-md"},[t("td",null,[t("div",{style:g([{height:"100px","background-size":"cover","background-position":"center",width:"100px"},{backgroundImage:`url(${d.product.imageUrl})`}])},null,4)]),t("td",Ft,l(d.product.title),1),t("td",null,[t("div",Ht,l(d.qty),1)]),d.total===d.final_total?(s(),o("td",Jt,l(d.total),1)):r("",!0),d.total!==d.final_total?(s(),o("td",Gt,l(Math.round(d.final_total)),1)):r("",!0)]))),128)):r("",!0)]),t("tfoot",null,[t("tr",null,[e.order.total!==0?(s(),o("td",Kt,"已折扣")):r("",!0),e.order.total!==0?(s(),o("td",Qt,l(Math.round(c.totalSum-e.order.total)),1)):r("",!0),e.order.total!==0?(s(),o("td",Wt,"金額")):r("",!0),e.order.total!==0?(s(),o("td",Xt,l(c.totalSum),1)):r("",!0),e.order.total===0?(s(),o("td",Yt)):r("",!0),e.order.total===0?(s(),o("td",Zt)):r("",!0),e.order.total===0?(s(),o("td",$t,"總計")):r("",!0),e.order.total===0?(s(),o("td",{key:7,class:b(["text-center",{"text-decoration-line-through":i.cart.total!==i.cart.final_total}])},l(c.totalSum-e.order.total),3)):r("",!0)])])]),t("div",te,[t("div",ee,[a("訂單資訊 "),t("span",se,l(e.localOrder.inOrOut),1)]),t("table",oe,[t("tbody",re,[t("tr",le,[de,t("td",ne,l(e.localOrder.orderCount),1)]),t("tr",ie,[ce,t("td",null,l(e.order.user.email),1)]),t("tr",ae,[he,t("td",null,l(e.order.user.name),1)]),t("tr",_e,[ue,t("td",null,l(e.order.user.tel),1)]),t("tr",be,[pe,t("td",null,l(e.localOrder.payTime),1)]),t("tr",me,[ye,t("td",null,l(e.localOrder.payBy),1)]),t("tr",ge,[xe,t("td",null,[e.order.is_paid?(s(),o("span",ke,"付款完成")):(s(),o("span",fe,"尚未付款"))])])])])]),e.order.is_paid===!1?(s(),o("div",ve,[t("button",{class:"btn btn-info text-light",onClick:n[2]||(n[2]=(...d)=>c.payOrder&&c.payOrder(...d))},"確認付款去")])):r("",!0),e.order.is_paid===!0?(s(),o("div",we,[e.order.is_paid===!0?(s(),p(_,{key:0,to:"/products",class:"btn btn-info text-light"},{default:m(()=>[a("繼續購物")]),_:1})):r("",!0)])):r("",!0)])])],64)}const je=O(L,[["render",Oe]]);export{je as default};