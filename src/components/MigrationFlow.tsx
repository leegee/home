import { onMount, onCleanup } from 'solid-js';

import type { Particle } from './shared.types';
import { SHAPE_A, SHAPE_C } from './SvgPaths';
import { getBounds, randomInFilledArea, polyPath, drawPartialFill, sampleSvgPath, scaleAndPositionPoly } from './MigrationFlow/particle.utils';

const DEBUG = false;

interface ParticleFlowProps {
  destinationHeightPct?: number;
  destinationPath?: string;
  destinationClr?: string;
  destinationFill?: string;
  height?: number;
  particleCount?: number;
  particleSize?: number;
  particleFill?: string;
  releaseRate?: number;
  reverse?: boolean;
  sourceHeightPct?: number;
  sourcePath?: string;
  sourceClr?: string;
  sourceFill?: string;
  speed?: number;
  width?: number;
}


export default function MigrationFlow(props: ParticleFlowProps = {}) {
  const {
    destinationClr = 'rgba(255,120,80,0.9)',
    destinationFill = 'rgba(255,120,80,0.35)',
    destinationHeightPct = 0.35,
    destinationPath = SHAPE_A,
    height = 600,
    particleCount = 40_000,
    particleSize = 1,
    particleFill = 'rgba(255,220,100,0.95)',
    releaseRate = 500,
    sourceHeightPct = 0.35,
    sourcePath = SHAPE_C,
    sourceClr = 'rgba(80,160,255,0.9)',
    sourceFill = 'rgba(80,160,255,0.35)',
    speed = 6,
    width = 500,
  } = props;

  const emitPerFrame = releaseRate / 60;

  let canvasRef: HTMLCanvasElement | undefined;
  let animationFrame: number;

  let accumulator = 0;
  let emittedCount = 0;
  let arrivedCount = 0;
  let particles: Particle[] = [];
  let running = true;

  let srcPoly: [number, number][] = [];
  let dstPoly: [number, number][] = [];
  let srcBounds: ReturnType<typeof getBounds>;
  let dstBounds: ReturnType<typeof getBounds>;


  function init() {
    particles = Array.from({ length: particleCount }, () => ({
      sx: 0, sy: 0, dx: 0, dy: 0, x: 0, y: 0,
      active: false,
      arrived: false,
    }));

    emittedCount = 0;
    arrivedCount = 0;
    accumulator = 0;
  }

  const getProgress = () => particleCount > 0 ? arrivedCount / particleCount : 0;

  function tick() {
    // Emission phase (deterministic scheduling)
    accumulator += emitPerFrame;

    while (
      emittedCount < particleCount &&
      emittedCount < accumulator
    ) {
      const p = particles[emittedCount];

      const sourceFill = 1 - (arrivedCount / particleCount);
      const destFill = arrivedCount / particleCount;

      const [sx, sy] = randomInFilledArea(srcPoly, srcBounds, sourceFill);
      const [dx, dy] = randomInFilledArea(dstPoly, dstBounds, destFill);

      p.sx = p.x = sx;
      p.sy = p.y = sy;
      p.dx = dx;
      p.dy = dy;

      p.active = true;
      p.arrived = false;

      emittedCount++;
    }

    //  PHYSICS
    for (const p of particles) {
      if (!p.active) continue;

      const ex = p.dx - p.x;
      const ey = p.dy - p.y;
      const dist = Math.hypot(ex, ey);

      if (dist <= speed) {
        p.x = p.dx;
        p.y = p.dy;

        // arrival is the SOURCE OF TRUTH
        if (!p.arrived) {
          p.arrived = true;
          p.active = false;
          arrivedCount++;
        }
      } else {
        p.x += (ex / dist) * speed;
        p.y += (ey / dist) * speed;
      }
    }

    // TERMINATION CHECK (after state is fully consistent)
    if (emittedCount === particleCount && arrivedCount === particleCount) {
      running = false;
    }
  }

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, width, height);

    // Source
    ctx.save();
    polyPath(ctx, srcPoly);
    ctx.strokeStyle = sourceClr;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.restore();

    drawPartialFill(ctx, srcPoly, srcBounds, getProgress(), true, sourceFill);

    // Destination
    ctx.save();
    polyPath(ctx, dstPoly);
    ctx.strokeStyle = destinationClr;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.restore();

    drawPartialFill(ctx, dstPoly, dstBounds, getProgress(), false, destinationFill);

    // Particles
    ctx.save();
    ctx.fillStyle = particleFill as string;
    for (const p of particles) {
      if (!p.active) continue;

      ctx.beginPath();
      ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    if (DEBUG) {
      ctx.save();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 15px monospace';
      ctx.fillText(`Emitted: ${ emittedCount }/${ particleCount }`, 12, 28);
      ctx.fillText(`Arrived: ${ arrivedCount } ${ Math.round(getProgress() * 100) }%`, 12, 48);
      ctx.restore();
    }
  }


  function loop(ctx: CanvasRenderingContext2D) {
    if (running) {
      tick();
      draw(ctx);
      animationFrame = requestAnimationFrame(() => loop(ctx));
    }
  }

  onMount(() => {
    if (!canvasRef) return;
    const ctx = canvasRef.getContext('2d', { alpha: true });
    if (!ctx) return;

    const rawSrc = sampleSvgPath(sourcePath);
    const rawDst = sampleSvgPath(destinationPath);

    srcPoly = scaleAndPositionPoly(rawSrc, width / 2, height * 0.22, height * sourceHeightPct);
    dstPoly = scaleAndPositionPoly(rawDst, width / 2, height * 0.78, height * destinationHeightPct);

    srcBounds = getBounds(srcPoly);
    dstBounds = getBounds(dstPoly);

    init();
    loop(ctx);
  });

  onCleanup(() => {
    if (typeof window !== "undefined") window.cancelAnimationFrame(animationFrame)
  });

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
}