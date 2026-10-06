import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function NewOrders() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customer: "",
    cargo: "",
    quantity: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    priority: "",
    status: "Yeni",
    loadingAddress: "",
    deliveryAddress: "",
    preparationCost: "",
    payableAmount: "",
    deliveryAmount: "",
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
      !formData.customer.trim() ||
      !formData.cargo.trim() ||
      !formData.quantity.trim() ||
      !formData.day.trim() ||
      !formData.month ||
      !formData.year.trim() ||
      !formData.hour.trim() ||
      !formData.minute.trim() ||
      !formData.priority ||
      !formData.status ||
      !formData.loadingAddress.trim() ||
      !formData.deliveryAddress.trim() ||
      !formData.preparationCost.trim() ||
      !formData.payableAmount.trim() ||
      !formData.deliveryAmount.trim()
    ) {
      toast.error("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }

    console.log("Yeni sifariş:", formData);

    toast.success("Sifariş uğurla əlavə edildi.");

    setTimeout(() => {
      navigate("/admin/orders");
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      customer: "",
      cargo: "",
      quantity: "",
      day: "",
      month: "",
      year: "",
      hour: "",
      minute: "",
      priority: "",
      status: "Yeni",
      loadingAddress: "",
      deliveryAddress: "",
      preparationCost: "",
      payableAmount: "",
      deliveryAmount: "",
    });

    toast.info("Form sıfırlandı.");
  };

  return (
    <>
      <Sidebar />

      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">
        <main className="p-5">
          <div className="max-w-[850px]">
            <Header />

            <div className="space-y-3">
              {/* Müştəri */}
              <div>
                <label className="block text-sm mb-1">
                  Müştəri
                </label>

                <input
                  type="text"
                  name="customer"
                  value={formData.customer}
                  onChange={handleChange}
                  placeholder="Sifariş verən müştərini seçin"
                  className="w-[590px] h-[39px] border border-gray-300 rounded-md px-3 outline-none text-sm"
                />
              </div>

              {/* Yük */}
              <div>
                <label className="block text-sm mb-1">
                  Yük
                </label>

                <input
                  type="text"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  placeholder="Sifariş verilən yükü seçin"
                  className="w-[590px] h-[39px] border border-gray-300 rounded-md px-3 outline-none text-sm"
                />
              </div>

              {/* Yükün miqdarı */}
              <div>
                <label className="block text-sm mb-1">
                  Yükün miqdarı
                </label>

                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Yükün miqdarını daxil edin"
                  className="w-[590px] h-[39px] border border-gray-300 rounded-md px-3 outline-none text-sm"
                />
              </div>

              {/* Plan tarixi */}
              <div>
                <label className="block text-sm mb-1">
                  Plan tarixi
                </label>

                <div className="flex gap-3">
                  <input
                    type="text"
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                    placeholder="Gün"
                    className="w-[188px] h-[39px] border border-gray-300 rounded-md px-3"
                  />

                  <select
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    className="w-[188px] h-[39px] border border-gray-300 rounded-md px-3 text-gray-400"
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
                    className="w-[188px] h-[39px] border border-gray-300 rounded-md px-3"
                  />
                </div>
              </div>

              {/* Saat */}
              <div>
                <label className="block text-sm mb-1">
                  Saat
                </label>

                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    name="hour"
                    value={formData.hour}
                    onChange={handleChange}
                    maxLength={2}
                    className="w-8 h-[38px] border rounded-md text-center outline-none"
                  />

                  <input
                    type="text"
                    value={formData.hour ? "" : ""}
                    readOnly
                    className="hidden"
                  />

                  <span className="mx-1">:</span>

                  <input
                    type="text"
                    name="minute"
                    value={formData.minute}
                    onChange={handleChange}
                    maxLength={2}
                    className="w-8 h-[38px] border rounded-md text-center outline-none"
                  />
                </div>
              </div>

              {/* Prioritet + Status */}
              <div className="flex gap-3">
                <div>
                  <label className="block text-sm mb-1">
                    Prioritet
                  </label>

                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-[162px] h-[39px] border border-gray-300 rounded-md px-3 text-gray-400"
                  >
                    <option value="">Prioritet seçin</option>
                    <option value="Yüksək">Yüksək</option>
                    <option value="Orta">Orta</option>
                    <option value="Aşağı">Aşağı</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-[162px] h-[39px] border border-gray-300 rounded-md px-3"
                  >
                    <option value="Yeni">Yeni</option>
                    <option value="Hazırlanır">Hazırlanır</option>
                    <option value="Anbarda">Anbarda</option>
                    <option value="Yüklənib">Yüklənib</option>
                    <option value="Yoldadır">Yoldadır</option>
                    <option value="Çatdırılıb">Çatdırılıb</option>
                    <option value="Ləğv edildi">Ləğv edildi</option>
                  </select>
                </div>
              </div>

              {/* Ünvan */}
              <div>
                <label className="block text-sm mb-2">
                  Ünvan
                </label>

                <div className="flex gap-8">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Yükləmə
                    </p>

                    <input
                      type="text"
                      name="loadingAddress"
                      value={formData.loadingAddress}
                      onChange={handleChange}
                      className="w-[275px] h-[39px] border border-gray-300 rounded-md px-3"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Çatdırılma
                    </p>

                    <input
                      type="text"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      className="w-[275px] h-[39px] border border-gray-300 rounded-md px-3"
                    />
                  </div>
                </div>
              </div>

              {/* Məbləğ */}
              <div>
                <label className="block text-sm mb-2">
                  Məbləğ
                </label>

                <div className="flex gap-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Hazırlanma xərci
                    </p>

                    <input
                      type="number"
                      name="preparationCost"
                      value={formData.preparationCost}
                      onChange={handleChange}
                      className="w-[275px] h-[39px] border border-gray-300 rounded-md px-3"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Ödəniləcək məbləğ
                    </p>

                    <input
                      type="number"
                      name="payableAmount"
                      value={formData.payableAmount}
                      onChange={handleChange}
                      className="w-[275px] h-[39px] border border-gray-300 rounded-md px-3"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Çatdırılma məbləği
                    </p>

                    <input
                      type="number"
                      name="deliveryAmount"
                      value={formData.deliveryAmount}
                      onChange={handleChange}
                      className="w-[275px] h-[39px] border border-gray-300 rounded-md px-3"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-1">
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-[415px] h-[39px] bg-[#FF5B0A] text-white rounded-lg text-sm"
                >
                  Dəyişiklikləri yadda saxla
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-[415px] h-[39px] border border-[#FF5B0A] text-[#FF5B0A] rounded-lg text-sm"
                >
                  Sıfırla
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default NewOrders;