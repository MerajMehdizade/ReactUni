import { useState } from "react";

export default function Message() {

    const [showMessageModal, setShowMessageModal] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [messages, setMessage] = useState([
        {
            title: "تغییر وضعیت سفارش",
            text: "سفارش شما با موفقیت در سیستم ثبت شد و هم‌اکنون در حال بررسی می‌باشد. پس از آماده‌سازی و ارسال، از طریق پیام به شما اطلاع داده خواهد شد."
        },
        {
            title: "پیام پشتیبانی",
            text: "کاربر گرامی، در صورت نیاز به راهنمایی یا گزارش مشکل می‌توانید از طریق بخش پشتیبانی با ما در ارتباط باشید. تیم ما همواره آماده پاسخگویی است."
        },
        {
            title: "پیام سیستم",
            text: "در حال حاضر برخی بخش‌ها در حال بروزرسانی هستند. ممکن است دسترسی به قسمت‌هایی موقتاً محدود شده باشد. از صبر و شکیبایی شما سپاسگزاریم."
        },
        {
            title: "تایید اطلاعات",
            text: "اطلاعات حساب کاربری شما با موفقیت تایید شد. اکنون می‌توانید از تمامی امکانات سامانه استفاده کنید."
        },
        {
            title: "نظر شما برای ما مهم است",
            text: "در صورتی که از خدمات ما استفاده کرده‌اید، خوشحال می‌شویم نظر یا پیشنهاد خود را با ما درمیان بگذارید تا بتوانیم تجربه بهتری برای شما ایجاد کنیم."
        }
    ]);

    return (
        <>
            <div className="w-full h-full space-y-4 p-3" dir="rtl" >
                <div className="w-full h-full border border-gray-300 rounded-2xl shadow-md px-5 py-4">
                    <div className="border-b border-b-gray-400  flex justify-between items-center space-y-4 my-3">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                            <h4>تاریخچه پیام ها</h4>
                        </div>
                        <button onClick={() => setMessage([])}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-700 mb-4 cursor-pointer hover:text-red-800">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-3">
                        {messages.map((msg, index) => (
                            <div key={index} className="border rounded-2xl border-gray-400 bg-gray-100/60 flex justify-between p-5 items-center">
                                <div>{msg.title}</div>
                                <div>
                                    <button className="cursor-pointer" onClick={() => {
                                        setSelectedMessage(msg);
                                        setShowMessageModal(true);
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                    {/* Modal */}
                    {showMessageModal && (
                        <div id="static-modal" class="fixed top-0 right-0 left-0 z-50 w- w-full h-full flex items-center justify-center bg-black/50">
                            <div class="bg-white rounded-lg shadow-sm w-lg md:w-full max-w-2xl transition-all duration-300 ease-out scale-95 opacity-0 animate-[fadeInScale_0.3s_forwards]">
                                <div class="flex items-center justify-between p-4 border-b border-gray-500">
                                    <h3 class="text-lg font-semibold text-gray-900">{selectedMessage?.title}</h3>
                                    <button type="button" class="text-gray-400 hover:text-gray-900 cursor-pointer"
                                        onClick={() => setShowMessageModal(false)}>
                                        ✕
                                    </button>
                                </div>
                                <div class="p-4 space-y-4">
                                    <p class="text-gray-600">{selectedMessage?.text}</p>
                                </div>
                                <div class="flex items-center p-4 border-t border-gray-500 gap-2 ">
                                    <button onClick={() => setShowMessageModal(false)} class="text-white bg-red-700 px-5 py-2.5 rounded-lg cursor-pointer">بستن</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}
