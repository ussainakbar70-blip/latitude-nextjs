"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="sites" className="py-[88px] lg:py-[120px] bg-bg relative">
      {/* Anchor for backward compatibility with #projects links */}
      <span id="projects" className="absolute -top-24 left-0" />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[620px]">
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold">
            Our Sites
          </p>
          <h2 className="font-serif font-semibold text-navy-900 text-[32px] md:text-[44px] leading-[1.15] my-3.5">
            Land Worth Building
            <br />
            Your Future On
          </h2>
          <p className="text-muted text-base leading-[1.75] max-w-[560px]">
            Explore our DTCP approved residential sites with certified master layout maps,
            complete road infrastructure, and real-time plot availability in Coimbatore.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
