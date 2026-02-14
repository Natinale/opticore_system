import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Footer Content */}
        <div style={styles.footerGrid}>
          {/* Company Info */}
          <div style={styles.footerSection}>
            <div style={styles.footerLogo}>
              <span style={styles.logoCore}>OPTI</span>
              <span style={styles.logoOptic}>CORE</span>
            </div>
            <p style={styles.footerDesc}>
              Leading provider of fiber optic sensing solutions, FBG interrogators, 
              and distributed sensing systems for industrial applications worldwide.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="#" style={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.43-.01-.64.96-.69 1.79-1.56 2.45-2.55z"/>
                </svg>
              </a>
              <a href="#" style={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Products</h4>
            <Link to="/products/interrogators" style={styles.footerLink}>Interrogators</Link>
            <Link to="/products/switches" style={styles.footerLink}>Optical Switches</Link>
            <Link to="/products/fbg-sensors" style={styles.footerLink}>FBG Sensors</Link>
            <Link to="/products" style={styles.footerLink}>All Products</Link>
          </div>

          {/* Services */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Services</h4>
            <Link to="/services/consulting" style={styles.footerLink}>Consulting</Link>
            <Link to="/services/installation" style={styles.footerLink}>Installation</Link>
            <Link to="/services" style={styles.footerLink}>All Services</Link>
          </div>

          {/* Resources */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Resources</h4>
            <Link to="/applications" style={styles.footerLink}>Applications</Link>
            <Link to="/publications" style={styles.footerLink}>Publications</Link>
            <Link to="/about" style={styles.footerLink}>About Us</Link>
            <Link to="/contact" style={styles.footerLink}>Contact</Link>
          </div>

          {/* Contact */}
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Contact Us</h4>
            <p style={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#00ff88" style={{marginRight: '10px'}}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Johannesburg, South Africa
            </p>
            <p style={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#00ff88" style={{marginRight: '10px'}}>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@coreoptic.com
            </p>
            <p style={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#00ff88" style={{marginRight: '10px'}}>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +27 (0) 11 XXX XXXX
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} OptiCore. All rights reserved.
          </p>
          <div style={styles.bottomLinks}>
            <a href="#" style={styles.bottomLink}>Privacy Policy</a>
            <a href="#" style={styles.bottomLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'rgba(0, 10, 20, 0.95)',
    borderTop: '1px solid rgba(0, 200, 255, 0.1)',
    color: '#fff',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '60px 40px 30px',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr',
    gap: '40px',
    marginBottom: '50px',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerLogo: {
    fontSize: '24px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
    marginBottom: '20px',
  },
  logoCore: {
    color: '#ff3300',
  },
  logoOptic: {
    color: '#00ff88',
    marginLeft: '8px',
  },
  footerDesc: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    lineHeight: 1.7,
    marginBottom: '20px',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
  },
  socialLink: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    background: 'rgba(0, 200, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00ccff',
    transition: 'all 0.3s',
  },
  footerTitle: {
    color: '#00ff88',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
    marginBottom: '20px',
    fontFamily: "'Orbitron', sans-serif",
  },
  footerLink: {
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '14px',
    marginBottom: '12px',
    transition: 'color 0.3s',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    marginBottom: '15px',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    borderTop: '1px solid rgba(0, 200, 255, 0.1)',
  },
  copyright: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '13px',
  },
  bottomLinks: {
    display: 'flex',
    gap: '30px',
  },
  bottomLink: {
    color: 'rgba(255,255,255,0.4)',
    textDecoration: 'none',
    fontSize: '13px',
  },
};

export default Footer;
