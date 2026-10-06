import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';

import clipblue from "../../../assets/icons/clipblue.png";
import time from "../../../assets/icons/time.png";
import driveryell from "../../../assets/icons/driveryell.png";
import lorrypurp from "../../../assets/icons/lorrypurp.png";
import waremint from "../../../assets/icons/waremint.png";
import grouporng from "../../../assets/icons/grouporng.png";
import financial from "../../../assets/icons/financial.png";

function Report() {
    const report=[
        {
            title:"Sifariş hesabatı",
            description:"Günlük və aylıq sifarişlərin hesabatı",
            icon:clipblue,
            bg:"bg-[#3E81ED33]",
        },
        {
            title:"Gecikən sifarişlər",
            description:"Gec çatdırılan sifarişlərin hesabatı",
            icon:time,
            bg:"bg-[#FF2B2B33]",
        },
        {
            title:"Sürücü fəaliyyəti",
            description:"Sürücülərə aid fəaliyyət məlumatları",
            icon:driveryell,
            bg:"bg-[#FBBF2433]",
        },
        {
            title:"Nəqliyyat istifadəsi",
            description:"Nəqliyyat xərcləri və məlumatları",
            icon:lorrypurp,
            bg:"bg-[#875EE533]",
        },
        {
            title:"Müştəri statistikası",
            description:"Müştəri sifarişləri və gəlirlər",
            icon:grouporng,
            bg:"bg-[#EA580C33]",
        },
        
        {
            title:"Anbar hesabatı",
            description:"Qəbul, çıxarışların miqdarı",
            icon:waremint,
            bg:"bg-[#08D4A433]",
        },
        {
            title: "Maliyyə göstəriciləri",
            description: "Gəlirlərin və xərclərin izlənməsi",
            icon: financial,
            bg: "bg-[#22C55E33]",
    },
    ]
  return (
    <>
      <Sidebar/>

      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">

        <Header/>

        {/* Reports */}
        <main className="p-5">

          <div className="space-y-3">

            {report.map((report, index) => (
              <Link
                key={index}
                to={
                  index === 0
                    ? "/admin/reports/orders"
                    : index === 1
                    ? "/admin/reports/delayed-orders"
                    : index===2
                    ? "/admin/reports/driver-activity"
                    : index===3
                    ? "/admin/reports/route-activity"
                    : index===4
                    ? "/admin/reports/custom-stat"
                    : index===6
                    ? "/admin/reports/finance-repo"
                    : index ===5
                    ? "/admin/reports/ware"
                    : "#"
                }
                className="h-[74px] bg-white rounded-lg flex items-center px-4 hover:bg-gray-50 transition"
              >

                {/* Icon */}
                <div
                  className={`w-[58px] h-[58px] rounded-full ${report.bg} flex items-center justify-center`}
                >
                  <img
                    src={report.icon}
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Text */}
                <div className="ml-5">
                  <h2 className="text-[18px] text-[#172033]">
                    {report.title}
                  </h2>

                  <p className="text-xs text-gray-400 mt-1">
                    {report.description}
                  </p>
                </div>

                {/* Arrow */}
                <span className="ml-auto text-2xl text-gray-600">
                  ›
                </span>

              </Link>
            ))}

          </div>

        </main>
      </div>
    </>
  )
}

export default Report
