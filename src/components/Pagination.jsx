import React, { useEffect, useState } from "react";

function Pagination({
    currentPage=1,
    totalItems=0,
    itemsPerPage=10,
    onPageChange,
}) {
    const totalPages=Math.max(
        1,
        Math.ceil(totalItems/itemsPerPage)
    );

    const[pageInput, setPageInput]=useState(currentPage);

    // Səhifə dəyişəndə input da dəyişsin
    useEffect(()=>{
        setPageInput(currentPage);
    },[currentPage]);


     // Səhifəni dəyiş
     const changePage=(page)=>{
        if(page<1 || page>totalPages || page===currentPage){
            return;
        }

        onPageChange(page);
     };


     // Inputdan səhifəyə keç
     const handlePageInput=(e)=>{
        if(e.key !="Enter"){
            return;
        }
        let page = Number(e.target.value);

        if(!page || page<1){
            page=1;
        }

        if(page > totalPages){
           page=totalPages; 
        }

        setPageInput(page);
        onPageChange(page);
     };

     // Göstəriləcək səhifə nömrələri
  const getPages = () => {
    if (totalPages <= 7) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = getPages();
  return (
    <div className="h-[70px] flex items-center justify-between px-5">

      {/* Səhifə daxil et */}
      <div className="flex items-center gap-2 text-sm">

        <span className="text-gray-600">
          Səhifə daxil et
        </span>

        <input
          type="number"
          min="1"
          max={totalPages}
          value={pageInput}
          onChange={(e) => setPageInput(e.target.value)}
          onKeyDown={handlePageInput}
          className="w-12 h-8 border border-gray-400 rounded-md text-center outline-none focus:border-orange-500"
        />

      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2">

        {/* Previous */}
        <button
          type="button"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 border rounded-md flex items-center justify-center ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:border-orange-500 hover:text-orange-500"
          }`}
        >
          ‹
        </button>

        {/* Page numbers */}
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`dots-${index}`}
                className="w-8 text-center text-gray-500"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              type="button"
              onClick={() => changePage(page)}
              className={`w-8 h-8 border rounded-md text-sm ${
                currentPage === page
                  ? "border-orange-500 text-orange-500 bg-white"
                  : "text-gray-600 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          type="button"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 border rounded-md flex items-center justify-center ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:border-orange-500 hover:text-orange-500"
          }`}
        >
          ›
        </button>

      </div>
    </div>
  )
}

export default Pagination
