import { Link } from 'react-router-dom';
const PublicationsPage = () => {
  const publications = [
    {type:'White Paper',title:'Introduction to FBG Sensing Technology',desc:'A comprehensive guide to Fiber Bragg Grating technology and applications.',date:'2024'},
    {type:'Case Study',title:'Bridge Structural Health Monitoring',desc:'How FBG sensors enabled real-time monitoring of a major highway bridge.',date:'2024'},
    {type:'Technical Note',title:'Selecting the Right Interrogator',desc:'Key considerations when choosing an FBG interrogation system.',date:'2023'},
    {type:'White Paper',title:'DAS for Pipeline Monitoring',desc:'Distributed Acoustic Sensing applications in oil and gas pipelines.',date:'2023'},
    {type:'Case Study',title:'Wind Turbine Blade Monitoring',desc:'Deploying FBG strain sensors in composite wind turbine blades.',date:'2023'},
    {type:'Application Note',title:'Temperature Compensation Techniques',desc:'Methods for accurate strain measurement with temperature variation.',date:'2022'},
  ];
  return (
    <div style={{color:'#fff'}}>
      <section style={{padding:'120px 40px 80px',textAlign:'center',background:'linear-gradient(180deg, rgba(0, 30, 60, 0.5) 0%, transparent 100%)',borderBottom:'1px solid rgba(0, 200, 255, 0.1)'}}>
        <h1 style={{fontSize:'52px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif"}}>Publications</h1>
        <p style={{fontSize:'20px',color:'rgba(255,255,255,0.7)'}}>Technical resources, case studies, and white papers</p>
      </section>
      <section style={{padding:'100px 40px',maxWidth:'1000px',margin:'0 auto'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
          {publications.map((pub,i) => (
            <div key={i} style={{background:'rgba(0, 30, 60, 0.5)',borderRadius:'16px',padding:'30px 35px',border:'1px solid rgba(0, 200, 255, 0.2)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <span style={{display:'inline-block',background:pub.type==='White Paper'?'rgba(255, 102, 0, 0.2)':pub.type==='Case Study'?'rgba(0, 255, 136, 0.2)':'rgba(0, 204, 255, 0.2)',color:pub.type==='White Paper'?'#ff6600':pub.type==='Case Study'?'#00ff88':'#00ccff',padding:'5px 12px',borderRadius:'12px',fontSize:'11px',fontWeight:600,marginBottom:'12px'}}>{pub.type}</span>
                <h3 style={{fontSize:'20px',fontWeight:600,marginBottom:'8px'}}>{pub.title}</h3>
                <p style={{fontSize:'14px',color:'rgba(255,255,255,0.6)'}}>{pub.desc}</p>
              </div>
              <div style={{textAlign:'right',flexShrink:0,marginLeft:'30px'}}>
                <span style={{display:'block',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'10px'}}>{pub.date}</span>
                <button style={{background:'transparent',border:'2px solid #00ccff',color:'#00ccff',padding:'10px 20px',borderRadius:'6px',fontSize:'13px',fontWeight:600,cursor:'pointer'}}>Download PDF</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:'80px 40px',textAlign:'center',background:'rgba(0, 20, 40, 0.5)'}}>
        <h2 style={{fontSize:'32px',fontWeight:700,marginBottom:'20px',fontFamily:"'Orbitron', sans-serif"}}>Stay Updated</h2>
        <p style={{fontSize:'18px',color:'rgba(255,255,255,0.7)',marginBottom:'40px'}}>Subscribe to receive our latest technical publications</p>
        <div style={{display:'flex',gap:'15px',justifyContent:'center',maxWidth:'500px',margin:'0 auto'}}>
          <input type="email" placeholder="Enter your email" style={{flex:1,background:'rgba(0, 50, 100, 0.3)',border:'1px solid rgba(0, 200, 255, 0.3)',borderRadius:'8px',padding:'15px 20px',color:'#fff',fontSize:'15px'}} />
          <button style={{background:'linear-gradient(135deg, #ff3300, #ff6600)',border:'none',borderRadius:'8px',padding:'15px 30px',color:'#fff',fontSize:'15px',fontWeight:600,cursor:'pointer'}}>Subscribe</button>
        </div>
      </section>
    </div>
  );
};
export default PublicationsPage;
