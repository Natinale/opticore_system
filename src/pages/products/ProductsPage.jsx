import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const productCategories = [
    {
      title: 'FBG Interrogators',
      description: 'High-performance interrogation systems for Fiber Bragg Grating sensors. Multi-channel, high-speed acquisition with exceptional wavelength accuracy.',
      image: '◎',
      color: '#ff3300',
      link: '/products/interrogators',
      features: ['Up to 16 channels', 'High-speed scanning', 'Sub-pm resolution'],
    },
    {
      title: 'Optical Switches',
      description: 'Fast, reliable optical switches for fiber network routing, sensor multiplexing, and test & measurement applications.',
      image: '⟷',
      color: '#00ff88',
      link: '/products/switches',
      features: ['Low insertion loss', 'High repeatability', 'Long lifetime'],
    },
    {
      title: 'FBG Sensors',
      description: 'Complete range of FBG sensors from bare fiber gratings to fully packaged solutions for strain, temperature, and pressure measurement.',
      image: '|||',
      color: '#00ccff',
      link: '/products/fbg-sensors',
      features: ['Bare FBGs', 'Packaged sensors', 'Custom solutions'],
    },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Our Products</h1>
        <p style={styles.heroSubtitle}>
          Industry-leading fiber optic sensing equipment for demanding applications
        </p>
      </section>

      {/* Products Grid */}
      <section style={styles.productsSection}>
        <div style={styles.productsGrid}>
          {productCategories.map((category) => (
            <div key={category.title} style={styles.productCard}>
              <div style={{...styles.productImage, color: category.color}}>
                <span style={styles.productIcon}>{category.image}</span>
              </div>
              <div style={styles.productContent}>
                <h2 style={styles.productTitle}>{category.title}</h2>
                <p style={styles.productDesc}>{category.description}</p>
                <div style={styles.featuresList}>
                  {category.features.map((feature) => (
                    <span key={feature} style={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>
                <Link to={category.link} style={{...styles.productBtn, borderColor: category.color, color: category.color}}>
                  View Products →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={styles.whySection}>
        <h2 style={styles.sectionTitle}>Why Choose CoreOptic?</h2>
        <div style={styles.whyGrid}>
          <div style={styles.whyCard}>
            <div style={styles.whyIcon}>🎯</div>
            <h3 style={styles.whyTitle}>Precision</h3>
            <p style={styles.whyDesc}>Sub-picometer resolution for the most demanding measurement applications</p>
          </div>
          <div style={styles.whyCard}>
            <div style={styles.whyIcon}>⚡</div>
            <h3 style={styles.whyTitle}>Speed</h3>
            <p style={styles.whyDesc}>High-speed data acquisition up to kHz sampling rates</p>
          </div>
          <div style={styles.whyCard}>
            <div style={styles.whyIcon}>🛡️</div>
            <h3 style={styles.whyTitle}>Reliability</h3>
            <p style={styles.whyDesc}>Rugged designs built for harsh industrial environments</p>
          </div>
          <div style={styles.whyCard}>
            <div style={styles.whyIcon}>🔧</div>
            <h3 style={styles.whyTitle}>Support</h3>
            <p style={styles.whyDesc}>Expert technical support and comprehensive warranties</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Need Help Choosing?</h2>
        <p style={styles.ctaDesc}>
          Our team can help you find the right solution for your application
        </p>
        <Link to="/contact" style={styles.ctaBtn}>
          Contact Our Experts
        </Link>
      </section>
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
  },
  productsSection: {
    padding: '100px 40px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  productsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  productCard: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gap: '50px',
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '20px',
    padding: '50px',
    border: '1px solid rgba(0, 200, 255, 0.2)',
    alignItems: 'center',
  },
  productImage: {
    aspectRatio: '1',
    background: 'rgba(0, 20, 40, 0.5)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(0, 200, 255, 0.1)',
  },
  productIcon: {
    fontSize: '80px',
    fontFamily: 'monospace',
  },
  productContent: {},
  productTitle: {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '15px',
    fontFamily: "'Orbitron', sans-serif",
  },
  productDesc: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.7,
    marginBottom: '25px',
  },
  featuresList: {
    display: 'flex',
    gap: '12px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  featureTag: {
    background: 'rgba(0, 200, 255, 0.1)',
    border: '1px solid rgba(0, 200, 255, 0.2)',
    borderRadius: '20px',
    padding: '8px 18px',
    fontSize: '13px',
    color: '#00ccff',
  },
  productBtn: {
    display: 'inline-block',
    padding: '14px 30px',
    borderRadius: '8px',
    border: '2px solid',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 600,
    letterSpacing: '1px',
    transition: 'all 0.3s',
  },
  whySection: {
    padding: '100px 40px',
    background: 'rgba(0, 20, 40, 0.5)',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '38px',
    fontWeight: 700,
    marginBottom: '50px',
    fontFamily: "'Orbitron', sans-serif",
  },
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  whyCard: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '16px',
    padding: '40px 25px',
    border: '1px solid rgba(0, 200, 255, 0.1)',
  },
  whyIcon: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  whyTitle: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '12px',
  },
  whyDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.6,
  },
  ctaSection: {
    padding: '100px 40px',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '38px',
    fontWeight: 700,
    marginBottom: '20px',
    fontFamily: "'Orbitron', sans-serif",
  },
  ctaDesc: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '40px',
  },
  ctaBtn: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    color: '#fff',
    padding: '18px 50px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
};

export default ProductsPage;
