import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function EditEmployees() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    name: "",
    position: "",
    phone: "",
    salary: "",
  });

  // =========================
  // EMPLOYEE LOAD
  // =========================

  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      const employees = JSON.parse(savedEmployees);

      const selectedEmployee = employees.find(
        (item) => item.id === Number(id)
      );

      if (selectedEmployee) {
        const nameParts = selectedEmployee.name.split(" ");

        setEmployee({
          name: nameParts[0] || "",
          surname: nameParts.slice(1).join(" ") || "",
          position: selectedEmployee.position || "",
          phone: selectedEmployee.phone
            ? selectedEmployee.phone.replace("+994 ", "")
            : "",
          salary: selectedEmployee.salary
            ? selectedEmployee.salary.replace(/[^\d]/g, "")
            : "",
        });
      }
    }
  }, [id]);

  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SAVE
  // =========================

  const handleSave = () => {
    const savedEmployees = localStorage.getItem("employees");

    if (!savedEmployees) {
      toast.error("İşçi məlumatı tapılmadı");
      return;
    }

    const employees = JSON.parse(savedEmployees);

    const updatedEmployees = employees.map((item) => {
      if (item.id === Number(id)) {
        return {
          ...item,

          name: `${employee.name} ${employee.surname}`.trim(),

          position: employee.position,

          phone: `+994 ${employee.phone}`,

          salary: `${Number(employee.salary).toLocaleString("en-US")} ₼`,
        };
      }

      return item;
    });

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    // Employees səhifəsinə qayıt
    navigate("/admin/employees", {
      state: {
        toast: "employee-updated",
      },
    });
  };

  // =========================
  // RESET
  // =========================

  const handleReset = () => {
    const savedEmployees = localStorage.getItem("employees");

    if (!savedEmployees) return;

    const employees = JSON.parse(savedEmployees);

    const selectedEmployee = employees.find(
      (item) => item.id === Number(id)
    );

    if (!selectedEmployee) return;

    const nameParts = selectedEmployee.name.split(" ");

    setEmployee({
      name: nameParts[0] || "",
      surname: nameParts.slice(1).join(" ") || "",
      position: selectedEmployee.position || "",
      phone: selectedEmployee.phone
        ? selectedEmployee.phone.replace("+994 ", "")
        : "",
      salary: selectedEmployee.salary
        ? selectedEmployee.salary.replace(/[^\d]/g, "")
        : "",
    });

    toast.info("Məlumatlar ilkin vəziyyətə qaytarıldı");
  };

  return (
    <>
      <Sidebar />

      <div className="ml-[235px] min-h-screen bg-[#f3f3f3]">
        <Header />

        <main className="px-16 py-6">

          {/* =========================
              PAGE TITLE
          ========================= */}


          {/* =========================
              FORM
          ========================= */}

          <div className="w-[608px]">

            {/* Ad */}

            <div className="mb-6">

              <label className="mb-2 block text-[14px] text-[#333]">
                Ad
              </label>

              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

            </div>


            {/* Soyad */}

            <div className="mb-6">

              <label className="mb-2 block text-[14px] text-[#333]">
                Soyad
              </label>

              <input
                type="text"
                name="surname"
                value={employee.surname || ""}
                onChange={handleChange}
                className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

            </div>


            {/* Vəzifə */}

            <div className="mb-6">

              <label className="mb-2 block text-[14px] text-[#333]">
                Vəzifə
              </label>

              <input
                type="text"
                name="position"
                value={employee.position}
                onChange={handleChange}
                className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

            </div>


            {/* Maaş */}

            <div className="mb-6">

              <label className="mb-2 block text-[14px] text-[#333]">
                Maaş
              </label>

              <input
                type="number"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
                className="h-[41px] w-full rounded-md border border-[#b9b9b9] bg-transparent px-3 text-[14px] outline-none focus:border-[#ff5b00]"
              />

            </div>


            {/* Telefon */}

            <div className="mb-7">

              <label className="mb-2 block text-[14px] text-[#333]">
                Telefon
              </label>

              <div className="flex h-[41px] w-full rounded-md border border-[#b9b9b9]">

                <div className="flex w-[75px] items-center border-r border-[#b9b9b9] px-2 text-[14px]">
                  🇦🇿

                  <span className="ml-1 text-[#333]">
                    +994
                  </span>
                </div>

                <input
                  type="text"
                  name="phone"
                  value={employee.phone}
                  onChange={handleChange}
                  className="flex-1 bg-transparent px-3 text-[14px] outline-none"
                />

              </div>

            </div>


            {/* =========================
                BUTTONS
            ========================= */}

            <div className="flex gap-5">

              <button
                type="button"
                onClick={handleSave}
                className="h-[40px] w-[294px] rounded-[9px] bg-[#f75b00] text-[14px] text-white hover:bg-[#e95100]"
              >
                Dəyişiklikləri yadda saxla
              </button>


              <button
                type="button"
                onClick={handleReset}
                className="h-[40px] w-[294px] rounded-[9px] border border-[#f75b00] bg-transparent text-[14px] text-[#f75b00] hover:bg-[#fff3ec]"
              >
                Sıfırla
              </button>

            </div>

          </div>

        </main>
      </div>
    </>
  );
}

export default EditEmployees;