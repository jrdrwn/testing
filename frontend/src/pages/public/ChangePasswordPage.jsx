import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Img from "../../assets/public/imgChangePasswordPage.svg";

const ChangePasswordPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const email = sessionStorage.getItem("resetEmail");
    const resetToken = sessionStorage.getItem("resetToken");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        setError("");
        
        try {
            const response = await fetch("https://localhost:5000/api/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    code: resetToken,
                    newPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setShowModal(true);
            } else {
                setError(data.message || "Error occurred while changing password");
            }
        } catch {
            setError("Server error occurred");
        } finally {
            setLoading(false);
        }
    };

    const handleConfirm = () => {
        sessionStorage.removeItem("resetEmail");
        sessionStorage.removeItem("resetToken");
        navigate("/login");
    };

    return (
        <div className="bg-white flex items-center justify-center min-h-screen font-poppins">
            <div className="flex w-full max-w-4xl">
                <div className="w-1/2 flex items-center justify-center">
                    <img alt="Illustration of a person sitting on a chair with a laptop and phone" className="w-3/4" height="400" src={Img} width="400" />
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
                    <Link to="/" className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6">
                        <i className="fas fa-arrow-left mr-2"></i> Back
                    </Link>
                    <h1 className="text-3xl font-bold text-blue-700 mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                        Change Password
                    </h1>
                    <p className="text-gray-600 mb-6">Enter the new password</p>
                    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="new-password">
                                New Password<span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"
                                    id="new-password"
                                    type="password"
                                    placeholder="Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                                <i className="fas fa-lock absolute left-3 top-2.5 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password-confirmation">
                                Password Confirmation<span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-10"
                                    id="password-confirmation"
                                    type="password"
                                    placeholder="Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <i className="fas fa-lock absolute left-3 top-2.5 text-gray-400"></i>
                            </div>
                        </div>
                        <button type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-800 focus:outline-none focus:shadow-outline" disabled={loading}>
                            {loading ? "Changing Password..." : "Change Password"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-lg w-full">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-check-circle text-green-500 text-xl mr-2"></i>
                            <h2 className="text-lg font-semibold text-gray-800">Password Changed Successfully</h2>
                        </div>
                        <p className="text-gray-600 mb-6">Your password has been successfully changed. Please login with your new password.</p>
                        <div className="flex justify-end">
                            <button onClick={handleConfirm} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChangePasswordPage;
