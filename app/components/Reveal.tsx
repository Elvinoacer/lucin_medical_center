"use client";

import { ReactNode } from "react";
import { useReveal } from "../lib/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in ms */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      // @ts-expect-error - ref typing across polymorphic tags
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
