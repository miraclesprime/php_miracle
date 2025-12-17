'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];
    const particleCount = 50;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.fillStyle = 'rgba(212, 175, 55, 0.5)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleScroll = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      const navHeight = 72;
      const top = workSection.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.canvas}>
        <canvas ref={canvasRef}></canvas>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>Senior Blockchain Engineer</div>

          <h1 className={styles.title}>
            Building Ethereum & Solana
            <br />
            <span className={styles.highlight}>DeFi, NFTs & Cross-Chain</span>
            <br />
            Systems at Scale
          </h1>

          <p className={styles.subtitle}>
            Production-ready blockchain architecture. Performance-optimized smart contracts.
            Cross-chain interoperability. Security-first development.
          </p>

          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>300k+</span>
              <span className={styles.metricLabel}>NFT Txs Handled</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>20+</span>
              <span className={styles.metricLabel}>DeFi Protocols</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>5+</span>
              <span className={styles.metricLabel}>Blockchains</span>
            </div>
          </div>

          <div className={styles.ctas}>
            <button className="btn btn-primary">Let's Collaborate</button>
            <button className={`btn btn-secondary ${styles.scrollBtn}`} onClick={handleScroll}>
              View Selected Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v12M13 8l-5 5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.glowCircle}></div>
          <div className={styles.gradientBg}></div>
        </div>
      </div>
    </section>
  );
}
