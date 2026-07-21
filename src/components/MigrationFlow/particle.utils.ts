import { svgPathProperties } from "svg-path-properties";

export function sampleSvgPath(d: string, n = 2000): [number, number][] {
  const props = new (svgPathProperties as any)(d);
  const len = props.getTotalLength();
  const pts: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const p = props.getPointAtLength((i / n) * len);
    pts.push([p.x, p.y]);
  }
  return pts;
}


export function getBounds(poly: [number, number][]) {
  let minX = Infinity, minY = Infinity;
  let maxX = -Infinity, maxY = -Infinity;
  for (const [x, y] of poly) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
  return { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY };
}


export function scaleAndPositionPoly(
  poly: [number, number][],
  targetCX: number,
  targetCY: number,
  targetHeightPx: number
): [number, number][] {
  const b = getBounds(poly);
  if (b.height === 0) return poly;

  const scale = targetHeightPx / b.height;
  const scaled = poly.map(([x, y]) => [x * scale, y * scale]);
  const sb = getBounds(scaled as [number, number][]);
  const dx = targetCX - (sb.minX + sb.width / 2);
  const dy = targetCY - (sb.minY + sb.height / 2);
  return scaled.map(([x, y]) => [x + dx, y + dy]);
}


export function polyPath(ctx: CanvasRenderingContext2D, poly: [number, number][]) {
  if (!poly || poly.length < 3) return;
  ctx.beginPath();
  ctx.moveTo(poly[0][0], poly[0][1]);
  for (let i = 1; i < poly.length; i++) {
    ctx.lineTo(poly[i][0], poly[i][1]);
  }
  ctx.closePath();
}


export function ptInPoly(px: number, py: number, poly: [number, number][]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1];
    const xj = poly[j][0], yj = poly[j][1];
    if (((yi > py) !== (yj > py)) &&
      (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

export function randomInFilledArea(
  poly: [number, number][],
  bounds: ReturnType<typeof getBounds>,
  fillProgress: number
): [number, number] {
  if (fillProgress <= 0) return [bounds.minX + bounds.width / 2, bounds.maxY];
  if (fillProgress >= 1) return randomInPoly(poly, bounds);

  const fillHeight = Math.max(1, fillProgress * bounds.height);
  const minFillY = bounds.maxY - fillHeight;
  let x, y, tries = 0;

  do {
    x = bounds.minX + Math.random() * bounds.width;
    y = minFillY + Math.random() * fillHeight;
    tries++;
  } while (!ptInPoly(x, y, poly) && tries < 600);

  return [x, y];
}


export function randomInPoly(poly: [number, number][], bounds: ReturnType<typeof getBounds>): [number, number] {
  let x, y, tries = 0;
  do {
    x = bounds.minX + Math.random() * bounds.width;
    y = bounds.minY + Math.random() * bounds.height;
    tries++;
  } while (!ptInPoly(x, y, poly) && tries < 300);
  return [x, y];
}


export function drawPartialFill(
  ctx: CanvasRenderingContext2D,
  poly: [number, number][],
  bounds: ReturnType<typeof getBounds>,
  progress: number,
  isDraining: boolean,
  fillStyle: string
) {
  const clamped = Math.max(0, Math.min(1, progress));

  const fillProgress = isDraining
    ? (1 - clamped)
    : +clamped;

  ctx.save();
  polyPath(ctx, poly);
  ctx.clip();

  const fillHeight = fillProgress * bounds.height;
  const fillY = bounds.maxY - fillHeight;

  ctx.fillStyle = fillStyle;
  ctx.fillRect(
    bounds.minX - 2,
    fillY - 2,
    bounds.width + 4,
    fillHeight + 4
  );

  ctx.restore();
}
