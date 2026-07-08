import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Terminal,
  ShieldCheck,
  Cloud,
  Infinity as InfinityIcon,
  Network,
  Star,
  Users,
  GraduationCap,
  Briefcase,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";

import heroConsultoria from "@/assets/hero-consultoria.jpg";
import heroSkillsDev from "@/assets/hero-skills-dev.jpg";
import heroAuthority from "@/assets/hero-authority.jpg";
import hero5StarsGoogle from "@/assets/hero-5-stars-google.jpg";
import studentKnowledge from "@/assets/student-knowledge.jpg";
import logoUtah from "@/assets/logo-utah.png";

export const Route = createFileRoute("/cursos/treinamentos")({
  head: () => ({
    meta: [
      { title: "Cursos e Planos de Carreira — Grupo Utah" },
      {
        name: "description",
        content:
          "Planos de Carreira em Linux, Cyber Security, Cloud, DevOps e Networking. Metodologia DILDIP, mentoria individual e a única escola 5 estrelas no Google.",
      },
      { property: "og:title", content: "Cursos e Planos de Carreira — Grupo Utah" },
      {
        property: "og:description",
        content:
          "Deixe de ter um emprego e construa uma carreira em TI com os planos do Grupo Utah.",
      },
    ],
  }),
  component: CursosTreinamentos,
});

const WHATSAPP_CARREIRA =
  "https://wa.me/5511969311515?text=" +
  encodeURIComponent("Vim do site e quero tirar duvidas sobre qual carreira seguir");

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.36-1.67a11.86 11.86 0 0 0 5.69 1.45h.01c6.55 0 11.88-5.32 11.88-11.87a11.8 11.8 0 0 0-3.42-8.43ZM12.06 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.77.99 1-3.67-.23-.38a9.87 9.87 0 0 1-1.52-5.28c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-baseline gap-1 font-display font-black tracking-tight ${className}`}
      aria-label="Grupo Utah — página inicial"
    >
      <span>GRUPO</span>
      <span className="text-[color:var(--red-brand)]">UTAH</span>
      <span className="text-[color:var(--red-brand)]">.</span>
    </Link>
  );
}

const menuItems = [
  { label: "CURSOS", href: "#cursos" },
  { label: "PLANOS DE CARREIRA", href: "#planos" },
  { label: "UTAH CORPORATE", href: "https://utah.com.br/consultoria/" },
  { label: "LOJA VIRTUAL", href: "/loja-virtual" },
  { label: "BLOG", href: "https://utah.com.br/blog/" },
  { label: "TUXCAST", href: "/#podcast" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6 md:px-10">
        <BrandMark className="text-lg text-white" />
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:border-[color:var(--red-brand)] hover:text-[color:var(--red-brand)]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            Menu
          </button>
          <div
            className={[
              "absolute right-0 top-full mt-3 w-64 origin-top-right rounded-md border border-white/10 bg-black/95 p-2 shadow-2xl shadow-black/50 backdrop-blur transition-all duration-300",
              open
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0",
            ].join(" ")}
          >
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white/85 transition-colors hover:bg-white/5 hover:text-[color:var(--red-brand)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

const slides = [
  {
    key: "planos",
    image: heroConsultoria,
    eyebrow: "Planos de Carreira",
    title:
      "Se em 3 anos, seguindo nossos planos, você não chegar nos 5 dígitos, devolvemos seu dinheiro corrigido.",
    highlight: true,
    badges: [
      "Plano Linux",
      "Plano Cyber Security",
      "Plano Cloud Computing",
      "Plano DevOps",
      "Plano Networking",
    ],
    cta: { label: "Conheça os planos", href: "#planos" },
  },
  {
    key: "skills",
    image: heroSkillsDev,
    eyebrow: "Hard Skills × Soft Skills",
    title: "Competência Técnica Admite, Competência Comportamental Demite.",
  },
  {
    key: "compara",
    image: heroAuthority,
    eyebrow: "Diferenciais",
    title: "Quem Compara, escolhe UTAH!",
    features: [
      "Aulas AO VIVO e Presenciais",
      "Maior Carga Horária do Mercado",
      "Mentoria de Carreira Individual",
      "Mentoria em Grupo",
      "Análise de LinkedIn e Currículo",
      "Encaminhamento para Vagas",
      "E muito mais",
    ],
  },
  {
    key: "cinco",
    image: hero5StarsGoogle,
    eyebrow: "Reconhecimento",
    title: "A única escola 5 estrelas no Google",
    stats: [
      { value: "+26 anos", label: "de história" },
      { value: "+87.890", label: "alunos formados" },
    ],
    tagline: "A qualidade de quem foca no aprendizado do aluno.",
  },
] as const;

function Carousel() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    timer.current = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);
  const go = (n: number) => setI((n + slides.length) % slides.length);
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-black">
      {slides.map((s, idx) => (
        <div
          key={s.key}
          className={[
            "absolute inset-0 transition-opacity duration-[900ms] ease-in-out",
            idx === i ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-hidden={idx !== i}
        >
          <img
            src={s.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/85" />
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 md:px-12">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--red-brand)]">
              {s.eyebrow}
            </p>
            <h2
              className={[
                "max-w-4xl font-display font-black leading-[1.05] tracking-tight",
                "highlight" in s && s.highlight
                  ? "text-white text-2xl md:text-4xl"
                  : "text-white text-2xl md:text-4xl",
              ].join(" ")}
            >
              {s.key === "cinco" ? (
                <>
                  A única escola{" "}
                  <span className="text-[color:var(--red-brand)]">5 estrelas</span> no
                  Google
                </>
              ) : s.key === "planos" ? (
                <>
                  Se em <span className="text-[color:var(--red-brand)]">3 anos</span>,
                  seguindo nossos planos, você não chegar nos{" "}
                  <span className="text-[color:var(--red-brand)]">5 dígitos</span>,
                  devolvemos seu dinheiro corrigido.
                </>
              ) : (
                s.title
              )}
            </h2>

            {"badges" in s && s.badges && (
              <ul className="mt-8 flex flex-wrap gap-2">
                {s.badges.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {"features" in s && s.features && (
              <ul className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-black/40 px-4 py-2 text-base text-white backdrop-blur"
                  >
                    <Star className="h-4 w-4 shrink-0 text-[color:var(--red-brand)]" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {"stats" in s && s.stats && (
              <div className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-4">
                {s.stats.map((st) => (
                  <div key={st.label}>
                    <div className="font-display text-4xl font-black text-white md:text-5xl">
                      {st.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-white/60">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {"tagline" in s && s.tagline && (
              <p className="mt-6 max-w-2xl text-lg text-white/80">{s.tagline}</p>
            )}

            {"cta" in s && s.cta && (
              <div className="mt-10">
                <a
                  href={s.cta.href}
                  className="inline-flex items-center gap-2 rounded-md bg-[color:var(--red-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--red-brand-dark)]"
                >
                  {s.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Slide anterior"
        onClick={() => go(i - 1)}
        className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:border-[color:var(--red-brand)] hover:text-[color:var(--red-brand)]"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Próximo slide"
        onClick={() => go(i + 1)}
        className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:border-[color:var(--red-brand)] hover:text-[color:var(--red-brand)]"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.key}
            type="button"
            aria-label={`Ir para o slide ${idx + 1}`}
            onClick={() => go(idx)}
            className={[
              "h-2 rounded-full transition-all",
              idx === i
                ? "w-8 bg-[color:var(--red-brand)]"
                : "w-2 bg-white/40 hover:bg-white/70",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-5 md:items-center md:px-10">
        <div className="md:col-span-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--red-brand)]">
            Metodologia
          </p>
          <h2 className="font-display text-xl font-black leading-tight tracking-tight text-[color:var(--ink)] md:text-3xl">
            Quer saber mais da metodologia{" "}
            <span className="font-black text-[color:var(--red-brand)]">DILDIP</span>{" "}
            <span className="text-neutral-700">(Didactic in Learning, Direct in Practice)</span>{" "}
            desenvolvida pela Utah, e porque quem compara sempre nos escolhe?
          </h2>
          <p className="mt-4 text-sm text-neutral-600">Dá uma olhada no vídeo ao lado.</p>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-200 shadow-xl shadow-black/10 md:col-span-3">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Metodologia DILDIP — Grupo Utah"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function useCountUp(target: number, ref: React.RefObject<HTMLDivElement | null>) {
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1600;
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, ref]);
  return n;
}

function CounterItem({
  value,
  suffix = "",
  prefix = "",
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const n = useCountUp(value, ref);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl font-black text-[color:var(--red-brand)] md:text-4xl">
        {prefix}
        {n.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {label}
      </div>
    </div>
  );
}

function Numbers() {
  return (
    <section className="w-full border-y border-neutral-200 bg-[color:var(--neutral-100)] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-y-10 px-6 md:grid-cols-4 md:gap-x-4 md:px-10">
        <div className="md:border-r md:border-neutral-300 md:px-6">
          <CounterItem value={26} label="anos" />
        </div>
        <div className="md:border-r md:border-neutral-300 md:px-6">
          <CounterItem value={87986} prefix="+" label="alunos formados" />
        </div>
        <div className="md:border-r md:border-neutral-300 md:px-6">
          <CounterItem value={14745} prefix="+" label="projetos Open Source" />
        </div>
        <div className="md:px-6 text-center">
          <div className="font-display text-2xl font-black text-[color:var(--ink)] md:text-3xl">
            Pioneira em <span className="text-[color:var(--red-brand)]">Linux</span>
          </div>
          <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
            desde 1999
          </div>
        </div>
      </div>
    </section>
  );
}

const planos = [
  {
    key: "linux",
    name: "Plano Linux",
    Icon: Terminal,
    cursos: ["LPIC 1", "LPIC 2", "LPIC 3"],
  },
  {
    key: "cyber",
    name: "Plano Cyber Security",
    Icon: ShieldCheck,
    cursos: ["LPIC 1", "Python Hacking", "CompTIA Security+"],
  },
  {
    key: "cloud",
    name: "Plano Cloud Computing",
    Icon: Cloud,
    cursos: ["LPIC 1", "AWS Cloud Practitioner", "AWS Solutions Architect"],
  },
  {
    key: "devops",
    name: "Plano DevOps",
    Icon: InfinityIcon,
    cursos: [
      "LPIC 1",
      "DevOps Tools Engineer",
      "Docker DCA",
      "Kubernetes CKA",
    ],
  },
  {
    key: "net",
    name: "Plano Networking",
    Icon: Network,
    cursos: ["Cisco CCNA", "Cisco CCNP", "Cisco CCIE"],
  },
];

function Planos() {
  return (
    <section
      id="planos"
      className="relative w-full overflow-hidden bg-[color:var(--ink)] py-24 md:py-32"
    >
      {/* wave / gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 0%, rgba(228,0,43,0.35), transparent 55%), radial-gradient(ellipse at 90% 100%, rgba(228,0,43,0.20), transparent 55%), url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 600' preserveAspectRatio='none'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-opacity='0.08' stroke-width='1' d='M0,320 C240,420 480,180 720,260 C960,340 1200,220 1440,300'/%3E%3Cpath fill='none' stroke='%23ffffff' stroke-opacity='0.05' stroke-width='1' stroke-dasharray='4 8' d='M0,420 C240,500 480,300 720,380 C960,460 1200,340 1440,420'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover, cover, 100% 100%",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--red-brand)]">
          Planos de Carreira
        </p>
        <h2 className="max-w-4xl font-display text-3xl font-black leading-[1.05] tracking-tight text-white md:text-5xl">
          Chegou a hora de você deixar de ter um{" "}
          <span className="text-[color:var(--red-brand)]">emprego</span> e começar a
          construir uma <span className="text-[color:var(--red-brand)]">Carreira</span>{" "}
          na Área de TI!
        </h2>

        <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-6">
          {planos.map((p, idx) => {
            const Icon = p.Icon;
            // top row: 3 cards spanning 2 cols each; bottom row: 2 cards spanning 3 cols each
            const span = idx < 3 ? "md:col-span-2" : "md:col-span-3";
            return (
              <article
                key={p.key}
                className={[
                  "group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-all",
                  "hover:-translate-y-1 hover:border-[color:var(--red-brand)] hover:bg-white/[0.07]",
                  span,
                ].join(" ")}
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-[color:var(--red-brand)] text-white shadow-lg shadow-[color:var(--red-brand)]/30">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-xl font-black uppercase tracking-wide text-white md:text-2xl">
                    {p.name}
                  </h3>
                </div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/50">
                  {p.cursos.length} cursos inclusos
                </p>
                <ul className="mb-6 flex flex-1 flex-col gap-2">
                  {p.cursos.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm font-medium text-white"
                    >
                      <GraduationCap className="h-4 w-4 shrink-0 text-[color:var(--red-brand)]" />
                      {c}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_CARREIRA}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:border-[color:var(--red-brand)] hover:bg-[color:var(--red-brand)]"
                >
                  Quero este plano
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Conversion() {
  const steps = [
    { n: "01", label: "Clique no botão abaixo", Icon: ArrowRight },
    { n: "02", label: "Escolha o plano de carreira ou o curso", Icon: GraduationCap },
    { n: "03", label: "Escolha o método de pagamento", Icon: Briefcase },
    { n: "04", label: "Receba o acesso", Icon: Sparkles },
  ];
  return (
    <section className="w-full bg-[color:var(--neutral-100)] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 md:px-10">
        <div className="flex flex-col rounded-md border border-neutral-200 bg-white p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--red-brand)]">
            Consultoria de Carreira
          </p>
          <h3 className="font-display text-2xl font-black leading-tight text-[color:var(--ink)] md:text-3xl">
            Não sabe por onde começar, está em um processo de migração, ou quer ter
            certeza de qual plano é o melhor para a sua carreira?
          </h3>
          <p className="mt-4 text-neutral-600">
            Fale agora com um de nossos Consultores de Carreira:
          </p>
          <a
            href={WHATSAPP_CARREIRA}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--red-brand)] px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-[color:var(--red-brand-dark)]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar com um Especialista em Carreira
          </a>
          <div className="relative mt-8 h-56 overflow-hidden rounded-md border border-neutral-200">
            <img
              src={heroConsultoria}
              alt="Mentoria e consultoria de carreira Grupo Utah"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white">
              <Users className="h-4 w-4 text-[color:var(--red-brand)]" />
              Mentoria humana
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-md border border-neutral-200 bg-white p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--red-brand)]">
            Compra Online
          </p>
          <h3 className="font-display text-2xl font-black leading-tight text-[color:var(--ink)] md:text-3xl">
            Já tomou a decisão de cair pra dentro e já escolheu o seu plano.{" "}
            <span className="text-[color:var(--red-brand)]">Compre agora Online!</span>
          </h3>
          <p className="mt-4 text-neutral-600">Invista agora na sua carreira.</p>
          <ol className="mt-6 grid gap-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex items-center gap-4 rounded-md border border-neutral-200 bg-[color:var(--neutral-100)] px-4 py-3"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--ink)] font-display text-sm font-black text-white">
                  {s.n}
                </span>
                <span className="text-sm font-medium text-[color:var(--ink)]">
                  {s.label}
                </span>
                <s.Icon className="ml-auto h-4 w-4 text-[color:var(--red-brand)]" />
              </li>
            ))}
          </ol>
          <a
            href="/loja-virtual"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[color:var(--red-brand)] px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-[color:var(--red-brand-dark)]"
          >
            Quero investir agora na minha carreira!
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="relative mt-8 h-56 overflow-hidden rounded-md border border-neutral-200">
            <img
              src={studentKnowledge}
              alt="Conquista profissional e investimento em carreira"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white">
              <Sparkles className="h-4 w-4 text-[color:var(--red-brand)]" />
              Invista em você
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.66.66 1.34 1.07 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.66 1.07-1.34 1.38-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63 19.1.33 18.23.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
  </svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
);
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const XSocialIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 6 4.39 10.97 10.13 11.87v-8.4H7.08V12h3.05V9.36c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.93-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.4C19.61 22.97 24 18 24 12z" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/grupoutah", Icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/grupoutah", Icon: YoutubeIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/grupoutah",
    Icon: LinkedInIcon,
  },
  { label: "X (Twitter)", href: "https://www.x.com/grupoutah", Icon: XSocialIcon },
  { label: "Facebook", href: "https://www.facebook.com/grupoutah", Icon: FacebookIcon },
];

function Footer() {
  const col1 = [
    { label: "Trabalhe conosco", href: "https://www.utah.com.br/jobs" },
    { label: "Cursos do Grupo Utah", href: "https://utah.com.br/cursos/treinamentos/" },
    { label: "Cases", href: "https://utah.com.br/consultoria/cases/" },
    { label: "Quem somos", href: "https://utah.com.br/consultoria/quem-somos/" },
    {
      label: "Política de Privacidade",
      href: "https://utah.com.br/politica-de-privacidade/1-1/",
    },
  ];
  const col2 = [
    { label: "Suporte", href: "https://Utah.com.br/consultoria/suporte/" },
    { label: "Cyber Segurança", href: "https://utah.com.br/cybersecurity/" },
    { label: "Tecnologias", href: "https://utah.com.br/consultoria/tecnologias/" },
    { label: "Nossos clientes", href: "https://utah.com.br/consultoria/clientes/" },
  ];
  return (
    <footer className="w-full bg-[color:var(--ink)] text-white">
      <div className="px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Home
            </h3>
            <ul className="mt-6 space-y-3">
              {col1.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-white/80 transition-colors hover:text-[color:var(--red-brand)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Consultoria
            </h3>
            <ul className="mt-6 space-y-3">
              {col2.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-white/80 transition-colors hover:text-[color:var(--red-brand)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Endereço
            </h3>
            <p className="mt-6 flex items-start gap-3 text-sm text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--red-brand)]" />
              Rua Cubatão, 436, CJ 41 — Paraíso, São Paulo
            </p>
            <div className="mt-4 overflow-hidden rounded-md border border-white/10">
              <iframe
                title="Localização Grupo Utah"
                src="https://www.google.com/maps?q=Rua+Cubat%C3%A3o+436+Para%C3%ADso+S%C3%A3o+Paulo&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            Siga o Grupo Utah
          </h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-neutral-500 transition-colors hover:border-[color:var(--red-brand)] hover:bg-white/5 hover:text-[color:var(--red-brand)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img
              src={logoUtah}
              alt="Logotipo Grupo Utah"
              className="h-10 w-auto"
              loading="lazy"
            />
            <BrandMark className="text-xl text-white" />
          </div>
          <p className="text-xs text-white/50">
            © 2026 Grupo Utah. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_CARREIRA}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Fale com um especialista em carreira pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function CursosTreinamentos() {
  return (
    <div id="top" className="w-full bg-white text-[color:var(--ink)]">
      <Header />
      <main id="cursos" className="pt-16">
        <Carousel />
        <Methodology />
        <Numbers />
        <Planos />
        <Conversion />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
