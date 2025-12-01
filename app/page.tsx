"use client";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  initials: string;
  summary: string;
  avatar?: string;
}

interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  achievements: string[];
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
}

interface Education {
  id: string;
  level: string;
  institution: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
}

interface SkillCategory {
  category: string;
  skills: string[];
}

interface Language {
  language: string;
  proficiency: "Native" | "Fluent" | "Advanced" | "Basic";
}

interface CVData {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
  languages: Language[];
}

interface CVTemplateProps {
  data: CVData;
  className?: string;
}

const Data: CVData = {
  personalInfo: {
    name: "Koua Mohamed Anis",
    title: "Software Engineer",
    initials: "KMA",
    summary:
      "A 19-year-old Software Engineer with 5+ years building scalable systems, networking libraries, developer tools, and full-stack applications. Specializes in backend engineering, distributed systems, protocol design, low-level systems programming and performance-oriented software. Passionate about understanding how things work under the hood and shipping reliable, high-impact tools.",
  },

  contactInfo: {
    email: "m_koua@estin.dz",
    phone: "+213 542910479",
    location: "Sétif, Algeria",
    github: "github.com/zaixrx",
    linkedin: "https://www.linkedin.com/in/mohamed-anis-koua-b61547350/",
  },

  skills: [
    {
      category: "Programming Languages",
      skills: ["Go", "Rust", "TypeScript", "C", "C++", "C#", "SQL", "..."],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Next.js",
        "Express.js",
        "Socket.io",
        "Vite",
        "TailwindCSS",
        "ShadCN",
        "PrismaORM",
      ],
    },
    {
      category: "Systems & Networking",
      skills: [
        "Peer-to-Peer Networking",
        "Custom Protocol Design",
        "DNS Architecture",
        "Game Networking",
      ],
    },
    {
      category: "Machine Learning",
      skills: ["Neural Networks", "Model Training & Evaluation"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Linux", "Docker", "CI/CD"],
    },
    {
      category: "Game Development",
      skills: [
        "Unity",
        "3D Game Physics",
        "Multiplayer Networking",
        "Custom Engine Development",
      ],
    },
  ],

  experience: [
    {
      id: "1",
      position: "Chief Technology Officer",
      company: "EcomPilot (Startup)",
      startDate: "2024",
      endDate: "Present",
      current: true,
      achievements: [
        "Led architecture and implementation of an AI-driven customer service platform integrating WhatsApp and Instagram messaging with payment processing.",
        "Directed major codebase refactors to improve performance, maintainability, and observability.",
        "Built and deployed automation that helps small businesses provide 24/7 intelligent customer support at low cost.",
        "Defined product technical roadmap and guided engineering practices across frontend, backend, and infra.",
      ],
    },
    {
      id: "2",
      position: "Chief Technology Officer",
      company: "EchoReview (Startup)",
      startDate: "2024",
      endDate: "Present",
      current: true,
      achievements: [
        "Led development of the backend infrastructure with scalability in mind.",
        "Designed and implemented custom authentication systems with OAuth support.",
        "Developed a schema-driven query language for low-bandwidth data transmission.",
        "Built responsive and adaptive UI systems, including user step management and multi-device layouts.",
      ],
    },
  ],

  projects: [
    {
      id: "r1",
      name: "Communicating Sequential Processes (CSP) — Research",
      description:
        "Researched Hoare's CSP model and its influence on modern concurrency. Demonstrated how CSP's channel-based communication simplifies reasoning about concurrent programs, influenced Go's concurrency model, and contributes to building enterprise-grade, robust, and scalable systems.",
      technologies: ["Concurrency Theory", "Go"],
    },
    {
      id: "r2",
      name: "Fast Inverse Square Root (FISR) — Research",
      description:
        "Deep analysis of the Fast Inverse Square Root algorithm: IEEE-754 bit-level manipulation, the magic constant, Newton–Raphson refinement, and performance trade-offs in real-time graphics and low-level optimization.",
      technologies: ["C", "Numerical Methods", "Low-Level Optimization"],
    },

    // Full-stack Web Dev
    {
      id: "web1",
      name: "EcomPilot",
      description:
        "Full-stack AI customer-service platform (CTO role). Integrated Instagram and WhatsApp messaging with a payments system and business workflows. Focused on automation, high-availability backend services, code refactoring, and performance optimization to serve small businesses with enterprise-grade automation.",
      technologies: [
        "Next.js",
        "Python",
        "FastAPI",
        "VectorDB",
        "LangGraph",
        "TypeScript",
        "Supabase",
        "Redis",
      ],
    },
    {
      id: "web2",
      name: "EchoReview",
      description:
        "AI-powered business visibility and discovery platform. Dashboard, analytics, and business management tools with backend optimizations and schema-driven low-bandwidth query language.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "PrismaORM",
        "TogetherAPI",
      ],
    },
    {
      id: "web3",
      name: "Multicoder",
      description:
        "Real-time collaborative code editor with operational transformation / CRDT-inspired sync, custom networking logic, and real-time presence. Acts both as a product and a networking testbed for P2P/centralized hybrid sync models.",
      technologies: ["React", "TypeScript", "Socket.io", "Express"],
    },
    {
      id: "web4",
      name: "SocialMedia",
      description:
        "A full-stack social media platform developed for learning and experimentation. Includes account systems, messaging, feeds, and moderation tooling.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },

    // Systems Programming
    {
      id: "sys1",
      name: "syn (Programming Language)",
      description:
        "A statically-typed, C-inspired hobby language written in Rust. Runs on a stack-based synVM with its own runtime, targeting features like garbage collection and JIT compilation. syn is dependency-free and includes its own VM and standard library patterns. Example syntax demonstrates structs, impl blocks, methods, and first-class functions.",
      technologies: ["Rust", "VM", "Language Design"],
    },
    {
      id: "sys2",
      name: "AML (Scripting Language)",
      description:
        "Tree-walk interpreter implementation in Go inspired by Robert Nystrom's Lox. Focused on language ergonomics, fast iteration of language features, and embedding as a scripting DSL.",
      technologies: ["Go", "Interpreter", "Language Design"],
    },

    // Networking
    {
      id: "net1",
      name: "gop2p",
      description:
        "Highly-pluggable peer-to-peer networking library in Go. Supports multiple transports, configurable logging, and interchangeable broadcast/discovery servers. Designed as a foundation for higher-level distributed applications.",
      technologies: ["Go"],
    },
    {
      id: "net2",
      name: "bytetorrent",
      description:
        "BitTorrent-style file sharing application built on top of gop2p. Implements chunk-based transfers, peer discovery, and integrity checks.",
      technologies: ["Go", "gop2p"],
    },
    {
      id: "net3",
      name: "DNS Stub and Recursive Resolver",
      description:
        "Complete implementation of DNS stub and recursive resolver following RFC 1034 and RFC 1035. Focused on correctness, caching strategies, and robustness under malformed responses.",
      technologies: ["C", "Networking"],
    },

    // Machine Learning
    {
      id: "ml1",
      name: "CNN Image Classifier",
      description:
        "A fully custom neural network implementation written from scratch in C. Designed as a general-purpose function approximator capable of learning mappings from point sets, with future extensions planned for image recognition tasks.",
      technologies: [
        "C",
        "mathematics",
        "backpropagation",
        "custom data structures",
      ],
    },

    // Game Development
    {
      id: "game1",
      name: "Carlson (FPS Multiplayer)",
      description:
        "Made when I was in high-school is a Custom first-person multiplayer shooter built from scratch (engine + networking). Implemented client/server networking, synchronization, lag compensation, hit registration, and game logic in C# with Unity. Includes a custom multiplayer networking system used to stress-test and validate network protocols.",
      technologies: ["C#", "Unity", "Custom Networking"],
    },
  ],

  education: [
    {
      id: "edu1",
      level: "2CP",
      institution:
        "Ecole supérieure en sciences et technologies de l'informatique et du numérique (ESTIN), Béjaia, Algeria",
      startDate: "2024",
      endDate: "",
    },
  ],

  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "Fluent" },
    { language: "French", proficiency: "Advanced" },
    { language: "Russian", proficiency: "Basic" },
  ],
};

export default function Page() {
  return <MinimalTemplate data={Data} />;
}

function MinimalTemplate({ data, className = "" }: CVTemplateProps) {
  const {
    personalInfo,
    contactInfo,
    experience,
    projects,
    education,
    skills,
    languages,
  } = data;

  return (
    <div
      className={`max-w-3xl mx-auto p-12 bg-white min-h-screen font-light ${className}`}
    >
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-6xl font-thin text-gray-900 mb-2">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-gray-600 mb-6">{personalInfo.title}</p>

        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          <span>{contactInfo.email}</span>
          <span>{contactInfo.github}</span>
          <span>{contactInfo.phone}</span>
          <span>{contactInfo.location}</span>
          {contactInfo.website && <span>{contactInfo.website}</span>}
        </div>
      </header>

      {/* Summary */}
      <section className="mb-12">
        <p className="text-gray-700 leading-relaxed text-lg">
          {personalInfo.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-thin text-gray-900 mb-8">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.id} className="border-l-2 border-gray-200 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-normal text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <ul className="text-gray-700 space-y-1 mt-3">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm">
                    — {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-thin text-gray-900 mb-8">Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id}>
              <h3 className="text-lg font-normal text-gray-900 mb-1">
                {project.name}
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                {project.description}
              </p>
              <p className="text-gray-500 text-xs">
                {project.technologies.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-thin text-gray-900 mb-6">Skills</h2>
          <div className="space-y-4">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="font-normal text-gray-800 mb-1">
                  {skillGroup.category}
                </h3>
                <p className="text-gray-600 text-sm">
                  {skillGroup.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Others */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-thin text-gray-900 mb-6">Education</h2>
            {education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-normal text-gray-900">{edu.level}</h3>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
                <p className="text-gray-500 text-xs">
                  {edu.startDate} — {edu.endDate}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-thin text-gray-900 mb-6">Languages</h2>
            <div className="space-y-1">
              {languages.map((lang) => (
                <div key={lang.language} className="flex justify-between">
                  <span className="text-gray-700 text-sm">{lang.language}</span>
                  <span className="text-gray-500 text-xs">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
