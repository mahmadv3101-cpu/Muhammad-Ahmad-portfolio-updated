/* Design philosophy: reference-grounded neo-editorial terminal minimalism — near-black canvas, acid-lime signals, serif display type, compact mono labels, cinematic whitespace, and restrained motion. */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { featuredProjects, Project } from "@/lib/projects";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  Phone,
  Send,
  Sparkles,
  Sun,
  Terminal,
  UserRound,
  Workflow,
  X,
} from "lucide-react";

const portrait = "/assets/muhammad-ahmad-portrait.png";
const laxuraCover = "/assets/laxura-palace-cover.png";
const learnifyCover = "/assets/learnify-cover.png";
const saaslyteCover = "/assets/saaslyte-cover.png";
const tambaCover = "/assets/dovehero.webp";
const monogram = "/assets/ma-monogram.png";

const navItems = [
  { id: "home", label: "Home", icon: Terminal },
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: Palette },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

const skills = [
  { label: "Frontend", count: "06", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { label: "Backend", count: "05", items: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"] },
  { label: "Product Systems", count: "05", items: ["MERN Stack", "PostgreSQL", "GraphQL", "OAuth", "SaaS"] },
  { label: "No-Code + Flow", count: "05", items: ["Webflow", "Framer", "Make.com", "Zapier", "n8n"] },
  { label: "Commerce", count: "04", items: ["Shopify", "WooCommerce", "Stripe", "Webhooks"] },
  { label: "Design Craft", count: "04", items: ["Figma", "Motion", "Accessibility", "Design Systems"] },
];


function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [typedRole, setTypedRole] = useState("");
  const [sent, setSent] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>(["home"]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const role = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTypedRole(role.slice(0, index));
      if (index >= role.length) window.clearInterval(interval);
    }, 68);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          setVisibleSections((current) => current.includes(entry.target.id) ? current : [...current, entry.target.id]);
        }
      }),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const themeClass = dark ? "theme-dark" : "theme-soft";

  return (
    <div className={`site-shell ${themeClass}`}>
      <div className="ambient ambient-green" />
      <div className="ambient ambient-amber" />
      <div className="grain" />

      <header className="topbar">
        <a className="wordmark" href="#home" onClick={() => scrollToSection("home")}>
          <span className="wordmark-mark"><img src={monogram} alt="MA monogram" /></span>
          <span className="wordmark-copy"><strong>AHMAD</strong><small>DEVELOPER</small></span>
        </a>
        <div className="socials" aria-label="Social links">
          <a href="https://www.linkedin.com/in/muhammad-ahmad-a8a682397" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
          <a href="https://github.com/mahmadv3101-cpu" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
          <a href="https://wa.me/923320416245" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={15} /></a>
          <a href="mailto:mahmadv3101@gmail.com" aria-label="Email"><Mail size={15} /></a>
          <button className="theme-toggle" onClick={() => setDark((value) => !value)} aria-label="Toggle theme">
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
        <button className="mobile-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Open navigation">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <aside className={`side-rail ${menuOpen ? "is-open" : ""}`} aria-label="Section navigation">
        <div className="rail-arrow"><ArrowRight size={15} /></div>
        {navItems.map(({ id, label, icon: Icon }) => (
          <a key={id} href={`#${id}`} className={`rail-link ${active === id ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
            <Icon size={16} strokeWidth={1.5} /><span>{label}</span>
          </a>
        ))}
      </aside>

      <main>
        <section className="hero section-anchor in-view" id="home">
          <div className="hero-inner">
            <div className="hero-portrait reveal reveal-left">
              <div className="portrait-halo" />
              <div className="portrait-ring"><img src={portrait} alt="Illustrated portrait of Muhammad Ahmad" /></div>
              <div className="status-pill"><span className="status-dot" /> OPEN TO WORK</div>
            </div>
            <div className="hero-copy reveal reveal-right">
              <div className="greeting"><span>👋 Hey, I&apos;m</span><span className="divider" /> <span>Mr. Ahmad</span><Sparkles size={12} /></div>
              <h1>Muhammad <em>Ahmad</em></h1>
              <div className="role-line">{typedRole}<span className="cursor" /></div>
              <p className="hero-lede">I build modern web experiences that feel effortless to use — from ambitious interfaces to reliable systems behind the scenes.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="mailto:mahmadv3101@gmail.com?subject=Portfolio%20project">Let&apos;s Build <ArrowUpRight size={15} /></a>
                <a className="button button-ghost" href="#projects">View Projects <ArrowRight size={15} /></a>
              </div>
              <a className="community-card" href="https://github.com/mahmadv3101-cpu" target="_blank" rel="noreferrer">
                <span className="youtube-icon"><Github size={16} /></span><span><strong>GITHUB / MAHMADV3101-CPU</strong><small>Explore the code behind the shipped work</small></span><ArrowRight size={15} />
              </a>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /><span>SCROLL TO EXPLORE</span><ArrowDownRight size={14} /></a>
        </section>

        <section className={`section section-anchor about-section ${visibleSections.includes("about") ? "in-view" : ""}`} id="about">
          <div className="section-kicker"><span>01</span><span>ABOUT ME</span><span className="kicker-line" /></div>
          <div className="about-grid">
            <div className="section-title-wrap"><p className="eyebrow">A little context, before we build.</p><h2>Curious by default.<br /><em>Useful by design.</em></h2><div className="about-signature">MM / 2021—NOW</div></div>
            <div className="about-copy"><p>Hi, I&apos;m <strong>Muhammad Ahmad</strong> — a BSCS student at Virtual University and a full stack developer who likes the intersection of thoughtful design and dependable engineering.</p><p>I specialize in building modern, high-performance web applications that blend beautiful design with powerful, reliable functionality. From custom web applications and SaaS platforms to Webflow, Framer, and automation workflows, I bring the full shape of a digital product into view.</p><p>I care about the details that people feel but rarely name: the rhythm of a responsive layout, the confidence of a clear interaction, the small system behind a large promise. My goal is to make complex products feel calm, useful, and ready for real people.</p><p>Outside the build, I&apos;m usually exploring a new framework, studying product patterns, or helping someone untangle a bug. I&apos;m still learning, still shipping, and intentionally keeping both parts of that sentence.</p><div className="stat-row"><div><strong>03+</strong><span>Years building</span></div><div><strong>10+</strong><span>Projects shipped</span></div><div><strong>08+</strong><span>Projects live</span></div><div><strong>89%</strong><span>Client satisfaction</span></div></div></div>
          </div>
        </section>

        <section className={`section section-anchor ${visibleSections.includes("experience") ? "in-view" : ""}`} id="experience">
          <div className="section-kicker"><span>02</span><span>EXPERIENCE</span><span className="kicker-line" /></div>
          <div className="experience-card"><div className="experience-stamp"><BriefcaseBusiness size={17} /><span>SELECTED<br />EXPERIENCE</span></div><div className="experience-main"><div className="experience-top"><div><h3>Full Stack Developer</h3><p>Independent / Client Projects</p></div><span className="experience-date">2021 — NOW</span></div><p className="experience-summary">Designing and shipping product experiences end-to-end: interface systems, backend services, integrations, content platforms, and the operational details that keep a launch moving.</p><div className="experience-details"><div><span>01 / DISCOVER</span><p>Translate the brief into a clear product direction, audience, and delivery path.</p></div><div><span>02 / BUILD</span><p>Shape responsive interfaces, reusable components, APIs, dashboards, and automation.</p></div><div><span>03 / REFINE</span><p>Test the edges, tighten the interaction model, and leave the system easier to maintain.</p></div></div><div className="experience-tags"><span>PRODUCT THINKING</span><span>BUILD SYSTEMS</span><span>SHIP WITH CARE</span></div></div></div>
        </section>

        <section className={`section section-anchor skills-section ${visibleSections.includes("skills") ? "in-view" : ""}`} id="skills">
          <div className="section-kicker"><span>03</span><span>MY SKILLS</span><span className="kicker-line" /></div>
          <div className="section-heading-row"><h2>Tools for turning<br /><em>ideas into useful.</em></h2><p>My toolkit moves between code, no-code, design, and automation — whatever makes the product clearer and more resilient.</p></div>
          <div className="skill-grid">{skills.map((skill) => <div className="skill-card" key={skill.label}><div className="skill-card-top"><span>{skill.label}</span><strong>{skill.count}</strong></div><div className="skill-items">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
        </section>

        <section className={`section section-anchor projects-section ${visibleSections.includes("projects") ? "in-view" : ""}`} id="projects">
          <div className="section-kicker"><span>04</span><span>SELECTED PROJECTS</span><span className="kicker-line" /></div>
          <div className="section-heading-row"><h2>A few things<br /><em>I&apos;ve shipped.</em></h2><a className="text-link" href="mailto:mahmadv3101@gmail.com?subject=Project%20inquiry">Have a project in mind? <ArrowUpRight size={15} /></a></div>
          <div className="project-list">{featuredProjects.map((project, index) => <article className="project-card project-card-enhanced" key={project.slug} onClick={() => setSelectedProject(project)} tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter") setSelectedProject(project); }}><div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><div className="project-index">0{index + 1}</div><span className="project-type">{project.type}</span><span className="project-view">VIEW CASE <ArrowUpRight size={15} /></span></div><div className="project-info"><div><div className="project-meta"><span>{project.category}</span><span className="meta-line" /><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="project-arrow"><ArrowUpRight size={18} /></span></div></article>)}</div><div className="projects-cta-row"><Link className="button button-ghost" href="/projects">See all projects <ArrowUpRight size={15} /></Link><span>09 LIVE BUILDS / 02 WEBFLOW SYSTEMS</span></div>
        </section>

        <section className={`section section-anchor education-section ${visibleSections.includes("education") ? "in-view" : ""}`} id="education">
          <div className="section-kicker"><span>05</span><span>EDUCATION</span><span className="kicker-line" /></div>
          <div className="education-grid"><div><p className="eyebrow">Still learning. Always.</p><h2>Grounded in<br /><em>the fundamentals.</em></h2><p className="education-intro">My academic path keeps the craft honest: understand the foundations, then use them to make better decisions when the product gets complicated.</p></div><div className="education-card"><div className="education-icon"><GraduationCap size={22} /></div><div><span className="education-year">IN PROGRESS</span><h3>Bachelor of Science in Computer Science</h3><p>Virtual University</p><span className="education-note">A foundation for better questions, sharper systems, and a long runway of things left to explore.</span><div className="education-topics"><span>PROGRAMMING FUNDAMENTALS</span><span>WEB ENGINEERING</span><span>SOFTWARE SYSTEMS</span><span>CONTINUOUS LEARNING</span></div></div></div></div>
        </section>

        <section className={`section section-anchor contact-section ${visibleSections.includes("contact") ? "in-view" : ""}`} id="contact">
          <div className="section-kicker"><span>06</span><span>CONTACT</span><span className="kicker-line" /></div>
          <div className="contact-grid"><div><p className="eyebrow">Let&apos;s make something considered.</p><h2>Bring the next<br /><em>build into focus.</em></h2><p className="contact-lede">Have a product idea, a Webflow build, or a system that needs untangling? Send a note and I&apos;ll get back to you.</p><div className="contact-links"><a href="mailto:mahmadv3101@gmail.com"><Mail size={16} />mahmadv3101@gmail.com</a><a href="https://wa.me/923320416245" target="_blank" rel="noreferrer"><Phone size={16} />+92 332 0416245</a><a href="https://www.linkedin.com/in/muhammad-ahmad-a8a682397" target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn profile</a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>FULL NAME<input required placeholder="Your name" /></label><label>EMAIL ADDRESS<input required type="email" placeholder="you@company.com" /></label><label>WHAT ARE WE BUILDING?<textarea required placeholder="Tell me a little about the project..." rows={4} /></label><button className="button button-primary" type="submit">{sent ? "Message Ready" : "Send Message"} <Send size={15} /></button>{sent && <p className="form-note">Thanks — your message is queued. You can also reach me directly by email.</p>}</form></div>
        </section>
      </main>

      {selectedProject && <div className="project-modal-backdrop" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} project details`} onClick={() => setSelectedProject(null)}><div className="project-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={18} /></button><div className="modal-intro"><span className="project-type">{selectedProject.type}</span><span className="modal-year">{selectedProject.year}</span><h2>{selectedProject.title}</h2><p>{selectedProject.longDescription}</p><a className="button button-primary" href={selectedProject.liveUrl} target="_blank" rel="noreferrer">Visit live project <ExternalLink size={15} /></a></div><div className="project-gallery">{selectedProject.gallery.map((image, index) => <figure key={`${selectedProject.slug}-${index}`} className="gallery-frame"><img src={image} alt={`${selectedProject.title} screen ${index + 1}`} /><figcaption>0{index + 1} / {index === 0 ? "FIRST IMPRESSION" : index === 1 ? "PRODUCT DETAIL" : "RESPONSIVE FLOW"}</figcaption></figure>)}</div></div></div>}

      <footer className="footer"><div><span className="footer-mark">MA.</span><span>Built with intent by Muhammad Ahmad.</span></div><a href="#home">BACK TO TOP <ArrowRight size={14} /></a></footer>
      <a className="chat-button" href="https://wa.me/923320416245" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={20} /><span className="chat-badge">1</span></a>
    </div>
  );
}
