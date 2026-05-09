import { createFileRoute } from "@tanstack/react-router";
import { AiBackground } from "@/components/AiBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sai Raman — AI Engineer & ML Researcher" },
      {
        name: "description",
        content:
          "Portfolio of Sai Raman — AI/ML engineer building real-time analytics, computer vision and streaming ML systems. Published researcher (IC-SIT 2024).",
      },
      { property: "og:title", content: "Sai Raman — AI Engineer & ML Researcher" },
      {
        property: "og:description",
        content:
          "Real-time analytics, computer vision and streaming ML. Selected projects, research and contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sai Raman — AI Engineer & ML Researcher" },
      {
        name: "twitter:description",
        content:
          "Real-time analytics, computer vision and streaming ML. Selected projects, research and contact.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AiBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
