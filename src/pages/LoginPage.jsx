import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onLogin() // This would normally check credentials
    }, 1500)
  }

  return (
    <div style={styles.container}>
      <div style={styles.bgGrid} />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.particle,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            background: i % 2 === 0 ? '#00ff88' : '#00ccff',
          }}
        />
      ))}

      <div style={styles.loginCard}>
        {/* Logo */}
        <div style={styles.logo}>
          <span style={styles.logoCore}>CORE</span>
          <span style={styles.logoOptic}>OPTIC</span>
        </div>
        <p style={styles.subtitle}>System Access Portal</p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="operator@coreoptic.com"
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="••••••••••"
              required
            />
          </div>

          <button 
            type="submit" 
            style={{
              ...styles.submitBtn,
              opacity: isLoading ? 0.7 : 1,
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <span style={styles.loadingText}>AUTHENTICATING...</span>
            ) : (
              'ACCESS SYSTEM'
            )}
          </button>
        </form>

        <div style={styles.divider}>
          <span>OR</span>
        </div>

        <button style={styles.biometricBtn}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="3" />
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
          </svg>
          BIOMETRIC LOGIN
        </button>

        <p style={styles.backLink}>
          <Link to="/" style={styles.link}>← Back to Home</Link>
        </p>
      </div>

      {/* System status indicator */}
      <div style={styles.statusBar}>
        <span style={styles.statusDot} />
        SYSTEM ONLINE • ALL SENSORS ACTIVE
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(160deg, #020810 0%, #041525 40%, #020d18 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Rajdhani', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  bgGrid: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(0, 200, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 200, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    pointerEvents: 'none',
  },
  particle: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    animation: 'float 4s ease-in-out infinite',
    boxShadow: '0 0 10px currentColor',
    pointerEvents: 'none',
  },
  loginCard: {
    background: 'rgba(0, 20, 40, 0.8)',
    border: '1px solid rgba(0, 200, 255, 0.3)',
    borderRadius: '16px',
    padding: '50px 40px',
    width: '100%',
    maxWidth: '420px',
    backdropFilter: 'blur(20px)',
    position: 'relative',
    zIndex: 10,
  },
  logo: {
    textAlign: 'center',
    fontSize: '32px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
    marginBottom: '8px',
  },
  logoCore: {
    color: '#ff3300',
    textShadow: '0 0 20px rgba(255, 51, 0, 0.5)',
  },
  logoOptic: {
    color: '#00ff88',
    textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
    marginLeft: '8px',
  },
  subtitle: {
    textAlign: 'center',
    color: 'rgba(0, 200, 255, 0.7)',
    fontSize: '12px',
    letterSpacing: '3px',
    marginBottom: '40px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    color: 'rgba(0, 200, 255, 0.7)',
    fontSize: '11px',
    letterSpacing: '2px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  input: {
    background: 'rgba(0, 50, 100, 0.3)',
    border: '1px solid rgba(0, 200, 255, 0.3)',
    borderRadius: '6px',
    padding: '14px 16px',
    color: '#fff',
    fontSize: '16px',
    fontFamily: "'Rajdhani', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #ff3300, #ff6600)',
    border: 'none',
    borderRadius: '6px',
    padding: '16px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '2px',
    cursor: 'pointer',
    marginTop: '10px',
    fontFamily: "'Rajdhani', sans-serif",
    boxShadow: '0 0 30px rgba(255, 51, 0, 0.3)',
    transition: 'transform 0.2s, opacity 0.3s',
  },
  loadingText: {
    animation: 'pulse 1s ease-in-out infinite',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '25px 0',
    color: 'rgba(255,255,255,0.3)',
    fontSize: '12px',
    gap: '15px',
  },
  biometricBtn: {
    background: 'transparent',
    border: '1px solid rgba(0, 255, 136, 0.5)',
    borderRadius: '6px',
    padding: '14px',
    color: '#00ff88',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '2px',
    cursor: 'pointer',
    fontFamily: "'Rajdhani', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'background 0.3s',
  },
  backLink: {
    textAlign: 'center',
    marginTop: '30px',
  },
  link: {
    color: 'rgba(0, 200, 255, 0.7)',
    textDecoration: 'none',
    fontSize: '14px',
    letterSpacing: '1px',
  },
  statusBar: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'rgba(0, 255, 136, 0.7)',
    fontSize: '11px',
    letterSpacing: '2px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#00ff88',
    boxShadow: '0 0 10px #00ff88',
    animation: 'pulse 2s ease-in-out infinite',
  },
}

export default LoginPage
