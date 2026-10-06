
import React from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { toast } from "react-toastify";

function ExitWare() {
  const navigate = useNavigate();

  const handleApply = () => {
    toast.success("Məhsul çıxışı uğurla tətbiq edildi");

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
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Məhsul */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Məhsul
            </label>

            <input
              type="text"
              placeholder="Məhsulu seçin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Cari miqdar */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Cari miqdar
            </label>

            <input
              type="number"
              placeholder="Cari məhsul miqdarını daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Çıxarış miqdarı */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Çıxarış miqdarı
            </label>

            <input
              type="number"
              placeholder="Çıxarılacaq miqdarı daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Yeni miqdar */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Yeni miqdar
            </label>

            <input
              type="number"
              placeholder="Çıxarışdan sonra yeni miqdar"
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
              placeholder="Minimum stok miqdarını daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-5">

            <button
              type="button"
              onClick={handleApply}
              className="h-[40px] w-[294px] rounded-[9px] bg-[#f75b00] text-[14px] text-white hover:bg-[#e95100]"
            >
              Tətbiq et
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

export default ExitWare;

