import { useState } from 'react';
import Scene3D from '../components/Scene3D';
import Overlay from '../components/Overlay';
import Loader from '../components/Loader';

export default function Home() {
  const [activeZone, setActiveZone] = useState(null); // 'about', 'projects', 'work'
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="h-screen w-full bg-[#0a0a0a] overflow-hidden relative">
      {!hasEntered ? (
        <Loader onEnter={() => { setHasEntered(true); setActiveZone('about'); }} />
      ) : (
        <>
          <Scene3D currentZone={activeZone} />
          <Overlay activeZone={activeZone} setZone={setActiveZone} />
          
          {/* Global Navigation */}
          <nav className="absolute top-10 w-full flex justify-center gap-8 z-50 pointer-events-auto">
             <button onClick={() => setActiveZone('about')} className="nav-btn">About</button>
             <button onClick={() => setActiveZone('projects')} className="nav-btn">Projects</button>
             <button onClick={() => setActiveZone('work')} className="nav-btn">Experience</button>
          </nav>
        </>
      )}
    </div>
  );
}
