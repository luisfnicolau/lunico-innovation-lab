import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-24">
    <div className="container py-12 grid gap-10 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Logo markClassName="size-8" innerClassName="size-3" textClassName="text-lg" />
        </div>
        <p className="text-sm text-muted-foreground max-w-xs">
          Laboratório de soluções liderado por estudantes de TI. Aprenda construindo de verdade.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Navegação</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-foreground">O Lab</Link></li>
          <li><Link to="/projetos" className="hover:text-foreground">Projetos</Link></li>
          <li><Link to="/#participar" className="hover:text-foreground">Participar</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Contato</h3>
        <p className="text-sm text-muted-foreground">contato@lunico.lab</p>
      </div>
    </div>
    <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Lunico. Construído por estudantes, para estudantes.
    </div>
  </footer>
);
