import { Link } from 'react-router-dom';

const SwitchesPage = () => {
  const switches = [
    { name: 'CoreSwitch 1x4', type: '1x4 Optical Switch', insertionLoss: '< 0.5 dB', switchTime: '< 10 ms', repeatability: '< 0.01 dB', lifetime: '10M cycles' },
    { name: 'CoreSwitch 1x8', type: '1x8 Optical Switch', insertionLoss: '< 0.6 dB', switchTime: '< 10 ms', repeatability: '< 0.01 dB', lifetime: '10M cycles' },
    { name: 'CoreSwitch 1x16', type: '1x16 Optical Switch', insertionLoss: '< 0.8 dB', switchTime: '< 15 ms', repeatability: '< 0.02 dB', lifetime: '5M cycles' },
    { name: 'CoreSwitch 2x2', type: '2x2 Bypass Switch', insertionLoss: '< 0.4 dB', switchTime: '< 5 ms', repeatability: '< 0.01 dB', lifetime: '10M cycles' },
  ];

  return (
    <div style={{color:'#fff'}}>
      <section style={{padding:'120px 40px 80px',textAlign:'center',background:'linear-gradient(180deg, rgba(0, 255, 136, 0.1) 0%, transparent 100%)',borderBottom:'1px solid rgba(0, 200, 255, 0.1)'}}>
        <div style={{marginBottom:'20px',fontSize:'14px'}}><Link to="/products" style={{color:'rgba(255,255,255,0.6)',textDecoration:'none'}}>Products</Link><span style={{margin:'0 10px',color:'rgba(255,255,255,0.4)'}}>/</span><span>Optical Switches</span></div>
        <h1 style={{fontSize:'52px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif",color:'#00ff88'}}>Optical Switches</h1>
        <p style={{fontSize:'20px',color:'rgba(255,255,255,0.7)'}}>Fast, reliable optical switches for fiber network routing and sensor multiplexing</p>
      </section>
      <section style={{padding:'100px 40px',maxWidth:'1400px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'30px'}}>
          {switches.map((p) => (
            <div key={p.name} style={{background:'rgba(0, 30, 60, 0.5)',borderRadius:'20px',padding:'40px',border:'1px solid rgba(0, 255, 136, 0.2)'}}>
              <div style={{fontSize:'48px',color:'#00ff88',marginBottom:'20px'}}>⟷</div>
              <h2 style={{fontSize:'28px',fontWeight:700,marginBottom:'8px',fontFamily:"'Orbitron', sans-serif"}}>{p.name}</h2>
              <p style={{fontSize:'14px',color:'rgba(255,255,255,0.6)',marginBottom:'30px'}}>{p.type}</p>
              <div style={{marginBottom:'25px'}}>
                {[['Insertion Loss',p.insertionLoss],['Switch Time',p.switchTime],['Repeatability',p.repeatability],['Lifetime',p.lifetime]].map(([l,v])=>(
                  <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'12px 0',borderBottom:'1px solid rgba(0, 200, 255, 0.1)'}}>
                    <span style={{fontSize:'14px',color:'rgba(255,255,255,0.6)'}}>{l}</span>
                    <span style={{fontSize:'14px',color:'#00ff88',fontWeight:600}}>{v}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" style={{display:'inline-block',background:'transparent',color:'#00ff88',padding:'14px 30px',borderRadius:'8px',border:'2px solid #00ff88',textDecoration:'none',fontSize:'14px',fontWeight:600}}>Request Quote</Link>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:'100px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'38px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif"}}>Need a Custom Configuration?</h2>
        <p style={{fontSize:'18px',color:'rgba(255,255,255,0.7)',marginBottom:'40px'}}>We offer custom switch configurations to meet your specific requirements</p>
        <Link to="/contact" style={{display:'inline-block',background:'linear-gradient(135deg, #00ff88, #00aa55)',color:'#000',padding:'18px 50px',borderRadius:'8px',textDecoration:'none',fontSize:'16px',fontWeight:600}}>Contact Us</Link>
      </section>
    </div>
  );
};
export default SwitchesPage;
