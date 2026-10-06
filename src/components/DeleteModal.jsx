import React from 'react'

function DeleteModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    data,
    icon,
}) {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
        <div className='w-[430px] bg-white rounded-xl shadow-xl p-6'>
            
            {/* Header */}
            
            <div className='mb-5'>
                <div className='flex items-center gap-2'>
                    {icon && (
                        <img
                            src={icon}
                            alt=''
                            className='w-5 h-5 object-contain'
                        />
                    )}

                    <h2 className='text-lg font-medium text-[#171717]'>
                        {title}
                    </h2>
                </div>

                <p className='text-sm text-gray-400 mt-1'>
                    Bu əməliyyatı geri qaytarmaq mümkün deyil.
                </p>
            </div>

            {/* Data */}
            <div className='border border-gray-200 rounded-lg overflow-hidden mb-6'>
                {data.map((item,index)=>(
                    <div
                        key={index}
                        className='flex items-center justify-between px-4 py-3 border-b border-gray-200 last:border-b-0'
                    >
                        
                        <div className='flex items-center gap-2'>
                            {item.icon &&(
                                <img
                                    src={item.icon}
                                    alt=''
                                    className='w-5 h-5 object-contain'
                                />
                                    
                            )}
                            <span className='text-sm text-gray-500'>
                            {item.label}
                        </span>
                        </div>

                        <span className='text-sm font-medium text-gray-800'>
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className='flex items-center justify-center gap-3'>
                <button
                    onClick={onClose}
                    className='h-[38px] w-[100px] px-5 bg-white text-gray-700 rounded-lg text-sm border border-[#EA580C] hover:bg-gray-200 transition'
                >
                    Xeyr
                </button>

                <button
                    onClick={onConfirm}
                    className='h-[38px] w-[100px] px-5 bg-[#EA580C] text-white rounded-lg text-sm hover:bg-orange-700 transition'
                >
                    Bəli
                </button>
            </div>


        </div>
      
    </div>
  )
}

export default DeleteModal
