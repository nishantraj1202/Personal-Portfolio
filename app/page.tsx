
import Hero from "./components/Hero";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup";

export default function Home() {
    return (
        <main>
            <Hero />
            <Education />
            <TechStack />
            <Projects />
            <Experience />
            <Footer />
            <ContactPopup />
        </main>
    );
}
