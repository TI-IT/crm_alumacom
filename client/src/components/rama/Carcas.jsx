import React from 'react';
import '../../scss/app.scss';
import W62 from './W62';

function Carcas({ props }) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');

    const RED = '204,77,77,1';
    const BLUE = '76,67,196,1';

    let width_rama = 400;
    let height_rama = 300;

    let position = {
      x: 20,
      y: 30,
    };
    W62(ctx, position.x, position.y, width_rama, height_rama, RED);
    W62(ctx, position.x + 10, position.y + 10, width_rama - 10, height_rama - 10, BLUE);
  }, []);

  return (
    <>
      <h1>Product</h1>
      <canvas className={'canvas-container'} ref={canvasRef}></canvas>
    </>
  );
}

export default Carcas;
