import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute({ allowedRoles }) {
  const location = useLocation();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user")) || null;

  // Login olmayıbsa
  if (isLoggedIn !== "true" || !user) {
    return <Navigate to="/" replace />;
  }

  // Əgər rol məhdudiyyəti yoxdursa,
  // login olmuş istifadəçi daxil ola bilər
  if (!allowedRoles) {
    return <Outlet />;
  }

  // Rol icazəlidirsə
  if (allowedRoles.includes(user.role)) {
    return <Outlet />;
  }

  // İcazəsiz istifadəçi üçün düzgün səhifəyə göndəririk
  let redirectPath = "/";

  switch (user.role) {
    case "Administrator":
      redirectPath = "/admin";
      break;

    case "Müştəri":
      redirectPath = "/admin/orders";
      break;

    case "Logistika meneceri":
      redirectPath = "/admin/orders";
      break;

    case "Anbar işçisi":
      redirectPath = "/admin/warehouse";
      break;

    case "Sürücü":
      redirectPath = "/admin/routes";
      break;

    default:
      redirectPath = "/";
  }

  // Eyni səhifəyə sonsuz redirect olmasın
  if (location.pathname !== redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return null;
}

export default ProtectedRoute;