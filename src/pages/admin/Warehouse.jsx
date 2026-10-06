
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DeleteModal from "../../components/DeleteModal";

import edit from "../../assets/icons/edit.png";
import box from "../../assets/icons/box.png";
import category from "../../assets/icons/category.png";
import barcode from "../../assets/icons/barcode.png";
import deleteicon from "../../assets/icons/deleteicon.png";
import wareorng from "../../assets/icons/wareorng.png";
import input from "../../assets/icons/input.png";
import output from "../../assets/icons/output.png";
import warning from "../../assets/icons/warning.png";

function Warehouse() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  const statistics = [
    {
      title: "Anbar doluluğu",
      value: "78%",
      icon: wareorng,
      bg: "bg-[#EA580C4D]",
    },
    {
      title: "Bugünkü qəbul",
      value: "24%",
      icon: input,
      bg: "bg-[#22C55E33]",
    },
    {
      title: "Bugünkü çıxış",
      value: "18",
      icon: output,
      bg: "bg-[#FF2B2B33]",
    },
    {
      title: "Stok xəbərdarlığı",
      value: "6",
      icon: warning,
      bg: "bg-[#FFB80033]",
    },
  ];

  const initialProducts = [
    {
      id: 1,
      barcode: "8691234567890",
      product: "Oreo",
      category: "Qida",
      weight: "180 q",
      size: "18 × 20 cm",
      location: "A-01-02",
      stock: 120,
      minimum: 50,
      norm: "Yaxşı",
      updated: "18.08.2026 14:20",
    },
    {
      id: 2,
      barcode: "8691234567891",
      product: "Coca Cola",
      category: "İçki",
      weight: "1 L",
      size: "10 × 30 cm",
      location: "B-02-01",
      stock: 35,
      minimum: 50,
      norm: "Aşağı",
      updated: "18.08.2026 13:10",
    },
    {
      id: 3,
      barcode: "8691234567892",
      product: "Pepsi",
      category: "İçki",
      weight: "1 L",
      size: "18 × 20 cm",
      location: "B-02-02",
      stock: 71,
      minimum: 50,
      norm: "Yaxşı",
      updated: "18.08.2026 12:45",
    },
    {
      id: 4,
      barcode: "8691234567890",
      product: "Oreo",
      category: "Qida",
      weight: "180 q",
      size: "18 × 20 cm",
      location: "A-01-02",
      stock: 120,
      minimum: 50,
      norm: "Yaxşı",
      updated: "18.08.2026 14:20",
    },
    {
      id: 5,
      barcode: "8691234567890",
      product: "Oreo",
      category: "Qida",
      weight: "180 q",
      size: "18 × 20 cm",
      location: "A-01-02",
      stock: 120,
      minimum: 50,
      norm: "Yaxşı",
      updated: "18.08.2026 14:20",
    },
    {
      id: 6,
      barcode: "8691234567890",
      product: "Oreo",
      category: "Qida",
      weight: "180 q",
      size: "18 × 20 cm",
      location: "A-01-02",
      stock: 120,
      minimum: 50,
      norm: "Yaxşı",
      updated: "18.08.2026 14:20",
    },
  ];

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("warehouseProducts");

    return savedProducts
      ? JSON.parse(savedProducts)
      : initialProducts;
  });

  // =========================
  // EDIT TOAST
  // =========================

  useEffect(() => {
    const message = localStorage.getItem("toastMessage");

    if (message) {
      toast.success(message);
      localStorage.removeItem("toastMessage");
    }
  }, []);

  // =========================
  // SEARCH
  // =========================

  const [barcodeSearch, setBarcodeSearch] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");

  const [activeSearch, setActiveSearch] = useState({
    barcode: "",
    product: "",
    category: "",
  });

  const filteredProducts = products.filter((product) => {
    return (
      product.barcode
        .toLowerCase()
        .includes(activeSearch.barcode.toLowerCase()) &&
      product.product
        .toLowerCase()
        .includes(activeSearch.product.toLowerCase()) &&
      product.category
        .toLowerCase()
        .includes(activeSearch.category.toLowerCase())
    );
  });

  // =========================
  // PAGINATION
  // =========================

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // =========================
  // SEARCH
  // =========================

  const handleSearch = () => {
    setActiveSearch({
      barcode: barcodeSearch,
      product: productSearch,
      category: categorySearch,
    });

    setCurrentPage(1);
  };

  // =========================
  // SUGGESTIONS
  // =========================

  const barcodeSuggestions = products.filter((product) => {
    const search = barcodeSearch.toLowerCase();

    return (
      search &&
      product.barcode.toLowerCase().includes(search)
    );
  });

  const productSuggestions = products.filter((product) => {
    const search = productSearch.toLowerCase();

    return (
      search &&
      product.product.toLowerCase().includes(search)
    );
  });

  const categorySuggestions = products.filter((product) => {
    const search = categorySearch.toLowerCase();

    return (
      search &&
      product.category.toLowerCase().includes(search)
    );
  });

  // =========================
  // STOCK STYLE
  // =========================

  const getNormStyle = (norm) => {
    const styles = {
      Aşağı: "bg-[#FFDADA] text-[#FF3B3B]",
      Minimum: "bg-[#FFF0C7] text-[#F4B400]",
      Yaxşı: "bg-[#D5F5E3] text-[#20C56A]",
    };

    return styles[norm] || "bg-gray-100 text-gray-600";
  };

  const [showNewLoadMenu, setShowNewLoadMenu] = useState(false);

  // =========================
  // DELETE
  // =========================

  const handleDelete = () => {
    if (!selectedWarehouse) return;

    const updatedProducts = products.filter(
      (product) => product.id !== selectedWarehouse.id
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "warehouseProducts",
      JSON.stringify(updatedProducts)
    );

    setIsDeleteModalOpen(false);
    setSelectedWarehouse(null);

    toast.success("Yük uğurla silindi");

    if (currentProducts.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Sidebar />

      <div className="min-h-screen bg-[#F3F3F3] ml-[235px]">

        <Header />

        <main className="p-5">

          <div className="flex items-center gap-3 mb-7">

            {/* BARCODE */}
            <div className="relative">
              <input
                type="text"
                placeholder="Barkod oxuma"
                value={barcodeSearch}
                onChange={(e) => setBarcodeSearch(e.target.value)}
                className="w-[190px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-2 text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {barcodeSearch && barcodeSuggestions.length > 0 && (
                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">
                  {barcodeSuggestions.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => {
                        setBarcodeSearch(product.barcode);

                        setActiveSearch({
                          ...activeSearch,
                          barcode: product.barcode,
                        });

                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {product.barcode}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PRODUCT */}
            <div className="relative">
              <input
                type="text"
                placeholder="Məhsul"
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                className="w-[190px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-2 text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {productSearch && productSuggestions.length > 0 && (
                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">
                  {productSuggestions.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => {
                        setProductSearch(product.product);

                        setActiveSearch({
                          ...activeSearch,
                          product: product.product,
                        });

                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {product.product}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CATEGORY */}
            <div className="relative">
              <input
                type="text"
                placeholder="Kateqoriya"
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
                className="w-[190px] h-[35px] border border-gray-300 rounded-md px-3 pr-9 text-sm outline-none bg-white"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-2 text-gray-500 hover:text-[#FF5B0A]"
              >
                ⌕
              </button>

              {categorySearch && categorySuggestions.length > 0 && (
                <div className="absolute top-[40px] left-0 w-[220px] bg-white border border-gray-200 rounded-md shadow-lg z-40 overflow-hidden">
                  {categorySuggestions.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => {
                        setCategorySearch(product.category);

                        setActiveSearch({
                          ...activeSearch,
                          category: product.category,
                        });

                        setCurrentPage(1);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      {product.category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* BUTTONS */}

            <div className="ml-auto flex items-center gap-3">

              <div className="relative">

                <button
                  onClick={() => setShowNewLoadMenu(!showNewLoadMenu)}
                  className="h-[35px] px-5 bg-[#FF5B0A] text-white rounded-lg text-sm flex items-center gap-2"
                >
                  <span className="text-xl leading-none">+</span>

                  Yeni yük

                  <span className="text-xs ml-1">▾</span>
                </button>

                {showNewLoadMenu && (
                  <div className="absolute right-0 top-[42px] z-50 w-[230px] bg-white rounded-lg shadow-lg border border-gray-100 py-2">

                    <Link
                      to="/admin/warehouse/new"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Yeni yük qəbulu
                    </Link>

                    <Link
                      to="/admin/warehouse/existing"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Mövcud məhsula yük qəbulu
                    </Link>

                  </div>
                )}

              </div>

              <Link
                to="/admin/warehouse/exit"
                className="h-[35px] px-5 border border-[#FF5B0A] text-[#FF5B0A] rounded-lg text-sm flex items-center gap-2"
              >
                <span className="text-xl leading-none">−</span>
                Yük çıxarışı
              </Link>

            </div>

          </div>

          {/* STATISTICS */}

          <div className="grid grid-cols-4 gap-5 mb-5">

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

                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>

                  <p className="text-[32px] leading-8 mt-1">
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
                  <tr className="border-b border-gray-300 text-gray-800">

                    <th className="px-4 py-3 text-left">Barkod</th>
                    <th className="px-4 py-3 text-left">Məhsul</th>
                    <th className="px-4 py-3 text-left">Kateqoriya</th>
                    <th className="px-4 py-3 text-left">Çəki</th>
                    <th className="px-4 py-3 text-left">Ölçü</th>
                    <th className="px-4 py-3 text-left">Saxlanma yeri</th>
                    <th className="px-4 py-3 text-left">Stok qalığı</th>
                    <th className="px-4 py-3 text-left">Minimum</th>
                    <th className="px-4 py-3 text-left">Stok norması</th>
                    <th className="px-4 py-3 text-left">Son yenilənmə</th>
                    <th className="px-4 py-3 text-center">Əməliyyatlar</th>

                  </tr>
                </thead>

                <tbody>

                  {currentProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >

                      <td className="px-4 py-3 whitespace-nowrap">
                        {product.barcode}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap font-medium">
                        {product.product}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {product.category}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {product.weight}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {product.size}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {product.location}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {product.stock}
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {product.minimum}
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${getNormStyle(
                            product.norm
                          )}`}
                        >
                          {product.norm}
                        </span>
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        {product.updated}
                      </td>

                      <td className="px-4 py-3">

                        <div className="flex items-center justify-center gap-3">

                          <Link
                            to={`/admin/warehouse/edit/${product.id}`}
                            className="inline-flex items-center justify-center w-8 h-8"
                            title="Redaktə et"
                          >
                            <img
                              src={edit}
                              alt="Redaktə et"
                              className="w-5 h-5 object-contain"
                            />
                          </Link>

                          <button
                            className="inline-flex items-center justify-center w-8 h-8"
                            onClick={() => {
                              setSelectedWarehouse(product);
                              setIsDeleteModalOpen(true);
                            }}
                          >
                            <img
                              src={deleteicon}
                              alt="Sil"
                              className="w-5 h-5 object-contain"
                            />
                          </button>

                        </div>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

            <Pagination
              currentPage={currentPage}
              totalItems={filteredProducts.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />

          </div>

        </main>

      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}

        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedWarehouse(null);
        }}

        onConfirm={handleDelete}

        title="Anbarı sil"

        data={
          selectedWarehouse
            ? [
                {
                  label: "Yük adı",
                  value: selectedWarehouse.product,
                  icon: box,
                },
                {
                  label: "Kateqoriya",
                  value: selectedWarehouse.category,
                  icon: category,
                },
                {
                  label: "Barkod",
                  value: selectedWarehouse.barcode,
                  icon: barcode,
                },
              ]
            : []
        }
      />

    </>
  );
}

export default Warehouse;

