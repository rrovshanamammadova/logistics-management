import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function NewVehicle() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    marka: "",
    model: "",
    tutum: "",
    region: "",
    seriya: "",
    nomre: "",
    gun: "",
    ay: "",
    il: "",
    status: "Boş",
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
      !formData.marka.trim() ||
      !formData.model.trim() ||
      !formData.tutum.trim() ||
      !formData.region.trim() ||
      !formData.seriya.trim() ||
      !formData.nomre.trim()
    ) {
      toast.error("Zəhmət olmasa bütün məlumatları doldurun!");
      return;
    }

    const oldVehicles =
      JSON.parse(localStorage.getItem("vehicles")) || [];

    const newVehicle = {
      id: Date.now(),
      marka: formData.marka,
      model: formData.model,
      tutum: formData.tutum,
      region: formData.region,
      seriya: formData.seriya,
      nomre: formData.nomre,
      devletNomresi: `${formData.region}-${formData.seriya}-${formData.nomre}`,
      texnikiBaxis: `${formData.gun} ${formData.ay} ${formData.il}`,
      gun: formData.gun,
      ay: formData.ay,
      il: formData.il,
      status: formData.status,
    };

    localStorage.setItem(
      "vehicles",
      JSON.stringify([...oldVehicles, newVehicle])
    );

    toast.success("Nəqliyyat vasitəsi uğurla əlavə edildi!");

    setTimeout(() => {
      navigate("/admin/vehicles");
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      marka: "",
      model: "",
      tutum: "",
      region: "",
      seriya: "",
      nomre: "",
      gun: "",
      ay: "",
      il: "",
      status: "Boş",
    });

    toast.info("Forma sıfırlandı");
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3] px-8 py-6">
        <Header />

        <form onSubmit={handleSubmit} className="w-[608px]">

          {/* Marka */}
          <div className="mb-5">
            <label className="mb-2 block text-[14px] text-[#333]">
              Marka
            </label>

            <input
              type="text"
              name="marka"
              value={formData.marka}
              onChange={handleChange}
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
              name="model"
              value={formData.model}
              onChange={handleChange}
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
              name="tutum"
              value={formData.tutum}
              onChange={handleChange}
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
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="Region"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <input
                type="text"
                name="seriya"
                value={formData.seriya}
                onChange={handleChange}
                placeholder="Seriya"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <input
                type="text"
                name="nomre"
                value={formData.nomre}
                onChange={handleChange}
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
                name="gun"
                value={formData.gun}
                onChange={handleChange}
                placeholder="Gün"
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

              <select
                name="ay"
                value={formData.ay}
                onChange={handleChange}
                className="h-[41px] rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] text-gray-500 outline-none focus:border-[#ff5b00]"
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
                name="il"
                value={formData.il}
                onChange={handleChange}
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
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] text-gray-500 outline-none focus:border-[#ff5b00]"
            >
              <option value="Boş">Boş</option>
              <option value="Yüklənir">Yüklənir</option>
              <option value="Yoldadır">Yoldadır</option>
              <option value="Servisdə">Servisdə</option>
            </select>
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

export default NewVehicle;