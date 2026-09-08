"use client";

import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useReveal<HTMLDivElement>();
  const Component = Tag as any;
  return (
    <Component ref={ref} className={`reveal ${className}`}>
      {children}
    </Component>
  );
}
