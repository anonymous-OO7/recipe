(this.webpackJsonpreciapp=this.webpackJsonpreciapp||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(31),i=n.n(r),s=(n(87),n(54)),o=n.n(s),j=n(69),l=n(11),u=(n(89),n(70)),p=n.n(u),b=n(71),d=n(72),x=n(6),h=n(149),O=n(150),f=n(152),g=n(154),m=n(153),v=n(145),S=n(143),k=n(151),w=n(73),y=n.n(w),C=n(1),F=["expand"],B=Object(x.a)((function(e){e.expand;var t=Object(d.a)(e,F);return Object(C.jsx)(S.a,Object(b.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),I=function(e){var t=e.title,n=e.calories,a=e.image,r=e.ingredients,i=c.a.useState(!1),s=Object(l.a)(i,2),o=s[0],j=s[1];return Object(C.jsx)("div",{children:Object(C.jsxs)(h.a,{sx:{maxWidth:345},children:[Object(C.jsx)(O.a,{title:t,subheader:n}),Object(C.jsx)(f.a,{component:"img",height:"194",image:a,alt:"Paella dish"}),Object(C.jsxs)(m.a,{disableSpacing:!0,children:[Object(C.jsx)("div",{children:"Ingredients"}),Object(C.jsx)(B,{expand:o,onClick:function(){j(!o)},"aria-expanded":o,"aria-label":"show more",children:Object(C.jsx)(y.a,{})})]}),Object(C.jsx)(v.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(C.jsxs)(g.a,{children:[Object(C.jsx)(k.a,{paragraph:!0,children:"Method:"}),Object(C.jsx)(k.a,{paragraph:!0,children:r.map((function(e){return Object(C.jsx)("li",{children:e.text})}))})]})})]})})},P=n(148),E=n(144),L=n(75),D=n.n(L),J=n(147);var M=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),s=i[0],u=i[1],b=Object(a.useState)("chicken"),d=Object(l.a)(b,2),x=d[0],h=d[1];Object(a.useEffect)((function(){console.log("effect runs"),O()}),[x]);var O=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.edamam.com/search?q=".concat(x,"&app_id=").concat("701eb24b","&app_key=").concat("5e76d12363b4e8f3726c2a0f5e8fc58e"));case 2:t=e.sent,console.log(t.data.hits),c(t.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{style:{color:"Brown",backgroundColor:"green",margin:"10px"},children:"Gaurav's Recipe Book"}),Object(C.jsxs)(P.a,{onSubmit:function(e){e.preventDefault(),h(s)},component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:400,margin:"10px auto"},children:[Object(C.jsx)(E.a,{type:"text",value:s,onChange:function(e){u(e.target.value),console.log(e.target.value)},sx:{ml:1,flex:1},placeholder:"Search Recipe",inputProps:{"aria-label":"search recipe"}}),Object(C.jsx)(S.a,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:Object(C.jsx)(D.a,{})})]}),Object(C.jsx)(J.a,{container:!0,children:n.map((function(e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(J.a,{item:!0,xs:2}),Object(C.jsx)(I,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)]})}))})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(M,{})}),document.getElementById("root")),R()},87:function(e,t,n){},89:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.e17623ab.chunk.js.map