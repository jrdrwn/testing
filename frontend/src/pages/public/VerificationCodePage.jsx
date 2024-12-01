import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgVerificationCode2.svg';

const VerificationCodePage = () => {
    const navigate = useNavigate();
    const [codeSent, setCodeSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/AktivationPage');
    };

    const handleSendNewCode = () => {
        setCodeSent(true);
        // Tambahkan logika pengiriman kode baru di sini jika diperlukan.
    };

    return (
        <body className="bg-white flex items-center justify-center min-h-screen font-poppins">
            <div className="flex w-full max-w-4xl">
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        alt="Illustration of a person sitting on a chair with a laptop and phone"
                        className="w-3/4"
                        height="400"
                        src={Img}
                        width="400"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-center p-8">
                    <Link to="/" className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6">
                        <i className="fas fa-arrow-left mr-2"></i> Back
                    </Link>
                    <h1 className="text-4xl font-bold text-blue-700 mb-2">Verification</h1>
                    <p className="text-gray-600 mb-6">
                        Please check your email, we have sent a code to test@test12309u.com. Enter it below.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Notifikasi muncul di sini jika "Send a new code" diklik */}
                        {codeSent && (
                            <div className="border border-blue-500 rounded-lg p-4 flex items-start space-x-2 mb-4">
                                <i className="fas fa-info-circle text-blue-500 mt-1"></i>
                                <div>
                                    <p className="text-blue-500 font-semibold">Send a new code</p>
                                    <p className="text-gray-600">We have sent you the latest activation code, please check your email again.</p>
                                </div>
                            </div>
                        )}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-center mb-4">
                                <input type="text" maxLength="1" className="w-12 h-12 border border-gray-300 text-center text-2xl mx-1" />
                                <input type="text" maxLength="1" className="w-12 h-12 border border-gray-300 text-center text-2xl mx-1" />
                                <input type="text" maxLength="1" className="w-12 h-12 border border-gray-300 text-center text-2xl mx-1" />
                                <input type="text" maxLength="1" className="w-12 h-12 border border-gray-300 text-center text-2xl mx-1" />
                                <input type="text" maxLength="1" className="w-12 h-12 border border-gray-300 text-center text-2xl mx-1" />
                                <input type="text" maxLength="1" className="w-12 h-12 border border-gray-300 text-center text-2xl mx-1" />
                            </div>
                            <p className="text-gray-600 text-center mb-4">
                                Please enter the one-time password that we sent to your email.
                            </p>
                            <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800">
                                Continue
                            </button>
                            <p className="text-center text-gray-600 mt-4">
                                Didn't get a code? <button type="button" onClick={handleSendNewCode} className="text-blue-600">Send a new code</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
};

export default VerificationCodePage;
