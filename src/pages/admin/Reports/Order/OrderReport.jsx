import React, { useState } from "react";

import Notifications from "../../Notifications";
import Pagination from "../../../../components/Pagination";
import Sidebar from "../../../../components/Sidebar";
import Header from "../../../../components/Header";

import clipyellow from "../../../../assets/icons/clipyellow.png";
import approved from "../../../../assets/icons/approved.png";
import lorryblue from "../../../../assets/icons/lorryblue.png";
import lorrypurp from "../../../../assets/icons/lorrypurp.png";
import userblue from "../../../../assets/icons/userblue.png";
import close from "../../../../assets/icons/close.png";
import supporng from "../../../../assets/icons/supporng.png";
import hourglass from "../../../../assets/icons/hourglass.png";
import pdf from "../../../../assets/icons/pdf.png";
import excel from "../../../../assets/icons/excel.png";

function OrderReport() {
  const [reportType, setReportType] = useState("daily");
  const [isChanging, setIsChanging] = useState(false);

  const [orderFilter, setOrderFilter] = useState("");
  const [customerFilter, setCustomerFilter] = useState("");

  const [dailyCurrentPage, setDailyCurrentPage] = useState(1);
  const [monthlyCurrentPage, setMonthlyCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const dailyOrders = [
    {
      date: "18.08.2026",
      orderNo: "#ORD-1045",
      customer: "Bravo MMC",
      status: "Çatdırılıb",
      preparation: "50 ₼",
      delivery: "20 ₼",
      orderAmount: "250 ₼",
      income: "320 ₼",
      planDate: "18.08.2026",
    },
    {
      date: "18.08.2026",
      orderNo: "#ORD-1046",
      customer: "İTbrains MMC",
      status: "Yüklənib",
      preparation: "40 ₼",
      delivery: "25 ₼",
      orderAmount: "200 ₼",
      income: "265 ₼",
      planDate: "19.08.2026",
    },
    {
      date: "18.08.2026",
      orderNo: "#ORD-1047",
      customer: "Azercell MMC",
      status: "Yoldadır",
      preparation: "60 ₼",
      delivery: "30 ₼",
      orderAmount: "300 ₼",
      income: "390 ₼",
      planDate: "20.08.2026",
    },
  ];

  const monthlyOrders = [
    {
      date: "Avqust 2026",
      orderNo: "#ORD-1045",
      customer: "Bravo MMC",
      status: "Çatdırılıb",
      preparation: "450 ₼",
      delivery: "180 ₼",
      orderAmount: "2,500 ₼",
      income: "3,130 ₼",
      planDate: "Avqust 2026",
    },
    {
      date: "Avqust 2026",
      orderNo: "#ORD-1046",
      customer: "İTbrains MMC",
      status: "Yüklənib",
      preparation: "380 ₼",
      delivery: "210 ₼",
      orderAmount: "2,100 ₼",
      income: "2,690 ₼",
      planDate: "Avqust 2026",
    },
    {
      date: "Avqust 2026",
      orderNo: "#ORD-1047",
      customer: "Azercell MMC",
      status: "Yoldadır",
      preparation: "520 ₼",
      delivery: "250 ₼",
      orderAmount: "3,200 ₼",
      income: "3,970 ₼",
      planDate: "Avqust 2026",
    },
  ];

  const statistics = [
    {
      title: "Ümumi",
      value: "120",
      icon: clipyellow,
      bg: "bg-[#FBB82433]",
    },
    {
      title: "Çatdırılıb",
      value: "120",
      icon: approved,
      bg: "bg-[#D9F5E5]",
    },
    {
      title: "Yüklənib",
      value: "120",
      icon: lorryblue,
      bg: "bg-[#3E81ED33]",
    },
    {
      title: "Yoldadır",
      value: "120",
      icon: lorrypurp,
      bg: "bg-[#875EE533]",
    },
    {
      title: "Müştəri sayı",
      value: "120",
      icon: userblue,
      bg: "bg-[#3E81ED33]",
    },
    {
      title: "Ləğv edilmiş",
      value: "120",
      icon: close,
      bg: "bg-[#FFDCDC]",
    },
    {
      title: "Anbarda",
      value: "120",
      icon: supporng,
      bg: "bg-[#EA580C33]",
    },
    {
      title: "Hazırlanır",
      value: "120",
      icon: hourglass,
      bg: "bg-[#FFF0C7]",
    },
  ];

  const orders =
    reportType === "daily"
      ? dailyOrders
      : monthlyOrders;

  const filteredOrders = orders.filter((order) => {
    const matchesOrder =
      order.orderNo
        .toLowerCase()
        .includes(orderFilter.toLowerCase());

    const matchesCustomer =
      order.customer
        .toLowerCase()
        .includes(customerFilter.toLowerCase());

    return matchesOrder && matchesCustomer;
  });

  const currentPage =
    reportType === "daily"
      ? dailyCurrentPage
      : monthlyCurrentPage;

  const setCurrentPage =
    reportType === "daily"
      ? setDailyCurrentPage
      : setMonthlyCurrentPage;

  const getStatusStyle = (status) => {
    const styles = {
      "Çatdırılıb": "bg-[#D5F5E3] text-[#20C56A]",
      "Yüklənib": "bg-[#DCEAFF] text-[#4D8FEF]",
      "Yoldadır": "bg-[#E8DFFF] text-[#8B5CF6]",
      Hazırlanır: "bg-[#FFF0C7] text-[#F4B400]",
      "Ləğv edilmiş": "bg-[#FFDADA] text-[#FF3B3B]",
    };

    return styles[status] || "bg-gray-100 text-gray-600";
  };

  const changeReportType = (type) => {
    if (type === reportType) return;

    setIsChanging(true);

    setTimeout(() => {
      setReportType(type);
      setIsChanging(false);

      if (type === "daily") {
        setDailyCurrentPage(1);
      } else {
        setMonthlyCurrentPage(1);
      }
    }, 200);
  };

  return (
    <>
      <Sidebar />

      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">

        <Header />

        <main className="p-5">

          {/* Daily / Monthly */}
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
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div>

                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>

                  <p className="text-[32px] leading-8 mt-1">
                    {item.value}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-5">

            {/* Sifariş № */}
            <div className="relative">

              <input
                type="text"
                value={orderFilter}
                onChange={(e) => {
                  setOrderFilter(e.target.value);

                  if (reportType === "daily") {
                    setDailyCurrentPage(1);
                  } else {
                    setMonthlyCurrentPage(1);
                  }
                }}
                placeholder="Sifariş №"
                className="w-[180px] h-[35px] bg-white border border-gray-300 rounded-md px-3 text-sm outline-none"
              />

            </div>

            {/* Müştəri */}
            <div className="relative">

              <input
                type="text"
                value={customerFilter}
                onChange={(e) => {
                  setCustomerFilter(e.target.value);

                  if (reportType === "daily") {
                    setDailyCurrentPage(1);
                  } else {
                    setMonthlyCurrentPage(1);
                  }
                }}
                placeholder="Müştəri"
                className="w-[200px] h-[35px] bg-white border border-gray-300 rounded-md px-3 text-sm outline-none"
              />

            </div>

            {/* Export */}
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
              className={`overflow-x-auto transition-all duration-200 ${
                isChanging
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >

              <table className="w-full text-sm">

                <thead>

                  <tr className="border-b border-gray-300">

                    <th className="px-4 py-3 text-left">
                      Tarix
                    </th>

                    <th className="px-4 py-3 text-left">
                      Sifariş №
                    </th>

                    <th className="px-4 py-3 text-left">
                      Müştəri
                    </th>

                    <th className="px-4 py-3 text-left">
                      Status
                    </th>

                    <th className="px-4 py-3 text-left">
                      Hazırlanma məbləği
                    </th>

                    <th className="px-4 py-3 text-left">
                      Çatdırılma məbləği
                    </th>

                    <th className="px-4 py-3 text-left">
                      Sifariş məbləği
                    </th>

                    <th className="px-4 py-3 text-left">
                      Ümumi gəlir
                    </th>

                    <th className="px-4 py-3 text-left">
                      Plan tarixi
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredOrders
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )
                    .map((order, index) => (

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

                        <td className="px-4 py-3">

                          <span
                            className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${getStatusStyle(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>

                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {order.preparation}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {order.delivery}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {order.orderAmount}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {order.income}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {order.planDate}
                        </td>

                      </tr>

                    ))}

                  {filteredOrders.length === 0 && (
                    <tr>
                      <td
                        colSpan="9"
                        className="text-center py-10 text-gray-500"
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
              totalItems={filteredOrders.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />

          </div>

        </main>

      </div>
    </>
  );
}

export default OrderReport;