import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import DeleteModal from "../../components/DeleteModal";

import userblack from "../../assets/icons/userblack.png";
import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";
import updates from "../../assets/icons/updates.png";
import driverpurp from "../../assets/icons/driverpurp.png";
import driverorng from "../../assets/icons/driverorng.png";
import drivergr from "../../assets/icons/drivergr.png";
import close from "../../assets/icons/close.png";
import edit from "../../assets/icons/edit.png";
import deleteicon from "../../assets/icons/deleteicon.png";

function Employees() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    if (location.state?.toast === "employee-updated") {
      toast.success("İşçi uğurla redaktə edildi");

      navigate("/admin/employees", {
        replace: true,
        state: {},
      });
    }
  }, [location.state, navigate]);

  const statistics = [
    {
      title: "Ümumi",
      value: "48",
      icon: driverpurp,
      bg: "bg-[#875EE533]",
    },
    {
      title: "Aktiv",
      value: "35",
      icon: driverorng,
      bg: "bg-[#EA580C4D]",
    },
    {
      title: "Boşda",
      value: "8",
      icon: drivergr,
      bg: "bg-[#22C55E33]",
    },
    {
      title: "Qeyri aktiv",
      value: "5",
      icon: close,
      bg: "bg-[#FFDCDC]",
    },
  ];

  const initialEmployees = [
    {
      id: 1,
      name: "Kənan Rəhimov",
      position: "Logistika meneceri",
      startDate: "12.03.2024",
      phone: "+994 50 123 45 67",
      email: "orxan.ismayilov@gmail.com",
      salary: "1,500 ₼",
      status: "Aktiv",
    },
    {
      id: 2,
      name: "Elvin Məmmədov",
      position: "Sürücü",
      startDate: "18.04.2024",
      phone: "+994 55 234 56 78",
      email: "orxan.ismayilov@gmail.com",
      salary: "1,200 ₼",
      status: "Aktiv",
    },
    {
      id: 3,
      name: "Murad Əliyev",
      position: "Anbar işçisi",
      startDate: "05.06.2024",
      phone: "+994 70 345 67 89",
      email: "orxan.ismayilov@gmail.com",
      salary: "900 ₼",
      status: "Boşda",
    },
    {
      id: 4,
      name: "Orxan Hüseynov",
      position: "Sürücü",
      startDate: "22.07.2024",
      phone: "+994 77 456 78 90",
      email: "orxan.ismayilov@gmail.com",
      salary: "1,100 ₼",
      status: "Aktiv",
    },
    {
      id: 5,
      name: "Rauf İsmayılov",
      position: "Anbar işçisi",
      startDate: "10.08.2024",
      phone: "+994 50 567 89 01",
      email: "orxan.ismayilov@gmail.com",
      salary: "850 ₼",
      status: "Qeyri aktiv",
    },
    {
      id: 6,
      name: "Tural Abbasov",
      position: "Sürücü",
      startDate: "15.09.2024",
      phone: "+994 55 678 90 12",
      email: "orxan.ismayilov@gmail.com",
      salary: "1,250 ₼",
      status: "Aktiv",
    },
  ];

  const [employees, setEmployees] = useState(() => {
  const savedEmployees = localStorage.getItem("employees");

  return savedEmployees
    ? JSON.parse(savedEmployees)
    : initialEmployees;
});

  // =========================
  // SEARCH STATES
  // =========================

  const [nameSearch, setNameSearch] = useState("");
  const [positionSearch, setPositionSearch] = useState("");
  const [phoneSearch, setPhoneSearch] = useState("");

  const [activeSearch, setActiveSearch] = useState({
    name: "",
    position: "",
    phone: "",
  });

  // =========================
  // FILTER
  // =========================

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name
        .toLowerCase()
        .includes(activeSearch.name.toLowerCase()) &&

      employee.position
        .toLowerCase()
        .includes(activeSearch.position.toLowerCase()) &&

      employee.phone
        .toLowerCase()
        .includes(activeSearch.phone.toLowerCase())
    );
  });

  // =========================
  // PAGINATION
  // =========================

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // =========================
  // SEARCH
  // =========================

  const handleSearch = () => {
    setActiveSearch({
      name: nameSearch,
      position: positionSearch,
      phone: phoneSearch,
    });

    setCurrentPage(1);
  };

  // =========================
  // SUGGESTIONS
  // =========================

  const nameSuggestions = employees.filter((employee) => {
    const search = nameSearch.toLowerCase();

    return (
      search &&
      employee.name.toLowerCase().includes(search)
    );
  });

  const positionSuggestions = employees.filter((employee) => {
    const search = positionSearch.toLowerCase();

    return (
      search &&
      employee.position.toLowerCase().includes(search)
    );
  });

  const phoneSuggestions = employees.filter((employee) => {
    const search = phoneSearch.toLowerCase();

    return (
      search &&
      employee.phone.toLowerCase().includes(search)
    );
  });

  // =========================
  // STATUS STYLE
  // =========================

  const getStatusStyle = (status) => {
    const styles = {
      Aktiv: "bg-[#D5F5E3] text-[#20C56A]",
      Boşda: "bg-[#DCEAFF] text-[#4D8FEF]",
      "Qeyri aktiv": "bg-[#FFDADA] text-[#FF3B3B]",
    };

    return styles[status] || "bg-gray-100 text-gray-600";
  };

  return (
    <>
      <Sidebar />

      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">

        <Header />

        <main className="p-5">

          {/* =========================
              FILTERS
          ========================= */}

          <div className="flex items-center gap-3 mb-7">

            {/* İŞÇİ */}

            <div className="relative">

              <input
                type="text"
                placeholder="İşçi"
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
                className="w-[200px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-[8px] text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {nameSearch && nameSuggestions.length > 0 && (
                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

                  {nameSuggestions.map((employee) => (
                    <button
                      key={employee.id}
                      type="button"
                      onClick={() => {
                        setNameSearch(employee.name);

                        setActiveSearch({
                          ...activeSearch,
                          name: employee.name,
                        });

                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {employee.name}
                    </button>
                  ))}

                </div>
              )}

            </div>


            {/* VƏZİFƏ */}

            <div className="relative">

              <input
                type="text"
                placeholder="Vəzifə"
                value={positionSearch}
                onChange={(e) => setPositionSearch(e.target.value)}
                className="w-[200px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-[8px] text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {positionSearch && positionSuggestions.length > 0 && (
                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

                  {positionSuggestions.map((employee) => (
                    <button
                      key={employee.id}
                      type="button"
                      onClick={() => {
                        setPositionSearch(employee.position);

                        setActiveSearch({
                          ...activeSearch,
                          position: employee.position,
                        });

                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {employee.position}
                    </button>
                  ))}

                </div>
              )}

            </div>


            {/* TELEFON */}

            <div className="relative">

              <input
                type="text"
                placeholder="Telefon nömrəsi"
                value={phoneSearch}
                onChange={(e) => setPhoneSearch(e.target.value)}
                className="w-[200px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-[8px] text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {phoneSearch && phoneSuggestions.length > 0 && (
                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

                  {phoneSuggestions.map((employee) => (
                    <button
                      key={employee.id}
                      type="button"
                      onClick={() => {
                        setPhoneSearch(employee.phone);

                        setActiveSearch({
                          ...activeSearch,
                          phone: employee.phone,
                        });

                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {employee.phone}
                    </button>
                  ))}

                </div>
              )}

            </div>


            {/* YENİ İŞÇİ */}

            <Link
              to="/admin/employees/new"
              className="ml-auto h-[35px] px-5 bg-[#FF5B0A] text-white rounded-lg text-sm flex items-center gap-2"
            >
              <span className="text-xl leading-none">
                +
              </span>

              Yeni işçi
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


          {/* =========================
              TABLE
          ========================= */}

          <div className="bg-white rounded-lg overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead>

                  <tr className="border-b border-gray-300 text-gray-800">

                    <th className="px-4 py-3 text-left">
                      İşçi
                    </th>

                    <th className="px-4 py-3 text-left">
                      Vəzifə
                    </th>

                    <th className="px-4 py-3 text-left">
                      İşə başlama tarixi
                    </th>

                    <th className="px-4 py-3 text-left">
                      Telefon
                    </th>

                    <th className="px-4 py-3 text-left">
                      Email
                    </th>

                    <th className="px-4 py-3 text-left">
                      Maaş
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

                  {currentEmployees.map((employee) => (

                    <tr
                      key={employee.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >

                      <td className="px-4 py-3 whitespace-nowrap">
                        {employee.name}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {employee.position}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {employee.startDate}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {employee.phone}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {employee.email}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {employee.salary}
                      </td>

                      <td className="px-4 py-3">

                        <span
                          className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${getStatusStyle(
                            employee.status
                          )}`}
                        >
                          {employee.status}
                        </span>

                      </td>

                      <td className="px-4 py-3">

                        <div className="flex items-center justify-center gap-3">

                          <Link
                            to={`/admin/employees/edit/${employee.id}`}
                            className="inline-flex items-center justify-center w-8 h-8"
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
                              setSelectedEmployee(employee);
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


            {/* PAGINATION */}

            <Pagination
              currentPage={currentPage}
              totalItems={filteredEmployees.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />

          </div>

        </main>

      </div>


      {/* DELETE MODAL */}

      <DeleteModal
        isOpen={isDeleteModalOpen}

        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedEmployee(null);
        }}

        onConfirm={() => {
  if (!selectedEmployee) return;

  const updatedEmployees = employees.filter(
    (employee) => employee.id !== selectedEmployee.id
  );

  setEmployees(updatedEmployees);

  localStorage.setItem(
    "employees",
    JSON.stringify(updatedEmployees)
  );

  setIsDeleteModalOpen(false);
  setSelectedEmployee(null);

  toast.success("İşçi uğurla silindi");

  if (currentEmployees.length === 1 && currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
}}

        title="İşçini sil"

        data={
          selectedEmployee
            ? [
                {
                  label: "Ad Soyad",
                  value: selectedEmployee.name,
                  icon: userblack,
                },
                {
                  label: "Vəzifə",
                  value: selectedEmployee.position,
                  icon: updates,
                },
                {
                  label: "Telefon",
                  value: selectedEmployee.phone,
                  icon: phone,
                },
                {
                  label: "E-mail",
                  value: selectedEmployee.email,
                  icon: email,
                },
              ]
            : []
        }
      />

    </>
  );
}
 
export default Employees;