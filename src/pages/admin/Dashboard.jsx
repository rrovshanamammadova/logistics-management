import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/StatCard";
import NotificationItem from "../../components/NotificationItem";
import { notifications } from "../../data/notifications";
import clipboard from "../../assets/icons/clipboard.png"
import time from "../../assets/icons/time.png"
import approved from "../../assets/icons/approved.png"
import lorry from "../../assets/icons/lorry.png"
import warehouse2 from "../../assets/icons/warehouse2.png"
import supplies from "../../assets/icons/supplies.png"
import frame from "../../assets/icons/frame.png"
import clipyellow from "../../assets/icons/clipyellow.png"
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <DashboardLayout
      title="Xoş gəlmisiniz,Kenan"
      subtitle="Bugünkü fəaliyyətə ümumi baxış"
    >
      <div className="space-y-4">

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            title="Bugünkü sifarişlər"
            value="120"
            description="Bugünkü sifariş sayı"
            icon={clipyellow}
            iconBg="bg-[#fff0bd] "
          />

          <StatCard
            title="Gecikən sifarişlər"
            value="120"
            description="Gec çatdırılan sifarişlər"
            icon={time}
            iconBg="bg-[#ffd7d7] text-[#ff3b3b]"
          />

          <StatCard
            title="Çatdırılmış sifarişlər"
            value="15"
            description="Tamamlanan sifarişlər"
            icon={approved}
            iconBg="bg-[#d5f5df] text-[#20c96b]"
          />

          <StatCard
            title="Aktiv çatdırılmalar"
            value="7"
            description="Yolda olan çatdırılmalar"
            icon={lorry}
            iconBg="bg-[#ffe0d0] text-[#ff7040]"
          />
        </div>

        {/* Warehouse + Drivers */}
        <div className="grid grid-cols-2 gap-4">

          {/* Warehouse */}
          <div className="bg-white rounded-xl p-5">
            <h3 className="text-sm font-medium mb-4">
              Anbar doluluğu
            </h3>

            <div className="flex items-center gap-8">

              {/* Donut */}
              <div
                className="w-[175px] h-[175px] rounded-full flex items-center justify-center"
                style={{
                  background:
                    "conic-gradient(#3b82f6 0deg 252deg, #a5a5a5 252deg 360deg)",
                }}
              >
                <div className="w-[125px] h-[125px] bg-white rounded-full flex items-center justify-center">
                  <span className="text-[25px] font-medium">
                    70%
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-5">

                {/* Ümumi sahə */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#d0def3] flex items-center justify-center">
                        <img
                            src={warehouse2}
                            alt=""
                            className="w-5 h-5 object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            Ümumi Sahə
                        </p>
                        <p className="text-sm">
                            10 000 m²
                        </p>
                    </div>
                </div>


                {/* İstifadə olunan */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#cbebd7] flex items-center justify-center">
                        <img
                            src={supplies}
                            alt=""
                            className="w-5 h-5 object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            İstifadə olunan
                        </p>
                        <p className="text-sm">
                            7 800 m²
                        </p>
                    </div>
                </div>


                {/* Boş sahə */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#f7e9c4] flex items-center justify-center">
                        <img
                            src={frame}
                            alt=""
                            className="w-5 h-5 object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            Boş sahə
                        </p>
                        <p className="text-sm">
                            2 200 m²
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

          {/* Drivers */}
          <div className="bg-white rounded-xl p-5">

            <div className="flex justify-between items-center mb-5">
              <h3 className="text-sm font-medium">
                Aktiv sürücülər
              </h3>

              <Link to="/admin/drivers">
              <button className="text-xs text-[#ff5b0a] cursor-pointer">
                Hamısı ›
              </button>
              </Link>
            </div>

            <div className="grid grid-cols-[1.2fr_1fr_1fr] text-xs font-medium mb-4">
              <span>Sürücü</span>
              <span>Sürücülük №</span>
              <span>Telefon</span>
            </div>

            <div className="space-y-5">

              {[1, 2, 3, 4].map((driver) => (
                <div
                  key={driver}
                  className="grid grid-cols-[1.2fr_1fr_1fr] text-xs text-gray-700"
                >
                  <span>Ulvi Jabiev</span>
                  <span>AZE1234567</span>
                  <span>+994 50 347 82 19</span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Recent notifications */}
        <div className="bg-white rounded-xl p-5">

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium">
              Son bildirişlər
            </h3>

            <Link
              to="/admin/notifications"
            >
              <button className="text-xs text-[#ff5b0a] cursor-pointer">
                Hamısı ›
              </button>
            </Link>
          </div>

          <div className="space-y-1">
            {notifications.slice(3, 6).map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;