import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import map from "../../assets/images/map.png";
import driverbk from "../../assets/icons/driverbk.png";
import time from "../../assets/icons/time.png";
import arrow from "../../assets/icons/arrow.png";
import meter from "../../assets/icons/meter.png";
import refresh from "../../assets/icons/refresh.png";
import locblack from "../../assets/icons/locblack.png";
import phone from "../../assets/icons/phone.png";
import updates from "../../assets/icons/updates.png";

function GPS() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [statusFilter, setStatusFilter] = useState("Hamısı");

  const [driverFilter, setDriverFilter] = useState("");
  const [vehicleFilter, setVehicleFilter] = useState("");

  // Fake API-dən datanı çəkmək (Polling ilə hər 5 saniyədən bir canlı yenilənmə)
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/vehicles");
        setVehicles(response.data);
      } catch (error) {
        console.error("Datanı çəkərkən xəta baş verdi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
    const interval = setInterval(fetchVehicles, 5000); // Live tracking simulyasiyası

    return () => clearInterval(interval);
  }, []);

  const getMarkerColor = (statusColor) => {
    const colors = {
      green: "bg-green-600",
      blue: "bg-blue-500",
      orange: "bg-orange-600",
      gray: "bg-gray-500",
    };

    return colors[statusColor] || "bg-gray-500";
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesStatus =
      statusFilter === "Hamısı" || vehicle.status === statusFilter;

    const matchesDriver = vehicle.driver
      .toLowerCase()
      .includes(driverFilter.toLowerCase());

    const matchesVehicle = `${vehicle.plate} ${vehicle.model}`
      .toLowerCase()
      .includes(vehicleFilter.toLowerCase());

    return matchesStatus && matchesDriver && matchesVehicle;
  });

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#F3F3F3]">
        <Header />

        <div className="relative h-[calc(100vh-85px)] overflow-hidden">
          {/* MAP */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${map})`,
            }}
          >
            <div className="absolute inset-0 bg-white/10" />

            {/* LEFT SIDE COLUMN */}
            <div className="absolute top-3 left-3 w-[360px] bottom-3 z-10">
              <div className="h-full rounded-xl bg-white/45 backdrop-blur-md p-3 shadow-md border border-white/50 flex flex-col">
                {/* Sürücü + Nəqliyyat filters */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={driverFilter}
                    onChange={(e) => setDriverFilter(e.target.value)}
                    placeholder="Sürücü"
                    className="w-1/2 h-[42px] bg-white rounded-lg px-3 text-sm outline-none shadow-sm"
                  />

                  <input
                    type="text"
                    value={vehicleFilter}
                    onChange={(e) => setVehicleFilter(e.target.value)}
                    placeholder="Nəqliyyat"
                    className="w-1/2 h-[42px] bg-white rounded-lg px-3 text-sm outline-none shadow-sm"
                  />
                </div>

                {/* Filters */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  <button
                    onClick={() => setStatusFilter("Hamısı")}
                    className={`px-3 py-2 rounded-lg text-xs transition ${
                      statusFilter === "Hamısı"
                        ? "bg-white border border-gray-400 text-gray-700 shadow-sm"
                        : "bg-white/60 border border-gray-200 text-gray-500"
                    }`}
                  >
                    Hamısı ({vehicles.length})
                  </button>

                  <button
                    onClick={() => setStatusFilter("Dayanıb")}
                    className={`px-3 py-2 rounded-lg text-xs transition ${
                      statusFilter === "Dayanıb"
                        ? "bg-white border border-blue-400 text-blue-500 shadow-sm"
                        : "bg-white/60 border border-gray-200 text-gray-500"
                    }`}
                  >
                    Dayanıb (
                    {vehicles.filter((v) => v.status === "Dayanıb").length})
                  </button>

                  <button
                    onClick={() => setStatusFilter("Hərəkətdə")}
                    className={`px-3 py-2 rounded-lg text-xs transition ${
                      statusFilter === "Hərəkətdə"
                        ? "bg-white border border-green-400 text-green-500 shadow-sm"
                        : "bg-white/60 border border-gray-200 text-gray-500"
                    }`}
                  >
                    Hərəkətdə (
                    {vehicles.filter((v) => v.status === "Hərəkətdə").length})
                  </button>

                  <button
                    onClick={() => setStatusFilter("Offline")}
                    className={`px-3 py-2 rounded-lg text-xs transition ${
                      statusFilter === "Offline"
                        ? "bg-white border border-gray-400 text-gray-600 shadow-sm"
                        : "bg-white/60 border border-gray-200 text-gray-500"
                    }`}
                  >
                    Offline (
                    {vehicles.filter((v) => v.status === "Offline").length})
                  </button>
                </div>

                {/* Vehicle Cards */}
                <div className="mt-3 flex-1 overflow-y-auto space-y-3 pr-1">
                  {loading ? (
                    <div className="text-center text-sm text-gray-500 py-8">
                      Yüklənir...
                    </div>
                  ) : filteredVehicles.length === 0 ? (
                    <div className="text-center text-sm text-gray-500 py-8">
                      Nəticə tapılmadı
                    </div>
                  ) : (
                    filteredVehicles.map((vehicle) => (
                      <div
                        key={vehicle.id}
                        onClick={() => setSelectedVehicle(vehicle)}
                        className="bg-[#F5F5F5] rounded-xl p-4 shadow-sm border border-gray-200 cursor-pointer hover:bg-white hover:shadow-md transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-2.5 h-2.5 rounded-full ${getMarkerColor(
                                  vehicle.statusColor
                                )}`}
                              />

                              <span className="text-sm font-medium text-gray-800">
                                {vehicle.plate}
                              </span>
                            </div>

                            <p className="text-xs text-gray-500 ml-4 mt-1">
                              {vehicle.model}
                            </p>
                          </div>

                          <span
                            className={`text-xs ${
                              vehicle.status === "Hərəkətdə"
                                ? "text-green-600"
                                : vehicle.status === "Dayanıb"
                                ? "text-blue-500"
                                : "text-gray-500"
                            }`}
                          >
                            {vehicle.speed}
                          </span>
                        </div>

                        <div className="flex justify-between mt-4 text-xs text-gray-500">
                          <span>♙ {vehicle.driver}</span>

                          <span>◇ {vehicle.direction}</span>
                        </div>

                        <p className="text-xs text-gray-500 mt-3">
                          ◷ {vehicle.stopTime}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Full screen button */}
            <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-md shadow flex items-center justify-center">
              ⛶
            </button>

            {/* MAP MARKERS */}
            {vehicles.map((vehicle) => {
              const isVisible = filteredVehicles.some(
                (item) => item.id === vehicle.id
              );

              if (!isVisible) return null;

              return (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="absolute z-0 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: vehicle.mapOffset?.top || vehicle.top,
                    left: vehicle.mapOffset?.left || vehicle.left,
                  }}
                >
                  <div
                    className={`w-8 h-8 rounded-full ${getMarkerColor(
                      vehicle.statusColor
                    )} flex items-center justify-center text-white shadow-lg`}
                  >
                    🚚
                  </div>

                  <div className="bg-white px-2 py-1 rounded shadow text-[9px] whitespace-nowrap mt-1">
                    {vehicle.plate}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT GPS INFO PANEL */}
          {selectedVehicle && (
            <div className="absolute top-0 right-0 h-full w-[330px] bg-white shadow-xl z-20">
              <div className="px-4 py-4 border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          selectedVehicle.status === "Hərəkətdə"
                            ? "bg-green-500"
                            : selectedVehicle.status === "Dayanıb"
                            ? "bg-blue-500"
                            : "bg-gray-500"
                        }`}
                      />

                      <p className="text-sm font-medium">
                        {selectedVehicle.plate}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 ml-4">
                      {selectedVehicle.model}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className="text-gray-500 hover:text-black text-lg"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="p-3">
                <InfoRow
                  icon={driverbk}
                  label="Sürücü"
                  value={selectedVehicle.driver}
                />

                <InfoRow
                  icon={phone}
                  label="Telefon"
                  value={selectedVehicle.phone}
                />

                <InfoRow
                  icon={arrow}
                  label="İstiqamət"
                  value={selectedVehicle.direction}
                />

                <InfoRow
                  icon={meter}
                  label="Sürət"
                  value={selectedVehicle.speed}
                  green
                />

                <InfoRow
                  icon={time}
                  label="Dayanma müddəti"
                  value={selectedVehicle.stopTime}
                />

                <InfoRow
                  icon={refresh}
                  label="Son yenilənmə"
                  value={selectedVehicle.updated}
                />

                <InfoRow
                  icon={updates}
                  label="Status"
                  value={selectedVehicle.status}
                  green
                />

                <InfoRow
                  icon={locblack}
                  label="Koordinat"
                  value={
                    typeof selectedVehicle.coordinate === "object"
                      ? `${selectedVehicle.coordinate.lat}, ${selectedVehicle.coordinate.lng}`
                      : selectedVehicle.coordinate
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function InfoRow({ icon, label, value, green }) {
  return (
    <div className="min-h-[55px] border border-gray-200 border-b-0 last:border-b flex items-center px-3">
      <div className="flex items-center gap-2 text-gray-400 text-xs">
        <span className="w-5 flex items-center justify-center">
          <img src={icon} alt="" className="w-4 h-4 object-contain" />
        </span>

        <span>{label}</span>
      </div>

      <span
        className={`ml-auto text-xs ${
          green ? "text-green-500" : "text-gray-700"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default GPS;