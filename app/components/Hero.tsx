"use client";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { ThemeToggle } from "./ThemeToggle";
import { ExternalLink, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
    const openContactPopup = () => {
        window.dispatchEvent(new CustomEvent("open-contact-popup"));
    };

    return (
        <section id="hero" style={{ paddingTop: '64px', paddingBottom: '0px' }}>
            <div className="container">
                <FadeIn>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: '16px',
                        borderBottom: '1px solid var(--border)',
                        marginBottom: '16px'
                    }}>
                        {/* Profile Info Left */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <Image
                                src="/profile.png"
                                alt="Nishant Raj Jha"
                                width={64}
                                height={64}
                                priority
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div>
                                <h1 style={{
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    color: 'var(--text)',
                                    marginBottom: '4px'
                                }}>
                                    Nishant Raj Jha<span style={{ color: 'var(--text-muted)', fontWeight: 300, marginLeft: '2px' }}>|</span>
                                </h1>
                                <p className="text-muted" style={{ fontSize: '15px' }}>
                                    Full Stack Developer
                                </p>
                            </div>
                        </div>

                        {/* Actions Right */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <a
                                href="https://drive.google.com/file/d/1TGpEdy2RonKJ-P8eaNr0Vg347_TH9P3w/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px' }}
                            >
                                Resume <ExternalLink size={14} />
                            </a>
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Bio */}
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--text-muted)',
                        lineHeight: '1.7',
                        marginBottom: '20px',
                    }}>
                        I build products that solve real problems — from AI-powered platforms to cross-platform apps. Moving 10× faster with a security-first mindset and a passion for clean, seamless user experiences.
                    </p>

                    {/* Action buttons row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <button onClick={openContactPopup} className="btn-black" style={{ cursor: 'pointer' }}>
                            <Mail size={15} />
                            Get in Touch
                        </button>
                        <a href="https://github.com/NishantRaj29" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            <SiGithub size={15} />
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/nishant-raj-jha/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            <SiLinkedin size={15} />
                            LinkedIn
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
