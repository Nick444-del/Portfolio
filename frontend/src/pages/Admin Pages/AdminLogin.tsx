import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import adminImg from "../../assets/me.png";

const AdminLogin = () => {
    const navigate = useNavigate();
    const { login, loading } = useUser();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        setErrorMsg("");

        const res = await login(email, password);

        if (!res.success) {
            setErrorMsg(res.message);
            return;
        }

        // Redirect after successful login
        navigate("/portfolio/admin");
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-12">

            {/* Container */}
            <div className="relative max-w-md w-full bg-gray-800 rounded-3xl shadow-xl p-10 text-center border border-gray-700">

                {/* Greeting */}
                <h5 className="text-gray-300 text-lg mb-2">Welcome Back</h5>
                <h1 className="text-3xl font-bold text-white mb-6">Nikhil</h1>

                {/* Image */}
                <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                    <img src={adminImg} alt="admin" className="w-full h-full object-cover" />
                </div>

                {/* Error Message */}
                {errorMsg && (
                    <div className="bg-red-600/20 text-red-400 p-2 rounded-lg mb-4 text-sm">
                        {errorMsg}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">

                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg outline-none border border-gray-600 focus:border-blue-500 transition"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg outline-none border border-gray-600 focus:border-blue-500 transition"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-lg transition font-semibold text-white
              ${loading ? "bg-blue-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="mt-6 text-gray-500 text-sm">
                    © {new Date().getFullYear()} Nikhil Gorule — Admin Panel
                </p>
            </div>

        </div>
    );
};

export default AdminLogin;
