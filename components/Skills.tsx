'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Skills.module.css';

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    description: string;
  }>;
}

const skillsData: Record<string, SkillCategory> = {
  backend: {
    name: 'Backend (PHP)',
    skills: [
      { name: 'PHP 8.1+', description: 'Modern PHP for scalable web applications' },
      { name: 'Laravel', description: 'MVC framework, RESTful APIs, Eloquent ORM' },
      { name: 'Symfony', description: 'Reusable components, robust architecture' },
      { name: 'RESTful APIs', description: 'API design and implementation' },
      { name: 'Composer', description: 'Dependency management for PHP' },
      { name: 'OOP/SOLID', description: 'Object-oriented design, best practices' },
    ],
  },
  frontend: {
    name: 'Frontend (JavaScript)',
    skills: [
      { name: 'JavaScript (ES6+)', description: 'Modern JS for dynamic UIs' },
      { name: 'Vue.js', description: 'Reactive front-end framework' },
      { name: 'AngularJS', description: 'Component-based SPA development' },
      { name: 'HTML5', description: 'Semantic markup, accessibility' },
      { name: 'CSS3', description: 'Responsive, modern styling' },
      { name: 'AJAX', description: 'Asynchronous web interactions' },
    ],
  },
  databases: {
    name: 'Databases',
    skills: [
      { name: 'MySQL', description: 'Schema design, query optimization' },
      { name: 'PostgreSQL', description: 'Advanced SQL, performance tuning' },
      { name: 'Redis', description: 'Caching, session storage' },
      { name: 'ElasticSearch', description: 'Full-text search, analytics' },
    ],
  },
  devops: {
    name: 'DevOps & Tooling',
    skills: [
      { name: 'Git', description: 'Version control, branching workflows' },
      { name: 'Docker', description: 'Containerization for local/prod environments' },
      { name: 'Jenkins', description: 'CI/CD automation' },
      { name: 'GitHub Actions', description: 'CI/CD pipelines' },
      { name: 'AWS', description: 'EC2, S3, Lambda, SQS' },
      { name: 'Nginx', description: 'Web server, reverse proxy' },
    ],
  },
  testing: {
    name: 'Testing & Methodologies',
    skills: [
      { name: 'PHPUnit', description: 'Unit and integration testing for PHP' },
      { name: 'Selenium', description: 'End-to-end browser testing' },
      { name: 'Xdebug', description: 'Debugging and profiling' },
      { name: 'Agile/Scrum', description: 'Iterative development, team collaboration' },
      { name: 'CI/CD', description: 'Automated testing and deployment' },
      { name: 'TDD', description: 'Test-driven development' },
    ],
  },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('blockchain');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="skills" ref={sectionRef} className={`${styles.skills} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="section-title">Skills & Tooling</h2>
          <p className={styles.subtitle}>Production-grade expertise in PHP, JavaScript, backend, frontend, and DevOps.</p>
        </div>

        <div className={styles.tabs}>
          {Object.entries(skillsData).map(([key, category]) => (
            <button
              key={key}
              className={`${styles.tab} ${activeTab === key ? styles.active : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          {Object.entries(skillsData).map(([key, category]) => (
            <div
              key={key}
              className={`${styles.skillsGrid} ${activeTab === key ? styles.visible : ''}`}
            >
              {category.skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className={styles.skillCard}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    animation: activeTab === key ? `fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.05}s both` : 'none',
                  }}
                >
                  <div className={styles.skillPill}>{skill.name}</div>
                  <div className={`${styles.tooltip} ${hoveredSkill === skill.name ? styles.show : ''}`}>
                    {skill.description}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.highlights}>
          <h3>Key Proficiencies</h3>
          <div className={styles.highlightList}>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>💻</span>
              <span>Advanced PHP (8.1+), Laravel, Symfony</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🔗</span>
              <span>RESTful API architecture and implementation</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🖥️</span>
              <span>JavaScript (ES6+), Vue.js, AngularJS</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🗄️</span>
              <span>MySQL & PostgreSQL database design and optimization</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>⚙️</span>
              <span>Asynchronous processing with queues (RabbitMQ, AWS SQS)</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🐳</span>
              <span>Dockerized development and deployment</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🚀</span>
              <span>CI/CD automation (Jenkins, GitHub Actions)</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🔒</span>
              <span>Secure coding practices and code reviews</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🤝</span>
              <span>Agile/Scrum team collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
