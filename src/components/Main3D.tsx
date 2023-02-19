import React, { useEffect } from 'react';

const Main3D = () => {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    <div
      className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* @ts-ignore */}
      <model-viewer
        className="w-full object-cover lg:w-full lg:h-full"
        style={{ width: '100%', height: '40rem', backgroundColor: 'unset' }}
        src="/assets/3d/bag.gltf"
        ios-src="/assets/3d/bag.usdz"
        shadow-intensity="1"
        auto-rotate
      />
    </div>
  );
};

export default Main3D;
