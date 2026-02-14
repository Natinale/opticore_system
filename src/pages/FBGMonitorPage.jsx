import { useState, useEffect } from 'react'

const FBGMonitorPage = () => {
  const [sensors, setSensors] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: `FBG-${String(i + 1).padStart(2, '0')}`,
      wavelength: 1550 + i * 2.5,
      strain: Math.random() * 100,
      temperature: 22 + Math.random() * 3,
      status: 'active',
    }))
  )

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(prev => prev.map(sensor => ({
        ...sensor,
        strain: Math.max(0, Math.min(100, sensor.strain + (Math.random() - 0.5) * 5)),
        temperature: 22 + Math.random() * 3,
      })))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>FBG Sensor Monitor</h1>
        <div style={styles.headerStats}>
          <span style={styles.statBadge}>
            <span style={styles.statusDot} /> 20 Sensors Active
          </span>
          <span style={styles.statBadge}>
            Wavelength Range: 1550nm - 1597.5nm
          </span>
        </div>
      </header>

      {/* Sensor Grid */}
      <div style={styles.sensorGrid}>
        {sensors.map((sensor, index) => (
          <div key={sensor.id} style={styles.sensorCard}>
            <div style={styles.sensorHeader}>
              <span style={styles.sensorId}>{sensor.id}</span>
              <span style={{
                ...styles.statusIndicator,
                background: sensor.status === 'active' ? '#00ff88' : '#ff4444',
              }} />
            </div>
            
            <div style={styles.wavelength}>
              {sensor.wavelength.toFixed(1)} nm
            </div>

            {/* Strain Bar */}
            <div style={styles.metricRow}>
              <span style={styles.metricLabel}>STRAIN</span>
              <div style={styles.barContainer}>
                <div 
                  style={{
                    ...styles.barFill,
                    width: `${sensor.strain}%`,
                    background: sensor.strain > 80 ? '#ff4444' : sensor.strain > 50 ? '#ffaa00' : '#00ff88',
                  }} 
                />
              </div>
              <span style={styles.metricValue}>{sensor.strain.toFixed(1)}%</span>
            </div>

            {/* Temperature */}
            <div style={styles.metricRow}>
              <span style={styles.metricLabel}>TEMP</span>
              <span style={styles.tempValue}>{sensor.temperature.toFixed(1)}°C</span>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={styles.legend}>
        <span style={styles.legendItem}>
          <span style={{...styles.legendDot, background: '#00ff88'}} /> Normal
        </span>
        <span style={styles.legendItem}>
          <span style={{...styles.legendDot, background: '#ffaa00'}} /> Warning
        </span>
        <span style={styles.legendItem}>
          <span style={{...styles.legendDot, background: '#ff4444'}} /> Critical
        </span>
      </div>
    </div>
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
    flexWrap: 'wrap',
    gap: '15px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 600,
    fontFamily: "'Orbitron', sans-serif",
    color: '#00ff88',
  },
  headerStats: {
    display: 'flex',
    gap: '20px',
  },
  statBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.7)',
    padding: '8px 15px',
    background: 'rgba(0, 50, 100, 0.3)',
    borderRadius: '20px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#00ff88',
    boxShadow: '0 0 10px #00ff88',
  },
  sensorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px',
    marginBottom: '30px',
  },
  sensorCard: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '10px',
    padding: '18px',
    border: '1px solid rgba(0, 255, 136, 0.2)',
  },
  sensorHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  sensorId: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#00ff88',
    fontFamily: "'Share Tech Mono', monospace",
  },
  statusIndicator: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    boxShadow: '0 0 8px currentColor',
  },
  wavelength: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '15px',
  },
  metricRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
  },
  metricLabel: {
    fontSize: '9px',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '1px',
    minWidth: '45px',
  },
  barContainer: {
    flex: 1,
    height: '6px',
    background: 'rgba(0, 50, 100, 0.5)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.5s ease, background 0.3s ease',
  },
  metricValue: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.8)',
    minWidth: '45px',
    textAlign: 'right',
    fontFamily: "'Share Tech Mono', monospace",
  },
  tempValue: {
    fontSize: '14px',
    color: '#00ccff',
    fontFamily: "'Share Tech Mono', monospace",
  },
  legend: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '20px',
    background: 'rgba(0, 30, 60, 0.3)',
    borderRadius: '10px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.7)',
  },
  legendDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },
}

export default FBGMonitorPage
