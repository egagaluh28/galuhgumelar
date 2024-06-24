// Map.jsx
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./MapComponent'), {
  ssr: false
});

const Map = () => {
  return <DynamicMap />;
};

export default Map;
