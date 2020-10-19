(this["webpackJsonpproject-frontend"]=this["webpackJsonpproject-frontend"]||[]).push([[0],{15:function(e,t,a){e.exports=a(47)},20:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),d=a.n(r),c=a(4),i=a(2),s=(a(20),a(3)),u=a.n(s),o="/api/deliveries",m=function(){return u.a.get(o).then((function(e){return e.data}))},h=function(e){return u.a.post(o,e).then((function(e){return e.data}))},p=function(e,t){return u.a.put("".concat(o,"/").concat(e),t).then((function(e){return e.data}))},v=function(e){return u.a.delete("".concat(o,"/").concat(e)).then((function(e){return e.data}))},f=function(e){return u.a.get("/api/predictions",{params:{address:e.address,sessiontoken:e.sessiontoken}}).then((function(e){return e.data}))},E=(a(38),function(e){var t=e.address,a=e.total,n=e.payment,r=e.handleAddress,d=e.handleTotal,c=e.handlePayment;return l.a.createElement("div",{className:"center"},l.a.createElement("div",null,l.a.createElement("label",null,"Address: "),l.a.createElement("input",{value:t,onChange:r})),l.a.createElement("div",null,l.a.createElement("label",null,"Total: "),l.a.createElement("input",{placeholder:"$0.00",value:a,onChange:d})),l.a.createElement("div",null,l.a.createElement("label",null,"Payment/Tip: "),l.a.createElement("input",{placeholder:"$0.00",value:n,onChange:c})))}),b=function(e){var t=e.handleClick,a=e.handleTip;return l.a.createElement("div",{className:"center"},l.a.createElement("button",{className:"add",type:"submit",onClick:t},l.a.createElement("b",null,"Add Delivery")),l.a.createElement("button",{className:"add",type:"submit",onClick:a},l.a.createElement("b",null,"Add Tip")))},y=function(e){var t=e.deliveries,a=e.handleDelete,n=e.handleUpdate,r=e.handleSave,d=e.address,c=e.total,i=e.payment,s=e.handleAddress,u=e.handlePayment,o=e.handleTotal;return l.a.createElement("ol",null,t.map((function(e){return l.a.createElement("li",{className:"list",key:e.id},l.a.createElement("div",{className:"top"},l.a.createElement("b",null,"Address: ",e.address))," ",l.a.createElement("div",{className:"center"},"Total: $",e.total)," ",l.a.createElement("div",{className:"center"},"Payment: $",e.payment),l.a.createElement("button",{className:"add",value:e.id,onClick:n},l.a.createElement("b",null,"Update")),l.a.createElement("button",{className:"delete",value:e.id,onClick:a},l.a.createElement("b",null,"Delete")),l.a.createElement(k,{showUpdate:e.update,handleUpdate:n,id:e.id,delivery:e,handleSave:r,address:d,total:c,payment:i,handleAddress:s,handleTotal:o,handlePayment:u}))})))},T=function(e){var t=e.deliveries,a=0+e.tips;return t.map((function(e){return a+=parseFloat(e.payment)-parseFloat(e.total)})),l.a.createElement("div",{className:"center"},l.a.createElement("h2",null,"$",a.toFixed(2)))},j=function(e){var t=e.method,a=e.handleMethod,n=e.address,r=e.total,d=e.payment,c=e.handleClick,i=e.handleAddress,s=e.handleTotal,u=e.handlePayment,o=e.handleTip,m=e.deliveries,h=e.tips,p=e.handleDelete,v=e.handleUpdate,f=e.handleSave;return t?l.a.createElement("div",{className:"div-method"},l.a.createElement("button",{onClick:a,value:"Ticket",className:"method-selected"},"Ticket"),l.a.createElement("button",{onClick:a,value:"Previous Deliveries",className:"method"},"Previous Deliveries"),l.a.createElement(E,{address:n,total:r,payment:d,handleClick:c,handleAddress:i,handleTotal:s,handlePayment:u}),l.a.createElement(b,{handleClick:c,handleTip:o}),l.a.createElement(T,{deliveries:m,tips:h})):l.a.createElement("div",{className:"div-method"},l.a.createElement("button",{onClick:a,value:"Ticket",className:"method"},"Ticket"),l.a.createElement("button",{onClick:a,value:"Previous Deliveries",className:"method-selected"},"Previous Deliveries"),l.a.createElement(y,{address:n,total:r,payment:d,handleAddress:i,handleTotal:s,handlePayment:u,deliveries:m,handleDelete:p,handleUpdate:v,handleSave:f}))},k=function(e){var t=e.showUpdate,a=(e.handleUpdate,e.id),n=e.address,r=e.total,d=e.payment,c=e.handleAddress,i=e.handleTotal,s=e.handlePayment,u=e.delivery,o=e.handleSave;return t?l.a.createElement("div",{className:"center"},l.a.createElement(E,{address:n,total:r,payment:d,handleAddress:c,handleTotal:i,handlePayment:s,delivery:u}),l.a.createElement("div",null,l.a.createElement("button",{className:"add",type:"submit",onClick:o,value:a},"Save"))):null},N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],d=Object(n.useState)(""),s=Object(i.a)(d,2),u=s[0],o=s[1],E=Object(n.useState)(""),b=Object(i.a)(E,2),y=b[0],T=b[1],k=Object(n.useState)(""),N=Object(i.a)(k,2),O=N[0],g=N[1],C=Object(n.useState)(!0),S=Object(i.a)(C,2),P=S[0],w=S[1],A=Object(n.useState)(0),I=Object(i.a)(A,2),D=I[0],U=I[1],$=Object(n.useState)(!1),F=Object(i.a)($,2),M=F[0],x=F[1],J=Object(n.useState)(!1),B=Object(i.a)(J,2),q=B[0],z=B[1],G=Object(n.useState)([]),H=Object(i.a)(G,2),K=H[0],L=H[1],Q=Object(n.useState)(parseInt(1e7*Math.random())),R=Object(i.a)(Q,2),V=R[0],W=R[1];Object(n.useEffect)((function(){m().then((function(e){r(e)}))}),[q]),Object(n.useEffect)((function(){var e={address:u,sessiontoken:V};u.length>0&&f(e).then((function(e){L(e.predictions.map((function(e){return e.description}))),console.log(K)}))}),[u]);return l.a.createElement("div",null,l.a.createElement("div",{className:"banner"},l.a.createElement("h1",null,"Delivery Tracker")),l.a.createElement(j,{handleMethod:function(e){P&&"Ticket"===e.target.value||!1===P&&"Previous Deliveries"===e.target.value||(w(!P),o(""),T(""),g(""))},method:P,address:u,total:y,payment:O,handleClick:function(e){if(!Number.isInteger(parseInt(y))||!Number.isInteger(parseInt(O)))return window.alert("Enter a valid input for total and payment"),T(""),void g("");h({address:u,total:y,payment:O,update:!1}).then((function(e){r(a.concat(e)),o(""),T(""),g(""),W(parseInt(1e7*Math.random()))}))},handleAddress:function(e){o(e.target.value)},handleTotal:function(e){T(e.target.value)},handlePayment:function(e){g(e.target.value)},handleTip:function(e){if(!Number.isInteger(parseInt(O)))return window.alert("Enter a valid input for tip"),void g("");var t=D+parseFloat(O);U(t),g("")},deliveries:a,tips:D,handleDelete:function(e){var t=e.currentTarget.value;window.confirm("Are you sure you want to delete this delivery?")&&v(t).then((function(){r(a.filter((function(e){return e.id!==t})))}))},handleUpdate:function(e){var t=e.currentTarget.value;a.map((function(e){return e.id!==t?e.update=!1:e.update=!e.update})),x(!M),o(""),T(""),g("")},update:M,handleSave:function(e){if(!Number.isInteger(parseInt(y))||!Number.isInteger(parseInt(O)))return window.alert("Enter a valid input for total and payment"),T(""),void g("");var t=e.currentTarget.value,n=a.find((function(e){return e.id===t}));n.update=!n.update;var l=Object(c.a)(Object(c.a)({},n),{},{address:u,total:y,payment:O});p(t,l).then((function(e){r(a.map((function(a){return a.id!==t?a:e}))),z(!q)})).catch((function(e){console.log("There was an error")})),o(""),T(""),g("")}}))};d.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b786682e.chunk.js.map