import React from 'react';
import '../scss/app.scss';

function ProductBlock() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');

    let width_rama = 500;
    let height_rama = 200;

    let position = {
      x: 104,
      y: 40,
    };

    ctx.shadowColor = 'rgba(0,0,0,0)';
    ctx.strokeStyle = 'rgba(0,0,0,1)';
    ctx.lineWidth = 1;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.beginPath();
    ctx.moveTo(position.x, position.y);
    ctx.lineTo(width_rama - position.x, position.y);
    ctx.lineTo(width_rama - position.x, height_rama - position.y);
    ctx.lineTo(position.x, height_rama - position.y);
    ctx.lineTo(position.x, position.y);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'rgba(0,0,0,0)';
    ctx.fillStyle = 'rgba(204,77,77,1)';
    ctx.fill();
  }, []);

  return (
    <>
      <h1>Product</h1>
      <canvas className={'canvas-container'} ref={canvasRef}></canvas>
    </>
  );
}

export default ProductBlock;
