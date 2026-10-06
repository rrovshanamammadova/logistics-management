import React, { useState } from "react";

import Header from "../../../../components/Header";
import Pagination from "../../../../components/Pagination";
import Sidebar from "../../../../components/Sidebar";

import pdf from "../../../../assets/icons/pdf.png";
import excel from "../../../../assets/icons/excel.png";

function RouteActivity() {
  const [period, setPeriod] = useState("daily");
  const [vehicleFilter, setVehicleFilter] = useState("");

  const routes = [
    {
      id: 1,
      date: "18.08.2026",
      vehicle: {
        name: "Mercedes-Benz Sprinter",
        number: "90-AB-123",
      },
      driver: "Kənan Rəhimov",
      way: "15 000 km",
      fuel: "350 ₼",
      technical: "400 ₼",
      service: "400 ₼",
      general: "400 ₼",
    },
    {
      id: 2,
      date: "18.08.2026",
      vehicle: {
        name: "Mercedes-Benz Sprinter",
        number: "90-AB-123",
      },
      driver: "Kənan Rəhimov",
      way: "15 000 km",
      fuel: "350 ₼",
      technical: "400 ₼",
      service: "400 ₼",
      general: "400 ₼",
    },
    {
      id: 3,
      date: "18.08.2026",
      vehicle: {
        name: "Mercedes-Benz Sprinter",
        number: "90-AB-123",
      },
      driver: "Kənan Rəhimov",
      way: "15 000 km",
      fuel: "350 ₼",
      technical: "400 ₼",
      service: "400 ₼",
      general: "400 ₼",
    },
    {
      id: 4,
      date: "18.08.2026",
      vehicle: {
        name: "Mercedes-Benz Sprinter",
        number: "90-AB-123",
      },
      driver: "Kənan Rəhimov",
      way: "15 000 km",
      fuel: "350 ₼",
      technical: "400 ₼",
      service: "400 ₼",
      general: "400 ₼",
    },
    {
      id: 5,
      date: "18.08.2026",
      vehicle: {
        name: "Mercedes-Benz Sprinter",
        number: "90-AB-123",
      },
      driver: "Kənan Rəhimov",
      way: "15 000 km",
      fuel: "350 ₼",
      technical: "400 ₼",
      service: "400 ₼",
      general: "400 ₼",
    },
    {
      id: 6,
      date: "18.08.2026",
      vehicle: {
        name: "Mercedes-Benz Sprinter",
        number: "90-AB-123",
      },
      driver: "Kənan Rəhimov",
      way: "15 000 km",
      fuel: "350 ₼",
      technical: "400 ₼",
      service: "400 ₼",
      general: "400 ₼",
    },
    {
      id: 7,
      date: "18.08.2026",
      vehicle: {
        name: "Mercedes-Benz Sprinter",
        number: "90-AB-123",
      },
      driver: "Kənan Rəhimov",
      way: "15 000 km",
      fuel: "350 ₼",
      technical: "400 ₼",
      service: "400 ₼",
      general: "400 ₼",
    },
  ];

  const filteredRoutes = routes.filter((route) =>
    `${route.vehicle.name} ${route.vehicle.number}`
      .toLowerCase()
      .includes(vehicleFilter.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentRoutes = filteredRoutes.slice(
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
            {/* Nəqliyyat */}
            <div className="relative">
              <input
                type="text"
                value={vehicleFilter}
                onChange={(e) => {
                  setVehicleFilter(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Nəqliyyat"
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
                className="w-[180px] h-[36px] bg-white border border-gray-300 rounded-md px-3 pr-10 text-sm outline-none"
              />
            </div>

            {/* Export */}
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
                      Tarix
                    </th>

                    <th className="px-4 py-3 text-left">
                      Nəqliyyat
                    </th>

                    <th className="px-4 py-3 text-left">
                      Sürücü
                    </th>

                    <th className="px-4 py-3 text-left">
                      Yürüş
                    </th>

                    <th className="px-4 py-3 text-left">
                      Yanacaq
                    </th>

                    <th className="px-4 py-3 text-left">
                      Texniki
                    </th>

                    <th className="px-4 py-3 text-left">
                      Servis
                    </th>

                    <th className="px-4 py-3 text-left">
                      Ümumi
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {currentRoutes.map((route) => (
                    <tr
                      key={route.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-4 whitespace-nowrap">
                        {route.date}
                      </td>

                      <td className="px-4 py-4">
                        <p className="text-gray-800">
                          {route.vehicle.name}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          {route.vehicle.number}
                        </p>
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        {route.driver}
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        {route.way}
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        {route.fuel}
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        {route.technical}
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        {route.service}
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        {route.general}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination
              currentPage={currentPage}
              totalItems={filteredRoutes.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default RouteActivity;