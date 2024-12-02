import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgVerificationCode2.svg';

const VerificationCodePage = () => {
    const navigate = useNavigate();
    const [codeSent, setCodeSent] = useState(false);
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationType, setNotificationType] = useState('');

    useEffect(() => {
        const savedEmail = localStorage.getItem('verificationEmail');
        if (savedEmail) {
            setEmail(savedEmail);
            console.log('Email from localStorage:', savedEmail);
        } else {
            console.log('No email found in localStorage');
            navigate('/register');
        }
    }, [navigate]);

    const showAlert = (message, type) => {
        setNotificationMessage(message);
        setNotificationType(type);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const verificationCode = code.join('');
        console.log('Submitting code for email:', email);
        
        try {
            const response = await fetch('https://localhost:5000/api/auth/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    code: verificationCode
                }),
            });

            const data = await response.json();
            console.log('Verification response:', data);

            if (response.ok) {
                showAlert('Verification successful!', 'success');
                localStorage.removeItem('verificationEmail');
                setTimeout(() => {
                    navigate('/AktivationPage');
                }, 1500);
            } else {
                showAlert(data.message || 'Invalid verification code', 'error');
                setCode(['', '', '', '', '', '']);
            }
        } catch (error) {
            console.error('Verification error:', error);
            showAlert('An error occurred during verification', 'error');
        }
    };

    const handleSendNewCode = async () => {
        try {
            const response = await fetch('https://localhost:5000/api/auth/send-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });

            if (response.ok) {
                showAlert('New verification code has been sent', 'success');
                setCodeSent(true);
            } else {
                showAlert('Failed to send new code', 'error');
            }
        } catch (error) {
            showAlert('Failed to send new code', 'error');
        }
    };

    const handleInput = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            const nextInput = document.querySelector(`input[name=code-${index + 1}]`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const prevInput = document.querySelector(`input[name=code-${index - 1}]`);
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    return (
        <body className="bg-white flex items-center justify-center min-h-screen font-poppins">
            {showNotification && (
                <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
                    notificationType === 'success' ? 'bg-green-500' : 'bg-red-500'
                } text-white transition-opacity duration-500`}>
                    {notificationMessage}
                </div>
            )}
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
                        Please check your email, we have sent a code to {email}. Enter it below.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        name={`code-${index}`}
                                        maxLength="1"
                                        className="w-12 h-12 border border-gray-300 text-center text-2xl mx-1"
                                        value={code[index]}
                                        onChange={(e) => handleInput(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                    />
                                ))}
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
