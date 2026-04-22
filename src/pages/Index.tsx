import { ArrowRight, Sparkles, Code2, Users, Rocket, GraduationCap, Layers, Compass, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import heroImg from "@/assets/hero-kinetic.jpg";

const WHATSAPP_PHONE = "5521995403334";
const INSTAGRAM_USERNAME = "seu.nicolau";
const PARTICIPAR_MENSAGEM =
  "Oi! Quero participar da Lunico e saber como funciona o proximo cohort.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(PARTICIPAR_MENSAGEM)}`;
const INSTAGRAM_DM_LINK = `https://ig.me/m/${INSTAGRAM_USERNAME}`;

const stats = [
  { value: "14", label: "Sprints ativos" },
  { value: "28", label: "Estudantes" },
  { value: "09", label: "Soluções no ar" },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Sem experiência? Perfeito.",
    body: "Começamos do zero contigo. O conhecimento técnico é construído na prática, em projetos reais, com mentoria de quem já passou pela mesma jornada.",
    accent: "text-primary",
  },
  {
    icon: Layers,
    title: "Ponta a ponta, de verdade.",
    body: "Da ideação ao deploy. Você participa de design, frontend, backend, dados, infraestrutura — até onde fizer sentido pra você.",
    accent: "text-brand-blue",
  },
  {
    icon: Rocket,
    title: "Do laboratório ao mercado.",
    body: "Algumas soluções viram produtos. Outras viram startups. Você decide até onde levar — e a Lunico te apoia em cada etapa.",
    accent: "text-brand-green",
  },
];

const steps = [
  { n: "01", title: "Inscrição", body: "Conte sua motivação. Não pedimos currículo nem prova de código.", color: "primary" },
  { n: "02", title: "Onboarding", body: "Workshop de 2 semanas para nivelar o time e escolher um squad.", color: "brand-blue" },
  { n: "03", title: "Squad & Sprint", body: "Você entra num projeto real e contribui em sprints quinzenais com mentoria.", color: "brand-green" },
  { n: "04", title: "Lançar ou empreender", body: "O projeto vai ao ar. E você decide: continuar, liderar ou criar uma startup.", color: "primary" },
];

const Index = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />
        <div className="absolute -top-40 -right-40 size-[480px] rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute top-1/2 -left-40 size-[360px] rounded-full bg-brand-green/10 blur-3xl pointer-events-none" aria-hidden />

        <div className="container relative grid lg:grid-cols-12 gap-12 pt-16 pb-24 lg:pt-24 lg:pb-32 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="size-2 rounded-full bg-primary animate-pulse" aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary">Cohort 2025 · Inscrições abertas</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-6 text-balance">
              Construa software <span className="text-gradient-spark">de ponta a ponta.</span> Sem precisar saber por onde começar.
            </h1>

            <p className="max-w-[55ch] text-lg text-muted-foreground leading-relaxed mb-10">
              A Lunico é um laboratório de soluções liderado por estudantes de TI. Aqui você junta-se a um squad,
              aprende fazendo e lança produtos reais — do código à conversa com usuário.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="font-semibold uppercase tracking-wide text-xs">
                <a href="#participar">
                  Participar do Lab <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-semibold uppercase tracking-wide text-xs">
                <Link to="/projetos">Ver projetos</Link>
              </Button>
            </div>

            <dl className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8 max-w-md">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                  <dd className="text-3xl font-display font-bold tabular-nums mt-1">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative animate-scale-in">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-spark">
              <img
                src={heroImg}
                alt="Esferas coloridas representando colaboração entre estudantes da Lunico"
                width={1024}
                height={1024}
                className="w-full h-full object-cover animate-float"
              />
            </div>
            <div className="absolute -top-4 -right-4 size-16 bg-brand-green rounded-2xl rotate-12 shadow-tech grid place-items-center" aria-hidden>
              <Sparkles className="size-7 text-brand-green-foreground" />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border py-5 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                <span className="text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3">Sem experiência <span className="size-1.5 bg-primary rotate-45" /></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3 text-brand-blue">Full-stack na prática <span className="size-1.5 bg-brand-blue rotate-45" /></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3">Mentoria entre pares <span className="size-1.5 bg-brand-green rotate-45" /></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3 text-primary">Projetos reais <span className="size-1.5 bg-primary rotate-45" /></span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3">Startups nasceram aqui <span className="size-1.5 bg-brand-green rotate-45" /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="container py-24 lg:py-32">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Manifesto</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-6">
            A faculdade ensina teoria. Aqui você aprende a <em className="not-italic text-brand-blue">enviar</em>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lunico nasceu da inquietação de estudantes que queriam construir software de verdade — com usuários reais,
            decisões reais e código que vai pra produção. Misturamos cursos diferentes, níveis diferentes e ideias diferentes
            num mesmo squad. O resultado: você sai daqui sabendo o que ninguém te ensina em aula.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <article key={p.title} className="group p-8 rounded-2xl border border-border bg-card hover:shadow-soft transition-all duration-500 hover:-translate-y-1">
              <p.icon className={`size-9 ${p.accent} mb-6`} aria-hidden />
              <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container py-24 lg:py-32">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Como funciona</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mt-3">
              Quatro passos. Zero pré-requisitos.
            </h2>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <li key={s.n} className="relative p-6 rounded-2xl bg-card border border-border">
                <div className={`text-xs font-mono font-bold mb-4 text-${s.color}`}>STEP_{s.n}</div>
                <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHO */}
      <section className="container py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
          {[
            { icon: Code2, label: "Engenharia de Software", color: "primary" },
            { icon: Compass, label: "Design Digital", color: "brand-blue" },
            { icon: Users, label: "Sistemas de Informação", color: "brand-green" },
            { icon: Sparkles, label: "Análise e Desenvolvimento", color: "primary" },
          ].map((c) => (
            <div key={c.label} className="aspect-square rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:shadow-soft transition-all">
              <c.icon className={`size-7 text-${c.color}`} aria-hidden />
              <p className="text-sm font-semibold leading-tight">{c.label}</p>
            </div>
          ))}
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Quem entra</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-6">
            Estudantes curiosos de qualquer curso de TI.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Misturar perfis é o segredo. Backend conversa com design. Dados conversa com produto. Você aprende
            o que precisa pra contribuir — e descobre o que ama fazer no caminho.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="participar" className="container pb-24 lg:pb-32 scroll-mt-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-spark p-10 md:p-16 text-primary-foreground shadow-spark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)] pointer-events-none" aria-hidden />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Pronto pra construir algo que vai pro mundo?
            </h2>
            <p className="text-lg/relaxed opacity-90 mb-8">
              As inscrições para o próximo cohort estão abertas. Sem prova, sem currículo. Só uma conversa
              pra entender o que te move.
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary" className="font-semibold uppercase tracking-wide text-xs">
                    Quero participar <ArrowRight className="ml-2 size-4" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Como voce prefere falar com a Lunico?</DialogTitle>
                    <DialogDescription>
                      Escolha um canal para iniciar a conversa agora.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-3">
                    <Button asChild className="justify-start gap-2">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                        <MessageCircle className="size-4" />
                        Abrir WhatsApp
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="justify-start gap-2">
                      <a href={INSTAGRAM_DM_LINK} target="_blank" rel="noreferrer">
                        <Instagram className="size-4" />
                        Enviar direct no Instagram
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold uppercase tracking-wide text-xs">
                <Link to="/projetos">Ver o que já construímos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
