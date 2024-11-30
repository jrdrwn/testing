import React from 'react'

const TrustedSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                    <h2 className="text-blue-700 font-bold text-lg mb-8">Trusted by leading educational institutions and companies</h2>
                    <div className="flex justify-center items-center space-x-8 mb-8">
                        <img src="https://placehold.co/100x100?text=Logo1" alt="Logo of an educational institution" className="h-16"/>
                        <img src="https://placehold.co/100x100?text=Logo2" alt="Logo of an educational institution" className="h-16"/>
                        <img src="https://placehold.co/100x100?text=Microsoft" alt="Microsoft logo" className="h-16"/>
                        <img src="https://placehold.co/100x100?text=Telkom+Indonesia" alt="Telkom Indonesia logo" className="h-16"/>
                        <img src="https://placehold.co/100x100?text=Google" alt="Google logo" className="h-16"/>
                        <img src="https://placehold.co/100x100?text=Unilever" alt="Unilever logo" className="h-16"/>
                    </div>
                    <div className="flex space-x-2">
                        <span className="h-2 w-2 bg-blue-700 rounded-full"></span>
                        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                    </div>
                </div>
  )
}

export default TrustedSection
