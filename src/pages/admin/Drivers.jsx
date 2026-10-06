import React, { useState } from "react";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";



import Pagination from "../../components/Pagination";

import Sidebar from "../../components/Sidebar";

import Header from "../../components/Header";

import DeleteModal from "../../components/DeleteModal";



import driverorng from "../../assets/icons/driverorng.png";

import driverpurp from "../../assets/icons/driverpurp.png";

import drivergr from "../../assets/icons/drivergr.png";



import userblack from "../../assets/icons/userblack.png";

import phone from "../../assets/icons/phone.png";

import card from "../../assets/icons/card.png";

import close from "../../assets/icons/close.png";

import edit from "../../assets/icons/edit.png";

import deleteicon from "../../assets/icons/deleteicon.png";



function Drivers() {

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedDriver, setSelectedDriver] = useState(null);



  const [driverFilter, setDriverFilter] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [phoneCode, setPhoneCode] = useState("+994");

  const [phoneFilter, setPhoneFilter] = useState("");



  const [currentPage, setCurrentPage] = useState(1);



  const itemsPerPage = 5;



  const statistics = [

    {

      title: "Ümumi",

      value: "48",

      icon: driverorng,

      bg: "bg-[#EA580C4D]",

    },

    {

      title: "Yoldadır",

      value: "25",

      icon: driverpurp,

      bg: "bg-[#875EE533]",

    },

    {

      title: "Boşda",

      value: "18",

      icon: drivergr,

      bg: "bg-[#22C55E33]",

    },

    {

      title: "Qeyri aktiv",

      value: "5",

      icon: close,

      bg: "bg-[#FF2B2B33]",

    },

  ];



  const initialDrivers = [

    {

      id: 1,

      name: "Elvin Məmmədov",

      license: "AA-123456",

      expireDate: "12.08.2027",

      phone: "+994 50 123 45 67",

      status: "Yoldadır",

    },

    {

      id: 2,

      name: "Orxan Hüseynov",

      license: "BB-234567",

      expireDate: "25.11.2027",

      phone: "+994 55 234 56 78",

      status: "Boşda",

    },

    {

      id: 3,

      name: "Tural Abbasov",

      license: "CC-345678",

      expireDate: "05.04.2028",

      phone: "+994 70 345 67 89",

      status: "Yoldadır",

    },

    {

      id: 4,

      name: "Rauf İsmayılov",

      license: "DD-456789",

      expireDate: "18.09.2026",

      phone: "+994 77 456 78 90",

      status: "Qeyri aktiv",

    },

    {

      id: 5,

      name: "Murad Əliyev",

      license: "EE-567890",

      expireDate: "20.01.2028",

      phone: "+994 50 567 89 01",

      status: "Boşda",

    },

    {

      id: 6,

      name: "Kamran Həsənov",

      license: "FF-678901",

      expireDate: "14.06.2027",

      phone: "+994 55 678 90 12",

      status: "Yoldadır",

    },

  ];



  const [drivers, setDrivers] = useState(() => {

    const savedDrivers = localStorage.getItem("drivers");



    return savedDrivers ? JSON.parse(savedDrivers) : initialDrivers;

  });



  const filteredDrivers = drivers.filter((driverItem) => {

    const matchesDriver = driverItem.name

      .toLowerCase()

      .includes(driverFilter.toLowerCase());



    const matchesStatus =

      statusFilter === "" || driverItem.status === statusFilter;



    const matchesPhone =

      phoneFilter === "" ||

      (driverItem.phone.includes(phoneCode) &&

        driverItem.phone

          .replace(phoneCode, "")

          .replace(/\s/g, "")

          .includes(phoneFilter.replace(/\s/g, "")));



    return matchesDriver && matchesStatus && matchesPhone;

  });



  const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);



  const startIndex = (currentPage - 1) * itemsPerPage;



  const currentDrivers = filteredDrivers.slice(

    startIndex,

    startIndex + itemsPerPage

  );



  const getStatusStyle = (status) => {

    const styles = {

      Yoldadır: "bg-[#E8DFFF] text-[#8B5CF6]",

      Boşda: "bg-[#DCEAFF] text-[#4D8FEF]",

      "Qeyri aktiv": "bg-[#FFDADA] text-[#FF3B3B]",

    };



    return styles[status] || "bg-gray-100 text-gray-600";

  };



  const handleFilterChange = (setter, value) => {

    setter(value);

    setCurrentPage(1);

  };



  const handleDelete = () => {

    if (!selectedDriver) return;



    const updatedDrivers = drivers.filter(

      (driver) => driver.id !== selectedDriver.id

    );



    setDrivers(updatedDrivers);



    localStorage.setItem(

      "drivers",

      JSON.stringify(updatedDrivers)

    );



    setIsDeleteModalOpen(false);



    setSelectedDriver(null);



    if (currentDrivers.length === 1 && currentPage > 1) {

      setCurrentPage(currentPage - 1);

    }



    toast.success("Sürücü uğurla silindi!");

  };



  return (

    <>

      <Sidebar />



      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">

        <Header />



        <main className="p-5">



          {/* Filters */}

          <div className="flex items-center gap-3 mb-7">



            {/* Sürücü */}

            <div className="relative">

              <input

                type="text"

                value={driverFilter}

                onChange={(e) =>

                  handleFilterChange(setDriverFilter, e.target.value)

                }

                placeholder="Sürücü"

                className="w-[200px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"

              />



              <span className="absolute right-3 top-2 text-gray-500">

                ⌕

              </span>

            </div>



            {/* Status */}

            <select

              value={statusFilter}

              onChange={(e) =>

                handleFilterChange(setStatusFilter, e.target.value)

              }

              className="w-[180px] h-[35px] border border-gray-300 rounded-md px-3 text-sm outline-none bg-white text-gray-500"

            >

              <option value="">Status</option>

              <option value="Boşda">Boşda</option>

              <option value="Yoldadır">Yoldadır</option>

              <option value="Qeyri aktiv">Qeyri aktiv</option>

            </select>



            {/* Telefon */}

            <div className="flex">



              <select

                value={phoneCode}

                onChange={(e) => {

                  setPhoneCode(e.target.value);

                  setPhoneFilter("");

                  setCurrentPage(1);

                }}

                className="w-[85px] h-[35px] border border-gray-300 rounded-l-md px-2 text-sm outline-none bg-white"

              >

                <option>+994</option>

                <option>+90</option>

                <option>+7</option>

                <option>+995</option>

              </select>



              <input

                type="text"

                value={phoneFilter}

                onChange={(e) =>

                  handleFilterChange(setPhoneFilter, e.target.value)

                }

                placeholder="Telefon"

                className="w-[145px] h-[35px] border border-l-0 border-gray-300 rounded-r-md px-3 text-sm outline-none bg-white"

              />



            </div>



            {/* Yeni sürücü */}

            <Link

              to="/admin/drivers/new"

              className="ml-auto h-[35px] px-5 bg-[#FF5B0A] text-white rounded-lg text-sm flex items-center gap-2"

            >

              <span className="text-xl leading-none">+</span>

              Yeni sürücü

            </Link>



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

                      Sürücü

                    </th>



                    <th className="px-4 py-3 text-left">

                      Sürücülük vəsiqəsinin nömrəsi

                    </th>



                    <th className="px-4 py-3 text-left">

                      Vəsiqə bitmə tarixi

                    </th>



                    <th className="px-4 py-3 text-left">

                      Telefon

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



                  {currentDrivers.length > 0 ? (

                    currentDrivers.map((driverItem) => (

                      <tr

                        key={driverItem.id}

                        className="border-b border-gray-200 hover:bg-gray-50"

                      >



                        <td className="px-4 py-3 whitespace-nowrap">

                          <p className="font-medium">

                            {driverItem.name}

                          </p>

                        </td>



                        <td className="px-4 py-3 whitespace-nowrap">

                          {driverItem.license}

                        </td>



                        <td className="px-4 py-3 whitespace-nowrap">

                          {driverItem.expireDate}

                        </td>



                        <td className="px-4 py-3 whitespace-nowrap">

                          {driverItem.phone}

                        </td>



                        <td className="px-4 py-3">



                          <span

                            className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${getStatusStyle(

                              driverItem.status

                            )}`}

                          >

                            {driverItem.status}

                          </span>



                        </td>



                        <td className="px-4 py-3">



                          <div className="flex items-center justify-center gap-3">



                            {/* Edit */}

                            <Link

                              to={`/admin/drivers/edit/${driverItem.id}`}

                              className="inline-flex items-center justify-center w-8 h-8"

                              title="Redaktə et"

                            >

                              <img

                                src={edit}

                                alt="Redaktə et"

                                className="w-5 h-5 object-contain"

                              />

                            </Link>



                            {/* Delete */}

                            <button

                              className="inline-flex items-center justify-center w-8 h-8"

                              onClick={() => {

                                setSelectedDriver(driverItem);

                                setIsDeleteModalOpen(true);

                              }}

                              title="Sil"

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

                    ))

                  ) : (

                    <tr>

                      <td

                        colSpan="6"

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

              totalItems={filteredDrivers.length}

              itemsPerPage={itemsPerPage}

              onPageChange={setCurrentPage}

            />



          </div>



        </main>



      </div>



      {/* Delete Modal */}

      <DeleteModal

        isOpen={isDeleteModalOpen}

        onClose={() => {

          setIsDeleteModalOpen(false);

          setSelectedDriver(null);

        }}

        onConfirm={handleDelete}

        title="Sürücünü sil"

        data={

          selectedDriver

            ? [

                {

                  label: "Sürücü",

                  value: selectedDriver.name,

                  icon: userblack,

                },

                {

                  label: "Telefon",

                  value: selectedDriver.phone,

                  icon: phone,

                },

                {

                  label: "Vəsiqə nömrəsi",

                  value: selectedDriver.license,

                  icon: card,

                },

              ]

            : []

        }

      />



    </>

  );

}



export default Drivers;