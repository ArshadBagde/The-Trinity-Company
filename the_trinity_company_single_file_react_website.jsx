import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  BarChart3,
  Brain,
  ChartLine,
  Database,
  LineChart,
  GraduationCap,
  Mail,
  Phone,
  Rocket,
  Users,
  Building2,
  Calendar,
  Layers,
  Globe2,
  Send,
  Sun,
  Moon
} from "lucide-react";

// ---------- Helper UI ----------
const Section = ({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-muted-foreground mt-2 max-w-3xl">{subtitle}</p>}
      </motion.div>
      <div className="mt-8 md:mt-12">{children}</div>
    </div>
  </section>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="px-3 py-2 text-sm font-medium hover:text-primary">
    {children}
  </a>
);

// ---------- DATA (easy to edit) ----------
const COMPANY = {
  name: "The Trinity Company",
  founded: 2022,
  email: "thetrinityc@gmail.com",
  phone: "+91 9503447189",
  industry: "Information Technology & Services",
  size: "2–10 employees",
  membersNote: "3 LinkedIn members currently list The Trinity Company as their workplace.",
  tagline: "Building the next generation of data scientists.",
  mission:
    "We connect learners, graduates, and professionals with internships and jobs in Data Science and related fields — and help them grow with real-world projects and mentorship.",
};

const DOMAINS = [
  { icon: <Brain className="w-5 h-5" />, label: "Machine Learning" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Data Analytics" },
  { icon: <LineChart className="w-5 h-5" />, label: "Predictive Analytics" },
  { icon: <ChartLine className="w-5 h-5" />, label: "Forecasting" },
  { icon: <Database className="w-5 h-5" />, label: "Database Management" },
  { icon: <Layers className="w-5 h-5" />, label: "Data Architecture" },
  { icon: <Brain className="w-5 h-5" />, label: "Deep Learning" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Statistical Modeling" },
  { icon: <ChartLine className="w-5 h-5" />, label: "Data Visualization" },
  { icon: <Brain className="w-5 h-5" />, label: "AI" },
  { icon: <Globe2 className="w-5 h-5" />, label: "Web/Software Development" },
];

const COURSES = [
  "Data Science",
  "Python Development",
  "Artificial Intelligence (AI)",
  "Machine Learning (ML)",
  "Deep Learning (DL)",
  "SQL",
  "Power BI",
  "Tableau",
  "R Language",
  "STATA",
];

const ROLES = [
  "Web Developer",
  "Data Engineer",
  "Data Analyst",
  "Researcher",
  "Data Scientist",
  "Machine Learning Engineer",
];

const PROJECT_AREAS = [
  "Web Development",
  "Software Development",
  "Data Science",
  "Analytics",
  "Visualization Dashboards",
  "Forecasting & Time Series",
];

// ---------- THE APP ----------
export default function TrinitySite() {
  const [dark, setDark] = useState(true);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        {/* Top Nav */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary"/>
              <span className="font-semibold">{COMPANY.name}</span>
            </div>
            <nav className="hidden md:flex items-center">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#domains">Domains</NavLink>
              <NavLink href="#internships">Internships</NavLink>
              <NavLink href="#jobs">Hiring</NavLink>
              <NavLink href="#courses">Courses</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" aria-label="Toggle theme" onClick={() => setDark(d => !d)}>
                {dark ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
              </Button>
              <a href="#contact"><Button>Get in touch</Button></a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                {COMPANY.tagline}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                {COMPANY.mission}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#internships"><Button size="lg"><GraduationCap className="w-4 h-4 mr-2"/> Explore Internships</Button></a>
                <a href="#jobs"><Button variant="outline" size="lg"><Users className="w-4 h-4 mr-2"/> See Open Roles</Button></a>
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div className="p-4 rounded-2xl border">
                  <div className="font-semibold text-foreground">Founded</div>
                  <div>{COMPANY.founded}</div>
                </div>
                <div className="p-4 rounded-2xl border">
                  <div className="font-semibold text-foreground">Industry</div>
                  <div>{COMPANY.industry}</div>
                </div>
                <div className="p-4 rounded-2xl border">
                  <div className="font-semibold text-foreground">Company Size</div>
                  <div>{COMPANY.size}</div>
                </div>
                <div className="p-4 rounded-2xl border">
                  <div className="font-semibold text-foreground">Community</div>
                  <div>{COMPANY.membersNote}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* About */}
        <Section id="about" title="About us" subtitle="We are enthusiastic to work with experts and learners across Data Science and adjacent domains.">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Who we are</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  {COMPANY.name} focuses on Data Science, Machine Learning, Deep Learning, Data Analytics, Database Management, Data Architecture, Predictive Analytics, Data Visualization, Forecasting, Statistical Modeling, and core Statistics.
                </p>
                <p>
                  Our purpose is to connect users with internships and job opportunities in these fields while nurturing practical, industry-ready skills through projects and mentorship.
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">Collaborative</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">Project-driven</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">Mentor-led</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>At a glance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3"><Building2 className="w-4 h-4"/> <span>{COMPANY.industry}</span></div>
                <div className="flex items-center gap-3"><Calendar className="w-4 h-4"/> <span>Founded {COMPANY.founded}</span></div>
                <div className="flex items-center gap-3"><Users className="w-4 h-4"/> <span>{COMPANY.size}</span></div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4"/> <a className="hover:underline" href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a></div>
                <div className="flex items-center gap-3"><Mail className="w-4 h-4"/> <a className="hover:underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Domains */}
        <Section id="domains" title="What we do" subtitle="Core domains and capabilities">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOMAINS.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                <Card className="h-full">
                  <CardContent className="p-5 flex items-center gap-3">
                    <div className="shrink-0">{d.icon}</div>
                    <div className="font-medium">{d.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Internships */}
        <Section id="internships" title="Internships" subtitle="Hands-on, mentor-led internships for university students to gain real-world experience.">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>How internships work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Duration typically matches a semester or summer break.</li>
                  <li>Mix of paid and unpaid internships depending on project and sponsor.</li>
                  <li>Weekly mentor syncs, code reviews, and demo days.</li>
                  <li>Focus on building portfolio-ready projects in {PROJECT_AREAS.slice(0,4).join(", ")} and more.</li>
                </ul>
                <div className="p-4 rounded-xl border bg-muted/40">
                  <p className="text-sm">To apply, email us at <a className="underline" href={`mailto:${COMPANY.email}?subject=Internship%20Application`}>{COMPANY.email}</a> with your resume, GitHub/portfolio, and preferred start date.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${COMPANY.email}?subject=Internship%20Application`}><Button><Send className="w-4 h-4 mr-2"/> Apply via Email</Button></a>
                  <a href="#contact"><Button variant="outline">Contact & FAQs</Button></a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Popular tracks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {COURSES.map((c) => (
                    <div key={c} className="flex items-center gap-2 p-2 rounded-lg border">
                      <GraduationCap className="w-4 h-4"/> <span>{c}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Hiring */}
        <Section id="jobs" title="We’re hiring" subtitle="Open to freshers and experienced professionals.">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Open roles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {ROLES.map((role) => (
                  <div key={role} className="flex items-center justify-between p-3 rounded-xl border">
                    <span>{role}</span>
                    <a href={`mailto:${COMPANY.email}?subject=Application%20for%20${encodeURIComponent(role)}`}>
                      <Button size="sm">Apply</Button>
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What we look for</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Strong fundamentals in programming, statistics, and problem solving.</li>
                  <li>Hands-on with Python/R/SQL and popular ML/DL frameworks.</li>
                  <li>Curiosity, collaboration, and willingness to learn.</li>
                  <li>Portfolio or GitHub demonstrating real-world projects.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Courses */}
        <Section id="courses" title="Courses & Upskilling" subtitle="Industry-aligned courses to prepare you for jobs and internships.">
          <div className="grid md:grid-cols-3 gap-6">
            {COURSES.map((c, i) => (
              <Card key={c}>
                <CardHeader>
                  <CardTitle>{c}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>Project-based learning with mentorship, assignments, and capstone.</p>
                  <div className="flex gap-2">
                    <Button size="sm">Syllabus</Button>
                    <a href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(c)}%20-%20Course%20Enquiry`}><Button size="sm" variant="outline">Enquire</Button></a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" subtitle="A peek into the kinds of projects our interns and teams build.">
          <div className="grid lg:grid-cols-3 gap-6">
            {PROJECT_AREAS.map((area, i) => (
              <Card key={area}>
                <CardHeader>
                  <CardTitle>{area}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>End-to-end problem framing & data pipeline</li>
                    <li>Modeling, evaluation, and MLOps basics</li>
                    <li>Visualization dashboards & reporting</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact us" subtitle="Have questions or want to collaborate? Reach out.">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3"><Mail className="w-4 h-4"/> <a className="underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4"/> <a className="underline" href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a></div>
                <p className="text-sm text-muted-foreground">Internship enquiries: email us with subject <span className="font-medium">“Internship Application”</span>.</p>
                <div className="flex gap-2">
                  <a href={`mailto:${COMPANY.email}?subject=General%20Enquiry`}><Button><Mail className="w-4 h-4 mr-2"/> Email</Button></a>
                  <a href={`tel:${COMPANY.phone}`}><Button variant="outline"><Phone className="w-4 h-4 mr-2"/> Call</Button></a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you at " + (e.currentTarget as any).email.value + "."); }} className="space-y-3">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Your email" required />
                  <Textarea name="message" placeholder="Your message" rows={4} required />
                  <Button type="submit" className="w-full"><Send className="w-4 h-4 mr-2"/> Send</Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">This demo form triggers an on-page alert. Connect it to your backend or a service like Formspree when deploying.</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary"/>
                <span className="font-semibold">{COMPANY.name}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                © {year} {COMPANY.name}. All rights reserved. Built with ♥ for learners and experts in Data Science.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2">Explore</div>
                <ul className="space-y-1">
                  <li><a className="hover:underline" href="#about">About</a></li>
                  <li><a className="hover:underline" href="#domains">Domains</a></li>
                  <li><a className="hover:underline" href="#internships">Internships</a></li>
                  <li><a className="hover:underline" href="#jobs">Hiring</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">Learn</div>
                <ul className="space-y-1">
                  {COURSES.slice(0,5).map((c) => (<li key={c}><a className="hover:underline" href="#courses">{c}</a></li>))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style>{`
        :root{
          --background: 255 255 255;
          --foreground: 18 18 18;
        }
        .dark{
          --background: 9 9 11;
          --foreground: 250 250 250;
        }
        .bg-background{ background-color: rgb(var(--background)); }
        .text-foreground{ color: rgb(var(--foreground)); }
        .text-muted-foreground{ color: rgba(var(--foreground),0.7); }
        .border{ border-color: rgba(var(--foreground),0.12); }
      `}</style>
    </div>
  );
}
