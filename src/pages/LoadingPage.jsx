import { useEffect } from 'react';
import CoreOpticSystem from '../components/CoreOpticSystem';
const LoadingPage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => { if (onComplete) onComplete(); }, 8000);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return <CoreOpticSystem onComplete={onComplete} />;
};
export default LoadingPage;
