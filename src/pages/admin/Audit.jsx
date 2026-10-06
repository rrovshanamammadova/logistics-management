import React, { useState } from "react";

import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import input from "../../assets/icons/input.png";
import output from "../../assets/icons/output.png";
import bars from "../../assets/icons/bars.png";
import groupblue from "../../assets/icons/groupblue.png";
import pdf from "../../assets/icons/pdf.png";
import excel from "../../assets/icons/excel.png";

function Audit() {

  const statistics = [
    {
      title: "Giriş sayı",
      value: "125",
      icon: input,
      bg: "bg-[#D9F5E5]",
    },
    {
      title: "Çıxış sayı",
      value: "48",
      icon: output,
      bg: "bg-[#FFDCDC]",
    },
    {
      title: "Əməliyyat sayı",
      value: "356",
      icon: bars,
      bg: "bg-[#EA580C33]",
    },
    {
      title: "İstifadəçi sayı",
      value: "24",
      icon: groupblue,
      bg: "bg-[#3E81ED33]",
    },
  ];

  const logs = [
    {
      id: 1,
      date: "2026-08-18",
      fullDate: "18.08.2026 14:32",
      user: "Kənan Rəhimov",
      role: "Administrator",
      ip: "192.168.1.10",
      operation: "Giriş",
      object: "Sistem",
      duration: "00:02:15",
    },
    {
      id: 2,
      date: "2026-08-18",
      fullDate: "18.08.2026 14:28",
      user: "Elvin Məmmədov",
      role: "Sürücü",
      ip: "192.168.1.15",
      operation: "Redaktə",
      object: "Sifariş #ORD-1045",
      duration: "00:01:24",
    },
    {
      id: 3,
      date: "2026-08-18",
      fullDate: "18.08.2026 13:56",
      user: "Murad Əliyev",
      role: "Anbar işçisi",
      ip: "192.168.1.18",
      operation: "Əlavə etmə",
      object: "Yük #WH-1023",
      duration: "00:03:12",
    },
    {
      id: 4,
      date: "2026-08-17",
      fullDate: "17.08.2026 13:42",
      user: "Orxan Hüseynov",
      role: "Sürücü",
      ip: "192.168.1.22",
      operation: "Status dəyişmə",
      object: "Sifariş #ORD-1042",
      duration: "00:00:48",
    },
    {
      id: 5,
      date: "2026-08-17",
      fullDate: "17.08.2026 13:20",
      user: "Kənan Rəhimov",
      role: "Administrator",
      ip: "192.168.1.10",
      operation: "Silinmə",
      object: "Müştəri #CUS-102",
      duration: "00:01:08",
    },
    {
      id: 6,
      date: "2026-08-16",
      fullDate: "16.08.2026 12:54",
      user: "Tural Abbasov",
      role: "Sürücü",
      ip: "192.168.1.25",
      operation: "Çıxış",
      object: "Sistem",
      duration: "00:00:32",
    },
  ];

  // Filters
  const [personFilter, setPersonFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [operationFilter, setOperationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const filteredLogs = logs.filter((log) => {

    const matchesPerson = log.user
      .toLowerCase()
      .includes(personFilter.toLowerCase());

    const matchesRole =
      roleFilter === "" || log.role === roleFilter;

    const matchesOperation =
      operationFilter === "" ||
      log.operation === operationFilter;

    const matchesDate =
      dateFilter === "" || log.date === dateFilter;

    return (
      matchesPerson &&
      matchesRole &&
      matchesOperation &&
      matchesDate
    );
  });

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentLogs = filteredLogs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePersonFilter = (value) => {
    setPersonFilter(value);
    setCurrentPage(1);
  };

  const handleRoleFilter = (value) => {
    setRoleFilter(value);
    setCurrentPage(1);
  };

  const handleOperationFilter = (value) => {
    setOperationFilter(value);
    setCurrentPage(1);
  };

  const handleDateFilter = (value) => {
    setDateFilter(value);
    setCurrentPage(1);
  };

  const getOperationStyle = (operation) => {

    const styles = {
      Giriş: "bg-[#D9F5E5] text-[#20C56A]",
      Çıxış: "bg-[#FFDCDC] text-[#FF3B3B]",
      Redaktə: "bg-[#DCEAFF] text-[#4D8FEF]",
      "Əlavə etmə": "bg-[#E9DEFF] text-[#8B5CF6]",
      "Status dəyişmə": "bg-[#FFF0C7] text-[#F4B400]",
      Silinmə: "bg-[#FFDCDC] text-[#FF3B3B]",
    };

    return (
      styles[operation] ||
      "bg-gray-100 text-gray-600"
    );
  };

  return (
    <>
      <Sidebar />

      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">

        <Header />

        <main className="p-5">

          {/* Filters */}
          <div className="flex items-center gap-3 mb-7">

            {/* Şəxs */}
            <div className="relative">

              <input
                type="text"
                placeholder="Şəxs"
                value={personFilter}
                onChange={(e) =>
                  handlePersonFilter(e.target.value)
                }
                className="w-[180px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <span className="absolute right-3 top-2 text-gray-500">
                ⌕
              </span>

            </div>

            {/* Rol */}
            <select
              value={roleFilter}
              onChange={(e) =>
                handleRoleFilter(e.target.value)
              }
              className="w-[160px] h-[35px] border border-gray-300 rounded-md px-3 text-sm outline-none bg-white text-gray-500"
            >
              <option value="">Rol</option>
              <option value="Administrator">
                Administrator
              </option>
              <option value="Logistika meneceri">
                Logistika meneceri
              </option>
              <option value="Anbar işçisi">
                Anbar işçisi
              </option>
              <option value="Sürücü">
                Sürücü
              </option>
            </select>

            {/* Əməliyyat */}
            <select
              value={operationFilter}
              onChange={(e) =>
                handleOperationFilter(e.target.value)
              }
              className="w-[170px] h-[35px] border border-gray-300 rounded-md px-3 text-sm outline-none bg-white text-gray-500"
            >
              <option value="">Əməliyyat</option>
              <option value="Giriş">Giriş</option>
              <option value="Çıxış">Çıxış</option>
              <option value="Əlavə etmə">
                Əlavə etmə
              </option>
              <option value="Redaktə">
                Redaktə
              </option>
              <option value="Silinmə">
                Silinmə
              </option>
              <option value="Status dəyişmə">
                Status dəyişmə
              </option>
            </select>

            {/* Tarix */}
            <div className="flex items-center">

              <input
                type="date"
                value={dateFilter}
                onChange={(e) =>
                  handleDateFilter(e.target.value)
                }
                className="w-[175px] h-[35px] border border-gray-300 rounded-md px-3 text-sm outline-none bg-white text-gray-500"
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

          {/* Table */}
          <div className="bg-white rounded-lg overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead>

                  <tr className="border-b border-gray-300 text-gray-800">

                    <th className="px-4 py-3 text-left">
                      Tarix
                    </th>

                    <th className="px-4 py-3 text-left">
                      İstifadəçi
                    </th>

                    <th className="px-4 py-3 text-left">
                      Rol
                    </th>

                    <th className="px-4 py-3 text-left">
                      IP ünvan
                    </th>

                    <th className="px-4 py-3 text-left">
                      Əməliyyat
                    </th>

                    <th className="px-4 py-3 text-left">
                      Obyekt
                    </th>

                    <th className="px-4 py-3 text-left">
                      Müddət
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {currentLogs.length > 0 ? (
                    currentLogs.map((log) => (

                      <tr
                        key={log.id}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >

                        <td className="px-4 py-3 whitespace-nowrap">
                          {log.fullDate}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {log.user}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {log.role}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {log.ip}
                        </td>

                        <td className="px-4 py-3">

                          <span
                            className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${getOperationStyle(
                              log.operation
                            )}`}
                          >
                            {log.operation}
                          </span>

                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {log.object}
                        </td>

                        <td className="px-4 py-3 whitespace-nowrap">
                          {log.duration}
                        </td>

                      </tr>

                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
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
              totalItems={filteredLogs.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />

          </div>

        </main>

      </div>
    </>
  );
}

export default Audit;