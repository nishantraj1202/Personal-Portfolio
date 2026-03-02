import FadeIn from "./FadeIn";

export default function Footer() {
    return (
        <footer id="footer" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
            <div className="container">
                <FadeIn>
                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', textAlign: 'center' }}>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                            © 2026 Nishant Raj Jha
                        </p>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
