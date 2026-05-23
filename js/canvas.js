// canvas.js — 画布逻辑：绑定事件、绘制、撤销

let drawing = false;
let lastX = 0, lastY = 0;
let currentColor = '#FF0000';
let lineWidth = 6;
let strokes = []; // array of stroke data for undo
let currentStroke = [];

// Get the transform that maps logical (300x350) coords to canvas pixels
function getDrawTransform(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  const scale = Math.min(w, h) / 350;
  const offsetX = (w - 300 * scale) / 2;
  const offsetY = (h - 350 * scale) / 2;
  return { scale, offsetX, offsetY, dpr };
}

function initCanvas(canvas) {
  const ctx = canvas.getContext('2d');

  // Convert pointer event to logical coords (same space as guide paths)
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;
    // CSS pixel position relative to canvas element
    const cssX = touch.clientX - rect.left;
    const cssY = touch.clientY - rect.top;
    // Convert to logical drawing coords
    const t = getDrawTransform(canvas);
    return {
      x: (cssX - t.offsetX) / t.scale,
      y: (cssY - t.offsetY) / t.scale
    };
  }

  function startDraw(e) {
    e.preventDefault();
    drawing = true;
    const pos = getPos(e);
    lastX = pos.x;
    lastY = pos.y;
    currentStroke = [{ x: pos.x, y: pos.y, color: currentColor, width: lineWidth }];
    onDrawStart();
    requestRedraw();
  }

  function moveDraw(e) {
    e.preventDefault();
    if (!drawing) return;
    const pos = getPos(e);

    // Draw on user layer using transform
    const userCtx = userCanvas.getContext('2d');
    const t = getDrawTransform(userCanvas);
    userCtx.save();
    userCtx.setTransform(1, 0, 0, 1, 0, 0);
    userCtx.scale(t.dpr, t.dpr);
    userCtx.translate(t.offsetX, t.offsetY);
    userCtx.scale(t.scale, t.scale);

    userCtx.strokeStyle = currentColor;
    userCtx.lineWidth = lineWidth / t.scale; // constant visual thickness
    userCtx.lineCap = 'round';
    userCtx.lineJoin = 'round';
    userCtx.beginPath();
    userCtx.moveTo(lastX, lastY);
    userCtx.lineTo(pos.x, pos.y);
    userCtx.stroke();
    userCtx.restore();

    currentStroke.push({ x: pos.x, y: pos.y, color: currentColor, width: lineWidth });
    lastX = pos.x;
    lastY = pos.y;
    requestRedraw();
  }

  function endDraw(e) {
    if (!drawing) return;
    drawing = false;
    if (currentStroke.length > 1) {
      strokes.push([...currentStroke]);
    }
    currentStroke = [];
  }

  canvas.addEventListener('pointerdown', startDraw);
  canvas.addEventListener('pointermove', moveDraw);
  canvas.addEventListener('pointerup', endDraw);
  canvas.addEventListener('pointercancel', endDraw);
  canvas.addEventListener('pointerleave', endDraw);

  return ctx;
}

function undoStroke() {
  if (strokes.length === 0) return;
  strokes.pop();
  redrawUserCanvas();
  requestRedraw();
}

function redrawUserCanvas() {
  const ctx = userCanvas.getContext('2d');
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, userCanvas.width, userCanvas.height);

  const t = getDrawTransform(userCanvas);
  ctx.scale(t.dpr, t.dpr);
  ctx.translate(t.offsetX, t.offsetY);
  ctx.scale(t.scale, t.scale);

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (const stroke of strokes) {
    for (let i = 1; i < stroke.length; i++) {
      ctx.strokeStyle = stroke[i].color;
      ctx.lineWidth = stroke[i].width / t.scale;
      ctx.beginPath();
      ctx.moveTo(stroke[i - 1].x, stroke[i - 1].y);
      ctx.lineTo(stroke[i].x, stroke[i].y);
      ctx.stroke();
    }
  }
  ctx.restore();
}

function clearAllStrokes() {
  strokes = [];
  redrawUserCanvas();
  requestRedraw();
}
