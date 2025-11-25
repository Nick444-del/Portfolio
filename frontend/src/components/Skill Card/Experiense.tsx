import { BsFillPatchCheckFill } from "react-icons/bs";
import { useSkillContext } from "../../context/SkillsContext";

const Experience = () => {
    const { categories, loading } = useSkillContext();

    if (loading) {
        return (
            <section id="experience">
                <h2 className="text-center text-xl font-semibold">Loading...</h2>
            </section>
        );
    }

    return (
        <section id="experience" className="py-10">
            <h5 className="text-center text-gray-400">What Skill's I have</h5>
            <h2 className="text-center text-3xl font-bold mb-10">My Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4">
                {categories.map((cat) => (
                    <div
                        key={cat._id}
                        className="bg-white/5 backdrop-blur-lg border border-transparent hover:border-purple-500 
                        p-8 rounded-2xl transition shadow-lg"
                    >
                        {/* Category name */}
                        <h3 className="text-center text-purple-400 text-xl font-semibold mb-6">
                            {cat.name}
                        </h3>

                        {/* Skills */}
                        <div className="grid grid-cols-2 gap-6">
                            {cat.skills.map((skill) => (
                                <article key={skill._id} className="flex gap-3 items-start">
                                    <BsFillPatchCheckFill className="text-purple-400 text-xl mt-1" />
                                    <div>
                                        <h4 className="text-white font-medium text-lg">
                                            {skill.name}
                                        </h4>
                                        <small className="text-gray-400">
                                            {skill.level}
                                        </small>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
