import{j as t,a as e,b as l,d as r}from"./app-7772fe08.js";import{A as d}from"./AuthenticatedLayout-257cdbb5.js";import{O as m}from"./OrderItem-30a9830a.js";function x({auth:s,orders:i}){return t(d,{user:s.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"سفارشات"}),children:[e(l,{title:"سفارشات"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t("div",{className:"px-4 mt-4",children:[t("div",{className:"flex justify-between",children:[e("h1",{className:"text-2xl font-semibold text-gray-800 leading-tight",children:"سفارشات"}),e(r,{href:route("order.history"),className:"bg-pink-500 text-white hover:bg-pink-700 font-bold py-1 px-2 rounded-lg",children:"تاریخچه سفارشات"})]}),e("div",{className:"flex flex-col mt-6 space-y-2",children:i.map(a=>e(m,{order:a},a.id))})]})})})]})}export{x as default};
