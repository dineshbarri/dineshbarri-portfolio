import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Data Analyst & AI Specialist',
    company: 'Self-Employed / Freelance',
    companyLogo: 'DA',
    period: 'Jan 2024 - Present',
    description: 'Building AI-powered analytics solutions and enterprise automation systems. Creating data-driven insights and custom machine learning applications for diverse clients.',
    achievements: [
      'Developed AI-powered enterprise analytics platforms',
      'Automated data pipelines using n8n and Google Gemini',
      'Built end-to-end analytics dashboards in Power BI and Tableau',
      'Implemented WhatsApp API integrations for business intelligence',
    ],
    technologies: ['Python', 'AI/ML', 'Power BI', 'n8n', 'Google Gemini', 'SQL'],
  },
  {
    title: 'Data Science Graduate',
    company: 'Dublin Business School',
    companyLogo: 'DBS',
    period: 'Sep 2023 - Sep 2024',
    description: 'Completed comprehensive Master\'s program in Data Science with focus on machine learning, statistical analysis, and practical data science methodologies.',
    achievements: [
      'Specialized in machine learning and predictive analytics',
      'Advanced data visualization and storytelling',
      'Statistical analysis and hypothesis testing',
      'Real-world projects with industry datasets',
    ],
    technologies: ['Machine Learning', 'Statistics', 'Python', 'Data Visualization', 'SQL'],
  },
  {
    title: 'Data Analyst & Developer',
    company: 'Tech Startups & Projects',
    companyLogo: 'TS',
    period: 'Jan 2023 - Dec 2023',
    description: 'Contributed to multiple data-driven projects and startups, developing analytics solutions, building dashboards, and creating data pipelines.',
    achievements: [
      'Created interactive data visualization dashboards',
      'Developed data engineering pipelines',
      'Analyzed complex datasets and provided insights',
      'Collaborated on AI/automation projects',
    ],
    technologies: ['Data Engineering', 'Tableau', 'Python', 'JavaScript', 'Data Analytics'],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From data science education to AI-driven solutions, building scalable analytics systems and leading data-driven initiatives across diverse technology stacks
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border/50">
                    <span className="font-display font-bold text-2xl gradient-text">
                      {exp.companyLogo}
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary mb-1">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 shrink-0">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
