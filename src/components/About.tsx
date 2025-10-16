const About = () => {
    return (
        <section
            id="about"
            className="my-20 py-16 px-8 text-center rounded-3xl shadow-[0_0_40px_#00ffff33]
                       bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1a1a1a] 
                       border border-[#1e90ff33]"
        >
            <h2 className="text-4xl font-bold mb-10 tracking-wide text-[#00ffff] drop-shadow-[0_0_10px_#00ffffaa]">
                About Me
            </h2>

            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-[#e0e0e0]">
                <p>
                    I’m an{" "}
                    <span className="text-[#1e90ff] font-semibold">AI Engineer</span>{" "}
                    specializing in building{" "}
                    <span className="text-[#00ffff] font-semibold">agentic AI systems</span> — architectures where large
                    language models reason, plan, and autonomously execute multi-step tasks.
                    My work focuses on making machines not just reactive, but truly collaborative.
                </p>

                <p>
                    I design and implement scalable AI frameworks using{" "}
                    <span className="text-[#7b4ae2] font-semibold">
                        Python, FastAPI, LangChain, LangGraph, and RAG pipelines
                    </span>{" "}
                    — connecting reasoning, memory, and perception layers through{" "}
                    <span className="text-[#00ffffcc] font-semibold">
                        vector databases and contextual retrieval
                    </span>.
                </p>

                <p>
                    Beyond backend intelligence, I integrate{" "}
                    <span className="text-[#7b4ae2] font-semibold">React, Tailwind, and SQL</span>{" "}
                    to craft full-stack AI applications — bridging conversational systems,
                    real-time data pipelines, and intelligent automation workflows.
                </p>

                <p>
                    My goal is to push the boundaries of autonomy: creating agents that{" "}
                    <span className="text-[#00ffff] font-semibold">adapt, self-improve, and collaborate</span>{" "}
                    with humans across domains like healthcare, research, and operations.
                </p>

                <p className="italic text-[#b0b0b0]">
                    I believe the future of AI isn’t passive — it’s proactive.
                    Agents that reason, remember, and act will redefine how we build, work, and think.
                </p>
            </div>
        </section>
    );
};

export default About;
