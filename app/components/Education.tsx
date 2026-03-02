import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Education() {
    return (
        <section id="education">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">
                        Education <span className="hashtag">#</span>
                    </h2>
                </FadeIn>
                <FadeIn>
                    <div className="edu-row" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                    }}>
                        {/* College Logo */}
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            flexShrink: 0,
                            background: 'var(--accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image
                                src="/nitj.png"
                                alt="NIT Jalandhar"
                                width={64}
                                height={64}
                                className="edu-logo"
                                style={{ objectFit: 'cover', width: '64px', height: '64px' }}
                            />
                        </div>

                        {/* Details */}
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', margin: 0 }}>
                                Dr B R Ambedkar National Institute of Technology (NIT), Jalandhar
                            </h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
                                B.Tech in Computer Science and Engineering
                            </p>
                        </div>

                        {/* Year */}
                        <span style={{ fontSize: '14px', color: 'var(--text-muted)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                            2023 - 2027
                        </span>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
