'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Experience.module.css';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'blockchain' | 'fullStack' | 'backend';
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'DeFi Protocol Labs',
    role: 'Senior Smart Contract Engineer',
    location: 'Remote',
    startDate: 'Jan 2022',
    endDate: 'Present',
    type: 'blockchain',
    highlights: [
      'Lead architect for multi-chain AMM protocol reaching $450M TVL',
      'Implemented advanced concentrated liquidity mechanisms reducing slippage by 40%',
      'Managed security audits and implemented recommendations achieving 100% pass rate',
    ],
  },
  {
    company: 'Solana Ventures',
    role: 'Blockchain Engineer',
    location: 'Remote',
    startDate: 'Jun 2021',
    endDate: 'Dec 2021',
    type: 'blockchain',
    highlights: [
      'Built high-performance NFT marketplace handling 300k+ transactions',
      'Optimized transaction costs to <$0.01 per trade using Solana',
      'Designed royalty enforcement at protocol level for creators',
    ],
  },
  {
    company: 'Bridge Protocol Inc',
    role: 'Lead Protocol Architect',
    location: 'Singapore',
    startDate: 'Mar 2020',
    endDate: 'May 2021',
    type: 'blockchain',
    highlights: [
      'Architected trustless cross-chain bridge securing $85M+ in assets',
      'Integrated 5+ blockchain networks with enhanced security measures',
      'Reduced bridge latency from 10 minutes to 30 seconds through optimization',
    ],
  },
  {
    company: 'Tech Innovations Ltd',
    role: 'Full-Stack Developer',
    location: 'Singapore',
    startDate: 'Jan 2019',
    endDate: 'Feb 2020',
    type: 'fullStack',
    highlights: [
      'Built scalable microservices architecture using Node.js and React',
      'Implemented PostgreSQL database optimization improving query performance by 60%',
      'Led team of 3 engineers delivering 2 major product features',
    ],
  },
  {
    company: 'StartUp Blockchain Labs',
    role: 'Junior Developer',
    location: 'Remote',
    startDate: 'Jun 2018',
    endDate: 'Dec 2018',
    type: 'backend',
    highlights: [
      'Developed RESTful APIs handling 10k+ daily active users',
      'Implemented automated testing pipeline reducing bugs by 45%',
      'Contributed to core blockchain integration features',
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
    blockchain: 'var(--accent-gold)',
    fullStack: 'var(--accent-blue)',
    backend: 'var(--success)',
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
                  {exp.type === 'blockchain' ? 'Blockchain' : exp.type === 'fullStack' ? 'Full-Stack' : 'Backend'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
