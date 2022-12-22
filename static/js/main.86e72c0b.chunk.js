(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(5),r=(n(21),n(22),n(2)),s=n(6),j=n.n(s),i=n(0),l=function(e){var t=e.to,n=e.text;return Object(i.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:n})},b=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home"}),Object(i.jsx)(l,{to:"/people",text:"People"})]})})})},o=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},h=n(8),d=n(9),x=n(12),u=n(4),O=n(1),m=(n(24),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=function(e){var t=e.slug,n=e.sex,c=e.name;return Object(i.jsx)(a.b,{to:"/people/".concat(t),className:j()({"has-text-danger":"f"===n}),children:c})},v=function(e){var t=e.person,n=t.slug,c=t.name,a=t.sex,s=t.born,j=t.died,l=t.motherName,b=t.mother,o=t.fatherName,h=t.father,d=Object(r.h)().slugParam,x=function(e,t){return t?Object(i.jsx)(f,{slug:t.slug,sex:t.sex,name:t.name}):e||"-"};return Object(i.jsxs)("tr",{"data-cy":"person",className:d===n?"has-background-warning":"",children:[Object(i.jsx)("td",{children:Object(i.jsx)(f,{slug:n,sex:a,name:c})}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:j}),Object(i.jsx)("td",{children:x(l,b)}),Object(i.jsx)("td",{children:x(o,h)})]})},g=function(e){var t=e.people;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(v,{person:e},e.slug)}))})]})},N=function(){var e=Object(O.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(O.useState)(!1),r=Object(u.a)(a,2),s=r[0],j=r[1],l=Object(O.useState)(!1),b=Object(u.a)(l,2),o=b[0],f=b[1],v=function(){var e=Object(x.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,p();case 4:t=e.sent,c(t.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f(!0);case 11:j(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){v()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:s?Object(i.jsx)(m,{}):Object(i.jsxs)(i.Fragment,{children:[o&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!o&&!n.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!o&&n.length&&Object(i.jsx)(g,{people:n})]})})})]})},y=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},w=(n(25),function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(b,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(r.d,{children:[Object(i.jsxs)(r.b,{path:"/",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(o,{})}),Object(i.jsx)(r.b,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})})]}),Object(i.jsxs)(r.b,{path:"/people",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(N,{})}),Object(i.jsx)(r.b,{path:":slugParam",element:Object(i.jsx)(N,{})})]}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(y,{})})]})})})]})});Object(c.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(w,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.86e72c0b.chunk.js.map