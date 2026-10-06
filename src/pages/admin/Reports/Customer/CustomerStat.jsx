import React, { useState } from "react";

import Header from "../../../../components/Header";
import Pagination from "../../../../components/Pagination";
import Sidebar from "../../../../components/Sidebar";

import pdf from "../../../../assets/icons/pdf.png";
import excel from "../../../../assets/icons/excel.png";

function CustomerStat() {
  const [period, setPeriod] = useState("daily");

  // Filters
  const [customerFilter, setCustomerFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const customers = [
    {
      id: 1,
      custom: "Kənan Rəhimov",
      date: "2026-08-18",
      order: "400",
      complete: "400",
      delayed: "400",
      pay: "400 ₼",
      delivered: "400 ₼",
      canceled: "400",
      last: "#ORD-1045",
    },
    {
      id: 2,
      custom: "Elvin Məmmədov",
      date: "2026-08-17",
      order: "350",
      complete: "330",
      delayed: "20",
      pay: "350 ₼",
      delivered: "350 ₼",
      canceled: "10",
      last: "#ORD-1044",
    },
    {
      id: 3,
      custom: "Murad Əliyev",
      date: "2026-08-16",
      order: "280",
      complete: "270",
      delayed: "10",
      pay: "280 ₼",
      delivered: "280 ₼",
      canceled: "5",
      last: "#ORD-1043",
    },
    {
      id: 4,
      custom: "Orxan Hüseynov",
      date: "2026-08-15",
      order: "420",
      complete: "400",
      delayed: "20",
      pay: "420 ₼",
      delivered: "420 ₼",
      canceled: "15",
      last: "#ORD-1042",
    },
    {
      id: 5,
      custom: "Tural Abbasov",
      date: "2026-08-14",
      order: "310",
      complete: "300",
      delayed: "10",
      pay: "310 ₼",
      delivered: "310 ₼",
      canceled: "8",
      last: "#ORD-1041",
    },
    {
      id: 6,
      custom: "Kənan Rəhimov",
      date: "2026-08-13",
      order: "390",
      complete: "370",
      delayed: "20",
      pay: "390 ₼",
      delivered: "390 ₼",
      canceled: "12",
      last: "#ORD-1040",
    },
    {
      id: 7,
      custom: "Elvin Məmmədov",
      date: "2026-08-12",
      order: "450",
      complete: "430",
      delayed: "20",
      pay: "450 ₼",
      delivered: "450 ₼",
      canceled: "7",
      last: "#ORD-1039",
    },
  ];

  const filteredCustomers = customers.filter((customer) => {
    const matchesCustomer = customer.custom
      .toLowerCase()
      .includes(customerFilter.toLowerCase());

    const matchesDate =
      dateFilter === "" || customer.date === dateFilter;

    return matchesCustomer && matchesDate;
  });

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCustomerFilter = (value) => {
    setCustomerFilter(value);
    setCurrentPage(1);
  };

  const handleDateFilter = (value) => {
    setDateFilter(value);
    setCurrentPage(1);
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3]">

       <Header/>

        <main className="p-5">

          {/* Daily / Monthly */}
          <div className="flex justify-end mb-5">

            <div className="flex bg-white rounded-lg border border-gray-200 p-1">

              <button
                onClick={() => {
                  setPeriod("daily");
                  setCurrentPage(1);
                }}
                className={`px-5 h-[34px] rounded-md text-sm transition-all duration-300 ${
                  period === "daily"
                    ? "bg-[#FF5B0A] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                Günlük
              </button>

              <button
                onClick={() => {
                  setPeriod("monthly");
                  setCurrentPage(1);
                }}
                className={`px-5 h-[34px] rounded-md text-sm transition-all duration-300 ${
                  period === "monthly"
                    ? "bg-[#FF5B0A] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                Aylıq
              </button>

            </div>

          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-5">

            {/* Customer */}
            <div className="relative">

              <input
                type="text"
                placeholder="Müştəri"
                value={customerFilter}
                onChange={(e) => handleCustomerFilter(e.target.value)}
                className="w-[220px] h-[36px] bg-white border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none"
              />

              <span className="absolute right-3 top-2 text-gray-500">
                ⌕
              </span>

            </div>

            {/* Date */}
            <div className="relative">

              <input
                type="date"
                value={dateFilter}
                onChange={(e) => handleDateFilter(e.target.value)}
                className="w-[180px] h-[36px] bg-white border border-gray-300 rounded-md px-3 pr-10 text-sm outline-none"
              />

            </div>

            {/* Export buttons */}
            <div className="ml-auto flex gap-2">

              <button
                className="h-[35px] px-4 bg-[#EDEDED] border border-[#EA580C] text-[#EA580C] rounded-md text-sm flex items-center gap-2 hover:bg-gray-200"
              >
                <img
                  src={pdf}
                  alt="PDF"
                  className="w-4 h-4 object-contain"
                />
                <span>PDF</span>
              </button>

              <button
                className="h-[35px] px-4 bg-[#EDEDED] border border-[#22C55E] text-[#22C55E] rounded-md text-sm flex items-center gap-2 hover:bg-gray-200"
              >
                <img
                  src={excel}
                  alt="XLS"
                  className="w-4 h-4 object-contain"
                />
                <span>XLS</span>
              </button>

            </div>

          </div>

          {/* Table */}
          <div className="bg-white rounded-lg overflow-hidden">

            <div
              key={period}
              className="overflow-x-auto animate-[fadeIn_0.35s_ease-in-out]"
            >

              <table className="w-full text-sm">

                <thead>

                  <tr className="border-b border-gray-300 text-gray-800">

                    <th className="px-4 py-3 text-left">
                      Müştəri
                    </th>

                    <th className="px-4 py-3 text-left">
                      Sifariş sayı
                    </th>

                    <th className="px-4 py-3 text-left">
                      Tamamlanan sifariş
                    </th>

                    <th className="px-4 py-3 text-left">
                      Gecikən sifariş
                    </th>

                    <th className="px-4 py-3 text-left">
                      Sifariş məbləği
                    </th>

                    <th className="px-4 py-3 text-left">
                      Çatdırılma məbləği
                    </th>

                    <th className="px-4 py-3 text-left">
                      Ləğv edilən sifariş
                    </th>

                    <th className="px-4 py-3 text-left">
                      Son sifariş
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {currentCustomers.length > 0 ? (
                    currentCustomers.map((customer) => (

                      <tr
                        key={customer.id}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >

                        <td className="px-4 py-4 whitespace-nowrap">
                          {customer.custom}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap">
                          {customer.order}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap">
                          {customer.complete}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap">
                          {customer.delayed}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap">
                          {customer.pay}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap">
                          {customer.delivered}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap">
                          {customer.canceled}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap">
                          {customer.last}
                        </td>

                      </tr>

                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        className="text-center py-8 text-gray-400"
                      >
                        Məlumat tapılmadı
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

            <Pagination
              currentPage={currentPage}
              totalItems={filteredCustomers.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />

          </div>

        </main>

      </div>
    </>
  );
}

export default CustomerStat;