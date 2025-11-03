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
    <div className="p-6 w-full" dir="rtl">
      {!submitted && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 space-y-2 md:gap-6">

            <div className="flex flex-col">
              <label htmlFor="first_name" className="mb-1 text-sm font-medium text-gray-700">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={localData.first_name || ""}
                onChange={handleChange}
                placeholder="معراج"
                className="border border-gray-300 rounded-lg px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="birthdate" className="mb-1 text-sm font-medium text-gray-700">
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

          <div className="grid md:grid-cols-2 space-y-2  md:gap-6">
            <div className="flex flex-col">
              <label htmlFor="gender" className="mb-1 text-sm font-medium text-gray-700">
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
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="national_id" className="mb-1 text-sm font-medium text-gray-700">
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

          <div className="grid md:grid-cols-2 space-y-2  md:gap-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
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
              <label htmlFor="phoneNumber" className="mb-1 text-sm font-medium text-gray-700">
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

      {submitted && (
        <div className="mt-6 p-4 border rounded bg-gray-100 shadow-sm space-y-2">
          <h2 className="font-bold mb-2 text-lg text-green-700">✅ اطلاعات ثبت‌شده:(کامل نشده)</h2>
          <p><strong>نام:</strong> {localData.first_name} {localData.last_name}</p>
          <p><strong>تاریخ تولد:</strong> {localData.birthdate}</p>
          <p><strong>جنسیت:</strong> {localData.gender === "male" ? "مرد" : "زن"}</p>
          <p><strong>کد ملی:</strong> {localData.national_id}</p>
          <p><strong>ایمیل:</strong> {localData.email}</p>
          <p><strong>شماره تماس:</strong> {localData.phoneNumber}</p>
          <button
            onClick={onEdit}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            ویرایش اطلاعات
          </button>
        </div>
      )}
    </div>
  );
}
