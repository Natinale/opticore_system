import { useState, useEffect } from 'react'

const DashboardPage = () => {
  const [sensorData, setSensorData] = useState({
    laserPower: 18.5,
    fbgActive: 20,
    dasRange: 50,
    temperature: 23.4,
  })

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        ...prev,
        laserPower: 18 + Math.random() * 1,
        temperature: 23 + Math.random() * 1,
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>System Dashboard</h1>
        <div style={styles.timestamp}>
          Last Updated: {new Date().toLocaleTimeString()}
        </div>
      </header>

      {/* Stats Cards */}
      <div style={styles.statsGrid}>
        <div style={{...styles.statCard, borderColor: '#ff6600'}}>
          <div style={styles.statIcon}>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="8" fill="#ff6600"/>
              <circle cx="15" cy="15" r="12" stroke="#ff6600" strokeWidth="2" fill="none" opacity="0.5"/>
            </svg>
          </div>
          <div style={styles.statInfo}>
            <span style={styles.statLabel}>LASER POWER</span>
            <span style={{...styles.statValue, color: '#ff6600'}}>
              {sensorData.laserPower.toFixed(1)} mW
            </span>
          </div>
        </div>

        <div style={{...styles.statCard, borderColor: '#00ff88'}}>
          <div style={styles.statIcon}>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <rect x="5" y="12" width="20" height="6" rx="1" fill="#00ff88"/>
            </svg>
          </div>
          <div style={styles.statInfo}>
            <span style={styles.statLabel}>FBG SENSORS</span>
            <span style={{...styles.statValue, color: '#00ff88'}}>
              {sensorData.fbgActive}/20 Active
            </span>
          </div>
        </div>

        <div style={{...styles.statCard, borderColor: '#00ccff'}}>
          <div style={styles.statIcon}>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path d="M3 15 Q 8 8 13 15 Q 18 22 23 15 Q 28 8 28 15" stroke="#00ccff" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div style={styles.statInfo}>
            <span style={styles.statLabel}>DAS RANGE</span>
            <span style={{...styles.statValue, color: '#00ccff'}}>
              {sensorData.dasRange} km
            </span>
          </div>
        </div>

        <div style={{...styles.statCard, borderColor: '#aa88ff'}}>
          <div style={styles.statIcon}>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path d="M15 5 L15 20 M10 8 L15 5 L20 8" stroke="#aa88ff" strokeWidth="2" fill="none"/>
              <rect x="8" y="22" width="14" height="3" rx="1" fill="#aa88ff"/>
            </svg>
          </div>
          <div style={styles.statInfo}>
            <span style={styles.statLabel}>TEMPERATURE</span>
            <span style={{...styles.statValue, color: '#aa88ff'}}>
              {sensorData.temperature.toFixed(1)} °C
            </span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div style={styles.chartsRow}>
        {/* Live Signal Chart */}
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Live FBG Signal</h3>
          <div style={styles.chartPlaceholder}>
            <LiveSignalChart />
          </div>
        </div>

        {/* DAS Activity */}
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>DAS Activity Map</h3>
          <div style={styles.chartPlaceholder}>
            <DASActivityMap />
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div style={styles.alertsSection}>
        <h3 style={styles.sectionTitle}>Recent Alerts</h3>
        <div style={styles.alertsList}>
          <div style={{...styles.alertItem, borderLeftColor: '#00ff88'}}>
            <span style={styles.alertTime}>14:32:05</span>
            <span style={styles.alertText}>FBG-07 calibration completed successfully</span>
            <span style={{...styles.alertBadge, background: 'rgba(0,255,136,0.2)', color: '#00ff88'}}>INFO</span>
          </div>
          <div style={{...styles.alertItem, borderLeftColor: '#ffaa00'}}>
            <span style={styles.alertTime}>14:28:41</span>
            <span style={styles.alertText}>Minor strain variation detected at sensor FBG-12</span>
            <span style={{...styles.alertBadge, background: 'rgba(255,170,0,0.2)', color: '#ffaa00'}}>WARNING</span>
          </div>
          <div style={{...styles.alertItem, borderLeftColor: '#00ff88'}}>
            <span style={styles.alertTime}>14:15:22</span>
            <span style={styles.alertText}>DAS system scan completed - no anomalies</span>
            <span style={{...styles.alertBadge, background: 'rgba(0,255,136,0.2)', color: '#00ff88'}}>INFO</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Simple animated signal chart
const LiveSignalChart = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev + 2) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const generatePath = () => {
    let d = 'M 0 50'
    for (let x = 0; x <= 300; x += 5) {
      const y = 50 + Math.sin((x + offset) * 0.05) * 20 + Math.sin((x + offset) * 0.02) * 10
      d += ` L ${x} ${y}`
    }
    return d
  }

  return (
    <svg width="100%" height="100" viewBox="0 0 300 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0"/>
          <stop offset="50%" stopColor="#00ff88"/>
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={generatePath()} stroke="url(#signalGradient)" strokeWidth="2" fill="none"/>
    </svg>
  )
}

// Simple DAS activity visualization
const DASActivityMap = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities(prev => {
        const newActivities = [...prev, {
          id: Date.now(),
          x: Math.random() * 280,
          y: Math.random() * 80 + 10,
          intensity: Math.random(),
        }]
        return newActivities.slice(-15)
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg width="100%" height="100" viewBox="0 0 300 100">
      {/* Background line representing fiber */}
      <line x1="10" y1="50" x2="290" y2="50" stroke="rgba(0,204,255,0.3)" strokeWidth="2"/>
      
      {/* Activity points */}
      {activities.map(activity => (
        <circle
          key={activity.id}
          cx={activity.x}
          cy={activity.y}
          r={3 + activity.intensity * 5}
          fill={`rgba(0, 204, 255, ${0.3 + activity.intensity * 0.5})`}
          style={{
            animation: 'pulse 1s ease-out forwards',
          }}
        />
      ))}
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </svg>
  )
}

const styles = {
  container: {
    color: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 600,
    fontFamily: "'Orbitron', sans-serif",
    color: '#00ccff',
  },
  timestamp: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.5)',
    fontFamily: "'Share Tech Mono', monospace",
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '12px',
    padding: '25px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    borderLeft: '3px solid',
  },
  statIcon: {
    opacity: 0.9,
  },
  statInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  statLabel: {
    fontSize: '11px',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '2px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 700,
  },
  chartsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  chartCard: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '12px',
    padding: '25px',
    border: '1px solid rgba(0, 200, 255, 0.1)',
  },
  chartTitle: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '20px',
    fontWeight: 500,
  },
  chartPlaceholder: {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertsSection: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '12px',
    padding: '25px',
    border: '1px solid rgba(0, 200, 255, 0.1)',
  },
  sectionTitle: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '20px',
    fontWeight: 500,
  },
  alertsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  alertItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '12px 15px',
    background: 'rgba(0, 50, 100, 0.3)',
    borderRadius: '8px',
    borderLeft: '3px solid',
  },
  alertTime: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.4)',
    fontFamily: "'Share Tech Mono', monospace",
    minWidth: '70px',
  },
  alertText: {
    flex: 1,
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
  },
  alertBadge: {
    fontSize: '10px',
    padding: '4px 10px',
    borderRadius: '4px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
}

export default DashboardPage
