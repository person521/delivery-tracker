(this["webpackJsonpproject-frontend"]=this["webpackJsonpproject-frontend"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),i=a(1),d=(a(9),function(e){var t=e.address,a=e.total,n=e.payment,r=e.handleClick,c=e.handleAddress,i=e.handleTotal,d=e.handlePayment,s=e.handleTip;return l.a.createElement("div",{className:"center"},l.a.createElement("div",null,l.a.createElement("label",null,"Address: "),l.a.createElement("input",{value:t,onChange:c})),l.a.createElement("div",null,l.a.createElement("label",null,"Total: "),l.a.createElement("input",{placeholder:"$0.00",value:a,onChange:i})),l.a.createElement("div",null,l.a.createElement("label",null,"Payment/Tip: "),l.a.createElement("input",{placeholder:"$0.00",value:n,onChange:d})),l.a.createElement("button",{className:"add",type:"submit",onClick:r},l.a.createElement("b",null,"Add Delivery")),l.a.createElement("button",{className:"add",type:"submit",onClick:s},l.a.createElement("b",null,"Add Tip")))}),s=function(e){var t=e.deliveries;return l.a.createElement("ol",null,t.map((function(e){return l.a.createElement("li",{className:"list",key:e.id},l.a.createElement("div",{className:"top"},l.a.createElement("b",null,"Address: ",e.address))," ",l.a.createElement("div",{className:"center"},"Total: $",e.total)," ",l.a.createElement("div",{className:"center"},"Payment: $",e.payment))})))},o=function(e){var t=e.deliveries,a=0+e.tips;return t.map((function(e){return a+=parseFloat(e.payment)-parseFloat(e.total)})),l.a.createElement("div",{className:"center"},l.a.createElement("h2",null,"$",a.toFixed(2)))},m=function(e){var t=e.method,a=e.handleMethod,n=e.address,r=e.total,c=e.payment,i=e.handleClick,m=e.handleAddress,u=e.handleTotal,v=e.handlePayment,p=e.handleTip,h=e.deliveries,E=e.tips;return t?l.a.createElement("div",{className:"div-method"},l.a.createElement("button",{onClick:a,value:"Ticket",className:"method-selected"},"Ticket"),l.a.createElement("button",{onClick:a,value:"Previous Deliveries",className:"method"},"Previous Deliveries"),l.a.createElement(d,{address:n,total:r,payment:c,handleClick:i,handleAddress:m,handleTotal:u,handlePayment:v,handleTip:p}),l.a.createElement(o,{deliveries:h,tips:E})):l.a.createElement("div",{className:"div-method"},l.a.createElement("button",{onClick:a,value:"Ticket",className:"method"},"Ticket"),l.a.createElement("button",{onClick:a,value:"Previous Deliveries",className:"method-selected"},"Previous Deliveries"),l.a.createElement(s,{deliveries:h}))},u=0,v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),d=Object(i.a)(c,2),s=d[0],o=d[1],v=Object(n.useState)(""),p=Object(i.a)(v,2),h=p[0],E=p[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),y=f[0],k=f[1],N=Object(n.useState)(!0),T=Object(i.a)(N,2),j=T[0],C=T[1],g=Object(n.useState)(0),O=Object(i.a)(g,2),P=O[0],A=O[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"banner"},l.a.createElement("h1",null,"Delivery Tracker")),l.a.createElement(m,{handleMethod:function(e){j&&"Ticket"===e.target.value||!1===j&&"Previous Deliveries"===e.target.value||C(!j)},method:j,address:s,total:h,payment:y,handleClick:function(e){if(!Number.isInteger(parseInt(h))||!Number.isInteger(parseInt(y)))return window.alert("Enter a valid input for total and payment"),E(""),void k("");var t={id:u,address:s,total:h,payment:y};r(a.concat(t)),o(""),E(""),k(""),u++},handleAddress:function(e){o(e.target.value)},handleTotal:function(e){E(e.target.value)},handlePayment:function(e){k(e.target.value)},handleTip:function(e){if(!Number.isInteger(parseInt(y)))return window.alert("Enter a valid input for tip"),void k("");var t=P+parseFloat(y);A(t),k("")},deliveries:a,tips:P}))};c.a.render(l.a.createElement(v,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.6ab04fe2.chunk.js.map