import { useState, useEffect, useRef } from 'react'

const DASAnalyticsPage = () => {
  const canvasRef = useRef(null)
  const [stats, setStats] = useState({
    range: 50,
    resolution: 1.0,
    sampleRate: 10000,
    activeZones: 12,
  })

  // Waterfall display animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height

    let imageData = ctx.createImageData(width, height)
    let offset = 0

    const animate = () => {
      // Shift existing data down
      const newImageData = ctx.createImageData(width, height)
      for (let y = 1; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const srcIdx = ((y - 1) * width + x) * 4
          const dstIdx = (y * width + x) * 4
          newImageData.data[dstIdx] = imageData.data[srcIdx]
          newImageData.data[dstIdx + 1] = imageData.data[srcIdx + 1]
          newImageData.data[dstIdx + 2] = imageData.data[srcIdx + 2]
          newImageData.data[dstIdx + 3] = imageData.data[srcIdx + 3]
        }
      }

      // Generate new line at top
      for (let x = 0; x < width; x++) {
        const intensity = Math.sin(x * 0.02 + offset) * 0.3 + 
                         Math.sin(x * 0.05 + offset * 1.5) * 0.2 +
                         Math.random() * 0.3
        const normalized = Math.max(0, Math.min(1, intensity + 0.3))
        
        const idx = x * 4
        // Color gradient: blue -> cyan -> green -> yellow -> red
        if (normalized < 0.25) {
          newImageData.data[idx] = 0
          newImageData.data[idx + 1] = normalized * 4 * 100
          newImageData.data[idx + 2] = 100 + normalized * 4 * 155
        } else if (normalized < 0.5) {
          newImageData.data[idx] = 0
          newImageData.data[idx + 1] = 100 + (normalized - 0.25) * 4 * 155
          newImageData.data[idx + 2] = 255 - (normalized - 0.25) * 4 * 155
        } else if (normalized < 0.75) {
          newImageData.data[idx] = (normalized - 0.5) * 4 * 255
          newImageData.data[idx + 1] = 255
          newImageData.data[idx + 2] = 0
        } else {
          newImageData.data[idx] = 255
          newImageData.data[idx + 1] = 255 - (normalized - 0.75) * 4 * 255
          newImageData.data[idx + 2] = 0
        }
        newImageData.data[idx + 3] = 200
      }

      imageData = newImageData
      ctx.putImageData(imageData, 0, 0)
      offset += 0.1

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>DAS Analytics</h1>
        <div style={styles.headerControls}>
          <button style={styles.controlBtn}>Export Data</button>
          <button style={{...styles.controlBtn, ...styles.primaryBtn}}>Configure</button>
        </div>
      </header>

      {/* Stats Row */}
      <div style={styles.statsRow}>
        <div style={styles.statItem}>
          <span style={styles.statValue}>{stats.range} km</span>
          <span style={styles.statLabel}>SENSING RANGE</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statValue}>{stats.resolution} m</span>
          <span style={styles.statLabel}>SPATIAL RESOLUTION</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statValue}>{stats.sampleRate.toLocaleString()} Hz</span>
          <span style={styles.statLabel}>SAMPLE RATE</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statValue}>{stats.activeZones}</span>
          <span style={styles.statLabel}>ACTIVE ZONES</span>
        </div>
      </div>

      {/* Waterfall Display */}
      <div style={styles.waterfallSection}>
        <h3 style={styles.sectionTitle}>Acoustic Waterfall Display</h3>
        <div style={styles.waterfallContainer}>
          <div style={styles.yAxis}>
            <span>0 km</span>
            <span>12.5 km</span>
            <span>25 km</span>
            <span>37.5 km</span>
            <span>50 km</span>
          </div>
          <canvas 
            ref={canvasRef} 
            width={600} 
            height={200} 
            style={styles.canvas}
          />
          <div style={styles.colorScale}>
            <div style={styles.colorBar} />
            <div style={styles.colorLabels}>
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
        </div>
      </div>

      {/* Zone Activity */}
      <div style={styles.zoneSection}>
        <h3 style={styles.sectionTitle}>Zone Activity</h3>
        <div style={styles.zoneGrid}>
          {Array.from({ length: 12 }, (_, i) => {
            const activity = Math.random()
            return (
              <div key={i} style={styles.zoneCard}>
                <div style={styles.zoneHeader}>
                  <span style={styles.zoneName}>Zone {i + 1}</span>
                  <span style={{
                    ...styles.zoneStatus,
                    color: activity > 0.7 ? '#ff4444' : activity > 0.4 ? '#ffaa00' : '#00ff88',
                  }}>
                    {activity > 0.7 ? 'HIGH' : activity > 0.4 ? 'MODERATE' : 'LOW'}
                  </span>
                </div>
                <div style={styles.zoneRange}>
                  {(i * 4.16).toFixed(1)} - {((i + 1) * 4.16).toFixed(1)} km
                </div>
                <div style={styles.activityBar}>
                  <div style={{
                    ...styles.activityFill,
                    width: `${activity * 100}%`,
                    background: activity > 0.7 ? '#ff4444' : activity > 0.4 ? '#ffaa00' : '#00ff88',
                  }} />
                </div>
              </div>
            )
          })}
        </div>
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
  },
  title: {
    fontSize: '28px',
    fontWeight: 600,
    fontFamily: "'Orbitron', sans-serif",
    color: '#00ccff',
  },
  headerControls: {
    display: 'flex',
    gap: '10px',
  },
  controlBtn: {
    padding: '10px 20px',
    background: 'rgba(0, 50, 100, 0.5)',
    border: '1px solid rgba(0, 200, 255, 0.3)',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '13px',
    cursor: 'pointer',
    fontFamily: "'Rajdhani', sans-serif",
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #00ccff, #0088cc)',
    border: 'none',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '30px',
  },
  statItem: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid rgba(0, 200, 255, 0.2)',
  },
  statValue: {
    display: 'block',
    fontSize: '28px',
    fontWeight: 700,
    color: '#00ccff',
    marginBottom: '5px',
  },
  statLabel: {
    fontSize: '10px',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '2px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  waterfallSection: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '12px',
    padding: '25px',
    marginBottom: '30px',
    border: '1px solid rgba(0, 200, 255, 0.1)',
  },
  sectionTitle: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '20px',
    fontWeight: 500,
  },
  waterfallContainer: {
    display: 'flex',
    alignItems: 'stretch',
    gap: '15px',
  },
  yAxis: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '10px',
    color: 'rgba(255,255,255,0.5)',
    fontFamily: "'Share Tech Mono', monospace",
    paddingRight: '10px',
  },
  canvas: {
    flex: 1,
    borderRadius: '8px',
    background: '#001020',
  },
  colorScale: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    paddingLeft: '10px',
  },
  colorBar: {
    width: '20px',
    height: '200px',
    borderRadius: '4px',
    background: 'linear-gradient(to bottom, #ff4444, #ffaa00, #00ff88, #00ccff, #0044aa)',
  },
  colorLabels: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '200px',
    fontSize: '9px',
    color: 'rgba(255,255,255,0.5)',
  },
  zoneSection: {
    background: 'rgba(0, 30, 60, 0.5)',
    borderRadius: '12px',
    padding: '25px',
    border: '1px solid rgba(0, 200, 255, 0.1)',
  },
  zoneGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '15px',
  },
  zoneCard: {
    background: 'rgba(0, 50, 100, 0.3)',
    borderRadius: '8px',
    padding: '15px',
  },
  zoneHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  zoneName: {
    fontSize: '14px',
    fontWeight: 600,
  },
  zoneStatus: {
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  zoneRange: {
    fontSize: '11px',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '10px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  activityBar: {
    height: '4px',
    background: 'rgba(0, 50, 100, 0.5)',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  activityFill: {
    height: '100%',
    borderRadius: '2px',
    transition: 'width 0.5s ease',
  },
}

export default DASAnalyticsPage
