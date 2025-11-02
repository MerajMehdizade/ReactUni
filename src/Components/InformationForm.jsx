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
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">فرم کاربر(تست)</h1>

      {!submitted && (
        <form onSubmit={handleSubmit} className="space-y-3 border p-4 rounded shadow-sm">
          <input
            type="text"
            name="name"
            placeholder="نام"
            value={localData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            value={localData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="شماره تماس"
            value={localData.phoneNumber}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          >
            ارسال
          </button>
        </form>
      )}

      {submitted && (
        <div className="mt-6 p-4 border rounded bg-gray-100 shadow-sm">
          <h2 className="font-bold mb-2 text-lg text-green-700">✅ اطلاعات ارسال‌شده:</h2>
          <p><strong>نام:</strong> {localData.name}</p>
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
