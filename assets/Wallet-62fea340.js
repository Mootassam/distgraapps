import{x as u,y as r,u as h,h as p,r as x,j as e,i as f}from"./index-7fd69745.js";import{S as j}from"./SubHeader-4128b532.js";import{y as a,u as _,a as v,F as S,I as l}from"./InputFormItem-e1bec9fd.js";import{u as y}from"./useDispatch-d207cff8.js";const N=u().shape({trc20:a.string(r("user.fields.trc20"),{required:!0}),erc20:a.string(r("user.fields.erc20"),{required:!0})});function w(){const i=y(),s=h(p.selectCurrentUser),[c]=x.useState(()=>({trc20:s.trc20,erc20:s.erc20})),t=_({resolver:v.yupResolver(N),mode:"onSubmit",defaultValues:c}),o=({erc20:n,trc20:d})=>{const m={erc20:n,trc20:d};i(f.doUpdateProfile(m))};return e.jsxs("div",{children:[e.jsx(j,{title:"Wallet",path:"/profile"}),e.jsx("div",{className:"app__wallet",children:e.jsxs("div",{className:"wallet__",children:[e.jsx("h3",{className:"hall",children:"Withdrawal method information"}),e.jsx(S,{...t,children:e.jsx("form",{onSubmit:t.handleSubmit(o),children:e.jsxs("div",{className:"wallet__form",children:[e.jsxs("div",{className:"form__",children:[e.jsxs("div",{className:"form__group",children:[e.jsxs("div",{className:"label__form",children:[e.jsx("span",{style:{color:"red"},children:"*"}),e.jsx("span",{style:{fontSize:"13px"},children:"USDT-TRC20"})]}),e.jsx("div",{className:"input__div",children:e.jsx(l,{type:"text",name:"erc20",placeholder:r("user.fields.erc20"),className:"input__"})})]}),e.jsxs("div",{className:"form__group",children:[e.jsxs("div",{className:"label__form",children:[e.jsx("span",{style:{color:"red"},children:"*"}),e.jsx("span",{style:{fontSize:"13px"},children:"USDT-ERC20"})]}),e.jsx("div",{className:"input__div",children:e.jsx(l,{type:"text",name:"trc20",placeholder:r("user.fields.erc20"),className:"input__"})})]})]}),e.jsx("button",{className:"button__submit",type:"submit",disabled:!!(s.erc20&&s.trc20),children:"Submit"}),e.jsxs("span",{style:{fontSize:13},children:[e.jsx("b",{children:"Note:"}),"   this informations not modified so please make sure that you fill it correctly"]})]})})})]})})]})}export{w as default};
