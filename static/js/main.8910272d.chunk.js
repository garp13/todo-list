(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),a=n(14),o=n.n(a),s=(n(42),n(53)),r=n(54),l=(n(43),n(44),n(6)),j=n(23),d=n(12),b=(n(13),function(t){var e=t.todo,n=t.deleteTodo;return Object(c.jsxs)(s.a,{className:"todoItem",children:[Object(c.jsx)(r.a,{span:15,children:e.content}),Object(c.jsxs)(r.a,{span:5,className:"C\xf4ng vi\u1ec7c th\u01b0\u1eddng"===e.priority?"todoNormal":"todoHigh",children:[Object(c.jsx)("i",{className:"fa fa-heart"}),e.priority]}),Object(c.jsx)(r.a,{span:4,className:"toolbar",children:Object(c.jsx)("span",{className:"fa fa-times-circle cursorIcon",onClick:function(){return n(e)}})})]})}),h=function(t){var e=t.value,n=t.setCheck,i=t.handleValueChange,a=t.handleOnSubmit;return console.log(e),Object(c.jsx)("div",{className:"todoForm",children:Object(c.jsxs)("form",{onSubmit:a,children:[Object(c.jsxs)(s.a,{children:[Object(c.jsx)(r.a,{span:20,children:Object(c.jsx)("input",{type:"text",value:e.content,onChange:i})}),Object(c.jsx)(r.a,{span:4,children:Object(c.jsx)("button",{type:"primary",onSubmit:a,className:"buttonSubmit",children:"Th\xeam vi\u1ec7c"})})]}),Object(c.jsxs)(s.a,{className:"radioCheck",children:[Object(c.jsxs)(r.a,{span:5,className:"normalRadio",children:[Object(c.jsx)("input",{type:"radio",name:"priority",id:"rNormal",value:"C\xf4ng vi\u1ec7c th\u01b0\u1eddng",checked:"C\xf4ng vi\u1ec7c th\u01b0\u1eddng"===e.priority,onChange:function(){return n("C\xf4ng vi\u1ec7c th\u01b0\u1eddng")}}),Object(c.jsx)("label",{htmlFor:"rNormal",children:" C\xf4ng vi\u1ec7c th\u01b0\u1eddng "})]}),Object(c.jsxs)(r.a,{span:5,offset:1,className:"highRadio",children:[Object(c.jsx)("input",{type:"radio",name:"priority",id:"rHigh",value:"C\xf4ng vi\u1ec7c \u01b0u ti\xean",checked:"C\xf4ng vi\u1ec7c \u01b0u ti\xean"===e.priority,onChange:function(){return n("C\xf4ng vi\u1ec7c \u01b0u ti\xean")}}),Object(c.jsx)("label",{htmlFor:"rHigh",children:" C\xf4ng vi\u1ec7c \u01b0u ti\xean"})]})]})]})})},u="ADD_JOB",O="DELETE_JOB",g=function(t){var e=t.TodoRows;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"headLists",children:"DANH S\xc1CH C\xd4NG VI\u1ec6C"}),e]})},m=function(t){var e=t.mess;return Object(c.jsx)("h1",{className:"messNoti",children:e})};var p=function(t){var e=Object(d.b)(),n=Object(d.c)((function(t){return t.todoLists})),a=Object(i.useState)({display:!1,content:""}),o=Object(j.a)(a,2),s=o[0],r=o[1],p=Object(i.useState)({content:"",priority:"C\xf4ng vi\u1ec7c th\u01b0\u1eddng"}),v=Object(j.a)(p,2),f=v[0],x=v[1],y=function(t){e({type:O,job:t}),r({display:!0,content:"X\xf3a c\xf4ng vi\u1ec7c th\xe0nh c\xf4ng"})};return Object(c.jsxs)("div",{className:"homePage",children:[s.display&&Object(c.jsx)(m,{mess:s.content}),Object(c.jsxs)("div",{className:"todoRow",children:[Object(c.jsx)(h,{value:f,handleOnSubmit:function(t){t.preventDefault(),e({type:u,job:f}),""===f.content?r({display:!0,content:"Th\xeam c\xf4ng vi\u1ec7c kh\xf4ng th\xe0nh c\xf4ng, vui l\xf2ng ki\u1ec3m tra l\u1ea1i"}):r({display:!0,content:"Th\xeam c\xf4ng vi\u1ec7c th\xe0nh c\xf4ng"}),x(Object(l.a)(Object(l.a)({},f),{},{content:""}))},handleValueChange:function(t){""!==t.target.value&&(x(Object(l.a)(Object(l.a)({},f),{},{content:t.target.value})),console.log(t))},setCheck:function(t){x(Object(l.a)(Object(l.a)({},f),{},{priority:t})),console.log(t)}}),Object(c.jsx)(g,{TodoRows:function(t){return t.map((function(t){return Object(c.jsx)(b,{todo:t,deleteTodo:y},t.id)}))}(n)})]})]})};var v=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(s.a,{children:Object(c.jsx)(r.a,{span:16,offset:4,children:Object(c.jsx)(p,{})})})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))},x=n(7),y=n(9),C=JSON.parse(localStorage.getItem("TODOS")),N=C||[],S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:var n=Object(y.a)(t),c=Math.random();return""===e.job.content?t:(n.push({id:c,content:e.job.content,priority:e.job.priority}),localStorage.setItem("TODOS",JSON.stringify(n)),Object(y.a)(n));case O:var i=Object(y.a)(t),a=i.findIndex((function(t){return t.id===e.job.id}));return-1===a?t:(i.splice(a,1),localStorage.setItem("TODOS",JSON.stringify(i)),Object(y.a)(i));default:return Object(y.a)(t)}},T=Object(x.b)({todoLists:S}),k=Object(x.c)(T);o.a.render(Object(c.jsx)(d.a,{store:k,children:Object(c.jsx)(v,{})}),document.getElementById("root")),f()}},[[51,1,2]]]);
//# sourceMappingURL=main.8910272d.chunk.js.map