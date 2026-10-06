import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function NewWare() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    barkod: "",
    mehsulAdi: "",
    ceki: "",
    en: "",
    uzunluq: "",
    alisQiymeti: "",
    satisQiymeti: "",
    kateqoriya: "",
    saxlanmaYeri: "",
    miqdar: "",
    stokMinimumu: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.barkod.trim() ||
      !formData.mehsulAdi.trim() ||
      !formData.ceki.trim() ||
      !formData.en.trim() ||
      !formData.uzunluq.trim() ||
      !formData.alisQiymeti.trim() ||
      !formData.satisQiymeti.trim() ||
      !formData.kateqoriya ||
      !formData.saxlanmaYeri.trim() ||
      !formData.miqdar.trim() ||
      !formData.stokMinimumu.trim()
    ) {
      toast.error("Zəhmət olmasa bütün məlumatları doldurun!");
      return;
    }

    const oldProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    const newProduct = {
      id: Date.now(),
      barkod: formData.barkod,
      mehsulAdi: formData.mehsulAdi,
      ceki: formData.ceki,
      en: formData.en,
      uzunluq: formData.uzunluq,
      alisQiymeti: formData.alisQiymeti,
      satisQiymeti: formData.satisQiymeti,
      kateqoriya: formData.kateqoriya,
      saxlanmaYeri: formData.saxlanmaYeri,
      miqdar: Number(formData.miqdar),
      stokMinimumu: Number(formData.stokMinimumu),
    };

    localStorage.setItem(
      "products",
      JSON.stringify([...oldProducts, newProduct])
    );

    toast.success("Məhsul uğurla əlavə edildi!");

    setTimeout(() => {
      navigate("/admin/warehouse");
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      barkod: "",
      mehsulAdi: "",
      ceki: "",
      en: "",
      uzunluq: "",
      alisQiymeti: "",
      satisQiymeti: "",
      kateqoriya: "",
      saxlanmaYeri: "",
      miqdar: "",
      stokMinimumu: "",
    });

    toast.info("Forma sıfırlandı");
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3] px-8 py-6">
        <Header />

        <form onSubmit={handleSubmit} className="w-[608px]">

          {/* Barkod */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Barkod
            </label>

            <input
              type="text"
              name="barkod"
              value={formData.barkod}
              onChange={handleChange}
              placeholder="Məhsulun barkodunu daxil edin"
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
              name="mehsulAdi"
              value={formData.mehsulAdi}
              onChange={handleChange}
              placeholder="Məhsulun adını daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Məhsul məlumatları */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Məhsul məlumatları
            </label>

            <div className="grid grid-cols-2 gap-4">

              {/* Çəki */}
              <input
                type="text"
                name="ceki"
                value={formData.ceki}
                onChange={handleChange}
                placeholder="Çəki"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              {/* En */}
              <input
                type="text"
                name="en"
                value={formData.en}
                onChange={handleChange}
                placeholder="En"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              {/* Uzunluq */}
              <input
                type="text"
                name="uzunluq"
                value={formData.uzunluq}
                onChange={handleChange}
                placeholder="Uzunluq"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              {/* Alış qiyməti */}
              <input
                type="text"
                name="alisQiymeti"
                value={formData.alisQiymeti}
                onChange={handleChange}
                placeholder="Alış qiyməti"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              {/* Satış qiyməti */}
              <input
                type="text"
                name="satisQiymeti"
                value={formData.satisQiymeti}
                onChange={handleChange}
                placeholder="Satış qiyməti"
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
              name="kateqoriya"
              value={formData.kateqoriya}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] text-gray-500 outline-none focus:border-[#ff5b00]"
            >
              <option value="">
                Məhsul kateqoriyasını seçin
              </option>
              <option value="Qida">Qida</option>
              <option value="İçki">İçki</option>
              <option value="Gigiyena">Gigiyena</option>
              <option value="Elektronika">Elektronika</option>
              <option value="Digər">Digər</option>
            </select>
          </div>

          {/* Saxlanma yeri */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Saxlanma yeri
            </label>

            <input
              type="text"
              name="saxlanmaYeri"
              value={formData.saxlanmaYeri}
              onChange={handleChange}
              placeholder="Məhsulun saxlanma yerini daxil edin"
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
              name="miqdar"
              value={formData.miqdar}
              onChange={handleChange}
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
              name="stokMinimumu"
              value={formData.stokMinimumu}
              onChange={handleChange}
              placeholder="Minimum stok miqdarını daxil edin"
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-5">
            <button
              type="submit"
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

        </form>
      </div>
    </>
  );
}

export default NewWare;