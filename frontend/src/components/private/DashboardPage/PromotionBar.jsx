import React from 'react'

const PromotionBar = () => {
  return (
    <div className="bg-blue-100 flex justify-center items-center p-3">
            <div className="flex items-center space-x-2">
              <p className="text-gray-700">
                Don't miss out on amazing deals! Get your plan now to receive a <span className="font-bold">10% OFF</span> code.
              </p>
              <div className="bg-blue-700 text-white px-2 py-1 rounded">
                PINTURA
              </div>
            </div>
          </div>
  )
}

export default PromotionBar
