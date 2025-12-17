'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './FeaturedWork.module.css';

interface CaseStudy {
  id: string;
  title: string;
  descriptor: string;
  impact: string;
  tech: string[];
  image?: string;
  details?: {
    overview: string;
    role: string;
    results: string[];
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 'amm-protocol',
    title: 'Next-Gen AMM Protocol',
    descriptor: 'Ethereum AMM with concentrated liquidity',
    impact: '$450M+ TVL, 50k+ daily active users',
    tech: ['Solidity', 'Hardhat', 'Uniswap V3', 'React', 'Web3.js'],
    details: {
      overview: 'Architected and deployed a concentrated liquidity AMM protocol reducing slippage by 40% compared to traditional AMMs while maintaining capital efficiency.',
      role: 'Lead Smart Contract Developer',
      results: [
        'Reduced gas costs by 35% through optimized state management',
        'Implemented multi-tier fee structures for improved LP returns',
        'Achieved 99.9% uptime across mainnet deployments'
      ]
    }
  },
  {
    id: 'nft-marketplace',
    title: 'Enterprise NFT Marketplace',
    descriptor: 'Solana-based digital asset trading platform',
    impact: '300k+ NFT transactions, $120M volume',
    tech: ['Rust', 'Solana Program Library', 'Next.js', 'TypeScript'],
    details: {
      overview: 'Built a high-performance NFT marketplace on Solana with sub-second transaction finality and support for complex trading mechanics.',
      role: 'Full-Stack Blockchain Engineer',
      results: [
        'Processed 300k+ transactions without performance degradation',
        'Implemented royalty enforcement at protocol level',
        'Reduced transaction costs to <$0.01 per trade'
      ]
    }
  },
  {
    id: 'cross-chain-bridge',
    title: 'Cross-Chain Bridge Protocol',
    descriptor: 'Multi-chain token bridge (Ethereum, Polygon, Arbitrum)',
    impact: '$85M+ secured, 99.95% uptime',
    tech: ['Solidity', 'LayerZero', 'Python', 'Go', 'AWS'],
    details: {
      overview: 'Designed and implemented a trustless cross-chain bridge enabling seamless asset transfers across multiple EVM and non-EVM networks with enhanced security.',
      role: 'Lead Protocol Architect',
      results: [
        'Reduced bridge latency from 10min to 30 seconds',
        'Passed comprehensive third-party security audit',
        'Integrated with 5+ blockchain networks'
      ]
    }
  },
  {
    id: 'lending-protocol',
    title: 'Algorithmic Lending Protocol',
    descriptor: 'Ethereum lending protocol with dynamic interest rates',
    impact: '$200M+ deposits, 15% average APY',
    tech: ['Solidity', 'Compound', 'Aave', 'Oracle Networks', 'React'],
    details: {
      overview: 'Developed a sophisticated lending protocol with dynamic interest rate optimization and comprehensive risk management systems.',
      role: 'Smart Contract Architect',
      results: [
        'Implemented sophisticated interest rate curve optimization',
        'Reduced liquidation cascades through improved risk modeling',
        'Achieved consistent 99%+ capital utilization'
      ]
    }
  },
];

export default function FeaturedWork() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
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
    <>
      <section id="work" ref={sectionRef} className={`${styles.work} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className="section-title">Selected Work</h2>
            <p className={styles.subtitle}>Curated projects shipping production-grade blockchain systems.</p>
          </div>

          <div className={styles.grid}>
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={styles.card}
                onClick={() => setSelectedStudy(study)}
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`,
                }}
              >
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{study.title}</h3>
                  <p className={styles.cardDescriptor}>{study.descriptor}</p>
                  <p className={styles.cardImpact}>{study.impact}</p>

                  <div className={styles.tech}>
                    {study.tech.slice(0, 3).map((t) => (
                      <span key={t} className={styles.techPill}>
                        {t}
                      </span>
                    ))}
                    {study.tech.length > 3 && (
                      <span className={styles.techPill}>+{study.tech.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className={styles.cardCta}>
                  View case study
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M10 5l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedStudy && (
        <div className={styles.modalOverlay} onClick={() => setSelectedStudy(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedStudy(null)}>
              ✕
            </button>

            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{selectedStudy.title}</h2>
                <p className={styles.modalDescriptor}>{selectedStudy.descriptor}</p>
              </div>

              <div className={styles.modalBody}>
                {selectedStudy.details?.overview && (
                  <div className={styles.section}>
                    <h3>Overview</h3>
                    <p>{selectedStudy.details.overview}</p>
                  </div>
                )}

                {selectedStudy.details?.role && (
                  <div className={styles.section}>
                    <h3>My Role</h3>
                    <p>{selectedStudy.details.role}</p>
                  </div>
                )}

                <div className={styles.section}>
                  <h3>Impact & Results</h3>
                  <ul className={styles.resultsList}>
                    {selectedStudy.details?.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.section}>
                  <h3>Tech Stack</h3>
                  <div className={styles.techStack}>
                    {selectedStudy.tech.map((t) => (
                      <span key={t} className={styles.techPillLarge}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
