'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Experience.module.css';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'ml' | 'data' | 'web';
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Bitoro Labs',
    role: 'Senior PHP/JavaScript Developer',
    location: 'Remote',
    startDate: '2024',
    endDate: 'Present',
    type: 'web',
    highlights: [
      'Led backend development using PHP 8.1+ and Laravel, utilizing typed properties, attributes, and modern OOP.',
      'Designed RESTful APIs for web/mobile, integrating with JavaScript frontends (Vue.js, AngularJS).',
      'Implemented asynchronous processing with RabbitMQ and AWS SQS for scalable PHP services.',
      'Optimized MySQL/PostgreSQL queries, boosting API performance by 30%+.',
      'Integrated ElasticSearch for advanced PHP-based search features.',
      'Migrated legacy PHP apps to Laravel, reducing technical debt.',
      'Automated testing/deployment with Jenkins, GitHub Actions (CI/CD for PHP/JS).',
      'Enforced secure PHP/JS coding practices, reducing security risks by 40%.',
      'Mentored developers in PHP/JavaScript best practices and led code reviews.',
      'Collaborated in Agile/Scrum teams with product, QA, and frontend engineers.',
    ],
  },
  {
    company: 'Freelance (Self-employed)',
    role: 'PHP/JavaScript FullStack Developer',
    location: 'Remote',
    startDate: '2020',
    endDate: '2024',
    type: 'web',
    highlights: [
      'Built reusable Laravel/Symfony modules and JavaScript components, following SOLID and DRY principles.',
      'Designed RESTful APIs for PHP backends and JavaScript frontends.',
      'Enhanced scalability with PHP background jobs/queues (SQS).',
      'Refactored SQL queries for PHP apps, improving performance.',
      'Containerized PHP/JS apps with Docker for consistent environments.',
      'Used Git/Composer for PHP and npm for JavaScript dependency management.',
      'Delivered features in Agile sprints, collaborating with cross-functional teams.',
    ],
  },
  {
    company: 'Upwork',
    role: 'Web Developer (PHP/JavaScript)',
    location: 'Remote',
    startDate: '2016',
    endDate: '2020',
    type: 'web',
    highlights: [
      'Developed PHP-based web applications using MVC architecture and JavaScript for dynamic UIs.',
      'Designed MySQL schemas and optimized queries for PHP/JS projects.',
      'Debugged backend PHP/JavaScript issues, improving system stability.',
      'Supported automated testing with PHPUnit and JavaScript unit tests.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(experiences.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    experiences.forEach((_, idx) => {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => {
          const newItems = [...prev];
          newItems[idx] = true;
          return newItems;
        });
      }, idx * 150);

      return () => clearTimeout(timer);
    });
  }, [isVisible]);

  const typeColors: Record<string, string> = {
    ml: 'var(--accent-gold)',
    data: 'var(--accent-blue)',
    web: 'var(--success)'
  };

  return (
    <section id="experience" ref={sectionRef} className={`${styles.experience} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h2 className="section-title">Experience Timeline</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`${styles.timelineItem} ${visibleItems[idx] ? styles.visible : ''}`}
            >
              <div className={styles.timelineMarker}>
                <div
                  className={styles.dot}
                  style={{ backgroundColor: typeColors[exp.type] }}
                ></div>
              </div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.date}>
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <p className={styles.location}>📍 {exp.location}</p>

                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>

                <span
                  className={styles.badge}
                  style={{ borderColor: typeColors[exp.type], color: typeColors[exp.type] }}
                >
                  {exp.type === 'ml' ? 'AI/ML' : exp.type === 'data' ? 'Data/ML' : 'Web'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
