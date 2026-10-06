
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DeleteModal from "../../components/DeleteModal";

import car from "../../assets/icons/car.png";
import card from "../../assets/icons/card.png";
import truck from "../../assets/icons/truck.png";
import deliverytruck from "../../assets/icons/deliverytruck.png";
import wrenchyellow from "../../assets/icons/wrenchyellow.png";
import lorryorng from "../../assets/icons/lorryorng.png";
import lorrypurp from "../../assets/icons/lorrypurp.png";
import lorrygr from "../../assets/icons/lorrygr.png";
import edit from "../../assets/icons/edit.png";
import deleteicon from "../../assets/icons/deleteicon.png";

function Vehicles() {
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const statistics = [
    {
      title: "Ümumi",
      value: "24",
      icon: lorryorng,
      bg: "bg-[#EA580C4D]",
    },
    {
      title: "Boş",
      value: "8",
      icon: lorrygr,
      bg: "bg-[#22C55E33]",
    },
    {
      title: "Yoldadır",
      value: "12",
      icon: lorrypurp,
      bg: "bg-[#875EE533]",
    },
    {
      title: "Servisdə",
      value: "4",
      icon: wrenchyellow,
      bg: "bg-[#FFB80033]",
    },
  ];

  const initialVehicles = [
    {
      id: 1,
      plate: "10-AA-123",
      brand: "Mercedes-Benz",
      model: "Actros",
      status: "Yoldadır",
      inspectionDate: "15.09.2026",
      capacity: "20 ton",
    },
    {
      id: 2,
      plate: "10-AA-123",
      brand: "Mercedes-Benz",
      model: "Actros",
      status: "Yoldadır",
      inspectionDate: "15.09.2026",
      capacity: "20 ton",
    },
    {
      id: 3,
      plate: "10-AA-123",
      brand: "Mercedes-Benz",
      model: "Actros",
      status: "Yoldadır",
      inspectionDate: "15.09.2026",
      capacity: "20 ton",
    },
    {
      id: 4,
      plate: "10-AA-123",
      brand: "Mercedes-Benz",
      model: "Actros",
      status: "Yoldadır",
      inspectionDate: "15.09.2026",
      capacity: "20 ton",
    },
    {
      id: 5,
      plate: "10-AA-123",
      brand: "Mercedes-Benz",
      model: "Actros",
      status: "Yoldadır",
      inspectionDate: "15.09.2026",
      capacity: "20 ton",
    },
    {
      id: 6,
      plate: "10-AA-123",
      brand: "Mercedes-Benz",
      model: "Actros",
      status: "Yoldadır",
      inspectionDate: "15.09.2026",
      capacity: "20 ton",
    },
  ];

  const [vehicles, setVehicles] = useState(() => {
    const savedVehicles = localStorage.getItem("vehicles");

    return savedVehicles
      ? JSON.parse(savedVehicles)
      : initialVehicles;
  });

  // =========================
  // EDIT TOAST
  // =========================

  useEffect(() => {
    const message = localStorage.getItem("toastMessage");

    if (message) {
      toast.success(message);
      localStorage.removeItem("toastMessage");
    }
  }, []);

  // =========================
  // SEARCH
  // =========================

  const [brandSearch, setBrandSearch] = useState("");
  const [modelSearch, setModelSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");

  const [activeSearch, setActiveSearch] = useState({
    brand: "",
    model: "",
    status: "",
  });

  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      vehicle.brand
        .toLowerCase()
        .includes(activeSearch.brand.toLowerCase()) &&
      vehicle.model
        .toLowerCase()
        .includes(activeSearch.model.toLowerCase()) &&
      (
        activeSearch.status === "" ||
        vehicle.status === activeSearch.status
      )
    );
  });

  // =========================
  // PAGINATION
  // =========================

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentVehicles = filteredVehicles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // =========================
  // STATUS STYLE
  // =========================

  const getStatusStyle = (status) => {
    const styles = {
      Boş: "bg-[#D5F5E3] text-[#20C56A]",
      Yoldadır: "bg-[#E8DFFF] text-[#8B5CF6]",
      Yüklənir: "bg-[#DCEAFF] text-[#4D8FEF]",
      Servisdə: "bg-[#FFDADA] text-[#FF3B3B]",
    };

    return styles[status] || "bg-gray-100 text-gray-600";
  };

  // =========================
  // SEARCH
  // =========================

  const handleSearch = () => {
    setActiveSearch({
      brand: brandSearch,
      model: modelSearch,
      status: statusSearch,
    });

    setCurrentPage(1);
  };

  // =========================
  // SUGGESTIONS
  // =========================

  const brandSuggestions = vehicles.filter((vehicle) => {
    const search = brandSearch.toLowerCase();

    return (
      search &&
      vehicle.brand.toLowerCase().includes(search)
    );
  });

  const modelSuggestions = vehicles.filter((vehicle) => {
    const search = modelSearch.toLowerCase();

    return (
      search &&
      vehicle.model.toLowerCase().includes(search)
    );
  });

  // =========================
  // DELETE
  // =========================

  const handleDelete = () => {
    if (!selectedVehicle) return;

    const updatedVehicles = vehicles.filter(
      (vehicle) => vehicle.id !== selectedVehicle.id
    );

    setVehicles(updatedVehicles);

    localStorage.setItem(
      "vehicles",
      JSON.stringify(updatedVehicles)
    );

    setIsDeleteModalOpen(false);
    setSelectedVehicle(null);

    toast.success("Nəqliyyat uğurla silindi");

    if (currentVehicles.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Sidebar />

      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">

        <Header />

        <main className="p-5">

          <div className="flex items-center gap-3 mb-7">

            {/* MARKA */}

            <div className="relative">

              <input
                type="text"
                placeholder="Marka"
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
                className="w-[170px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-2 text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {brandSearch && brandSuggestions.length > 0 && (
                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

                  {brandSuggestions.map((vehicle) => (
                    <button
                      key={vehicle.id}
                      type="button"
                      onClick={() => {
                        setBrandSearch(vehicle.brand);

                        setActiveSearch({
                          ...activeSearch,
                          brand: vehicle.brand,
                        });

                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {vehicle.brand}
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* MODEL */}

            <div className="relative">

              <input
                type="text"
                placeholder="Model"
                value={modelSearch}
                onChange={(e) => setModelSearch(e.target.value)}
                className="w-[170px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-2 text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {modelSearch && modelSuggestions.length > 0 && (
                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

                  {modelSuggestions.map((vehicle) => (
                    <button
                      key={vehicle.id}
                      type="button"
                      onClick={() => {
                        setModelSearch(vehicle.model);

                        setActiveSearch({
                          ...activeSearch,
                          model: vehicle.model,
                        });

                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {vehicle.model}
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
              className="w-[170px] h-[35px] border border-gray-300 rounded-md px-3 text-sm outline-none bg-white text-gray-500"
            >

              <option value="">Status</option>
              <option value="Boş">Boş</option>
              <option value="Servisdə">Servisdə</option>
              <option value="Yüklənir">Yüklənir</option>
              <option value="Yoldadır">Yoldadır</option>

            </select>

            {/* XƏRC */}

            <button
              className="ml-auto h-[35px] px-5 border border-[#FF5B0A] text-[#FF5B0A] rounded-lg text-sm"
            >
              Xərc əlavə et
            </button>

            {/* YENİ NƏQLİYYAT */}

            <Link
              to="/admin/vehicles/new"
              className="h-[35px] px-5 bg-[#FF5B0A] text-white rounded-lg text-sm flex items-center gap-2"
            >
              <span className="text-xl leading-none">+</span>
              Yeni nəqliyyat
            </Link>

          </div>

          {/* STATISTICS */}

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

          {/* TABLE */}

          <div className="bg-white rounded-lg overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead>

                  <tr className="border-b border-gray-300 text-gray-800">

                    <th className="px-4 py-3 text-left">
                      Dövlət nömrəsi
                    </th>

                    <th className="px-4 py-3 text-left">
                      Marka
                    </th>

                    <th className="px-4 py-3 text-left">
                      Model
                    </th>

                    <th className="px-4 py-3 text-left">
                      Status
                    </th>

                    <th className="px-4 py-3 text-left">
                      Texniki baxış tarixi
                    </th>

                    <th className="px-4 py-3 text-left">
                      Daşıma tutumu
                    </th>

                    <th className="px-4 py-3 text-center">
                      Əməliyyatlar
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {currentVehicles.map((vehicle) => (

                    <tr
                      key={vehicle.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >

                      <td className="px-4 py-3 whitespace-nowrap font-medium">
                        {vehicle.plate}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {vehicle.brand}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {vehicle.model}
                      </td>

                      <td className="px-4 py-3">

                        <span
                          className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${getStatusStyle(
                            vehicle.status
                          )}`}
                        >
                          {vehicle.status}
                        </span>

                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {vehicle.inspectionDate}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {vehicle.capacity}
                      </td>

                      <td className="px-4 py-3">

                        <div className="flex items-center justify-center gap-3">

                          <Link
                            to={`/admin/vehicles/edit/${vehicle.id}`}
                            className="inline-flex items-center justify-center w-8 h-8"
                            title="Redaktə et"
                          >
                            <img
                              src={edit}
                              alt="Redaktə et"
                              className="w-5 h-5 object-contain"
                            />
                          </Link>

                          <button
                            className="inline-flex items-center justify-center w-8 h-8"
                            onClick={() => {
                              setSelectedVehicle(vehicle);
                              setIsDeleteModalOpen(true);
                            }}
                          >
                            <img
                              src={deleteicon}
                              alt="Sil"
                              className="w-5 h-5 object-contain"
                            />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            <Pagination
              currentPage={currentPage}
              totalItems={filteredVehicles.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />

          </div>

        </main>

      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}

        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedVehicle(null);
        }}

        onConfirm={handleDelete}

        title="Nəqliyyatı sil"

        data={
          selectedVehicle
            ? [
                {
                  label: "Marka",
                  value: selectedVehicle.brand,
                  icon: truck,
                },
                {
                  label: "Model",
                  value: selectedVehicle.model,
                  icon: deliverytruck,
                },
                {
                  label: "Dövlət nömrəsi",
                  value: selectedVehicle.plate,
                  icon: card,
                },
              ]
            : []
        }
      />

    </>
  );
}

export default Vehicles;

