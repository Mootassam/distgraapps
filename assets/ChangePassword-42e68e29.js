import{x as c,y as e,A as m,r as u,u as p,h,j as s,i as w}from"./index-7fd69745.js";import{S as x}from"./SubHeader-4128b532.js";import{y as r,u as f,a as _,F as j,I as o}from"./InputFormItem-e1bec9fd.js";import{B as P}from"./ButtonIcon-14f372ff.js";import{u as v}from"./useDispatch-d207cff8.js";const N=c().shape({oldPassword:r.string(e("user.fields.oldPassword"),{required:!0}),newPassword:r.string(e("user.fields.newPassword"),{required:!0}),newPasswordConfirmation:r.string(e("user.fields.newPasswordConfirmation"),{required:!0}).oneOf([m("newPassword"),null],e("auth.passwordChange.mustMatch"))});function F(){const d=v(),[t]=u.useState(()=>({oldPassword:"",newPassword:"",newPasswordConfirmation:""})),a=f({resolver:_.yupResolver(N),mode:"all",defaultValues:t}),n=p(h.selectLoadingPasswordChange),l=i=>{d(w.doChangePassword(i.oldPassword,i.newPassword))};return s.jsxs("div",{children:[s.jsx(x,{title:"Change password",path:"/profile"}),s.jsx("div",{className:"app__wallet",children:s.jsxs("div",{className:"wallet__",children:[s.jsx("h3",{className:"hall",children:"Change Password"}),s.jsx(j,{...a,children:s.jsx("form",{onSubmit:a.handleSubmit(l),children:s.jsxs("div",{className:"wallet__form",children:[s.jsxs("div",{className:"form__",children:[s.jsxs("div",{className:"form__group",children:[s.jsxs("div",{className:"label__form",children:[s.jsx("span",{style:{color:"red"},children:"*"}),s.jsx("span",{style:{fontSize:"13px"},children:"Old Password"})]}),s.jsx("div",{className:"input__div",children:s.jsx(o,{type:"password",name:"oldPassword",autoComplete:"old-password",className:"input__"})})]}),s.jsxs("div",{className:"form__group",children:[s.jsxs("div",{className:"label__form",children:[s.jsx("span",{style:{color:"red"},children:"*"}),s.jsx("span",{style:{fontSize:"13px"},children:"New Password"})]}),s.jsx("div",{className:"input__div",children:s.jsx(o,{type:"password",name:"newPassword",autoComplete:"new-password",className:"input__"})})]}),s.jsxs("div",{className:"form__group",children:[s.jsxs("div",{className:"label__form",children:[s.jsx("span",{style:{color:"red"},children:"*"}),s.jsx("span",{style:{fontSize:"13px"},children:"Confirm Password"})]}),s.jsx("div",{className:"input__div",children:s.jsx(o,{type:"password",name:"newPasswordConfirmation",autoComplete:"new-password",className:"input__"})})]})]}),s.jsxs("button",{className:"button__submit",disabled:n,type:"button",onClick:a.handleSubmit(l),children:[" ",s.jsx(P,{loading:n,iconClass:"far fa-save"}),"  Submit"]}),s.jsxs("span",{style:{fontSize:13},children:[s.jsx("b",{children:"Note:"}),"   Please fill out this information carefully"]})]})})})]})})]})}export{F as default};
