import { useEffect } from "react";
import { useSkillContext } from "../../context/SkillsContext";
import { Pencil, Trash2, Plus } from "lucide-react";

const Skills = () => {
    const { skills, loading, fetchSkills } = useSkillContext();

    useEffect(() => {
        fetchSkills();
    }, []);

    if (loading) {
        return (
            <section>
                <h2 className="text-center text-xl font-semibold text-white">Loading...</h2>
            </section>
        );
    }

    return (
        <div className="w-full px-6 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-indigo-400">Skills</h1>

                <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
                    <Plus size={18} />
                    Add Skill
                </button>
            </div>

            {/* Table */}
            <div className="bg-gray-900 border border-gray-700 shadow-xl rounded-xl p-4 overflow-x-auto">
                {skills.length === 0 ? (
                    <p className="text-center text-gray-400 py-6">No skills found.</p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-800 border-b border-gray-700 text-left">
                                <th className="p-3 font-medium text-gray-300">Skill Name</th>
                                <th className="p-3 font-medium text-gray-300">Level</th>
                                <th className="p-3 font-medium text-gray-300">Category</th>
                                <th className="p-3 font-medium text-gray-300">Created</th>
                                <th className="p-3 font-medium text-gray-300 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {skills.map((skill) => (
                                <tr
                                    key={skill._id}
                                    className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                                >
                                    <td className="p-3 text-gray-200">{skill.name}</td>

                                    <td className="p-3 capitalize text-gray-300">{skill.level}</td>

                                    <td className="p-3 text-gray-300">
                                        {skill.category?.name || "Unknown"}
                                    </td>

                                    <td className="p-3 text-gray-500 text-sm">
                                        <td className="p-3 text-gray-500 text-sm">
                                            {skill.createdAt ? new Date(skill.createdAt).toLocaleDateString() : "—"}
                                        </td>
                                    </td>

                                    <td className="p-3">
                                        <div className="flex justify-center gap-4">
                                            <button className="text-blue-400 hover:text-blue-300 transition">
                                                <Pencil size={18} />
                                            </button>

                                            <button className="text-red-400 hover:text-red-300 transition">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Skills;
