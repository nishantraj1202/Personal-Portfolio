import FadeIn from "./FadeIn";
import { Globe, Github } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string;
    badges: string[];
    sourceUrl: string;
    liveUrl?: string;
    featured?: boolean;
}

const PROJECTS: Project[] = [
    {
        id: "project-preptracker",
        title: "PrepTracker — AI Coding & Interview Platform",
        description:
            "Built an AI coding platform with Docker-isolated sandboxes for secure multi-language execution, image-to-code parsing for question extraction, and a text-first rendering engine for graph problems.",
        badges: ["React.js", "Node.js", "MongoDB", "Docker", "Groq API"],
        sourceUrl: "#",
        liveUrl: "#",
        featured: true,
    },
    {
        id: "project-smart-surveillance",
        title: "Smart Surveillance — Anomaly Detection System",
        description:
            "Developing a real-time video surveillance system to detect anomalous activities using deep learning. Implemented video preprocessing, feature extraction, and classification pipeline.",
        badges: ["Python", "OpenCV", "TensorFlow", "PyTorch"],
        sourceUrl: "#",
    },
    {
        id: "project-gigmate",
        title: "GigMate — Support Platform for Gig Workers",
        description:
            "Developed a cross-platform mobile application providing real-time job listings and worker support services. Built REST APIs and integrated secure authentication with encrypted data handling.",
        badges: ["React Native", "Node.js", "MongoDB"],
        sourceUrl: "#",
    },
    {
        id: "project-alumni",
        title: "Alumni Portal — NIT Jalandhar",
        description:
            "Engineered a scalable alumni portal for 800+ users with secure auth, profile management, and data handling. Optimized frontend and async operations, reducing page load time by 20%.",
        badges: ["React.js", "Firebase", "MongoDB"],
        sourceUrl: "#",
        liveUrl: "#",
    },
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <FadeIn className="bordered-card" style={{ marginBottom: '16px' }}>
            <div className="project-content" id={project.id}>
                {/* Header Row: Title + Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text)', margin: 0 }}>
                        {project.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {project.liveUrl && (
                            <a href={project.liveUrl} className="btn-outline" target="_blank" rel="noopener noreferrer">
                                <Globe size={14} /> Visit
                            </a>
                        )}
                        {project.sourceUrl && (
                            <a href={project.sourceUrl} className="btn-black" target="_blank" rel="noopener noreferrer">
                                <Github size={14} /> Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Body: Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                    {project.description}
                </p>

                {/* Footer: Tech Stack Badges */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border)'
                }}>
                    {project.badges.map((badge) => (
                        <span key={badge} className="badge">
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}

export default function Projects() {
    return (
        <section id="projects" style={{ paddingTop: '16px' }}>
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">
                        Projects <span className="hashtag">#</span> <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 400, marginLeft: '4px' }}>(sorted by most recent)</span>
                    </h2>
                </FadeIn>

                <div className="projects-list">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
