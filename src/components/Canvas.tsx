import { FC } from 'react';

import ParticleAnimation from 'react-particle-animation';

const Canvas: FC = () => {
  return (
    <div style={{ width: '100%', height: 220 }}>
      <ParticleAnimation
        background={{ r: 15, g: 23, b: 42, a: 255 }}
        color={{ r: 123, g: 97, b: 225, a: 255 }}
        numParticles={160}
        particleSpeed={0.5}
      />
    </div>
  );
};

export default Canvas;
