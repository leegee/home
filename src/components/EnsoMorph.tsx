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
    duration?: number;
    delay?: number;
    loop?: boolean;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    background?: string;
    borderRadius?: number;
};

export default function SvgMorph(props: SvgMorphProps) {
    const width = () => props.width ?? 500;
    const height = () => props.height ?? 500;
    const duration = () => props.duration ?? 2000;
    const delay = () => props.delay ?? 1000;
    const loop = () => props.loop ?? false;
    const fill = () => props.fill ?? "#f8f8f844";
    const stroke = () => props.stroke ?? "#2227";
    const strokeWidth = () => props.strokeWidth ?? 2;
    const background = () => props.background ?? "transparent";
    const borderRadius = () => props.borderRadius ?? 0;

    let containerRef: HTMLDivElement | undefined;
    let pathRef: SVGPathElement | undefined;
    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    // Built once in onMount, reused across loop iterations
    let interpolatorAB: ((t: number) => string) | undefined;
    let interpolatorBC: ((t: number) => string) | undefined;

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
              opacity: 0;
              transition: opacity 0.3s;
            "
          />
        </svg>
    `;

    function startAnimation(): void {
        const dur = duration();
        const HALF = dur / 2;
        const startTime = performance.now();

        function tick(now: number): void {
            const elapsed = now - startTime;

            if (elapsed >= dur) {
                pathRef?.setAttribute("d", SHAPE_C);
                if (loop()) {
                    pathRef?.setAttribute("d", SHAPE_A);
                    timeoutId = setTimeout(() => startAnimation(), delay());
                }
                return;
            }

            if (elapsed < HALF) {
                const t = easeInOut(Math.max(0, Math.min(1, elapsed / HALF)));
                pathRef?.setAttribute("d", interpolatorAB!(t));
            } else {
                const t = easeInOut(Math.max(0, Math.min(1, (elapsed - HALF) / HALF)));
                pathRef?.setAttribute("d", interpolatorBC!(t));
            }

            rafId = requestAnimationFrame(tick);
        }

        rafId = requestAnimationFrame(tick);
    }

    onMount(() => {
        pathRef = containerRef?.querySelector<SVGPathElement>("#morph-path") ?? undefined;
        if (pathRef) pathRef.style.opacity = "1";

        // Build interpolators once — maxSegmentLength 20 keeps this fast
        interpolatorAB = interpolate(SHAPE_A, SHAPE_B, { maxSegmentLength: 20 });
        interpolatorBC = interpolate(SHAPE_B, SHAPE_C, { maxSegmentLength: 20 });

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