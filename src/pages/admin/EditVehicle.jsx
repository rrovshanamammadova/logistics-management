import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditVehicle() {
  const navigate = useNavigate();

  const handleSave = () => {
    toast.success("Nəqliyyat vasitəsi uğurla redaktə edildi");

    setTimeout(() => {
      navigate("/admin/vehicles");
    }, 300);
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3] px-8 py-6">

        <Header />

        {/* Form */}
        <div className="w-[608px]">

          {/* Marka */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Marka
            </label>

            <input
              type="text"
              defaultValue="Mercedes-Benz"
              placeholder="Nəqliyyat vasitəsinin markasını daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Model */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Model
            </label>

            <input
              type="text"
              defaultValue="Actros"
              placeholder="Nəqliyyat vasitəsinin modelini daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Daşıma tutumu */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Daşıma tutumu
            </label>

            <input
              type="text"
              defaultValue="20 ton"
              placeholder="Daşıma tutumunu daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Dövlət nömrəsi */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Dövlət nömrəsi
            </label>

            <div className="grid grid-cols-3 gap-4">

              <input
                type="text"
                defaultValue="10"
                placeholder="Region"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <input
                type="text"
                defaultValue="AA"
                placeholder="Seriya"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <input
                type="text"
                defaultValue="123"
                placeholder="Nömrə"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

            </div>
          </div>

          {/* Texniki baxış tarixi */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Texniki baxış tarixi
            </label>

            <div className="grid grid-cols-3 gap-4">

              <input
                type="text"
                defaultValue="15"
                placeholder="Gün"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <select
                defaultValue="Avqust"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] text-gray-500 outline-none focus:border-[#ff5b00]"
              >
                <option>Ay</option>
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
                defaultValue="2026"
                placeholder="İl"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

            </div>
          </div>

          {/* Status */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Status
            </label>

            <select
              defaultValue="Boş"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] text-gray-500 outline-none focus:border-[#ff5b00]"
            >
              <option>Boş</option>
              <option>Yüklənir</option>
              <option>Yoldadır</option>
              <option>Servisdə</option>
            </select>
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

export default EditVehicle;

