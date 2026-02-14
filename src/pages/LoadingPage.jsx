import { useEffect } from 'react';
import CoreOpticSystem from '../components/CoreOpticSystem';
const LoadingPage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => { if (onComplete) onComplete(); }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return <CoreOpticSystem onComplete={onComplete} />;
};
export default LoadingPage;
