import React, { useState } from "react";

import Header from "../../../../components/Header";
import Pagination from "../../../../components/Pagination";
import Sidebar from "../../../../components/Sidebar";

import pdf from "../../../../assets/icons/pdf.png";
import excel from "../../../../assets/icons/excel.png";
import input from "../../../../assets/icons/input.png";
import output from "../../../../assets/icons/output.png";
import suppblue from "../../../../assets/icons/suppblue.png";
import bars from "../../../../assets/icons/bars.png";

function WareReport() {
  const [activeTab, setActiveTab] = useState("daily");

  const [dailyPage, setDailyPage] = useState(1);
  const [monthlyPage, setMonthlyPage] = useState(1);

  // Filters
  const [productFilter, setProductFilter] = useState("");
  const [barcodeFilter, setBarcodeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const itemsPerPage = 5;

  const statistics = [
    {
      title: "Ümumi əməliyyat",
      value: "248",
      bg: "bg-[#FFF2CC]",
      icon: bars,
    },
    {
      title: "Qəbul sayı",
      value: "128",
      bg: "bg-[#D9F5E5]",
      icon: input,
    },
    {
      title: "Çıxarış sayı",
      value: "120",
      bg: "bg-[#FFDCDC]",
      icon: output,
    },
    {
      title: "Məhsul sayı",
      value: "86",
      bg: "bg-[#3E81ED33]",
      icon: suppblue,
    },
  ];

  const dailyData = [
    {
      id: 1,
      date: "2026-08-18",
      operation: "Qəbul",
      product: "Oreo",
      barcode: "8690504012345",
      category: "Qida",
      quantity: "180",
      buyPrice: "1.20 ₼",
      sellPrice: "1.80 ₼",
      amount: "216 ₼",
      type: "in",
    },
    {
      id: 2,
      date: "2026-08-18",
      operation: "Çıxarış",
      product: "Pepsi",
      barcode: "8690504012456",
      category: "İçki",
      quantity: "50",
      buyPrice: "1.00 ₼",
      sellPrice: "1.50 ₼",
      amount: "50 ₼",
      type: "out",
    },
    {
      id: 3,
      date: "2026-08-17",
      operation: "Qəbul",
      product: "Colgate",
      barcode: "8690504012567",
      category: "Gigiyena",
      quantity: "75",
      buyPrice: "3.50 ₼",
      sellPrice: "5.00 ₼",
      amount: "262.50 ₼",
      type: "in",
    },
    {
      id: 4,
      date: "2026-08-16",
      operation: "Çıxarış",
      product: "Coca Cola",
      barcode: "8690504012678",
      category: "İçki",
      quantity: "40",
      buyPrice: "1.10 ₼",
      sellPrice: "1.70 ₼",
      amount: "44 ₼",
      type: "out",
    },
    {
      id: 5,
      date: "2026-08-15",
      operation: "Qəbul",
      product: "Fanta",
      barcode: "8690504012789",
      category: "İçki",
      quantity: "60",
      buyPrice: "1.10 ₼",
      sellPrice: "1.70 ₼",
      amount: "66 ₼",
      type: "in",
    },
    {
      id: 6,
      date: "2026-08-14",
      operation: "Çıxarış",
      product: "Oreo",
      barcode: "8690504012345",
      category: "Qida",
      quantity: "35",
      buyPrice: "1.20 ₼",
      sellPrice: "1.80 ₼",
      amount: "42 ₼",
      type: "out",
    },
  ];

  const monthlyData = [
    {
      id: 1,
      date: "2026-08-18",
      operation: "Qəbul",
      product: "Oreo",
      barcode: "8690504012345",
      category: "Qida",
      quantity: "850",
      buyPrice: "1.20 ₼",
      sellPrice: "1.80 ₼",
      amount: "1020 ₼",
      type: "in",
    },
    {
      id: 2,
      date: "2026-08-17",
      operation: "Çıxarış",
      product: "Pepsi",
      barcode: "8690504012456",
      category: "İçki",
      quantity: "320",
      buyPrice: "1.00 ₼",
      sellPrice: "1.50 ₼",
      amount: "320 ₼",
      type: "out",
    },
    {
      id: 3,
      date: "2026-08-16",
      operation: "Qəbul",
      product: "Colgate",
      barcode: "8690504012567",
      category: "Gigiyena",
      quantity: "240",
      buyPrice: "3.50 ₼",
      sellPrice: "5.00 ₼",
      amount: "840 ₼",
      type: "in",
    },
    {
      id: 4,
      date: "2026-08-15",
      operation: "Qəbul",
      product: "Fanta",
      barcode: "8690504012789",
      category: "İçki",
      quantity: "400",
      buyPrice: "1.10 ₼",
      sellPrice: "1.70 ₼",
      amount: "440 ₼",
      type: "in",
    },
    {
      id: 5,
      date: "2026-08-14",
      operation: "Çıxarış",
      product: "Oreo",
      barcode: "8690504012345",
      category: "Qida",
      quantity: "200",
      buyPrice: "1.20 ₼",
      sellPrice: "1.80 ₼",
      amount: "240 ₼",
      type: "out",
    },
  ];

  const currentData =
    activeTab === "daily" ? dailyData : monthlyData;

  const filteredData = currentData.filter((item) => {

    const matchesProduct = item.product
      .toLowerCase()
      .includes(productFilter.toLowerCase());

    const matchesBarcode = item.barcode
      .toLowerCase()
      .includes(barcodeFilter.toLowerCase());

    const matchesDate =
      dateFilter === "" || item.date === dateFilter;

    return (
      matchesProduct &&
      matchesBarcode &&
      matchesDate
    );
  });

  const currentPage =
    activeTab === "daily" ? dailyPage : monthlyPage;

  const setCurrentPage =
    activeTab === "daily"
      ? setDailyPage
      : setMonthlyPage;

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === "daily") {
      setDailyPage(1);
    } else {
      setMonthlyPage(1);
    }
  };

  const handleProductFilter = (value) => {
    setProductFilter(value);
    setDailyPage(1);
    setMonthlyPage(1);
  };

  const handleBarcodeFilter = (value) => {
    setBarcodeFilter(value);
    setDailyPage(1);
    setMonthlyPage(1);
  };

  const handleDateFilter = (value) => {
    setDateFilter(value);
    setDailyPage(1);
    setMonthlyPage(1);
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3]">

        <Header/>

        <main className="p-5">

          {/* Günlük / Aylıq */}
          <div className="flex items-center gap-2 mb-5">

            <button
              onClick={() => handleTabChange("daily")}
              className={`px-5 h-[36px] rounded-md text-sm transition-all duration-300 ${
                activeTab === "daily"
                  ? "bg-[#FF5B0A] text-white"
                  : "bg-white text-gray-600 border border-gray-300"
              }`}
            >
              Günlük
            </button>

            <button
              onClick={() => handleTabChange("monthly")}
              className={`px-5 h-[36px] rounded-md text-sm transition-all duration-300 ${
                activeTab === "monthly"
                  ? "bg-[#FF5B0A] text-white"
                  : "bg-white text-gray-600 border border-gray-300"
              }`}
            >
              Aylıq
            </button>

          </div>

          {/* Statistics */}
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
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div>

                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>

                  <p className="text-[30px] leading-8 mt-1">
                    {item.value}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-5">

            {/* Məhsul */}
            <div className="relative">

              <input
                type="text"
                placeholder="Məhsul"
                value={productFilter}
                onChange={(e) =>
                  handleProductFilter(e.target.value)
                }
                className="w-[200px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <span className="absolute right-3 top-2 text-gray-500">
                ⌕
              </span>

            </div>

            {/* Barkod */}
            <div className="relative">

              <input
                type="text"
                placeholder="Barkod"
                value={barcodeFilter}
                onChange={(e) =>
                  handleBarcodeFilter(e.target.value)
                }
                className="w-[200px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <span className="absolute right-3 top-2 text-gray-500">
                ⌕
              </span>

            </div>

            {/* Tarix */}
            <div className="relative">

              <input
                type="date"
                value={dateFilter}
                onChange={(e) =>
                  handleDateFilter(e.target.value)
                }
                className="w-[200px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
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
              key={activeTab}
              className="overflow-x-auto animate-[fadeIn_0.3s_ease-in-out]"
            >

              <table className="w-full text-sm">

                <thead>

                  <tr className="border-b border-gray-300 text-gray-800">

                    <th className="px-4 py-3 text-left">
                      Tarix
                    </th>

                    <th className="px-4 py-3 text-left">
                      Əməliyyat
                    </th>

                    <th className="px-4 py-3 text-left">
                      Məhsul
                    </th>

                    <th className="px-4 py-3 text-left">
                      Barkod
                    </th>

                    <th className="px-4 py-3 text-left">
                      Kateqoriya
                    </th>

                    <th className="px-4 py-3 text-left">
                      Miqdar
                    </th>

                    <th className="px-4 py-3 text-left">
                      Alış qiyməti
                    </th>

                    <th className="px-4 py-3 text-left">
                      Satış qiyməti
                    </th>

                    <th className="px-4 py-3 text-left">
                      Məbləğ
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {paginatedData.length > 0 ? (
                    paginatedData.map((item) => (

                      <tr
                        key={item.id}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >

                        <td className="px-4 py-3 whitespace-nowrap">
                          {item.date}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">

                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              item.type === "in"
                                ? "bg-[#D5F5E3] text-[#20C56A]"
                                : "bg-[#FFDADA] text-[#FF3B3B]"
                            }`}
                          >
                            {item.operation}
                          </span>

                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {item.product}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {item.barcode}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {item.category}
                        </td>

                        <td className="px-4 py-3">
                          {item.quantity}
                        </td>

                        <td className="px-4 py-3">
                          {item.buyPrice}
                        </td>

                        <td className="px-4 py-3">
                          {item.sellPrice}
                        </td>

                        <td
                          className={`px-4 py-3 font-medium whitespace-nowrap ${
                            item.type === "in"
                              ? "text-[#20C56A]"
                              : "text-[#FF3B3B]"
                          }`}
                        >
                          {item.type === "in" ? "+" : "-"}
                          {item.amount}
                        </td>

                      </tr>

                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="9"
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
              totalItems={filteredData.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />

          </div>

        </main>

      </div>
    </>
  );
}

export default WareReport;