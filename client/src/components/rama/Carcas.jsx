import React from 'react';
import '../../scss/app.scss';
import W62 from './W62';

function Carcas({ props }) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    ramaStart();
  }, []);

  function ramaStart() {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');

    const RED = '204,77,77,1';
    const BLUE = '76,67,196,1';

    let width_rama = 300;
    let height_rama = 300;

    let position = {
      x: 100,
      y: 100,
    };
    W62(ctx, position.x, position.y, width_rama, height_rama, RED);
    W62(ctx, position.x + 10, position.y + 10, width_rama, height_rama, BLUE);
  }

  return (
    <>
      <h1>Product</h1>
      <canvas className={'canvas-container'} ref={canvasRef}></canvas>
    </>
  );
}

export default Carcas;
