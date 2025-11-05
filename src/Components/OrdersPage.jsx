import { useState } from "react";

export default function OrdersPage() {
    const [filters, setFilters] = useState({
        status: "همه موارد",
        fromDate: "",
        toDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleFilter = () => {
        if (onFilter) onFilter(filters);
    };
    const [orders, setOrders] = useState([
        {
            id: 1,
            orderNumber: "1234567",
            date: "1402/07/26",
            amount: "1,000,000 تومان",
            status: "در حال ارسال",
            color: "bg-yellow-100 text-yellow-700",
        },
        {
            id: 2,
            orderNumber: "1234567",
            date: "1402/07/26",
            amount: "1,000,000 تومان",
            status: "لغو شده",
            color: "bg-red-100 text-red-700",
        },
        {
            id: 3,
            orderNumber: "1234567",
            date: "1402/07/26",
            amount: "1,000,000 تومان",
            status: "تحویل شده",
            color: "bg-green-100 text-green-700",
        },
        {
            id: 4,
            orderNumber: "1234567",
            date: "1402/07/26",
            amount: "1,000,000 تومان",
            status: "مرجوع شده",
            color: "bg-gray-100 text-gray-700",
        },
    ]);
    return (
        <>
            <div className="w-full h-full space-y-4 p-3" dir="rtl" >
                <div className="border border-gray-300 rounded-2xl shadow-md">
                    <div className="flex justify-between items-center px-5 py-3">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full md:w-fit ">
                            <div className="w-10 h-10 rounded-full bg-green-200 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="oklch(87.1% 0.15 154.449)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>
                            </div>
                            <div className="space-y-1 text-center md:text-start">
                                <h4 className="text-[12px] md:text-sm font-bold">تحویل شده</h4>
                                <span className="text-[12px] text-gray-500" >2 سفارش</span>
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full md:w-fit">

                            <div className="w-10 h-10 rounded-full bg-orange-200 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="oklch(83.7% 0.128 66.29)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>
                            </div>
                            <div className="space-y-1 text-center md:text-start">
                                <h4 className="text-[12px] md:text-sm font-bold">در حال ارسال</h4>
                                <span className="text-[12px] text-gray-500" >2 سفارش</span>
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full md:w-fit">

                            <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="oklch(55.1% 0.027 264.364)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>
                            </div>

                            <div className="space-y-1 text-center md:text-start">
                                <h4 className="text-[12px] md:text-sm font-bold">مرجوعی</h4>
                                <span className="text-[12px] text-gray-500" >2 سفارش</span>
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full md:w-fit">

                            <div className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="oklch(80.8% 0.114 19.571)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>
                            </div>
                            <div className="space-y-1 text-center md:text-start">
                                <h4 className="text-[12px] md:text-sm font-bold">لغو شده</h4>
                                <span className="text-[12px] text-gray-500" >2 سفارش</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-2xl shadow-md h-full px-5 py-4">
                    <div className="border-b border-b-gray-400 my-3 flex gap-2 space-y-4">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <h4>تاریخجه سفارشات</h4>
                    </div>
                    <div className=" flex flex-wrap items-end justify-between gap-4 ">
                        <div className="flex flex-col w-full sm:w-1/4">
                            <label className="text-sm text-gray-600 mb-1">وضعیت</label>
                            <select
                                name="status"
                                value={filters.status}
                                onChange={handleChange}
                                className="border border-gray-300 text-sm rounded-md px-3 py-2 "
                            >
                                <option>همه موارد</option>
                                <option>تحویل شده</option>
                                <option>در حال ارسال</option>
                                <option>مرجوعی</option>
                                <option>لغو شده</option>
                            </select>
                        </div>

                        {/* از تاریخ */}
                        <div className="flex flex-col w-full sm:w-1/4">
                            <label className="text-sm text-gray-600 mb-1">از تاریخ</label>
                            <input
                                type="date"
                                name="fromDate"
                                value={filters.fromDate}
                                onChange={handleChange}
                                className="border border-gray-300 text-sm rounded-md px-3 py-2 "
                            />
                        </div>

                        {/* تا تاریخ */}
                        <div className="flex flex-col w-full sm:w-1/4">
                            <label className="text-sm text-gray-600 mb-1">تا تاریخ</label>
                            <input
                                type="date"
                                name="toDate"
                                value={filters.toDate}
                                onChange={handleChange}
                                className="border border-gray-300 text-sm rounded-md px-3 py-2 "
                            />
                        </div>

                        {/* دکمه فیلتر */}
                    </div>
                    <div className="flex gap-3 mt-5 ">
                        <button
                            onClick={handleFilter}
                            className="bg-pink-700 text-white flex items-center gap-2 text-sm px-6 py-2 rounded-md hover:bg-red-800 transition cursor-pointer"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                            </svg>
                            فیلتر
                        </button>
                        <button
                            onClick={() => setOrders([])}
                            className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition cursor-pointer"
                        >
                            حذف همه ( تست )
                        </button>
                    </div>
                    <div className="p-5 overflow-x-scroll md:overflow-auto">
                        <table className="w-max min-w-full text-sm text-center border-collapse">
                            <thead className="border-b border-b-gray-400 font-bold">
                                <tr>
                                    <th className="py-3 px-2 text-[12px] md:text-sm">ردیف</th>
                                    <th className="py-3 px-2 text-[12px] md:text-sm">شماره سفارش</th>
                                    <th className="py-3 px-2 text-[12px] md:text-sm">تاریخ</th>
                                    <th className="py-3 px-2 text-[12px] md:text-sm">مبلغ</th>
                                    <th className="py-3 px-2 text-[12px] md:text-sm">وضعیت</th>
                                </tr>
                            </thead>
                            <tbody>

                                {orders.length > 0 ? (
                                    orders.map((order) => (
                                        <tr
                                            key={order.id}
                                            className="border-b border-b-gray-300 transition-colors"
                                        >
                                            <td className="py-3 px-2 text-[10px] md:text-sm">{order.id}</td>
                                            <td className="py-3 px-2 text-[10px] md:text-sm">{order.orderNumber}</td>
                                            <td className="py-3 px-2 text-[10px] md:text-sm">{order.date}</td>
                                            <td className="py-3 px-2 text-[10px] md:text-sm">{order.amount}</td>
                                            <td className="py-3 px-2 ">
                                                <span
                                                    className={`h-10 w-10 px-3 py-2 text-[10px] md:text-[12px] rounded-full text-xs font-medium ${order.color}`}
                                                >
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr >
                                        <td colSpan="5" className="text-center py-6 text-gray-400 text-lg font-bold ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-36 mx-auto mb-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                            </svg>

                                            هیچ سفارشی ثبت نکرده اید
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




        </>
    )
}