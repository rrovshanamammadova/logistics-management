import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import loginImg from "../../assets/images/loginImg.jpg";

function ForgotPassword() {
  const navigate = useNavigate();

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  // Frontend demo üçün kod
  useEffect(() => {
    let savedCode = localStorage.getItem("passwordResetCode");

    if (!savedCode) {
      savedCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      localStorage.setItem("passwordResetCode", savedCode);

      toast.info(`Demo kodunuz: ${savedCode}`, {
        autoClose: 5000,
      });
    }
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;

    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !code[index] &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join("");

    if (enteredCode.length !== 6) {
      toast.error("6 rəqəmli kodu tam daxil edin.");
      return;
    }

    const savedCode =
      localStorage.getItem("passwordResetCode");

    if (enteredCode !== savedCode) {
      toast.error("Daxil etdiyiniz kod yanlışdır.");
      return;
    }

    localStorage.setItem(
      "passwordResetVerified",
      "true"
    );

    navigate("/reset-password");
  };

  const handleResend = () => {
    const newCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    localStorage.setItem(
      "passwordResetCode",
      newCode
    );

    setCode(["", "", "", "", "", ""]);

    toast.success(`Yeni demo kod: ${newCode}`, {
      autoClose: 5000,
    });

    inputsRef.current[0]?.focus();
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

            {/* Başlıq */}
            <div className="text-center mb-[65px]">

              <h1 className="text-[30px] font-medium text-[#172033]">
                Şifrə bərpası
              </h1>

              <p className="text-[16px] text-gray-500 mt-3">
                Şifrənizi bərpa edin
              </p>

            </div>


            {/* Kod */}
            <div className="text-center">

              <p className="text-[18px] text-[#222] mb-7">
                Emailə gələn kodu daxil edin
              </p>


              {/* 6 KOD INPUTU */}
              <div className="flex justify-center gap-[10px] mb-7">

                {code.map((item, index) => (
                  <input
                    key={index}
                    ref={(el) =>
                      (inputsRef.current[index] = el)
                    }
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={item}
                    onChange={(e) =>
                      handleChange(
                        e.target.value,
                        index
                      )
                    }
                    onKeyDown={(e) =>
                      handleKeyDown(e, index)
                    }
                    className="
                      w-[69px]
                      h-[69px]
                      border
                      border-[#BDBDBD]
                      rounded-[13px]
                      text-center
                      text-[22px]
                      outline-none
                      focus:border-[#FF5B00]
                    "
                  />
                ))}

              </div>


              {/* YENİDƏN GÖNDƏR */}
              <div className="flex justify-center items-center gap-2 text-[16px] mb-7">

                <span className="text-[#333]">
                  Kod gəlmədi?
                </span>

                <button
                  type="button"
                  onClick={handleResend}
                  className="text-[#FF5B00] hover:underline"
                >
                  Yenidən göndər
                </button>

              </div>


              {/* SMS */}
              <button
                type="button"
                onClick={() =>
                  navigate("/forgot-password/sms")
                }
                className="
                  text-[14px]
                  text-gray-400
                  hover:text-[#FF5B00]
                  transition
                  mb-[120px]
                "
              >
                Sms ilə kod alın
              </button>


              {/* TƏSDİQ */}
              <button
                type="button"
                onClick={handleVerify}
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
                Təsdiq et
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;