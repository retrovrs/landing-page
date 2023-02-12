import { useRef, FC, useEffect, useState, CSSProperties } from 'react';

import { CanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import Wave from './Wave';

type Props = {
  style?: CSSProperties | undefined;
};

const Canvas: FC<Props> = ({ style }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width } = useResponsiveSize();
  const [context, setContext] = useState<
    CanvasRenderingContext2D | undefined
  >();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) setContext(ctx);
  }, []);

  return (
    <>
      <CanvasContext.Provider value={{ context }}>
        <canvas
          id="canvas"
          ref={canvasRef}
          width={width}
          height={220}
          style={style}
        ></canvas>
        <Wave />
      </CanvasContext.Provider>
    </>
  );
};

export default Canvas;
