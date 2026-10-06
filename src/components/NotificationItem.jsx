import box from "../assets/icons/box.png";
import check from "../assets/icons/check.png";
import time from "../assets/icons/time.png";
import driver from "../assets/icons/driver.png";
import location from "../assets/icons/location.png";

import { toast } from "react-toastify";

function NotificationItem({ notification }) {
  const styles = {
    delivered: {
      bg: "bg-[#20c96b]",
      
      icon: check,
    },
    new: {
      bg: "bg-[#ffb718]",
      icon: box,
    },
    delay: {
      bg: "bg-[#ff2929]",
      icon: time,
    },
    driver: {
      bg: "bg-[#3b82f6]",
      icon: driver,
    },
    route: {
      bg: "bg-[#8b5cf6]",
      icon: location,
    },
  };

  const style = styles[notification.type];

  return (
    <div
      className={`flex items-center justify-between px-3 py-3 rounded-lg ${
        notification.unread
          ? "bg-[#f9d9ca] border-l-2 border-[#ff5b0a]"
          : "bg-white"
      }`}

      onClick={() => {
      toast.info(notification.title);
      }}
    >
      <div className="flex items-center gap-3">
        
        <div
          className={`w-8 h-8 rounded-md ${style.bg} text-white flex items-center justify-center`}
        >
          <img 
            src={style.icon} 
            alt=""
            className="w-4 h-4 object-contain brightness-0 invert" />
        </div>

        <div>
          <p className="text-[13px] text-[#222]">
            {notification.title}
          </p>

          <p className="text-[10px] text-gray-500 mt-0.5">
            {notification.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-7">
        <span className="text-[12px] text-[#222]">
          {notification.date}
        </span>

        
      </div>
    </div>
  );
}

export default NotificationItem;