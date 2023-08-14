import{j as t,a as e,F as a,c,g as i}from"./app-5ec9ec14.js";var s=(l=>(l.PENDING="pending",l.CONFIRMED="confirmed",l.COMPLETED="completed",l.CANCELLED="cancelled",l))(s||{});function h({order:l}){const r=()=>{c.put(route("order.confirm",l.id)).then(()=>{i.reload()})},d=()=>{c.put(route("order.cancel",l.id)).then(()=>{i.reload()})},o=()=>{c.put(route("order.complete",l.id)).then(()=>{i.reload()})};return t("div",{className:"bg-white p-4 rounded-xl shadow space-y-4",children:[e("div",{className:"flex flex-row justify-between space-x-reverse space-x-2",children:e("div",{className:"grow flex flex-col space-y-2 justify-between",children:t("div",{className:"flex flex-col space-y-1",children:[t("h1",{className:"text-lg font-semibold text-gray-800 leading-tight",children:["سفارش شماره ",l.id]}),e("p",{className:"text-sm text-gray-500",children:l.description}),e("div",{className:"flex flex-col space-y-2",children:l.items.map(n=>t("span",{className:"text-sm font-semibold text-gray-800 leading-tight flex items-center justify-between",children:[e("p",{children:n.product.title}),t("span",{className:"text-gray-400",children:[n.quantity,"×"]})]},n.id))})]})})}),t("div",{className:"flex justify-between items-center",children:[t("span",{className:"text-sm font-semibold text-gray-800 leading-tight flex items-center space-x-reverse space-x-1",children:[e("p",{children:l.price.toLocaleString()}),e("span",{className:"text-gray-400",children:"تومان"})]}),{[s.PENDING]:e(a,{children:e("div",{className:"flex space-x-2 space-x-reverse",children:e("button",{onClick:o,className:"bg-green-500 text-white hover:bg-green-700 font-bold py-1 px-2 rounded-lg",children:"تحویل"})})}),[s.CONFIRMED]:e(a,{children:t("div",{className:"flex space-x-2 space-x-reverse",children:[e("button",{onClick:r,className:"bg-green-500 text-white hover:bg-green-700 font-bold py-1 px-2 rounded-lg",children:"تایید"}),e("button",{onClick:d,className:"bg-red-500 text-white hover:bg-red-700 font-bold py-1 px-2 rounded-lg",children:"لغو"})]})}),[s.CANCELLED]:e(a,{children:e("span",{className:"text-red-500",children:"لغو شده"})}),[s.COMPLETED]:e(a,{children:e("span",{className:"text-green-500",children:"تحویل داده شده"})})}[l.status]]})]})}export{h as O,s as a};
