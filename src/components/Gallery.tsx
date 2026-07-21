import { createSignal, type JSX, onCleanup, onMount, Show } from 'solid-js';
import './Gallery.css';

interface GalleryProps {
    children: JSX.Element | JSX.Element[];
    title: string;
}

export const Gallery = (props: GalleryProps) => {
    let scrollEl: HTMLDivElement | undefined;
    let scrollInterval = -1;

    const [showLeft, setShowLeft] = createSignal(false);
    const [showRight, setShowRight] = createSignal(false);

    const update = () => {
        if (!scrollEl) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollEl;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 130);
    };

    const scrollByAmount = (amount: number) => {
        scrollInterval = setInterval(
            () => scrollEl?.scrollBy({ left: amount * 32, behavior: 'smooth' }),
            100
        );
    };

    const stopScrollByAmount = () => clearInterval(scrollInterval);

    onMount(() => {
        update();
        scrollEl?.addEventListener('scroll', update);
        if (typeof window !== "undefined") window.addEventListener('resize', update);
    });

    onCleanup(() => {
        scrollEl?.removeEventListener('scroll', update);
        if (typeof window !== "undefined") window.removeEventListener('resize', update);
    });

    return (
        <section class={`gallery gallery-${ props.title }`}>
            <h3>{props.title}</h3>
            <div class="cards-container">
                <Show when={showLeft()}>
                    <button
                        class="scroll-indicator scroll-left-indicator"
                        onMouseDown={() => scrollByAmount(-1)}
                        onMouseUp={() => stopScrollByAmount()}
                        aria-label="Scroll left"
                    >
                        ◄
                    </button>
                </Show>

                <div class="cards" ref={el => (scrollEl = el)}>
                    {props.children}
                </div>

                <Show when={showRight()}>
                    <button
                        class="scroll-indicator scroll-right-indicator"
                        onMouseDown={() => scrollByAmount(1)}
                        onMouseUp={() => stopScrollByAmount()}
                        aria-label="Scroll right"
                    >
                        ►
                    </button>
                </Show>
            </div>
        </section>
    );
}
