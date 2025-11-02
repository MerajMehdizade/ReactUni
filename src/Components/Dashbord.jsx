import profile from '../assets/dashbordProfile.jpg'
import { useState } from "react";
import InformationForm from './InformationForm';

export default function Dashbord() {
    const [formData, setFormData] = useState({
        name: "DefaultUser",
        email: "",
        phoneNumber: "+98"
    });
    const [activeIndex, setActiveIndex] = useState(0);
    const [submitted, setSubmitted] = useState(false);


     const handleEdit = () => {
        setSubmitted(false);
        setActiveIndex(0);
    };
    const handleFormChange = (newData) => {
        setFormData(newData);
    };

    const sidebarItems = [
        {
            title: "ویرایش پروفایل", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>,
            component: <InformationForm
                formData={formData}
                onFormChange={handleFormChange}
                submitted={submitted}
                onSubmit={() => setSubmitted(true)}
                onEdit={() => setSubmitted(false)} />
        },
        {
            title: "کیف پول", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
            </svg>
        },
        {
            title: "سفارش ها", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        },
        {
            title: "علاقه مندی ها", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        },
        {
            title: "پیام ها", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
        },
        {
            title: "آدرس ها", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
        },
        {
            title: "تغییر رمز عبور", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
        },

        {
            title: "خروج", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
            , action: () => {
                window.location.reload();
            }
        },
    ];

    return (
        <>
            <div className="container mx-auto p-5 font-vazir">
                <div className="flex items-center justify-center gap-5 flex-row-reverse">
                    {/* Dashbord Items */}
                    <div className="w-32 md:w-72 h-full border border-gray-300 rounded-2xl shadow-2xs">
                        {/* dashbordProfile */}
                        <div className='hidden md:block relative'>
                            <img className='w-full h-full object-cover' src={profile} alt="" />
                            <div className=" text-2xl font-bold absolute inset-0 flex items-center justify-center bg-white/45 rounded-t-2xl">
                                <span className='text-gray-600'>هوم</span>
                                <h2 className="text-red-500 ">زی</h2>
                            </div>
                        </div>
                        {/* dashbordPersonalInfo */}
                        <div className='flex justify-between items-center p-3'>
                            <div> <svg onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-5 cursor-pointer hidden md:block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                            </div>
                            <div className='flex flex-col items-end gap-1.5'>
                                <h3 className='text-[14px] font-bold'>{formData.name}</h3>
                                <span className='text-[12px] text-gray-600'>{formData.phoneNumber}</span>
                            </div>
                        </div>
                        <div className='p-3 space-y-1.5 flex justify-center flex-col items-center'>

                            {sidebarItems.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        if (item.action) {
                                            item.action();
                                        } else {
                                            setActiveIndex(index);
                                        }
                                    }}
                                    className={`p-3 w-16 justify-center md:w-full h-11 cursor-pointer transition-all rounded-md flex gap-3 text-sm md:justify-end items-center border-b border-b-gray-300
                                    ${activeIndex === index ? "bg-pink-100 text-pink-800" : "text-gray-600 hover:bg-pink-100 hover:text-pink-800"}
                                    `}
                                >
                                    <h4 className='hidden md:block'>{item.title}</h4>
                                    {item.icon}
                                </div>
                            ))}

                        </div>
                    </div>
                    {/* result items */}
                    <div className="w-full h-96 border border-gray-300 rounded-2xl shadow-2xs">
                        {sidebarItems[activeIndex].component}
                    </div>
                </div>
            </div>
        </>
    )
}