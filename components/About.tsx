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
              Senior PHP/JavaScript Developer with 5+ years of experience building robust, scalable web applications. Specialized in PHP 8.1+, Laravel, Symfony, and modern JavaScript frameworks. Passionate about delivering clean, maintainable code and leveraging the latest technologies to solve complex business challenges.
            </p>
            <p>
              I design and implement RESTful APIs, architect backend services, and build dynamic frontends using JavaScript (Vue.js, AngularJS). I have deep experience with MySQL, PostgreSQL, Redis, and cloud automation for web deployments.
            </p>
            <p>
              I thrive in cross-functional teams, collaborating with product, QA, and frontend engineers to deliver high-quality, user-focused solutions from prototype to production.
            </p>
          </div>
          <div className={styles.facts}> 
            <div className={styles.factItem}> 
              <div className={styles.factLabel}>Location</div> 
              <div className={styles.factValue}>Remote</div>
            </div>
            <div className={styles.factItem}> 
              <div className={styles.factLabel}>Experience</div> 
              <div className={styles.factValue}>5+ years</div> 
            </div>
            <div className={styles.factItem}> 
              <div className={styles.factLabel}>Primary Focus</div> 
              <div className={styles.factValue}>PHP, JavaScript, Web Development</div> 
            </div>
            <div className={styles.factItem}> 
              <div className={styles.factLabel}>Backend Stack</div> 
              <div className={styles.factValue}>PHP 8.1+, Laravel, Symfony, RESTful APIs</div> 
            </div>
            <div className={styles.factItem}> 
              <div className={styles.factLabel}>Frontend & Tooling</div> 
              <div className={styles.factValue}>JavaScript (Vue.js, AngularJS), HTML5, CSS3, Git, Docker</div> 
            </div>
            <div className={styles.factItem}> 
              <div className={styles.factLabel}>Open To</div> 
              <div className={styles.factValue}>Collaboration & Contract Roles</div> 
            </div>
          </div>
        </div>
        <div className={styles.values}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔒</div>
            <h3>Security First</h3>
            <p>Secure coding practices, regular code reviews, and robust authentication/authorization for every project.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>⚡</div>
            <h3>Performance Obsessed</h3>
            <p>Optimized queries, scalable architecture, and efficient code for high-performance web applications.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤝</div>
            <h3>Team Collaboration</h3>
            <p>Working closely with cross-functional teams to deliver reliable, maintainable, and user-focused solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
