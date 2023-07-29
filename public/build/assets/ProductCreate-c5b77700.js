import{W as x,r as d,j as l,a as e,b as f}from"./app-5b73af1b.js";import{A as y}from"./AuthenticatedLayout-7a8e63e4.js";function k({auth:m,categories:p}){const o=x({title:"",description:"",price:"",category_id:"",image:""}),[a,s]=d.useState({title:"",description:"",price:"",category_id:"",image:""}),[N,c]=d.useState(!1),i=t=>{const r=t.target.name,n=t.target.value;o.setData(r,n),s({...a,[r]:""})},u=t=>{t.preventDefault(),c(!0),o.post(route("products.store"),{preserveScroll:!0,onSuccess:()=>{c(!1)},onError:r=>{c(!1),s(r)}})},{data:h,setData:g}=o;return l(y,{user:m.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"محصول جدید"}),children:[e(f,{title:"New Product"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 px-4",children:l("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:u,children:[l("div",{className:"mb-4",children:[e("p",{className:"block text-gray-700 text-sm font-bold mb-2",children:"تصویر"}),e("input",{className:"hidden",id:"image",type:"file",onChange:t=>{const r=t.target.files[0];g({...h,image:r});const n=new FileReader;n.onload=b=>{document.getElementById("preview").src=b.target.result},n.readAsDataURL(r)}}),e("label",{htmlFor:"image",className:"inline-block w-full text-center bg-transparent hover:bg-green-700 hover:text-white text-green-500 border border-green-500 font-bold py-2 px-4 rounded cursor-pointer",children:"انتخاب تصویر"})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name",children:"پیش نمایش"}),e("img",{src:"/images/no-image.jpg",alt:"preview",className:"w-32 h-32 object-contain",id:"preview"})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"title",children:"عنوان"}),e("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"title",type:"text",placeholder:"عنوان",name:"title",onChange:i}),a.title&&e("p",{className:"text-red-500 text-xs italic",children:a.title})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"description",children:"توضیحات"}),e("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"description",placeholder:"توضیحات",name:"description",onChange:i}),a.description&&e("p",{className:"text-red-500 text-xs italic",children:a.description})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"price",children:"قیمت"}),e("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"price",type:"number",placeholder:"قیمت",name:"price",inputMode:"numeric",onChange:i}),a.price&&e("p",{className:"text-red-500 text-xs italic",children:a.price})]}),l("div",{className:"mb-4",children:[e("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"category",children:"دسته بندی"}),l("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"category",name:"category_id",onChange:i,children:[e("option",{value:"",children:"انتخاب کنید"}),p.map(t=>e("option",{value:t.id,children:t.title},t.id))]}),a.category_id&&e("p",{className:"text-red-500 text-xs italic",children:a.category_id})]}),e("div",{className:"flex items-center justify-between",children:e("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",onClick:()=>{s({title:"",description:"",price:"",category_id:"",image:""})},children:"ذخیره"})})]})})})]})}export{k as default};
