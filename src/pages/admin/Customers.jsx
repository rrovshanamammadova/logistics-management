import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { toast } from "react-toastify";



import Pagination from "../../components/Pagination";

import Sidebar from "../../components/Sidebar";

import Header from "../../components/Header";

import DeleteModal from "../../components/DeleteModal";



import edit from "../../assets/icons/edit.png";

import office from "../../assets/icons/office.png";

import userblack from "../../assets/icons/userblack.png";

import phone from "../../assets/icons/phone.png";

import email from "../../assets/icons/email.png";

import deleteicon from "../../assets/icons/deleteicon.png";



function Customers() {

  const location = useLocation();



  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState(null);



  const initialCustomers = [

    {

      id: 1,

      company: "İTbrains MMC",

      contact: "Kanan Jabiev",

      phone: "+994 50 347 82 19",

      email: "it.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

    {

      id: 2,

      company: "Bravo MMC",

      contact: "Ulvi Jabiev",

      phone: "+994 50 347 82 19",

      email: "orxan.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

    {

      id: 3,

      company: "İTbrains MMC",

      contact: "Ulvi Jabiev",

      phone: "+994 50 347 82 19",

      email: "orxan.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

    {

      id: 4,

      company: "İTbrains MMC",

      contact: "Ulvi Jabiev",

      phone: "+994 50 347 82 19",

      email: "orxan.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

    {

      id: 5,

      company: "İTbrains MMC",

      contact: "Ulvi Jabiev",

      phone: "+994 50 347 82 19",

      email: "orxan.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

    {

      id: 6,

      company: "İTbrains MMC",

      contact: "Ulvi Jabiev",

      phone: "+994 50 347 82 19",

      email: "orxan.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

    {

      id: 7,

      company: "İTbrains MMC",

      contact: "Ulvi Jabiev",

      phone: "+994 50 347 82 19",

      email: "orxan.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

    {

      id: 8,

      company: "İTbrains MMC",

      contact: "Ulvi Jabiev",

      phone: "+994 50 347 82 19",

      email: "orxan.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

    {

      id: 9,

      company: "İTbrains MMC",

      contact: "Ulvi Jabiev",

      phone: "+994 50 347 82 19",

      email: "orxan.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

    {

      id: 10,

      company: "İTbrains MMC",

      contact: "Ulvi Jabiev",

      phone: "+994 50 347 82 19",

      email: "orxan.ismayilov@gmail.com",

      address: "Nizami küçəsi 45, Yasamal r.",

      voen: "-",

    },

  ];



  const [customers, setCustomers] = useState(() => {

    const savedCustomers = localStorage.getItem("customers");



    return savedCustomers

      ? JSON.parse(savedCustomers)

      : initialCustomers;

  });



  // EDIT TOAST

  useEffect(() => {

    if (location.state?.toast === "customer-updated") {

      toast.success("Müştəri uğurla redaktə edildi");



      window.history.replaceState({}, document.title);

    }

  }, [location]);



  const [contactSearch, setContactSearch] = useState("");

  const [companySearch, setCompanySearch] = useState("");

  const [emailSearch, setEmailSearch] = useState("");



  const [activeSearch, setActiveSearch] = useState({

    contact: "",

    company: "",

    email: "",

  });



  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;



  const filteredCustomers = customers.filter((customer) => {

    return (

      customer.contact

        .toLowerCase()

        .includes(activeSearch.contact.toLowerCase()) &&

      customer.company

        .toLowerCase()

        .includes(activeSearch.company.toLowerCase()) &&

      customer.email

        .toLowerCase()

        .includes(activeSearch.email.toLowerCase())

    );

  });



  const startIndex = (currentPage - 1) * itemsPerPage;



  const currentCustomers = filteredCustomers.slice(

    startIndex,

    startIndex + itemsPerPage

  );



  const handleSearch = () => {

    setActiveSearch({

      contact: contactSearch,

      company: companySearch,

      email: emailSearch,

    });



    setCurrentPage(1);

  };



  const contactSuggestions = customers.filter((customer) => {

    const search = contactSearch.toLowerCase();



    return (

      search &&

      customer.contact.toLowerCase().includes(search)

    );

  });



  const companySuggestions = customers.filter((customer) => {

    const search = companySearch.toLowerCase();



    return (

      search &&

      customer.company.toLowerCase().includes(search)

    );

  });



  const emailSuggestions = customers.filter((customer) => {

    const search = emailSearch.toLowerCase();



    return (

      search &&

      customer.email.toLowerCase().includes(search)

    );

  });



  return (

    <>

      <Sidebar />



      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">

        <Header />



        <main className="p-5">

          <div className="bg-white rounded-lg">



            <div className="flex items-center justify-between px-6 py-4">



              <div className="flex items-center gap-2">



                {/* CONTACT */}

                <div className="relative">

                  <input

                    type="text"

                    value={contactSearch}

                    onChange={(e) => setContactSearch(e.target.value)}

                    placeholder="Əlaqə şəxsi"

                    className="w-[177px] h-[35px] bg-white border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none focus:border-[#ff5b0a]"

                  />



                  <button

                    type="button"

                    onClick={handleSearch}

                    className="absolute right-3 top-[9px] text-gray-500 hover:text-[#ff5b0a]"

                  >

                    ⌕

                  </button>



                  {contactSearch && contactSuggestions.length > 0 && (

                    <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

                      {contactSuggestions.map((customer) => (

                        <button

                          key={customer.id}

                          type="button"

                          onClick={() => {

                            setContactSearch(customer.contact);



                            setActiveSearch({

                              ...activeSearch,

                              contact: customer.contact,

                            });



                            setCurrentPage(1);

                          }}

                          className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"

                        >

                          {customer.contact}

                        </button>

                      ))}

                    </div>

                  )}

                </div>



                {/* COMPANY */}

                <div className="relative">

                  <input

                    type="text"

                    value={companySearch}

                    onChange={(e) => setCompanySearch(e.target.value)}

                    placeholder="Şirkət"

                    className="w-[177px] h-[35px] bg-white border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none focus:border-[#ff5b0a]"

                  />



                  <button

                    type="button"

                    onClick={handleSearch}

                    className="absolute right-3 top-[9px] text-gray-500 hover:text-[#ff5b0a]"

                  >

                    ⌕

                  </button>



                  {companySearch && companySuggestions.length > 0 && (

                    <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

                      {companySuggestions.map((customer) => (

                        <button

                          key={customer.id}

                          type="button"

                          onClick={() => {

                            setCompanySearch(customer.company);



                            setActiveSearch({

                              ...activeSearch,

                              company: customer.company,

                            });



                            setCurrentPage(1);

                          }}

                          className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"

                        >

                          {customer.company}

                        </button>

                      ))}

                    </div>

                  )}

                </div>



                {/* EMAIL */}

                <div className="relative">

                  <input

                    type="text"

                    value={emailSearch}

                    onChange={(e) => setEmailSearch(e.target.value)}

                    placeholder="Email"

                    className="w-[177px] h-[35px] bg-white border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none focus:border-[#ff5b00]"

                  />



                  <button

                    type="button"

                    onClick={handleSearch}

                    className="absolute right-3 top-[9px] text-gray-500 hover:text-[#ff5b0a]"

                  >

                    ⌕

                  </button>



                  {emailSearch && emailSuggestions.length > 0 && (

                    <div className="absolute top-[40px] left-0 w-[260px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

                      {emailSuggestions.map((customer) => (

                        <button

                          key={customer.id}

                          type="button"

                          onClick={() => {

                            setEmailSearch(customer.email);



                            setActiveSearch({

                              ...activeSearch,

                              email: customer.email,

                            });



                            setCurrentPage(1);

                          }}

                          className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"

                        >

                          {customer.email}

                        </button>

                      ))}

                    </div>

                  )}

                </div>

              </div>



              <Link

                to="/admin/customers/new"

                className="h-[35px] px-5 bg-[#FF5B0A] text-white rounded-lg text-sm flex items-center gap-2"

              >

                <span className="text-xl leading-none">+</span>

                Yeni müştəri

              </Link>



            </div>



            <div className="overflow-x-auto">



              <table className="w-full text-sm">



                <thead>

                  <tr className="border-b border-gray-200 text-gray-700">



                    <th className="px-4 py-3 text-left font-medium">

                      Şirkət

                    </th>



                    <th className="px-4 py-3 text-left font-medium">

                      Əlaqə şəxsi

                    </th>



                    <th className="px-4 py-3 text-left font-medium">

                      Telefon

                    </th>



                    <th className="px-4 py-3 text-left font-medium">

                      Email

                    </th>



                    <th className="px-4 py-3 text-left font-medium">

                      Ünvan

                    </th>



                    <th className="px-4 py-3 text-left font-medium">

                      VÖEN

                    </th>



                    <th className="px-4 py-3"></th>



                  </tr>

                </thead>



                <tbody>



                  {currentCustomers.map((customer) => (

                    <tr

                      key={customer.id}

                      className="border-b border-gray-100"

                    >



                      <td className="px-4 py-3 whitespace-nowrap">

                        {customer.company}

                      </td>



                      <td className="px-4 py-3 whitespace-nowrap">

                        {customer.contact}

                      </td>



                      <td className="px-4 py-3 whitespace-nowrap">

                        {customer.phone}

                      </td>



                      <td className="px-4 py-3 whitespace-nowrap">

                        {customer.email}

                      </td>



                      <td className="px-4 py-3 max-w-[180px] truncate">

                        {customer.address}

                      </td>



                      <td className="px-4 py-3 whitespace-nowrap">

                        {customer.voen}

                      </td>



                      <td className="px-4 py-3">



                        <div className="flex items-center justify-end gap-3">



                          <Link

                            to={`/admin/customers/edit/${customer.id}`}

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

                              setSelectedCustomer(customer);

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

              totalItems={filteredCustomers.length}

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

          setSelectedCustomer(null);

        }}



        onConfirm={() => {

          if (!selectedCustomer) return;



          const updatedCustomers = customers.filter(

            (customer) => customer.id !== selectedCustomer.id

          );



          setCustomers(updatedCustomers);



          localStorage.setItem(

            "customers",

            JSON.stringify(updatedCustomers)

          );



          setIsDeleteModalOpen(false);

          setSelectedCustomer(null);



          if (currentCustomers.length === 1 && currentPage > 1) {

            setCurrentPage(currentPage - 1);

          }



          toast.success("Müştəri uğurla silindi");

        }}



        title="Müştərini sil"



        data={

          selectedCustomer

            ? [

                {

                  label: "Şirkət",

                  value: selectedCustomer.company,

                  icon: office,

                },

                {

                  label: "Əlaqəli şəxs",

                  value: selectedCustomer.contact,

                  icon: userblack,

                },

                {

                  label: "Telefon",

                  value: selectedCustomer.phone,

                  icon: phone,

                },

                {

                  label: "E-mail",

                  value: selectedCustomer.email,

                  icon: email,

                },

              ]

            : []

        }

      />

    </>

  );

}



export default Customers;