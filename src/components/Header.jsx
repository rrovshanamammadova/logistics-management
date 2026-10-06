import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import notification from "../assets/icons/notification.png";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // =========================
  // USER
  // =========================

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Kenan Rehimov",
    role: "Administrator",
  };

  // =========================
  // TARİX
  // =========================

  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  const today = new Date();

  const formattedDate = `${today.getDate()} ${
    months[today.getMonth()]
  }, ${today.getFullYear()}`;

  // =========================
  // ƏSAS SƏHİFƏLƏR
  // =========================

  const pageInfo = {
    "/admin": {
      title: `Xoş gəlmisiniz, ${user.name}`,
      subtitle: "Sistemdəki işlərinizi idarə edin",
    },

    "/admin/notifications": {
      title: "Bildirişlər",
      subtitle: "Sistem bildirişləri",
    },

    "/admin/orders": {
      title: "Sifarişlər",
      subtitle: "Sifarişlərin idarə edilməsi",
    },

    "/admin/customers": {
      title: "Müştərilər",
      subtitle: "Müştəri məlumatlarının idarə edilməsi",
    },

    "/admin/employees": {
      title: "İşçilər",
      subtitle: "İşçi məlumatlarının idarə edilməsi",
    },

    "/admin/warehouse": {
      title: "Anbar",
      subtitle: "Anbar məlumatlarının idarə edilməsi",
    },

    "/admin/vehicles": {
      title: "Nəqliyyat",
      subtitle: "Nəqliyyat vasitələrinin idarə edilməsi",
    },

    "/admin/drivers": {
      title: "Sürücülər",
      subtitle: "Sürücü məlumatlarının idarə edilməsi",
    },

    "/admin/routes": {
      title: "Marşrut planlaşdırılması",
      subtitle: "Nəqliyyat fəaliyyətlərinin izlənməsi",
    },

    "/admin/tracking": {
      title: "GPS izləmə",
      subtitle: "Nəqliyyat fəaliyyətlərinin izlənməsi",
    },

    "/admin/audit": {
      title: "Audit jurnalı",
      subtitle: "Sistem əməliyyatlarının izlənməsi",
    },

    "/admin/reports": {
      title: "Hesabatlar",
      subtitle: "Sistemdə mövcud olan hesabatlar",
    },
  };

  // =========================
  // SƏHİFƏ BAŞLIĞI
  // =========================

  let currentPage = pageInfo[location.pathname];

  // =========================
  // ALT SƏHİFƏLƏR
  // =========================

  if (!currentPage) {
    // ORDERS
    if (location.pathname.includes("/orders/edit")) {
      currentPage = {
        title: "Sifariş redaktəsi",
        subtitle: "Sifariş məlumatlarının yenilənməsi",
      };
    } else if (location.pathname.includes("/orders/new")) {
      currentPage = {
        title: "Yeni sifariş",
        subtitle: "Yeni sifariş məlumatlarının daxil edilməsi",
      };
    }

    // CUSTOMERS
    else if (location.pathname.includes("/customers/edit")) {
      currentPage = {
        title: "Müştəri redaktəsi",
        subtitle: "Müştəri məlumatlarının yenilənməsi",
      };
    } else if (location.pathname.includes("/customers/new")) {
      currentPage = {
        title: "Yeni müştəri",
        subtitle: "Yeni müştəri məlumatlarının daxil edilməsi",
      };
    }

    // EMPLOYEES
    else if (location.pathname.includes("/employees/edit")) {
      currentPage = {
        title: "İşçi redaktəsi",
        subtitle: "İşçi məlumatlarının yenilənməsi",
      };
    } else if (location.pathname.includes("/employees/new")) {
      currentPage = {
        title: "Yeni işçi",
        subtitle: "Yeni işçi məlumatlarının daxil edilməsi",
      };
    }

    // WAREHOUSE
    else if (location.pathname.includes("/warehouse/edit")) {
      currentPage = {
        title: "Yük redaktəsi",
        subtitle: "Yük məlumatlarının yenilənməsi",
      };
    } else if (location.pathname.includes("/warehouse/new")) {
      currentPage = {
        title: "Yeni yük qəbulu",
        subtitle: "Anbara yeni məhsulun əlavə edilməsi",
      };
    } else if (location.pathname.includes("/warehouse/existing")) {
      currentPage = {
        title: "Mövcud məhsula yük qəbulu",
        subtitle: "Mövcud məhsula yük əlavə edilməsi",
      };
    }

    // VEHICLES
    else if (location.pathname.includes("/vehicles/edit")) {
      currentPage = {
        title: "Nəqliyyat redaktəsi",
        subtitle: "Nəqliyyat məlumatlarının yenilənməsi",
      };
    } else if (location.pathname.includes("/vehicles/new")) {
      currentPage = {
        title: "Yeni nəqliyyat",
        subtitle: "Yeni nəqliyyat vasitəsinin əlavə edilməsi",
      };
    }

    // DRIVERS
    else if (location.pathname.includes("/drivers/edit")) {
      currentPage = {
        title: "Sürücü redaktəsi",
        subtitle: "Sürücü məlumatlarının yenilənməsi",
      };
    } else if (location.pathname.includes("/drivers/new")) {
      currentPage = {
        title: "Yeni sürücü",
        subtitle: "Yeni sürücünün əlavə edilməsi",
      };
    }

    // ROUTES
    else if (location.pathname.includes("/routes/edit")) {
      currentPage = {
        title: "Marşrut redaktəsi",
        subtitle: "Marşrut məlumatlarının yenilənməsi",
      };
    } else if (location.pathname.includes("/routes/new")) {
      currentPage = {
        title: "Marşrut planlaşdırılması",
        subtitle: "Yeni marşrutun yaradılması",
      };
    }

    // REPORTS ALT SƏHİFƏLƏRİ
else if (location.pathname === "/admin/reports/orders") {
  currentPage = {
    title: "Sifariş hesabatı",
    subtitle: "Sifarişlər haqqında hesabat",
  };
}

else if (location.pathname === "/admin/reports/delayed-orders") {
  currentPage = {
    title: "Gecikən sifarişlər",
    subtitle: "Gec çatdırılan sifarişlərin hesabatı",
  };
}

else if (location.pathname === "/admin/reports/driver-activity") {
  currentPage = {
    title: "Sürücü fəaliyyəti",
    subtitle: "Sürücülərin fəaliyyəti haqqında hesabat",
  };
}

else if (location.pathname === "/admin/reports/route-activity") {
  currentPage = {
    title: "Marşrut fəaliyyəti",
    subtitle: "Marşrutların fəaliyyəti haqqında hesabat",
  };
}

else if (location.pathname === "/admin/reports/custom-stat") {
  currentPage = {
    title: "Müştəri statistikası",
    subtitle: "Müştərilər haqqında statistik hesabat",
  };
}

else if (location.pathname === "/admin/reports/finance-repo") {
  currentPage = {
    title: "Maliyyə hesabatı",
    subtitle: "Maliyyə göstəriciləri haqqında hesabat",
  };
}

else if (location.pathname === "/admin/reports/ware") {
  currentPage = {
    title: "Anbar hesabatı",
    subtitle: "Anbar əməliyyatları haqqında hesabat",
  };
}
    

    // DEFAULT
    else {
      currentPage = {
        title: "Logistika idarəetmə sistemi",
        subtitle: "Sistemin idarə edilməsi",
      };
    }
  }

  // =========================
  // GERİ OXUNUN GÖRÜNMƏSİ
  // =========================

  const isReportSubPage =
    location.pathname.startsWith("/admin/reports/");

  const isFormSubPage =
    location.pathname.includes("/new") ||
    location.pathname.includes("/edit") ||
    location.pathname.includes("/existing") ||
    location.pathname.includes("/exit");

  const showBackButton =
    isReportSubPage || isFormSubPage;

  // =========================
  // GERİ QAYIT
  // =========================

  const handleBack = () => {
    // Hesabat alt səhifəsi
    // həmişə Hesabatlar səhifəsinə qayıdır
    if (isReportSubPage) {
      navigate("/admin/reports");
      return;
    }

    // Digər new/edit səhifələri
    navigate(-1);
  };

  return (
    <header
      className="
        w-full
        h-[78px]
        min-h-[78px]
        bg-white
        border-b
        border-gray-100
        flex
        items-center
        justify-between
        px-8
        m-0
        shrink-0
        box-border
      "
    >

      {/* =========================
          SOL TƏRƏF
      ========================= */}

      <div className="flex items-center gap-3 min-w-0">

        {/* GERİ OXU */}

        {showBackButton && (
          <button
            type="button"
            onClick={handleBack}
            className="
              w-8
              h-8
              shrink-0
              flex
              items-center
              justify-center
              rounded-md
              text-[#222]
              hover:bg-gray-100
              hover:text-[#ff5b00]
              transition
            "
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19L5 12L12 5" />
            </svg>
          </button>
        )}

        {/* BAŞLIQ */}

        <div className="leading-tight">

          <h1 className="text-[18px] font-medium text-[#172033]">
            {currentPage.title}
          </h1>

          <p className="text-[12px] text-gray-400 mt-1">
            {currentPage.subtitle}
          </p>

        </div>

      </div>


      {/* =========================
          SAĞ TƏRƏF
      ========================= */}

      <div className="flex items-center gap-6 shrink-0">

        {/* TARİX */}

        <div className="flex items-center gap-2 text-gray-400">

          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="17"
              rx="2"
            />

            <path d="M16 2v4" />
            <path d="M8 2v4" />
            <path d="M3 10h18" />
          </svg>

          <span className="text-[14px]">
            {formattedDate}
          </span>

        </div>


        {/* BİLDİRİŞ */}

        <button
          type="button"
          onClick={() => navigate("/admin/notifications")}
          className="
            relative
            hover:opacity-70
            transition
          "
        >
          <img
            src={notification}
            alt="Bildirişlər"
            className="w-[20px] h-[20px] object-contain"
          />
        </button>


        {/* İSTİFADƏÇİ */}

        <div className="flex items-center gap-3">

          <div
            className="
              w-[38px]
              h-[38px]
              rounded-full
              bg-gray-200
              flex
              items-center
              justify-center
              overflow-hidden
              shrink-0
            "
          >
            <span className="text-[16px]">
              {user.name.charAt(0)}
            </span>
          </div>

          <div className="leading-tight">

            <p className="text-[14px] text-[#172033]">
              {user.name}
            </p>

            <p className="text-[11px] text-[#ff5b00] mt-1">
              {user.role}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;