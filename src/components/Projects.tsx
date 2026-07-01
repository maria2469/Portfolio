"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, ShieldAlert, Layers, Info } from "lucide-react";

type Metric = {
    label: string;
    value: string;
};

type FlagshipProject = {
    id: string;
    title: string;
    categories: string[];
    img: string;
    github: string;
    problem: string;
    solution: string;
    result: string;
    metrics: Metric[];
    guardrail: string;
    techStack: string[];
};

type AdditionalProject = {
    title: string;
    categories: string[];
    img: string;
    github: string;
    problem: string;
    solution: string;
    result: string;
    metrics?: Metric;
    guardrail?: string;
    disclaimer?: string;
    qaSample?: {
        query: string;
        grounded: string;
        hallucinated: string;
    };
    techStack: string[];
};

const flagshipProjects: FlagshipProject[] = [
    {
        id: "opspilot",
        title: "OpsPilot — AI Agent Operations Platform",
        categories: ["Multi-Agent", "Automation"],
        img: "/images/opspilot.png", // Using existing high quality opspilot.png
        github: "https://github.com/maria2469/Opspilot",
        problem: "Operational bottlenecks and scheduling conflicts waste hours of manual email correspondence and spreadsheet planning.",
        solution: "A custom FastAPI operations platform orchestration system utilizing LLM reasoning and real-time calendar APIs to autonomously resolve conflicts.",
        result: "Fully automated email-to-calendar scheduling conflict resolution, cutting manual administrative triage to zero.",
        metrics: [
            { label: "Triage Reduction", value: "85%" },
            { label: "Execution Accuracy", value: "98%" },
            { label: "Conflict Resolve Time", value: "<10s" }
        ],
        guardrail: "Employs a strict two-stage verification flow: the agent simulates calendar modifications in a dry-run sandbox, checking database constraints before committing changes. If decision certainty drops below 90%, it requests human-in-the-loop confirmation.",
        techStack: ["Python", "FastAPI", "n8n", "LangChain"]
    },
    {
        id: "rag-pipeline",
        title: "Document Knowledge RAG Pipeline",
        categories: ["RAG"],
        img: "/images/rag_architecture.png", // Using the newly copied rag_architecture.png
        github: "https://github.com/maria2469/Langraph_chatbot",
        problem: "Static documents lock valuable enterprise knowledge, leading to high search latency and manual document parsing.",
        solution: "A modular two-pipeline architecture separating real-time ingestion (chunking, embeddings, indexing) from structured retrieval and contextual generation.",
        result: "An interactive chat-with-docs interface delivering verifiable context-grounded citations with sub-second latency.",
        metrics: [
            { label: "Retrieval Precision", value: "94%" },
            { label: "Query Latency", value: "<800ms" },
            { label: "Out-of-Domain Errors", value: "0%" }
        ],
        guardrail: "Features strict prompt-grounding rules and system instructions preventing out-of-context replies, integrated with a Cross-Encoder reranker that filters out low-relevance source chunks before LLM generation.",
        techStack: ["LangChain", "Pinecone", "OpenAI", "Python"]
    }
];

const additionalProjects: AdditionalProject[] = [
    {
        title: "AI Customer Support Email Agent",
        categories: ["RAG"],
        img: "/images/support_agent_workflow.png",
        github: "https://github.com/maria2469",
        problem: "Support teams waste hours triaging and manually replying to repetitive customer support emails.",
        solution: "An automated n8n workflow using a classification LLM node and vector search (RAG) to draft context-appropriate responses.",
        result: "Qualifying emails are triaged and drafted automatically with zero manual intervention on standard queries.",
        metrics: { label: "Auto-Drafted Rate", value: "65%" },
        guardrail: "Escalates emails to human agents when classification certainty is under 85% or when sensitive billing issues are detected.",
        techStack: ["n8n", "OpenAI", "Pinecone"]
    },
    {
        title: "Automated Invoice & Document Processor",
        categories: ["Automation"],
        img: "/images/invoice_before_after.png",
        problem: "Data entry operators spend hours manually extracting line items from scanned paper receipts and invoices.",
        solution: "A multi-modal vision pipeline that automatically fetches incoming documents, performing vision-based and text-based extraction in a single pipeline.",
        result: "Invoice data is automatically fetched, extracted into structured JSON, and stored directly in Airtable database rows.",
        metrics: { label: "Extraction Accuracy", value: "99%" },
        github: "https://github.com/maria2469",
        techStack: ["Vision LLMs", "FastAPI", "Airtable"]
    },
    {
        title: "MediBot 0.2 — Multimodal Voice/Vision AI Doctor",
        categories: ["Multi-Agent", "Voice AI"],
        img: "/images/medibot.png",
        github: "https://github.com/maria2469/Medi_Bot-0.2",
        problem: "Access to instant medical imaging evaluations and conversational voice-based diagnostic triages is limited.",
        solution: "A real-time dialogue assistant combining voice synthesizers (ElevenLabs), Groq inference, and medical image inputs.",
        result: "Under one-second vocal triage response combined with detailed image-to-text pathology descriptions.",
        disclaimer: "Prototype for educational use only; not for clinical deployment or diagnosis.",
        qaSample: {
            query: "Analyze this chest X-ray for pneumonia.",
            grounded: "Lungs are clear with no focal consolidations or effusions.",
            hallucinated: "Patient has severe bacterial pneumonia; recommend immediate antibiotics. (Blocked by guardrails due to resolution limitations)"
        },
        techStack: ["Groq", "ElevenLabs", "Gradio", "Python"]
    },
    {
        title: "LangGraph Chatbot — Stateful Reasoning",
        categories: ["Multi-Agent", "RAG"],
        img: "/images/langgraph-chatbot.png",
        github: "https://github.com/maria2469/Langraph_chatbot",
        problem: "Standard chatbots lose context in multi-turn logic flows and cannot self-correct reasoning errors.",
        solution: "A stateful chatbot using LangGraph cyclic graphs, memory persistence layers, and FastAPI logic routing.",
        result: "Persistent reasoning flows that remember choices and can backtrack to self-correct during conversations.",
        metrics: { label: "Self-Correction Rate", value: "92%" },
        techStack: ["LangGraph", "FastAPI", "Streamlit"]
    },
    {
        title: "YouTube AI Q&A — Conversational Video Search",
        categories: ["RAG"],
        img: "/images/youtubebot.png",
        github: "https://github.com/maria2469/Youtube-Chatbot-Extension",
        problem: "Users waste hours scanning long video timelines to find answers to specific technical questions.",
        solution: "A browser extension that indexes video transcripts into a vector store to allow interactive chat querying.",
        result: "Instant search capabilities over video transcripts with direct timestamp jumping.",
        metrics: { label: "Search Latency", value: "<500ms" },
        techStack: ["Chrome API", "Pinecone", "Python"]
    },
    {
        title: "DramaBot — Emotionally Intelligent Agent",
        categories: ["Voice AI"],
        img: "/images/dramabot.png",
        github: "https://drama-queen.vercel.app/",
        problem: "Standard voice assistants sound flat, monotone, and lack empathetic context or creative personality.",
        solution: "Voice AI coupled with real-time emotion modeling and narrative branches.",
        result: "An emotionally adaptive narrator for creative interactions and narrative storytelling.",
        metrics: { label: "Vocal Latency", value: "<1.2s" },
        techStack: ["ElevenLabs", "Next.js", "GPT-4"]
    }
];

const Projects = () => {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "RAG", "Multi-Agent", "Automation", "Voice AI"];

    const matchesFilter = (itemCategories: string[]) => {
        if (filter === "All") return true;
        return itemCategories.includes(filter);
    };

    const filteredFlagship = flagshipProjects.filter(p => matchesFilter(p.categories));
    const filteredAdditional = additionalProjects.filter(p => matchesFilter(p.categories));

    return (
        <section
            id="projects"
            className="relative my-28 py-20 px-6 md:px-12 overflow-hidden 
            bg-[#070708] border border-[#1e90ff33] rounded-3xl shadow-[0_0_50px_#00ffff15]"
        >
            {/* Ambient glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00ffff08] blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#7b4ae208] blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-[#00ffff] drop-shadow-[0_0_10px_#00ffffaa]">
                        Projects Portfolio
                    </h2>
                    <p className="text-[#a0a0a0] max-w-2xl mx-auto text-sm md:text-base">
                        A showcase of production-grade AI systems, multi-agent frameworks, and workflow automation.
                    </p>
                </div>

                {/* Categories Filter Bar */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 cursor-pointer
                            ${filter === cat
                                ? "bg-[#00ffff] text-[#0a0a0a] border-[#00ffff] shadow-[0_0_15px_#00ffffcc]"
                                : "bg-[#0f0f10] text-[#b0b0b0] border-[#1e90ff22] hover:text-[#00ffff] hover:border-[#00ffff55]"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Flagship Projects Section */}
                {filteredFlagship.length > 0 && (
                    <div className="space-y-12">
                        <div className="flex items-center gap-3 border-b border-[#1e90ff33] pb-3">
                            <Sparkles className="w-5 h-5 text-[#00ffff]" />
                            <h3 className="text-2xl font-bold tracking-wider text-[#e0e0e0]">
                                Flagship Case Studies
                            </h3>
                        </div>

                        <div className="space-y-16">
                            {filteredFlagship.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0f0f10] border border-[#1e90ff22] rounded-2xl p-6 md:p-8 hover:border-[#00ffff55] transition-all duration-500 shadow-[0_10px_30px_#00000080]"
                                >
                                    {/* Visual Column */}
                                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                                        <div className="group relative overflow-hidden rounded-xl border border-[#1e90ff22] bg-[#050506]">
                                            <img
                                                src={project.img}
                                                alt={project.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-auto aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-[#000000aa] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-[#0a0a0a] border border-[#00ffff] rounded-full text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0a0a] transition-all"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Metrics Grid */}
                                        <div className="grid grid-cols-3 gap-3">
                                            {project.metrics.map((metric, mIdx) => (
                                                <div key={mIdx} className="bg-[#1e90ff05] border border-[#1e90ff22] rounded-xl p-3 text-center space-y-1 hover:border-[#00ffff33] transition-colors">
                                                    <span className="text-[10px] text-[#a0a0a0] block uppercase tracking-wider font-semibold">
                                                        {metric.label}
                                                    </span>
                                                    <span className="text-base md:text-lg font-bold text-[#00ffff] block">
                                                        {metric.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className="lg:col-span-7 flex flex-col justify-between gap-6 text-left">
                                        <div className="space-y-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.categories.map((c) => (
                                                    <span key={c} className="px-3 py-1 bg-[#1e90ff15] text-[#1e90ff] rounded-full text-xs font-semibold uppercase tracking-wider border border-[#1e90ff33]">
                                                        {c}
                                                    </span>
                                                ))}
                                            </div>
                                            <h4 className="text-2xl md:text-3xl font-extrabold text-[#e0e0e0]">
                                                {project.title}
                                            </h4>

                                            {/* Problem -> Solution -> Result Framing */}
                                            <div className="space-y-3 bg-[#050506] border border-[#1e90ff11] rounded-xl p-4 text-sm leading-relaxed">
                                                <div>
                                                    <span className="text-[#1e90ff] font-bold uppercase tracking-wider text-[10px] block mb-0.5">Problem</span>
                                                    <p className="text-[#d0d0d0]">{project.problem}</p>
                                                </div>
                                                <div className="border-t border-[#1e90ff11] pt-3">
                                                    <span className="text-[#00ffff] font-bold uppercase tracking-wider text-[10px] block mb-0.5">Solution</span>
                                                    <p className="text-[#d0d0d0]">{project.solution}</p>
                                                </div>
                                                <div className="border-t border-[#1e90ff11] pt-3">
                                                    <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] block mb-0.5">Result</span>
                                                    <p className="text-[#d0d0d0]">{project.result}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Guardrail Box */}
                                        <div className="bg-[#7b4ae20c] border border-[#7b4ae222] rounded-xl p-4 space-y-2 text-xs md:text-sm">
                                            <div className="flex items-center gap-2 text-[#7b4ae2] font-semibold">
                                                <ShieldAlert className="w-4 h-4 text-[#7b4ae2]" />
                                                <span>Hallucination & Reliability Guardrail</span>
                                            </div>
                                            <p className="text-[#c0b5e0] leading-relaxed">
                                                {project.guardrail}
                                            </p>
                                        </div>

                                        {/* Footer Tech Stack and Links */}
                                        <div className="flex flex-wrap justify-between items-center gap-4 pt-3 border-t border-[#1e90ff11]">
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech) => (
                                                    <span key={tech} className="px-2.5 py-0.5 bg-[#0a0a0b] border border-[#1e90ff22] text-[#a0a0a0] rounded text-[10px] font-mono">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex gap-4">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 px-4 py-2 bg-[#1e90ff22] hover:bg-[#00ffff] hover:text-[#0a0a0a] text-[#00ffff] rounded-xl border border-[#00ffff55] text-xs font-semibold transition-all shadow-[0_0_10px_#00ffff33] hover:shadow-[0_0_20px_#00ffffaa]"
                                                >
                                                    Code & Demo <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Additional Builds Grid */}
                {filteredAdditional.length > 0 && (
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 border-b border-[#1e90ff33] pb-3">
                            <Layers className="w-5 h-5 text-[#00ffff]" />
                            <h3 className="text-2xl font-bold tracking-wider text-[#e0e0e0]">
                                Additional Builds
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredAdditional.map((project, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8, border: "1px solid #00ffff55", boxShadow: "0 10px 25px rgba(0, 255, 255, 0.1)" }}
                                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    className="bg-[#0f0f10] border border-[#1e90ff22] rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-[0_0_20px_#00ffff22] transition-all duration-300 cursor-pointer"
                                >
                                    <div className="relative overflow-hidden group aspect-video">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                            {project.categories.map((c) => (
                                                <span key={c} className="px-2 py-0.5 bg-[#0a0a0bcc] border border-[#1e90ff33] text-[#00ffff] rounded-full text-[9px] font-semibold uppercase tracking-widest">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                        {project.metrics && (
                                            <div className="absolute bottom-3 right-3 bg-[#0a0a0bd0] border border-[#00ffffaa] text-[#00ffff] px-2.5 py-1 rounded-lg text-xs font-bold shadow-[0_0_10px_#00ffff44]">
                                                {project.metrics.label}: {project.metrics.value}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5 flex-grow flex flex-col justify-between gap-5 text-left">
                                        <div className="space-y-3">
                                            <h4 className="text-lg font-bold text-[#e0e0e0] leading-snug group-hover:text-[#00ffff]">
                                                {project.title}
                                            </h4>

                                            {project.disclaimer && (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#ef444415] text-[#ef4444] border border-[#ef444433] rounded text-[10px] font-semibold uppercase tracking-wider">
                                                    <Info className="w-3.5 h-3.5" /> {project.disclaimer}
                                                </span>
                                            )}

                                            <div className="space-y-2 bg-[#050506] border border-[#1e90ff11] rounded-lg p-3 text-[11px] leading-relaxed text-[#b0b0b0]">
                                                <p><span className="text-[#1e90ff] font-bold">Impact:</span> {project.result}</p>
                                                <p><span className="text-[#00ffff] font-bold">Flow:</span> {project.solution}</p>
                                            </div>

                                            {project.guardrail && (
                                                <div className="bg-[#7b4ae208] border border-[#7b4ae222] rounded-lg p-3 text-[11px] text-[#c0b5e0] leading-relaxed">
                                                    <span className="font-semibold text-[#7b4ae2] flex items-center gap-1.5 mb-1">
                                                        <ShieldAlert className="w-3.5 h-3.5" /> Reliability Guardrail
                                                    </span>
                                                    {project.guardrail}
                                                </div>
                                            )}

                                            {project.qaSample && (
                                                <div className="bg-[#1e90ff05] border border-[#1e90ff15] rounded-lg p-3 text-[11px] space-y-1">
                                                    <span className="font-semibold text-[#00ffff] block uppercase tracking-wider text-[9px] mb-1">Pathology Grounding Sample</span>
                                                    <p className="text-[#d0d0d0] italic">"Query: {project.qaSample.query}"</p>
                                                    <p className="text-emerald-400 font-semibold mt-1">✓ Grounded: {project.qaSample.grounded}</p>
                                                    <p className="text-red-400/80 line-through">✗ Hallucinated: {project.qaSample.hallucinated}</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex justify-between items-center pt-3 border-t border-[#1e90ff11] mt-auto">
                                            <div className="flex gap-1">
                                                {project.techStack.map((tech) => (
                                                    <span key={tech} className="px-1.5 py-0.5 bg-[#0a0a0b] border border-[#1e90ff11] text-[#909090] rounded text-[9px] font-mono">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-[#1e90ff15] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0a0a] rounded-lg border border-[#00ffff33] transition-colors"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
