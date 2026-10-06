
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function EditRoute() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [startPoint, setStartPoint] = useState("Bakı");
  const [endPoint, setEndPoint] = useState("Quba");

  const [stop1, setStop1] = useState("Sumqayıt");
  const [stop2, setStop2] = useState("Şamaxı");

  const [vehicle, setVehicle] = useState("Mercedes Sprinter");
  const [driver, setDriver] = useState("Elvin Məmmədov");

  const handleSave = () => {
    const savedRoutes = localStorage.getItem("routes");

    if (savedRoutes) {
      const routes = JSON.parse(savedRoutes);

      const updatedRoutes = routes.map((route) => {
        if (route.id === Number(id)) {
          return {
            ...route,
            startPoint,
            endPoint,
            stops: [stop1, stop2],
            vehicle,
            driver,
          };
        }

        return route;
      });

      localStorage.setItem(
        "routes",
        JSON.stringify(updatedRoutes)
      );
    }

    localStorage.setItem(
      "toastMessage",
      "Marşrut uğurla redaktə edildi"
    );

    navigate("/admin/routes");
  };

  const handleReset = () => {
    setStartPoint("Bakı");
    setEndPoint("Quba");
    setStop1("Sumqayıt");
    setStop2("Şamaxı");
    setVehicle("Mercedes Sprinter");
    setDriver("Elvin Məmmədov");
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3] px-8 py-6">

        <Header />

        <div className="flex gap-5">

          {/* LEFT */}
          <div className="w-[310px] bg-white rounded-lg p-5">

            <h2 className="text-[15px] font-medium mb-6">
              Marşrut məlumatları
            </h2>

            {/* Başlanğıc */}
            <div className="mb-5">

              <label className="block text-[13px] text-gray-400 mb-2">
                Başlanğıc nöqtə
              </label>

              <input
                type="text"
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
                className="w-full h-[41px] border border-gray-300 rounded-md px-3 outline-none focus:border-[#ff5b00]"
              />

            </div>

            {/* Son */}
            <div className="mb-7">

              <label className="block text-[13px] text-gray-400 mb-2">
                Son nöqtə
              </label>

              <input
                type="text"
                value={endPoint}
                onChange={(e) => setEndPoint(e.target.value)}
                className="w-full h-[41px] border border-gray-300 rounded-md px-3 outline-none focus:border-[#ff5b00]"
              />

            </div>

            {/* Dayanacaqlar */}
            <div className="mb-6">

              <p className="text-sm font-medium mb-3">
                Aralıq dayanacaqlar
              </p>

              <div className="space-y-2">

                <div className="flex items-center border border-gray-300 rounded-md h-[34px]">

                  <span className="text-[#4D8FEF] px-2">
                    1
                  </span>

                  <input
                    type="text"
                    value={stop1}
                    onChange={(e) => setStop1(e.target.value)}
                    className="flex-1 outline-none text-sm"
                  />

                  <button
                    type="button"
                    className="px-3 text-gray-600"
                  >
                    ×
                  </button>

                </div>

                <div className="flex items-center border border-gray-300 rounded-md h-[34px]">

                  <span className="text-[#4D8FEF] px-2">
                    2
                  </span>

                  <input
                    type="text"
                    value={stop2}
                    onChange={(e) => setStop2(e.target.value)}
                    className="flex-1 outline-none text-sm"
                  />

                  <button
                    type="button"
                    className="px-3 text-gray-600"
                  >
                    ×
                  </button>

                </div>

              </div>

              <button
                type="button"
                className="w-full h-[34px] border border-gray-300 rounded-md mt-2 text-sm"
              >
                <span className="text-[#4D8FEF] mr-2">
                  +
                </span>

                Dayanacaq əlavə et
              </button>

            </div>

            {/* Nəqliyyat */}
            <div className="mb-4">

              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full h-[38px] border border-gray-300 rounded-md px-3 text-sm outline-none"
              >
                <option>Mercedes Sprinter</option>
                <option>Ford Transit</option>
                <option>Isuzu NPR</option>
              </select>

            </div>

            {/* Sürücü */}
            <div className="mb-7">

              <select
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                className="w-full h-[38px] border border-gray-300 rounded-md px-3 text-sm outline-none"
              >
                <option>Elvin Məmmədov</option>
                <option>Murad Əliyev</option>
                <option>Rauf İsmayılov</option>
                <option>Tural Abbasov</option>
              </select>

            </div>

            {/* Daşıma məlumatları */}
            <div className="mb-6">

              <p className="text-sm font-medium mb-3">
                Daşıma məlumatları
              </p>

              <div className="grid grid-cols-3 gap-2">

                <div className="h-[48px] border border-gray-300 rounded-md flex flex-col justify-center items-center">
                  <span className="text-[10px] text-gray-400">
                    Ümumi tutum
                  </span>

                  <span className="text-sm">
                    1800 kg
                  </span>
                </div>

                <div className="h-[48px] border border-gray-300 rounded-md flex flex-col justify-center items-center">
                  <span className="text-[10px] text-gray-400">
                    İstifadə olunan
                  </span>

                  <span className="text-sm">
                    850 kg
                  </span>
                </div>

                <div className="h-[48px] border border-gray-300 rounded-md flex flex-col justify-center items-center">
                  <span className="text-[10px] text-gray-400">
                    Qalan tutum
                  </span>

                  <span className="text-sm">
                    950 kg
                  </span>
                </div>

              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">

              <button
                type="button"
                onClick={handleSave}
                className="flex-1 h-[40px] bg-[#FF5B0A] text-white rounded-lg text-sm"
              >
                Yadda saxla
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 h-[40px] border border-[#FF5B0A] text-[#FF5B0A] rounded-lg text-sm"
              >
                Sıfırla
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex-1">

            {/* Map */}
            <div className="bg-white rounded-lg overflow-hidden">

              <div className="px-3 py-2 text-sm font-medium">
                Marşrut xəritəsi
              </div>

              <div className="h-[260px] bg-[#EAF0E5] relative">

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 600 260"
                >
                  <polyline
                    points="120,55 190,80 270,110 350,150 440,185 510,215"
                    fill="none"
                    stroke="#1677ff"
                    strokeWidth="3"
                  />

                  <circle
                    cx="120"
                    cy="55"
                    r="5"
                    fill="#ff3b30"
                  />

                  <circle
                    cx="510"
                    cy="215"
                    r="5"
                    fill="#20c56a"
                  />
                </svg>

              </div>

              <div className="grid grid-cols-4">

                <div className="h-[60px] border-r flex flex-col justify-center items-center">
                  <span className="text-[10px] text-gray-400">
                    Ümumi məsafə
                  </span>

                  <span className="text-sm">
                    145 km
                  </span>
                </div>

                <div className="h-[60px] border-r flex flex-col justify-center items-center">
                  <span className="text-[10px] text-gray-400">
                    Təxmini vaxt
                  </span>

                  <span className="text-sm">
                    2 saat 20 dəq
                  </span>
                </div>

                <div className="h-[60px] border-r flex flex-col justify-center items-center">
                  <span className="text-[10px] text-gray-400">
                    Dayanacaq sayı
                  </span>

                  <span className="text-sm">
                    3
                  </span>
                </div>

                <div className="h-[60px] flex flex-col justify-center items-center">
                  <span className="text-[10px] text-gray-400">
                    Sifariş sayı
                  </span>

                  <span className="text-sm">
                    5
                  </span>
                </div>

              </div>

            </div>

            {/* Sifarişlər */}
            <div className="bg-white rounded-lg mt-3">

              <div className="flex items-center justify-between px-3 py-3 border-b">

                <h2 className="font-medium">
                  Sifarişlər
                </h2>

                <input
                  type="text"
                  placeholder="Sifariş axtar"
                  className="w-[170px] h-[32px] border border-gray-300 rounded-md px-3 text-xs outline-none"
                />

              </div>

              <div className="overflow-x-auto">

                <table className="w-full text-xs">

                  <thead>
                    <tr className="border-b">

                      <th className="px-3 py-3 text-left">
                        Sifariş №
                      </th>

                      <th className="px-3 py-3 text-left">
                        Müştəri
                      </th>

                      <th className="px-3 py-3 text-left">
                        Ölçülər
                      </th>

                      <th className="px-3 py-3 text-left">
                        Çəki
                      </th>

                      <th className="px-3 py-3 text-left">
                        Çatdırılma ünvanı
                      </th>

                      <th className="px-3 py-3 text-left">
                        Plan tarixi
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {[1, 2, 3, 4].map((item) => (
                      <tr
                        key={item}
                        className="border-b hover:bg-gray-50"
                      >

                        <td className="px-3 py-3">
                          #ORD-1045
                        </td>

                        <td className="px-3 py-3">
                          <p>Ulvi Jabiev</p>
                          <p className="text-[9px] text-gray-400">
                            Bravo MMC
                          </p>
                        </td>

                        <td className="px-3 py-3">
                          20×20
                        </td>

                        <td className="px-3 py-3">
                          18 kg
                        </td>

                        <td className="px-3 py-3">
                          Xətai prospekti...
                        </td>

                        <td className="px-3 py-3">
                          <p>30.06.2026</p>
                          <p className="text-[9px] text-gray-400">
                            14:00
                          </p>
                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default EditRoute;

