import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FolderOpen, ArrowLeft } from "lucide-react";

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
            Projetos em <span className="text-gradient-spark">construção</span>.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Nossos squads estão desenvolvendo as primeiras soluções. Em breve, esta página vai mostrar os projetos
            publicados pela comunidade Lunico.
          </p>
        </div>
      </section>

      {/* Empty state */}
      <section className="container py-20 lg:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card/70 p-10 lg:p-14 text-center shadow-soft animate-fade-in">
          <div className="mx-auto mb-6 grid size-16 place-items-center rounded-2xl bg-primary/10 border border-primary/20">
            <FolderOpen className="size-8 text-primary" aria-hidden />
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Ainda não temos projetos publicados
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Estamos no ciclo inicial de construção. Quando os primeiros squads finalizarem as entregas, os projetos
            aparecerão aqui com detalhes, equipe e tecnologias utilizadas.
          </p>

          <Button asChild variant="outline" className="font-semibold uppercase tracking-wide text-xs">
            <Link to="/">
              <ArrowLeft className="mr-2 size-4" />
              Voltar para a Home
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
