"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        function updateProgress() {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setWidth(progress);
        }

        window.addEventListener("scroll", updateProgress, { passive: true });
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div
            id="scroll-progress"
            aria-hidden="true"
            style={{ width: `${width}%` }}
        />
    );
}
