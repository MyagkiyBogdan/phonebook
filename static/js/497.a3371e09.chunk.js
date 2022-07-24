"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[497],{2497:function(n,e,t){t.r(e),t.d(e,{default:function(){return mn}});var r=t(885),a="ContactForm_form__dhl+T",o="ContactForm_wrapper__-Umw-",i="ContactForm_label__-cVXI",c="ContactForm_inputName__a8jFO",s="ContactForm_inputNumber__DBiVZ",l="ContactForm_addBtn__CACuJ",d=t(8989),u=t(6831),m=t(2791),p=t(5206),h=t(3329);var x,f,b,g=function(){var n=(0,m.useState)(""),e=(0,r.Z)(n,2),t=e[0],x=e[1],f=(0,m.useState)(""),b=(0,r.Z)(f,2),g=b[0],v=b[1],_=(0,d.wY)().data,j=(0,d.Tn)(),w=(0,r.Z)(j,2),y=w[0],Z=w[1].isLoading,N=function(n){switch(n.currentTarget.name){case"name":x(n.currentTarget.value);break;case"number":v(n.currentTarget.value);break;default:throw new Error("Worng state type!")}};return(0,h.jsxs)("form",{className:a,onSubmit:function(n){n.preventDefault(),(_&&_.reduce((function(n,e){return n.push(e.name.toLocaleLowerCase()),n}),[])).includes(t.toLocaleLowerCase())?p.Am.error("".concat(t," already in contacts.")):(y({name:t,number:g}),p.Am.success("\ud83d\ude38 ".concat(t," contact successfully added")),x(""),v(""))},children:[(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("label",{htmlFor:"name",className:i,children:"Name:"}),(0,h.jsx)("input",{className:c,onChange:N,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash, numbers and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,maxLength:"14",minLength:"1"})]}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("label",{htmlFor:"number",className:i,children:"Number:"}),(0,h.jsx)("input",{className:s,onChange:N,value:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,maxLength:"14"})]}),(0,h.jsx)("button",{type:"submit",className:l,children:Z?(0,h.jsx)(u.Z,{width:18,height:18,color:"#fff"}):(0,h.jsx)("span",{children:"Add contact"})})]})},v=t(2982),_="ContactList_list__csErn",j="ContactList_item__EZYHO",w="ContactList_emptyFilter__JruHq",y="ContactListItem_text__fHzb4",Z="ContactListItem_text__name__nzWRA",N="ContactListItem_buttonsWrapper__HgNjB",C="ContactListItem_contactsBtn__d9HDO",z="ContactListItem_contactsBtnIcon__kQ-tp",k="ContactListItem_wrapper__HB+tC",E="Modal_Overlay__yoxbg",O="Modal_Modal__I1UYJ",L="Modal_form__FEIVf",M="Modal_wrapper__TlE5n",F="Modal_label__A0H75",P="Modal_inputName__V8BNc",A="Modal_inputNumber__4pNdq",I="Modal_addBtn__yvZfC",S=t(4164),B=document.querySelector("#modal-root"),q=function(n){var e=n.id,t=n.name,a=n.number,o=n.toggleModal,i=(0,d.Cq)(),c=(0,r.Z)(i,1)[0];(0,m.useEffect)((function(){return window.addEventListener("keydown",s),function(){return window.removeEventListener("keydown",s)}}));var s=function(n){"Escape"===n.code&&o()},l=(0,m.useState)(t),u=(0,r.Z)(l,2),p=u[0],x=u[1],f=(0,m.useState)(a),b=(0,r.Z)(f,2),g=b[0],v=b[1],_=function(n){switch(n.currentTarget.name){case"name":x(n.currentTarget.value);break;case"number":v(n.currentTarget.value);break;default:throw new Error("Worng state type!")}};return(0,S.createPortal)((0,h.jsx)("div",{className:E,onClick:function(n){n.target===n.currentTarget&&o()},children:(0,h.jsxs)("div",{className:O,children:[" ",(0,h.jsxs)("form",{className:L,onSubmit:function(n){n.preventDefault(),c({contactId:e,newName:p,newNumber:g}),x(""),v(""),o()},children:[(0,h.jsxs)("div",{className:M,children:[(0,h.jsx)("label",{htmlFor:"name",className:F,children:"Name:"}),(0,h.jsx)("input",{className:P,onChange:_,value:p,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("div",{className:M,children:[(0,h.jsx)("label",{htmlFor:"number",className:F,children:"Number:"}),(0,h.jsx)("input",{className:A,onChange:_,value:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{type:"submit",className:I,children:(0,h.jsx)("span",{children:"Change contact"})})]})]})}),B)},T=["title","titleId"];function Y(){return Y=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Y.apply(this,arguments)}function H(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function J(n,e){var t=n.title,r=n.titleId,a=H(n,T);return m.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",width:512,height:512,viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},a),t?m.createElement("title",{id:r},t):null,x||(x=m.createElement("g",{id:"icomoon-ignore"})),f||(f=m.createElement("path",{d:"M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32v-320h-352zM160 448h-32v-224h32v224zM224 448h-32v-224h32v224zM288 448h-32v-224h32v224zM352 448h-32v-224h32v224z"})),b||(b=m.createElement("path",{d:"M424 64h-104v-40c0-13.2-10.8-24-24-24h-112c-13.2 0-24 10.8-24 24v40h-104c-13.2 0-24 10.8-24 24v40h416v-40c0-13.2-10.8-24-24-24zM288 64h-96v-31.599h96v31.599z"})))}var D,R=m.forwardRef(J),W=(t.p,["title","titleId"]);function $(){return $=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},$.apply(this,arguments)}function K(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function U(n,e){var t=n.title,r=n.titleId,a=K(n,W);return m.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":r},a),void 0===t?m.createElement("title",{id:r},"pencil"):t?m.createElement("title",{id:r},t):null,D||(D=m.createElement("path",{d:"M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"})))}var V=m.forwardRef(U),G=(t.p,function(n){var e=n.id,t=n.name,a=n.number,o=(0,d.Nt)(),i=(0,r.Z)(o,2),c=i[0],s=i[1].isLoading,l=(0,m.useState)(!1),p=(0,r.Z)(l,2),x=p[0],f=p[1],b=function(){f((function(n){return!n}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("p",{className:y,children:[(0,h.jsxs)("span",{className:Z,children:[t,":"]})," ",a]}),(0,h.jsxs)("div",{className:N,children:[(0,h.jsx)("button",{className:C,onClick:b,type:"button",children:(0,h.jsx)(V,{className:z})}),(0,h.jsx)("button",{className:C,onClick:function(){return c(e)},type:"button",children:s?(0,h.jsx)("div",{className:k,children:(0,h.jsx)(u.Z,{width:16,height:16,color:"white"})}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(R,{className:z})})})]}),x&&(0,h.jsx)(q,{id:e,name:t,number:a,toggleModal:b})]})}),Q=t(364),X=t(1856),nn=t(6895),en=t(5048),tn=t(763),rn=t.n(tn),an=function(){var n=(0,en.v9)(nn.zK),e=(0,d.wY)().data,t=function(){var t=n.toLocaleLowerCase();return e&&(0,v.Z)(e).filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))}(),a=(0,m.useState)(t),o=(0,r.Z)(a,2),i=o[0],c=o[1];return(0,m.useEffect)((function(){c((function(n){return e=n,r=t,rn()(e).differenceWith(r,rn().isEqual).isEmpty()&&n.length===t.length?n:t;var e,r}))}),[t]),0===t.length?(0,h.jsx)("p",{className:w,children:"No contact with this name"}):(0,h.jsx)(Q.t.Group,{className:_,axis:"y",values:i,onReorder:c,children:(0,h.jsx)(X.M,{children:i.map((function(n){return(0,h.jsx)(Q.t.Item,{className:j,value:n,children:(0,h.jsx)(G,{id:n.id,name:n.name,number:n.number})},n.id)}))})})},on="EmptyMessage_text__m5k0w",cn=function(){return(0,h.jsx)("p",{className:on,children:"Your contacts list is empty"})},sn="Filter_label__vEd1E",ln="Filter_input__N7T3z",dn=function(){var n=(0,en.v9)(nn.zK),e=(0,en.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("label",{htmlFor:"name",className:sn,children:"Find contact by name:"}),(0,h.jsx)("input",{className:ln,onChange:function(n){return e((0,nn.a8)(n.target.value))},value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},un=t(3673);function mn(){var n=(0,d.wY)(),e=n.data,t=n.isLoading;return(0,h.jsxs)(un.$e,{children:[(0,h.jsx)(un.S3,{children:(0,h.jsx)("h1",{children:"Phonebook"})}),(0,h.jsxs)(un.SB,{children:[(0,h.jsx)(un.Ct,{children:"Add new contact"}),(0,h.jsx)(g,{}),(0,h.jsxs)(un.YK,{children:[(0,h.jsx)(un.Ct,{children:"Your contacts"}),t&&(0,h.jsx)(u.Z,{width:50,height:50,color:"blue"}),e&&e.length>0?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(dn,{}),(0,h.jsx)(an,{})]}):!t&&(0,h.jsx)(cn,{})]})]})]})}},3673:function(n,e,t){t.d(e,{$e:function(){return _},Ct:function(){return O},Dx:function(){return y},Fg:function(){return C},Le:function(){return F},Oq:function(){return M},S3:function(){return j},SB:function(){return k},YK:function(){return E},bn:function(){return z},l0:function(){return w},u0:function(){return L},v0:function(){return N},xv:function(){return Z}});var r,a,o,i,c,s,l,d,u,m,p,h,x,f,b=t(168),g=t(7939),v=t(3504),_=g.ZP.div(r||(r=(0,b.Z)(["\n  margin: 30px 10px;\n  border: 1px solid #000;\n  border-radius: 14px;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  box-shadow: 0.5rem 0.5rem 2rem #464545, -0.5rem -0.5rem 2rem #acabab;\n  @media screen and (min-width: 510px) {\n    margin: 30px auto;\n  }\n"]))),j=g.ZP.div(a||(a=(0,b.Z)(["\n  background-color: #445daf;\n  color: #fff;\n  width: 100%;\n  text-align: center;\n"]))),w=g.ZP.form(o||(o=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),y=g.ZP.h2(i||(i=(0,b.Z)(["\n  max-width: 300px;\n  text-align: center;\n  font-size: 28px;\n  margin: 0 0 15px;\n"]))),Z=g.ZP.p(c||(c=(0,b.Z)(["\n  margin: 0 0 15px;\n  font-size: 18px;\n  font-style: italic;\n"]))),N=g.ZP.p(s||(s=(0,b.Z)(["\n  margin: 0 0 15px;\n  font-size: 22px;\n  max-width: 300px;\n  text-align: center;\n  line-height: 1.34;\n"]))),C=(0,g.ZP)(v.rU)(l||(l=(0,b.Z)(["\n  text-decoration: none;\n  margin-bottom: 15px;\n  color: #0000ff;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),z=g.ZP.a(d||(d=(0,b.Z)(["\n  text-decoration: none;\n  margin-bottom: 15px;\n  color: #0000ff;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),k=g.ZP.div(u||(u=(0,b.Z)(["\n  padding: 30px 0;\n  background-color: #c5d3fc;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),E=g.ZP.div(m||(m=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  margin: 20px auto 50px;\n"]))),O=g.ZP.h2(p||(p=(0,b.Z)(["\n  font-size: 30px;\n  margin: 10px auto 30px;\n"]))),L=(0,g.ZP)(v.rU)(h||(h=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n\n  background-color: transparent;\n  outline: 0;\n  border: 0;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  min-width: 64px;\n  padding: 6px 16px;\n  border-radius: 4px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  color: #fff;\n  background-color: #1976d2;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n\n  width: 150px;\n  height: 50px;\n  background-image: linear-gradient(#323ff1, #1f2df8);\n\n  &:hover,\n  &:active {\n    background-image: linear-gradient(#1221f5, #0818f5);\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n\n  @media screen and (max-width: 370px) {\n    width: 120px;\n  }\n"]))),M=g.ZP.div(x||(x=(0,b.Z)(["\n  margin-top: 30px;\n  display: flex;\n"]))),F=g.ZP.span(f||(f=(0,b.Z)(["\n  color: #3b48ff;\n"])))}}]);
//# sourceMappingURL=497.a3371e09.chunk.js.map