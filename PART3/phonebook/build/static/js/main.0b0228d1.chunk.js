(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(13),o=n.n(c),s=n(3),u=n(14),i=n.n(u),l=n(0),a=function(e){var t=e.person,n=e.deletePerson;return Object(l.jsxs)("li",{children:[t.name," ",t.number," ",Object(l.jsx)("button",{onClick:function(){return n(t.id)},children:"delete"})]})},j=function(e){var t=e.persons,n=e.allPersons,r=e.deletePerson;return console.log(t.length),0===t.length?Object(l.jsx)("ul",{children:n.map((function(e,t){return Object(l.jsx)(a,{person:e,deletePerson:r},t)}))}):Object(l.jsx)("ul",{children:t.map((function(e,t){return Object(l.jsx)(a,{person:e,deletePerson:r},t)}))})},b=function(e){var t=e.value,n=e.onChange;return Object(l.jsxs)("div",{children:["filter shown with ",Object(l.jsx)("input",{value:t,onChange:n})]})},h=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([]),u=Object(s.a)(o,2),a=u[0],h=u[1],f=Object(r.useState)(""),d=Object(s.a)(f,2),O=d[0],p=d[1];Object(r.useEffect)((function(){i.a.get("https://restcountries.eu/rest/v2/all").then((function(e){console.log("promise fulfilled"),h(e.data)}))}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{value:O,onChange:function(e){if(p(e.target.value),O){var t=new RegExp(O,"i");c((function(){return a.filter((function(e){return e.name.match(t)}))}))}}}),Object(l.jsx)(j,{countries:n,setCountries:c})]})};o.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0b0228d1.chunk.js.map