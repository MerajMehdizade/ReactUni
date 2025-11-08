import { useState, useEffect } from "react";

export default function Wallet({ amount: propAmount = null, setAmount }) {
    const savedAmount = parseInt(localStorage.getItem("walletAmount")) || 1000;
    const initialAmount = propAmount !== null ? propAmount : savedAmount;

    const [localAmount, setLocalAmount] = useState(initialAmount);

    useEffect(() => {
        if (setAmount) setAmount(localAmount);
        localStorage.setItem("walletAmount", localAmount);
    }, [localAmount]);

    const increase = () => setLocalAmount(localAmount + 1000);
    const decrease = () => setLocalAmount(0);


    const [orders, setOrders] = useState([
        {
            id: 1,
            PaymentGateway: "ملت",
            date: "1402/04/14",
            amount: "1,000,000 تومان",
            status: "نامشخص",
            color: "bg-yellow-100 text-yellow-700",
        },
        {
            id: 2,
            PaymentGateway: "پارسیان",
            date: "1402/04/2",
            amount: "1,000,000 تومان",
            status: "ناموفق",
            color: "bg-red-100 text-red-700",
        },
        {
            id: 3,
            PaymentGateway: "سامان",
            date: "1402/04/30",
            amount: "1,000,000 تومان",
            status: "موفق",
            color: "bg-green-100 text-green-700",
        },
        {
            id: 4,
            PaymentGateway: "ملت",
            date: "1402/04/10",
            amount: "1,000,000 تومان",
            status: "عودت وجه",
            color: "bg-gray-200 text-gray-600",
        },
    ]);

    return (
        <div className="w-full h-full space-y-4 p-3" dir="rtl">
            <div className="border border-gray-300 rounded-2xl shadow-md">
                <div className="flex justify-between items-center px-5 py-3">
                    <div className="flex md:items-center flex-col md:flex-row gap-2">
                        <h5 className="font-bold text-[15px]">موجودی حساب</h5>
                        <span className="text-[12px] text-gray-600">{localAmount} تومان</span>
                    </div>
                    <div className="space-y-3 md:space-y-0 md:flex justify-center items-center gap-3">
                        <button
                            className="border border-red-600 hover:bg-red-600 hover:text-white text-red-600 text-[10px] py-1 px-2 rounded-lg flex items-center justify-between gap-1 cursor-pointer transition-colors font-bold md:text-sm md:py-2 md:px-3 md:gap-2"
                            onClick={increase}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            افزایش موجودی
                        </button>
                        <button
                            className="bg-gray-400 hover:bg-gray-700 hover:text-white text-gray-500 text-[10px] py-1 px-2 rounded-lg flex items-center justify-between gap-1 cursor-pointer transition-colors font-bold md:text-sm md:py-2 md:px-3 md:gap-2"
                            onClick={decrease}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>

                            برداشت موجودی
                        </button>
                    </div>
                </div>
            </div>

            <div className="border border-gray-300 rounded-2xl shadow-md h-full px-5 py-4">
                <div className="border-b border-b-gray-400 my-3 flex gap-2 space-y-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                    </svg>

                    <h4>تاریخچه تراکنش‌ها</h4>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="flex flex-col w-full sm:w-1/4">
                        <label className="text-sm text-gray-600 mb-1">وضعیت</label>
                        <select
                            name="status"
                            className="border border-gray-300 text-sm rounded-md px-3 py-2"
                        >
                            <option>همه موارد</option>
                            <option>موفق</option>
                            <option>ناموفق</option>
                            <option>نامشخص</option>
                            <option>عودت وجه</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/4">
                        <label className="text-sm text-gray-600 mb-1">از تاریخ</label>
                        <input
                            type="date"
                            name="fromDate"
                            className="border border-gray-300 text-sm rounded-md px-3 py-2"
                        />
                    </div>

                    <div className="flex flex-col w-full sm:w-1/4">
                        <label className="text-sm text-gray-600 mb-1">تا تاریخ</label>
                        <input
                            type="date"
                            name="toDate"
                            className="border border-gray-300 text-sm rounded-md px-3 py-2"
                        />
                    </div>
                </div>

                <div className="flex gap-3 mt-5">
                    <button
                        onClick={() => setOrders([])}
                        className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition cursor-pointer"
                    >
                        حذف همه (تست)
                    </button>
                </div>

                <div className="p-5 overflow-x-scroll md:overflow-auto">
                    <table className="w-max min-w-full text-sm text-center border-collapse">
                        <thead className="border-b border-b-gray-400 font-bold">
                            <tr>
                                <th className="py-3 px-2 text-[12px] md:text-sm">ردیف</th>
                                <th className="py-3 px-2 text-[12px] md:text-sm">تاریخ</th>
                                <th className="py-3 px-2 text-[12px] md:text-sm">مبلغ</th>
                                <th className="py-3 px-2 text-[12px] md:text-sm">درگاه بانکی</th>
                                <th className="py-3 px-2 text-[12px] md:text-sm">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order.id} className="border-b border-b-gray-300 transition-colors">
                                        <td className="py-3 px-2 text-[10px] md:text-sm">{order.id}</td>
                                        <td className="py-3 px-2 text-[10px] md:text-sm">{order.date}</td>
                                        <td className="py-3 px-2 text-[10px] md:text-sm">{order.amount}</td>
                                        <td className="py-3 px-2 text-[10px] md:text-sm">{order.PaymentGateway}</td>
                                        <td className="py-3 px-2">
                                            <span className={`h-10 w-10 px-3 py-2 text-[10px] md:text-[12px] rounded-full text-xs font-medium ${order.color}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-6 text-gray-400 text-lg font-bold">
                                        هیچ تراکنشی ثبت نکرده‌اید
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
