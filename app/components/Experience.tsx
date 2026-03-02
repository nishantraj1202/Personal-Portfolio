import FadeIn from "./FadeIn";

interface TimelineEntry {
    date: string;
    title: string;
    bullets: string[];
}

const EXPERIENCE: TimelineEntry[] = [
    {
        date: "Feb 2025",
        title: "Frontend Developer — Alumni Portal, NIT Jalandhar",
        bullets: [
            "Engineered a scalable alumni portal for <strong>800+</strong> users with secure authentication, profile management, and data handling.",
            "Optimized frontend and asynchronous operations, reducing page load time by <strong>20%</strong>.",
        ],
    },
    {
        date: "Sept 2024 – Present",
        title: "Student Coordinator — Alumni Cell, NIT Jalandhar",
        bullets: [
            "Organized <strong>35+</strong> alumni talks with industry professionals, engaging <strong>100–150</strong> participants per session.",
            "Managed speaker outreach, logistics, and cross-team coordination.",
        ],
    },
    {
        date: "Aug 2024 – Present",
        title: "Student Coordinator — PACE Technical Society, NIT Jalandhar",
        bullets: [
            "Mentored <strong>50+</strong> junior students through hands-on sessions in development and problem-solving.",
            "Conducted workshops and internal hackathons to strengthen technical foundations.",
        ],
    },
    {
        date: "Jan 2024 – Present",
        title: "Student Coordinator — Chetna Club, NIT Jalandhar",
        bullets: [
            "Organized cultural events and interactive talks with senior civil servants (IAS/IFS officers).",
        ],
    },
    {
        date: "Jan 2024 – Present",
        title: "Volunteer — Prayaas (NIT Jalandhar Social Wing)",
        bullets: [
            "Led education outreach drives supporting underprivileged students and rural communities.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" style={{ paddingTop: '16px' }}>
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">
                        Experiences <span className="hashtag">#</span>
                    </h2>
                </FadeIn>

                {/* Timeline with vertical line */}
                <div className="exp-timeline">
                    {EXPERIENCE.map((entry, i) => (
                        <FadeIn key={i} className="exp-step">
                            {/* Dot */}
                            <div className="exp-dot" />

                            {/* Content */}
                            <div className="exp-content">
                                <span className="exp-date">{entry.date}</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                                    <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', margin: 0 }}>
                                        {entry.title.split(' — ')[0]}
                                    </h3>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>·</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                                        {entry.title.split(' — ')[1] || ''}
                                    </span>
                                </div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                                    {entry.bullets.map((bullet, j) => (
                                        <p
                                            key={j}
                                            style={{ marginBottom: '4px' }}
                                            dangerouslySetInnerHTML={{ __html: bullet.replace(/<strong>/g, '<span style="color: var(--text); font-weight: 500;">').replace(/<\/strong>/g, '</span>') }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
