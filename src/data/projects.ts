import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export type Member = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "Em produção" | "Beta" | "Em desenvolvimento";
  tags: string[];
  cover: string;
  accent: "orange" | "green" | "blue";
  members: Member[];
};

export const projects: Project[] = [
  {
    slug: "pulse-analytics",
    name: "Pulse Analytics",
    tagline: "Dashboard de métricas em tempo real",
    description:
      "Plataforma SaaS de analytics que ajuda pequenas empresas a entenderem seus dados sem precisar contratar analistas. Stack completa: ingestão em tempo real, API GraphQL, dashboard React e infraestrutura serverless.",
    status: "Beta",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    cover: p1,
    accent: "blue",
    members: [
      { name: "Marina Costa", role: "Frontend & Design", bio: "3º ano de Engenharia de Software. Apaixonada por design systems.", avatar: "https://i.pravatar.cc/120?img=47" },
      { name: "Lucas Ferreira", role: "Backend & DevOps", bio: "Estuda Ciência da Computação. Curte arquitetura distribuída.", avatar: "https://i.pravatar.cc/120?img=12" },
      { name: "Aisha Mendes", role: "Data Engineering", bio: "Sistemas de Informação. Pipelines, SQL e visualização.", avatar: "https://i.pravatar.cc/120?img=32" },
    ],
  },
  {
    slug: "orbit-learn",
    name: "Orbit Learn",
    tagline: "Plataforma de microcursos colaborativos",
    description:
      "Aplicação web para criação de trilhas de aprendizado curtas. Pensada para comunidades técnicas. Permite gravar lições, criar quizzes e acompanhar progresso. Foi construída do zero pela equipe Lunico em 12 semanas.",
    status: "Em produção",
    tags: ["Next.js", "Supabase", "TypeScript"],
    cover: p2,
    accent: "orange",
    members: [
      { name: "Diego Almeida", role: "Tech Lead", bio: "Análise e Desenvolvimento. Mentor de novos membros.", avatar: "https://i.pravatar.cc/120?img=68" },
      { name: "Camila Rocha", role: "UX & Frontend", bio: "Design Digital. Pesquisa de usuário e prototipagem.", avatar: "https://i.pravatar.cc/120?img=45" },
      { name: "Rafael Tanaka", role: "Backend", bio: "Engenharia da Computação. APIs e autenticação.", avatar: "https://i.pravatar.cc/120?img=15" },
      { name: "Beatriz Lima", role: "QA & Suporte", bio: "Sistemas de Informação. Testes automatizados.", avatar: "https://i.pravatar.cc/120?img=49" },
    ],
  },
  {
    slug: "vertex-ops",
    name: "Vertex Ops",
    tagline: "Console de observabilidade para clusters",
    description:
      "Ferramenta interna de observabilidade que evoluiu para uma startup. Visualiza métricas, logs e traces em uma única superfície. Hoje atende três empresas piloto e está em processo de incorporação.",
    status: "Em desenvolvimento",
    tags: ["Go", "React", "Kubernetes", "Grafana"],
    cover: p3,
    accent: "green",
    members: [
      { name: "Pedro Henrique", role: "Co-fundador & Backend", bio: "Engenharia de Software. Saiu da Lunico para liderar a startup.", avatar: "https://i.pravatar.cc/120?img=33" },
      { name: "Sophia Nunes", role: "Co-fundadora & Produto", bio: "Sistemas de Informação. Cuida de produto e go-to-market.", avatar: "https://i.pravatar.cc/120?img=44" },
    ],
  },
];
