import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function EditOrder() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [customer, setCustomer] = useState("");
  const [cargo, setCargo] = useState("");
  const [quantity, setQuantity] = useState("");

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("Ay");
  const [year, setYear] = useState("");

  const [hour1, setHour1] = useState("");
  const [hour2, setHour2] = useState("");
  const [minute1, setMinute1] = useState("");
  const [minute2, setMinute2] = useState("");

  const [priority, setPriority] = useState("Prioritet seçin");

  const [loadingAddress, setLoadingAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [preparationCost, setPreparationCost] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [deliveryAmount, setDeliveryAmount] = useState("");

  const handleSave = () => {
    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      const orders = JSON.parse(savedOrders);

      const updatedOrders = orders.map((order) => {
        if (order.id === Number(id)) {
          return {
            ...order,
            customer: customer,
            cargo: cargo,
            quantity: quantity,
            priority: priority,
            loadingAddress: loadingAddress,
            deliveryAddress: deliveryAddress,
            preparationCost: preparationCost,
            paymentAmount: paymentAmount,
            deliveryAmount: deliveryAmount,
          };
        }

        return order;
      });

      localStorage.setItem(
        "orders",
        JSON.stringify(updatedOrders)
      );
    }

    localStorage.setItem(
      "toastMessage",
      "Sifariş uğurla redaktə edildi"
    );

    navigate("/admin/orders");
  };

  const handleReset = () => {
    setCustomer("");
    setCargo("");
    setQuantity("");
    setDay("");
    setMonth("Ay");
    setYear("");
    setHour1("");
    setHour2("");
    setMinute1("");
    setMinute2("");
    setPriority("Prioritet seçin");
    setLoadingAddress("");
    setDeliveryAddress("");
    setPreparationCost("");
    setPaymentAmount("");
    setDeliveryAmount("");
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
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  placeholder="Sifariş verən müştərini seçin"
                  className="w-[590px] h-[39px] border border-gray-300 rounded-md px-3 outline-none"
                />
              </div>

              {/* Yük */}
              <div>
                <label className="block text-sm mb-1">
                  Yük
                </label>

                <input
                  type="text"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  placeholder="Sifariş verilən yükü seçin"
                  className="w-[590px] h-[39px] border border-gray-300 rounded-md px-3 outline-none"
                />
              </div>

              {/* Yük miqdarı */}
              <div>
                <label className="block text-sm mb-1">
                  Yükün miqdarı
                </label>

                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Yükün miqdarını daxil edin"
                  className="w-[590px] h-[39px] border border-gray-300 rounded-md px-3 outline-none"
                />
              </div>

              {/* Plan tarixi */}
              <div>
                <label className="block text-sm mb-1">
                  Plan tarixi
                </label>

                <div className="flex gap-3">

                  <input
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="Gün"
                    className="w-[188px] h-[39px] border rounded-md px-3"
                  />

                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-[188px] h-[39px] border rounded-md px-3 text-gray-400"
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
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="İl"
                    className="w-[188px] h-[39px] border rounded-md px-3"
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
                    value={hour1}
                    onChange={(e) => setHour1(e.target.value)}
                    maxLength={1}
                    className="w-8 h-[38px] border rounded-md text-center"
                  />

                  <input
                    value={hour2}
                    onChange={(e) => setHour2(e.target.value)}
                    maxLength={1}
                    className="w-8 h-[38px] border rounded-md text-center"
                  />

                  <span>:</span>

                  <input
                    value={minute1}
                    onChange={(e) => setMinute1(e.target.value)}
                    maxLength={1}
                    className="w-8 h-[38px] border rounded-md text-center"
                  />

                  <input
                    value={minute2}
                    onChange={(e) => setMinute2(e.target.value)}
                    maxLength={1}
                    className="w-8 h-[38px] border rounded-md text-center"
                  />

                </div>
              </div>

              {/* Prioritet */}
              <div>
                <label className="block text-sm mb-1">
                  Prioritet
                </label>

                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-[138px] h-[39px] border rounded-md px-3 text-gray-400"
                >
                  <option>Prioritet seçin</option>
                  <option>Yüksək</option>
                  <option>Orta</option>
                  <option>Aşağı</option>
                </select>
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
                      value={loadingAddress}
                      onChange={(e) =>
                        setLoadingAddress(e.target.value)
                      }
                      className="w-[275px] h-[39px] border rounded-md px-3"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Çatdırılma
                    </p>

                    <input
                      value={deliveryAddress}
                      onChange={(e) =>
                        setDeliveryAddress(e.target.value)
                      }
                      className="w-[275px] h-[39px] border rounded-md px-3"
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
                      value={preparationCost}
                      onChange={(e) =>
                        setPreparationCost(e.target.value)
                      }
                      className="w-[275px] h-[39px] border rounded-md px-3"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Ödəniləcək məbləğ
                    </p>

                    <input
                      value={paymentAmount}
                      onChange={(e) =>
                        setPaymentAmount(e.target.value)
                      }
                      className="w-[275px] h-[39px] border rounded-md px-3"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Çatdırılma məbləği
                    </p>

                    <input
                      value={deliveryAmount}
                      onChange={(e) =>
                        setDeliveryAmount(e.target.value)
                      }
                      className="w-[275px] h-[39px] border rounded-md px-3"
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

export default EditOrder;