import { FaJava, FaAws, FaGolang, FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import {
  SiSpringboot, SiNestjs, SiNodedotjs, SiDjango, SiReact, SiNextdotjs, SiVuedotjs, SiAngular,
  SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap, SiPostgresql, SiMongodb,
  SiMicrosoftsqlserver, SiOracle, SiGooglebigquery, SiGooglecloud, SiDocker, SiKubernetes,
  SiGithubactions, SiMicrosoftazure, SiGit, SiGithub, SiGitlab, SiJira, SiIntellijidea,
  SiJunit5, SiAnthropic,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

// Brand marks for the stack, project cards and social links. `color` is the brand color;
// `light` overrides it on the light theme where the brand color is too pale,
// and null means the mark follows the text color (black/near-black brands).
// Names must match the technology names used in constants/index.js.
export const tech = {
  "Java": { Icon: FaJava, color: "#ED8B00" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F", light: "#4E8A2C" },
  "Apache Camel": { color: "#E97826" },
  "NestJS": { Icon: SiNestjs, color: "#E0234E" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E", light: "#3F7A33" },
  "Django": { Icon: SiDjango, color: null },
  "Go": { Icon: FaGolang, color: "#00ADD8", light: "#007D9C" },
  "React": { Icon: SiReact, color: "#61DAFB", light: "#087EA4" },
  "Next.js": { Icon: SiNextdotjs, color: null },
  "Vue.js": { Icon: SiVuedotjs, color: "#4FC08D", light: "#2F8F5E" },
  "Angular": { Icon: SiAngular, color: "#DD0031" },
  "TypeScript": { Icon: SiTypescript, color: "#3178C6" },
  "JavaScript": { Icon: SiJavascript, color: "#F7DF1E", light: "#C9A900" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8", light: "#0891B2" },
  "Bootstrap": { Icon: SiBootstrap, color: "#8D5CF6", light: "#7952B3" },
  "PostgreSQL": { Icon: SiPostgresql, color: "#699ECA", light: "#336791" },
  "MongoDB": { Icon: SiMongodb, color: "#47A248", light: "#3B8A3C" },
  "SQL Server": { Icon: SiMicrosoftsqlserver, color: "#E33E3B", light: "#CC2927" },
  "Oracle": { Icon: SiOracle, color: "#F80000", light: "#D00000" },
  "BigQuery": { Icon: SiGooglebigquery, color: "#669DF6", light: "#4285F4" },
  "Google Cloud": { Icon: SiGooglecloud, color: "#4285F4" },
  "Docker": { Icon: SiDocker, color: "#2496ED" },
  "Kubernetes": { Icon: SiKubernetes, color: "#4F86EC", light: "#326CE5" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  "Azure": { Icon: SiMicrosoftazure, color: "#2B9AF3", light: "#0078D4" },
  "AWS": { Icon: FaAws, color: "#FF9900", light: "#D97F00" },
  "Git": { Icon: SiGit, color: "#F05032" },
  "GitHub": { Icon: SiGithub, color: null },
  "GitLab": { Icon: SiGitlab, color: "#FC6D26" },
  "Jira": { Icon: SiJira, color: "#2684FF", light: "#0052CC" },
  "IntelliJ": { Icon: SiIntellijidea, color: null },
  "VS Code": { Icon: TbBrandVscode, color: "#23A9F2", light: "#007ACC" },
  "JUnit": { Icon: SiJunit5, color: "#25A162" },
  "Bruno": { color: "#F4AA41", light: "#B97A1B" },
  "Claude Code": { Icon: SiAnthropic, color: null },
  // Social networks (contact and footer)
  "LinkedIn": { Icon: FaLinkedin, color: "#3B8EEA", light: "#0A66C2" },
  "Instagram": { Icon: FaInstagram, color: "#E1306C", light: "#C13584" },
  "Facebook": { Icon: FaFacebook, color: "#3B8EF5", light: "#1877F2" },
  "X": { Icon: FaXTwitter, color: null },
};

// CSS custom properties consumed by .tech-mark in globals.css.
export function techStyle(name) {
  const entry = tech[name];
  if (!entry || !entry.color) return undefined;
  return { "--mark": entry.color, "--mark-light": entry.light || entry.color };
}

// Brands without a mark in react-icons get a two-letter monogram.
export function monogram(name) {
  return name.split(/\s+/).map((word) => word[0]).join("").slice(0, 2).toUpperCase();
}
