import React, { useEffect, useRef } from 'react';
import * as Ammo from 'ammo.js';
import { setupScene } from './SceneSetup';

const ThreeContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Ammo().then((AmmoLib) => {
      if (containerRef.current) {
        setupScene(AmmoLib, containerRef.current);
      }
    });

    // Implement any necessary cleanup
    return () => {
      // Cleanup logic here
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeContainer;