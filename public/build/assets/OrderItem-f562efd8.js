import{j as r,a as e}from"./app-150935a4.js";function a({order:t}){return console.log(t),r("div",{className:"bg-white p-4 rounded-xl shadow space-y-4",children:[e("div",{className:"flex flex-row justify-between space-x-reverse space-x-2",children:e("div",{className:"grow flex flex-col space-y-2 justify-between",children:r("div",{className:"flex flex-col space-y-1",children:[r("h1",{className:"text-lg font-semibold text-gray-800 leading-tight",children:["سفارش شماره ",t.id]}),e("p",{className:"text-sm text-gray-500",children:t.description}),e("div",{className:"flex flex-col space-y-2",children:t.items.map(s=>r("span",{className:"text-sm font-semibold text-gray-800 leading-tight flex items-center space-x-reverse space-x-1",children:[e("p",{children:s.product.title}),e("span",{className:"text-gray-400",children:s.quantity})]},s.id))})]})})}),r("div",{className:"flex justify-between items-center",children:[r("span",{className:"text-sm font-semibold text-gray-800 leading-tight flex items-center space-x-reverse space-x-1",children:[e("p",{children:t.price.toLocaleString()}),e("span",{className:"text-gray-400",children:"تومان"})]}),r("div",{className:"flex flex-row space-x-reverse space-x-2",children:[e("button",{className:"border border-green-500 text-green-500 hover:bg-green-700 hover:text-white hover:border-green-700 font-bold py-1 px-2 rounded-lg",children:"Done"}),e("button",{className:"border border-green-500 text-green-500 hover:bg-green-700 hover:text-white hover:border-green-700 font-bold py-1 px-2 rounded-lg",children:"Print"}),e("button",{className:"border border-green-500 text-green-500 hover:bg-green-700 hover:text-white hover:border-green-700 font-bold py-1 px-2 rounded-lg",children:"Edit"})]})]})]})}export{a as O};
