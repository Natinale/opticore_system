import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Contact Us</h1>
        <p style={styles.heroSubtitle}>
          Get in touch with our team for product inquiries, technical support, or partnership opportunities
        </p>
      </section>

      {/* Contact Content */}
      <section style={styles.contactSection}>
        <div style={styles.contactGrid}>
          {/* Contact Info */}
          <div style={styles.contactInfo}>
            <h2 style={styles.infoTitle}>Get In Touch</h2>
            <p style={styles.infoDesc}>
              Our team is ready to help you find the right fiber optic sensing solution 
              for your application. Reach out and we'll respond within 24 hours.
            </p>

            <div style={styles.infoItems}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#00ff88">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={styles.infoLabel}>Address</h4>
                  <p style={styles.infoText}>
                    123 Innovation Drive<br />
                    Sandton, Johannesburg<br />
                    South Africa, 2196
                  </p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#00ff88">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={styles.infoLabel}>Email</h4>
                  <p style={styles.infoText}>
                    info@coreoptic.com<br />
                    sales@coreoptic.com<br />
                    support@coreoptic.com
                  </p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#00ff88">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={styles.infoLabel}>Phone</h4>
                  <p style={styles.infoText}>
                    +27 (0) 11 XXX XXXX<br />
                    +27 (0) 82 XXX XXXX
                  </p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#00ff88">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={styles.infoLabel}>Business Hours</h4>
                  <p style={styles.infoText}>
                    Monday - Friday: 8:00 - 17:00<br />
                    Saturday: 9:00 - 13:00<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={styles.formContainer}>
            {submitted ? (
              <div style={styles.successMessage}>
                <div style={styles.successIcon}>✓</div>
                <h3 style={styles.successTitle}>Message Sent!</h3>
                <p style={styles.successText}>
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <button 
                  style={styles.resetBtn}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.formTitle}>Send us a Message</h2>
                
                <div style={styles.formRow}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={styles.input}
                      required
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={styles.input}
                      required
                    />
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={styles.select}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" style={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={styles.mapSection}>
        <div style={styles.mapPlaceholder}>
          <div style={styles.mapOverlay}>
            <span style={styles.mapPin}>📍</span>
            <p>CoreOptic Headquarters</p>
            <p style={styles.mapAddress}>Sandton, Johannesburg, South Africa</p>
          </div>
        </div>
      </section>

      <style>{`
        input:focus, select:focus, textarea:focus {
          border-color: #00ccff !important;
          box-shadow: 0 0 15px rgba(0, 204, 255, 0.3) !important;
          outline: none;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    color: '#fff',
  },
  hero: {
    padding: '120px 40px 80px',
    textAlign: 'center',
    background: 'linear-gradient(180deg, rgba(0, 30, 60, 0.5) 0%, transparent 100%)',
    borderBottom: '1px solid rgba(0, 200, 255, 0.1)',
  },
  heroTitle: {
    fontSize: '52px',
    fontWeight: 700,
    marginBottom: '20px',
    fontFamily: "'Orbitron', sans-serif",
  },
  heroSubtitle: {
    fontSize: '20px',
    color: 'rgba(255,255,255,0.7)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  contactSection: {
    padding: '100px 40px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '80px',
  },
  contactInfo: {},
  infoTitle: {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '20px',
    fontFamily: "'Orbitron', sans-serif",
  },
  infoDesc: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.7,
    marginBottom: '40px',
  },
  infoItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  infoItem: {
    display: 'flex',
    gap: '20px',
  },
  infoIcon: {
    width: '50px',
    height: '50px',
    background: 'rgba(0, 255, 136, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#00ff88',
    marginBottom: '8px',
  },
  infoText: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.6,
  },
  formContainer: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '20px',
    padding: '50px',
    border: '1px solid rgba(0, 200, 255, 0.2)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  formTitle: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '10px',
    fontFamily: "'Orbitron', sans-serif",
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    color: 'rgba(0, 200, 255, 0.8)',
    letterSpacing: '1px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  input: {
    background: 'rgba(0, 50, 100, 0.3)',
    border: '1px solid rgba(0, 200, 255, 0.3)',
    borderRadius: '8px',
    padding: '14px 16px',
    color: '#fff',
    fontSize: '15px',
    fontFamily: "'Rajdhani', sans-serif",
    transition: 'all 0.3s',
  },
  select: {
    background: 'rgba(0, 50, 100, 0.3)',
    border: '1px solid rgba(0, 200, 255, 0.3)',
    borderRadius: '8px',
    padding: '14px 16px',
    color: '#fff',
    fontSize: '15px',
    fontFamily: "'Rajdhani', sans-serif",
    cursor: 'pointer',
  },
  textarea: {
    background: 'rgba(0, 50, 100, 0.3)',
    border: '1px solid rgba(0, 200, 255, 0.3)',
    borderRadius: '8px',
    padding: '14px 16px',
    color: '#fff',
    fontSize: '15px',
    fontFamily: "'Rajdhani', sans-serif",
    resize: 'vertical',
    minHeight: '120px',
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    border: 'none',
    borderRadius: '8px',
    padding: '18px 40px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
    cursor: 'pointer',
    fontFamily: "'Rajdhani', sans-serif",
    marginTop: '10px',
    transition: 'transform 0.2s',
  },
  successMessage: {
    textAlign: 'center',
    padding: '40px',
  },
  successIcon: {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #00ff88, #00aa55)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 25px',
    fontSize: '40px',
    color: '#000',
  },
  successTitle: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '15px',
    fontFamily: "'Orbitron', sans-serif",
  },
  successText: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '30px',
  },
  resetBtn: {
    background: 'transparent',
    border: '2px solid #00ccff',
    borderRadius: '8px',
    padding: '14px 30px',
    color: '#00ccff',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Rajdhani', sans-serif",
  },
  mapSection: {
    padding: '0 40px 100px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  mapPlaceholder: {
    height: '400px',
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '20px',
    border: '1px solid rgba(0, 200, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  mapOverlay: {
    textAlign: 'center',
    zIndex: 10,
  },
  mapPin: {
    fontSize: '48px',
    display: 'block',
    marginBottom: '15px',
  },
  mapAddress: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    marginTop: '5px',
  },
};

export default ContactPage;
