import{j as s,a as e}from"./app-5b73af1b.js";function c({order:t}){return console.log(t),s("div",{className:"bg-white p-4 rounded-xl shadow space-y-4",children:[e("div",{className:"flex flex-row justify-between space-x-reverse space-x-2",children:e("div",{className:"grow flex flex-col space-y-2 justify-between",children:s("div",{className:"flex flex-col space-y-1",children:[s("h1",{className:"text-lg font-semibold text-gray-800 leading-tight",children:["سفارش شماره ",t.id]}),e("p",{className:"text-sm text-gray-500",children:t.description}),e("div",{className:"flex flex-col space-y-2",children:t.items.map(a=>s("span",{className:"text-sm font-semibold text-gray-800 leading-tight flex items-center justify-between",children:[e("p",{children:a.product.title}),s("span",{className:"text-gray-400",children:[a.quantity,"x"]})]},a.id))})]})})}),e("div",{className:"flex justify-between items-center",children:s("span",{className:"text-sm font-semibold text-gray-800 leading-tight flex items-center space-x-reverse space-x-1",children:[e("p",{children:t.price.toLocaleString()}),e("span",{className:"text-gray-400",children:"تومان"})]})})]})}export{c as O};
