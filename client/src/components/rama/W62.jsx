function W62(ctx, position_x, position_y, width_rama, height_rama, color) {
  ctx.shadowColor = 'rgba(0,0,0,0)';
  ctx.strokeStyle = 'rgba(0,0,0,1)';
  ctx.lineWidth = 1;
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.beginPath();
  ctx.moveTo(position_x, position_y); //1
  ctx.lineTo(width_rama, position_y); //2
  ctx.lineTo(width_rama, height_rama); //3
  ctx.lineTo(position_x, height_rama); // 4
  ctx.lineTo(position_x, position_y); //5
  ctx.closePath();
  ctx.stroke();
  ctx.shadowOffsetX = 15;
  ctx.shadowOffsetY = 15;
  ctx.shadowBlur = 0;
  ctx.shadowColor = 'rgba(0,0,0,0)';
  ctx.fillStyle = 'rgba(' + color + ')';
  ctx.fill();
}
export default W62;
