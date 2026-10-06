import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import NotificationItem from "../../components/NotificationItem";
import { notifications as initialNotifications } from "../../data/notifications";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notifications() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const [search, setSearch] = useState("");

  const filteredNotifications = notifications.filter((notification) =>
    notification.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout
      title="← Bildirişlər"
      subtitle="Sistem bildirişlərini izləyin"
    >
      <div className="bg-white rounded-xl p-5">

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-2">

            <div className="relative">
              <input
                type="text"
                placeholder="Axtarış..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[325px] h-[42px] border border-gray-300 rounded-md px-3 pr-10 text-sm outline-none focus:border-[#ff5b0a]"
              />

              <span className="absolute right-3 top-2.5">
                ⌕
              </span>
            </div>

            <select className="w-[155px] h-[42px] border border-gray-300 rounded-md px-3 text-sm text-gray-600 outline-none">
              <option>Hamısı</option>
              <option>Oxunmamış</option>
              <option>Oxunmuş</option>
            </select>

          </div>

          <button
            onClick={() =>
              setNotifications((prev) =>
                prev.map((item) => ({
                  ...item,
                  unread: false,
                }))
              )
            }
            className="h-[42px] px-4 border border-[#ff5b0a] text-[#ff5b0a] rounded-md text-sm hover:bg-[#fff4ee]"
          >
            ✓ &nbsp; Hamısını oxunmuş et
          </button>

        </div>

        {/* Notification list */}
        <div className="space-y-1">

          {filteredNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}

        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-8">

          <div className="flex items-center gap-2 text-sm">
            <span> Səhifə daxil et:</span>

            <input
              type="number"
              defaultValue="10"
              className="w-10 h-8 border border-gray-400 rounded text-center text-xs"
            />
          </div>

          <div className="flex items-center gap-1">

            <button className="w-7 h-7 border rounded">
              ‹
            </button>

            <button className="w-7 h-7 border border-[#ff5b0a] text-[#ff5b0a] rounded">
              1
            </button>

            <button className="w-7 h-7 border rounded">
              2
            </button>

            <button className="w-7 h-7 border rounded">
              3
            </button>

            <span className="px-1">...</span>

            <button className="w-7 h-7 border rounded">
              88
            </button>

            <button className="w-7 h-7 border rounded">
              ›
            </button>

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Notifications;