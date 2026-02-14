import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from "../assets/logo_nb.png";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { 
      label: 'Products', 
      path: '/products',
      dropdown: [
        { label: 'All Products', path: '/products' },
        { label: 'Interrogators', path: '/products/interrogators' },
        { label: 'Optical Switches', path: '/products/switches' },
        { label: 'FBG Sensors', path: '/products/fbg-sensors' },
      ]
    },
    { 
      label: 'Services', 
      path: '/services',
      dropdown: [
        { label: 'All Services', path: '/services' },
        { label: 'Consulting', path: '/services/consulting' },
        { label: 'Installation', path: '/services/installation' },
      ]
    },
    { 
      label: 'Resources', 
      path: '/applications',
      dropdown: [
        { label: 'Applications', path: '/applications' },
        { label: 'Publications', path: '/publications' },
      ]
    },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          <img src={logoImage} alt="OptiCore Logo" style={styles.logoImage} />
          <span style={styles.logoCore}>OPTI</span>
          <span style={styles.logoOptic}>CORE</span>
        </Link>

        {/* Desktop Navigation */}
        <div style={styles.desktopNav}>
          {navItems.map((item) => (
            <div 
              key={item.label}
              style={styles.navItemWrapper}
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.path}
                style={{
                  ...styles.navLink,
                  color: isActive(item.path) ? '#00ff88' : 'rgba(255,255,255,0.8)',
                }}
              >
                {item.label}
                {item.dropdown && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" style={{marginLeft: '5px'}}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                )}
              </Link>
              
              {/* Dropdown */}
              {item.dropdown && activeDropdown === item.label && (
                <div style={styles.dropdown}>
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.path}
                      to={subItem.path}
                      style={styles.dropdownLink}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" style={styles.ctaButton}>
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button 
          style={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span style={{
            ...styles.hamburgerLine,
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            ...styles.hamburgerLine,
            opacity: mobileMenuOpen ? 0 : 1,
          }} />
          <span style={{
            ...styles.hamburgerLine,
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          {navItems.map((item) => (
            <div key={item.label}>
              <Link 
                to={item.path}
                style={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown && item.dropdown.slice(1).map((subItem) => (
                <Link 
                  key={subItem.path}
                  to={subItem.path}
                  style={styles.mobileSubLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: 'rgba(2, 8, 16, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0, 200, 255, 0.1)',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '15px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '20px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: "8px",
  },
  logoImage: {
    width: "60px",  
    height: "60px",
    objectFit: "contain",
  },
  logoCore: {
    color: '#ff3300',
    textShadow: '0 0 15px rgba(255, 51, 0, 0.5)',
  },
  logoOptic: {
    color: '#00ff88',
    textShadow: '0 0 15px rgba(0, 255, 136, 0.5)',
   
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  navItemWrapper: {
    position: 'relative',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 18px',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    letterSpacing: '0.5px',
    transition: 'color 0.3s',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '0',
    background: 'rgba(2, 15, 30, 0.98)',
    border: '1px solid rgba(0, 200, 255, 0.2)',
    borderRadius: '8px',
    padding: '10px 0',
    minWidth: '200px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
  },
  dropdownLink: {
    display: 'block',
    padding: '12px 20px',
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'all 0.2s',
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    color: '#fff',
    padding: '12px 28px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '1px',
    boxShadow: '0 0 20px rgba(255, 51, 0, 0.3)',
    transition: 'transform 0.2s',
  },
  mobileMenuBtn: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
  },
  hamburgerLine: {
    width: '25px',
    height: '2px',
    background: '#00ccff',
    transition: 'all 0.3s',
  },
  mobileMenu: {
    display: 'none',
    padding: '20px',
    background: 'rgba(2, 15, 30, 0.98)',
    borderTop: '1px solid rgba(0, 200, 255, 0.1)',
  },
  mobileNavLink: {
    display: 'block',
    padding: '15px 0',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 500,
    borderBottom: '1px solid rgba(0, 200, 255, 0.1)',
  },
  mobileSubLink: {
    display: 'block',
    padding: '12px 0 12px 20px',
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '15px',
  },
};

// Add responsive styles via media query
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (max-width: 968px) {
    .desktop-nav { display: none !important; }
    .mobile-menu-btn { display: flex !important; }
    .mobile-menu { display: block !important; }
    .cta-button { display: none !important; }
  }
`;
document.head.appendChild(styleSheet);

export default Navbar;
