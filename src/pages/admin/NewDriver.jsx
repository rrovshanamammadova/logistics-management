import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function NewDriver() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneCode: "+994",
    phone: "",
    licensePrefix: "",
    licenseNumber: "",
    status: "",
    day: "",
    month: "",
    year: "",
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
      !formData.phone.trim() ||
      !formData.licensePrefix ||
      !formData.licenseNumber.trim() ||
      !formData.status ||
      !formData.day.trim() ||
      !formData.month ||
      !formData.year.trim()
    ) {
      toast.error("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }

    console.log("Yeni sürücü:", formData);

    toast.success("Sürücü uğurla əlavə edildi.");

    setTimeout(() => {
      navigate("/admin/drivers");
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phoneCode: "+994",
      phone: "",
      licensePrefix: "",
      licenseNumber: "",
      status: "",
      day: "",
      month: "",
      year: "",
    });

    toast.info("Form sıfırlandı.");
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3] px-8 py-6">
        <Header />

        <div className="w-[608px]">
          {/* Ad */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Ad
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Sürücünün adını daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Soyad */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Soyad
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Sürücünün soyadını daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Telefon */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Telefon
            </label>

            <div className="flex h-[41px] w-full rounded-md border border-[#b9b9b9]">
              <select
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                className="w-[85px] border-r border-[#b9b9b9] bg-transparent px-2 text-[14px] outline-none"
              >
                <option value="+994">+994</option>
                <option value="+90">+90</option>
                <option value="+7">+7</option>
                <option value="+995">+995</option>
              </select>

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

          {/* Sürücülük vəsiqəsi */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Sürücülük vəsiqəsi
            </label>

            <div className="flex gap-3">
              <select
                name="licensePrefix"
                value={formData.licensePrefix}
                onChange={handleChange}
                className="h-[41px] w-[140px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] text-gray-500 outline-none"
              >
                <option value="">Prefiks</option>
                <option value="AA">AA</option>
                <option value="AB">AB</option>
                <option value="AZ">AZ</option>
                <option value="BB">BB</option>
                <option value="CC">CC</option>
              </select>

              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                placeholder="Vəsiqə nömrəsi"
                className="h-[41px] flex-1 rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />
            </div>
          </div>

          {/* Status */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] text-gray-500 outline-none focus:border-[#ff5b00]"
            >
              <option value="">Status seçin</option>
              <option value="Boşda">Boşda</option>
              <option value="Yoldadır">Yoldadır</option>
              <option value="Qeyri aktiv">Qeyri aktiv</option>
            </select>
          </div>

          {/* Vəsiqə bitmə tarixi */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Vəsiqə bitmə tarixi
            </label>

            <div className="flex gap-3">
              <input
                type="text"
                name="day"
                value={formData.day}
                onChange={handleChange}
                placeholder="Gün"
                className="h-[41px] w-[190px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none"
              />

              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="h-[41px] w-[190px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] text-gray-500 outline-none"
              >
                <option value="">Ay</option>
                <option value="Yanvar">Yanvar</option>
                <option value="Fevral">Fevral</option>
                <option value="Mart">Mart</option>
                <option value="Aprel">Aprel</option>
                <option value="May">May</option>
                <option value="İyun">İyun</option>
                <option value="İyul">İyul</option>
                <option value="Avqust">Avqust</option>
                <option value="Sentyabr">Sentyabr</option>
                <option value="Oktyabr">Oktyabr</option>
                <option value="Noyabr">Noyabr</option>
                <option value="Dekabr">Dekabr</option>
              </select>

              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="İl"
                className="h-[41px] w-[190px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none"
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

export default NewDriver;