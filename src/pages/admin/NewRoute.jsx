
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { toast } from "react-toastify";

function NewRoute() {
  const navigate = useNavigate();

  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");

  const [stops, setStops] = useState([
    { id: 1, name: "Sumqayıt" },
    { id: 2, name: "Sumqayıt" },
  ]);

  const [vehicle, setVehicle] = useState("");
  const [driver, setDriver] = useState("");

  const [orderSearch, setOrderSearch] = useState("");

  // Dayanacaq əlavə et
  const addStop = () => {
    const newStop = {
      id: Date.now(),
      name: "",
    };

    setStops((prev) => [...prev, newStop]);

    toast.info("Yeni dayanacaq əlavə edildi");
  };

  // Dayanacaq sil
  const removeStop = (id) => {
    setStops((prev) => prev.filter((stop) => stop.id !== id));

    toast.info("Dayanacaq silindi");
  };

  // Dayanacaq məlumatını dəyiş
  const updateStop = (id, value) => {
    setStops((prev) =>
      prev.map((stop) =>
        stop.id === id
          ? { ...stop, name: value }
          : stop
      )
    );
  };

  // Marşrutu yarat
  const handleCreateRoute = (e) => {
    e.preventDefault();

    if (!startPoint.trim()) {
      toast.error("Başlanğıc nöqtəni daxil edin!");
      return;
    }

    if (!endPoint.trim()) {
      toast.error("Son nöqtəni daxil edin!");
      return;
    }

    if (!vehicle) {
      toast.error("Nəqliyyat vasitəsini seçin!");
      return;
    }

    if (!driver) {
      toast.error("Sürücünü seçin!");
      return;
    }

    // Boş dayanacaqları nəzərə almırıq
    const validStops = stops.filter(
      (stop) => stop.name.trim() !== ""
    );

    const newRoute = {
      id: Date.now(),
      startPoint,
      endPoint,
      stops: validStops,
      vehicle,
      driver,
      distance: "-",
      estimatedTime: "-",
      orderCount: 0,
      createdAt: new Date().toLocaleDateString("az-AZ"),
    };

    const existingRoutes =
      JSON.parse(localStorage.getItem("routes")) || [];

    localStorage.setItem(
      "routes",
      JSON.stringify([
        ...existingRoutes,
        newRoute,
      ])
    );

    toast.success("Marşrut uğurla yaradıldı!");

    setTimeout(() => {
      navigate("/admin/routes");
    }, 1000);
  };

  // Formu sıfırla
  const handleReset = () => {
    setStartPoint("");
    setEndPoint("");

    setStops([
      { id: 1, name: "" },
    ]);

    setVehicle("");
    setDriver("");
    setOrderSearch("");

    toast.info("Forma sıfırlandı");
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
                onChange={(e) =>
                  setStartPoint(e.target.value)
                }
                placeholder="Başlanğıc nöqtəni daxil edin"
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
                onChange={(e) =>
                  setEndPoint(e.target.value)
                }
                placeholder="Son nöqtəni daxil edin"
                className="w-full h-[41px] border border-gray-300 rounded-md px-3 outline-none focus:border-[#ff5b00]"
              />

            </div>

            {/* Dayanacaqlar */}
            <div className="mb-6">

              <p className="text-sm font-medium mb-3">
                Aralıq dayanacaqlar
              </p>

              <div className="space-y-2">

                {stops.map((stop, index) => (

                  <div
                    key={stop.id}
                    className="flex items-center border border-gray-300 rounded-md h-[34px]"
                  >

                    <span className="text-[#4D8FEF] px-2">
                      {index + 1}
                    </span>

                    <input
                      type="text"
                      value={stop.name}
                      onChange={(e) =>
                        updateStop(
                          stop.id,
                          e.target.value
                        )
                      }
                      placeholder="Dayanacaq"
                      className="flex-1 outline-none text-sm"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeStop(stop.id)
                      }
                      className="px-3 text-gray-600 hover:text-red-500"
                    >
                      ×
                    </button>

                  </div>

                ))}

              </div>

              <button
                type="button"
                onClick={addStop}
                className="w-full h-[34px] border border-gray-300 rounded-md mt-2 text-sm text-gray-700 hover:bg-gray-50"
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
                onChange={(e) =>
                  setVehicle(e.target.value)
                }
                className="w-full h-[38px] border border-gray-300 rounded-md px-3 text-sm text-gray-400 outline-none"
              >

                <option value="">
                  Nəqliyyat
                </option>

                <option value="Mercedes Sprinter - 99-AB-123">
                  Mercedes Sprinter - 99-AB-123
                </option>

                <option value="Ford Transit - 90-CD-456">
                  Ford Transit - 90-CD-456
                </option>

                <option value="Isuzu NPR - 10-EF-789">
                  Isuzu NPR - 10-EF-789
                </option>

              </select>

            </div>

            {/* Sürücü */}
            <div className="mb-7">

              <select
                value={driver}
                onChange={(e) =>
                  setDriver(e.target.value)
                }
                className="w-full h-[38px] border border-gray-300 rounded-md px-3 text-sm text-gray-400 outline-none"
              >

                <option value="">
                  Sürücü
                </option>

                <option value="Elvin Məmmədov">
                  Elvin Məmmədov
                </option>

                <option value="Murad Əliyev">
                  Murad Əliyev
                </option>

                <option value="Rauf İsmayılov">
                  Rauf İsmayılov
                </option>

                <option value="Tural Abbasov">
                  Tural Abbasov
                </option>

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
                    -
                  </span>

                </div>

                <div className="h-[48px] border border-gray-300 rounded-md flex flex-col justify-center items-center">

                  <span className="text-[10px] text-gray-400">
                    İstifadə olunan
                  </span>

                  <span className="text-sm">
                    -
                  </span>

                </div>

                <div className="h-[48px] border border-gray-300 rounded-md flex flex-col justify-center items-center">

                  <span className="text-[10px] text-gray-400">
                    Qalan tutum
                  </span>

                  <span className="text-sm">
                    -
                  </span>

                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-2">

              <button
                type="button"
                onClick={handleCreateRoute}
                className="flex-1 h-[40px] bg-[#FF5B0A] text-white rounded-lg text-sm hover:bg-[#e95100]"
              >
                Marşrutu yarat
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 h-[40px] border border-[#FF5B0A] text-[#FF5B0A] rounded-lg text-sm hover:bg-[#fff3ec]"
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

              <div className="h-[260px] bg-[#EAF0E5] relative overflow-hidden">

                {/* Sadə xəritə görüntüsü */}
                <div className="absolute inset-0 opacity-40">

                  <div className="absolute top-8 left-20 w-[500px] h-[1px] bg-gray-400 rotate-[18deg]" />

                  <div className="absolute top-32 left-0 w-[600px] h-[1px] bg-gray-300 rotate-[-8deg]" />

                  <div className="absolute top-52 left-10 w-[550px] h-[1px] bg-gray-400 rotate-[12deg]" />

                  <div className="absolute top-10 left-40 w-[1px] h-[220px] bg-gray-400 rotate-[20deg]" />

                  <div className="absolute top-0 left-80 w-[1px] h-[280px] bg-gray-300 rotate-[-15deg]" />

                </div>

                {/* Route line */}
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

              {/* Map statistics */}
              <div className="grid grid-cols-4">

                <div className="h-[60px] border-r flex flex-col justify-center items-center">

                  <span className="text-[10px] text-gray-400">
                    Ümumi məsafə
                  </span>

                  <span className="text-sm">
                    -
                  </span>

                </div>

                <div className="h-[60px] border-r flex flex-col justify-center items-center">

                  <span className="text-[10px] text-gray-400">
                    Təxmini vaxt
                  </span>

                  <span className="text-sm">
                    -
                  </span>

                </div>

                <div className="h-[60px] border-r flex flex-col justify-center items-center">

                  <span className="text-[10px] text-gray-400">
                    Dayanacaq sayı
                  </span>

                  <span className="text-sm">
                    {stops.filter(
                      (stop) => stop.name.trim() !== ""
                    ).length}
                  </span>

                </div>

                <div className="h-[60px] flex flex-col justify-center items-center">

                  <span className="text-[10px] text-gray-400">
                    Sifariş sayı
                  </span>

                  <span className="text-sm">
                    -
                  </span>

                </div>

              </div>

            </div>


            {/* Orders */}
            <div className="bg-white rounded-lg mt-3">

              <div className="flex items-center justify-between px-3 py-3 border-b">

                <h2 className="font-medium">
                  Sifarişlər
                </h2>

                <div className="relative">

                  <input
                    type="text"
                    value={orderSearch}
                    onChange={(e) =>
                      setOrderSearch(e.target.value)
                    }
                    placeholder="Sifariş axtar"
                    className="w-[170px] h-[32px] border border-gray-300 rounded-md px-3 pr-8 text-xs outline-none focus:border-[#ff5b0a]"
                  />

                  <span className="absolute right-3 top-1.5">
                    ⌕
                  </span>

                </div>

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

                    {[1, 2, 3, 4]
                      .filter((item) =>
                        `ORD-104${item}`
                          .toLowerCase()
                          .includes(
                            orderSearch.toLowerCase()
                          )
                      )
                      .map((item) => (

                        <tr
                          key={item}
                          className="border-b hover:bg-gray-50"
                        >

                          <td className="px-3 py-3">
                            #ORD-104{item}
                          </td>

                          <td className="px-3 py-3">

                            <p>
                              Ulvi Jabiev
                            </p>

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

                            <p>
                              30.06.2026
                            </p>

                            <p className="text-[9px] text-gray-400">
                              14:00
                            </p>

                          </td>

                        </tr>

                      ))}

                  </tbody>

                </table>

              </div>


              {/* Pagination */}
              <div className="h-[55px] flex items-center justify-between px-3">

                <span className="text-xs">

                  Səhifədə:

                  <input
                    defaultValue="10"
                    className="ml-2 w-9 h-7 border rounded-md text-center"
                  />

                </span>

                <div className="flex gap-2">

                  <button
                    type="button"
                    className="w-7 h-7 border rounded-md"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="w-7 h-7 border border-orange-500 text-orange-500 rounded-md"
                  >
                    1
                  </button>

                  <button
                    type="button"
                    className="w-7 h-7 border rounded-md"
                  >
                    2
                  </button>

                  <button
                    type="button"
                    className="w-7 h-7 border rounded-md"
                  >
                    3
                  </button>

                  <span className="px-1">
                    ...
                  </span>

                  <button
                    type="button"
                    className="w-7 h-7 border rounded-md"
                  >
                    7
                  </button>

                  <button
                    type="button"
                    className="w-7 h-7 border rounded-md"
                  >
                    ›
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default NewRoute;

