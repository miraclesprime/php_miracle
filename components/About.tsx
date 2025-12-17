'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './About.module.css';

export default function About() {
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
    <section id="about" ref={sectionRef} className={`${styles.about} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h2 className="section-title">About & Value</h2>

        <div className={styles.content}>
          <div className={styles.narrative}>
            <p>
              I'm a Senior Blockchain Engineer with 5+ years building production-grade systems on Ethereum and Solana. My expertise spans full-stack DeFi protocols, NFT infrastructure, and cross-chain interoperability—from smart contract architecture to gas optimization and security.
            </p>
            <p>
              I thrive at the intersection of complex protocol design and practical engineering. Whether architecting a novel AMM mechanism, optimizing contract deployments for cost efficiency, or building resilient bridges between chains, I focus on solutions that scale, secure, and perform.
            </p>
            <p>
              My approach: deep protocol understanding, meticulous testing, and a bias toward clean, auditable code. I work best in distributed, execution-focused teams shipping real products to real users.
            </p>
          </div>

          <div className={styles.facts}>
            <div className={styles.factItem}>
              <div className={styles.factLabel}>Location</div>
              <div className={styles.factValue}>Singapore (Remote-first)</div>
            </div>

            <div className={styles.factItem}>
              <div className={styles.factLabel}>Experience</div>
              <div className={styles.factValue}>5+ Years in Web3</div>
            </div>

            <div className={styles.factItem}>
              <div className={styles.factLabel}>Primary Focus</div>
              <div className={styles.factValue}>DeFi & NFT Protocols</div>
            </div>

            <div className={styles.factItem}>
              <div className={styles.factLabel}>Blockchains</div>
              <div className={styles.factValue}>Ethereum, Solana, Polygon, Arbitrum, Optimism</div>
            </div>

            <div className={styles.factItem}>
              <div className={styles.factLabel}>Expertise</div>
              <div className={styles.factValue}>Smart Contracts, Cross-Chain Architecture</div>
            </div>

            <div className={styles.factItem}>
              <div className={styles.factLabel}>Open To</div>
              <div className={styles.factValue}>Collaboration & Advisory</div>
            </div>
          </div>
        </div>

        <div className={styles.values}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔒</div>
            <h3>Security First</h3>
            <p>Every contract audited, every mechanism tested. Security is never a trade-off.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>⚡</div>
            <h3>Performance Obsessed</h3>
            <p>Gas optimization, efficient state design, and scalable architecture by default.</p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔗</div>
            <h3>Cross-Chain Ready</h3>
            <p>Building protocols that work seamlessly across multiple blockchains and layers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
