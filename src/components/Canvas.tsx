import { FC } from 'react';

import ParticleAnimation from 'react-particle-animation';

import useResponsiveSize from '../hooks/useResponsiveSize';

const Canvas: FC = () => {
  const { width } = useResponsiveSize();
  return (
    <div style={{ width, height: 220 }}>
      <ParticleAnimation
        background={{ r: 15, g: 23, b: 42, a: 255 }}
        color={{ r: 123, g: 97, b: 225, a: 255 }}
        numParticles={(width ?? 100) / 8}
        particleSpeed={0.5}
        particleRadius={1}
      />
    </div>
  );
};

export default Canvas;
