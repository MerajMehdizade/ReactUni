import { useState } from "react";
import Favorite1 from "../assets/image-1.jpg"
import Favorite2 from "../assets/image-2.jpg"
import Favorite3 from "../assets/image-3.jpg"
import Favorite4 from "../assets/image-4.jpg"
export default function Favorites() {
const [favorites, setFavorites] = useState([
{
id: 1,
category: "ترند",
date: "1402/07/26",
title: "همایش بین‌المللی طراحی وب",
img: Favorite2,
},
{
id: 2,
category: "جدید",
date: "1402/08/05",
title: "کتابچه راهنمای UX برای مبتدی‌ها",
img: Favorite1,
},
{
id: 3,
category: "ویژه",
date: "1402/07/30",
title: "کارگاه عکاسی حرفه‌ای با موبایل",
img: Favorite3,
},
{
id: 4,
category: "محبوب",
date: "1402/06/15",
title: "سمینار بازاریابی دیجیتال در 1402",
img: Favorite4,
},
]);
const removefavorites = (id) => {
setFavorites(prev => prev.filter(item => item.id !== id));
};

return (
<>
<div className="w-full h-full space-y-4 p-3" dir="rtl" >
<div className="w-full h-full border border-gray-300 rounded-2xl shadow-md px-5 py-4">
<div className="border-b border-b-gray-400  flex items-center  space-y-4">
<div className="flex items-center gap-2 my-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
<h4>علاقه‌مندی‌ها</h4>
</div>
</div>
<div className="my-5 flex flex-wrap justify-around items-center flex-col md:flex-row">
{favorites.length > 0 ? (
favorites.map((favorite) => (
<>
<div className="bg-white max-w-[330px] border border-gray-200 rounded-lg shadow-sm overflow-hidden md:w-1/2 mb-4" key={favorite.id}>
<a href="#">
<img className="w-full h-full object-contain" src={favorite.img} alt="" />
</a>

<div className="p-6 text-center">
<div className="flex items-center gap-2 justify-center">
    <span className="inline-flex items-center gap-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium px-2 py-0.5 rounded-sm">
        <svg className="w-3 h-3 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z" />
        </svg>
        {favorite.category}
    </span>
    <span className="inline-flex items-center gap-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium px-2 py-0.5 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>

        {favorite.date}
    </span>
</div>

<a href="#" className="block">
    <h5 className="mt-3 mb-6 text-sm md:text-xl font-semibold tracking-tight text-gray-900">
        {favorite.title}
    </h5>
</a>
<div className="flex items-center justify-between">
    <button href="" className="inline-flex items-center text-white bg-indigo-600 border border-transparent hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 shadow font-medium rounded-lg px-4 py-2.5 focus:outline-none gap-1 text-[12px] md:text-sm">
        بیشتر
        <svg className="w-4 h-4 ml-1 rtl:rotate-180 -mr-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
        </svg>
    </button>
    <button
        className="flex gap-2 cursor-pointer text-red-600 hover:text-red-700 items-center"
        onClick={() => removefavorites(favorite.id)}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-700 cursor-pointer hover:text-red-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
    </button>
</div>
</div>
</div>
</>
))
) : (
<>
<div>empty</div>
</>
)}


</div>
</div>
</div>
</>
)
}
