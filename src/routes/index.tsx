import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Briefcase, GraduationCap, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ShinyLink } from "@/components/ui/shiny-button";
import { SITE, pageShareMeta } from "@/lib/site-meta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageShareMeta(),
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: SITE.name,
          jobTitle: SITE.role,
          image: SITE.profileImage,
          telephone: "+447498703277",
          email: SITE.email,
          url: SITE.linkedInUrl,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Birmingham",
            addressRegion: "England",
            addressCountry: "UK",
          },
          alumniOf: ["King Edward VI College", "Higham Lane School"],
          knowsAbout: ["IT Support", "Technical Support", "Customer Service", "Customer Analysis"],
        }),
      },
    ],
  }),
  component: Resume,
});

const PHONE = "+447498703277";
const PHONE_DISPLAY = SITE.phoneDisplay;
const EMAIL = SITE.email;
const LINKEDIN_URL = SITE.linkedInUrl;
const RESUME_PDF_PATH = "/Muaaz-Vorajee-Resume.pdf";
const RESUME_PDF_FILENAME = "Muaaz Vorajee - Resume.pdf";

const competencies = [
  "Customer Service",
  "Customer Analysis",
  "Technical Support",
  "Level 1 IT Support",
  "Calls, Email & Portal Support",
  "Troubleshooting",
  "Process-driven Support",
  "Clear User Communication",
  "Systems & Networking",
  "Cybersecurity (developing)",
];

const experience = [
  {
    role: "Customer Service Analyst",
    company: "TalentBegins",
    period: "June 2024 – August 2026",
    sub: "United Kingdom · Level 1 support on a 24×7 desk · Phone, email & support portal",
    points: [
      "Delivered first-line (Level 1) support to end users and application administrators, helping them resolve issues quickly and return to work with minimal disruption.",
      "Handled inbound requests across phone, email and the support portal—logging, prioritising and working tickets through to completion within agreed service expectations.",
      "Troubleshot common application and access issues by following runbooks and documented procedures, escalating only when required so specialist teams could focus on complex cases.",
      "Communicated clearly with non-technical users: confirming impact, explaining next steps and keeping customers updated while issues were investigated.",
      "Worked as part of a 24×7 rota, maintaining consistent quality and handover discipline during busy periods and out-of-hours cover.",
      "Built strong customer service habits—active listening, accurate note-taking and professional tone—while developing the foundations for a longer-term IT support career.",
    ],
  },
];

const education = [
  {
    degree: "A Levels: English Linguistics, Criminology, Law",
    school: "King Edward VI College",
    period: "September 2023 – 2025",
  },
  {
    degree: "GCSEs: English, Maths, Science, Computer Science, Engineering",
    school: "Higham Lane School",
    period: "September 2018 – June 2023",
  },
];

function Resume() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6 lg:grid-cols-12 lg:items-stretch">

          <Reveal delay={0} className="md:col-span-6 lg:col-span-8 lg:h-full">
            <div className="grid h-full gap-4 sm:gap-5 lg:grid-cols-8 lg:items-stretch">
              <div className="min-h-0 lg:col-span-3 lg:h-full">
                <img
                  src={SITE.profileImage}
                  alt={`${SITE.name} — professional headshot`}
                  width={SITE.profileImageWidth}
                  height={SITE.profileImageHeight}
                  className="aspect-[4/5] w-full max-w-sm rounded-2xl border border-border bg-secondary object-cover object-[center_12%] shadow-sm lg:aspect-auto lg:h-full lg:max-h-none lg:max-w-none lg:min-h-0"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="min-h-0 lg:col-span-5 lg:h-full">
            <TiltCard className="h-full p-8 md:p-10">
              <Label>Profile</Label>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                {SITE.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-primary md:text-xl">
                {SITE.role}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Level 1 Support · Multi-channel · Open to IT opportunities
              </p>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                IT Support Professional with first-line support experience in fast-paced environments.
                I&apos;ve delivered Level 1 support to users and administrators through calls, email and
                support portals—troubleshooting issues, following process, and communicating clearly through
                to resolution.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                I&apos;m developing my career across technical support, systems, networking and
                cybersecurity, and I&apos;m open to IT roles where I can gain hands-on experience and
                contribute to a strong support team.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Birmingham, England</span>
              </div>
            </TiltCard>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="md:col-span-6 lg:col-span-4 lg:h-full">
            <TiltCard className="h-full min-h-0 p-6 md:p-8 lg:flex lg:flex-col" intensity={1}>
              <Label>Contact</Label>
              <div className="mt-4 grid gap-3">
                <ContactButton href={`tel:${PHONE}`} icon={<Phone className="h-5 w-5" />} label="Call" value={PHONE_DISPLAY} tone="primary" />
                <ContactButton href={`https://wa.me/${PHONE.replace("+", "")}`} icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value="Message on WhatsApp" external tone="accent" />
                <ContactButton href={`mailto:${EMAIL}`} icon={<Mail className="h-5 w-5" />} label="Email" value={EMAIL} />
                <ContactButton href={LINKEDIN_URL} icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" value="Connect on LinkedIn" external />
                <DownloadPdfButton href={RESUME_PDF_PATH} filename={RESUME_PDF_FILENAME} />
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={140} className="md:col-span-6 lg:col-span-12">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Core Competencies</Label>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">Where I bring value</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80 transition hover:border-primary/40 hover:bg-accent hover:text-accent-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          {experience.map((job, i) => (
            <Reveal
              key={`${job.company}-${job.role}`}
              delay={200 + i * 80}
              className="md:col-span-6 lg:col-span-12"
            >
              <TiltCard className="h-full p-7 md:p-8" intensity={1}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <Label>{job.period}</Label>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">{job.role}</h3>
                    <div className="mt-1 text-[15px] font-medium text-primary">{job.company}</div>
                    <div className="mt-1 max-w-xl text-sm text-muted-foreground">{job.sub}</div>
                  </div>
                  <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
                    <Briefcase className="h-4 w-4" />
                  </div>
                </div>
                <ul className="mt-6 space-y-2.5 text-[14px] leading-relaxed text-foreground/80">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70">
                      {p}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}

          <Reveal delay={360} className="md:col-span-6 lg:col-span-12">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Education</Label>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                {education.map((e) => (
                  <div key={e.degree} className="flex items-start gap-3">
                    <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{e.period}</div>
                      <div className="mt-0.5 text-[15px] font-semibold text-ink">{e.degree}</div>
                      <div className="text-sm text-muted-foreground">{e.school}</div>
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <ContactForm />
        </div>
      </main>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function ContactButton({
  href, icon, label, value, external, tone,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
  tone?: "primary" | "accent";
}) {
  const isPrimary = tone === "primary";
  const isAccent = tone === "accent";
  const isNativeProtocol = href.startsWith("mailto:") || href.startsWith("tel:");

  const openHref = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isNativeProtocol) return;
    event.preventDefault();
    window.location.href = href;
  };

  const content = (
    <>
      <div className={`rounded-lg p-2.5 ${isPrimary ? "bg-white/15 text-primary-foreground" : isAccent ? "bg-primary/10 text-primary" : "bg-secondary text-primary"}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className={`text-[11px] font-semibold uppercase tracking-wider ${isPrimary ? "text-primary-foreground/80" : isAccent ? "text-primary/80" : "text-muted-foreground"}`}>{label}</div>
        <div className={`mt-0.5 truncate text-sm font-medium ${isPrimary ? "text-primary-foreground" : "text-ink"}`}>{value}</div>
      </div>
      <ArrowUpRight className={`h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isPrimary ? "text-primary-foreground/90" : isAccent ? "text-primary" : "text-primary opacity-0 group-hover:opacity-100"}`} />
    </>
  );

  if (isPrimary) {
    return (
      <ShinyLink
        href={href}
        onClick={openHref}
        className="group flex items-center rounded-xl border border-primary bg-primary px-4 py-3.5 text-primary-foreground shadow-[0_2px_8px_oklch(0.55_0.16_255/0.25)] transition-shadow duration-300 hover:shadow-[0_0_20px_oklch(0.55_0.16_255/0.3)] hover:brightness-110"
      >
        {content}
      </ShinyLink>
    );
  }

  return (
    <a
      href={href}
      onClick={openHref}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 transition ${
        isAccent
          ? "border border-primary/25 bg-accent text-left hover:border-primary/40 hover:bg-accent/80"
          : "border border-border bg-surface hover:border-primary/40 hover:bg-secondary"
      }`}
    >
      {content}
    </a>
  );
}

function DownloadPdfButton({ href, filename }: { href: string; filename: string }) {
  return (
    <a
      href={href}
      download={filename}
      className="group flex w-full items-center gap-4 rounded-xl border border-border bg-surface px-4 py-3.5 text-left transition hover:border-primary/40 hover:bg-secondary"
    >
      <div className="rounded-lg bg-secondary p-2.5 text-primary">
        <Download className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Resume</div>
        <div className="mt-0.5 text-sm font-medium text-ink">Download PDF</div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}
