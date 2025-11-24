import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Types
export type Skill = {
  _id: string;
  name: string;
  level: string;
  category: string;
  createdAt?: string;
};

export type SkillCategory = {
  _id: string;
  category: string;
  skills: Skill[];
};

// Context type
type SkillsContextType = {
  categories: SkillCategory[];
  skills: Skill[];
  loading: boolean;
  fetchCategories: () => Promise<void>;
  fetchSkills: () => Promise<void>;
};

const SkillContext = createContext<SkillsContextType | undefined>(undefined);


// -----------------------------------
// Provider Component
// -----------------------------------
export const SkillProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch Skill Categories WITH Skills
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:3001/api/skillcategories/getcategorieswithskills"
      );

      if (res.data?.success) {
        setCategories(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching skill categories:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all skills (for admin table)
  const fetchSkills = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:3001/api/skills/getallskills"
      );

      if (res.data?.success) {
        setSkills(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories once on mount (for public UI)
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <SkillContext.Provider
      value={{
        categories,
        skills,
        loading,
        fetchCategories,
        fetchSkills,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};


// -----------------------------------
// Custom Hook
// -----------------------------------
export const useSkillContext = () => {
  const context = useContext(SkillContext);
  if (!context) {
    throw new Error("useSkillContext must be used within SkillProvider");
  }
  return context;
};
