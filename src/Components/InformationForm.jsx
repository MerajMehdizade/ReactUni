import { useEffect, useState } from "react";

export default function InformationForm({ formData, onFormChange, submitted, onSubmit, onEdit }) {
  const [localData, setLocalData] = useState(formData);

  useEffect(() => {
    setLocalData(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...localData, [name]: value };
    setLocalData(updatedData);
    onFormChange(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <div className="w-full h-full space-y-4 p-3" dir="rtl" >
        <div className="border border-gray-300 rounded-2xl shadow-md">
          <div className="p-4 w-full" dir="rtl">
            {!submitted && (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* ردیف اول */}
                <div className="grid md:grid-cols-2 space-y-2 md:gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="first_name" className="mb-1 text-sm font-medium text-gray-900">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      value={localData.first_name || ""}
                      onChange={handleChange}
                      placeholder="نام و نام خانوادگی"
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="birthdate" className="mb-1 text-sm font-medium text-gray-900">
                      تاریخ تولد
                    </label>
                    <input
                      type="date"
                      name="birthdate"
                      id="birthdate"
                      value={localData.birthdate || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      required
                    />
                  </div>
                </div>

                {/* ردیف دوم */}
                <div className="grid md:grid-cols-2 space-y-2 md:gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="gender" className="mb-1 text-sm font-medium text-gray-900">
                      جنسیت
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={localData.gender || ""}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      required
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="آقا">آقا</option>
                      <option value="خانم">خانم</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="national_id" className="mb-1 text-sm font-medium text-gray-900">
                      کد ملی
                    </label>
                    <input
                      type="text"
                      name="national_id"
                      id="national_id"
                      value={localData.national_id || ""}
                      onChange={handleChange}
                      placeholder="0012345678"
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      required
                    />
                  </div>
                </div>

                {/* ردیف سوم */}
                <div className="grid md:grid-cols-2 space-y-2 md:gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-900">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={localData.email || ""}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phoneNumber" className="mb-1 text-sm font-medium text-gray-900">
                      شماره تماس
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={localData.phoneNumber || ""}
                      onChange={handleChange}
                      placeholder="+98..."
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-40 bg-red-700 hover:bg-red-800 text-white py-2 rounded-xl transition-all font-medium cursor-pointer"
                >
                  اعمال تغییرات
                </button>
              </form>
            )}

            {/* بخش نمایش اطلاعات */}
            {submitted && (
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center border-b border-b-gray-400">
                  <div className=" flex gap-2 items-center justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    <h4 className="font-semibold">اطلاعات حساب کاربری</h4>
                  </div>
                  <button
                    onClick={onEdit}
                    className="my-4 flex gap-2 cursor-pointer text-red-800 hover:text-red-900 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.2}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                    ویرایش
                  </button>
                </div>

                {/* نمایش مقادیر */}
                <div className="space-y-4 my-2">
                  <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 border-b border-gray-300 pb-4">
                    <div className="w-full md:w-1/2">
                      <p className="text-sm text-gray-400 mb-1">نام و نام خانوادگی</p>
                      <p className="text-sm text-gray-700 font-medium">{formData.first_name}</p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-sm text-gray-400 mb-1">تاریخ تولد</p>
                      <p className="text-sm text-gray-700 font-medium">{formData.birthdate}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 border-b border-gray-300 pb-4">
                    <div className="w-full md:w-1/2">
                      <p className="text-sm text-gray-400 mb-1">جنسیت</p>
                      <p className="text-sm text-gray-700 font-medium">{formData.gender}</p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-sm text-gray-400 mb-1">کد ملی</p>
                      <p className="text-sm text-gray-700 font-medium">{formData.national_id}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 border-b border-gray-200 pb-4">
                    <div className="w-full md:w-1/2">
                      <p className="text-sm text-gray-400 mb-1">ایمیل</p>
                      <p className="text-sm text-gray-700 font-medium break-all">{formData.email}</p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-sm text-gray-400 mb-1">شماره تماس</p>
                      <p className="text-sm text-gray-700 font-medium">{formData.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>

  );
}
