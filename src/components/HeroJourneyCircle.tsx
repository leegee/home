import { For, createMemo } from "solid-js";

interface Stage {
    title: string;
    text: string;
    date: string;
}

const STAGES: Stage[] = [
    {
        title: "Ordinary World",
        text: "Personal rule of Charles I",
        date: "1629-1640 - Proclamations & sermons",
    },
    {
        title: "Call to Adventure",
        text: "Breakdown of royal authority",
        date: "1640-1642 - Petitions & pamphlets",
    },
    {
        title: "Refusal of the Call",
        text: "Attempts to preserve monarchy",
        date: "1641-1642 - Royal declarations",
    },
    {
        title: "Meeting the Mentor",
        text: "Parliamentary ideology forms",
        date: "1642-1644 - Newsbooks",
    },
    {
        title: "Crossing the Threshold",
        text: "Civil war becomes total",
        date: "1643-1645 - Ordinances",
    },
    {
        title: "Tests, Allies, Enemies",
        text: "Factionalisation & New Model Army",
        date: "1644-1647 - Military tracts",
    },
    {
        title: "Approach to the Inmost Cave",
        text: "Trial of sovereignty itself",
        date: "1648 - Army remonstrances",
    },
    {
        title: "Ordeal",
        text: "Regicide",
        date: "1649 - Act establishing the High Court",
    },
    {
        title: "Reward",
        text: "Commonwealth proclaimed",
        date: "1649-1653 - Acts & proclamations",
    },
    {
        title: "The Road Back",
        text: "Restoration of monarchy",
        date: "1660 - Declaration of Breda",
    },
    {
        title: "Resurrection",
        text: "Crisis of absolutism returns",
        date: "1685-1688 - Royal dispensations",
    },
    {
        title: "Return with the Elixir",
        text: "Constitutional settlement",
        date: "1689 - Bill of Rights",
    },
];


interface Props {
    width?: number;
    height?: number;
    boxWidth?: number;
    boxExtraWidth?: number;
    boxHeight?: number;
    boxExtraHeight?: number;
}

export default function HeroJourneyCircle(props: Props) {
    const width = () => Number(props.width || 1200);
    const height = () => Number(props.height || 1200);
    const cx = () => width() / 2;
    const cy = () => height() / 2;
    const isWide = (stageIndex: number) => 0 === stageIndex % (STAGES.length / 2);
    const boxWidth = (stageIndex: number) => isWide(stageIndex) ? (props.boxExtraWidth ?? 350) : (props.boxWidth ?? 270)
    const boxHeight = (stageIndex: number) => isWide(stageIndex) ? (props.boxExtraHeight ?? 100) : (props.boxHeight ?? 100)
    const baseRadius = 360;

    const nodes = createMemo(() =>
        STAGES.map((stage, stageIndex) => {
            const angle = (-90 + stageIndex * 30) * Math.PI / 180; // That is is some cray thinking. Why not 360 / STAGES.length
            const radius = isWide(stageIndex) ? baseRadius + 60 : baseRadius;
            const x = cx() + radius * Math.cos(angle);
            const y = cy() + radius * Math.sin(angle);

            const thisBoxHeight = boxHeight(stageIndex);
            const thisBoxWidth = boxWidth(stageIndex);
            return {
                ...stage,
                x,
                y,
                width: thisBoxWidth,
                height: thisBoxHeight,
                rectX: x - thisBoxWidth / 2,
                rectY: y - thisBoxHeight / 2,
                delay: stageIndex * 120,
            };
        }),
    );

    return (
        <svg
            viewBox={`0 0 ${ width() } ${ height() }`}
            width="100%"
            height="100%"
        >
            <defs>
                <style>
                    {`
                    .line {
                        stroke: var(--hj-line-stroke, currentColor);
                        stroke-width: var(--hj-line-stroke-width, 2);
                        fill: var(--hj-line-fill, none);
                        stroke-dasharray: var(--hj-line-stroke-dasharray, 1000);
                        stroke-dashoffset: var(--hj-line-stoke-dashoffset, 1000);
                        animation: draw 0.8s ease forwards;
                    }

                    .box {
                        fill: var(--hj-box-fill, transparent);
                        stroke: var(--hj-box-stroke, currentColor);
                        stroke-width: var(--hj-box-stroke-width, 2);
                        opacity: var(--hj-box-opacity, 0);
                        transform-box: fill-box;
                        transform-origin: center;
                        animation: appear .5s ease forwards;
                    }

                    .label {
                        fill: var(--hj-label-fill, currentColor);
                        opacity: var(--hj-label-opacity, 0);
                        animation: appear .5s ease forwards;
                    }

                    .title {
                        font-size: var(--hj-title-font-size, 16px);
                        font-family: var(--hj-title-font-family, serif);
                        font-weight: var(--hj-title-font-weight, 100);
                        text-anchor: middle;
                    }

                    .text {
                        font-size: 14px;
                        font-family: var(--hj-text-font-family, sans);
                        text-anchor: middle;
                    }

                    .date {
                        font-size: 12px;
                        font-family: var(--hj-date-font-family, sans);
                        font-style: italic;
                        text-anchor: middle;
                    }

                    @keyframes draw {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }

                    @keyframes appear {
                        from {
                            opacity: 0;
                            transform: scale(.9);
                        }

                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `}
                </style>
            </defs>

            <circle
                cx={cx()}
                cy={cy()}
                r="0"
                fill="currentColor"
            />

            <For each={nodes()}>
                {(node) => (
                    <g>
                        <line
                            class="line"
                            x1={cx()}
                            y1={cy()}
                            x2={node.x}
                            y2={node.y}
                            style={{
                                "animation-delay": `${ node.delay }ms`,
                            }}
                        />

                        <rect
                            class="box"
                            x={node.rectX}
                            y={node.rectY}
                            width={node.width}
                            height={node.height}
                            rx="8"
                            ry="8"
                            style={{
                                "animation-delay": `${ node.delay + 200 }ms`,
                            }}
                        />

                        <g
                            class="label"
                            style={{
                                "animation-delay": `${ node.delay + 300 }ms`,
                            }}
                        >
                            <text
                                class="title"
                                x={node.x}
                                y={node.y - 18}
                            >
                                {node.title}
                            </text>

                            <text
                                class="text"
                                x={node.x}
                                y={node.y + 8}
                            >
                                {node.text}
                            </text>

                            <text
                                class="date"
                                x={node.x}
                                y={node.y + 30}
                            >
                                {node.date}
                            </text>
                        </g>
                    </g>
                )}
            </For>
        </svg>
    );
}
