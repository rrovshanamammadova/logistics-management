import React from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { toast } from "react-toastify";

function EditWare() {
  const navigate = useNavigate();

  const handleSave = () => {
    toast.success("Məhsul uğurla redaktə edildi");

    setTimeout(() => {
      navigate("/admin/warehouse");
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

        <div className="w-[608px]">

          {/* Barkod */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Barkod
            </label>

            <input
              type="text"
              placeholder="Məhsulun barkodunu daxil edin"
              defaultValue="123456789"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Məhsul adı */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Məhsul adı
            </label>

            <input
              type="text"
              placeholder="Məhsulun adını daxil edin"
              defaultValue="Oreo"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Məhsul məlumatları */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Məhsul məlumatları
            </label>

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Çəki"
                defaultValue="1 kg"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <input
                type="text"
                placeholder="En"
                defaultValue="20 sm"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <input
                type="text"
                placeholder="Uzunluq"
                defaultValue="30 sm"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <input
                type="text"
                placeholder="Alış qiyməti"
                defaultValue="3.50 ₼"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <input
                type="text"
                placeholder="Satış qiyməti"
                defaultValue="4.50 ₼"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

            </div>
          </div>

          {/* Kateqoriya */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Məhsul kateqoriyası
            </label>

            <select
              defaultValue="Qida"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] text-gray-500 outline-none focus:border-[#ff5b00]"
            >
              <option>Məhsul kateqoriyasını seçin</option>
              <option>Qida</option>
              <option>İçki</option>
              <option>Gigiyena</option>
              <option>Elektronika</option>
              <option>Digər</option>
            </select>
          </div>

          {/* Saxlanma yeri */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Saxlanma yeri
            </label>

            <input
              type="text"
              placeholder="Məhsulun saxlanma yerini daxil edin"
              defaultValue="A-12"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Məhsul miqdarı */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Məhsul miqdarı
            </label>

            <input
              type="number"
              defaultValue="150"
              placeholder="Məhsul miqdarını daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Stok minimumu */}
          <div className="mb-6">
            <label className="mb-2 block text-[14px] text-[#333]">
              Stok minimumu
            </label>

            <input
              type="number"
              defaultValue="20"
              placeholder="Minimum stok miqdarını daxil edin"
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

export default EditWare;

