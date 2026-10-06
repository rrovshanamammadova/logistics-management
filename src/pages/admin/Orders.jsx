import React, { useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import edit from "../../assets/icons/edit.png";
import approved from "../../assets/icons/approved.png";
import clipyellow from "../../assets/icons/clipyellow.png";
import lorryblue from "../../assets/icons/lorryblue.png";
import lorrypurp from "../../assets/icons/lorrypurp.png";
import user from "../../assets/icons/user.png";
import close from "../../assets/icons/close.png";
import supporng from "../../assets/icons/supporng.png";
import hourglass from "../../assets/icons/hourglass.png";

function Orders() {
  const statistics = [
    {
      title: "Ümumi",
      value: "120",
      icon: clipyellow,
      bg: "bg-[#FBB82433]",
    },
    {
      title: "Çatdırılıb",
      value: "120",
      icon: approved,
      bg: "bg-[#22C55E33]",
    },
    {
      title: "Yüklənib",
      value: "120",
      icon: lorryblue,
      bg: "bg-[#3E81ED33]",
    },
    {
      title: "Yoldadır",
      value: "120",
      icon: lorrypurp,
      bg: "bg-[#875EE533]",
    },
    {
      title: "Müştəri sayı",
      value: "120",
      icon: user,
      bg: "bg-[#DCEAFF]",
    },
    {
      title: "Ləğv edilmiş",
      value: "120",
      icon: close,
      bg: "bg-[#FF2B2B33]",
    },
    {
      title: "Anbarda",
      value: "120",
      icon: supporng,
      bg: "bg-[#EA580C33]",
    },
    {
      title: "Hazırlanır",
      value: "120",
      icon: hourglass,
      bg: "bg-[#FBBF2433]",
    },
  ];

  const orders = [
    {
      id: 1,
      date: "18.08.2026",
      orderNo: "#ORD-1045",
      customer: "Ulvi Jabiev",
      company: "Bravo MMC",
      cargo: "Oreo",
      weight: "180",
      count: "18",
      dimensions: "18×20 cm²",
      status: "Çatdırılıb",
      priority: "Orta",
      loading: "Xətai prospekti...",
      delivery: "Nizami küçəsi...",
      planDate: "30.06.2026",
      time: "14:00",
    },
    {
      id: 2,
      date: "18.08.2026",
      orderNo: "#ORD-1046",
      customer: "Aysel Məmmədova",
      company: "Azərsun MMC",
      cargo: "Məhsullar",
      weight: "250",
      count: "25",
      dimensions: "25×30 cm²",
      status: "Yüklənib",
      priority: "Yüksək",
      loading: "Nərimanov küçəsi...",
      delivery: "28 May küçəsi...",
      planDate: "30.06.2026",
      time: "15:30",
    },
    {
      id: 3,
      date: "18.08.2026",
      orderNo: "#ORD-1047",
      customer: "Murad Əliyev",
      company: "Kontakt MMC",
      cargo: "Elektronika",
      weight: "120",
      count: "12",
      dimensions: "20×25 cm²",
      status: "Yoldadır",
      priority: "Orta",
      loading: "Xətai prospekti...",
      delivery: "Nizami küçəsi...",
      planDate: "30.06.2026",
      time: "16:00",
    },
    {
      id: 4,
      date: "18.08.2026",
      orderNo: "#ORD-1048",
      customer: "Elvin Hüseynov",
      company: "Baku Electronics",
      cargo: "Texnika",
      weight: "320",
      count: "8",
      dimensions: "30×40 cm²",
      status: "Anbarda",
      priority: "Aşağı",
      loading: "Babək prospekti...",
      delivery: "Sahil metrosu...",
      planDate: "01.07.2026",
      time: "10:00",
    },
    {
      id: 5,
      date: "18.08.2026",
      orderNo: "#ORD-1049",
      customer: "Nigar Quliyeva",
      company: "Bravo MMC",
      cargo: "Qida",
      weight: "180",
      count: "18",
      dimensions: "18×20 cm²",
      status: "Hazırlanır",
      priority: "Yüksək",
      loading: "Xətai prospekti...",
      delivery: "Gənclik küçəsi...",
      planDate: "01.07.2026",
      time: "11:00",
    },
  ];

  const [customerSearch,setCustomerSearch]=useState("");
  const [orderSearch,setOrderSearch]=useState("");
  const [cargoSearch,setCargoSearch]=useState("");

  const [activeSearch,setActiveSearch]=useState({
    customer:"",
    order:"",
    cargo:"",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;


const filteredOrders = orders.filter((order) => {
  const customerValue =
    `${order.customer} ${order.company}`.toLowerCase();

  const orderValue = order.orderNo.toLowerCase();

  const cargoValue = order.cargo.toLowerCase();

  return (
    customerValue.includes(activeSearch.customer.toLowerCase()) &&
    orderValue.includes(activeSearch.order.toLowerCase()) &&
    cargoValue.includes(activeSearch.cargo.toLowerCase())
  );
});

const startIndex = (currentPage - 1) * itemsPerPage;

const currentOrders = filteredOrders.slice(
  startIndex,
  startIndex + itemsPerPage
);

  const getStatusStyle = (status) => {
    const styles = {
      Çatdırılıb: "bg-[#D5F5E3] text-[#20C56A]",
      Yüklənib: "bg-[#DCEAFF] text-[#4D8FEF]",
      Yoldadır: "bg-[#E8DFFF] text-[#8B5CF6]",
      Yeni: "bg-[#D8F5EF] text-[#20B99A]",
      "Ləğv edildi": "bg-[#FFDADA] text-[#FF3B3B]",
      Anbarda: "bg-[#FFE5D2] text-[#F47721]",
      Hazırlanır: "bg-[#FFF0C7] text-[#F4B400]",
    };

    return styles[status] || "bg-gray-100 text-gray-600";
  };

  const getPriorityStyle = (priority) => {
    const styles = {
      Yüksək: "bg-[#D5F5E3] text-[#20C56A]",
      Orta: "bg-[#FFF0C7] text-[#F4B400]",
      Aşağı: "bg-[#FFE0E0] text-[#FF4B4B]",
    };

    return styles[priority] || "bg-gray-100 text-gray-600";
  };

  const handleSearch=()=>{
    setActiveSearch({
      customer:customerSearch,
      order:orderSearch,
      cargo:cargoSearch
    });

    setCurrentPage(1);
  };
  
const customerSuggestions = orders.filter((order) => {
  const search = customerSearch.toLowerCase();

  return (
    search &&
    `${order.customer} ${order.company}`
      .toLowerCase()
      .includes(search)
  );
}).filter((order, index, self) =>
  index === self.findIndex(
    (item) =>
      item.customer === order.customer &&
      item.company === order.company
  )
);

  const orderSuggestions=orders.filter((order)=>{
    const search=orderSearch.toLowerCase();

    return(
      search &&
      order.orderNo.toLowerCase().includes(search)
    );
  });

  const cargoSuggestions=orders.filter((order)=>{
    const search=cargoSearch.toLowerCase();

    return(
      search &&
      order.cargo.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <Sidebar />

      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">

        <Header/>


        {/* MAIN */}
        <main className="p-5">

          {/* FILTERS */}
<div className="flex items-center gap-3 mb-5">

  {/* MÜŞTƏRİ / ŞİRKƏT */}
  <div className="relative">

    <input
      type="text"
      value={customerSearch}
      onChange={(e) => setCustomerSearch(e.target.value)}
      placeholder="Müştəri/Şirkət"
      className="w-[175px] h-[35px] bg-white border border-gray-300 rounded-md px-3 pr-10 text-sm outline-none focus:border-[#ff5b0a]"
    />

    <button
      type="button"
      onClick={handleSearch}
      className="absolute right-3 top-[8px] text-gray-500 hover:text-[#ff5b0a]"
    >
      ⌕
    </button>

    {/* Dropdown */}
    {customerSearch && customerSuggestions.length > 0 && (
      <div className="absolute top-[40px] left-0 w-[250px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

        {customerSuggestions.map((order) => (
          <button
            key={order.id}
            type="button"
            onClick={() => {
              setCustomerSearch(order.customer);
              setActiveSearch({
                ...activeSearch,
                customer: order.customer,
              });
              setCurrentPage(1);
            }}
            className="w-full text-left px-3 py-2 hover:bg-gray-50"
          >
            <p className="text-sm text-gray-800">
              {order.customer}
            </p>

            <p className="text-xs text-gray-400">
              {order.company}
            </p>
          </button>
        ))}

      </div>
    )}

  </div>


  {/* SİFARİŞ № */}
  <div className="relative">

    <input
      type="text"
      value={orderSearch}
      onChange={(e) => setOrderSearch(e.target.value)}
      placeholder="Sifariş №"
      className="w-[175px] h-[35px] bg-white border border-gray-300 rounded-md px-3 pr-10 text-sm outline-none focus:border-[#ff5b0a]"
    />

    <button
      type="button"
      onClick={handleSearch}
      className="absolute right-3 top-[8px] text-gray-500 hover:text-[#ff5b0a]"
    >
      ⌕
    </button>


    {/* Dropdown */}
    {orderSearch && orderSuggestions.length > 0 && (
      <div className="absolute top-[40px] left-0 w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

        {orderSuggestions.map((order) => (
          <button
            key={order.id}
            type="button"
            onClick={() => {
              setOrderSearch(order.orderNo);

              setActiveSearch({
                ...activeSearch,
                order: order.orderNo,
              });

              setCurrentPage(1);
            }}
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
          >
            {order.orderNo}
          </button>
        ))}

      </div>
    )}

  </div>


  {/* YÜK ADI */}
  <div className="relative">

    <input
      type="text"
      value={cargoSearch}
      onChange={(e) => setCargoSearch(e.target.value)}
      placeholder="Yük adı"
      className="w-[175px] h-[35px] bg-white border border-gray-300 rounded-md px-3 pr-10 text-sm outline-none focus:border-[#ff5b0a]"
    />

    <button
      type="button"
      onClick={handleSearch}
      className="absolute right-3 top-[8px] text-gray-500 hover:text-[#ff5b0a]"
    >
      ⌕
    </button>


    {/* Dropdown */}
    {cargoSearch && cargoSuggestions.length > 0 && (
      <div className="absolute top-[40px] left-0 w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">

        {cargoSuggestions.map((order) => (
          <button
            key={order.id}
            type="button"
            onClick={() => {
              setCargoSearch(order.cargo);

              setActiveSearch({
                ...activeSearch,
                cargo: order.cargo,
              });

              setCurrentPage(1);
            }}
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
          >
            {order.cargo}
          </button>
        ))}

      </div>
    )}

  </div>


  {/* TARİX */}
  <input type="date" className="w-[175px] h-[35px] bg-white border border-gray-300 rounded-md px-3 pr-10 text-sm outline-none focus:border-[#ff5b0a]"/>


  {/* YENİ SİFARİŞ */}
  <Link
    to="/admin/orders/new"
    className="ml-auto h-[35px] px-5 bg-[#FF5B0A] text-white rounded-lg text-sm flex items-center gap-2"
  >
    <span className="text-xl leading-none">
      +
    </span>

    Yeni sifariş
  </Link>

</div>


          {/* STATISTICS */}
          <div className="grid grid-cols-4 gap-4 mb-5">

            {statistics.map((item) => (
              <div
                key={item.title}
                className="h-[85px] bg-white rounded-lg flex items-center px-5 gap-4"
              >

                <div
                  className={`w-11 h-11 rounded-full ${item.bg} flex items-center justify-center`}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <p className="text-[28px] leading-8 mt-1 font-medium">
                    {item.value}
                  </p>
                </div>

              </div>
            ))}

          </div>


          {/* TABLE */}
          <div className="bg-white rounded-lg overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead>
                  <tr className="border-b border-gray-200 text-gray-500">

                    <th className="px-4 py-3 text-left font-medium">
                      Tarix
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Sifariş №
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Müştəri
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Yük adı
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Çəki
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Say
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Ölçülər
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Status
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Prioritet
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Yükləmə ünvanı
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Çatdırılma ünvanı
                    </th>

                    <th className="px-4 py-3 text-left font-medium">
                      Plan tarixi
                    </th>

                    <th></th>

                  </tr>
                </thead>


                <tbody>

                  {currentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >

                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.date}
                      </td>


                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.orderNo}
                      </td>


                      <td className="px-4 py-3 whitespace-nowrap">
                        <p className="text-gray-800">
                          {order.customer}
                        </p>

                        <p className="text-[10px] text-gray-400">
                          {order.company}
                        </p>
                      </td>


                      <td className="px-4 py-3">
                        {order.cargo}
                      </td>


                      <td className="px-4 py-3">
                        {order.weight}
                      </td>


                      <td className="px-4 py-3">
                        {order.count}
                      </td>


                      <td className="px-4 py-3 whitespace-nowrap">
                        {order.dimensions}
                      </td>


                      <td className="px-4 py-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs whitespace-nowrap ${getStatusStyle(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>


                      <td className="px-4 py-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs whitespace-nowrap ${getPriorityStyle(
                            order.priority
                          )}`}
                        >
                          {order.priority}
                        </span>
                      </td>


                      <td className="px-4 py-3 max-w-[130px] truncate">
                        {order.loading}
                      </td>


                      <td className="px-4 py-3 max-w-[130px] truncate">
                        {order.delivery}
                      </td>


                      <td className="px-4 py-3 whitespace-nowrap">
                        <p>
                          {order.planDate}
                        </p>

                        <p className="text-[10px] text-gray-400 text-center">
                          {order.time}
                        </p>
                      </td>


                      <td className="px-4 py-3 text-center">
  <Link
    to={`/admin/orders/edit/${order.id}`}
    className="inline-flex items-center justify-center w-8 h-8"
  >
    <img
      src={edit}
      alt="Redaktə et"
      className="w-5 h-5 object-contain"
    />
  </Link>
</td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>


            {/* PAGINATION */}
            <Pagination
  currentPage={currentPage}
  totalItems={filteredOrders.length}
  itemsPerPage={itemsPerPage}
  onPageChange={setCurrentPage}
/>

          </div>

        </main>

      </div>
    </>
  );
}

export default Orders;