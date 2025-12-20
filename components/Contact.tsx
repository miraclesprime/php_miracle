'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className={`${styles.contact} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="section-title">Get In Touch</h2>
          <p className={styles.subtitle}>
            Open to collaborating with teams building serious Web3 products. Let's create something exceptional.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.methods}>
            <h3>Contact Methods</h3>
            <p className={styles.description}>
              Reach out via email or LinkedIn for inquiries, collaborations, or just a technical discussion.
            </p>

            <div className={styles.contactLinks}>
              <a href="mailto:devmaster116@gmail.com" className={styles.contactLink}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <div className={styles.label}>Email</div>
                  <div className={styles.value}>devmaster116@gmail.com</div>
                </div>
              </a>

{/*               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.icon}>🔗</span>
                <div>
                  <div className={styles.label}>LinkedIn</div>
                  <div className={styles.value}>linkedin.com/in/ryantan</div>
                </div>
              </a> */}

              <a href="https://github.com/devmaster116" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.icon}>🐙</span>
                <div>
                  <div className={styles.label}>GitHub</div>
                  <div className={styles.value}>github.com/devmaster116</div>
                </div>
              </a>

{/*               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.icon}>𝕏</span>
                <div>
                  <div className={styles.label}>Twitter</div>
                  <div className={styles.value}>@ryantan_eth</div>
                </div>
              </a> */}
            </div>

            <div className={styles.scheduling}>
              <p>Or schedule a quick 30-minute intro call:</p>
              <button className="btn btn-secondary">Schedule Call</button>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company">Company (Optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className={styles.successMessage}>
                ✓ Thank you! I'll get back to you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
