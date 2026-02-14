import { Link } from 'react-router-dom';

const FBGSensorsPage = () => {
  const sensorCategories = [
    { title: 'Bare FBG Fibers', desc: 'Uncoated fiber Bragg gratings for OEM integration and custom packaging', items: ['Single gratings', 'Arrays up to 100+ FBGs', 'Custom wavelength spacing', 'Draw tower gratings'], color: '#ff6600' },
    { title: 'Temperature Sensors', desc: 'Packaged FBG sensors optimized for temperature measurement', items: ['Range: -40°C to +300°C', 'Accuracy: ±0.5°C', 'Stainless steel housing', 'Quick response time'], color: '#00ff88' },
    { title: 'Strain Sensors', desc: 'Surface-mountable and embedable strain sensors', items: ['Strain range: ±5000 µε', 'Resolution: 1 µε', 'Fatigue resistant', 'Various mounting options'], color: '#00ccff' },
    { title: 'Pressure Sensors', desc: 'High-accuracy pressure transducers with FBG technology', items: ['Ranges: 0-100 bar+', 'Explosion-proof options', 'Submersible designs', 'Multi-point arrays'], color: '#aa88ff' },
  ];

  return (
    <div style={{color:'#fff'}}>
      <section style={{padding:'120px 40px 80px',textAlign:'center',background:'linear-gradient(180deg, rgba(0, 204, 255, 0.1) 0%, transparent 100%)',borderBottom:'1px solid rgba(0, 200, 255, 0.1)'}}>
        <div style={{marginBottom:'20px',fontSize:'14px'}}><Link to="/products" style={{color:'rgba(255,255,255,0.6)',textDecoration:'none'}}>Products</Link><span style={{margin:'0 10px',color:'rgba(255,255,255,0.4)'}}>/</span><span>FBG Sensors</span></div>
        <h1 style={{fontSize:'52px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif",color:'#00ccff'}}>FBG Sensors</h1>
        <p style={{fontSize:'20px',color:'rgba(255,255,255,0.7)',maxWidth:'700px',margin:'0 auto'}}>From bare fiber gratings to fully packaged sensing solutions for strain, temperature, and pressure measurement</p>
      </section>
      <section style={{padding:'100px 40px',maxWidth:'1400px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'30px'}}>
          {sensorCategories.map((cat) => (
            <div key={cat.title} style={{background:'rgba(0, 30, 60, 0.5)',borderRadius:'20px',padding:'45px',border:`1px solid ${cat.color}33`}}>
              <div style={{width:'60px',height:'60px',borderRadius:'12px',background:`${cat.color}20`,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'25px',fontSize:'28px',color:cat.color}}>|||</div>
              <h2 style={{fontSize:'26px',fontWeight:700,marginBottom:'12px',fontFamily:"'Orbitron', sans-serif"}}>{cat.title}</h2>
              <p style={{fontSize:'15px',color:'rgba(255,255,255,0.6)',marginBottom:'25px',lineHeight:1.7}}>{cat.desc}</p>
              <ul style={{listStyle:'none',padding:0,marginBottom:'30px'}}>
                {cat.items.map((item) => (<li key={item} style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'14px',color:'rgba(255,255,255,0.7)',marginBottom:'10px'}}><span style={{color:cat.color}}>✓</span>{item}</li>))}
              </ul>
              <Link to="/contact" style={{display:'inline-block',padding:'12px 28px',borderRadius:'8px',border:`2px solid ${cat.color}`,color:cat.color,textDecoration:'none',fontSize:'14px',fontWeight:600}}>Get Details</Link>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:'80px 40px',background:'rgba(0, 20, 40, 0.5)',textAlign:'center'}}>
        <h2 style={{fontSize:'38px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif"}}>Custom Sensor Development</h2>
        <p style={{fontSize:'18px',color:'rgba(255,255,255,0.7)',marginBottom:'40px',maxWidth:'600px',margin:'0 auto 40px'}}>Need a sensor tailored to your specific application? Our engineering team can develop custom FBG solutions.</p>
        <Link to="/contact" style={{display:'inline-block',background:'linear-gradient(135deg, #ff3300, #ff6600)',color:'#fff',padding:'18px 50px',borderRadius:'8px',textDecoration:'none',fontSize:'16px',fontWeight:600}}>Discuss Your Requirements</Link>
      </section>
    </div>
  );
};
export default FBGSensorsPage;
