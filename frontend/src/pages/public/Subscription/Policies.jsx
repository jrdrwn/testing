import React from 'react'

const Policies = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg">
                    <div className="p-4 border-b">
                        <h1 className="text-lg font-semibold">Pintura Policies</h1>
                    </div>
                    <div className="flex border-b">
                        <button className="flex-1 p-4 text-center border-b-2 border-black font-semibold">Legal</button>
                        <button className="flex-1 p-4 text-center">Refunds</button>
                        <button className="flex-1 p-4 text-center">Contact</button>
                    </div>
                    <div className="p-4">
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <i className="fas fa-file-alt text-xl mr-2"></i>
                                <h2 className="font-semibold">Pintura legal policies</h2>
                            </div>
                            <p>
                                View Pintura <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-credit-card text-xl mr-2"></i>
                                <h2 className="font-semibold">Payment terms</h2>
                            </div>
                            <p>
                                All payments are securely processed by Stripe. View Stripe's <a href="#" className="text-blue-500">terms of service</a> and <a href="#" className="text-blue-500">privacy policies</a>.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 border-t text-sm text-gray-500">
                        Your rights under our refund/exchange policy are in addition to any rights you may have under applicable consumer laws.
                    </div>
                </div>
  )
}

export default Policies
