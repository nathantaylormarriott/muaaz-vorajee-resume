import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Briefcase, GraduationCap, Linkedin, Award, ArrowUpRight, Download } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ShinyLink } from "@/components/ui/shiny-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muaaz Vorajee — IT Support Professional" },
      {
        name: "description",
        content:
          "Muaaz Vorajee — IT Support Professional based in Birmingham. Level 1 support experience across calls, email and support portals. Open to IT opportunities.",
      },
      {
        name: "keywords",
        content:
          "Muaaz Vorajee, IT Support, Technical Support, Customer Service Analyst, Level 1 Support, Birmingham, TalentBegins",
      },
      { property: "og:title", content: "Muaaz Vorajee — IT Support Professional" },
      {
        property: "og:description",
        content: "IT Support Professional · Level 1 Support · Birmingham, UK · Open to opportunities.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
      { name: "twitter:title", content: "Muaaz Vorajee — IT Support Professional" },
      {
        name: "twitter:description",
        content: "IT Support Professional · Level 1 Support · Birmingham, UK · Open to opportunities.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muaaz Vorajee",
          jobTitle: "IT Support Professional",
          telephone: "+447498703277",
          email: "vorajeemuaaz@gmail.com",
          url: "https://www.linkedin.com/in/muaaz-vorajee-b39011315",
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
const PHONE_DISPLAY = "07498 703277";
const EMAIL = "vorajeemuaaz@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/muaaz-vorajee-b39011315";
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

const certifications = ["The Duke of Edinburgh's Award"];

const experience = [
  {
    role: "Customer Service Analyst",
    company: "TalentBegins",
    period: "June 2024 – August 2026",
    sub: "United Kingdom · 24×7 multi-channel support for application users and administrators",
    points: [
      "Provided level one support for users and administrators of applications, ensuring timely resolution of customer requests.",
      "Managed and responded to customer calls, portal requests, and emails on a 24×7 team.",
      "Assisted customers via multiple support channels and consistently followed documented procedures.",
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6 lg:grid-cols-12">

          <Reveal delay={0} className="md:col-span-6 lg:col-span-7">
            <TiltCard className="h-full p-8 md:p-10">
              <Label>Profile</Label>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
                Muaaz Vorajee
              </h1>
              <p className="mt-3 text-lg font-medium text-primary md:text-xl">
                IT Support Professional
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Level 1 Support · Multi-channel · Open to IT opportunities
              </p>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                IT Support Professional with experience providing first-line support and helping users
                resolve technical issues in a fast-paced support environment. In my previous role, I
                provided Level 1 support to users and administrators, handling requests through calls,
                emails and support portals.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                I&apos;m comfortable troubleshooting issues, following established processes,
                communicating clearly with users and making sure problems are handled efficiently from
                start to finish. I&apos;m particularly interested in building my career within IT and
                developing my skills across technical support, systems, networking and cybersecurity.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                I enjoy solving problems, learning new technologies and finding practical solutions when
                things don&apos;t go as expected. I&apos;m currently open to IT opportunities where I can
                continue developing professionally, gain hands-on technical experience and contribute to a
                strong support team.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Birmingham, England</span>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={80} className="md:col-span-6 lg:col-span-5">
            <TiltCard className="h-full p-6 md:p-8" intensity={1}>
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

          <Reveal delay={420} className="md:col-span-6 lg:col-span-12">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Certifications</Label>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80"
                  >
                    <Award className="h-3.5 w-3.5 text-primary" />
                    {c}
                  </span>
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
