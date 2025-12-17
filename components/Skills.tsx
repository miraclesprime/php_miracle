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
  blockchain: {
    name: 'Blockchain',
    skills: [
      { name: 'Solidity', description: 'Smart contract development, optimization, and security' },
      { name: 'Rust', description: 'Solana program development and cross-chain protocols' },
      { name: 'Web3.js', description: 'Blockchain interaction and dApp integration' },
      { name: 'Ethereum', description: 'Full-stack EVM development and layer 2s' },
      { name: 'Solana', description: 'Program development and protocol integration' },
      { name: 'Smart Contracts', description: 'DeFi, NFT, and complex contract architecture' },
    ],
  },
  fullStack: {
    name: 'Full-Stack',
    skills: [
      { name: 'TypeScript', description: 'Type-safe application development' },
      { name: 'React', description: 'Modern frontend UI and state management' },
      { name: 'Next.js', description: 'Full-stack JavaScript framework' },
      { name: 'Node.js', description: 'Backend services and API development' },
      { name: 'PostgreSQL', description: 'Database design and optimization' },
      { name: 'Tailwind CSS', description: 'Modern CSS framework' },
    ],
  },
  devOps: {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', description: 'Containerization and deployment' },
      { name: 'AWS', description: 'Cloud infrastructure and services' },
      { name: 'GitHub', description: 'Version control and CI/CD pipelines' },
      { name: 'Hardhat', description: 'Contract testing, deployment, and gas analysis' },
      { name: 'Foundry', description: 'Advanced Solidity testing framework' },
      { name: 'Truffle', description: 'Smart contract development suite' },
    ],
  },
  security: {
    name: 'Security & Testing',
    skills: [
      { name: 'Auditing', description: 'Smart contract security reviews and best practices' },
      { name: 'Formal Verification', description: 'Mathematical correctness proving' },
      { name: 'Hardhat Tests', description: 'Comprehensive contract testing' },
      { name: 'MythX', description: 'Automated smart contract security analysis' },
      { name: 'Access Control', description: 'Role-based permissions and security models' },
      { name: 'Gas Optimization', description: 'Performance and cost optimization' },
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
          <p className={styles.subtitle}>Production-grade expertise across blockchain, full-stack, and DevOps.</p>
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
              <span className={styles.icon}>🔗</span>
              <span>Cross-chain protocol design and implementation</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>⚡</span>
              <span>Gas optimization and performance tuning</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🔒</span>
              <span>Security auditing and vulnerability detection</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>📊</span>
              <span>DeFi mechanics and AMM architecture</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🎨</span>
              <span>Full-stack dApp development and UX</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.icon}>🚀</span>
              <span>Scaling solutions and layer 2 optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
