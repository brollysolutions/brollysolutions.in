"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactInfo {
  phone_numbers?: string[];
  whatsapp?: string;
}

interface ChatResponse {
  answer: string;
  contact_info?: ContactInfo;
}

interface Section {
  title: string;
  bullets: string[];
  raw?: string;
}

interface ParsedResult {
  format: "sections" | "qa" | "plain";
  text?: string;
  sections?: Section[];
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  contactInfo?: ContactInfo;
  isError?: boolean;
}

// Helper styling constants
const fontSans = "font-sans";

// ── Clean markdown bold/italic from text ──
function cleanMd(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").trim();
}

function stripMd(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1").trim();
}

// ── Split body text into bullet array ──
function splitBullets(body: string): string[] {
  return body
    .split(/[•\n]\s*|\.\s+(?=[A-Z])/)
    .map((s) => stripMd(s).trim())
    .filter((s) => s.length > 4);
}

// ── Parse server response text into visual sections ──
function parseSections(rawText: string): ParsedResult {
  const text = rawText.trim();

  // FORMAT A: "1. **Title:** ..." numbered sections
  const fmtA = /(\d+)\.\s+\*\*([^*]+)\*\*[:\s\u2014-]*([\s\S]*?)(?=\d+\.\s+\*\*|$)/g;
  const sectionsA: Section[] = [];
  let m;
  while ((m = fmtA.exec(text)) !== null) {
    const title = m[2].replace(/:$/, "").trim();
    const body = m[3].trim();
    const bullets = body
      .split(/\n?\s*[-•]\s+/)
      .filter((b) => b.trim().length > 3)
      .map((b) => stripMd(b));
    if (bullets.length === 0 && body.length > 3) {
      bullets.push(stripMd(body));
    }
    sectionsA.push({ title, bullets });
  }
  if (sectionsA.length >= 2) {
    return { format: "sections", sections: sectionsA };
  }

  // FORMAT B: "Direct Answer — ..." / "Details — ..." / "Source Hint — ..."
  // Matches letters, numbers, apostrophes, ampersands, slashes, hyphens, and spaces as label.
  // Separator is either a dash with space padding on both sides (\s+[-–—]\s+) or a colon (\s*:\s*).
  const fmtB = /(?:\d+\.\s+)?([A-Za-z0-9'\-&/ ]+?)(?:\s+[-–—]\s+|\s*:\s*)([\s\S]*?)(?=(?:\d+\.\s+)?([A-Za-z0-9'\-&/ ]+?)(?:\s+[-–—]\s+|\s*:\s*)|$)/g;
  const sectionsB: Section[] = [];
  const knownLabels = ["direct answer", "details", "source hint", "summary", "answer", "explanation", "note", "role", "responsibilities", "experience"];

  fmtB.lastIndex = 0;
  let firstMatchIndex = -1;
  while ((m = fmtB.exec(text)) !== null) {
    if (firstMatchIndex === -1) {
      firstMatchIndex = m.index;
    }
    const label = m[1].trim();
    const body = m[2].trim();
    if (!label || body.length < 3) continue;
    const isKnown = knownLabels.some((k) => label.toLowerCase().includes(k));
    if (isKnown || label.length < 30) {
      const bullets = splitBullets(body);
      sectionsB.push({ title: label, bullets, raw: body });
    }
  }

  const noiseLabels = ["call", "whatsapp", "phone", "contact"];
  const filteredB = sectionsB.filter(
    (s) => !noiseLabels.some((n) => s.title.toLowerCase().trim() === n)
  );

  if (filteredB.length >= 1) {
    let introText = "";
    if (firstMatchIndex > 0) {
      introText = text.substring(0, firstMatchIndex).trim();
      // Remove any leading markdown bullets from the intro text
      introText = introText.replace(/^[-•\s*]+/g, "");
    }
    return { format: "qa", sections: filteredB, text: introText };
  }

  // FORMAT C: Plain text fallback
  return { format: "plain", text };
}

// ── Detect known keywords in text for stats ──
function extractStats(bullets: string[]) {
  const statsFound: { val: string; lbl: string }[] = [];
  const patterns = [
    { re: /(\d+\+?\s*modules?)/i, label: "Modules" },
    { re: /(\d+\+?\s*topics?)/i, label: "Topics" },
    { re: /(\d+\+?\s*tools?)/i, label: "Tools" },
    { re: /(\d+\s*days?)/i, label: "Days access" },
    { re: /(\d+\+?\s*years?)/i, label: "Experience" },
  ];
  for (const p of patterns) {
    for (const b of bullets) {
      const m = b.match(p.re);
      if (m && statsFound.length < 3) {
        statsFound.push({ val: m[1].trim(), lbl: p.label });
      }
    }
  }
  return statsFound;
}

function extractTools(bullets: string[]) {
  const tools: string[] = [];
  const toolKeywords = [
    "SEO",
    "Google Ads",
    "ChatGPT",
    "AI tools",
    "analytics",
    "Canva",
    "WordPress",
    "Social Media",
    "content",
    "design tools",
  ];
  for (const b of bullets) {
    for (const kw of toolKeywords) {
      if (b.toLowerCase().includes(kw.toLowerCase()) && !tools.includes(kw)) {
        tools.push(kw);
      }
    }
  }
  return tools.slice(0, 8);
}

function extractTrainer(bullets: string[]) {
  for (const b of bullets) {
    const m = b.match(/([A-Z][a-z]+ [A-Z][a-z]+)[,\s].*?(\d+\+?\s*years?)/i);
    if (m) {
      return { name: m[1], exp: m[2] };
    }
  }
  return null;
}

// ── Section icon configs ──
const SECTION_ICONS = {
  course: {
    bg: "rgba(108,99,255,0.18)",
    stroke: "#a78bfa",
    path: (
      <>
        <path d="M12 2H4a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="12 2 12 8 18 8" />
      </>
    ),
  },
  training: {
    bg: "rgba(45,212,191,0.15)",
    stroke: "#2dd4bf",
    path: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </>
    ),
  },
  trainer: {
    bg: "rgba(251,191,36,0.15)",
    stroke: "#fbbf24",
    path: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  placement: {
    bg: "rgba(74,222,128,0.15)",
    stroke: "#4ade80",
    path: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  },
  unique: {
    bg: "rgba(248,113,113,0.15)",
    stroke: "#f87171",
    path: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
  },
  tools: {
    bg: "rgba(108,99,255,0.15)",
    stroke: "#a78bfa",
    path: (
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    ),
  },
  default: {
    bg: "rgba(108,99,255,0.15)",
    stroke: "#a78bfa",
    path: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </>
    ),
  },
};

function iconFor(title: string) {
  const t = title.toLowerCase();
  if (t.includes("course") || t.includes("content") || t.includes("module")) return SECTION_ICONS.course;
  if (t.includes("train") && t.includes("approach")) return SECTION_ICONS.training;
  if (t.includes("trainer") || t.includes("expert")) return SECTION_ICONS.trainer;
  if (t.includes("placement") || t.includes("career")) return SECTION_ICONS.placement;
  if (t.includes("unique") || t.includes("feature")) return SECTION_ICONS.unique;
  if (t.includes("tool")) return SECTION_ICONS.tools;
  return SECTION_ICONS.default;
}

function SectionIcon({ icon }: { icon: typeof SECTION_ICONS.default }) {
  return (
    <div
      className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
      style={{ backgroundColor: icon.bg }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={icon.stroke}
        strokeWidth="1.8"
        className="w-[13px] h-[13px]"
      >
        {icon.path}
      </svg>
    </div>
  );
}

// ── Custom Card sub-components ──
function CourseSectionCard({ section }: { section: Section }) {
  const icon = iconFor(section.title);
  const stats = extractStats(section.bullets);
  const tools = extractTools(section.bullets);

  return (
    <div className="bg-[#22263a] border border-white/10 rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-3.5 py-3 border-b border-white/5 bg-[#1a1d27]/40">
        <SectionIcon icon={icon} />
        <span className={`${fontSans} font-medium text-[13px] text-[#f0f0f5]`}>{section.title}</span>
        <span className="ml-auto text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-purple-500/15 text-[#a78bfa] border border-[#6c63ff]/20">
          35+ modules
        </span>
      </div>
      {stats.length > 0 && (
        <div className="grid grid-cols-3 gap-[1px] bg-white/5 border-b border-white/5">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-[#22263a] py-3 text-center px-2">
              <div className={`${fontSans} font-semibold text-lg text-[#f0f0f5]`}>{s.val}</div>
              <div className="text-[11px] text-[#8b8fa8] mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>
      )}
      {tools.length > 0 && (
        <div className="flex flex-wrap gap-1.5 p-3.5">
          {tools.map((t, idx) => (
            <span
              key={idx}
              className="text-[12px] px-2.5 py-0.5 rounded-full border border-white/10 text-[#8b8fa8] bg-white/[0.03]"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function TrainerSectionCard({ section }: { section: Section }) {
  const icon = iconFor(section.title);
  const trainer = extractTrainer(section.bullets);

  return (
    <div className="bg-[#22263a] border border-white/10 rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-3.5 py-3 border-b border-white/5 bg-[#1a1d27]/40">
        <SectionIcon icon={icon} />
        <span className={`${fontSans} font-medium text-[13px] text-[#f0f0f5]`}>{section.title}</span>
      </div>
      {trainer ? (
        <div className="flex items-center gap-3 p-3.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#2dd4bf] text-white font-semibold text-[13px] flex items-center justify-center shrink-0">
            {trainer.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] font-medium text-[#f0f0f5]">{trainer.name}</p>
            <span className="text-[12px] text-[#8b8fa8] leading-tight mt-0.5">
              {trainer.exp} experience · SEO, Google Ads, Social Media, WordPress, Canva
            </span>
          </div>
        </div>
      ) : (
        <div className="p-3.5 flex flex-col gap-2">
          {section.bullets.map((b, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[13px] text-[#cccde0] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shrink-0 mt-2" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PlacementSectionCard({ section }: { section: Section }) {
  const icon = iconFor(section.title);

  return (
    <div className="bg-[#22263a] border border-white/10 rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-3.5 py-3 border-b border-white/5 bg-[#1a1d27]/40">
        <SectionIcon icon={icon} />
        <span className={`${fontSans} font-medium text-[13px] text-[#f0f0f5]`}>{section.title}</span>
        <span className="ml-auto text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-green-500/12 text-[#4ade80] border border-green-500/20">
          100% support
        </span>
      </div>
      <div className="p-3.5 flex flex-col gap-2">
        {section.bullets.map((b, idx) => (
          <div key={idx} className="flex items-center gap-2.5 text-[13px] text-[#cccde0]">
            <div className="w-6 h-6 rounded-md bg-green-500/12 flex items-center justify-center shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DefaultSectionCard({ section }: { section: Section }) {
  const icon = iconFor(section.title);

  return (
    <div className="bg-[#22263a] border border-white/10 rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-3.5 py-3 border-b border-white/5 bg-[#1a1d27]/40">
        <SectionIcon icon={icon} />
        <span className={`${fontSans} font-medium text-[13px] text-[#f0f0f5]`}>{section.title}</span>
      </div>
      <div className="p-3.5 flex flex-col gap-2">
        {section.bullets.map((b, idx) => (
          <div key={idx} className="flex items-start gap-2 text-[13px] text-[#cccde0] leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shrink-0 mt-2" />
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QACard({ section }: { section: Section }) {
  const tl = section.title.toLowerCase();
  let iconCfg = SECTION_ICONS.default;
  let badge = "";

  if (tl.includes("direct answer") || tl.includes("answer")) {
    iconCfg = {
      bg: "rgba(108,99,255,0.18)",
      stroke: "#a78bfa",
      path: (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </>
      ),
    };
    badge = "Answer";
  } else if (tl.includes("detail")) {
    iconCfg = {
      bg: "rgba(45,212,191,0.15)",
      stroke: "#2dd4bf",
      path: (
        <>
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </>
      ),
    };
    badge = "Details";
  } else if (tl.includes("source")) {
    iconCfg = {
      bg: "rgba(251,191,36,0.12)",
      stroke: "#fbbf24",
      path: (
        <>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </>
      ),
    };
    badge = "Source";
  }

  if (tl.includes("direct answer") || tl.includes("answer")) {
    const bodyText = section.raw || section.bullets.join(" ");
    const lines = bodyText
      .split(/[•]/)
      .map((s) => stripMd(s).trim())
      .filter((s) => s.length > 3);

    return (
      <div className="bg-[#22263a] border border-[#6c63ff]/30 rounded-xl overflow-hidden shadow-sm">
        <div className="flex items-center gap-2 px-3.5 py-3 border-b border-white/5 bg-[#6c63ff]/5">
          <SectionIcon icon={iconCfg} />
          <span className="font-sans font-medium text-[13px] text-[#f0f0f5]">Direct answer</span>
          <span className="ml-auto text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-purple-500/15 text-[#a78bfa] border border-[#6c63ff]/20">
            {badge}
          </span>
        </div>
        <div className="p-3.5 flex flex-col gap-2">
          {lines.length > 1 ? (
            lines.map((l, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[13px] text-[#cccde0] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shrink-0 mt-2" />
                <span dangerouslySetInnerHTML={{ __html: cleanMd(l) }} />
              </div>
            ))
          ) : (
            <div
              className="text-[14px] text-[#f0f0f5] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: cleanMd(bodyText) }}
            />
          )}
        </div>
      </div>
    );
  }

  if (tl.includes("detail")) {
    const lines = (section.raw || section.bullets.join("\n"))
      .split(/[-•]/)
      .map((s) => stripMd(s).trim())
      .filter((s) => s.length > 4);

    return (
      <div className="bg-[#22263a] border border-white/10 rounded-xl overflow-hidden shadow-sm">
        <div className="flex items-center gap-2 px-3.5 py-3 border-b border-white/5 bg-[#1a1d27]/40">
          <SectionIcon icon={iconCfg} />
          <span className="font-sans font-medium text-[13px] text-[#f0f0f5]">More details</span>
          <span className="ml-auto text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-teal-500/12 text-[#2dd4bf] border border-teal-500/20">
            {badge}
          </span>
        </div>
        <div className="p-3.5 flex flex-col gap-2">
          {lines.map((l, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[13px] text-[#cccde0] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shrink-0 mt-2" />
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tl.includes("source")) {
    const src = stripMd(section.raw || section.bullets.join(" "));
    return (
      <div className="flex items-center gap-2 px-1 py-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.8" className="w-[13px] h-[13px]">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <span className="text-[12px] text-[#8b8fa8]">{src}</span>
      </div>
    );
  }

  return <DefaultSectionCard section={section} />;
}

function ContactCard({ contactInfo }: { contactInfo: ContactInfo }) {
  const phone = contactInfo.phone_numbers?.join(", ") || "";
  const wa = contactInfo.whatsapp || "";

  return (
    <div className="bg-[#22263a] border border-white/10 rounded-xl overflow-hidden shadow-sm mt-1">
      <div className="flex items-center gap-2 px-3.5 py-3 border-b border-white/5 bg-[#1a1d27]/40">
        <div className="w-6 h-6 rounded-md bg-teal-500/15 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8" className="w-[13px] h-[13px]">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </div>
        <span className="font-sans font-medium text-[13px] text-[#f0f0f5]">Contact us</span>
      </div>
      <div className="p-3.5 flex flex-col gap-3">
        {phone && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2.5">
            <span className="text-[13px] text-[#8b8fa8]">
              <strong className="text-[#f0f0f5] font-semibold">Phone:</strong> {phone}
            </span>
            <a
              href={`tel:${phone.split(",")[0].trim()}`}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#6c63ff]/15 hover:bg-[#6c63ff]/25 border border-[#6c63ff]/20 text-[#a78bfa] text-center transition-all duration-200"
            >
              Call Now
            </a>
          </div>
        )}
        {wa && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-[13px] text-[#8b8fa8]">
              <strong className="text-[#f0f0f5] font-semibold">WhatsApp:</strong> {wa}
            </span>
            <a
              href={`https://wa.me/${wa.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-green-500/12 hover:bg-green-500/20 border border-green-500/20 text-[#25d366] text-center transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function BotResponse({ answer, contactInfo }: { answer: string; contactInfo?: ContactInfo }) {
  const parsed = parseSections(answer);

  return (
    <div className="max-w-[92%] flex flex-col gap-2.5">
      {parsed.format === "plain" ? (
        <div
          className="text-[#f0f0f5] text-[14px] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: cleanMd(parsed.text || "") }}
        />
      ) : parsed.format === "qa" ? (
        <>
          {parsed.text && (
            <div
              className="text-[#f0f0f5] text-[14px] leading-relaxed mb-2"
              dangerouslySetInnerHTML={{ __html: cleanMd(parsed.text) }}
            />
          )}
          {parsed.sections?.map((sec, idx) => <QACard key={idx} section={sec} />)}
        </>
      ) : (
        <>
          {parsed.text ? (
            <div
              className="text-[#f0f0f5] text-[14px] leading-relaxed mb-2"
              dangerouslySetInnerHTML={{ __html: cleanMd(parsed.text) }}
            />
          ) : (
            <div className="text-[#8b8fa8] text-[14px] leading-relaxed">
              Here's what I found about{" "}
              <strong className="text-[#f0f0f5] font-semibold">Digital Brolly's Digital Marketing program:</strong>
            </div>
          )}
          {parsed.sections?.map((sec, idx) => {
            const tl = sec.title.toLowerCase();
            if (tl.includes("placement") || tl.includes("career")) {
              return <PlacementSectionCard key={idx} section={sec} />;
            }
            if (tl.includes("course") || tl.includes("content") || tl.includes("module")) {
              return <CourseSectionCard key={idx} section={sec} />;
            }
            if (tl.includes("trainer") || tl.includes("expert")) {
              return <TrainerSectionCard key={idx} section={sec} />;
            }
            return <DefaultSectionCard key={idx} section={sec} />;
          })}
        </>
      )}
      {contactInfo && <ContactCard contactInfo={contactInfo} />}
      <div className="text-[#8b8fa8] text-[12px] mt-1">Need more details? Ask me anything!</div>
    </div>
  );
}

// ── Main Page Component ──
export default function RAGChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi! I'm your Digital Brolly assistant. Ask me anything about our digital marketing course — fees, schedule, tools, placement support, and more.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (customText?: string) => {
    const text = (customText || inputValue).trim();
    if (!text || isLoading) return;

    if (!customText) {
      setInputValue("");
    }
    const userMsgId = `user-${Date.now()}`;
    setMessages((prev) => [...prev, { id: userMsgId, sender: "user", text }]);
    setIsLoading(true);

    try {
      const response = await fetch("https://brollysolutions.in/rag_chatbot/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: ChatResponse = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: data.answer,
          contactInfo: data.contact_info,
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: "bot",
          text: "Could not reach the server. Make sure FastAPI is running at the configured URL.",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0f1117] overflow-hidden">
      {/* Background radial glows */}
      <div className="fixed top-[-30%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(108,99,255,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(45,212,191,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Main chat window container */}
      <div className="relative w-full max-w-[740px] h-screen max-h-screen flex flex-col bg-[#1a1d27] border-x border-white/10 z-10">
        
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-[#1a1d27] shrink-0">
          {/* Back button */}
          <Link
            href="/"
            className="p-2 -ml-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 text-white/50 hover:text-white transition-all duration-200"
            title="Back to Home"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#2dd4bf] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" className="w-5 h-5">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M12 11V7" />
              <circle cx="12" cy="5" r="2" />
              <path d="M8 15h0M16 15h0" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h2 className="font-sans font-semibold text-[15px] text-[#f0f0f5] leading-none">
              Digital Brolly Assistant
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-[#8b8fa8] mt-1.5 leading-none">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Online · Ready to help
            </div>
          </div>
          <div className="ml-auto text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#6c63ff]/15 text-[#a78bfa] border border-[#6c63ff]/30">
            RAG Powered
          </div>
        </div>

        {/* Message feed */}
        <div className="flex-grow overflow-y-auto px-5 py-6 flex flex-col gap-6">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 items-start ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                {msg.sender === "user" ? (
                  <div className="w-8 h-8 rounded-full bg-[#22263a] text-[#8b8fa8] border border-white/10 text-xs font-semibold font-sans flex items-center justify-center shrink-0">
                    You
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#2dd4bf] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.6" className="w-3.5 h-3.5">
                      <rect x="2" y="8" width="16" height="9" rx="2" />
                      <path d="M10 8V5" />
                      <circle cx="10" cy="3.5" r="1.5" />
                    </svg>
                  </div>
                )}

                {/* Bubble */}
                {msg.sender === "user" ? (
                  <div className="bg-gradient-to-br from-[#6c63ff] to-[#7c3aed] text-white px-4 py-2.5 rounded-[18px] rounded-br-[4px] text-[14px] leading-relaxed max-w-[70%] shadow-sm">
                    {msg.text}
                  </div>
                ) : msg.isError ? (
                  <div className="text-[13px] text-[#f87171] px-4 py-2.5 bg-red-500/10 border border-red-500/20 rounded-lg max-w-[92%] shadow-sm">
                    {msg.text}
                  </div>
                ) : (
                  <BotResponse answer={msg.text} contactInfo={msg.contactInfo} />
                )}
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 items-start"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#2dd4bf] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.6" className="w-3.5 h-3.5">
                    <rect x="2" y="8" width="16" height="9" rx="2" />
                    <path d="M10 8V5" />
                    <circle cx="10" cy="3.5" r="1.5" />
                  </svg>
                </div>
                <div className="bg-transparent py-2 px-1 flex gap-1.5 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#8b8fa8] animate-[bounce_1.2s_infinite]" />
                  <span className="w-2 h-2 rounded-full bg-[#8b8fa8] animate-[bounce_1.2s_infinite_0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#8b8fa8] animate-[bounce_1.2s_infinite_0.4s]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Pills */}
        <div className="flex flex-wrap gap-2 px-5 py-2.5 bg-[#1a1d27] border-t border-white/5 shrink-0 overflow-x-auto">
          {["Course Syllabus", "Course Fees", "Placement Support", "Trainer Info"].map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              disabled={isLoading}
              className="text-xs font-sans px-3 py-1.5 rounded-full border border-white/10 hover:border-[#6c63ff]/50 bg-[#22263a] text-[#8b8fa8] hover:text-[#f0f0f5] hover:bg-[#6c63ff]/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shrink-0 cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input area */}
        <div className="flex gap-3 items-center px-4 py-3 border-t border-white/10 bg-[#1a1d27] shrink-0">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Ask about fees, schedule, admissions…"
            className="flex-grow px-4 py-2.5 border border-white/10 rounded-full text-sm font-sans bg-[#22263a] text-[#f0f0f5] placeholder-[#8b8fa8] outline-none focus:border-[#6c63ff]/50 transition-colors duration-200"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !inputValue.trim()}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#7c3aed] border-none flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.04] active:scale-[0.96] transition-transform duration-150 cursor-pointer"
            title="Send"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-4 h-4">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
