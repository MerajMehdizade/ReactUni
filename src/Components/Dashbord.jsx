import { useEffect, useState } from "react";
import InformationForm from "./InformationForm";
import profile from "../assets/dashbordProfile.jpg";
import OrdersPage from "./OrdersPage";

export default function Dashbord() {
  const [formData, setFormData] = useState({
    first_name: "",
    birthdate: "",
    gender: "",
    national_id: "",
    email: "",
    phoneNumber: ""
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ---------- Load saved data ----------
  useEffect(() => {
    const savedData = localStorage.getItem("userInfo");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setSubmitted(true);
    }
  }, []);

  // ---------- Save data ----------
  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  const handleSubmit = () => {
    localStorage.setItem("userInfo", JSON.stringify(formData));
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
    setActiveIndex(0);
  };

  const sidebarItems = [
    {
      title: "ویرایش پروفایل",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      component: (
        <InformationForm
          formData={formData}
          onFormChange={handleFormChange}
          submitted={submitted}
          onSubmit={handleSubmit}
          onEdit={handleEdit}
        />
      ),
    },
    {
      title: "کیف پول",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
        </svg>
      ),
    },
    {
      title: "سفارش ها",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      ),
      component: (<OrdersPage />)
    },
    {
      title: "علاقه‌مندی‌ها",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
    },
    {
      title: "پیام‌ها",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
      ),
    },
    {
      title: "آدرس‌ها",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
    {
      title: "تغییر رمز عبور",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
    },
    {
      title: "خروج",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
        </svg>
      ),
      action: () => {
        localStorage.removeItem("userInfo");
        window.location.reload();
      },
    },
  ];

  return (
    <div className="container mx-auto px-5 md:p-5 font-vazir">
      {/* موبایل منو */}
      <div className="md:hidden flex justify-end my-5">
        <div className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>

      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/30 md:hidden z-40"></div>
      )}

      <div className="flex place-items-start  gap-5 flex-row-reverse">
        {/* سایدبار */}
        <div
          className={`w-64 md:w-72 fixed md:static top-0 right-0 h-full bg-white border border-gray-300 rounded-l-2xl shadow-md transform transition-transform duration-300 z-50
          ${menuOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0 md:rounded-2xl`}
        >
          {/* عکس بالا */}
          <div className="relative">
            <img className="w-full h-full object-cover" src={profile} alt="" />
            <div className="text-2xl font-bold absolute inset-0 flex items-center justify-center bg-white/45 rounded-t-2xl">
              <span className="text-gray-600">هوم</span>
              <h2 className="text-red-500">زی</h2>
            </div>
          </div>

          {/* اطلاعات پروفایل */}
          <div className="flex justify-between items-center p-3">
            <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <svg onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-5 cursor-pointer hidden md:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <h3 className="text-[14px] font-bold">{formData.first_name || "کاربر جدید"}</h3>
              <span className="text-[12px] text-gray-600">{formData.phoneNumber || "+98..."}</span>
            </div>
          </div>

          {/* آیتم‌های سایدبار */}
          <div className="p-3 space-y-1.5 flex justify-center flex-col items-center">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (item.action) item.action();
                  else setActiveIndex(index);
                  setMenuOpen(false);
                }}
                className={`p-3 w-full h-11 cursor-pointer transition-all rounded-md flex gap-3 text-sm justify-end items-center border-b border-b-gray-300
                ${activeIndex === index ? "bg-pink-100 text-pink-800" : "text-gray-600 hover:bg-pink-100 hover:text-pink-800"}`}
              >
                <h4>{item.title}</h4>
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* بخش محتوای سمت چپ */}
          {sidebarItems[activeIndex].component}

      </div>
    </div>
  );
}
