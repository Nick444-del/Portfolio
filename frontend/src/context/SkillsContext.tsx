import { createContext, useContext, useState, useEffect, type Key } from "react";
import axios from "axios";

// Types
export type Skill = {
  _id: string;
  name: string;
  level: string;
  category: SkillCategory;
  createdAt?: string;
};

export type SkillCategory = {
  category: Key | null | undefined;
  _id: string;
  name: string;
  skills: Skill[];
};

// Context type
type SkillsContextType = {
  categories: SkillCategory[];
  skills: Skill[];
  loading: boolean;
  fetchCategories: () => Promise<void>;
  fetchSkills: () => Promise<void>;
  createSkillCategorie: (name: string) => Promise<{ success: boolean; message: string }>;
  createSkill: (
    name: string,
    level: string,
    categoryId: string
  ) => Promise<{ success: boolean; message: string }>;
};

const SkillContext = createContext<SkillsContextType | undefined>(undefined);


// -----------------------------------
// Provider Component
// -----------------------------------
export const SkillProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(false);

  const createSkillCategorie = async (name: string) => {
    try {
      setLoading(true);

      const res = await axios.post(
        "https://portfolio-1-udd9.onrender.com/api/skillcategories/createskillcategory", { name }
      )

      if (res.data?.success) {
        await fetchCategories();

        return { success: true, message: "Skill category created successfully" };
      }

      return { success: false, message: "Cannot create Categories" };
    } catch (error) {
      return { success: false, message: "Something went wrong" };
    } finally {
      setLoading(false);
    }
  }

  const createSkill = async (name: string, level: string, categoryId: string) => {
    try {
      setLoading(true);

      const res = await axios.post(
        "https://portfolio-1-udd9.onrender.com/api/skills/createskill",
        {
          name,
          level,
          category: categoryId,
        }
      );

      if (res.data.success) {
        // Refresh both
        await fetchSkills();
        await fetchCategories();

        return { success: true, message: "Skill created successfully" };
      }

      return { success: false, message: "Cannot create skill" };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.error || "Error creating skill" };
    } finally {
      setLoading(false);
    }
  };

  // Fetch Skill Categories WITH Skills
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://portfolio-1-udd9.onrender.com/api/skillcategories/getcategorieswithskills"
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
        "https://portfolio-1-udd9.onrender.com/api/skills/getallskills"
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
        createSkillCategorie,
        createSkill,
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
