import FadeIn from "./FadeIn";
import {
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiFirebase,
    SiCplusplus,
    SiPython,
    SiC,
    SiR,
    SiJavascript,
    SiExpress,
    SiMysql,
    SiDocker,
    SiLinux,
    SiGithub,
    SiOpencv,
    SiTensorflow,
    SiPytorch,
    SiTailwindcss
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";

const ALL_TECH = [
    { label: "React Native", icon: <SiReact /> },
    { label: "Node.js", icon: <SiNodedotjs /> },
    { label: "MongoDB", icon: <SiMongodb /> },
    { label: "React.js", icon: <SiReact /> },
    { label: "Firebase", icon: <SiFirebase /> },
    { label: "AI Systems", icon: <FaBrain /> },
    { label: "C++", icon: <SiCplusplus /> },
    { label: "Python", icon: <SiPython /> },
    { label: "C", icon: <SiC /> },
    { label: "R", icon: <SiR /> },
    { label: "JavaScript", icon: <SiJavascript /> },
    { label: "Express.js", icon: <SiExpress /> },
    { label: "SQL", icon: <SiMysql /> },
    { label: "Docker", icon: <SiDocker /> },
    { label: "Linux", icon: <SiLinux /> },
    { label: "GitHub", icon: <SiGithub /> },
    { label: "OpenCV", icon: <SiOpencv /> },
    { label: "TensorFlow", icon: <SiTensorflow /> },
    { label: "PyTorch", icon: <SiPytorch /> },
    { label: "Power BI", icon: <BsBarChartFill /> },
    { label: "Tailwind CSS", icon: <SiTailwindcss /> },
];

export default function TechStack() {
    return (
        <section id="tech-stack" style={{ paddingTop: '8px' }}>
            <div className="container">
                <FadeIn>
                    <h2 className="section-title" style={{ fontSize: '18px', fontWeight: 700, fontStyle: 'italic', marginBottom: '16px' }}>
                        Tech-Stack <span className="hashtag">#</span>
                    </h2>
                </FadeIn>
                <FadeIn>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {ALL_TECH.map((tech) => (
                            <div key={tech.label} className="tech-pill">
                                <span style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>{tech.icon}</span>
                                {tech.label}
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
