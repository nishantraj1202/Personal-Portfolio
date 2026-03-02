"use client";

import { ReactNode } from "react";

interface TechIconProps {
    icon: ReactNode;
    label: string;
    variant?: "core" | "secondary";
}

export default function TechIcon({ icon, label, variant = "core" }: TechIconProps) {
    return (
        <div className={`tech-ball-wrapper ${variant}`}>
            <div className="tech-ball">
                {icon}
            </div>
            <span className="tech-label">{label}</span>
        </div>
    );
}
