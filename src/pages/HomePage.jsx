import { Link } from 'react-router-dom';
import fiberDemo from '../assets/videos/0111.mp4';
import interrogatorsImg from '../assets/fbg_int.png';
import dasSystemsImg from '../assets/das.png';
import fbgSensorsImg from '../assets/fbg_sensor2.png';
import shmImg from '../assets/bridge.png';
import oilGasImg from '../assets/oil.png';
import aerospaceImg from '../assets/areospace.png';
import powerImg from '../assets/power.png';
import civilImg from '../assets/civil.png';
import geotechImg from '../assets/geotech.png';



const HomePage = () => {
  const products = [
    {
      title: 'FBG Interrogators',
      desc: 'High-speed, multi-channel interrogation systems for precise FBG sensor measurements.',
      image: interrogatorsImg,
      color: '#ff3300',
      link: '/products/interrogators',
    },
    {
      title: 'DAS Systems',
      desc: 'Fast, reliable Distributed Acoustic Systems for long distance acoustic measurements and monitoring.',
      image: dasSystemsImg,
      color: '#00ff88',
      link: '/products/switches',
    },
    {
      title: 'FBG Sensors',
      desc: 'From bare fiber gratings to fully packaged sensors for any application.',
      image: fbgSensorsImg,
      color: '#00ccff',
      link: '/products/fbg-sensors',
    },
  ];

  const applications = [
  { name: 'Structural Health Monitoring', img: shmImg },
  { name: 'Oil & Gas Pipelines', img: oilGasImg },
  { name: 'Aerospace & Aviation', img: aerospaceImg },
  { name: 'Power & Energy', img: powerImg },
  { name: 'Civil Infrastructure', img: civilImg },
  { name: 'Geotechnical', img: geotechImg },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Advanced <span style={styles.highlight}>Fiber Optic</span> Sensing Solutions
          </h1>
          <p style={styles.heroSubtitle}>
            Industry-leading FBG interrogators, distributed sensing systems, and optical components 
            for structural health monitoring, energy, and industrial applications.
          </p>
          <div style={styles.heroCta}>
            <Link to="/products" style={styles.primaryBtn}>
              Explore Products
            </Link>
            <Link to="/contact" style={styles.secondaryBtn}>
              Request Quote
            </Link>
          </div>
        </div>
        
        {/* Animated fiber lines */}
        <div style={styles.fiberAnimation}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{
              ...styles.fiberLine,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }} />
          ))}
        </div>
      </section>

      {/* Animated Showcase Section */}
<section style={styles.showcaseSection}>
  <video 
    autoPlay 
    loop 
    muted 
    style={styles.showcaseVideo}
  >
    <source src={fiberDemo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p style={styles.showcaseText}>
    Advanced fiber optic solutions
  </p>
</section>


      {/* Products Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our Products</h2>
          <p style={styles.sectionSubtitle}>
            Comprehensive fiber optic sensing solutions for demanding applications
          </p>
        </div>
        <div style={styles.productsGrid}>
          {products.map((product) => (
            <Link to={product.link} key={product.title} style={styles.productCard}>
              <div style={styles.productImageContainer}>
  <img 
    src={product.image} 
    alt={product.title} 
    style={styles.productImage} 
  />
</div>

              <h3 style={styles.productTitle}>{product.title}</h3>
              <p style={styles.productDesc}>{product.desc}</p>
              <span style={{...styles.productLink, color: product.color}}>
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Applications Section */}
      <section style={styles.applicationsSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Applications</h2>
          <p style={styles.sectionSubtitle}>
            Trusted across industries for critical sensing applications
          </p>
        </div>
        <div style={styles.applicationsGrid}>
         {applications.map((app) => (
    <div key={app.name} style={styles.appCard}>
      <img src={app.img} alt={app.name} style={styles.appImage} />
      <span style={styles.appName}>{app.name}</span>
    </div>
          ))}
        </div>
        <div style={styles.centerCta}>
          <Link to="/applications" style={styles.outlineBtn}>
            View All Applications
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.section}>
        <div style={styles.servicesContainer}>
          <div style={styles.servicesContent}>
            <h2 style={styles.sectionTitle}>Expert Services</h2>
            <p style={styles.servicesDesc}>
              From initial consultation to full system installation and ongoing support, 
              our team of fiber optic specialists ensures your sensing solution delivers 
              optimal performance.
            </p>
            <div style={styles.servicesList}>
              <div style={styles.serviceItem}>
                <span style={styles.serviceIcon}>📋</span>
                <div>
                  <h4 style={styles.serviceTitle}>Consulting</h4>
                  <p style={styles.serviceDesc}>System design and feasibility analysis</p>
                </div>
              </div>
              <div style={styles.serviceItem}>
                <span style={styles.serviceIcon}>🔧</span>
                <div>
                  <h4 style={styles.serviceTitle}>Installation</h4>
                  <p style={styles.serviceDesc}>Professional deployment and commissioning</p>
                </div>
              </div>
              <div style={styles.serviceItem}>
                <span style={styles.serviceIcon}>🎓</span>
                <div>
                  <h4 style={styles.serviceTitle}>Training</h4>
                  <p style={styles.serviceDesc}>Comprehensive operator training programs</p>
                </div>
              </div>
            </div>
            <Link to="/services" style={styles.primaryBtn}>
              Our Services
            </Link>
          </div>
          <div style={styles.servicesImage}>
            <div style={styles.servicesImagePlaceholder}>
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" stroke="#00ff88" strokeWidth="2" fill="none" opacity="0.3"/>
                <circle cx="100" cy="100" r="60" stroke="#00ccff" strokeWidth="2" fill="none" opacity="0.5"/>
                <circle cx="100" cy="100" r="40" stroke="#ff6600" strokeWidth="2" fill="none" opacity="0.7"/>
                <circle cx="100" cy="100" r="20" fill="#ff3300" opacity="0.8"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
        <p style={styles.ctaDesc}>
          Contact our team to discuss your fiber optic sensing requirements
        </p>
        <div style={styles.ctaButtons}>
          <Link to="/contact" style={styles.ctaPrimaryBtn}>
            Contact Us
          </Link>
          <Link to="/products" style={styles.ctaSecondaryBtn}>
            Browse Products
          </Link>
        </div>
      </section>

      <style>{`
      @keyframes servicePulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(0, 255, 136, 0.6);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
  }
}

        @keyframes fiberPulse {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
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
    position: 'relative',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 40px',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 50%, rgba(255, 51, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
    `,
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '900px',
  },
  productImageContainer: {
  width: '270px',
  height: '160px',
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},

productImage: {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
},

  heroTitle: {
    fontSize: '56px',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '25px',
    fontFamily: "'Orbitron', sans-serif",
  },
  highlight: {
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '20px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.7,
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
  },
  heroCta: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    color: '#fff',
    padding: '16px 40px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
    boxShadow: '0 0 30px rgba(255, 51, 0, 0.3)',
    transition: 'transform 0.2s',
  },
  secondaryBtn: {
    background: 'transparent',
    color: '#00ff88',
    padding: '16px 40px',
    borderRadius: '6px',
    border: '2px solid #00ff88',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
    transition: 'all 0.3s',
  },
  fiberAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  fiberLine: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #00ff88, #00ccff, transparent)',
    animation: 'fiberPulse 4s ease-in-out infinite',
  },

  showcaseSection: {
  padding: '100px 40px',
  textAlign: 'center',
  background: 'rgba(0, 20, 40, 0.5)',
},
showcaseVideo: {
  width: '100%',
  maxWidth: '1200px',
  borderRadius: '20px',
  boxShadow: '0 0 30px rgba(0, 255, 136, 0.2)',
},
showcaseText: {
  marginTop: '20px',
  fontSize: '18px',
  color: 'rgba(255,255,255,0.7)',
},

  stats: {
    background: 'rgba(0, 30, 60, 0.5)',
    padding: '60px 40px',
    borderTop: '1px solid rgba(0, 200, 255, 0.1)',
    borderBottom: '1px solid rgba(0, 200, 255, 0.1)',
  },
  statsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
    textAlign: 'center',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  statNumber: {
    fontSize: '48px',
    fontWeight: 700,
    fontFamily: "'Orbitron', sans-serif",
    color: '#00ff88',
    textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
  },
  statLabel: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: '1px',
  },
  section: {
    padding: '100px 40px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '42px',
    fontWeight: 700,
    marginBottom: '15px',
    fontFamily: "'Orbitron', sans-serif",
    color: '#fff',
  },
  sectionSubtitle: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.6)',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  },
  productCard: {
    background: 'rgba(0, 30, 60, 0.5)',
    border: '1px solid rgba(0, 200, 255, 0.2)',
    borderRadius: '16px',
    padding: '40px 30px',
    textDecoration: 'none',
    transition: 'all 0.3s',
    display: 'flex',
    flexDirection: 'column',
  },
  productIcon: {
    fontSize: '48px',
    marginBottom: '20px',
    fontFamily: 'monospace',
  },
  productTitle: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '15px',
  },
  productDesc: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.7,
    flex: 1,
    marginBottom: '20px',
  },
  productLink: {
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  applicationsSection: {
    padding: '100px 40px',
    background: 'rgba(0, 20, 40, 0.5)',
  },
  applicationsGrid: {
  display: 'flex',
  gap: '20px',
  overflowX: 'auto',      // horizontal scroll
  padding: '10px 0',
  scrollbarWidth: 'thin', // optional, for Firefox
  scrollbarColor: '#00ccff transparent',
  },
appCard: {
  minWidth: '200px',        // ensures each card has enough space
  background: 'rgba(0, 50, 100, 0.3)',
  border: '1px solid rgba(0, 200, 255, 0.1)',
  borderRadius: '12px',
  padding: '20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  flexShrink: 0,            // prevents shrinking when scrolling
},
appImage: {
  width: '380px',
  height: '260px',
  objectFit: 'contain',     // keeps image ratio
},
appName: {
  fontSize: '14px',
  color: 'rgba(255,255,255,0.8)',
  fontWeight: 500,
},

  appIcon: {
    fontSize: '36px',
  },
  appName: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
    fontWeight: 500,
  },
  centerCta: {
    textAlign: 'center',
  },
  outlineBtn: {
    display: 'inline-block',
    background: 'transparent',
    color: '#00ccff',
    padding: '14px 35px',
    borderRadius: '6px',
    border: '2px solid #00ccff',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  servicesContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center',
  },
  servicesContent: {},
  servicesDesc: {
    fontSize: '17px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.8,
    margin: '25px 0 35px',
  },
  servicesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    marginBottom: '40px',
  },
  serviceItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
  },
  serviceIcon: {
    fontSize: '28px',
    background: 'rgba(0, 200, 255, 0.1)',
    padding: '15px',
    borderRadius: '12px',
  },
  serviceTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '5px',
  },
  serviceDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
  },
  servicesImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  servicesImagePlaceholder: {
    width: '100%',
    maxWidth: '400px',
    aspectRatio: '1',
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(0, 200, 255, 0.2)',
    animation: 'servicePulse 3s ease-in-out infinite',
    transition: 'all 0.3s ease',

  },
  ctaSection: {
    background: 'linear-gradient(135deg, rgba(255, 51, 0, 0.1), rgba(0, 255, 136, 0.1))',
    padding: '100px 40px',
    textAlign: 'center',
    borderTop: '1px solid rgba(0, 200, 255, 0.1)',
  },
  ctaTitle: {
    fontSize: '42px',
    fontWeight: 700,
    marginBottom: '20px',
    fontFamily: "'Orbitron', sans-serif",
  },
  ctaDesc: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '40px',
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  ctaPrimaryBtn: {
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    color: '#fff',
    padding: '18px 50px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  ctaSecondaryBtn: {
    background: 'transparent',
    color: '#fff',
    padding: '18px 50px',
    borderRadius: '6px',
    border: '2px solid rgba(255,255,255,0.3)',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
};

export default HomePage;
