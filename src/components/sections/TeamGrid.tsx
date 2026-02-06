"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/data/types";

type TeamGridProps = {
  members: TeamMember[];
};

export function TeamGrid({ members }: TeamGridProps) {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <button
            key={member.name}
            type="button"
            onClick={() => setActiveMember(member)}
            className="rounded border border-ink/10 bg-white p-6 text-left transition hover:border-ink/30"
          >
            <Image
              src={member.photo}
              alt={member.name}
              width={320}
              height={240}
              className="h-48 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-ink">
              {member.name}
            </h3>
            <p className="text-sm text-ink/60">{member.role}</p>
            <p className="mt-3 text-sm text-ink/70">{member.bio}</p>
          </button>
        ))}
      </div>

      {activeMember ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-2xl rounded bg-white p-6 shadow-xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  Team member
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">
                  {activeMember.name}
                </h3>
                <p className="text-sm text-ink/60">{activeMember.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveMember(null)}
                className="rounded border border-ink/10 px-3 py-1 text-sm font-semibold text-ink/70 hover:border-ink/30"
              >
                Close
              </button>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Image
                src={activeMember.photo}
                alt={activeMember.name}
                width={260}
                height={260}
                className="h-52 w-full rounded-lg object-cover md:col-span-1"
              />
              <div className="space-y-4 md:col-span-2">
                <p className="text-sm text-ink/70">{activeMember.bio}</p>
                <ul className="space-y-2 text-sm text-ink/70">
                  {activeMember.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {activeMember.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={cn(
                        "text-sm font-semibold text-link hover:text-link-dark",
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
