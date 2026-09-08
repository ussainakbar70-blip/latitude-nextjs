"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-[88px] lg:py-[120px] bg-bg">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[620px]">
          <p className="uppercase text-xs font-semibold tracking-[0.28em] text-gold">
            Our Projects
          </p>
          <h2 className="font-serif font-semibold text-navy-900 text-[32px] md:text-[44px] leading-[1.15] my-3.5">
            Land Worth Building
            <br />
            Your Future On
          </h2>
          <p className="text-muted text-base leading-[1.75] max-w-[560px]">
            Explore residential plot opportunities designed around
            connectivity, infrastructure and long-term potential.
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
