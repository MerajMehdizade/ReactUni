import { useEffect, useState } from "react";

export default function AddressBook() {
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const storedAddress = JSON.parse(localStorage.getItem("addressBook")) || [];
    const [address, setAddress] = useState(storedAddress.length ? storedAddress : [
    ]);
    useEffect(() => {
        localStorage.setItem("addressBook", JSON.stringify(address));
    }, [address]);
    const removeAddress = (id) => {
        setAddress(prev => prev.filter(item => item.id !== id));
    };

    const [form, setForm] = useState({
        id: null,
        province: "",
        city: "",
        street: "",
        buildingNumber: "",
        unit: "",
        zipCode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setForm({
            id: null,
            province: "",
            city: "",
            street: "",
            buildingNumber: "",
            unit: "",
            zipCode: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.province || !form.city || !form.street) return;

        if (isEdit && form.id != null) {
            setAddress((prev) => prev.map((it) => (it.id === form.id ? { ...form } : it)));
        } else {
            const newItem = { ...form, id: Date.now() };
            setAddress((prev) => [...prev, newItem]);
        }

        resetForm();
        setIsEdit(false);
        setShowMessageModal(false);
    };

    const editAddress = (addressData) => {
        setForm({ ...addressData });
        setIsEdit(true);
        setShowMessageModal(true);
    };

    return (
        <>
            <div className="w-full h-full space-y-4 p-3" dir="rtl" >
                <div className="w-full h-full border border-gray-300 rounded-2xl shadow-md px-5 py-4">
                    <div className="border-b border-b-gray-400 flex justify-between items-center space-y-4">
                        <div className=" my-3 flex gap-2 space-y-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <h4> آدرس ها</h4>
                        </div>
                        {address.length > 0 && <button
                            className=" text-red-600 text-[10px] py-1 px-2 rounded-lg flex items-center justify-between gap-1 cursor-pointer transition-colors font-bold md:text-sm md:py-2 md:px-3 md:gap-2" onClick={() => {
                                resetForm();
                                setIsEdit(false);
                                setShowMessageModal(true);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            افزودن آدرس جدید
                        </button>
                        }
                    </div>
                    <div className="my-3 flex flex-col gap-4">
                        {address.length > 0 ? (
                            address.map((addressUser) => (
                                <div key={addressUser.id}>
                                    <div className="p-4 border border-gray-300 rounded-2xl space-y-1">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>
                                                <h1 className="font-semibold text-[15px]">استان <span>{addressUser.province}</span> , شهر {addressUser.city}</h1>
                                            </div>
                                            <div className="flex gap-2">
                                                <button

                                                    className="my-4 flex gap-2 cursor-pointer text-blue-600 hover:text-blue-700 items-center"
                                                    onClick={() => editAddress(addressUser)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                    </svg>

                                                </button>
                                                <button
                                                    className="my-4 flex gap-2 cursor-pointer text-red-600 hover:text-red-700 items-center"
                                                    onClick={() => removeAddress(addressUser.id)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>
                                        <div className="ms-4 text-gray-700 flex flex-col gap-2 text-[12px] md:text-sm">
                                            <p> <span className="font-bold">خیابان </span>{addressUser.street} ,  <span className="font-bold">پلاک</span> {addressUser.buildingNumber} ,  <span className="font-bold">واحد</span> {addressUser.unit}</p>
                                            <p><span className="font-bold">کد پستی</span> {addressUser.zipCode}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <>
                                <div className="my-28 flex justify-center items-center flex-col gap-5 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-30 text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                    </svg>
                                    <h4 className="text-gray-600 text-sm">هنوز آدرسی ثبت نکرده اید</h4>
                                    <button
                                        className="border border-red-600 hover:bg-red-600 hover:text-white text-red-600 text-[10px] py-1 px-2 rounded-lg flex items-center justify-between gap-1 cursor-pointer transition-colors font-bold md:text-sm md:py-2 md:px-3 md:gap-2" onClick={() => {
                                            resetForm();
                                            setIsEdit(false);
                                            setShowMessageModal(true);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>

                                        افزودن آدرس جدید
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                    {/* Modal */}
                    {showMessageModal && (
                        <div id="static-modal" className="fixed top-0 right-0 left-0 z-50 w- w-full h-full flex items-center justify-center bg-black/50">
                            <div className="bg-white rounded-lg shadow-sm w-lg md:w-full max-w-2xl transition-all duration-300 ease-out scale-95 opacity-0 animate-[fadeInScale_0.3s_forwards]">
                                <div className="flex items-center justify-between p-4 border-b border-gray-500">
                                    <h3 className="text-lg font-semibold text-gray-900">{isEdit ? "ویرایش آدرس" : "افزودن آدرس جدید"}</h3>
                                    <button type="button" className="text-gray-400 hover:text-gray-900 cursor-pointer"
                                        onClick={() => {
                                            setShowMessageModal(false);
                                            resetForm();
                                            setIsEdit(false);
                                        }}>
                                        ✕
                                    </button>
                                </div>
                                <div className="p-4 space-y-4">
                                    {/* <form onSubmit={handleSubmit} className="space-y-5"> */}
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid md:grid-cols-2 space-y-2 md:gap-6">
                                            <div className="flex flex-col">
                                                <label htmlFor="province" className="mb-1 text-sm font-medium text-gray-900">
                                                    استان
                                                </label>
                                                <input
                                                    type="text"
                                                    name="province"
                                                    id="province"
                                                    placeholder="استان"
                                                    className="border border-gray-300 rounded-lg px-3 py-2"
                                                    required
                                                    value={form.province}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="city" className="mb-1 text-sm font-medium text-gray-900">
                                                    شهر
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    placeholder="شهر"
                                                    className="border border-gray-300 rounded-lg px-3 py-2"
                                                    required
                                                    value={form.city}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-1 space-y-2 md:gap-6">
                                            <div className="flex flex-col">
                                                <label htmlFor="street" className="mb-1 text-sm font-medium text-gray-900">
                                                    خیابان و کوچه
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street"
                                                    id="street"
                                                    placeholder="خیابان ..."
                                                    className="border border-gray-300 rounded-lg px-3 py-2"
                                                    required
                                                    value={form.street}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 space-y-2 md:gap-6">
                                            <div className="flex flex-col">
                                                <label htmlFor="buildingNumber" className="mb-1 text-sm font-medium text-gray-900">
                                                    پلاک
                                                </label>
                                                <input
                                                    type="text"
                                                    name="buildingNumber"
                                                    id="buildingNumber"
                                                    placeholder="پلاک"
                                                    className="border border-gray-300 rounded-lg px-3 py-2"
                                                    required
                                                    value={form.buildingNumber}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="flex flex-col">
                                                <label htmlFor="unit" className="mb-1 text-sm font-medium text-gray-900">
                                                    واحد
                                                </label>
                                                <input
                                                    type="text"
                                                    name="unit"
                                                    id="unit"
                                                    placeholder="واحد"
                                                    className="border border-gray-300 rounded-lg px-3 py-2"
                                                    required
                                                    value={form.unit}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-1 space-y-2 md:gap-6">
                                            <div className="flex flex-col">
                                                <label htmlFor="zipCode" className="mb-1 text-sm font-medium text-gray-900">
                                                    کد پستی
                                                </label>
                                                <input
                                                    type="text"
                                                    name="zipCode"
                                                    id="zipCode"
                                                    placeholder="10 رقمی باشد"
                                                    className="border border-gray-300 rounded-lg px-3 py-2"
                                                    required
                                                    value={form.zipCode}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>


                                    </form>
                                    <div className="flex items-center p-4 gap-2 ">
                                        <button onClick={handleSubmit} className="w-full text-white bg-red-600 px-5 py-2.5 rounded-lg cursor-pointer">تایید و ادامه</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}
