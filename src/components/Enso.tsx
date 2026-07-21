import enso from './enso.svg?raw';

type EnsoProps = {
    ref?: HTMLDivElement;
};

export default function Enso(props: EnsoProps) {
    return <div class="enso" innerHTML={enso} ref={props.ref} />;
}