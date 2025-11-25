import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// =========================
// TYPES
// =========================
export type User = {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
};

type UserContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
    logout: () => void;
    loading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

// =========================
// PROVIDER
// =========================
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // ========== LOGIN FUNCTION ==========
    const login = async (email: string, password: string) => {
        try {
            setLoading(true);

            const res = await axios.post("http://localhost:3001/api/users/loginuser", {
                email,
                password,
            });

            if (res.data.success) {
                const token = res.data.token;
                localStorage.setItem("adminToken", token);

                // save user
                setUser(res.data.user);

                return { success: true, message: "Login successful" };
            }

            return { success: false, message: "Invalid email or password" };
        } catch (error: any) {
            return { success: false, message: error.response?.data?.error || "Something went wrong" };
        } finally {
            setLoading(false);
        }
    };

    // ========== LOGOUT FUNCTION ==========
    const logout = () => {
        localStorage.removeItem("adminToken");
        setUser(null);
    };

    // ========== LOAD USER FROM TOKEN ON REFRESH ==========
    const loadUserFromToken = async () => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const res = await axios.get("http://localhost:3001/api/users/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.data.success) {
                setUser(res.data.user);
            }
        } catch (err: any) {
            const msg = err.response?.data?.error;

            // Only delete token if it's truly invalid
            if (msg === "Invalid token" || msg === "Token missing" || msg === "Token expired") {
                localStorage.removeItem("adminToken");
            }
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        loadUserFromToken();
    }, []);

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// =========================
// CUSTOM HOOK
// =========================
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used inside UserProvider");
    }
    return context;
};
