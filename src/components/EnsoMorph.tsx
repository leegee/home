import { onMount, onCleanup } from "solid-js";
import { SHAPE_A, SHAPE_B, SHAPE_C } from "./SvgPaths";

// import { interpolate } from "flubber";
import * as flubber from 'flubber';
const { interpolate } = flubber;

function easeInOut(t: number): number {
    return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;
}

export type SvgMorphProps = {
    ref?: HTMLDivElement;
    width?: number;
    height?: number;
    totalduration?: number;
    delay?: number;
    loop?: boolean;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    background?: string;
    borderRadius?: number;
};

const SHAPES = [SHAPE_A, SHAPE_B, SHAPE_C];

export default function SvgMorph(props: SvgMorphProps) {
    const width = () => props.width ?? 500;
    const height = () => props.height ?? 500;
    const duration = () => props.totalduration ?? 5000;
    const delay = () => props.delay ?? 1000;
    const loop = () => props.loop ?? true;
    const fill = () => props.fill ?? "#f8f8f844";
    const stroke = () => props.stroke ?? "#2227";
    const strokeWidth = () => props.strokeWidth ?? 2;
    const background = () => props.background ?? "transparent";
    const borderRadius = () => props.borderRadius ?? 0;

    let containerRef: HTMLDivElement | undefined;
    let interpolators: Array<(t: number) => string> = [];
    let pathRef: SVGPathElement | undefined;
    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const svgMarkup = `
        <svg
          viewBox="0 0 800 800"
          style="
            width: ${ width() }px;
            height: ${ height() }px;
            background: ${ background() };
            border-radius: ${ borderRadius() }px;
            display: block;
          "
        >
          <path
            id="morph-path"
            d="${ SHAPE_A }"
            style="
              fill: ${ fill() };
              stroke: ${ stroke() };
              stroke-width: ${ strokeWidth() };
              stroke-linejoin: round;
              opacity: 0.7;
              transition: opacity 0.3s;
            "
          />
        </svg>
    `;

    function startAnimation(): void {
        const dur = duration();
        const segmentDuration = dur / SHAPES.length;
        const startTime = performance.now();

        function tick(now: number): void {
            const elapsed = now - startTime;

            if (elapsed >= dur) {
                if (loop()) {
                    startAnimation();
                } else {
                    pathRef?.setAttribute(
                        "d",
                        SHAPES[SHAPES.length - 1]
                    );
                }
                return;
            }

            const segmentIndex = Math.floor(elapsed / segmentDuration);
            const segmentElapsed = elapsed % segmentDuration;

            const t = easeInOut(
                Math.max(0, Math.min(1, segmentElapsed / segmentDuration))
            );

            pathRef?.setAttribute(
                "d",
                interpolators[segmentIndex](t)
            );

            rafId = requestAnimationFrame(tick);
        }

        rafId = requestAnimationFrame(tick);
    }

    onMount(() => {
        interpolators = SHAPES.map((shape, i) => {
            const next = SHAPES[(i + 1) % SHAPES.length];
            return interpolate(shape, next, { maxSegmentLength: 20 });
        });

        pathRef = containerRef?.querySelector<SVGPathElement>("#morph-path") ?? undefined;
        if (pathRef) pathRef.style.opacity = "1";

        if (delay() > 0) {
            timeoutId = setTimeout(() => startAnimation(), delay());
        } else {
            startAnimation();
        }
    });

    onCleanup(() => {
        if (typeof window !== "undefined") window.cancelAnimationFrame(rafId);
        clearTimeout(timeoutId);
    });

    return (
        <div
            class="enso"
            ref={(el) => {
                containerRef = el;
                if (typeof props.ref === "function") (props.ref as (el: HTMLDivElement) => void)(el);
                else if (props.ref !== undefined) (props as { ref: HTMLDivElement }).ref = el;
            }}
            innerHTML={svgMarkup}
        />
    );
}