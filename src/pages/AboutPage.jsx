import { Link } from 'react-router-dom';

const AboutPage = () => {
  const team = [
    { name: 'Dr. James Wilson', role: 'CEO & Founder', expertise: 'Photonics & Fiber Optics' },
    { name: 'Sarah Chen', role: 'CTO', expertise: 'System Architecture' },
    { name: 'Michael Ndlovu', role: 'Head of Engineering', expertise: 'Sensor Development' },
    { name: 'Dr. Lisa Patel', role: 'Research Director', expertise: 'FBG Technology' },
  ];

  const milestones = [
    { year: '2009', event: 'Company founded in Johannesburg' },
    { year: '2012', event: 'First commercial FBG interrogator launched' },
    { year: '2015', event: 'Expanded to 20+ countries' },
    { year: '2018', event: 'Introduced DAS product line' },
    { year: '2021', event: 'Opened R&D center' },
    { year: '2024', event: '500th system deployed globally' },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>About CoreOptic</h1>
          <p style={styles.heroSubtitle}>
            Pioneering fiber optic sensing technology since 2009
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.section}>
        <div style={styles.missionGrid}>
          <div style={styles.missionContent}>
            <h2 style={styles.sectionTitle}>Our Mission</h2>
            <p style={styles.missionText}>
              At CoreOptic, we're dedicated to advancing fiber optic sensing technology 
              to solve the world's most challenging measurement problems. Our mission is 
              to provide reliable, accurate, and innovative sensing solutions that enable 
              safer infrastructure, more efficient energy systems, and breakthrough 
              scientific research.
            </p>
            <p style={styles.missionText}>
              We combine deep expertise in photonics with a commitment to customer success, 
              delivering not just products, but complete solutions backed by world-class 
              technical support.
            </p>
          </div>
          <div style={styles.missionStats}>
            <div style={styles.missionStatItem}>
              <span style={styles.missionStatNumber}>15+</span>
              <span style={styles.missionStatLabel}>Years of Innovation</span>
            </div>
            <div style={styles.missionStatItem}>
              <span style={styles.missionStatNumber}>50+</span>
              <span style={styles.missionStatLabel}>Countries Served</span>
            </div>
            <div style={styles.missionStatItem}>
              <span style={styles.missionStatNumber}>100%</span>
              <span style={styles.missionStatLabel}>Customer Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.valuesSection}>
        <h2 style={styles.sectionTitle}>Our Values</h2>
        <div style={styles.valuesGrid}>
          <div style={styles.valueCard}>
            <div style={{...styles.valueIcon, background: 'rgba(255, 51, 0, 0.1)', color: '#ff3300'}}>
              ◎
            </div>
            <h3 style={styles.valueTitle}>Innovation</h3>
            <p style={styles.valueDesc}>
              Continuously pushing the boundaries of fiber optic sensing technology 
              through research and development.
            </p>
          </div>
          <div style={styles.valueCard}>
            <div style={{...styles.valueIcon, background: 'rgba(0, 255, 136, 0.1)', color: '#00ff88'}}>
              ✓
            </div>
            <h3 style={styles.valueTitle}>Quality</h3>
            <p style={styles.valueDesc}>
              Uncompromising commitment to precision, reliability, and performance 
              in every product we deliver.
            </p>
          </div>
          <div style={styles.valueCard}>
            <div style={{...styles.valueIcon, background: 'rgba(0, 204, 255, 0.1)', color: '#00ccff'}}>
              ⚡
            </div>
            <h3 style={styles.valueTitle}>Partnership</h3>
            <p style={styles.valueDesc}>
              Working closely with customers to understand their needs and deliver 
              tailored solutions.
            </p>
          </div>
          <div style={styles.valueCard}>
            <div style={{...styles.valueIcon, background: 'rgba(170, 136, 255, 0.1)', color: '#aa88ff'}}>
              ♻
            </div>
            <h3 style={styles.valueTitle}>Sustainability</h3>
            <p style={styles.valueDesc}>
              Developing solutions that help monitor and protect our environment 
              and infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Journey</h2>
        <div style={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div key={milestone.year} style={styles.timelineItem}>
              <div style={styles.timelineYear}>{milestone.year}</div>
              <div style={styles.timelineDot} />
              <div style={styles.timelineEvent}>{milestone.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>Leadership Team</h2>
        <p style={styles.teamSubtitle}>
          Experts in photonics, engineering, and customer success
        </p>
        <div style={styles.teamGrid}>
          {team.map((member) => (
            <div key={member.name} style={styles.teamCard}>
              <div style={styles.teamAvatar}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamRole}>{member.role}</p>
              <p style={styles.teamExpertise}>{member.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Work With Us</h2>
        <p style={styles.ctaDesc}>
          Let's discuss how CoreOptic can support your sensing applications
        </p>
        <Link to="/contact" style={styles.ctaBtn}>
          Get in Touch
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
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
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
  section: {
    padding: '100px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '38px',
    fontWeight: 700,
    marginBottom: '20px',
    fontFamily: "'Orbitron', sans-serif",
    textAlign: 'center',
  },
  missionGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  missionContent: {},
  missionText: {
    fontSize: '17px',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 1.8,
    marginBottom: '20px',
  },
  missionStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  missionStatItem: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '12px',
    padding: '25px 30px',
    textAlign: 'center',
    border: '1px solid rgba(0, 200, 255, 0.2)',
  },
  missionStatNumber: {
    display: 'block',
    fontSize: '36px',
    fontWeight: 700,
    color: '#00ff88',
    fontFamily: "'Orbitron', sans-serif",
  },
  missionStatLabel: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
  },
  valuesSection: {
    padding: '100px 40px',
    background: 'rgba(0, 20, 40, 0.5)',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '50px auto 0',
  },
  valueCard: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '16px',
    padding: '35px 25px',
    textAlign: 'center',
    border: '1px solid rgba(0, 200, 255, 0.1)',
  },
  valueIcon: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    fontSize: '28px',
  },
  valueTitle: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '15px',
  },
  valueDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.7,
  },
  timeline: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    marginTop: '60px',
    paddingTop: '40px',
  },
  timelineItem: {
    textAlign: 'center',
    position: 'relative',
    flex: 1,
  },
  timelineYear: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#00ff88',
    fontFamily: "'Orbitron', sans-serif",
    marginBottom: '15px',
  },
  timelineDot: {
    width: '16px',
    height: '16px',
    background: '#00ccff',
    borderRadius: '50%',
    margin: '0 auto 15px',
    position: 'relative',
    boxShadow: '0 0 15px #00ccff',
  },
  timelineEvent: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    maxWidth: '150px',
    margin: '0 auto',
    lineHeight: 1.5,
  },
  teamSection: {
    padding: '100px 40px',
    textAlign: 'center',
  },
  teamSubtitle: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '50px',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  teamCard: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '16px',
    padding: '40px 25px',
    border: '1px solid rgba(0, 200, 255, 0.1)',
  },
  teamAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    fontSize: '24px',
    fontWeight: 700,
    fontFamily: "'Orbitron', sans-serif",
  },
  teamName: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '8px',
  },
  teamRole: {
    fontSize: '14px',
    color: '#00ff88',
    marginBottom: '8px',
  },
  teamExpertise: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.5)',
  },
  ctaSection: {
    padding: '100px 40px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(255, 51, 0, 0.1), rgba(0, 255, 136, 0.1))',
    borderTop: '1px solid rgba(0, 200, 255, 0.1)',
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
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
};

export default AboutPage;
