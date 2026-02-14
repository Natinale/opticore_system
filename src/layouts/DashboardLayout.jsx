import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const DashboardLayout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // In real app, clear auth tokens here
    navigate('/')
    window.location.reload() // Reset auth state
  }

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <span style={styles.logoCore}>CORE</span>
          <span style={styles.logoOptic}>OPTIC</span>
        </div>

        <nav style={styles.nav}>
          <NavLink 
            to="/dashboard" 
            end
            style={({ isActive }) => ({
              ...styles.navItem,
              ...(isActive ? styles.navItemActive : {})
            })}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="2" y="2" width="7" height="7" rx="1"/>
              <rect x="11" y="2" width="7" height="7" rx="1"/>
              <rect x="2" y="11" width="7" height="7" rx="1"/>
              <rect x="11" y="11" width="7" height="7" rx="1"/>
            </svg>
            Dashboard
          </NavLink>

          <NavLink 
            to="/dashboard/fbg"
            style={({ isActive }) => ({
              ...styles.navItem,
              ...(isActive ? styles.navItemActive : {})
            })}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="3" y="8" width="14" height="4" rx="1"/>
              <line x1="5" y1="10" x2="7" y2="10" stroke="white" strokeWidth="1"/>
              <line x1="9" y1="10" x2="11" y2="10" stroke="white" strokeWidth="1"/>
              <line x1="13" y1="10" x2="15" y2="10" stroke="white" strokeWidth="1"/>
            </svg>
            FBG Monitor
          </NavLink>

          <NavLink 
            to="/dashboard/das"
            style={({ isActive }) => ({
              ...styles.navItem,
              ...(isActive ? styles.navItemActive : {})
            })}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10 Q 5 5 8 10 Q 11 15 14 10 Q 17 5 18 10" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            DAS Analytics
          </NavLink>

          <div style={styles.navDivider} />

          <button onClick={handleLogout} style={styles.logoutBtn}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3h8v2H5v10h6v2H3V3zm10 4l4 3-4 3V7z"/>
              <rect x="8" y="9" width="6" height="2"/>
            </svg>
            Logout
          </button>
        </nav>

        {/* System Status */}
        <div style={styles.systemStatus}>
          <div style={styles.statusHeader}>SYSTEM STATUS</div>
          <div style={styles.statusItem}>
            <span style={{...styles.statusDot, background: '#00ff88'}} />
            Laser Array: Online
          </div>
          <div style={styles.statusItem}>
            <span style={{...styles.statusDot, background: '#00ff88'}} />
            FBG Sensors: 20/20
          </div>
          <div style={styles.statusItem}>
            <span style={{...styles.statusDot, background: '#00ff88'}} />
            DAS: Active
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <Outlet />
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');
      `}</style>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    background: 'linear-gradient(160deg, #020810 0%, #041525 40%, #020d18 100%)',
    fontFamily: "'Rajdhani', sans-serif",
  },
  sidebar: {
    width: '260px',
    background: 'rgba(0, 15, 30, 0.9)',
    borderRight: '1px solid rgba(0, 200, 255, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',
  },
  sidebarHeader: {
    padding: '10px 25px 30px',
    fontSize: '22px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
  },
  logoCore: {
    color: '#ff3300',
  },
  logoOptic: {
    color: '#00ff88',
    marginLeft: '6px',
  },
  nav: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '0 15px',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 15px',
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 500,
    transition: 'all 0.2s',
  },
  navItemActive: {
    background: 'rgba(0, 200, 255, 0.15)',
    color: '#00ccff',
    borderLeft: '3px solid #00ccff',
  },
  navDivider: {
    height: '1px',
    background: 'rgba(0, 200, 255, 0.1)',
    margin: '15px 0',
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 15px',
    color: 'rgba(255, 100, 100, 0.8)',
    background: 'transparent',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: "'Rajdhani', sans-serif",
    textAlign: 'left',
  },
  systemStatus: {
    margin: '20px 15px',
    padding: '15px',
    background: 'rgba(0, 50, 100, 0.2)',
    borderRadius: '8px',
    border: '1px solid rgba(0, 200, 255, 0.1)',
  },
  statusHeader: {
    fontSize: '10px',
    color: 'rgba(0, 200, 255, 0.6)',
    letterSpacing: '2px',
    marginBottom: '12px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  statusItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '8px',
  },
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
  },
  main: {
    flex: 1,
    padding: '30px',
    overflowY: 'auto',
  },
}

export default DashboardLayout
