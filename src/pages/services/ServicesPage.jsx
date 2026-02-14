import { Link } from 'react-router-dom';
const ServicesPage = () => {
  const services = [
    { title: 'Consulting', desc: 'Expert guidance on system design and technology selection.', icon: '📋', color: '#ff6600', link: '/services/consulting', features: ['System design', 'Feasibility studies', 'Technology selection'] },
    { title: 'Installation', desc: 'Professional installation and commissioning services.', icon: '🔧', color: '#00ff88', link: '/services/installation', features: ['Site assessment', 'Sensor deployment', 'Commissioning'] },
    { title: 'Training', desc: 'Comprehensive training programs for operators.', icon: '🎓', color: '#00ccff', link: '/contact', features: ['Operator training', 'Advanced courses', 'On-site sessions'] },
    { title: 'Support', desc: 'Ongoing technical support and maintenance.', icon: '🛠️', color: '#aa88ff', link: '/contact', features: ['24/7 helpdesk', 'Remote diagnostics', 'Software updates'] },
  ];
  return (
    <div style={{color:'#fff'}}>
      <section style={{padding:'120px 40px 80px',textAlign:'center',background:'linear-gradient(180deg, rgba(0, 30, 60, 0.5) 0%, transparent 100%)',borderBottom:'1px solid rgba(0, 200, 255, 0.1)'}}>
        <h1 style={{fontSize:'52px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif"}}>Our Services</h1>
        <p style={{fontSize:'20px',color:'rgba(255,255,255,0.7)'}}>End-to-end support from consultation to maintenance</p>
      </section>
      <section style={{padding:'100px 40px',maxWidth:'1400px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'30px'}}>
          {services.map((s) => (
            <div key={s.title} style={{background:'rgba(0, 30, 60, 0.5)',borderRadius:'20px',padding:'45px',border:'1px solid rgba(0, 200, 255, 0.2)'}}>
              <div style={{fontSize:'48px',marginBottom:'20px'}}>{s.icon}</div>
              <h2 style={{fontSize:'28px',fontWeight:700,marginBottom:'15px',fontFamily:"'Orbitron', sans-serif"}}>{s.title}</h2>
              <p style={{fontSize:'15px',color:'rgba(255,255,255,0.7)',marginBottom:'25px'}}>{s.desc}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'30px'}}>
                {s.features.map((f) => (<span key={f} style={{background:'rgba(0, 200, 255, 0.1)',borderRadius:'20px',padding:'8px 16px',fontSize:'13px',color:'#00ccff'}}>{f}</span>))}
              </div>
              <Link to={s.link} style={{display:'inline-block',padding:'14px 30px',borderRadius:'8px',border:'2px solid '+s.color,color:s.color,textDecoration:'none',fontSize:'14px',fontWeight:600}}>Learn More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default ServicesPage;
