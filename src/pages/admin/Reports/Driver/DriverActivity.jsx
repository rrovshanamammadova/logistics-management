import React, { useState } from "react";

import Header from "../../../../components/Header";
import Pagination from "../../../../components/Pagination";
import Sidebar from "../../../../components/Sidebar";

import pdf from "../../../../assets/icons/pdf.png";
import excel from "../../../../assets/icons/excel.png";

function DriverActivity() {
  const [period, setPeriod] = useState("daily");
  const [driverFilter, setDriverFilter] = useState("");

  const drivers = [
    {
      id: 1,
      driver: "Kənan Rəhimov",
      orders: "24",
      routes: "18",
      vehicle: {
        name: "Mercedes-Benz Sprinter",
        number: "90-AB-123",
      },
      lastRoute: "Bakı → Ağdaş",
      lastActivity: "18.08.2026 14:30",
    },
    {
      id: 2,
      driver: "Elvin Məmmədov",
      orders: "21",
      routes: "15",
      vehicle: {
        name: "Ford Transit",
        number: "10-CD-456",
      },
      lastRoute: "Bakı → Gəncə",
      lastActivity: "18.08.2026 13:15",
    },
    {
      id: 3,
      driver: "Murad Əliyev",
      orders: "19",
      routes: "13",
      vehicle: {
        name: "Mercedes-Benz Atego",
        number: "99-EF-789",
      },
      lastRoute: "Bakı → Şamaxı",
      lastActivity: "18.08.2026 11:45",
    },
    {
      id: 4,
      driver: "Orxan Hüseynov",
      orders: "16",
      routes: "11",
      vehicle: {
        name: "MAN TGE",
        number: "77-GH-321",
      },
      lastRoute: "Bakı → Qəbələ",
      lastActivity: "17.08.2026 17:20",
    },
    {
      id: 5,
      driver: "Rauf İsmayılov",
      orders: "14",
      routes: "10",
      vehicle: {
        name: "Ford Transit",
        number: "10-KL-654",
      },
      lastRoute: "Bakı → Sumqayıt",
      lastActivity: "17.08.2026 15:40",
    },
  ];

  const filteredDrivers = drivers.filter((driver) =>
    driver.driver.toLowerCase().includes(driverFilter.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentDrivers = filteredDrivers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
                onClick={() => setPeriod("daily")}
                className={`px-5 h-[34px] rounded-md text-sm transition-all duration-300 ${
                  period === "daily"
                    ? "bg-[#FF5B0A] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                Günlük
              </button>

              <button
                onClick={() => setPeriod("monthly")}
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

          {/* FILTERS */}
          <div className="flex items-center gap-3 mb-5">
            <div className="relative">
              <input
                type="text"
                value={driverFilter}
                onChange={(e) => {
                  setDriverFilter(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Sürücü"
                className="w-[220px] h-[36px] bg-white border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none"
              />

              <span className="absolute right-3 top-2 text-gray-500">
                ⌕
              </span>
            </div>

            <div className="relative">
              <input
                type="date"
                className="w-[180px] h-[36px] bg-white border border-gray-300 rounded-md px-3 pr-10 text-sm outline-none"
              />

              
            </div>

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

          {/* TABLE */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div
              key={period}
              className="overflow-x-auto animate-[fadeIn_0.35s_ease-in-out]"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 text-gray-800">
                    <th className="px-4 py-3 text-left">
                      Sürücü
                    </th>

                    <th className="px-4 py-3 text-left">
                      Daşınan sifariş
                    </th>

                    <th className="px-4 py-3 text-left">
                      Marşrut sayı
                    </th>

                    <th className="px-4 py-3 text-left">
                      Son istifadə etdiyi nəqliyyat
                    </th>

                    <th className="px-4 py-3 text-left">
                      Son marşrut
                    </th>

                    <th className="px-4 py-3 text-left">
                      Son fəaliyyət
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {currentDrivers.map((driver) => (
                    <tr
                      key={driver.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-4 whitespace-nowrap">
                        <p className="font-medium text-gray-800">
                          {driver.driver}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        {period === "daily"
                          ? driver.orders
                          : Number(driver.orders) * 24}
                      </td>

                      <td className="px-4 py-4">
                        {period === "daily"
                          ? driver.routes
                          : Number(driver.routes) * 4}
                      </td>

                      <td className="px-4 py-4">
                        <p className="text-gray-800">
                          {driver.vehicle.name}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          {driver.vehicle.number}
                        </p>
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        {driver.lastRoute}
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        {driver.lastActivity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination
              currentPage={currentPage}
              totalItems={filteredDrivers.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default DriverActivity;