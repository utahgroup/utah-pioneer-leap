import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  GraduationCap,
  Wrench,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Terminal,
  Code2,
  Infinity as InfinityIcon,
  Building2,
  Boxes,
  Cloud,
  BrainCircuit,
  Users,
  Lock,
  Atom,
  Mail,
  MapPin,
  Instagram,
} from "lucide-react";

import heroCursos from "@/assets/hero-cursos.jpg";
import heroConsultoria from "@/assets/hero-consultoria.jpg";
import heroSeguranca from "@/assets/hero-seguranca.jpg";
import heroDesenvolvimento from "@/assets/hero-desenvolvimento.jpg";
import logoUtah from "@/assets/logo-utah.png";
import tuxcastLogo from "@/assets/tuxcast-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511969311515?text=" +
  encodeURIComponent(
    "Quero caminhar ao lado de gigantes, com a pioneira em Linux no Brasil!",
  );

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.36-1.67a11.86 11.86 0 0 0 5.69 1.45h.01c6.55 0 11.88-5.32 11.88-11.87a11.8 11.8 0 0 0-3.42-8.43ZM12.06 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.77.99 1-3.67-.23-.38a9.87 9.87 0 0 1-1.52-5.28c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

const heroItems = [
  {
    key: "cursos",
    number: "01",
    title: "Cursos e Planos de Carreira",
    desc: "Formações completas em Linux, DevOps, Cloud, Cibersegurança e IA — com metodologia própria de Soft + Hard Skills.",
    icon: GraduationCap,
    image: heroCursos,
  },
  {
    key: "consultoria",
    number: "02",
    title: "Consultoria e Suporte Especializado",
    desc: "Mais de 25 anos entregando projetos de Open Source, Cloud e infraestrutura crítica para as maiores empresas do país.",
    icon: Wrench,
    image: heroConsultoria,
  },
  {
    key: "seguranca",
    number: "03",
    title: "Segurança Cibernética",
    desc: "Do pentest à governança. Proteção ofensiva e defensiva com pesquisa aplicada em criptografia pós-quântica.",
    icon: ShieldCheck,
    image: heroSeguranca,
  },
  {
    key: "desenvolvimento",
    number: "04",
    title: "Desenvolvimento Pessoal",
    desc: "A primeira escola a desenvolver Soft Skills dentro de uma formação de Hard Skills. Carreira, não emprego.",
    icon: Sparkles,
    image: heroDesenvolvimento,
  },
];

const marqueePhrases = [
  "Meus Parabéns, você está na Pioneira em Linux do Brasil!",
  "Chegou a hora de você deixar de ter um emprego e construir uma Carreira!",
  "Você tem apenas uma vida, ela é única, não dá para viver na mediocridade.",
  "A Primeira escola a desenvolver Soft Skills dentro de uma formação de Hard Skills.",
  "Se em 3 anos você não conquistar salários de R$ 10.000,00 devolvemos seu investimento.",
  "Do Linux a Segurança Cibernética. Da Segurança a IA. Da IA a Computação Quântica.",
];

const timeline = [
  { year: "1999", title: "Pioneira em Linux", Icon: Terminal },
  { year: "2002", title: "Especialista Open Source", Icon: Code2 },
  { year: "2005", title: "DevOps", Icon: InfinityIcon },
  { year: "2012", title: "Grupo Utah", Icon: Building2 },
  { year: "2015", title: "Virtualização e Containers", Icon: Boxes },
  { year: "2018", title: "Cloud Computing", Icon: Cloud },
  { year: "2019", title: "Inteligência Artificial e ML", Icon: BrainCircuit },
  { year: "2021", title: "Soft Skills", Icon: Users },
  { year: "2022", title: "Segurança Cibernética", Icon: Lock },
  { year: "2026", title: "Computação Quântica", Icon: Atom },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-baseline gap-1 font-display font-black tracking-tight ${className}`}
      aria-label="Grupo Utah — página inicial"
    >
      <span>GRUPO</span>
      <span className="text-[color:var(--red-brand)]">UTAH</span>
      <span className="text-[color:var(--red-brand)]">.</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "História", href: "#historia" },
    { label: "Podcast", href: "#podcast" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <BrandMark className="text-lg" />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-[color:var(--red-brand)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Fale com o Grupo Utah pelo WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[color:var(--red-brand)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Fale conosco</span>
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-md text-neutral-700 md:hidden"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-neutral-800"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function LogoHero() {
  return (
    <section className="logo-hero-bg relative flex min-h-[70vh] items-center justify-center md:min-h-[85vh]">
      <img
        src={logoUtah}
        alt="Logotipo Grupo Utah"
        width={1200}
        height={720}
        className="relative z-10 h-auto w-[32rem] max-w-[92vw] md:w-[48rem]"
        loading="eager"
      />
    </section>
  );
}

function Hero() {
  const [active, setActive] = useState(0);
  return (
    <section id="servicos" className="relative w-full">
      <div className="w-full pb-10">
        <div className="flex h-[560px] w-full flex-col gap-2 md:h-[600px] md:flex-row">
          {heroItems.map((item, i) => {
            const isActive = i === active;
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-label={item.title}
                className={[
                  "group relative overflow-hidden rounded-none text-left transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]",
                  "border border-white/5",
                  "md:h-full",
                  isActive ? "md:flex-[4]" : "md:flex-1",
                  isActive ? "flex-[3]" : "flex-1",
                ].join(" ")}
              >
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className={[
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                    isActive ? "scale-105 opacity-100" : "scale-100 opacity-60",
                  ].join(" ")}
                />
                <div
                  className={[
                    "absolute inset-0 transition-colors duration-500",
                    isActive ? "bg-black/55" : "bg-black/75 group-hover:bg-black/60",
                  ].join(" ")}
                />
                <div
                  className={[
                    "absolute inset-0 flex items-end p-5 transition-opacity duration-300",
                    isActive ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                >
                  <div className="flex w-full items-end justify-between gap-3 md:hidden">
                    <span className="text-xs font-mono text-white/60">{item.number}</span>
                    <span className="text-sm font-semibold text-white">{item.title}</span>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="hidden md:block">
                    <div className="mb-4 text-xs font-mono text-white/50">{item.number}</div>
                    <div
                      className="font-display text-lg font-bold uppercase tracking-wider text-white"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
                <div
                  className={[
                    "absolute inset-0 flex flex-col justify-between p-6 md:p-10 transition-all duration-500",
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white/60">{item.number} / 04</span>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--red-brand)] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-black leading-tight text-white md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
                      {item.desc}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Saber mais
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const line = marqueePhrases.join("   ◆   ") + "   ◆   ";
  return (
    <div
      className="marquee-container relative w-full overflow-hidden border-y border-white/5 bg-[color:var(--ink)] py-5"
      aria-label="Manifesto Grupo Utah"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="mr-8 font-display text-sm font-bold uppercase tracking-[0.15em] text-white md:text-base"
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

function History() {
  return (
    <section id="historia" className="relative w-full bg-[color:var(--neutral-100)] py-24 md:py-32">
      <div>
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--red-brand)]">
              Nossa história
            </p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-[color:var(--ink)] md:text-6xl">
              De <span className="text-[color:var(--red-brand)]">Pioneira em Linux</span>{" "}
              no Brasil à primeira consultoria em{" "}
              <span className="text-[color:var(--red-brand)]">Quantum Computing</span>{" "}
              Open Source.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-neutral-700">
              Fundada em <strong>1999</strong>, o Grupo Utah iniciou sua história trazendo
              as maiores empresas de Linux para o Brasil — <strong>Red Hat</strong> e{" "}
              <strong>Canonical</strong>. Nossa jornada começou como especialista Open
              Source, passando por Cloud Computing, Segurança Cibernética e Inteligência
              Artificial.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Agora um dos nossos maiores projetos é a pesquisa e desenvolvimento de{" "}
              <strong>algoritmos quânticos</strong> com foco em Segurança Cibernética.
            </p>
            <div className="mt-10 flex justify-center">
              <img
                src={logoUtah}
                alt="Logotipo Grupo Utah"
                width={320}
                height={220}
                className="h-auto w-56 md:w-72"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="hidden md:block">
              <div className="absolute left-0 right-0 top-[46px] h-px bg-neutral-300" />
              <ol className="relative flex gap-6 overflow-x-auto pb-4">
                {timeline.map(({ year, title, Icon }, idx) => (
                  <li
                    key={year}
                    className="flex min-w-[160px] shrink-0 flex-col items-center text-center"
                  >
                    <div className="relative z-10 grid h-24 w-24 place-items-center rounded-full border border-neutral-200 bg-white shadow-sm transition-colors hover:border-[color:var(--red-brand)]">
                      <Icon
                        className={
                          idx === timeline.length - 1
                            ? "h-9 w-9 text-[color:var(--red-brand)]"
                            : "h-9 w-9 text-[color:var(--ink)]"
                        }
                      />
                    </div>
                    <div className="mt-4 font-display text-2xl font-black text-[color:var(--red-brand)]">
                      {year}
                    </div>
                    <div className="mt-1 max-w-[140px] text-xs font-semibold uppercase tracking-wider text-neutral-700">
                      {title}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <ol className="relative md:hidden">
              <div className="absolute bottom-0 left-6 top-0 w-px bg-neutral-300" />
              {timeline.map(({ year, title, Icon }, idx) => (
                <li key={year} className="relative flex gap-5 pb-8">
                  <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neutral-200 bg-white">
                    <Icon
                      className={
                        idx === timeline.length - 1
                          ? "h-5 w-5 text-[color:var(--red-brand)]"
                          : "h-5 w-5 text-[color:var(--ink)]"
                      }
                    />
                  </div>
                  <div>
                    <div className="font-display text-xl font-black text-[color:var(--red-brand)]">
                      {year}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-neutral-800">
                      {title}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  }
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="px-6">
        <div className="grid gap-12 rounded-none border border-neutral-200 bg-[color:var(--neutral-100)] p-8 md:grid-cols-12 md:p-16">
          <div className="md:col-span-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--red-brand)]">
              Newsletter
            </p>
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-[color:var(--ink)] md:text-5xl">
              Fique por dentro das novidades do{" "}
              <span className="text-[color:var(--red-brand)]">Grupo Utah</span>.
            </h2>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <p className="text-neutral-600">
              Conteúdos sobre Open Source, Cibersegurança, IA e Computação Quântica direto
              no seu e-mail. Sem spam.
            </p>
            <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="h-12 w-full rounded-md border border-neutral-300 bg-white pl-11 pr-4 text-sm text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--red-brand)]"
                  aria-label="Seu e-mail"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--red-brand)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--red-brand-dark)]"
              >
                Assinar
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {sent && (
              <p className="mt-3 text-sm text-[color:var(--red-brand)]">
                Recebido. Obrigado por assinar!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.52 17.34a.75.75 0 0 1-1.03.25c-2.82-1.72-6.36-2.11-10.54-1.16a.75.75 0 1 1-.33-1.46c4.56-1.04 8.48-.59 11.65 1.34.36.22.47.68.25 1.03Zm1.47-3.28a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.96-1.4a.94.94 0 1 1-.55-1.8c4.37-1.32 9.79-.68 13.5 1.6.44.27.58.85.3 1.29Zm.13-3.42C15.24 8.42 8.7 8.19 5.04 9.3a1.13 1.13 0 1 1-.66-2.16c4.21-1.28 11.43-1.02 15.94 1.66a1.13 1.13 0 1 1-1.2 1.85Z" />
  </svg>
);

function Podcast() {
  return (
    <section
      id="podcast"
      className="relative w-full overflow-hidden bg-[color:var(--ink)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[color:var(--red-brand)]/20 blur-3xl" />
      <div className="px-6">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--red-brand)]">
              Podcast Grupo Utah
            </p>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
              Assista o nosso Podcast:{" "}
              <span className="text-[color:var(--red-brand)]">TUXCAST</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Conversas sem filtro sobre Linux, carreira em tecnologia, Cibersegurança e
              o futuro da Computação Quântica no Brasil.
            </p>
            <a
              href="https://open.spotify.com/show/tuxcast"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition-transform hover:scale-[1.02]"
            >
              <SpotifyIcon className="h-5 w-5 text-[#1DB954]" />
              Ouvir no Spotify
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-none border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-10">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--red-brand)]" />
                  On Air
                </div>
                <div>
                  <div className="font-display text-[6rem] font-black leading-none text-white md:text-[8rem]">
                    TUX
                    <span className="text-[color:var(--red-brand)]">.</span>
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-white/60">
                    CAST
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <footer id="contato" className="w-full bg-[color:var(--ink)] text-white">
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

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <BrandMark className="text-xl text-white" />
          <p className="text-xs text-white/50">
            © 2026 Grupo Utah. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramFab() {
  return (
    <a
      href="https://www.instagram.com/grupoutah"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Siga o Grupo Utah no Instagram"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <Instagram className="h-7 w-7" />
    </a>
  );
}

function Index() {
  return (
    <div id="top" className="bg-white text-[color:var(--ink)]">
      <main>
        <LogoHero />
        <Hero />
        <Marquee />
        <History />
        <Newsletter />
        <Podcast />
      </main>
      <Footer />
      <InstagramFab />
    </div>
  );
}
