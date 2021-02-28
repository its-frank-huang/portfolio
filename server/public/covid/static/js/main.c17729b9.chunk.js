(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{181:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(62),o=a.n(c),u=(a(76),a(7)),l=a.n(u),i=a(12),s=a(6),m=(a(78),a(63)),d=a.n(m),f=(a(79),a(206)),h=a(201),p=a(202),v=a(15),b=a.n(v);var E=function(e){var t=e.indicateData,a=t.NewConfirmed,r=t.TotalConfirmed,c=t.NewDeaths,o=t.TotalDeaths,u=t.NewRecovered,l=t.TotalRecovered,i=t.date,s=e.currentCountry;return n.a.createElement("div",{className:"DataIndicator"},n.a.createElement(f.a,{className:"confirmed"},n.a.createElement(h.a,null,n.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},"\u786e\u8bca"),n.a.createElement(p.a,{variant:"h4"},n.a.createElement(b.a,{start:0,end:r,duration:2,separator:",",gutterBottom:!0})),n.a.createElement(p.a,{color:"textSecondary"},"\u65b0\u589e"),n.a.createElement(p.a,{variant:"h5"},n.a.createElement(b.a,{start:0,end:a,duration:2,separator:","})),n.a.createElement(p.a,{color:"textSecondary"},new Date(i).toLocaleDateString()),n.a.createElement(p.a,null,s||"\u5168\u7403","\u7684\u65b0\u51a0\u75c5\u6bd2\u786e\u8bca\u6570\u91cf"))),n.a.createElement(f.a,{className:"recoverd"},n.a.createElement(h.a,null,n.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},"\u5eb7\u590d"),n.a.createElement(p.a,{variant:"h4"},n.a.createElement(b.a,{start:0,end:l,duration:2,separator:","})),n.a.createElement(p.a,{color:"textSecondary"},"\u65b0\u589e"),n.a.createElement(p.a,{variant:"h5"},n.a.createElement(b.a,{start:0,end:u,duration:2,separator:","})),n.a.createElement(p.a,{color:"textSecondary"},new Date(i).toLocaleDateString()),n.a.createElement(p.a,null,s||"\u5168\u7403","\u7684\u65b0\u51a0\u75c5\u6bd2\u5eb7\u590d\u6570\u91cf"))),n.a.createElement(f.a,{className:"death"},n.a.createElement(h.a,null,n.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},"\u6b7b\u4ea1"),n.a.createElement(p.a,{variant:"h4"},n.a.createElement(b.a,{start:0,end:o,duration:2,separator:","})),n.a.createElement(p.a,{color:"textSecondary"},"\u65b0\u589e"),n.a.createElement(p.a,{variant:"h5"},n.a.createElement(b.a,{start:0,end:c,duration:2,separator:","})),n.a.createElement(p.a,{color:"textSecondary"},new Date(i).toLocaleDateString()),n.a.createElement(p.a,null,s||"\u5168\u7403","\u7684\u65b0\u51a0\u75c5\u6bd2\u6b7b\u4ea1\u6570\u91cf"))))},g=(a(86),a(207)),j=a(205);var w=function(e){var t=e.countries,a=e.changeCountry,c=Object(r.useState)("global"),o=Object(s.a)(c,2),u=o[0],l=o[1];return n.a.createElement("div",{className:"CountryPicker"},n.a.createElement(g.a,{style:{width:"100%"}},n.a.createElement(j.a,{onChange:function(e){return a(e.target.value,l)},value:u},n.a.createElement("option",{value:"global"},"\u5168\u7403"),t.map((function(e){var t=e.name,a=e.slug;return n.a.createElement("option",{key:a,value:a},t)})))))},y=(a(87),a(68));var O=function(e){var t=e.data,a=Object(r.useState)([]),c=Object(s.a)(a,2),o=c[0],u=c[1],l=Object(r.useState)([]),i=Object(s.a)(l,2),m=i[0],d=i[1],f=Object(r.useState)([]),h=Object(s.a)(f,2),p=h[0],v=h[1],b=Object(r.useState)([]),E=Object(s.a)(b,2),g=E[0],j=E[1];return Object(r.useEffect)((function(){var e=[],a=[],r=[],n=[];t.forEach((function(t){var c=t.date,o=t.Confirmed,u=t.Recovered,l=t.Deaths;e.push(new Date(c).toLocaleDateString().slice(0,-5)),a.push(o),r.push(u),n.push(l)})),u(e),d(a),v(r),j(n)}),[t]),n.a.createElement("div",{className:"Chart"},n.a.createElement(y.a,{data:{labels:o,datasets:[{label:"\u786e\u8bca",fill:!0,data:m,backgroundColor:"rgba(0,0,255,.2)"},{label:"\u5eb7\u590d",fill:!0,data:p,backgroundColor:"rgba(0,255,0,.2)"},{label:"\u6b7b\u4ea1",fill:!0,data:g,backgroundColor:"rgba(255,0,0,.2)"}]}}))},x=a(70),D=a(203),C=a(204),S=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/countries").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{name:e.Country,slug:e.Slug}})).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){return{NewConfirmed:e.Global.NewConfirmed,TotalConfirmed:e.Global.TotalConfirmed,NewDeaths:e.Global.NewDeaths,TotalDeaths:e.Global.TotalDeaths,NewRecovered:e.Global.NewRecovered,TotalRecovered:e.Global.TotalRecovered,date:e.Date}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/total/country/".concat(t)).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{Confirmed:e.Confirmed,Deaths:e.Deaths,Recovered:e.Recovered,date:e.Date}}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api/daily").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{Confirmed:e.totalConfirmed,Recovered:e.totalRecovered,Deaths:e.deaths.total,date:e.reportDate}}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=Object(x.a)({typography:{fontFamily:"JGH",fontSize:16}});var B=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)([]),u=Object(s.a)(o,2),m=u[0],f=u[1],h=Object(r.useState)([]),p=Object(s.a)(h,2),v=p[0],b=p[1],g=Object(r.useState)([]),j=Object(s.a)(g,2),y=j[0],x=j[1],B=Object(r.useState)({}),G=Object(s.a)(B,2),L=G[0],J=G[1],F=Object(r.useState)({}),I=Object(s.a)(F,2),P=I[0],z=I[1];Object(r.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var t,a,r,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([S(),N(),R()]);case 2:t=e.sent,a=Object(s.a)(t,3),r=a[0],n=a[1],c=a[2],x(r),J(n),z(n),b(c),f(c);case 12:case"end":return e.stop()}}),e)})))()}),[]);var A=function(e){e("global"),c(""),z(L),f(v)},H=function(){var e=Object(i.a)(l.a.mark((function e(t,a){var r,n,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("global"!==t){e.next=2;break}return e.abrupt("return",A(a));case 2:return e.next=4,k(t);case 4:if(!((r=e.sent).length<1)){e.next=8;break}return A(a),e.abrupt("return",alert("\u6b64\u56fd\u5bb6\u6682\u65e0\u6570\u636e\u3002"));case 8:f(r),n=y.find((function(e){return e.slug===t})),c(n.name),a(n.slug),o=r[r.length-1],u=r[r.length-2],z({NewConfirmed:o.Confirmed-u.Confirmed,TotalConfirmed:o.Confirmed,NewDeaths:o.Deaths-u.Deaths,TotalDeaths:o.Deaths,NewRecovered:o.Recovered-u.Recovered,TotalRecovered:o.Recovered,date:o.date});case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return n.a.createElement(D.a,{theme:T},n.a.createElement("div",{className:"App"},P.NewConfirmed?n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:d.a,alt:"covid-19"}),n.a.createElement(E,{indicateData:P,currentCountry:a}),n.a.createElement(w,{countries:y,changeCountry:H}),n.a.createElement(O,{data:m})):n.a.createElement("div",{className:"skeleton-wrap"},n.a.createElement(C.a,{variant:"rect",width:"100%",height:"150px",style:{margin:"1rem 0"}}),n.a.createElement("div",{className:"cards",style:{marginBottom:"1rem"}},n.a.createElement(C.a,{variant:"rect",height:"200px"}),n.a.createElement(C.a,{variant:"rect",height:"200px"}),n.a.createElement(C.a,{variant:"rect",height:"200px"})),n.a.createElement(C.a,{variant:"rect",height:"50px",style:{marginBottom:"1rem"}}),n.a.createElement(C.a,{variant:"rect",height:"500px"}))))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),document.getElementById("root"))},63:function(e,t,a){e.exports=a.p+"static/media/covid-19.f88f6468.png"},71:function(e,t,a){e.exports=a(181)},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.c17729b9.chunk.js.map