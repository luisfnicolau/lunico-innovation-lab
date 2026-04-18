import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects, type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

const accentMap: Record<Project["accent"], string> = {
  orange: "text-primary border-primary/30 bg-primary/10",
  green: "text-brand-green border-brand-green/30 bg-brand-green/10",
  blue: "text-brand-blue border-brand-blue/30 bg-brand-blue/10",
};

const Projects = () => {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" aria-hidden />
        <div className="absolute -top-20 right-0 size-96 bg-brand-green/10 blur-3xl pointer-events-none" aria-hidden />
        <div className="container relative py-20 lg:py-28">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Project Registry</span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold tracking-tighter mt-3 mb-6 max-w-3xl">
            O que estudantes da Lunico já <span className="text-gradient-spark">enviaram</span>.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Cada projeto abaixo foi construído por um squad da Lunico — do design ao deploy. Algumas viraram produtos,
            outras viraram startups. Todas viraram aprendizado.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="container py-20 lg:py-24 space-y-24">
        {projects.map((p, i) => (
          <article key={p.slug} className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start animate-fade-in">
            <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-soft">
                <img
                  src={p.cover}
                  alt={`Captura de tela do projeto ${p.name}`}
                  loading="lazy"
                  width={1024}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className={`${accentMap[p.accent]} font-mono text-[10px] uppercase tracking-widest`}>
                  {p.status}
                </Badge>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Squad {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-3">{p.name}</h2>
              <p className="text-lg text-foreground/80 mb-4">{p.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>

              <ul className="flex flex-wrap gap-2 mb-8" aria-label="Tecnologias usadas">
                {p.tags.map((t) => (
                  <li key={t} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                    {t}
                  </li>
                ))}
              </ul>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Quem construiu</h3>
                <ul className="space-y-4">
                  {p.members.map((m) => (
                    <li key={m.name} className="flex gap-4 items-start">
                      <img
                        src={m.avatar}
                        alt={`Foto de ${m.name}`}
                        loading="lazy"
                        width={48}
                        height={48}
                        className="size-12 rounded-full object-cover border border-border"
                      />
                      <div>
                        <p className="font-semibold text-sm leading-tight">
                          {m.name} <span className="text-muted-foreground font-normal">· {m.role}</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{m.bio}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
