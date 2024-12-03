import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgForgotformPage.svg';

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if email is empty
        if (!email) {
            setError("Please enter your email first");
            return;
        }
        
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://localhost:5000/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                sessionStorage.setItem('resetEmail', email);
                navigate('/VerificationResetPassPage');
            } else {
                setError(data.message || 'An error occurred');
            }
        } catch (error) {
            setError('A server error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <body className="bg-white flex items-center justify-center min-h-screen font-poppins">
            <div className="flex w-full max-w-4xl">
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        alt="A confused woman looking at a laptop with question marks above her head"
                        className="w-3/4"
                        height="400"
                        src={Img}
                        width="400"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-center p-8">
                    <Link to="/"
                        className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6">
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back
                    </Link>
                    <h1 className="text-4xl font-bold text-blue-700 mb-2">Forgot Password</h1>
                    <p className="text-gray-600 mb-6">
                        Enter your email to receive an OTP code.
                    </p>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            <div className="flex">
                                <i className="fas fa-exclamation-circle mt-1 mr-2"></i>
                                <span>{error}</span>
                            </div>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-envelope text-gray-400"></i>
                                </div>
                                <input
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
};

export default ForgotPasswordPage;
