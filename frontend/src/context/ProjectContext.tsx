import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// -----------------------------------
// Types
// -----------------------------------
export type PortfolioProject = {
    _id: string;
    title: string;
    github: string;
    live?: string | null;
    thumbnail: string;
    createdAt?: string;
};

type PortfolioContextType = {
    projects: PortfolioProject[];
    loading: boolean;
    fetchProjects: () => Promise<void>;

    createProject: (formData: FormData) => Promise<{ success: boolean; message: string }>;

    removeProject?: (id: string) => Promise<void>;
    updateProject?: (id: string, formData: FormData) => Promise<void>;
};

// -----------------------------------
// Context
// -----------------------------------
const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// -----------------------------------
// Provider
// -----------------------------------
export const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {
    const [projects, setProjects] = useState<PortfolioProject[]>([]);
    const [loading, setLoading] = useState(false);

    // -----------------------------------
    // Fetch all portfolio projects
    // -----------------------------------
    const fetchProjects = async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:3001/api/portfolios/getallportfolios");

            if (res.data?.success) {
                setProjects(res.data.data);
            }

        } catch (err) {
            console.error("Error fetching portfolio projects:", err);
        } finally {
            setLoading(false);
        }
    };


    // -----------------------------------
    // Create new project (file upload allowed)
    // -----------------------------------
    const createProject = async (formData: FormData) => {
        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:3001/api/portfolios/createproject",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (res.data?.success) {
                await fetchProjects();
                return { success: true, message: "Project uploaded successfully" };
            }
            return { success: false, message: "Upload failed" };

        } catch (error: any) {
            return { success: false, message: error.response?.data?.error || "Something went wrong" };
        } finally {
            setLoading(false);
        }
    };

    const deleteProject = async (id: string) => {
        try {
            setLoading(true);

            const res = await axios.delete(
                `http://localhost:3001/api/portfolios/deleteproject/${id}`
            );

            if (res.data?.success) {
                await fetchProjects();
                return { success: true, message: "Project deleted successfully" };
            }

            return { success: false, message: "Failed to delete project" };

        } catch (error: any) {
            return {
                success: false,
                message: error.response?.data?.error || "Something went wrong",
            };
        } finally {
            setLoading(false);
        }
    };


    // Load projects once on start
    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <PortfolioContext.Provider
            value={{
                projects,
                loading,
                fetchProjects,
                createProject,
                deleteProject
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
};

// -----------------------------------
// Custom Hook
// -----------------------------------
export const usePortfolioContext = () => {
    const ctx = useContext(PortfolioContext);
    if (!ctx) {
        throw new Error("usePortfolioContext must be used within PortfolioProvider");
    }
    return ctx;
};

export default PortfolioContext;
