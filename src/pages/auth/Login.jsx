import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import loginImg from "../../assets/images/loginImg.jpg";

import lock from "../../assets/icons/lock.png";
import userblack from "../../assets/icons/userblack.png";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [role, setRole] = useState("Administrator");

  const handleLogin = (e) => {
  e.preventDefault();

  if (!username || !password) {
    toast.error(
      "İstifadəçi adı və şifrəni daxil edin."
    );
    return;
  }

  const savedPassword =
    localStorage.getItem("resetPassword");

  //evveller sifre reset edilibse
  if (
    savedPassword &&
    password !== savedPassword
  ) {
    toast.error("Şifrə yanlışdır.");
    return;
  }

  const user = {
    name: username,
    role: role,
    username: username,
  };

  localStorage.setItem(
    "isLoggedIn",
    "true"
  );

  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );

  if (rememberMe) {
    localStorage.setItem(
      "rememberMe",
      "true"
    );
  } else {
    localStorage.removeItem(
      "rememberMe"
    );
  }

  toast.success("Uğurla daxil oldunuz.");

  navigate("/admin");
};

  return (
    <div className="min-h-screen bg-[#07152B] flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] min-h-[680px] bg-white rounded-[10px] overflow-hidden flex shadow-xl">

        {/* Sol şəkil */}
        <div className="hidden lg:block w-1/2">
          <img
            src={loginImg}
            alt="Express Logistika"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-10">
          <form
            onSubmit={handleLogin}
            className="w-full max-w-[500px]"
          >

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src=""
                alt="Express Logistika"
                className="h-[70px] object-contain"
              />
            </div>

            {/* Başlıq */}
            <div className="text-center mb-8">

              <h1 className="text-[30px] font-medium text-[#172033]">
                Xoş gəlmisiniz
              </h1>

              <p className="text-[16px] text-gray-500 mt-2">
                Hesabınıza daxil olaraq işlərinizi davam etdirin
              </p>

            </div>

            {/* Username */}
            <div className="mb-5">

              <label className="block text-[14px] text-[#333] mb-2">
                İstifadəçi adı və ya e-poçtu
              </label>

              <div className="relative">

                {/* User icon */}
                <img
                  src={userblack}
                  alt=""
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                />

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="İstifadəçi adını daxil edin"
                  className="w-full h-[50px] border border-[#bdbdbd] rounded-md pl-12 pr-4 text-[15px] outline-none focus:border-[#ff5b00]"
                />

              </div>
            </div>

            {/* Password */}
            <div className="mb-4">

              <label className="block text-[14px] text-[#333] mb-2">
                Şifrə
              </label>

              <div className="relative">

                {/* Lock icon */}
                <img
                  src={lock}
                  alt=""
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifrənizi daxil edin"
                  className="w-full h-[50px] border border-[#bdbdbd] rounded-md pl-12 pr-4 text-[15px] outline-none focus:border-[#ff5b00]"
                />

              </div>
            </div>




            {/* Test üçün rol seçimi */}
<div className="mb-5">

  <label className="block text-[14px] text-[#333] mb-2">
    Rol
  </label>

  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="w-full h-[50px] border border-[#bdbdbd] rounded-md px-4 text-[15px] outline-none focus:border-[#ff5b00]"
  >
    <option value="Administrator">
      Administrator
    </option>

    <option value="Müştəri">
      Müştəri
    </option>

    <option value="Logistika meneceri">
      Logistika meneceri
    </option>

    <option value="Anbar işçisi">
      Anbar işçisi
    </option>

    <option value="Sürücü">
      Sürücü
    </option>
  </select>

</div>




            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mb-8">

              <label className="flex items-center gap-2 text-[14px] text-gray-600 cursor-pointer">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-[#ff5b00]"
                />

                Məni xatırla

              </label>

              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-[14px] text-gray-500 underline hover:text-[#ff5b00]"
              >
                Şifrəni unutmusunuz?
              </button>

            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full h-[50px] bg-[#f75b00] text-white rounded-[9px] text-[16px] hover:bg-[#e95100]"
            >
              Daxil ol
            </button>

            {/* Register yoxdur */}
            <p className="text-center text-[13px] text-gray-500 mt-14 leading-5">
              Sistemdən qeydiyyat mövcud deyil.
              <br />
              Bu, yalnız daxili istifadə üçün idarəetmə panelidir.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;