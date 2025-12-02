import { useState, useEffect } from "react";
import { Pencil, Trash2, Plus, ExternalLink, LayoutDashboard, Image } from "lucide-react";
import { usePortfolioContext } from "../../context/ProjectContext";

export type SkillCategory = {
    _id: string;
    name: string;
};

export type Project = {
    _id: string;
    title: string;
    github: string;
    live?: string | null;
    category?: SkillCategory | null;
    createdAt?: string;
    thumbnail?: string;
};

const AdminPortfolio = () => {
    const { fetchProjects, projects, createProject, loading, deleteProject } = usePortfolioContext();
    const [showModal, setShowModal] = useState(false);

    // Form states (UI only)
    const [title, setTitle] = useState("");
    const [github, setGithub] = useState("");
    const [live, setLive] = useState("");
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("github", github);
        formData.append("live", live);

        if (file) {
            formData.append("thumbnail", file); // MUST MATCH multer.single("image")
        }

        const result = await createProject(formData);
        alert(result.message);

        if (result.success) {
            setShowModal(false);
            setTitle("");
            setGithub("");
            setLive("");
            setFile(null);
        }
    };



    if (loading) {
        return <h2 className="text-center text-xl font-semibold text-gray-400">Loading...</h2>;
    }

    return (
        <div className="w-full min-h-screen bg-gray-950 text-gray-100 p-6">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-indigo-600/20 rounded-xl flex items-center justify-center border border-indigo-500/30 text-indigo-400">
                        <LayoutDashboard size={20} />
                    </div>
                    <h1 className="text-3xl font-bold text-indigo-400 tracking-tight">
                        Portfolio Dashboard
                    </h1>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-2xl shadow-xl transition font-semibold"
                >
                    <Plus size={18} /> Add Project
                </button>
            </div>


            {/* TABLE */}
            <div className="w-full overflow-x-auto bg-gray-900/20 border border-gray-800 rounded-2xl shadow-xl p-5">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-gray-900 border-b border-gray-800 uppercase tracking-wider text-gray-400">
                            <th className="p-4">Thumbnail</th>
                            <th className="p-4">Title</th>
                            <th className="p-4">GitHub</th>
                            <th className="p-4">Live</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-8 text-gray-600 font-medium">
                                    No projects found.
                                </td>
                            </tr>
                        ) : (
                            projects.map((project) => (
                                <tr key={project._id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-all">

                                    <td className="p-4">
                                        <div className="flex justify-center">
                                            <div className="w-14 h-14 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                                                {project.thumbnail ? (
                                                    <img
                                                        src={project.thumbnail}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <Image size={20} className="text-gray-700" />
                                                )}
                                            </div>
                                        </div>
                                    </td>

                                    <td className="p-4 text-center text-white font-medium">{project.title}</td>

                                    <td className="p-4 text-center text-indigo-400 truncate max-w-[180px] hover:underline cursor-pointer">
                                        <a href={project.github} target="_blank">Github</a>
                                    </td>

                                    <td className="p-4 text-center text-blue-400 truncate max-w-[180px] hover:underline cursor-pointer">
                                        {project.live ? (
                                            <span className="inline-flex items-center gap-1 truncate max-w-[150px]">
                                                <a href={project.live} target="_blank">Live</a>
                                            </span>
                                        ) : (
                                            <span className="text-gray-600">—</span>
                                        )}
                                    </td>

                                    <td className="p-4">
                                        <div className="flex justify-center gap-4">
                                            <button className="text-blue-400 hover:text-blue-300"><Pencil size={18} /></button>
                                            <button className="text-red-400 hover:text-red-300" onClick={async () => {
                                                if (confirm("Are you sure you want to Delete the project?")) {
                                                    const result = await deleteProject(project._id);
                                                    alert(result.message)
                                                }
                                            }}><Trash2 size={18} /></button>
                                        </div>
                                    </td>

                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>


            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm px-6">
                    <div className="w-full max-w-md bg-gray-900 p-6 rounded-3xl border border-gray-800 shadow-2xl">

                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-2xl font-bold text-indigo-400">Add New Project</h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-white transition text-xl">✖</button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div className="flex flex-col items-center">
                                <label className="w-full h-40 border-2 border-dashed border-gray-700 hover:border-indigo-500 rounded-2xl flex items-center justify-center cursor-pointer transition-all bg-gray-900/40">
                                    <Image size={30} className="text-gray-600" />
                                    <input
                                        type="file"
                                        name="image"
                                        className="hidden"
                                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    />
                                </label>
                                <p className="text-xs text-gray-400 mt-2">1:1 image recommended</p>
                            </div>

                            <input
                                type="text"
                                placeholder="Project Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl outline-none focus:border-indigo-500 transition"
                            />

                            <input
                                type="url"
                                placeholder="GitHub URL"
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
                                className="w-full p-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl outline-none focus:border-indigo-500 transition"
                            />

                            <input
                                type="url"
                                placeholder="Live URL (optional)"
                                value={live}
                                onChange={(e) => setLive(e.target.value)}
                                className="w-full p-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl outline-none focus:border-indigo-500 transition"
                            />

                            <div className="flex justify-end gap-4 pt-5 border-t border-gray-800 mt-6">
                                <button onClick={() => setShowModal(false)} className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition font-medium">Cancel</button>

                                {/* ✅ This submit will trigger handleSubmit automatically */}
                                <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white transition font-semibold shadow-md">
                                    Save Project
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminPortfolio;
