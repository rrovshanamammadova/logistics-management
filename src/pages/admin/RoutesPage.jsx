import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

import edit from "../../assets/icons/edit.png";
import routespurp from "../../assets/icons/routespurp.png";
import routesgr from "../../assets/icons/routesgr.png";
import routesorng from "../../assets/icons/routesorng.png";
import routesyell from "../../assets/icons/routesyell.png";

function RoutesPage() {

  const statistics = [
    {
      title: "Ümumi",
      value: "24",
      bg: "bg-[#EA580C4D]",
      icon: routesorng,
    },
    {
      title: "Yoldadır",
      value: "8",
      bg: "bg-[#875EE533]",
      icon: routespurp,
    },
    {
      title: "Planlaşdırılıb",
      value: "10",
      bg: "bg-[#FFB80033]",
      icon: routesyell,
    },
    {
      title: "Tamamlanıb",
      value: "6",
      bg: "bg-[#22C55E33]",
      icon: routesgr,
    },
  ];

  const routes = [
    {
      id: 1,
      vehicle: "Mercedes Sprinter",
      plate: "99-AB-123",
      driver: "Elvin Məmmədov",
      orders: "5",
      stops: "3",
      time: "2 saat 20 dəq",
      distance: "145 km",
      date: "18.08.2026",
      status: "Yoldadır",
    },
    {
      id: 2,
      vehicle: "Ford Transit",
      plate: "90-CD-456",
      driver: "Murad Əliyev",
      orders: "4",
      stops: "2",
      time: "1 saat 45 dəq",
      distance: "98 km",
      date: "18.08.2026",
      status: "Planlaşdırılıb",
    },
    {
      id: 3,
      vehicle: "Isuzu NPR",
      plate: "10-EF-789",
      driver: "Rauf İsmayılov",
      orders: "6",
      stops: "4",
      time: "3 saat 10 dəq",
      distance: "187 km",
      date: "17.08.2026",
      status: "Tamamlanıb",
    },
    {
      id: 4,
      vehicle: "Mercedes Sprinter",
      plate: "99-GH-321",
      driver: "Tural Abbasov",
      orders: "3",
      stops: "2",
      time: "1 saat 30 dəq",
      distance: "76 km",
      date: "18.08.2026",
      status: "Planlaşdırılıb",
    },
    {
      id: 5,
      vehicle: "Ford Transit",
      plate: "90-KL-654",
      driver: "Kənan Rəhimov",
      orders: "7",
      stops: "5",
      time: "3 saat 40 dəq",
      distance: "210 km",
      date: "17.08.2026",
      status: "Tamamlanıb",
    },
  ];

  /* =========================
     SEARCH STATES
  ========================= */

  const [vehicleSearch, setVehicleSearch] = useState("");
  const [driverSearch, setDriverSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");

  const [activeSearch, setActiveSearch] = useState({
    vehicle: "",
    driver: "",
    status: "",
  });

  /* =========================
     PAGINATION
  ========================= */

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  /* =========================
     SEARCH FUNCTION
  ========================= */

  const handleSearch = () => {
    setActiveSearch({
      vehicle: vehicleSearch,
      driver: driverSearch,
      status: statusSearch,
    });

    setCurrentPage(1);
  };

  /* =========================
     FILTER
  ========================= */

  const filteredRoutes = routes.filter((route) => {

    return (
      route.vehicle
        .toLowerCase()
        .includes(activeSearch.vehicle.toLowerCase()) &&

      route.driver
        .toLowerCase()
        .includes(activeSearch.driver.toLowerCase()) &&

      route.status
        .toLowerCase()
        .includes(activeSearch.status.toLowerCase())
    );

  });

  /* =========================
     PAGINATION DATA
  ========================= */

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentRoutes = filteredRoutes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  /* =========================
     SUGGESTIONS
  ========================= */

  const vehicleSuggestions = routes.filter((route) => {

    return (
      vehicleSearch &&
      route.vehicle
        .toLowerCase()
        .includes(vehicleSearch.toLowerCase())
    );

  });

  const driverSuggestions = routes.filter((route) => {

    return (
      driverSearch &&
      route.driver
        .toLowerCase()
        .includes(driverSearch.toLowerCase())
    );

  });

  /* =========================
     STATUS STYLE
  ========================= */

  const getStatusStyle = (status) => {

    const styles = {
      Yoldadır: "bg-[#E8DFFF] text-[#8B5CF6]",
      Planlaşdırılıb: "bg-[#DCEAFF] text-[#4D8FEF]",
      Tamamlanıb: "bg-[#D5F5E3] text-[#20C56A]",
    };

    return styles[status] || "bg-gray-100 text-gray-600";
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3]">

        <Header />

        <main className="p-5">

          {/* =========================
              FILTERS
          ========================= */}

          <div className="flex items-center gap-3 mb-7">

            {/* NƏQLİYYAT */}

            <div className="relative">

              <input
                type="text"
                placeholder="Nəqliyyat"
                value={vehicleSearch}
                onChange={(e) => setVehicleSearch(e.target.value)}
                className="w-[190px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-[8px] text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {vehicleSearch && vehicleSuggestions.length > 0 && (

                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">

                  {vehicleSuggestions.map((route) => (

                    <button
                      key={route.id}
                      type="button"
                      onClick={() => {

                        setVehicleSearch(route.vehicle);

                        setActiveSearch({
                          ...activeSearch,
                          vehicle: route.vehicle,
                        });

                        setCurrentPage(1);

                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {route.vehicle}
                    </button>

                  ))}

                </div>

              )}

            </div>


            {/* SÜRÜCÜ */}

            <div className="relative">

              <input
                type="text"
                placeholder="Sürücü"
                value={driverSearch}
                onChange={(e) => setDriverSearch(e.target.value)}
                className="w-[190px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-[8px] text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {driverSearch && driverSuggestions.length > 0 && (

                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">

                  {driverSuggestions.map((route) => (

                    <button
                      key={route.id}
                      type="button"
                      onClick={() => {

                        setDriverSearch(route.driver);

                        setActiveSearch({
                          ...activeSearch,
                          driver: route.driver,
                        });

                        setCurrentPage(1);

                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {route.driver}
                    </button>

                  ))}

                </div>

              )}

            </div>


            {/* STATUS */}

            <select
              value={statusSearch}
              onChange={(e) => {
                setStatusSearch(e.target.value);

                setActiveSearch({
                  ...activeSearch,
                  status: e.target.value,
                });

                setCurrentPage(1);
              }}
              className="w-[180px] h-[35px] border border-gray-300 rounded-md px-3 text-sm text-gray-500 outline-none bg-white"
            >

              <option value="">
                Status
              </option>

              <option value="Yoldadır">
                Yoldadır
              </option>

              <option value="Planlaşdırılıb">
                Planlaşdırılıb
              </option>

              <option value="Tamamlanıb">
                Tamamlanıb
              </option>

            </select>


            {/* TARİX */}

            <input
              type="date"
              className="w-[160px] h-[35px] border border-gray-300 rounded-md px-3 text-sm text-gray-500 outline-none bg-white"
            />


            {/* YENİ MARŞRUT */}

            <Link
              to="/admin/routes/new"
              className="ml-auto h-[35px] px-5 bg-[#FF5B0A] text-white rounded-lg text-sm flex items-center gap-2"
            >

              <span className="text-xl leading-none">
                +
              </span>

              Yeni marşrut

            </Link>

          </div>


          {/* =========================
              STATISTICS
          ========================= */}

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

                  <p className="text-[32px] leading-8 mt-1">
                    {item.value}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* =========================
              TABLE
          ========================= */}

          <div className="bg-white rounded-lg overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead>

                  <tr className="border-b border-gray-300 text-gray-800">

                    <th className="px-4 py-3 text-left">
                      Nəqliyyat
                    </th>

                    <th className="px-4 py-3 text-left">
                      Sürücü
                    </th>

                    <th className="px-4 py-3 text-left">
                      Sifariş sayı
                    </th>

                    <th className="px-4 py-3 text-left">
                      Dayanacaq sayı
                    </th>

                    <th className="px-4 py-3 text-left">
                      Təxmini vaxt
                    </th>

                    <th className="px-4 py-3 text-left">
                      Məsafə
                    </th>

                    <th className="px-4 py-3 text-left">
                      Tarix
                    </th>

                    <th className="px-4 py-3 text-left">
                      Status
                    </th>

                    <th className="px-4 py-3 text-center">
                      Əməliyyatlar
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {currentRoutes.length > 0 ? (

                    currentRoutes.map((route) => (

                      <tr
                        key={route.id}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >

                        <td className="px-4 py-3 whitespace-nowrap">

                          <p className="font-medium">
                            {route.vehicle}
                          </p>

                          <p className="text-[10px] text-gray-400 mt-1">
                            {route.plate}
                          </p>

                        </td>


                        <td className="px-4 py-3 whitespace-nowrap">
                          {route.driver}
                        </td>


                        <td className="px-4 py-3">
                          {route.orders}
                        </td>


                        <td className="px-4 py-3">
                          {route.stops}
                        </td>


                        <td className="px-4 py-3 whitespace-nowrap">
                          {route.time}
                        </td>


                        <td className="px-4 py-3">
                          {route.distance}
                        </td>


                        <td className="px-4 py-3 whitespace-nowrap">
                          {route.date}
                        </td>


                        <td className="px-4 py-3">

                          <span
                            className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${getStatusStyle(
                              route.status
                            )}`}
                          >
                            {route.status}
                          </span>

                        </td>


                        <td className="px-4 py-3 text-center">

                          <Link
                            to={`/admin/orders/edit/${route.id}`}
                            className="inline-flex items-center justify-center w-8 h-8"
                          >

                            <img
                              src={edit}
                              alt="Redaktə et"
                              className="w-5 h-5 object-contain"
                            />

                          </Link>

                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="9"
                        className="text-center py-10 text-gray-500"
                      >
                        Axtarışa uyğun marşrut tapılmadı.
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>


            {/* =========================
                PAGINATION
            ========================= */}

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

export default RoutesPage;