import { Link } from 'react-router-dom';
const ConsultingPage = () => (
  <div style={{color:'#fff'}}>
    <section style={{padding:'120px 40px 80px',textAlign:'center',background:'linear-gradient(180deg, rgba(255, 102, 0, 0.1) 0%, transparent 100%)',borderBottom:'1px solid rgba(0, 200, 255, 0.1)'}}>
      <div style={{marginBottom:'20px',fontSize:'14px'}}><Link to="/services" style={{color:'rgba(255,255,255,0.6)',textDecoration:'none'}}>Services</Link><span style={{margin:'0 10px',color:'rgba(255,255,255,0.4)'}}>/</span><span>Consulting</span></div>
      <h1 style={{fontSize:'52px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif",color:'#ff6600'}}>Consulting Services</h1>
      <p style={{fontSize:'20px',color:'rgba(255,255,255,0.7)',maxWidth:'700px',margin:'0 auto'}}>Expert guidance to help you select and implement the right fiber optic sensing solution</p>
    </section>
    <section style={{padding:'100px 40px',maxWidth:'1000px',margin:'0 auto'}}>
      <h2 style={{fontSize:'32px',fontWeight:700,marginBottom:'30px',fontFamily:"'Orbitron', sans-serif"}}>What We Offer</h2>
      {[{title:'Feasibility Studies',desc:'Comprehensive analysis of your application requirements and technology options.'},{title:'System Design',desc:'Detailed system architecture and component selection tailored to your needs.'},{title:'Technology Selection',desc:'Expert recommendations on interrogators, sensors, and software platforms.'},{title:'ROI Analysis',desc:'Business case development and return on investment projections.'}].map((item) => (
        <div key={item.title} style={{background:'rgba(0, 30, 60, 0.5)',borderRadius:'16px',padding:'30px',marginBottom:'20px',border:'1px solid rgba(255, 102, 0, 0.2)'}}>
          <h3 style={{fontSize:'20px',fontWeight:600,marginBottom:'10px',color:'#ff6600'}}>{item.title}</h3>
          <p style={{fontSize:'15px',color:'rgba(255,255,255,0.7)'}}>{item.desc}</p>
        </div>
      ))}
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <Link to="/contact" style={{display:'inline-block',background:'linear-gradient(135deg, #ff3300, #ff6600)',color:'#fff',padding:'18px 50px',borderRadius:'8px',textDecoration:'none',fontSize:'16px',fontWeight:600}}>Request Consultation</Link>
      </div>
    </section>
  </div>
);
export default ConsultingPage;
