import { createSignal, onCleanup } from "solid-js";

interface Props {
    items: string[];
    interval?: number;
}

export default function AnimatedText(props: Props) {
    const [index, setIndex] = createSignal(0);
    const [visible, setVisible] = createSignal(true);

    const interval = Number(props.interval) || 10_000;

    const id = setInterval(() => {
        // fade out
        setVisible(false);

        setTimeout(() => {
            setIndex((i) => (i + 1) % props.items.length);
            setVisible(true);
        }, 200);
    }, interval);

    onCleanup(() => clearInterval(id));

    return (
        <div class="wrap">
            <div class={`words ${ visible() ? "in" : "out" }`}>
                {props.items[index()]}
            </div>

            <style>
                {`
                .wrap {
                    display: block;
                    position: relative;
                    min-height: 4em;
                    display: flex;
                    align-items: flex-end;  
                    margin: 0;
                    padding: 0;
                }

                .words {
                    transition: opacity 200ms ease, transform 200ms ease;
                    opacity: 1;
                    transform: translateY(0px);
                }

                .words.out {
                    opacity: 0;
                    transform: translateY(60px);
                }

                .words.in {
                    opacity: 1;
                    transform: translateY(0px);
                }
                `}
            </style>
        </div>
    );
}
