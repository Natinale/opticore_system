import { Link } from 'react-router-dom';

const InterrogatorsPage = () => {
  const interrogators = [
    {
      name: 'CoreScan 4000',
      tagline: 'High-Performance Multi-Channel Interrogator',
      channels: 4,
      speed: '1 kHz',
      range: '1510-1590 nm',
      resolution: '0.5 pm',
      price: 'Contact for pricing',
      features: [
        'USB and Ethernet connectivity',
        'Real-time data streaming',
        'Integrated signal processing',
        'Compact desktop design',
      ],
      highlight: false,
    },
    {
      name: 'CoreScan 8000',
      tagline: 'Advanced Industrial-Grade System',
      channels: 8,
      speed: '5 kHz',
      range: '1510-1590 nm',
      resolution: '0.25 pm',
      price: 'Contact for pricing',
      features: [
        'Rack-mountable design',
        'Extended temperature range',
        'Multiple trigger modes',
        'Advanced SDK included',
      ],
      highlight: true,
    },
    {
      name: 'CoreScan 16000',
      tagline: 'Ultimate High-Channel System',
      channels: 16,
      speed: '10 kHz',
      range: '1500-1600 nm',
      resolution: '0.1 pm',
      price: 'Contact for pricing',
      features: [
        'Highest channel count',
        'Ultra-fast acquisition',
        'Modular expansion',
        'Full API support',
      ],
      highlight: false,
    },
  ];

  return (
    <div style={styles.container}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.breadcrumb}>
          <Link to="/products" style={styles.breadcrumbLink}>Products</Link>
          <span style={styles.breadcrumbSep}>/</span>
          <span>Interrogators</span>
        </div>
        <h1 style={styles.heroTitle}>FBG Interrogators</h1>
        <p style={styles.heroSubtitle}>
          High-speed, multi-channel interrogation systems for precise FBG sensor measurements
        </p>
      </section>

      {/* Products */}
      <section style={styles.productsSection}>
        <div style={styles.productsGrid}>
          {interrogators.map((product) => (
            <div 
              key={product.name} 
              style={{
                ...styles.productCard,
                ...(product.highlight ? styles.highlightCard : {}),
              }}
            >
              {product.highlight && <div style={styles.popularBadge}>Most Popular</div>}
              
              <div style={styles.productHeader}>
                <h2 style={styles.productName}>{product.name}</h2>
                <p style={styles.productTagline}>{product.tagline}</p>
              </div>

              <div style={styles.specsGrid}>
                <div style={styles.specItem}>
                  <span style={styles.specValue}>{product.channels}</span>
                  <span style={styles.specLabel}>Channels</span>
                </div>
                <div style={styles.specItem}>
                  <span style={styles.specValue}>{product.speed}</span>
                  <span style={styles.specLabel}>Scan Rate</span>
                </div>
                <div style={styles.specItem}>
                  <span style={styles.specValue}>{product.resolution}</span>
                  <span style={styles.specLabel}>Resolution</span>
                </div>
              </div>

              <div style={styles.wavelengthRange}>
                <span style={styles.rangeLabel}>Wavelength Range:</span>
                <span style={styles.rangeValue}>{product.range}</span>
              </div>

              <ul style={styles.featuresList}>
                {product.features.map((feature) => (
                  <li key={feature} style={styles.featureItem}>
                    <span style={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={styles.cardFooter}>
                <span style={styles.price}>{product.price}</span>
                <Link to="/contact" style={styles.quoteBtn}>
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specs Comparison */}
      <section style={styles.comparisonSection}>
        <h2 style={styles.sectionTitle}>Compare Models</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Specification</th>
                <th style={styles.th}>CoreScan 4000</th>
                <th style={styles.th}>CoreScan 8000</th>
                <th style={styles.th}>CoreScan 16000</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Optical Channels</td>
                <td style={styles.td}>4</td>
                <td style={styles.td}>8</td>
                <td style={styles.td}>16</td>
              </tr>
              <tr>
                <td style={styles.td}>Scan Rate</td>
                <td style={styles.td}>1 kHz</td>
                <td style={styles.td}>5 kHz</td>
                <td style={styles.td}>10 kHz</td>
              </tr>
              <tr>
                <td style={styles.td}>Wavelength Range</td>
                <td style={styles.td}>1510-1590 nm</td>
                <td style={styles.td}>1510-1590 nm</td>
                <td style={styles.td}>1500-1600 nm</td>
              </tr>
              <tr>
                <td style={styles.td}>Resolution</td>
                <td style={styles.td}>0.5 pm</td>
                <td style={styles.td}>0.25 pm</td>
                <td style={styles.td}>0.1 pm</td>
              </tr>
              <tr>
                <td style={styles.td}>Accuracy</td>
                <td style={styles.td}>±1 pm</td>
                <td style={styles.td}>±0.5 pm</td>
                <td style={styles.td}>±0.25 pm</td>
              </tr>
              <tr>
                <td style={styles.td}>Dynamic Range</td>
                <td style={styles.td}>25 dB</td>
                <td style={styles.td}>30 dB</td>
                <td style={styles.td}>35 dB</td>
              </tr>
              <tr>
                <td style={styles.td}>Form Factor</td>
                <td style={styles.td}>Desktop</td>
                <td style={styles.td}>Rack-mount</td>
                <td style={styles.td}>Rack-mount</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Need a Custom Solution?</h2>
        <p style={styles.ctaDesc}>
          We offer customized interrogator systems tailored to your specific requirements
        </p>
        <Link to="/contact" style={styles.ctaBtn}>
          Discuss Your Needs
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
    background: 'linear-gradient(180deg, rgba(255, 51, 0, 0.1) 0%, transparent 100%)',
    borderBottom: '1px solid rgba(0, 200, 255, 0.1)',
  },
  breadcrumb: {
    marginBottom: '20px',
    fontSize: '14px',
  },
  breadcrumbLink: {
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
  },
  breadcrumbSep: {
    margin: '0 10px',
    color: 'rgba(255,255,255,0.4)',
  },
  heroTitle: {
    fontSize: '52px',
    fontWeight: 700,
    marginBottom: '20px',
    fontFamily: "'Orbitron', sans-serif",
    color: '#ff6600',
  },
  heroSubtitle: {
    fontSize: '20px',
    color: 'rgba(255,255,255,0.7)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  productsSection: {
    padding: '100px 40px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  },
  productCard: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '20px',
    padding: '40px 30px',
    border: '1px solid rgba(0, 200, 255, 0.2)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  highlightCard: {
    border: '2px solid #ff6600',
    boxShadow: '0 0 40px rgba(255, 102, 0, 0.2)',
  },
  popularBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    padding: '6px 20px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  productHeader: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  productName: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '10px',
    fontFamily: "'Orbitron', sans-serif",
  },
  productTagline: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    marginBottom: '25px',
  },
  specItem: {
    background: 'rgba(0, 50, 100, 0.3)',
    borderRadius: '12px',
    padding: '15px 10px',
    textAlign: 'center',
  },
  specValue: {
    display: 'block',
    fontSize: '24px',
    fontWeight: 700,
    color: '#00ff88',
    fontFamily: "'Orbitron', sans-serif",
  },
  specLabel: {
    fontSize: '11px',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '1px',
  },
  wavelengthRange: {
    textAlign: 'center',
    padding: '15px',
    background: 'rgba(0, 200, 255, 0.05)',
    borderRadius: '8px',
    marginBottom: '25px',
  },
  rangeLabel: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.5)',
    marginRight: '10px',
  },
  rangeValue: {
    fontSize: '14px',
    color: '#00ccff',
    fontWeight: 600,
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 30px',
    flex: 1,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '12px',
  },
  checkmark: {
    color: '#00ff88',
    fontWeight: 'bold',
  },
  cardFooter: {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid rgba(0, 200, 255, 0.1)',
  },
  price: {
    display: 'block',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '15px',
  },
  quoteBtn: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    color: '#fff',
    padding: '14px 35px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  comparisonSection: {
    padding: '100px 40px',
    background: 'rgba(0, 20, 40, 0.5)',
  },
  sectionTitle: {
    fontSize: '38px',
    fontWeight: 700,
    marginBottom: '50px',
    fontFamily: "'Orbitron', sans-serif",
    textAlign: 'center',
  },
  tableContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    background: 'rgba(0, 50, 100, 0.5)',
    padding: '18px 20px',
    textAlign: 'left',
    fontSize: '15px',
    fontWeight: 600,
    borderBottom: '1px solid rgba(0, 200, 255, 0.2)',
  },
  td: {
    padding: '15px 20px',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
    borderBottom: '1px solid rgba(0, 200, 255, 0.1)',
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
    background: 'transparent',
    color: '#00ff88',
    padding: '18px 50px',
    borderRadius: '8px',
    border: '2px solid #00ff88',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
};

export default InterrogatorsPage;
