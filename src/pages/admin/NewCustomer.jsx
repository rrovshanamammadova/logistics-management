import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function NewCustomer() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    voen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (
      !formData.companyName.trim() ||
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.email.trim() ||
      !formData.voen.trim()
    ) {
      toast.error("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }

    console.log("Yeni müştəri:", formData);

    toast.success("Müştəri uğurla əlavə edildi.");

    setTimeout(() => {
      navigate("/admin/customers");
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      companyName: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      email: "",
      voen: "",
    });

    toast.info("Form sıfırlandı.");
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3] px-16 py-6">
        <Header />

        <div className="w-[608px]">
          {/* Şirkət adı */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Şirkət adı
            </label>

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Şəxs adı */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Şəxs adı
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Şəxs soyadı */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Şəxs soyadı
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Telefon */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Telefon
            </label>

            <div className="flex h-[41px] w-full rounded-md border border-[#b9b9b9]">
              <div className="flex w-[75px] items-center border-r border-[#b9b9b9] px-2 text-[14px]">
                🇦🇿
                <span className="ml-1 text-[#333]">+994</span>
                <span className="ml-1 text-gray-500">⌄</span>
              </div>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="50 123 45 67"
                className="flex-1 bg-transparent px-3 text-[14px] outline-none"
              />
            </div>
          </div>

          {/* Ünvan */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Ünvan
            </label>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* VÖEN */}
          <div className="mb-7">
            <label className="mb-2 block text-[14px] text-[#333]">
              VÖEN(işə bağlı)
            </label>

            <input
              type="text"
              name="voen"
              value={formData.voen}
              onChange={handleChange}
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
              Yadda saxla
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

export default NewCustomer;