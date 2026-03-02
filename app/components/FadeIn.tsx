"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function FadeIn({
    children,
    className = "",
    style,
}: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`fade-in ${className}`.trim()} style={style}>
            {children}
        </div>
    );
}
