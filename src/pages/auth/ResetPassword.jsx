import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import loginImg from "../../assets/images/loginImg.jpg";

import lock from "../../assets/icons/lock.png";

function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleReset = () => {

    const verified =
      localStorage.getItem(
        "passwordResetVerified"
      );

    if (verified !== "true") {
      toast.error(
        "Əvvəlcə təsdiq kodunu daxil etməlisiniz."
      );

      navigate("/forgot-password");
      return;
    }

    if (!password || !confirmPassword) {
      toast.error(
        "Hər iki şifrəni daxil edin."
      );
      return;
    }

    if (password.length < 6) {
      toast.error(
        "Şifrə ən azı 6 simvoldan ibarət olmalıdır."
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error(
        "Şifrələr uyğun gəlmir."
      );
      return;
    }

    // Backend olmadığı üçün frontend-də saxlayırıq
    localStorage.setItem(
      "resetPassword",
      password
    );

    // Köhnə reset məlumatlarını təmizləyirik
    localStorage.removeItem(
      "passwordResetCode"
    );

    localStorage.removeItem(
      "passwordResetVerified"
    );

    toast.success(
      "Şifrəniz uğurla yeniləndi."
    );

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#07152B] flex items-center justify-center p-4">

      <div className="w-full max-w-[1200px] min-h-[680px] bg-white rounded-[10px] overflow-hidden flex shadow-xl">

        {/* SOL ŞƏKİL */}
        <div className="hidden lg:block w-1/2">

          <img
            src={loginImg}
            alt="Express Logistika"
            className="w-full h-full object-cover"
          />

        </div>


        {/* SAĞ HİSSƏ */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-10">

          <div className="w-full max-w-[550px]">

            {/* BAŞLIQ */}
            <div className="text-center mb-[55px]">

              <h1 className="text-[30px] font-medium text-[#172033]">
                Yeni şifrə təyin edin
              </h1>

              <p className="text-[16px] text-gray-500 mt-3">
                Yeni şifrənizi daxil edin
              </p>

            </div>


            {/* YENİ ŞİFRƏ */}
            <div className="mb-5">

              <label className="block text-[14px] text-[#333] mb-2">
                Yeni şifrə
              </label>

              <div className="relative">

                <img
                  src={lock}
                  alt=""
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    object-contain
                  "
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Yeni şifrənizi daxil edin"
                  className="
                    w-full
                    h-[50px]
                    border
                    border-[#BDBDBD]
                    rounded-md
                    pl-12
                    pr-4
                    text-[15px]
                    outline-none
                    focus:border-[#FF5B00]
                  "
                />

              </div>

            </div>


            {/* ŞİFRƏ TƏKRARI */}
            <div className="mb-[100px]">

              <label className="block text-[14px] text-[#333] mb-2">
                Şifrəni təsdiqləyin
              </label>

              <div className="relative">

                <img
                  src={lock}
                  alt=""
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    object-contain
                  "
                />

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  placeholder="Şifrənizi yenidən daxil edin"
                  className="
                    w-full
                    h-[50px]
                    border
                    border-[#BDBDBD]
                    rounded-md
                    pl-12
                    pr-4
                    text-[15px]
                    outline-none
                    focus:border-[#FF5B00]
                  "
                />

              </div>

            </div>


            {/* TƏSDİQ */}
            <button
              type="button"
              onClick={handleReset}
              className="
                w-full
                h-[56px]
                bg-[#F75B00]
                text-white
                rounded-[9px]
                text-[16px]
                hover:bg-[#E95100]
                transition
              "
            >
              Şifrəni təyin et
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResetPassword;