import React from 'react'

function LogoutModal({onConfirm,onCancel}) {
    const user=JSON.parse(localStorage.getItem("user")) ||{
        name:"Kenan Rehimov",
        role:"Administrator"
    };
  return (
    <>
      <div className='fixed inset-0 z-50 bg-black/40 flex items-center justify-center'>
        <div className='w-[660px] bg-white rounded-[20px] px-8 py-8 shadow-xl'>

            {/* Başlıq */}
        <h2 className="text-[32px] font-medium text-center text-[#222] mb-12">
          Sistemdən çıxış edilsin?
        </h2>

        {/* Şəxs */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-5 mb-5">

          <div className="flex items-center gap-4">

            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-[28px]">♙</span>
            </div>

            <span className="text-[20px] text-gray-400">
              Şəxs
            </span>

          </div>

          <span className="text-[20px] text-[#222]">
            {user.name}
          </span>
          </div>

          {/* Rol */}
          <div className='flex items-center justify-between border-b border-gray-200 pb-5 mb-10'>
            <div className='flex items-center gap-4'>
                <div className='w-8 h-8 flex items-center justify-center'>
                    <span className='text-[28px]'>♙</span>
                </div>

                <span className='text-[20px] text-gray-400'>
                    Rol
                </span>
            </div>

            <span className='text-[20px] text-[#222]'>
                {user.role}
            </span>
          </div>

          {/* Buttons */}
          <div className='flex gap-6'>

            <button
                onClick={onConfirm}
                className='flex-1 h-[70px] rounded-[18px] bg-[#e54800] text-white text-[20px] hover:bg-[#d44100]'
            >
                Bəli
            </button>

            <button
                onClick={onCancel}
                className='flex-1 h-[70px] rounded-[18px] border-2 border-[#f75b00] text-[#f75b00] text-[20px] hover:bg-[#fff3ec]'
            >
                Xeyr
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogoutModal
