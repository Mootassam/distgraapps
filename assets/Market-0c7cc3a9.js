import{u as r,f as x,r as n,h as D,v as C,j as s,L as m,i as L}from"./index-7fd69745.js";import{L as M}from"./LoadingModal-4b1f276a.js";import{u as T}from"./useDispatch-d207cff8.js";function F(){const o=T(),t=r(x.selectRows),_=r(x.selectLoading),[j,v]=n.useState(!1),c=r(D.selectCurrentUser),p=async()=>{},[i,u]=n.useState(null),N=()=>{const a={timeZone:"Asia/Dubai"};return new Date().toLocaleString("en-US",a)};n.useEffect(()=>{p(),o(C.doFetch()),N()},[o]);const g=()=>{v(!1)},f=e=>{u(e),v(!0)},b=[{icon:"fa-regular fa-building",text:"Company",link:"/company"},{icon:"fa-solid fa-file-contract",text:"T&C",link:"/tc"},{icon:"fa-solid fa-question",text:"FAQs",link:"/faqs"},{icon:"fa fa-user-plus",text:"Invitation",link:"/invitation"}],k=e=>{const a=parseFloat(c==null?void 0:c.balance)-parseFloat(e.levellimit),l={vip:e,balance:a};o(L.doUpdateProfile(l))},y=({text:e})=>s.jsx("div",{className:"news-ticker-container",children:s.jsx("div",{className:"news-ticker",children:s.jsx("span",{children:e})})}),[w,S]=n.useState(0),d=["/images/home/1.png","/images/home/2.png","/images/home/3.png","/images/home/4.jpeg"];return n.useEffect(()=>{const e=setInterval(()=>{S(a=>(a+1)%d.length)},4e3);return()=>clearInterval(e)},[d.length]),s.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[s.jsx("div",{className:"market__header"}),s.jsx("div",{className:"advertise__header",children:d.map((e,a)=>s.jsx("div",{style:{display:a===w?"block":"none"},children:s.jsx("img",{src:e,alt:`Image ${a+1}`,className:"image"})},a))}),s.jsxs("div",{className:"home__section",children:[s.jsxs("div",{className:"advertise__speaker",children:[s.jsx("div",{children:s.jsx("i",{className:"fa-solid fa-volume-off speaker"})}),s.jsx(y,{text:"****na agent reached 3000 direct active 3211321 ****na agent reached 3000 direct active 321132"})]}),s.jsxs("div",{className:"advertise__buttons",children:[s.jsx(m,{to:"/online",className:"button__deposit",style:{textDecoration:"none"},children:s.jsx("div",{children:"Deposit"})}),s.jsxs(m,{to:"/withdraw",className:"button__withdraw",style:{textDecoration:"none"},children:[" ","Withdraw"]})]}),s.jsx("div",{className:"adverstise__actions",children:b.map(e=>s.jsx(m,{to:e.link,className:"remove__ligne",children:s.jsxs("div",{className:"button__action",children:[s.jsx("div",{className:"action__cirlce",children:s.jsx("i",{className:`${e.icon} icon__action`})}),s.jsx("label",{htmlFor:"",className:"action__label",children:e.text})]})}))}),s.jsxs("div",{className:"advertise__content",children:[s.jsxs("div",{className:"content__header",children:[s.jsx("h3",{className:"hall",children:"Business Hall"}),_&&s.jsx(M,{}),!_&&t&&s.jsx("div",{className:"content__vip",children:t==null?void 0:t.map((e,a)=>{var l,h;return s.jsxs("div",{className:"vip",onClick:()=>f(e),children:[((l=c==null?void 0:c.vip)==null?void 0:l.id)===e.id?s.jsx("div",{className:"success__vip"}):s.jsx("div",{className:"subscribe__"}),s.jsx("div",{className:"vip__image",children:s.jsx("img",{src:(h=e==null?void 0:e.photo[0])==null?void 0:h.downloadUrl,alt:"Vip__image",className:"vip__level"})}),s.jsxs("div",{className:"vip__text",children:[s.jsx("div",{className:"vip__title",children:e.title}),s.jsxs("div",{className:"vip__details",children:[s.jsxs("div",{className:"vip__description",children:[s.jsx("div",{className:"description__key",children:"Entry Limit:"}),s.jsx("div",{className:"description__value",children:e.levellimit})]}),s.jsxs("div",{className:"vip__description",children:[s.jsx("div",{className:"description__key",children:"Daily order:"}),s.jsx("div",{className:"description__value",children:e.dailyorder})]}),s.jsxs("div",{className:"vip__description",children:[s.jsx("div",{className:"description__key",children:"Comimsion rate:"}),s.jsxs("div",{className:"description__value",children:[" ",e.comisionrate]})]})]})]})]},a)})})]}),s.jsx("div",{className:"content__footer"})]})]}),i&&j&&s.jsx("div",{className:"modal__grap",children:s.jsx("div",{className:"modal__product",children:s.jsxs("div",{className:"single__product",children:[s.jsx("div",{className:"single__header",children:i==null?void 0:i.title}),s.jsxs("div",{className:"order__time",children:[s.jsxs("div",{style:{fontSize:20},children:["Level Limit: ",i==null?void 0:i.levellimit]}),s.jsxs("div",{style:{fontSize:20},children:["Daily order: ",i==null?void 0:i.dailyorder]}),s.jsxs("div",{style:{fontSize:20},children:["Commission Rate: ",i==null?void 0:i.comisionrate]})]}),s.jsx("div",{className:"badge__ pending",children:s.jsx("label",{children:"Pending"})}),s.jsxs("div",{className:"bottom__submit",children:[s.jsx("div",{className:"submit__ligne"}),s.jsxs("div",{className:"sumbit__buttons",children:[s.jsx("div",{className:"cancel__product",onClick:()=>g(),children:"Cancel"}),s.jsx("div",{className:"submit__product",onClick:()=>k(i),children:"Submit"})]})]})]})})})]})}export{F as default};
