import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function NewEmployees() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
    phone: "",
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
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.position.trim() ||
      !formData.salary.trim() ||
      !formData.phone.trim()
    ) {
      toast.error("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }

    console.log("Yeni əməkdaş:", formData);

    toast.success("Əməkdaş uğurla əlavə edildi.");

    setTimeout(() => {
      navigate("/admin/employees");
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      position: "",
      salary: "",
      phone: "",
    });

    toast.info("Form sıfırlandı.");
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3] px-16 py-6">
        <Header />

        <div className="w-[608px]">
          {/* Ad */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Ad
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Soyad */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Soyad
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Vəzifə */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Vəzifə
            </label>

            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Maaş */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Maaş
            </label>

            <input
              type="number"
              name="salary"
              value={formData.salary}
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

export default NewEmployees;