"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ContactPopup() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Listen for custom event from Hero "Get in Touch" button
    useEffect(() => {
        const handler = () => setOpen(true);
        window.addEventListener("open-contact-popup", handler);
        return () => window.removeEventListener("open-contact-popup", handler);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, message });
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setOpen(false);
            setEmail("");
            setMessage("");
        }, 2000);
    };

    return (
        <>
            {/* Floating trigger button */}
            <button
                onClick={() => setOpen(!open)}
                className="contact-fab"
                aria-label="Get in touch"
            >
                {open ? <X size={20} /> : <MessageCircle size={20} />}
            </button>

            {/* Popup */}
            {open && (
                <div className="contact-popup">
                    <div className="contact-popup-header">
                        <span style={{ fontWeight: 600, fontSize: '15px' }}>Get in Touch 👋</span>
                        <button onClick={() => setOpen(false)} className="contact-close">
                            <X size={16} />
                        </button>
                    </div>

                    {submitted ? (
                        <div style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
                            Thanks! I&apos;ll get back to you soon. ✅
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label className="contact-label">Email</label>
                            <input
                                type="email"
                                required
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="contact-input"
                            />

                            <label className="contact-label">How can I help you?</label>
                            <textarea
                                required
                                placeholder="Tell me about your project or idea..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="contact-textarea"
                                rows={3}
                            />

                            <button type="submit" className="contact-submit">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            )}
        </>
    );
}
