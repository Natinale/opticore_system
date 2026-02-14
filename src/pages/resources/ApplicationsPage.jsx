import { Link } from 'react-router-dom';
const ApplicationsPage = () => {
  const apps = [
    {title:'Structural Health Monitoring',icon:'🏗️',desc:'Monitor bridges, buildings, dams, and other critical infrastructure for strain, displacement, and damage detection.',industries:['Civil Engineering','Construction','Transportation']},
    {title:'Oil & Gas',icon:'🛢️',desc:'Pipeline monitoring, wellbore sensing, and refinery structural integrity assessment.',industries:['Upstream','Midstream','Downstream']},
    {title:'Aerospace & Aviation',icon:'✈️',desc:'Aircraft structural monitoring, composite testing, and flight test instrumentation.',industries:['Commercial Aviation','Defense','Space']},
    {title:'Power & Energy',icon:'⚡',desc:'Power cable monitoring, transformer sensing, and wind turbine blade monitoring.',industries:['Utilities','Renewables','Nuclear']},
    {title:'Civil Infrastructure',icon:'🌉',desc:'Bridge monitoring, tunnel sensing, and railway track monitoring.',industries:['Roads','Railways','Tunnels']},
    {title:'Geotechnical',icon:'🏔️',desc:'Slope stability monitoring, landslide detection, and mining applications.',industries:['Mining','Geohazards','Construction']},
  ];
  return (
    <div style={{color:'#fff'}}>
      <section style={{padding:'120px 40px 80px',textAlign:'center',background:'linear-gradient(180deg, rgba(0, 30, 60, 0.5) 0%, transparent 100%)',borderBottom:'1px solid rgba(0, 200, 255, 0.1)'}}>
        <h1 style={{fontSize:'52px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif"}}>Applications</h1>
        <p style={{fontSize:'20px',color:'rgba(255,255,255,0.7)'}}>Fiber optic sensing solutions across industries</p>
      </section>
      <section style={{padding:'100px 40px',maxWidth:'1400px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'30px'}}>
          {apps.map((app) => (
            <div key={app.title} style={{background:'rgba(0, 30, 60, 0.5)',borderRadius:'20px',padding:'40px',border:'1px solid rgba(0, 200, 255, 0.2)'}}>
              <div style={{fontSize:'48px',marginBottom:'20px'}}>{app.icon}</div>
              <h2 style={{fontSize:'22px',fontWeight:700,marginBottom:'15px'}}>{app.title}</h2>
              <p style={{fontSize:'14px',color:'rgba(255,255,255,0.7)',marginBottom:'20px',lineHeight:1.7}}>{app.desc}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {app.industries.map((ind) => (<span key={ind} style={{background:'rgba(0, 200, 255, 0.1)',borderRadius:'15px',padding:'6px 14px',fontSize:'12px',color:'#00ccff'}}>{ind}</span>))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:'80px 40px',textAlign:'center',background:'rgba(0, 20, 40, 0.5)'}}>
        <h2 style={{fontSize:'32px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif"}}>Have a Unique Application?</h2>
        <p style={{fontSize:'18px',color:'rgba(255,255,255,0.7)',marginBottom:'40px'}}>Our team can help develop a custom solution for your specific needs</p>
        <Link to="/contact" style={{display:'inline-block',background:'linear-gradient(135deg, #ff3300, #ff6600)',color:'#fff',padding:'18px 50px',borderRadius:'8px',textDecoration:'none',fontSize:'16px',fontWeight:600}}>Discuss Your Application</Link>
      </section>
    </div>
  );
};
export default ApplicationsPage;
