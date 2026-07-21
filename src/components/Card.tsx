import "./Card.css";

type CardProps = {
    title: string;
    description: string | string[];
    url?: string;
    image?: {
        src: string;
        alt?: string;
        caption?: string;
    };
};

export const Card = (props: CardProps) => {
    const body = (
        <>
            {props.image?.src && (
                <div class="card-image">
                    <img
                        src={props.image.src}
                        alt={props.image.alt ?? "Screenshot"}
                    />
                </div>
            )}

            <h4 class="card-title">{props.title}</h4>

            <div class="card-content">
                <div class="card-description">
                    {Array.isArray(props.description) ? (
                        props.description.map((html) => (
                            <p innerHTML={html} />
                        ))
                    ) : (
                        <p innerHTML={props.description} />
                    )}
                </div>
            </div>
        </>
    );

    return props.url ? (
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            class="card"
        >
            {body}
        </a>
    ) : (
        <div class="card">
            {body}
        </div>
    );
};