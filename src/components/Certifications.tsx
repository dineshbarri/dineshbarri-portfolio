import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  url: string;
  authority: string;
  license: string;
  description: string[];
  icon: string;
}

const certificationDescriptions: Record<string, { description: string[], icon: string }> = {
  'Google Advanced Data Analytics Professional Certificate': {
    description: [
      'Advanced statistical analysis and regression modeling',
      'Machine learning fundamentals and model building with Python'
    ],
    icon: 'google'
  },
  'Google Data Analytics Professional Certificate': {
    description: [
      'Data cleaning, transformation, and visualization techniques',
      'SQL queries and spreadsheet analysis for business insights'
    ],
    icon: 'google'
  },
  'Microsoft Power BI Data Analyst Professional Certificate': {
    description: [
      'Creating interactive dashboards and reports',
      'DAX formulas and data modeling for business analytics'
    ],
    icon: 'microsoft'
  },
  'TensorFlow Developer Certificate (DeepLearning.AI)': {
    description: [
      'Building and training neural networks with TensorFlow',
      'Computer vision and natural language processing applications'
    ],
    icon: 'ai'
  },
  'AWS Cloud Practitioner Essentials': {
    description: [
      'AWS cloud computing fundamentals and architecture',
      'Core AWS services for storage, compute, and database'
    ],
    icon: 'aws'
  },
  'Prepare Data for ML APIs on Google Cloud': {
    description: [
      'Data preprocessing and feature engineering for ML',
      'Using Google Cloud AI APIs for predictions'
    ],
    icon: 'google'
  },
  'Introduction to Relational Databases (RDBMS)': {
    description: [
      'Database design principles and normalization',
      'SQL fundamentals and relational database concepts'
    ],
    icon: 'database'
  },
  'Python for Data Science, AI & Development': {
    description: [
      'Python programming for data manipulation and analysis',
      'Libraries like Pandas, NumPy, and Matplotlib'
    ],
    icon: 'python'
  },
  'Gemini for Data Scientists and Analysts': {
    description: [
      'Leveraging Gemini AI for data analysis workflows',
      'AI-powered insights and automation techniques'
    ],
    icon: 'google'
  }
};

const priorityOrder = [
  'Google Advanced Data Analytics Professional Certificate',
  'Google Data Analytics Professional Certificate',
  'Microsoft Power BI Data Analyst Professional Certificate',
  'TensorFlow Developer Certificate (DeepLearning.AI)',
  'AWS Cloud Practitioner Essentials',
  'Prepare Data for ML APIs on Google Cloud',
  'Introduction to Relational Databases (RDBMS)',
  'Python for Data Science, AI & Development',
  'Gemini for Data Scientists and Analysts'
];

export const Certifications = ({ limit }: { limit?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    fetch('/Certifications.csv')
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n').slice(1);
        const certs: Certification[] = [];

        lines.forEach(line => {
          if (!line.trim()) return;

          const parts: string[] = [];
          let current = '';
          let inQuotes = false;

          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
              parts.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          parts.push(current.trim());

          const name = parts[0] || '';
          const url = parts[1] || '';
          const authority = parts[2] || '';
          const license = parts[5] || '';

          if (name && certificationDescriptions[name]) {
            certs.push({
              name,
              url,
              authority,
              license,
              description: certificationDescriptions[name].description,
              icon: certificationDescriptions[name].icon
            });
          }
        });

        const orderedCerts = certs.sort((a, b) => {
          const aIndex = priorityOrder.indexOf(a.name);
          const bIndex = priorityOrder.indexOf(b.name);
          if (aIndex === -1 && bIndex === -1) return 0;
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          return aIndex - bIndex;
        });

        setCertifications(limit ? orderedCerts.slice(0, limit) : orderedCerts);
      })
      .catch(error => console.error('Error loading certifications:', error));
  }, [limit]);

  const getIconComponent = (icon: string) => {
    const iconClasses = "w-6 h-6 text-primary";
    switch (icon) {
      case 'google':
        return <span className="font-bold text-primary text-xl">G</span>;
      case 'microsoft':
        return <span className="font-bold text-primary text-xl">M</span>;
      case 'aws':
        return <span className="font-bold text-primary text-xl">AWS</span>;
      case 'ai':
      case 'python':
      case 'database':
      default:
        return <Award className={iconClasses} />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise across data science, analytics, and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:translate-y-[-4px] hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  {getIconComponent(cert.icon)}
                </div>
                <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
              </div>

              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.name}
              </h3>

              <p className="text-sm text-primary font-semibold mb-3">
                {cert.authority}
              </p>

              <ul className="space-y-2 mb-4">
                {cert.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {cert.license && (
                <p className="text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                  License: {cert.license}
                </p>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
