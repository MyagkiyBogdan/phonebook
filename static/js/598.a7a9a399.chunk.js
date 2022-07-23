"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[598],{598:function(n,e,o){o.r(e),o.d(e,{default:function(){return D}});var i=o(885),t=o(5048),r=o(4289),a=o(4942),l=o(3366),c=o(7462),s=o(2791),u=o(8182),d={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},p=o(4419),m=o(3967),f=o(4036),x=o(6248).Z,v=o(8744),h=o(3031),g=o(2071),b=o(9201),y=o(184),Z=(0,b.Z)((0,y.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),w=(0,b.Z)((0,y.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),j=o(1046),S=o(2859),F=o(7225);function z(n){return(0,F.Z)("MuiRating",n)}var A=(0,o(5878).Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),C=["value"],L=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function R(n,e){if(null==n)return n;var o=Math.round(n/e)*e;return Number(o.toFixed(function(n){var e=n.toString().split(".")[1];return e?e.length:0}(e)))}var k=(0,S.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(n,e){var o=n.ownerState;return[(0,a.Z)({},"& .".concat(A.visuallyHidden),e.visuallyHidden),e.root,e["size".concat((0,f.Z)(o.size))],o.readOnly&&e.readOnly]}})((function(n){var e,o=n.theme,i=n.ownerState;return(0,c.Z)((e={display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent"},(0,a.Z)(e,"&.".concat(A.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"}),(0,a.Z)(e,"&.".concat(A.focusVisible," .").concat(A.iconActive),{outline:"1px solid #999"}),(0,a.Z)(e,"& .".concat(A.visuallyHidden),d),e),"small"===i.size&&{fontSize:o.typography.pxToRem(18)},"large"===i.size&&{fontSize:o.typography.pxToRem(30)},i.readOnly&&{pointerEvents:"none"})})),V=(0,S.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(n,e){return e.label}})((function(n){var e=n.ownerState;return(0,c.Z)({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})})),M=(0,S.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(n,e){var o=n.ownerState;return[e.icon,o.iconEmpty&&e.iconEmpty,o.iconFilled&&e.iconFilled,o.iconHover&&e.iconHover,o.iconFocus&&e.iconFocus,o.iconActive&&e.iconActive]}})((function(n){var e=n.theme,o=n.ownerState;return(0,c.Z)({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(e.vars||e).palette.action.disabled})})),P=(0,S.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(n){return(0,S.Dz)(n)&&"iconActive"!==n},overridesResolver:function(n,e){var o=n.iconActive;return[e.decimal,o&&e.iconActive]}})((function(n){var e=n.iconActive;return(0,c.Z)({position:"relative"},e&&{transform:"scale(1.2)"})}));function H(n){var e=(0,l.Z)(n,C);return(0,y.jsx)("span",(0,c.Z)({},e))}function O(n){var e=n.classes,o=n.disabled,i=n.emptyIcon,t=n.focus,r=n.getLabelText,a=n.highlightSelectedOnly,l=n.hover,d=n.icon,p=n.IconContainerComponent,m=n.isActive,f=n.itemValue,v=n.labelProps,h=n.name,g=n.onBlur,b=n.onChange,Z=n.onClick,w=n.onFocus,j=n.readOnly,S=n.ownerState,F=n.ratingValue,z=a?f===F:f<=F,A=f<=l,C=f<=t,L=f===n.ratingValueRounded,R=x(),k=(0,y.jsx)(M,{as:p,value:f,className:(0,u.Z)(e.icon,z?e.iconFilled:e.iconEmpty,A&&e.iconHover,C&&e.iconFocus,m&&e.iconActive),ownerState:(0,c.Z)({},S,{iconEmpty:!z,iconFilled:z,iconHover:A,iconFocus:C,iconActive:m}),children:i&&!z?i:d});return j?(0,y.jsx)("span",(0,c.Z)({},v,{children:k})):(0,y.jsxs)(s.Fragment,{children:[(0,y.jsxs)(V,(0,c.Z)({ownerState:(0,c.Z)({},S,{emptyValueFocused:void 0}),htmlFor:R},v,{children:[k,(0,y.jsx)("span",{className:e.visuallyHidden,children:r(f)})]})),(0,y.jsx)("input",{className:e.visuallyHidden,onFocus:w,onBlur:g,onChange:b,onClick:Z,disabled:o,value:f,id:R,type:"radio",name:h,checked:L})]})}var E=(0,y.jsx)(Z,{fontSize:"inherit"}),I=(0,y.jsx)(w,{fontSize:"inherit"});function T(n){return"".concat(n," Star").concat(1!==n?"s":"")}var N=s.forwardRef((function(n,e){var o=(0,j.Z)({name:"MuiRating",props:n}),t=o.className,r=o.defaultValue,a=void 0===r?null:r,d=o.disabled,b=void 0!==d&&d,Z=o.emptyIcon,w=void 0===Z?I:Z,S=o.emptyLabelText,F=void 0===S?"Empty":S,A=o.getLabelText,C=void 0===A?T:A,M=o.highlightSelectedOnly,N=void 0!==M&&M,B=o.icon,D=void 0===B?E:B,q=o.IconContainerComponent,U=void 0===q?H:q,X=o.max,Y=void 0===X?5:X,$=o.name,K=o.onChange,W=o.onChangeActive,_=o.onMouseLeave,G=o.onMouseMove,J=o.precision,Q=void 0===J?1:J,nn=o.readOnly,en=void 0!==nn&&nn,on=o.size,tn=void 0===on?"medium":on,rn=o.value,an=(0,l.Z)(o,L),ln=x($),cn=(0,v.Z)({controlled:rn,default:a,name:"Rating"}),sn=(0,i.Z)(cn,2),un=sn[0],dn=sn[1],pn=R(un,Q),mn=(0,m.Z)(),fn=s.useState({hover:-1,focus:-1}),xn=(0,i.Z)(fn,2),vn=xn[0],hn=vn.hover,gn=vn.focus,bn=xn[1],yn=pn;-1!==hn&&(yn=hn),-1!==gn&&(yn=gn);var Zn=(0,h.Z)(),wn=Zn.isFocusVisibleRef,jn=Zn.onBlur,Sn=Zn.onFocus,Fn=Zn.ref,zn=s.useState(!1),An=(0,i.Z)(zn,2),Cn=An[0],Ln=An[1],Rn=s.useRef(),kn=(0,g.Z)(Fn,Rn),Vn=(0,g.Z)(kn,e),Mn=function(n){var e=""===n.target.value?null:parseFloat(n.target.value);-1!==hn&&(e=hn),dn(e),K&&K(n,e)},Pn=function(n){0===n.clientX&&0===n.clientY||(bn({hover:-1,focus:-1}),dn(null),K&&parseFloat(n.target.value)===pn&&K(n,null))},Hn=function(n){Sn(n),!0===wn.current&&Ln(!0);var e=parseFloat(n.target.value);bn((function(n){return{hover:n.hover,focus:e}}))},On=function(n){if(-1===hn){jn(n),!1===wn.current&&Ln(!1);bn((function(n){return{hover:n.hover,focus:-1}}))}},En=s.useState(!1),In=(0,i.Z)(En,2),Tn=In[0],Nn=In[1],Bn=(0,c.Z)({},o,{defaultValue:a,disabled:b,emptyIcon:w,emptyLabelText:F,emptyValueFocused:Tn,focusVisible:Cn,getLabelText:C,icon:D,IconContainerComponent:U,max:Y,precision:Q,readOnly:en,size:tn}),Dn=function(n){var e=n.classes,o=n.size,i=n.readOnly,t=n.disabled,r=n.emptyValueFocused,a=n.focusVisible,l={root:["root","size".concat((0,f.Z)(o)),t&&"disabled",a&&"focusVisible",i&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[r&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,p.Z)(l,z,e)}(Bn);return(0,y.jsxs)(k,(0,c.Z)({ref:Vn,onMouseMove:function(n){G&&G(n);var e,o=Rn.current,i=o.getBoundingClientRect(),t=i.right,r=i.left,a=o.firstChild.getBoundingClientRect().width;e="rtl"===mn.direction?(t-n.clientX)/(a*Y):(n.clientX-r)/(a*Y);var l=R(Y*e+Q/2,Q);l=function(n,e,o){return n<e?e:n>o?o:n}(l,Q,Y),bn((function(n){return n.hover===l&&n.focus===l?n:{hover:l,focus:l}})),Ln(!1),W&&hn!==l&&W(n,l)},onMouseLeave:function(n){_&&_(n);bn({hover:-1,focus:-1}),W&&-1!==hn&&W(n,-1)},className:(0,u.Z)(Dn.root,t),ownerState:Bn,role:en?"img":null,"aria-label":en?C(yn):null},an,{children:[Array.from(new Array(Y)).map((function(n,e){var o=e+1,i={classes:Dn,disabled:b,emptyIcon:w,focus:gn,getLabelText:C,highlightSelectedOnly:N,hover:hn,icon:D,IconContainerComponent:U,name:ln,onBlur:On,onChange:Mn,onClick:Pn,onFocus:Hn,ratingValue:yn,ratingValueRounded:pn,readOnly:en,ownerState:Bn},t=o===Math.ceil(yn)&&(-1!==hn||-1!==gn);if(Q<1){var r=Array.from(new Array(1/Q));return(0,y.jsx)(P,{className:(0,u.Z)(Dn.decimal,t&&Dn.iconActive),ownerState:Bn,iconActive:t,children:r.map((function(n,e){var t=R(o-1+(e+1)*Q,Q);return(0,y.jsx)(O,(0,c.Z)({},i,{isActive:!1,itemValue:t,labelProps:{style:r.length-1===e?{}:{width:t===yn?"".concat((e+1)*Q*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),t)}))},o)}return(0,y.jsx)(O,(0,c.Z)({},i,{isActive:t,itemValue:o}),o)})),!en&&!b&&(0,y.jsxs)(V,{className:(0,u.Z)(Dn.label,Dn.labelEmptyValue),ownerState:Bn,children:[(0,y.jsx)("input",{className:Dn.visuallyHidden,value:"",id:"".concat(ln,"-empty"),type:"radio",name:ln,checked:null==pn,onFocus:function(){return Nn(!0)},onBlur:function(){return Nn(!1)},onChange:Mn}),(0,y.jsx)("span",{className:Dn.visuallyHidden,children:F})]})]}))})),B=o(3673);function D(){var n=(0,t.v9)(r.Z.getIsLoggedIn),e=(0,t.v9)(r.Z.getUsername),o=(0,s.useState)(),a=(0,i.Z)(o,2),l=a[0],c=a[1];return(0,y.jsxs)(B.$e,{children:[(0,y.jsx)(B.S3,{children:(0,y.jsx)("h1",{children:"Phonebook"})}),(0,y.jsx)(B.SB,{children:n?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(B.Dx,{children:["Hello ",(0,y.jsx)(B.Le,{children:e})]}),(0,y.jsx)(B.xv,{children:"I hope you enjoy using the app!"}),(0,y.jsx)(N,{name:"simple-controlled",sx:{mb:"15px"},size:"large",value:l,onChange:function(n,e){c(e)}}),(0,y.jsxs)(B.v0,{children:["Any questions or offers? You can contact me on"," ",(0,y.jsx)(B.bn,{href:"https://www.linkedin.com/in/bogdan-myagkiy/",target:"_blank",rel:"noreferrer",children:"Linkedin"})]})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(B.Dx,{children:"Hello! To start using this App please"}),(0,y.jsxs)(B.Oq,{children:[(0,y.jsx)(B.u0,{to:"/login",children:"Login"}),(0,y.jsx)(B.u0,{to:"/register",children:"Register"})]})]})})]})}},3673:function(n,e,o){o.d(e,{$e:function(){return y},Ct:function(){return R},Dx:function(){return j},Fg:function(){return z},Le:function(){return M},Oq:function(){return V},S3:function(){return Z},SB:function(){return C},YK:function(){return L},bn:function(){return A},l0:function(){return w},u0:function(){return k},v0:function(){return F},xv:function(){return S}});var i,t,r,a,l,c,s,u,d,p,m,f,x,v,h=o(168),g=o(7939),b=o(3504),y=g.ZP.div(i||(i=(0,h.Z)(["\n  margin: 30px 10px;\n  border: 1px solid #000;\n  border-radius: 14px;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  box-shadow: 0.5rem 0.5rem 2rem #464545, -0.5rem -0.5rem 2rem #acabab;\n  @media screen and (min-width: 510px) {\n    margin: 30px auto;\n  }\n"]))),Z=g.ZP.div(t||(t=(0,h.Z)(["\n  background-color: #445daf;\n  color: #fff;\n  width: 100%;\n  text-align: center;\n"]))),w=g.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),j=g.ZP.h2(a||(a=(0,h.Z)(["\n  max-width: 300px;\n  text-align: center;\n  font-size: 28px;\n  margin: 0 0 15px;\n"]))),S=g.ZP.p(l||(l=(0,h.Z)(["\n  margin: 0 0 15px;\n  font-size: 18px;\n  font-style: italic;\n"]))),F=g.ZP.p(c||(c=(0,h.Z)(["\n  margin: 0 0 15px;\n  font-size: 22px;\n  max-width: 300px;\n  text-align: center;\n  line-height: 1.34;\n"]))),z=(0,g.ZP)(b.rU)(s||(s=(0,h.Z)(["\n  text-decoration: none;\n  margin-bottom: 15px;\n  color: #0000ff;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),A=g.ZP.a(u||(u=(0,h.Z)(["\n  text-decoration: none;\n  margin-bottom: 15px;\n  color: #0000ff;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),C=g.ZP.div(d||(d=(0,h.Z)(["\n  padding: 30px 0;\n  background-color: #c5d3fc;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),L=g.ZP.div(p||(p=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  margin: 20px auto 50px;\n"]))),R=g.ZP.h2(m||(m=(0,h.Z)(["\n  font-size: 30px;\n  margin: 10px auto 30px;\n"]))),k=(0,g.ZP)(b.rU)(f||(f=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n\n  background-color: transparent;\n  outline: 0;\n  border: 0;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  min-width: 64px;\n  padding: 6px 16px;\n  border-radius: 4px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  color: #fff;\n  background-color: #1976d2;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n\n  width: 150px;\n  height: 50px;\n  background-image: linear-gradient(#323ff1, #1f2df8);\n\n  &:hover,\n  &:active {\n    background-image: linear-gradient(#1221f5, #0818f5);\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n\n  @media screen and (max-width: 370px) {\n    width: 120px;\n  }\n"]))),V=g.ZP.div(x||(x=(0,h.Z)(["\n  margin-top: 30px;\n  display: flex;\n"]))),M=g.ZP.span(v||(v=(0,h.Z)(["\n  color: #3b48ff;\n"])))}}]);
//# sourceMappingURL=598.a7a9a399.chunk.js.map