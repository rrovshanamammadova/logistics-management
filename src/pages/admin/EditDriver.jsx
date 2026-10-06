
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function EditDriver() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("Elvin");
  const [surname, setSurname] = useState("Məmmədov");
  const [phone, setPhone] = useState("50 123 45 67");
  const [phoneCode, setPhoneCode] = useState("+994");

  const [licensePrefix, setLicensePrefix] = useState("AA");
  const [licenseNumber, setLicenseNumber] = useState("123456");

  const [status, setStatus] = useState("Yoldadır");

  const [day, setDay] = useState("12");
  const [month, setMonth] = useState("Avqust");
  const [year, setYear] = useState("2027");

  const handleSave = () => {
    const savedDrivers = localStorage.getItem("drivers");

    if (savedDrivers) {
      const drivers = JSON.parse(savedDrivers);

      const updatedDrivers = drivers.map((driver) => {
        if (driver.id === Number(id)) {
          return {
            ...driver,
            name: `${name} ${surname}`,
            phone: `${phoneCode} ${phone}`,
            license: `${licensePrefix} ${licenseNumber}`,
            status: status,
            expiryDate: `${day} ${month} ${year}`,
          };
        }

        return driver;
      });

      localStorage.setItem(
        "drivers",
        JSON.stringify(updatedDrivers)
      );
    }

    localStorage.setItem(
      "toastMessage",
      "Sürücü uğurla redaktə edildi"
    );

    navigate("/admin/drivers");
  };

  const handleReset = () => {
    setName("Elvin");
    setSurname("Məmmədov");
    setPhone("50 123 45 67");
    setPhoneCode("+994");
    setLicensePrefix("AA");
    setLicenseNumber("123456");
    setStatus("Yoldadır");
    setDay("12");
    setMonth("Avqust");
    setYear("2027");
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
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
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                className="w-[85px] border-r border-[#b9b9b9] bg-transparent px-2 text-[14px] outline-none"
              >
                <option>+994</option>
                <option>+90</option>
                <option>+7</option>
                <option>+995</option>
              </select>

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent px-3 text-[14px] outline-none"
              />

            </div>
          </div>

          {/* Vəsiqə */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Sürücülük vəsiqəsi
            </label>

            <div className="flex gap-3">

              <select
                value={licensePrefix}
                onChange={(e) => setLicensePrefix(e.target.value)}
                className="h-[41px] w-[140px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none"
              >
                <option>AA</option>
                <option>AB</option>
                <option>AZ</option>
                <option>BB</option>
                <option>CC</option>
              </select>

              <input
                type="text"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
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
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none"
            >
              <option>Yoldadır</option>
              <option>Boşda</option>
              <option>Qeyri aktiv</option>
            </select>
          </div>

          {/* Bitmə tarixi */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Vəsiqə bitmə tarixi
            </label>

            <div className="flex gap-3">

              <input
                type="text"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="h-[41px] w-[190px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none"
              />

              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="h-[41px] w-[190px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none"
              >
                <option>Yanvar</option>
                <option>Fevral</option>
                <option>Mart</option>
                <option>Aprel</option>
                <option>May</option>
                <option>İyun</option>
                <option>İyul</option>
                <option>Avqust</option>
                <option>Sentyabr</option>
                <option>Oktyabr</option>
                <option>Noyabr</option>
                <option>Dekabr</option>
              </select>

              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
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

export default EditDriver;

