import { useEffect, useState } from "react";
import { useSkillContext } from "../../context/SkillsContext";
import { Pencil, Trash2, Plus } from "lucide-react";

const SkillsCategories = () => {
    const { categories, fetchCategories, createSkillCategorie, deleteSkillCategory, loading } = useSkillContext();

    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) return;

        const result = await createSkillCategorie(name);

        alert(result.message);

        if (result.success) {
            setShowModal(false);
            setName("");
        }
    };

    const handleDeleteCategory = async (id: string) => {
        const confirmDelete = confirm(
            "Are you sure you want to delete this category?"
        );

        if (!confirmDelete) return;

        const result = await deleteSkillCategory(id);
        alert(result.message);

        if (result.success) {
            await fetchCategories();
        }
    };

    if (loading) {
        return <h2 className="text-center text-xl font-semibold text-white">Loading...</h2>;
    }

    return (
        <div className="w-full px-6 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-indigo-400">Skill Categories</h1>

                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                >
                    <Plus size={18} />
                    Add Category
                </button>
            </div>

            {/* Table */}
            <div className="bg-gray-900 border border-gray-700 shadow-xl rounded-xl p-4 overflow-x-auto">
                {categories.length === 0 ? (
                    <p className="text-center text-gray-400 py-6">No categories found.</p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-800 border-b border-gray-700 text-left">
                                <th className="p-3 font-medium text-gray-300">Category Name</th>
                                <th className="p-3 font-medium text-gray-300">Total Skills</th>
                                <th className="p-3 font-medium text-gray-300 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {categories.map((cat) => (
                                <tr
                                    key={cat._id}
                                    className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                                >
                                    <td className="p-3 text-gray-200">{cat.name}</td>

                                    <td className="p-3 text-gray-300">
                                        {cat.skills?.length || 0}
                                    </td>

                                    <td className="p-3">
                                        <div className="flex justify-center gap-4">
                                            <button className="text-blue-400 hover:text-blue-300 transition">
                                                <Pencil size={18} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDeleteCategory(cat._id)
                                                }
                                                className="text-red-400 hover:text-red-300 transition"
                                            >
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

            {/* ---------------- Add Category Modal ---------------- */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-gray-900 p-6 w-full max-w-md rounded-xl shadow-xl border border-gray-700">
                        <h2 className="text-xl font-semibold text-indigo-400 mb-4">
                            Add Skill Category
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Category Name */}
                            <input
                                type="text"
                                placeholder="Category Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg outline-none focus:border-indigo-500"
                            />

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                                >
                                    Create Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillsCategories;
