import React, { useState } from "react";

import Notifications from "../../Notifications";
import Pagination from "../../../../components/Pagination";
import Sidebar from "../../../../components/Sidebar";
import Header from "../../../../components/Header";

import pdf from "../../../../assets/icons/pdf.png";
import excel from "../../../../assets/icons/excel.png";
import time from "../../../../assets/icons/time.png";
import timeblue from "../../../../assets/icons/timeblue.png";
import timeorng from "../../../../assets/icons/timeorng.png";
import timeyellow from "../../../../assets/icons/timeyellow.png";


function DelayedOrders() {
  const [reportType, setReportType] = useState("daily");
  const [isChanging, setIsChanging] = useState(false);

  const [customerFilter, setCustomerFilter] = useState("");

  const [currentDailyPage, setCurrentDailyPage] = useState(1);
  const [currentMonthlyPage, setCurrentMonthlyPage] = useState(1);

  const itemsPerPage = 5;

  const statistics = [
    {
      title: "Ümumi",
      value: "24",
      bg: "bg-[#FF2B2B33]",
      icon: time,
    },
    {
      title: "1 saatdan artıq",
      value: "8",
      bg: "bg-[#FBBF2433]",
      icon: timeyellow,
    },
    {
      title: "1 saatdan az",
      value: "16",
      bg: "bg-[#EA580C33]",
      icon: timeorng,
    },
    {
      title: "Ortalama gecikmə",
      value: "48 dəq",
      bg: "bg-[#3E81ED33]",
      icon: timeblue,
    },
  ];

  const dailyOrders = [
    {
      date: "18.08.2026",
      orderNo: "#ORD-1045",
      customer: "Bravo MMC",
      vehicle: "10-AA-123",
      driver: "Elvin Məmmədov",
      route: "Bakı → Ağdaş",
      status: "Gecikir",
      planDate: "18.08.2026 14:00",
      deliveryDate: "18.08.2026 15:35",
      delay: "1 saat 35 dəq",
    },
    {
      date: "18.08.2026",
      orderNo: "#ORD-1046",
      customer: "İTbrains MMC",
      vehicle: "90-BB-456",
      driver: "Murad Əliyev",
      route: "Bakı → Şamaxı",
      status: "Gecikir",
      planDate: "18.08.2026 12:00",
      deliveryDate: "18.08.2026 12:45",
      delay: "45 dəq",
    },
    {
      date: "18.08.2026",
      orderNo: "#ORD-1047",
      customer: "Azercell MMC",
      vehicle: "99-CC-789",
      driver: "Tural Abbasov",
      route: "Bakı → Gəncə",
      status: "Gecikir",
      planDate: "18.08.2026 10:00",
      deliveryDate: "18.08.2026 11:20",
      delay: "1 saat 20 dəq",
    },
    {
      date: "18.08.2026",
      orderNo: "#ORD-1048",
      customer: "Kontakt MMC",
      vehicle: "10-DD-321",
      driver: "Rauf İsmayılov",
      route: "Bakı → Qəbələ",
      status: "Gecikir",
      planDate: "18.08.2026 09:00",
      deliveryDate: "18.08.2026 09:35",
      delay: "35 dəq",
    },
  ];

  const monthlyOrders = [
    {
      date: "Avqust 2026",
      orderNo: "#ORD-1045",
      customer: "Bravo MMC",
      vehicle: "10-AA-123",
      driver: "Elvin Məmmədov",
      route: "Bakı → Ağdaş",
      status: "Gecikir",
      planDate: "Avqust 2026",
      deliveryDate: "Avqust 2026",
      delay: "1 saat 35 dəq",
    },
    {
      date: "Avqust 2026",
      orderNo: "#ORD-1046",
      customer: "İTbrains MMC",
      vehicle: "90-BB-456",
      driver: "Murad Əliyev",
      route: "Bakı → Şamaxı",
      status: "Gecikir",
      planDate: "Avqust 2026",
      deliveryDate: "Avqust 2026",
      delay: "45 dəq",
    },
    {
      date: "Avqust 2026",
      orderNo: "#ORD-1047",
      customer: "Azercell MMC",
      vehicle: "99-CC-789",
      driver: "Tural Abbasov",
      route: "Bakı → Gəncə",
      status: "Gecikir",
      planDate: "Avqust 2026",
      deliveryDate: "Avqust 2026",
      delay: "1 saat 20 dəq",
    },
  ];

  const filteredDailyOrders = dailyOrders.filter((order) =>
    order.customer.toLowerCase().includes(customerFilter.toLowerCase())
  );

  const filteredMonthlyOrders = monthlyOrders.filter((order) =>
    order.customer.toLowerCase().includes(customerFilter.toLowerCase())
  );

  const dailyStartIndex = (currentDailyPage - 1) * itemsPerPage;
  const monthlyStartIndex = (currentMonthlyPage - 1) * itemsPerPage;

  const currentDailyOrders = filteredDailyOrders.slice(
    dailyStartIndex,
    dailyStartIndex + itemsPerPage
  );

  const currentMonthlyOrders = filteredMonthlyOrders.slice(
    monthlyStartIndex,
    monthlyStartIndex + itemsPerPage
  );

  const orders =
    reportType === "daily"
      ? currentDailyOrders
      : currentMonthlyOrders;

  const changeReportType = (type) => {
    if (type === reportType) return;

    setIsChanging(true);

    setTimeout(() => {
      setReportType(type);
      setIsChanging(false);
    }, 200);
  };

  return (
    <>
      <Sidebar />

      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">
        <Header/>

        <main className="p-5">
          <div className="flex justify-end mb-4">
            <div className="bg-white rounded-lg p-1 flex gap-1">
              <button
                onClick={() => changeReportType("daily")}
                className={`px-5 h-[34px] rounded-md text-sm transition-all ${
                  reportType === "daily"
                    ? "bg-[#FF5B0A] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Günlük
              </button>

              <button
                onClick={() => changeReportType("monthly")}
                className={`px-5 h-[34px] rounded-md text-sm transition-all ${
                  reportType === "monthly"
                    ? "bg-[#FF5B0A] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Aylıq
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5 mb-5">
            {statistics.map((item) => (
              <div
                key={item.title}
                className="h-[85px] bg-white rounded-lg flex items-center px-5 gap-4"
              >
                <div
                  className={`w-11 h-11 rounded-full ${item.bg} flex items-center justify-center`}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>

                  <p className="text-[28px] leading-8 mt-1">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FILTERS */}
          <div className="flex items-center gap-3 mb-5">
            <input
              type="text"
              value={customerFilter}
              onChange={(e) => {
                setCustomerFilter(e.target.value);
                setCurrentDailyPage(1);
                setCurrentMonthlyPage(1);
              }}
              placeholder="Müştəri"
              className="w-[220px] h-[35px] bg-white border border-gray-300 rounded-md px-3 text-sm outline-none"
            />

            <input
              type="date"
              className="w-[180px] h-[35px] bg-white border border-gray-300 rounded-md px-3 text-sm outline-none"
            />

            <div className="ml-auto flex gap-2">
              <button className="h-[35px] px-4 bg-[#EDEDED] border border-[#EA580C] text-[#EA580C] rounded-md text-sm flex items-center gap-2 hover:bg-gray-200">
                <img
                  src={pdf}
                  alt="PDF"
                  className="w-4 h-4 object-contain"
                />
                <span>PDF</span>
              </button>

              <button className="h-[35px] px-4 bg-[#EDEDED] border border-[#22C55E] text-[#22C55E] rounded-md text-sm flex items-center gap-2 hover:bg-gray-200">
                <img
                  src={excel}
                  alt="XLS"
                  className="w-4 h-4 object-contain"
                />
                <span>XLS</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <div
              className={`overflow-x-auto transition-all duration-200 ${
                isChanging
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 text-left">Tarix</th>
                    <th className="px-4 py-3 text-left">Sifariş №</th>
                    <th className="px-4 py-3 text-left">Müştəri</th>
                    <th className="px-4 py-3 text-left">Nəqliyyat</th>
                    <th className="px-4 py-3 text-left">Sürücü</th>
                    <th className="px-4 py-3 text-left">Marşrut adı</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Plan tarixi</th>
                    <th className="px-4 py-3 text-left">
                      Çatdırılma tarixi
                    </th>
                    <th className="px-4 py-3 text-left">Gecikmə</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={`${reportType}-${index}`}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.date}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.orderNo}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.customer}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.vehicle}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.driver}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.route}
                      </td>

                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full text-xs bg-[#FFDADA] text-[#FF3B3B]">
                          {order.status}
                        </span>
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.planDate}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.deliveryDate}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap font-medium text-red-500">
                        {order.delay}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {reportType === "daily" ? (
              <Pagination
                currentPage={currentDailyPage}
                totalItems={filteredDailyOrders.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentDailyPage}
              />
            ) : (
              <Pagination
                currentPage={currentMonthlyPage}
                totalItems={filteredMonthlyOrders.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentMonthlyPage}
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default DelayedOrders;