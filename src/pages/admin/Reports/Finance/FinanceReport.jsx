import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../../components/Header";
import Pagination from "../../../../components/Pagination";
import Sidebar from "../../../../components/Sidebar";

import salary from "../../../../assets/icons/salary.png";
import reduce from "../../../../assets/icons/reduce.png";
import percent from "../../../../assets/icons/percent.png";
import financial from "../../../../assets/icons/financial.png";
import lorrygr from "../../../../assets/icons/lorrygr.png";
import clipgr from "../../../../assets/icons/clipgr.png";
import fuel from "../../../../assets/icons/fuel.png";
import wrench from "../../../../assets/icons/wrench.png";
import money from "../../../../assets/icons/money.png";
import pdf from "../../../../assets/icons/pdf.png";
import excel from "../../../../assets/icons/excel.png";

function FinanceReport() {
  const [period, setPeriod] = useState("daily");

  const navigate = useNavigate();

  // Daily filter
  const [dailySearch, setDailySearch] = useState("");

  // Monthly filters
  const [monthlyCustomer, setMonthlyCustomer] = useState("");
  const [monthlyDate, setMonthlyDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const monthlyData = [
    {
      id: 1,
      date: "2026-08-18",
      customer: "Kənan Rəhimov",
      orderIncome: "12 000 ₼",
      deliveryIncome: "12 000 ₼",
      fuelExpense: "12 000 ₼",
      technicalExpense: "12 000 ₼",
      serviceExpense: "12 000 ₼",
      salary: "-",
      bonus: "-",
      netIncome: "12 000 ₼",
    },
    {
      id: 2,
      date: "2026-08-17",
      customer: "Elvin Məmmədov",
      orderIncome: "15 000 ₼",
      deliveryIncome: "10 000 ₼",
      fuelExpense: "5 000 ₼",
      technicalExpense: "2 000 ₼",
      serviceExpense: "1 500 ₼",
      salary: "4 000 ₼",
      bonus: "1 000 ₼",
      netIncome: "11 500 ₼",
    },
    {
      id: 3,
      date: "2026-08-16",
      customer: "Murad Əliyev",
      orderIncome: "10 000 ₼",
      deliveryIncome: "8 000 ₼",
      fuelExpense: "3 000 ₼",
      technicalExpense: "1 500 ₼",
      serviceExpense: "1 200 ₼",
      salary: "3 000 ₼",
      bonus: "500 ₼",
      netIncome: "8 800 ₼",
    },
    {
      id: 4,
      date: "2026-08-15",
      customer: "Orxan Hüseynov",
      orderIncome: "18 000 ₼",
      deliveryIncome: "13 000 ₼",
      fuelExpense: "6 000 ₼",
      technicalExpense: "2 500 ₼",
      serviceExpense: "2 000 ₼",
      salary: "5 000 ₼",
      bonus: "1 000 ₼",
      netIncome: "14 500 ₼",
    },
    {
      id: 5,
      date: "2026-08-14",
      customer: "Tural Abbasov",
      orderIncome: "9 000 ₼",
      deliveryIncome: "7 000 ₼",
      fuelExpense: "2 500 ₼",
      technicalExpense: "1 000 ₼",
      serviceExpense: "800 ₼",
      salary: "2 500 ₼",
      bonus: "500 ₼",
      netIncome: "8 700 ₼",
    },
    {
      id: 6,
      date: "2026-08-13",
      customer: "Kənan Rəhimov",
      orderIncome: "14 000 ₼",
      deliveryIncome: "11 000 ₼",
      fuelExpense: "4 000 ₼",
      technicalExpense: "1 800 ₼",
      serviceExpense: "1 300 ₼",
      salary: "3 500 ₼",
      bonus: "700 ₼",
      netIncome: "13 700 ₼",
    },
    {
      id: 7,
      date: "2026-08-12",
      customer: "Elvin Məmmədov",
      orderIncome: "16 000 ₼",
      deliveryIncome: "12 000 ₼",
      fuelExpense: "4 500 ₼",
      technicalExpense: "2 000 ₼",
      serviceExpense: "1 500 ₼",
      salary: "4 000 ₼",
      bonus: "800 ₼",
      netIncome: "15 200 ₼",
    },
  ];

  const statistics = [
    {
      title: "Gəlirlər",
      value: "26 000 ₼",
      bg: "bg-[#D9F5E5]",
      iconBg: "bg-[#BDEFD2]",
      icon: financial,
    },
    {
      title: "Xərclər",
      value: "12 000 ₼",
      bg: "bg-[#FFDADA]",
      iconBg: "bg-[#FFC4C4]",
      icon: reduce,
    },
    {
      title: "Xalis gəlir",
      value: "14 000 ₼",
      bg: "bg-[#DCEAFF]",
      iconBg: "bg-[#C5DBFF]",
      icon: salary,
    },
    {
      title: "Xərc payı",
      value: "40%",
      bg: "bg-[#FFE1CC]",
      iconBg: "bg-[#FFD0B0]",
      icon: percent,
    },
  ];

  const dailyItems = [
    {
      title: "Sifariş",
      value: "38,500 ₼",
      icon: clipgr,
      type: "income",
    },
    {
      title: "Çatdırılma",
      value: "38,500 ₼",
      icon: lorrygr,
      type: "income",
    },
    {
      title: "Yanacaq",
      value: "38,500 ₼",
      icon: fuel,
      type: "expense",
    },
    {
      title: "Servis",
      value: "38,500 ₼",
      icon: wrench,
      type: "expense",
    },
    {
      title: "Maaş",
      value: "38,500 ₼",
      icon: money,
      type: "expense",
    },
  ];

  const filteredDailyItems = dailyItems.filter((item) =>
    item.title.toLowerCase().includes(dailySearch.toLowerCase())
  );

  const filteredMonthlyData = monthlyData.filter((item) => {
    const matchesCustomer = item.customer
      .toLowerCase()
      .includes(monthlyCustomer.toLowerCase());

    const matchesDate =
      monthlyDate === "" || item.date === monthlyDate;

    return matchesCustomer && matchesDate;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentMonthlyData = filteredMonthlyData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePeriodChange = (value) => {
    setPeriod(value);
    setCurrentPage(1);
  };

  const handleDailySearch = (value) => {
    setDailySearch(value);
  };

  const handleMonthlyCustomer = (value) => {
    setMonthlyCustomer(value);
    setCurrentPage(1);
  };

  const handleMonthlyDate = (value) => {
    setMonthlyDate(value);
    setCurrentPage(1);
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3]">

       <Header/>

        <main className="p-5">

          <div className="bg-white rounded-lg p-3">

            {/* Title + Daily Monthly */}
            <div className="flex items-center justify-between mb-5">

              <div className="flex items-center gap-3">

                <button
                  onClick={() => navigate("/admin/reports")}
                  className="text-[#222]"
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                </button>

                <div>
                  <h2 className="text-[18px] font-medium text-[#172033]">
                    Maliyyə göstəriciləri
                  </h2>

                  <p className="text-xs text-gray-400">
                    Gəlir,xərc,xalis məbləğ
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2">

                <button
                  onClick={() => handlePeriodChange("daily")}
                  className={`h-[31px] w-[79px] rounded-md text-sm transition-all duration-300 ${
                    period === "daily"
                      ? "bg-[#FF5B0A] text-white"
                      : "bg-white border border-gray-300 text-gray-700"
                  }`}
                >
                  Günlük
                </button>

                <button
                  onClick={() => handlePeriodChange("monthly")}
                  className={`h-[31px] w-[79px] rounded-md text-sm transition-all duration-300 ${
                    period === "monthly"
                      ? "bg-[#FF5B0A] text-white"
                      : "bg-white border border-gray-300 text-gray-700"
                  }`}
                >
                  Aylıq
                </button>

              </div>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-4 gap-5 mb-5">

              {statistics.map((item) => (
                <div
                  key={item.title}
                  className="h-[76px] bg-[#F0F0F0] rounded-lg flex items-center px-4 gap-4"
                >

                  <div
                    className={`w-11 h-11 rounded-full ${item.iconBg} flex items-center justify-center`}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  <div>

                    <p className="text-[13px] text-gray-700">
                      {item.title}
                    </p>

                    <p className="text-[29px] leading-8 mt-1 text-[#222]">
                      {item.value}
                    </p>

                  </div>

                </div>
              ))}

            </div>

            <div
              key={period}
              className="animate-[fadeIn_0.35s_ease-in-out]"
            >

              {period === "daily" ? (

                <>
                  {/* Daily Filter */}
                  <div className="flex items-center gap-3 mb-5">

                    <div className="relative">

                      <input
                        type="text"
                        placeholder="Axtar"
                        value={dailySearch}
                        onChange={(e) =>
                          handleDailySearch(e.target.value)
                        }
                        className="w-[135px] h-[31px] border border-gray-300 rounded-md px-3 pr-8 text-sm outline-none"
                      />

                      <span className="absolute right-3 top-[6px] text-gray-600">
                        ⌕
                      </span>

                    </div>

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

                  {/* Daily Cards */}
                  <div className="grid grid-cols-2 gap-5">

                    {/* Income */}
                    <div className="bg-[#F0F0F0] rounded-lg overflow-hidden">

                      <div className="p-5">

                        <div className="flex items-center gap-3 mb-6">

                          <div className="w-13 h-13 rounded-full bg-[#C9F4D9] flex items-center justify-center">
                            <img
                              src={financial}
                              alt=""
                              className="w-8 h-8 object-contain"
                            />
                          </div>

                          <h3 className="text-[16px] font-medium">
                            Gəlirlər
                          </h3>

                        </div>

                        <div className="space-y-7">

                          {filteredDailyItems
                            .filter((item) => item.type === "income")
                            .map((item) => (

                              <div
                                key={item.title}
                                className="flex items-center justify-between"
                              >

                                <div className="flex items-center gap-3">

                                  <div className="w-11 h-11 rounded-full bg-[#C9F4D9] flex items-center justify-center">

                                    <img
                                      src={item.icon}
                                      alt=""
                                      className="w-6 h-6 object-contain"
                                    />

                                  </div>

                                  <span className="text-sm">
                                    {item.title}
                                  </span>

                                </div>

                                <span className="text-sm font-medium">
                                  {item.value}
                                </span>

                              </div>

                            ))}

                          {filteredDailyItems.filter(
                            (item) => item.type === "income"
                          ).length === 0 && (
                            <p className="text-sm text-gray-400">
                              Məlumat tapılmadı
                            </p>
                          )}

                        </div>

                      </div>

                      <div className="h-[45px] bg-[#C9F4D9] px-3 flex items-center justify-between text-sm text-[#20C56A]">
                        <span>
                          Ümumi gəlir
                        </span>

                        <span>
                          38,500 ₼
                        </span>
                      </div>

                    </div>

                    {/* Expenses */}
                    <div className="bg-[#F0F0F0] rounded-lg overflow-hidden">

                      <div className="p-5">

                        <div className="flex items-center gap-3 mb-6">

                          <div className="w-13 h-13 rounded-full bg-[#FFD1D1] flex items-center justify-center">
                            <img
                              src={reduce}
                              alt=""
                              className="w-8 h-8 object-contain"
                            />
                          </div>

                          <h3 className="text-[16px] font-medium">
                            Xərclər
                          </h3>

                        </div>

                        <div className="space-y-7">

                          {filteredDailyItems
                            .filter((item) => item.type === "expense")
                            .map((item) => (

                              <div
                                key={item.title}
                                className="flex items-center justify-between"
                              >

                                <div className="flex items-center gap-3">

                                  <div className="w-11 h-11 rounded-full bg-[#FFD1D1] flex items-center justify-center">

                                    <img
                                      src={item.icon}
                                      alt=""
                                      className="w-6 h-6 object-contain"
                                    />

                                  </div>

                                  <span className="text-sm">
                                    {item.title}
                                  </span>

                                </div>

                                <span className="text-sm font-medium">
                                  {item.value}
                                </span>

                              </div>

                            ))}

                          {filteredDailyItems.filter(
                            (item) => item.type === "expense"
                          ).length === 0 && (
                            <p className="text-sm text-gray-400">
                              Məlumat tapılmadı
                            </p>
                          )}

                        </div>

                      </div>

                      <div className="h-[45px] bg-[#FFD1D1] px-3 flex items-center justify-between text-sm text-[#FF3B3B]">
                        <span>
                          Ümumi xərc
                        </span>

                        <span>
                          38,500 ₼
                        </span>
                      </div>

                    </div>

                  </div>

                  {/* Net income */}
                  <div className="mt-5 h-[64px] bg-[#D6E5FF] rounded-lg px-3 flex items-center justify-between text-[#4D8FEF]">

                    <span>
                      Xalis gəlir
                    </span>

                    <span>
                      38,500 ₼
                    </span>

                  </div>
                </>

              ) : (

                <>
                  {/* Monthly Filters */}
                  <div className="flex items-center gap-3 mb-5">

                    <div className="relative">

                      <input
                        type="text"
                        placeholder="Müştəri"
                        value={monthlyCustomer}
                        onChange={(e) =>
                          handleMonthlyCustomer(e.target.value)
                        }
                        className="w-[135px] h-[31px] border border-gray-300 rounded-md px-3 pr-8 text-sm outline-none"
                      />

                      <span className="absolute right-3 top-[6px] text-gray-600">
                        ⌕
                      </span>

                    </div>

                    <input
                      type="date"
                      value={monthlyDate}
                      onChange={(e) =>
                        handleMonthlyDate(e.target.value)
                      }
                      className="w-[120px] h-[31px] border border-gray-300 rounded-md px-2 text-xs outline-none"
                    />

                    <div className="ml-auto flex items-center gap-2">

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

                  {/* Monthly table */}
                  <div className="overflow-x-auto">

                    <table className="w-full text-sm">

                      <thead>

                        <tr className="border-b border-gray-300">

                          <th className="px-2 py-3 text-left">
                            Tarix
                          </th>

                          <th className="px-2 py-3 text-left">
                            Müştəri
                          </th>

                          <th className="px-2 py-3 text-left whitespace-nowrap">
                            Sifariş gəliri
                          </th>

                          <th className="px-2 py-3 text-left whitespace-nowrap">
                            Çatdırılma gəliri
                          </th>

                          <th className="px-2 py-3 text-left whitespace-nowrap">
                            Yanacaq xərci
                          </th>

                          <th className="px-2 py-3 text-left whitespace-nowrap">
                            Texniki baxış xərci
                          </th>

                          <th className="px-2 py-3 text-left whitespace-nowrap">
                            Servis xərci
                          </th>

                          <th className="px-2 py-3 text-left">
                            Maaş
                          </th>

                          <th className="px-2 py-3 text-left">
                            Bonus
                          </th>

                          <th className="px-2 py-3 text-left whitespace-nowrap">
                            Xalis gəlir
                          </th>

                        </tr>

                      </thead>

                      <tbody>

                        {currentMonthlyData.length > 0 ? (
                          currentMonthlyData.map((item) => (

                            <tr
                              key={item.id}
                              className="border-b border-gray-200 hover:bg-gray-50"
                            >

                              <td className="px-2 py-4 whitespace-nowrap">
                                {item.date}
                              </td>

                              <td className="px-2 py-4 whitespace-nowrap">
                                {item.customer}
                              </td>

                              <td className="px-2 py-4 text-[#20C56A] whitespace-nowrap">
                                {item.orderIncome}
                              </td>

                              <td className="px-2 py-4 text-[#20C56A] whitespace-nowrap">
                                {item.deliveryIncome}
                              </td>

                              <td className="px-2 py-4 text-[#FF3B3B] whitespace-nowrap">
                                {item.fuelExpense}
                              </td>

                              <td className="px-2 py-4 text-[#FF3B3B] whitespace-nowrap">
                                {item.technicalExpense}
                              </td>

                              <td className="px-2 py-4 text-[#FF3B3B] whitespace-nowrap">
                                {item.serviceExpense}
                              </td>

                              <td className="px-2 py-4 text-[#FF3B3B] whitespace-nowrap">
                                {item.salary}
                              </td>

                              <td className="px-2 py-4 text-[#FF3B3B] whitespace-nowrap">
                                {item.bonus}
                              </td>

                              <td className="px-2 py-4 text-[#20C56A] whitespace-nowrap">
                                {item.netIncome}
                              </td>

                            </tr>

                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan="10"
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
                    totalItems={filteredMonthlyData.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                  />

                </>
              )}

            </div>

          </div>

        </main>

      </div>
    </>
  );
}

export default FinanceReport;