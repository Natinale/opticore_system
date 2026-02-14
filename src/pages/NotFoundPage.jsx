import { Link } from 'react-router-dom';
const NotFoundPage = () => (
  <div style={{minHeight:'80vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'#fff',textAlign:'center',padding:'40px'}}>
    <div style={{fontSize:'120px',fontWeight:900,color:'#ff3300',fontFamily:"'Orbitron', sans-serif",textShadow:'0 0 50px rgba(255, 51, 0, 0.5)'}}>404</div>
    <h1 style={{fontSize:'32px',marginBottom:'20px',fontFamily:"'Orbitron', sans-serif"}}>Signal Lost</h1>
    <p style={{color:'rgba(255,255,255,0.6)',marginBottom:'40px'}}>The page you're looking for doesn't exist or has been moved.</p>
    <Link to="/" style={{background:'linear-gradient(135deg, #00ccff, #00ff88)',color:'#000',padding:'15px 40px',borderRadius:'8px',textDecoration:'none',fontWeight:600}}>Return Home</Link>
  </div>
);
export default NotFoundPage;
