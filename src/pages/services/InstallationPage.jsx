import { Link } from 'react-router-dom';
const InstallationPage = () => (
  <div style={{color:'#fff'}}>
    <section style={{padding:'120px 40px 80px',textAlign:'center',background:'linear-gradient(180deg, rgba(0, 255, 136, 0.1) 0%, transparent 100%)',borderBottom:'1px solid rgba(0, 200, 255, 0.1)'}}>
      <div style={{marginBottom:'20px',fontSize:'14px'}}><Link to="/services" style={{color:'rgba(255,255,255,0.6)',textDecoration:'none'}}>Services</Link><span style={{margin:'0 10px',color:'rgba(255,255,255,0.4)'}}>/</span><span>Installation</span></div>
      <h1 style={{fontSize:'52px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif",color:'#00ff88'}}>Installation Services</h1>
      <p style={{fontSize:'20px',color:'rgba(255,255,255,0.7)',maxWidth:'700px',margin:'0 auto'}}>Professional deployment and commissioning of fiber optic sensing systems</p>
    </section>
    <section style={{padding:'100px 40px',maxWidth:'1000px',margin:'0 auto'}}>
      <h2 style={{fontSize:'32px',fontWeight:700,marginBottom:'30px',fontFamily:"'Orbitron', sans-serif"}}>Installation Process</h2>
      <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
        {[{step:'1',title:'Site Assessment',desc:'Detailed survey of installation environment and requirements.'},{step:'2',title:'Sensor Deployment',desc:'Professional installation of FBG sensors and fiber cables.'},{step:'3',title:'System Integration',desc:'Connection of interrogators and integration with existing systems.'},{step:'4',title:'Commissioning',desc:'Full system testing, calibration, and validation.'},{step:'5',title:'Training & Handover',desc:'Operator training and documentation delivery.'}].map((item) => (
          <div key={item.step} style={{display:'flex',gap:'25px',background:'rgba(0, 30, 60, 0.5)',borderRadius:'16px',padding:'30px',border:'1px solid rgba(0, 255, 136, 0.2)'}}>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',background:'linear-gradient(135deg, #00ff88, #00aa55)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',fontWeight:700,color:'#000',flexShrink:0}}>{item.step}</div>
            <div><h3 style={{fontSize:'20px',fontWeight:600,marginBottom:'8px'}}>{item.title}</h3><p style={{fontSize:'15px',color:'rgba(255,255,255,0.7)'}}>{item.desc}</p></div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <Link to="/contact" style={{display:'inline-block',background:'linear-gradient(135deg, #00ff88, #00aa55)',color:'#000',padding:'18px 50px',borderRadius:'8px',textDecoration:'none',fontSize:'16px',fontWeight:600}}>Request Quote</Link>
      </div>
    </section>
  </div>
);
export default InstallationPage;
