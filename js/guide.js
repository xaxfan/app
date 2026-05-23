// guide.js — 参考线渲染和模式管理

const GUIDE_MODES = {
  fade: { before: 0.6, after: 0.2 },
  hide: { before: 0.6, after: 0 },
  keep: { before: 0.6, after: 0.6 }
};

let guideMode = localStorage.getItem('guideMode') || 'fade';
let guideOpacity = GUIDE_MODES[guideMode].before;
let hasStartedDrawing = false;

function setGuideMode(mode) {
  guideMode = mode;
  localStorage.setItem('guideMode', mode);
}

function resetGuideForStep() {
  hasStartedDrawing = false;
  guideOpacity = GUIDE_MODES[guideMode].before;
}

function onDrawStart() {
  if (!hasStartedDrawing) {
    hasStartedDrawing = true;
    guideOpacity = GUIDE_MODES[guideMode].after;
  }
}

function drawGuide(ctx, step, completedSteps, allSteps) {
  ctx.save();
  // Only draw current step guide — completed steps' guides are hidden
  ctx.globalAlpha = guideOpacity;
  ctx.strokeStyle = '#7EC8E3';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([]);
  drawStepPaths(ctx, step);
  ctx.restore();
}

function drawStepPaths(ctx, step) {
  for (const p of step.paths) {
    ctx.beginPath();
    switch (p.type) {
      case 'circle':
        ctx.arc(p.cx, p.cy, p.r, 0, Math.PI * 2);
        break;
      case 'ellipse':
        ctx.ellipse(p.cx, p.cy, p.rx, p.ry, 0, 0, Math.PI * 2);
        break;
      case 'line':
        ctx.moveTo(p.x1, p.y1);
        ctx.lineTo(p.x2, p.y2);
        break;
      case 'path':
        const path2d = new Path2D(p.d);
        ctx.stroke(path2d);
        continue;
    }
    ctx.stroke();
  }
}

// Draw a small thumbnail preview of a full drawing
function drawThumbnail(ctx, drawing, size) {
  const scale = size / 300;
  ctx.save();
  ctx.scale(scale, scale);
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([]);
  for (const step of drawing.steps) {
    drawStepPaths(ctx, step);
  }
  ctx.restore();
}
