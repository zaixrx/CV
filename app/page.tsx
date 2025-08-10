"use client";

import type React from "react"

interface ContactInfo {
  email: string
  phone: string
  location: string
  website?: string
  github?: string
  linkedin?: string
}

interface PersonalInfo {
  name: string
  title: string
  initials: string
  summary: string
  avatar?: string
}

interface Experience {
  id: string
  position: string
  company: string
  startDate: string
  endDate: string
  current?: boolean
  achievements: string[]
}

interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  url?: string
  github?: string
}

interface Education {
  id: string
  degree: string
  institution: string
  startDate: string
  endDate: string
  gpa?: string
  honors?: string[]
}

interface SkillCategory {
  category: string
  skills: string[]
}

interface Language {
  language: string
  proficiency: "Native" | "Fluent" | "Advanced" | "Intermediate" | "Basic"
}

interface CVData {
  personalInfo: PersonalInfo
  contactInfo: ContactInfo
  experience: Experience[]
  projects: Project[]
  education: Education[]
  skills: SkillCategory[]
  languages: Language[]
}

interface CVTemplateProps {
  data: CVData
  className?: string
}

const Data: CVData = {
personalInfo: {
  name: "Koua Mohamed Anis",
  title: "Software Engineer",
  initials: "KMA",
  summary: "An 18-year-old passionate Software Engineer with 5+ years of experience building scalable software systems, developer tools, and networking solutions from scratch. Skilled in backend, systems, and full-stack development with a focus on performance, scalability, and understanding how things work under the hood."
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
    skills: ["Go", "TypeScript", "JavaScript", "C", "C#", "SQL", "HTML", "CSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Express.js", "Socket.io", "Vite", "TailwindCSS", "ShadCN", "PrismaORM"]
  },
  {
    category: "Systems & Networking",
    skills: ["Peer-to-Peer Networking", "Custom Protocol Design", "DNS Implementation", "Game Networking"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Linux", "Docker", "CI/CD"]
  },
  {
    category: "Game Development",
    skills: ["Unity", "3D Game Physics", "Multiplayer Networking"]
  },
],
experience: [
  {
    id: "1",
    position: "Chief Technology Officer",
    company: "EchoReview (Startup)",
    startDate: "2024",
    endDate: "Present",
    current: true,
    achievements: [
      "Led development of the backend infrastructure with scalability in mind.",
      "Designed and implemented custom authentication systems with OAuth support.",
      "Developed a schema-driven query language for low-bandwidth data transmission.",
      "Built responsive and adaptive UI systems, including user step management and multi-device layouts."
    ]
  }
],
projects: [
  {
    id: "1",
    name: "Custom Scripting Language",
    description: "Designed and implemented a dynamic general-purpose scripting language from scratch in Go.",
    technologies: ["Go"]
  },
  {
    id: "2",
    name: "gop2p",
    description: "Highly pluggable peer-to-peer networking library in Go with support for multiple transport protocols, custom logging, and interchangeable broadcasting servers with a default UDP server.",
    technologies: ["Go"]
  },
  {
    id: "3",
    name: "EchoReview",
    description: "A full-stack AI-powered web application for business visibility and customer discovery, featuring a comprehensive dashboard and business management tools.",
    technologies: ["Next.js", "PostgreSQL", "PrismaORM", "TogetherAPI", "TypeScript", "TailwindCSS", "ShadCN"]
  },
  {
  id: "4",
  name: "Fast Inverse Square Root (FISR) Article",
  description: "Published an in-depth technical article analyzing the Fast Inverse Square Root algorithm, detailing its mathematical foundation, bit-level manipulation, and Newton–Raphson optimization steps. Explained how the computations achieve high performance compared to traditional floating-point division and why the method remains relevant in modern computing.",
  technologies: ["C", "Mathematics", "Low-Level Optimization"]
},
  {
    id: "5",
    name: "Multicoder",
    description: "Collaborative full-stack code editor built from scratch with real-time editing support.",
    technologies: ["Express.js", "Socket.io", "Vite", "React.js", "TypeScript"]
  },
  {
    id: "6",
    name: "bytetorrent",
    description: "BitTorrent replica built using gop2p for peer discovery and file sharing.",
    technologies: ["Go", "gop2p"]
  },
  {
    id: "7",
    name: "DNS Stub And Recursive Resolver",
    description: "Implemented according to RFC 1035 and RFC 1034 with a deep understanding of DNS architecture.",
    technologies: ["C"]
  },
  {
    id: "8",
    name: "SocialMedia",
    description: "A social media platform fully developed during high school for learning and experimentation.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"]
  },
  {
    id: "9",
    name: "3D Multiplayer Game",
    description: "3D multiplayer FPS inspired by CS:GO, with a complete networking solution built from scratch in C#.",
    technologies: ["C#", "Unity"]
  }
],
education: [
  {
    id: "1",
    degree: "",
    institution: "Ecole supérieure en sciences et technologies de l'informatique et du numérique (ESTIN), Béjaia, Algeria",
    startDate: "2024",
    endDate: "",
  }
],
languages: [
  { language: "Arabic", proficiency: "Native" },
  { language: "English", proficiency: "Fluent" },
  { language: "French", proficiency: "Intermediate" },
  { language: "Russian", proficiency: "Basic" }
]
}

export default function Page() {
  return <MinimalTemplate data={Data}/>
}

function MinimalTemplate({ data, className = "" }: CVTemplateProps) {
  const { personalInfo, contactInfo, experience, projects, education, skills, languages } = data

  return (
    <div className={`max-w-3xl mx-auto p-12 bg-white min-h-screen font-light ${className}`}>
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-6xl font-thin text-gray-900 mb-2">{personalInfo.name}</h1>
        <p className="text-xl text-gray-600 mb-6">{personalInfo.title}</p>

        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          <span>{contactInfo.email}</span>
          <span>{contactInfo.phone}</span>
          <span>{contactInfo.location}</span>
          {contactInfo.website && <span>{contactInfo.website}</span>}
        </div>
      </header>

      {/* Summary */}
      <section className="mb-12">
        <p className="text-gray-700 leading-relaxed text-lg">{personalInfo.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-thin text-gray-900 mb-8">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.id} className="border-l-2 border-gray-200 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-normal text-gray-900">{exp.position}</h3>
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
              <h3 className="text-lg font-normal text-gray-900 mb-1">{project.name}</h3>
              <p className="text-gray-700 text-sm mb-2">{project.description}</p>
              <p className="text-gray-500 text-xs">{project.technologies.join(" • ")}</p>
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
                <h3 className="font-normal text-gray-800 mb-1">{skillGroup.category}</h3>
                <p className="text-gray-600 text-sm">{skillGroup.skills.join(", ")}</p>
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
                <h3 className="font-normal text-gray-900">{edu.degree}</h3>
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
                  <span className="text-gray-500 text-xs">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
