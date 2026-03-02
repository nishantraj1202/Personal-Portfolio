import FadeIn from "./FadeIn";

const HACKATHONS = [
    { icon: "🥇", name: "Level Supermind 2025 (Mumbai)" },
    { icon: "🏆", name: "Smart India Hackathon 2024" },
    { icon: "⚡", name: "HackMol 2024" },
    { icon: "💫", name: "HackMol 2025" },
    { icon: "🎯", name: "SIH 2023" },
];

export default function Hackathons() {
    return (
        <section id="hackathons" style={{ paddingTop: '16px' }}>
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">
                        Hackathons <span className="hashtag">#</span>
                    </h2>
                </FadeIn>
                <FadeIn>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {HACKATHONS.map((h) => (
                            <div key={h.name} className="bordered-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px' }}>
                                <span style={{ fontSize: '24px' }}>{h.icon}</span>
                                <div>
                                    <h3 style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text)', margin: 0 }}>{h.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
