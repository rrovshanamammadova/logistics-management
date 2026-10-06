
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function EditCustomer() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [company, setCompany] = useState("Kenan");
  const [firstName, setFirstName] = useState("Kenan");
  const [lastName, setLastName] = useState("Rahimov");
  const [phone, setPhone] = useState("50 977 45 45");
  const [address, setAddress] = useState("Nizami küçəsi 45, Yasamal r.");
  const [email, setEmail] = useState("orxan.ismayilov@gmail.com");
  const [voen, setVoen] = useState("1234626527628782872");

  // Yadda saxla
  const handleSave = () => {
    const savedCustomers = localStorage.getItem("customers");

    if (savedCustomers) {
      const customers = JSON.parse(savedCustomers);

      const updatedCustomers = customers.map((customer) => {
        if (customer.id === Number(id)) {
          return {
            ...customer,
            company: company,
            contact: `${firstName} ${lastName}`,
            phone: `+994 ${phone}`,
            email: email,
            address: address,
            voen: voen,
          };
        }

        return customer;
      });

      localStorage.setItem(
        "customers",
        JSON.stringify(updatedCustomers)
      );
    }

    // Toast göstər
    toast.success("Müştəri uğurla redaktə edildi");

    // Müştərilər səhifəsinə qayıt
    navigate("/admin/customers");
  };

  // Sıfırla
  const handleReset = () => {
    setCompany("Kenan");
    setFirstName("Kenan");
    setLastName("Rahimov");
    setPhone("50 977 45 45");
    setAddress("Nizami küçəsi 45, Yasamal r.");
    setEmail("orxan.ismayilov@gmail.com");
    setVoen("1234626527628782872");

    toast.info("Dəyişikliklər sıfırlandı");
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3] px-8 py-6">
        <Header />

        {/* Form */}
        <div className="w-[608px]">

          {/* Company */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Şirkət adı
            </label>

            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* First Name */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Şəxs adı
            </label>

            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Last Name */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Şəxs soyadı
            </label>

            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Telefon
            </label>

            <div className="flex h-[41px] w-full rounded-md border border-[#b9b9b9]">

              <div className="flex w-[75px] items-center border-r border-[#b9b9b9] px-2 text-[14px]">
                🇦🇿
                <span className="ml-1 text-[#333]">
                  +994
                </span>
              </div>

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent px-3 text-[14px] outline-none"
              />

            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Ünvan
            </label>

            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* VOEN */}
          <div className="mb-7">
            <label className="mb-2 block text-[14px] text-[#333]">
              VÖEN(işə bağlı)
            </label>

            <input
              type="text"
              value={voen}
              onChange={(e) => setVoen(e.target.value)}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-5">

            <button
              type="button"
              onClick={handleSave}
              className="h-[40px] w-[294px] rounded-[9px] bg-[#f75b00] text-[14px] text-white hover:bg-[#e95100]"
            >
              Dəyişiklikləri yadda saxla
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="h-[40px] w-[294px] rounded-[9px] border border-[#f75b00] bg-transparent text-[14px] text-[#f75b00] hover:bg-[#fff3ec]"
            >
              Sıfırla
            </button>

          </div>

        </div>
      </div>
    </>
  );
}

export default EditCustomer;

