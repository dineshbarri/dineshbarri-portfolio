import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Data Analyst & AI Specialist',
    company: 'Self-Employed / Freelance',
    location: 'Dublin, Ireland',
    period: 'Jan 2024 - Present',
    description: 'Building AI-powered analytics solutions and enterprise automation systems. Creating data-driven insights and custom machine learning applications for diverse clients.',
    highlights: [
      'Developed AI-powered enterprise analytics platforms',
      'Automated data pipelines using n8n and Google Gemini',
      'Built end-to-end analytics dashboards in Power BI and Tableau',
      'Implemented WhatsApp API integrations for business intelligence',
    ],
    tags: ['Python', 'AI/ML', 'Power BI', 'n8n', 'Google Gemini', 'SQL'],
  },
  {
    title: 'Data Science Graduate',
    company: 'Dublin Business School',
    location: 'Dublin, Ireland',
    period: 'Sep 2023 - Sep 2024',
    description: 'Completed comprehensive Master\'s program in Data Science with focus on machine learning, statistical analysis, and practical data science methodologies.',
    highlights: [
      'Specialized in machine learning and predictive analytics',
      'Advanced data visualization and storytelling',
      'Statistical analysis and hypothesis testing',
      'Real-world projects with industry datasets',
    ],
    tags: ['Machine Learning', 'Statistics', 'Python', 'Data Visualization', 'SQL'],
  },
  {
    title: 'Data Analyst & Developer',
    company: 'Tech Startups & Projects',
    location: 'Remote',
    period: 'Jan 2023 - Dec 2023',
    description: 'Contributed to multiple data-driven projects and startups, developing analytics solutions, building dashboards, and creating data pipelines.',
    highlights: [
      'Created interactive data visualization dashboards',
      'Developed data engineering pipelines',
      'Analyzed complex datasets and provided insights',
      'Collaborated on AI/automation projects',
    ],
    tags: ['Data Engineering', 'Tableau', 'Python', 'JavaScript', 'Data Analytics'],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in data science, analytics, and AI development
          </p>
        </div>
        <div className="flex flex-col gap-10 w-full max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <div key={exp.company + exp.period} className="bg-card rounded-xl shadow p-7 flex flex-col gap-2 border border-border/50">
              <div className="mb-1">
                <h3 className="font-bold font-display text-xl sm:text-2xl text-foreground">{exp.title}</h3>
              </div>
              <div className="text-md font-medium text-primary mb-1">{exp.company}</div>
              <div className="text-sm text-muted-foreground mb-2">{exp.period} {exp.location ?  '| ' + exp.location : ''}</div>
              <div className="text-muted-foreground text-[15px] mb-2">{exp.description}</div>
              <ul className="list-disc pl-5 mb-1">
                {exp.highlights.map((highlight, key) => (
                  <li key={key} className="text-sm leading-relaxed text-muted-foreground">{highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-foreground border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
