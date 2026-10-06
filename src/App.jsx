import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./pages/auth/ForgotPassword";
import SmsVerification from "./pages/auth/SmsVerification";
import ResetPassword from "./pages/auth/ResetPassword";

// Dashboard
import Dashboard from "./pages/admin/Dashboard";
import Notifications from "./pages/admin/Notifications";

// Orders
import Orders from "./pages/admin/Orders";
import NewOrders from "./pages/admin/NewOrders";
import EditOrders from "./pages/admin/EditOrders";

// Customers
import Customers from "./pages/admin/Customers";
import EditCustomer from "./pages/admin/EditCustomer";
import NewCustomer from "./pages/admin/NewCustomer";

// Employees
import Employees from "./pages/admin/Employees";
import NewEmployees from "./pages/admin/NewEmployees";
import EditEmployees from "./pages/admin/EditEmployees";

// Warehouse
import Warehouse from "./pages/admin/Warehouse";
import NewWare from "./pages/admin/NewWare";
import ExistingWare from "./pages/admin/ExistingWare";
import EditWare from "./pages/admin/EditWare";
import ExitWare from "./pages/admin/ExitWare";

// Vehicles
import Vehicles from "./pages/admin/Vehicles";
import NewVehicle from "./pages/admin/NewVehicle";
import EditVehicle from "./pages/admin/EditVehicle";

// Drivers
import Drivers from "./pages/admin/Drivers";
import NewDriver from "./pages/admin/NewDriver";
import EditDriver from "./pages/admin/EditDriver";

// Audit
import Audit from "./pages/admin/Audit";

// Reports
import Report from "./pages/admin/Reports/Report";
import OrderReport from "./pages/admin/Reports/Order/OrderReport";
import DelayedOrders from "./pages/admin/Reports/Delayed/DelayedOrders";
import DriverActivity from "./pages/admin/Reports/Driver/DriverActivity";
import RouteActivity from "./pages/admin/Reports/Routes/RouteActivity";
import CustomerStat from "./pages/admin/Reports/Customer/CustomerStat";
import FinanceReport from "./pages/admin/Reports/Finance/FinanceReport";
import WareReport from "./pages/admin/Reports/Warehouse/WareReport";

// Routes
import RoutesPage from "./pages/admin/RoutesPage";
import NewRoute from "./pages/admin/NewRoute";
import EditRoute from "./pages/admin/EditRoute";

// GPS
import GPS from "./pages/admin/GPS";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================================================= */}
        {/* LOGIN */}
        {/* ================================================= */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* ================================================= */}
{/* PASSWORD RESET */}
{/* ================================================= */}

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/forgot-password/sms"
  element={<SmsVerification />}
/>

<Route
  path="/reset-password"
  element={<ResetPassword />}
/>


        {/* ================================================= */}
        {/* ADMIN DASHBOARD */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["Administrator"]}
            />
          }
        >
          <Route
            path="/admin"
            element={<Dashboard />}
          />
        </Route>


        {/* ================================================= */}
        {/* NOTIFICATIONS */}
        {/* BÜTÜN ROLLAR */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={[
                "Administrator",
                "Müştəri",
                "Logistika meneceri",
                "Anbar işçisi",
                "Sürücü",
              ]}
            />
          }
        >
          <Route
            path="/admin/notifications"
            element={<Notifications />}
          />
        </Route>


        {/* ================================================= */}
        {/* ORDERS */}
        {/* ADMIN + MÜŞTƏRİ + LOGİSTİKA MENECERİ */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={[
                "Administrator",
                "Müştəri",
                "Logistika meneceri",
              ]}
            />
          }
        >

          <Route
            path="/admin/orders"
            element={<Orders />}
          />

          <Route
            path="/admin/orders/new"
            element={<NewOrders />}
          />

          <Route
            path="/admin/orders/edit/:id"
            element={<EditOrders />}
          />

        </Route>


        {/* ================================================= */}
        {/* CUSTOMERS */}
        {/* YALNIZ ADMIN */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["Administrator"]}
            />
          }
        >

          <Route
            path="/admin/customers"
            element={<Customers />}
          />

          <Route
            path="/admin/customers/edit/:id"
            element={<EditCustomer />}
          />

          <Route
            path="/admin/customers/new"
            element={<NewCustomer />}
          />

        </Route>


        {/* ================================================= */}
        {/* EMPLOYEES */}
        {/* YALNIZ ADMIN */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["Administrator"]}
            />
          }
        >

          <Route
            path="/admin/employees"
            element={<Employees />}
          />

          <Route
            path="/admin/employees/edit/:id"
            element={<EditEmployees />}
          />

          <Route
            path="/admin/employees/new"
            element={<NewEmployees />}
          />

        </Route>


        {/* ================================================= */}
        {/* WAREHOUSE */}
        {/* ADMIN + ANBAR İŞÇİSİ */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={[
                "Administrator",
                "Anbar işçisi",
              ]}
            />
          }
        >

          <Route
            path="/admin/warehouse"
            element={<Warehouse />}
          />

          <Route
            path="/admin/warehouse/new"
            element={<NewWare />}
          />

          <Route
            path="/admin/warehouse/existing"
            element={<ExistingWare />}
          />

          <Route
            path="/admin/warehouse/edit/:id"
            element={<EditWare />}
          />

          <Route
            path="/admin/warehouse/exit"
            element={<ExitWare />}
          />

        </Route>


        {/* ================================================= */}
        {/* VEHICLES */}
        {/* YALNIZ ADMIN */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["Administrator"]}
            />
          }
        >

          <Route
            path="/admin/vehicles"
            element={<Vehicles />}
          />

          <Route
            path="/admin/vehicles/new"
            element={<NewVehicle />}
          />

          <Route
            path="/admin/vehicles/edit/:id"
            element={<EditVehicle />}
          />

        </Route>


        {/* ================================================= */}
        {/* DRIVERS */}
        {/* YALNIZ ADMIN */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["Administrator"]}
            />
          }
        >

          <Route
            path="/admin/drivers"
            element={<Drivers />}
          />

          <Route
            path="/admin/drivers/new"
            element={<NewDriver />}
          />

          <Route
            path="/admin/drivers/edit/:id"
            element={<EditDriver />}
          />

        </Route>


        {/* ================================================= */}
        {/* AUDIT */}
        {/* YALNIZ ADMIN */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["Administrator"]}
            />
          }
        >

          <Route
            path="/admin/audit"
            element={<Audit />}
          />

        </Route>


        {/* ================================================= */}
        {/* REPORTS */}
        {/* YALNIZ ADMIN */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["Administrator"]}
            />
          }
        >

          <Route
            path="/admin/reports"
            element={<Report />}
          />

          <Route
            path="/admin/reports/orders"
            element={<OrderReport />}
          />

          <Route
            path="/admin/reports/delayed-orders"
            element={<DelayedOrders />}
          />

          <Route
            path="/admin/reports/driver-activity"
            element={<DriverActivity />}
          />

          <Route
            path="/admin/reports/route-activity"
            element={<RouteActivity />}
          />

          <Route
            path="/admin/reports/custom-stat"
            element={<CustomerStat />}
          />

          <Route
            path="/admin/reports/finance-repo"
            element={<FinanceReport />}
          />

          <Route
            path="/admin/reports/ware"
            element={<WareReport />}
          />

        </Route>


        {/* ================================================= */}
        {/* ROUTES */}
        {/* ADMIN + LOGİSTİKA MENECERİ + SÜRÜCÜ */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={[
                "Administrator",
                "Logistika meneceri",
                "Sürücü",
              ]}
            />
          }
        >

          <Route
            path="/admin/routes"
            element={<RoutesPage />}
          />

          <Route
            path="/admin/routes/new"
            element={<NewRoute />}
          />

          <Route
            path="/admin/routes/edit/:id"
            element={<EditRoute />}
          />

        </Route>


        {/* ================================================= */}
        {/* GPS */}
        {/* YALNIZ ADMIN */}
        {/* ================================================= */}

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["Administrator"]}
            />
          }
        >

          <Route
            path="/admin/tracking"
            element={<GPS />}
          />

        </Route>


      </Routes>

<ToastContainer
  position="top-right"
  autoClose={3000}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
  toastStyle={{
    width: "calc(100vw - 275px)",
    marginRight: "10px",
  }}
/>

    </BrowserRouter>
  );
}

export default App;