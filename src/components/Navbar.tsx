import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const links = [
  { to: "/", label: "O Lab" },
  { to: "/projetos", label: "Projetos" },
  { to: "/#participar", label: "Participar" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Lunico - início">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {links.map((l) =>
            l.to.startsWith("/#") ? (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ) : (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive && location.pathname === l.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
                }
              >
                {l.label}
              </RouterNavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/#participar">Participar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
