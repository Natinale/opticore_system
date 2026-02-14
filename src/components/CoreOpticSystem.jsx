import React, { useState, useEffect } from 'react';

const CoreOpticSystem = () => {
  const [progress, setProgress] = useState(0);
  const [connected, setConnected] = useState(false);
  const [pulsePhase, setPulsePhase] = useState(0);
  const [fbgStatus, setFbgStatus] = useState([false, false, false, false, false]);
  const [dasActive, setDasActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setConnected(true);
          setDasActive(true);
          clearInterval(interval);
          return 100;
        }
        // Activate FBG sensors progressively
        const newFbg = [...fbgStatus];
        if (prev > 15) newFbg[0] = true;
        if (prev > 30) newFbg[1] = true;
        if (prev > 50) newFbg[2] = true;
        if (prev > 70) newFbg[3] = true;
        if (prev > 85) newFbg[4] = true;
        setFbgStatus(newFbg);
        
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(pulseInterval);
  }, []);

  const numCables = 5;
  const cables = Array.from({ length: numCables }, (_, i) => i);

  return (
    <div style={styles.container}>
      {/* Laser beam background effects */}
      <div style={styles.laserOverlay}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.laserBeam,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.03 + (i % 3) * 0.02,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div style={styles.gridOverlay} />
      
      {/* Scanning line effect */}
      <div style={styles.scanLine} />

      {/* Ambient particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.particle,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            background: i % 3 === 0 ? '#ff3300' : i % 3 === 1 ? '#00ff88' : '#00ccff',
          }}
        />
      ))}

      {/* Title */}
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>
          <span style={styles.titleCore}>OPTI</span>
          <span style={styles.titleOptic}>CORE</span>
          <span style={styles.titleSystem}>SYSTEM</span>
        </h1>
        <div style={styles.subtitle}>
          FBG SENSING • DAS MONITORING • LASER LINK ARRAY
        </div>
      </div>

      {/* Main content */}
      <div style={styles.content}>
        {/* Laser Source Unit */}
        <div style={{
          ...styles.laserUnit,
          boxShadow: `0 0 ${30 + progress * 0.5}px ${connected ? '#ff3300' : '#ff6600'},
                      inset 0 0 30px rgba(255, 51, 0, 0.2)`,
        }}>
          <div style={styles.laserCore}>
            <div style={{
              ...styles.laserInner,
              boxShadow: `0 0 ${20 + Math.sin(pulsePhase * 0.1) * 10}px #ff3300`,
            }} />
          </div>
          <div style={styles.laserRing} />
          <div style={{...styles.laserRing, width: '110px', height: '110px', animationDirection: 'reverse', animationDuration: '4s'}} />
          <span style={styles.unitLabel}>LASER SOURCE</span>
          <span style={styles.unitSpec}>1550nm • 20mW</span>
        </div>

        {/* Fiber optic cables with FBG sensors */}
        <svg style={styles.cableContainer} viewBox="0 0 700 350" preserveAspectRatio="none">
          <defs>
            {/* Laser gradient */}
            <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff3300" />
              <stop offset="30%" stopColor="#ff6600" />
              <stop offset="50%" stopColor="#ffaa00" />
              <stop offset="70%" stopColor="#00ff88" />
              <stop offset="100%" stopColor="#00ccff" />
            </linearGradient>
            
            {/* DAS gradient */}
            <linearGradient id="dasGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ccff" />
              <stop offset="50%" stopColor="#00ff88" />
              <stop offset="100%" stopColor="#00ccff" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* FBG reflection pattern */}
            <pattern id="fbgPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect width="2" height="4" fill="#00ff88" opacity="0.8"/>
            </pattern>
          </defs>

          {cables.map((index) => {
            const yOffset = (index - (numCables - 1) / 2) * 50;
            const curve = 40 + Math.abs(yOffset) * 0.2;
            const cableProgress = Math.max(0, Math.min(100, (progress - index * 8) * 1.8));
            const isActive = cableProgress > 0;
            const isComplete = cableProgress >= 100;

            const pathD = `M 50 175 
                           C ${180 + curve} ${175 + yOffset}, 
                             ${520 - curve} ${175 + yOffset}, 
                             650 175`;

            // FBG sensor positions along each cable
            const fbgPositions = [0.2, 0.4, 0.6, 0.8];

            return (
              <g key={index}>
                {/* Cable background (fiber core) */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="rgba(0, 100, 150, 0.2)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Cable cladding */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="rgba(0, 50, 80, 0.4)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Active laser light in fiber */}
                {isActive && (
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isComplete ? 'url(#laserGradient)' : '#ff6600'}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="700"
                    strokeDashoffset={700 - (cableProgress / 100) * 700}
                    filter="url(#glow)"
                  />
                )}

                {/* FBG Sensor nodes */}
                {fbgPositions.map((pos, fbgIndex) => {
                  const totalIndex = index * 4 + fbgIndex;
                  const fbgActivated = cableProgress > pos * 100;
                  const x = 50 + pos * 600;
                  const y = 175 + yOffset * (1 - Math.abs(pos - 0.5) * 0.5);
                  
                  return (
                    <g key={fbgIndex}>
                      {/* FBG grating representation */}
                      <rect
                        x={x - 8}
                        y={y - 6}
                        width="16"
                        height="12"
                        fill={fbgActivated ? 'url(#fbgPattern)' : 'rgba(0, 100, 100, 0.3)'}
                        stroke={fbgActivated ? '#00ff88' : 'rgba(0, 150, 150, 0.3)'}
                        strokeWidth="1"
                        rx="2"
                        filter={fbgActivated ? 'url(#glow)' : 'none'}
                        style={{
                          transition: 'all 0.3s ease',
                        }}
                      />
                      {/* FBG reflection pulse */}
                      {fbgActivated && isComplete && (
                        <circle
                          cx={x}
                          cy={y}
                          r={4 + Math.sin((pulsePhase + totalIndex * 45) * 0.05) * 2}
                          fill="#00ff88"
                          opacity={0.6 + Math.sin((pulsePhase + totalIndex * 45) * 0.05) * 0.3}
                          filter="url(#glow)"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Traveling laser pulse */}
                {isActive && !isComplete && (
                  <circle r="8" fill="#ff6600" filter="url(#strongGlow)">
                    <animateMotion
                      dur={`${1.2 + index * 0.1}s`}
                      repeatCount="indefinite"
                      path={pathD}
                    />
                  </circle>
                )}

                {/* Continuous laser pulses when complete */}
                {isComplete && (
                  <>
                    {/* Forward laser pulse */}
                    <circle r="5" fill="#ff3300" filter="url(#strongGlow)">
                      <animateMotion
                        dur={`${0.6 + index * 0.03}s`}
                        repeatCount="indefinite"
                        path={pathD}
                      />
                    </circle>
                    {/* Backscattered DAS signal */}
                    <circle r="4" fill="#00ccff" filter="url(#glow)" opacity="0.8">
                      <animateMotion
                        dur={`${0.6 + index * 0.03}s`}
                        repeatCount="indefinite"
                        path={pathD}
                        keyPoints="1;0"
                        keyTimes="0;1"
                      />
                    </circle>
                  </>
                )}

                {/* DAS backscatter visualization */}
                {isComplete && dasActive && (
                  <path
                    d={pathD}
                    fill="none"
                    stroke="url(#dasGradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    opacity={0.3 + Math.sin((pulsePhase + index * 30) * 0.03) * 0.2}
                    strokeDasharray="5 15"
                    strokeDashoffset={pulsePhase * 0.5}
                  />
                )}
              </g>
            );
          })}

          {/* DAS interrogator beam representation */}
          {dasActive && (
            <line
              x1="650"
              y1="50"
              x2="650"
              y2="300"
              stroke="#00ccff"
              strokeWidth="2"
              filter="url(#glow)"
              opacity={0.5 + Math.sin(pulsePhase * 0.1) * 0.3}
            />
          )}
        </svg>

        {/* DAS Interrogator Unit */}
        <div style={{
          ...styles.dasUnit,
          boxShadow: connected 
            ? `0 0 40px #00ccff, inset 0 0 30px rgba(0, 204, 255, 0.2)`
            : `0 0 ${10 + progress * 0.3}px rgba(0, 204, 255, ${0.3 + progress * 0.005}),
               inset 0 0 20px rgba(0, 100, 150, 0.2)`,
        }}>
          <div style={{
            ...styles.dasCore,
            background: connected 
              ? 'radial-gradient(circle, #00ccff 0%, #006688 100%)'
              : 'radial-gradient(circle, #004466 0%, #002233 100%)',
            boxShadow: connected ? `0 0 30px #00ccff` : '0 0 10px #004466',
          }}>
            {/* DAS waveform visualization */}
            {connected && (
              <svg width="40" height="40" viewBox="0 0 40 40" style={{position: 'absolute'}}>
                <path
                  d={`M 5 20 Q 10 ${15 + Math.sin(pulsePhase * 0.1) * 5} 15 20 Q 20 ${25 - Math.sin(pulsePhase * 0.1) * 5} 25 20 Q 30 ${15 + Math.sin(pulsePhase * 0.1) * 5} 35 20`}
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="2"
                />
              </svg>
            )}
          </div>
          <div style={{...styles.dasRing, borderColor: connected ? 'rgba(0, 204, 255, 0.5)' : 'rgba(0, 100, 150, 0.3)'}} />
          <div style={{
            ...styles.dasRing, 
            width: '110px', 
            height: '110px', 
            animationDirection: 'reverse', 
            animationDuration: '4s',
            borderColor: connected ? 'rgba(0, 255, 136, 0.3)' : 'rgba(0, 100, 150, 0.2)',
          }} />
          <span style={styles.unitLabel}>DAS INTERROGATOR</span>
          <span style={{...styles.unitSpec, color: '#00ccff'}}>DISTRIBUTED ACOUSTIC SENSING</span>
        </div>
      </div>

      {/* FBG Sensor Status Panel */}
      <div style={styles.fbgPanel}>
        <div style={styles.panelHeader}>FBG SENSOR ARRAY STATUS</div>
        <div style={styles.fbgGrid}>
          {fbgStatus.map((active, i) => (
            <div key={i} style={{
              ...styles.fbgIndicator,
              background: active ? 'rgba(0, 255, 136, 0.1)' : 'rgba(0, 50, 80, 0.3)',
              borderColor: active ? '#00ff88' : 'rgba(0, 100, 150, 0.3)',
              boxShadow: active ? '0 0 15px rgba(0, 255, 136, 0.5)' : 'none',
            }}>
              <div style={{
                ...styles.fbgDot,
                background: active ? '#00ff88' : '#334455',
                boxShadow: active ? '0 0 10px #00ff88' : 'none',
              }} />
              <span style={{...styles.fbgLabel, color: active ? '#00ff88' : '#445566'}}>
                FBG-{String(i + 1).padStart(2, '0')}
              </span>
              <span style={{...styles.fbgWavelength, color: active ? '#00ccff' : '#334455'}}>
                {1550 + i * 5}nm
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Status display */}
      <div style={styles.statusContainer}>
        <div style={styles.progressBar}>
          <div 
            style={{
              ...styles.progressFill,
              width: `${progress}%`,
              background: connected 
                ? 'linear-gradient(90deg, #ff3300, #ffaa00, #00ff88, #00ccff)'
                : 'linear-gradient(90deg, #ff3300, #ff6600, #ffaa00)',
            }}
          />
          <div style={{
            ...styles.progressGlow,
            left: `${progress}%`,
            opacity: connected ? 0 : 1,
            background: 'radial-gradient(circle, #ff6600 0%, transparent 70%)',
          }} />
        </div>
        
        <div style={styles.statusText}>
          {connected ? (
            <span style={styles.connectedText}>
              ● LASER LINK ESTABLISHED • ALL SYSTEMS ONLINE
            </span>
          ) : (
            <>
              <span style={styles.loadingText}>INITIALIZING LASER LINK ARRAY</span>
              <span style={styles.percentText}>{Math.floor(progress)}%</span>
            </>
          )}
        </div>

        {/* System metrics */}
        {connected && (
          <div style={styles.dataIndicators}>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>LASER POWER</span>
              <span style={{...styles.dataValue, color: '#ff6600'}}>18.5 mW</span>
            </div>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>FBG SENSORS</span>
              <span style={{...styles.dataValue, color: '#00ff88'}}>20 ACTIVE</span>
            </div>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>DAS RANGE</span>
              <span style={{...styles.dataValue, color: '#00ccff'}}>50 km</span>
            </div>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>SPATIAL RES</span>
              <span style={{...styles.dataValue, color: '#00ccff'}}>1.0 m</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scale(1.3); opacity: 0.8; }
        }
        
        @keyframes laserSweep {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(200vw); opacity: 0; }
        }
        
        @keyframes scanDown {
          0% { transform: translateY(-100%); opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes connectedPulse {
          0%, 100% { text-shadow: 0 0 10px #00ff88, 0 0 20px #00ccff; }
          50% { text-shadow: 0 0 20px #00ff88, 0 0 40px #00ccff, 0 0 60px #00ccff; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(160deg, #020810 0%, #041525 40%, #020d18 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Rajdhani', sans-serif",
    overflow: 'hidden',
    position: 'relative',
  },
  laserOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
  },
  laserBeam: {
    position: 'absolute',
    left: 0,
    width: '200%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #ff3300, #ff6600, #ff3300, transparent)',
    animation: 'laserSweep 8s linear infinite',
  },
  gridOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(0, 200, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 200, 255, 0.02) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    pointerEvents: 'none',
  },
  scanLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(180deg, transparent, rgba(0, 255, 136, 0.3), transparent)',
    animation: 'scanDown 4s linear infinite',
    pointerEvents: 'none',
  },
  particle: {
    position: 'absolute',
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    animation: 'float 4s ease-in-out infinite',
    boxShadow: '0 0 8px currentColor',
    pointerEvents: 'none',
  },
  titleContainer: {
    position: 'absolute',
    top: '30px',
    textAlign: 'center',
    zIndex: 10,
  },
  title: {
    margin: 0,
    fontSize: '38px',
    fontWeight: '700',
    letterSpacing: '6px',
    fontFamily: "'Orbitron', sans-serif",
  },
  titleCore: {
    color: '#ff3300',
    textShadow: '0 0 20px rgba(255, 51, 0, 0.7)',
  },
  titleOptic: {
    color: '#00ff88',
    textShadow: '0 0 20px rgba(0, 255, 136, 0.7)',
    marginLeft: '10px',
  },
  titleSystem: {
    color: '#00ccff',
    textShadow: '0 0 20px rgba(0, 204, 255, 0.7)',
    marginLeft: '10px',
    fontSize: '28px',
    fontWeight: '400',
  },
  subtitle: {
    marginTop: '10px',
    fontSize: '12px',
    color: 'rgba(0, 200, 255, 0.6)',
    letterSpacing: '4px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    maxWidth: '1000px',
    height: '350px',
    marginTop: '20px',
  },
  laserUnit: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(145deg, #1a0800 0%, #0d0400 100%)',
    border: '2px solid rgba(255, 102, 0, 0.5)',
    position: 'absolute',
    left: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
    zIndex: 10,
  },
  laserCore: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #ff3300 0%, #aa2200 50%, #551100 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  laserInner: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #ffffff 0%, #ff6600 50%, #ff3300 100%)',
    transition: 'box-shadow 0.1s ease',
  },
  laserRing: {
    position: 'absolute',
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 102, 0, 0.4)',
    animation: 'rotate 3s linear infinite',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  unitLabel: {
    position: 'absolute',
    bottom: '-28px',
    fontSize: '11px',
    color: '#ff6600',
    letterSpacing: '2px',
    fontFamily: "'Share Tech Mono', monospace",
    fontWeight: '600',
  },
  unitSpec: {
    position: 'absolute',
    bottom: '-45px',
    fontSize: '9px',
    color: 'rgba(255, 136, 0, 0.6)',
    letterSpacing: '1px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  cableContainer: {
    width: '75%',
    height: '100%',
    position: 'absolute',
    left: '12.5%',
  },
  dasUnit: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(145deg, #001520 0%, #000a10 100%)',
    border: '2px solid rgba(0, 204, 255, 0.4)',
    position: 'absolute',
    right: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
    zIndex: 10,
  },
  dasCore: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
  },
  dasRing: {
    position: 'absolute',
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    border: '1px solid rgba(0, 204, 255, 0.3)',
    animation: 'rotate 3s linear infinite',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'border-color 0.5s ease',
  },
  fbgPanel: {
    position: 'absolute',
    bottom: '160px',
    background: 'rgba(0, 20, 40, 0.6)',
    border: '1px solid rgba(0, 255, 136, 0.2)',
    borderRadius: '8px',
    padding: '12px 20px',
    backdropFilter: 'blur(10px)',
  },
  panelHeader: {
    fontSize: '10px',
    color: 'rgba(0, 255, 136, 0.7)',
    letterSpacing: '2px',
    marginBottom: '10px',
    textAlign: 'center',
    fontFamily: "'Share Tech Mono', monospace",
  },
  fbgGrid: {
    display: 'flex',
    gap: '12px',
  },
  fbgIndicator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid',
    transition: 'all 0.3s ease',
    minWidth: '60px',
  },
  fbgDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    marginBottom: '6px',
    transition: 'all 0.3s ease',
  },
  fbgLabel: {
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '1px',
    transition: 'color 0.3s ease',
  },
  fbgWavelength: {
    fontSize: '8px',
    marginTop: '3px',
    fontFamily: "'Share Tech Mono', monospace",
    transition: 'color 0.3s ease',
  },
  statusContainer: {
    position: 'absolute',
    bottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    zIndex: 10,
  },
  progressBar: {
    width: '450px',
    height: '4px',
    background: 'rgba(0, 50, 80, 0.4)',
    borderRadius: '2px',
    overflow: 'visible',
    position: 'relative',
  },
  progressFill: {
    height: '100%',
    borderRadius: '2px',
    transition: 'width 0.1s linear, background 0.5s ease',
    boxShadow: '0 0 15px rgba(255, 102, 0, 0.5)',
  },
  progressGlow: {
    position: 'absolute',
    top: '-10px',
    width: '24px',
    height: '24px',
    transform: 'translateX(-50%)',
    transition: 'left 0.1s linear, opacity 0.5s ease',
  },
  statusText: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
  },
  loadingText: {
    color: '#ff6600',
    fontSize: '13px',
    letterSpacing: '3px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  percentText: {
    color: '#ffaa00',
    fontSize: '20px',
    fontWeight: '700',
    minWidth: '60px',
    fontFamily: "'Orbitron', sans-serif",
  },
  connectedText: {
    color: '#00ff88',
    fontSize: '14px',
    letterSpacing: '3px',
    animation: 'connectedPulse 2s ease-in-out infinite',
    fontFamily: "'Share Tech Mono', monospace",
  },
  dataIndicators: {
    display: 'flex',
    gap: '35px',
    marginTop: '5px',
  },
  dataItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  dataLabel: {
    fontSize: '9px',
    color: 'rgba(0, 200, 255, 0.6)',
    letterSpacing: '2px',
    fontFamily: "'Share Tech Mono', monospace",
  },
  dataValue: {
    fontSize: '14px',
    fontWeight: '700',
  },
};

export default CoreOpticSystem;
