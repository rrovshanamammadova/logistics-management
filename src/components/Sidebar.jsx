
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

import exit from "../assets/icons/exit.png";
import home from "../assets/icons/home.png";
import car from "../assets/icons/car.png";
import clipboard from "../assets/icons/clipboard.png";
import customer from "../assets/icons/customer.png";
import driver from "../assets/icons/driver.png";
import employees from "../assets/icons/employees.png";
import file from "../assets/icons/file.png";
import location from "../assets/icons/location.png";
import route from "../assets/icons/route.png";
import warehouse from "../assets/icons/warehouse.png";
import insurance from "../assets/icons/insurance.png";

const menuItems = [
  {
    title: "Əsas səhifə",
    path: "/admin",
    icon: home,
    roles: ["Administrator"],
  },
  {
    title: "Sifarişlər",
    path: "/admin/orders",
    icon: clipboard,
    roles: [
      "Administrator",
      "Müştəri",
      "Logistika meneceri",
    ],
  },
  {
    title: "Müştərilər",
    path: "/admin/customers",
    icon: customer,
    roles: ["Administrator"],
  },
  {
    title: "İşçilər",
    path: "/admin/employees",
    icon: employees,
    roles: ["Administrator"],
  },
  {
    title: "Anbar",
    path: "/admin/warehouse",
    icon: warehouse,
    roles: [
      "Administrator",
      "Anbar işçisi",
    ],
  },
  {
    title: "Nəqliyyat",
    path: "/admin/vehicles",
    icon: car,
    roles: ["Administrator"],
  },
  {
    title: "Marşrutlar",
    path: "/admin/routes",
    icon: route,
    roles: [
      "Administrator",
      "Logistika meneceri",
      "Sürücü",
    ],
  },
  {
    title: "GPS izləmə",
    path: "/admin/tracking",
    icon: location,
    roles: ["Administrator"],
  },
  {
    title: "Sürücülər",
    path: "/admin/drivers",
    icon: driver,
    roles: ["Administrator"],
  },
  {
    title: "Hesabatlar",
    path: "/admin/reports",
    icon: file,
    roles: ["Administrator"],
  },
  {
    title: "Audit jurnalı",
    path: "/admin/audit",
    icon: insurance,
    roles: ["Administrator"],
  },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);

  const user =
    JSON.parse(localStorage.getItem("user")) || {
      name: "Kenan Rehimov",
      role: "Administrator",
    };

  const userRole = user.role;

  // İstifadəçinin roluna uyğun menyular
  const visibleMenuItems = menuItems.filter((item) =>
    item.roles.includes(userRole)
  );

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setShowLogout(false);

    navigate("/");
  };

  return (
    <>
      <aside className="fixed left-0 top-0 bottom-0 w-[235px] bg-[#0d172d] text-white flex flex-col z-50">

        {/* Logo */}
        <div className="h-[75px] flex items-center px-7">
          <div>
            <h1 className="text-[18px] font-bold tracking-wide">
              LOGİSTİKA
            </h1>

            <p className="text-[8px] text-gray-300 tracking-wide">
              İDARƏETMƏ SİSTEMİ
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 pt-4">
          <div className="space-y-2">

            {visibleMenuItems.map((item) => {

              // Əsas səhifə yalnız /admin olduqda aktivdir.
              // Digər səhifələrdə isə alt səhifələr də əsas menyuya bağlı qalır.
              const isActive =
                item.path === "/admin"
                  ? location.pathname === "/admin"
                  : location.pathname === item.path ||
                    location.pathname.startsWith(item.path + "/");

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition ${
                    isActive
                      ? "bg-[#ff5b0a] text-white"
                      : "text-gray-200 hover:bg-white/10"
                  }`}
                >

                  <span className="w-5 h-5 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                  </span>

                  <span>{item.title}</span>

                </Link>
              );
            })}

          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 pb-6">
          <button
            onClick={() => setShowLogout(true)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:text-white"
          >
            <span>
              <img
                src={exit}
                alt=""
                className="w-6 h-6 object-contain"
              />
            </span>

            Çıxış
          </button>
        </div>

      </aside>

      {/* Logout Modal */}
      {showLogout && (
        <LogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
