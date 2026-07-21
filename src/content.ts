type SectionItem = {
    title: string;
    description: string | string[];
    url?: string;
    image?: {
        src: string;
        alt?: string;
        caption?: string;
    };
};

export type Section = {
    title: string;
    items: SectionItem[];
};

export const galleries: Section[] = [
    {
        title: 'Pet Repositories',
        items: [
            {
                title: "Diachronic Semantic Search",
                url: "https://github.com/leegee/mutatis-mutandis",
                description: [
                    "Transforming TEI XML via macBERTh embeddings into an ANN that clusters event-level textual observations to reveal sense and meaning."
                ],
                image: {
                    src: 'https://github.com/leegee/mutatis-mutandis/raw/main/docs/screen-202605/deck.png',
                }
            },
            {
                title: "FAISS/LLM RAG for Video Transcripts",
                url: "https://github.com/new-thinking-allowed/llm-test",
                description: [
                    "A small Vite/Solid/Python project to utilise FAISS, Ollama and small local models to ingest video transcripts and make them searchable through natural language.",
                    "MySQL for storing video caption data; Python 3 with FastAPI, FAISS, sentence-transformers, Ollama; Vue 3 (Composition API) for frontend UI; LocalStorage for session persistence on client; REST API for chat queries"
                ],
                image: {
                    src: 'https://github.com/new-thinking-allowed/llm-test/blob/main/README/answers.png?raw=true',
                }
            },
            {
                title: "Police API Map",
                url: "https://github.com/leegee/crime-map-caching",
                description: [
                    "Map street-level crime data from the public Poilce API, with request rate limiting,  local caching and LRU purging.",
                    "Allows display by crime category and resolution. It is a nice enough API but lacks lots of data and is updated too many weeks  after the event.",
                    "Has some very nice local caching."
                ],
                image: {
                    src: 'https://github.com/leegee/crime-map-caching/raw/main/README.png',
                }
            },
            {
                title: "Global Terrorism Database",
                url: "https://github.com/leegee/global-terrorism-map",
                description: [
                    "The University of Maryland's World Terrorism Database searchable and visualised with maplibre-gl and in-browoser SQLite."
                ],
                image: {
                    src: 'https://github.com/leegee/global-terrorism-map/blob/main/README/world.png?raw=true',
                }
            },
            {
                title: "Hansard Divisions",
                url: "https://github.com/leegee/hansard-divisions",
                description: [
                    "Hansard has a public API, but the dataset is still sadly lacking with much still to be digitised.",
                    "However, there is enough data to create some interesting clustering visualisations, and given enough funding, we could quite reliably predict how most MPs would vote on proposed legislation.",
                    "Here is a sample in 3d to show <a href='https://leegee.github.io/hansard-divisions/mp_votes_3d_cluster.html' target=_blank>3D clustered voting pattern of MPs with more than 50 votes over the past decade</a>."
                ],
                image: {
                    src: 'https://github.com/leegee/hansard-divisions/raw/main/visualisations/Figure_1.png',
                }
            },
            {
                title: 'UFO Map',
                description: [
                    'Originally I wrote the Project Hessdalen UFO map as a TypeScript React/NestJS monorepo, but to ease hosting on Vercel rewrote it as React/NextJS.',
                    'Combines the Project Norway UFO data with sightings from a large international dataset.',
                    "Includes various filters and search tools, none of which reveal any kind of pattern to the data."
                ],
                url: 'https://github.com/leegee/next-ufo-map',
                image: {
                    src: 'https://github.com/leegee/next-ufo-map/raw/main/docs/images/init-1.png'
                }
            },
            {
                title: "Learning Cards",
                url: "https://github.com/leegee/learning-oe-solidjs",
                description: [
                    "Duolingo is my default language learning app, but it does not support learning Old English, which I have wanted to do since failing to take the course at college, so I wrote this.",
                    "Initially in React, then ported and developed in the lovely SolidJS.",
                    "An app to present different types of flashcards to aid learning - features a JSON schema for easy editing and verification, a WYSIWYG editor interface, and sample lessons for Old English, the alefbet, and British constitutional law.",
                ],
                image: {
                    src: 'https://github.com/leegee/learning-oe-solidjs/raw/main/README/multiple-choice.png',
                }
            },
            {
                title: "Etymology Map WIP",
                url: "https://github.com/leegee/etymology-map",
                description: [
                    "A local-first geographical map of the etymology of English words.",
                    "Words are collected from a Wiktionary dump but that data is not great &mdash; the world needs a machine-readible etymology taxonomy."
                ],
                image: {
                    src: "https://github.com/leegee/etymology-map/raw/main/README.png"
                }
            },
            {
                title: "Home Broadcast",
                url: "https://github.com/leegee/home-news-broadcast",
                image: {
                    src: "https://github.com/leegee/home-news-broadcast/blob/main/screenshot.png?raw=true",
                    alt: "Home broadcast screenshot",
                },
                description: [
                    "Streams recordings, photos, and live video of our cats to my daughter at university.",
                    "Written in SolidJS, the fastest and cleanest library, using PeerJS and QR codes to connect external cameras for live WebRTC streaming to YouTube.",
                    "Can be used within or without Electron."
                ],
            },
            {
                title: "PC Remote Control",
                url: "https://github.com/leegee/node-myremote",
                image: {
                    src: "https://github.com/leegee/node-myremote/raw/main/README/editor.png",
                    alt: "Screenshot of remote editor",
                },
                description: [
                    "Control Cubase or any Windows app using your phone or tablet.",
                    "Originally written in TypeScript; to get more speed I rewrote it in C# — not my usual language, but a joy once I had found the correct libraries.",
                    "Basically a tiny tray app that exposes HTTP and WebSocket servers to send key commands from a mobile device to a Windows window.",
                ],
            },
            {
                title: "Chord Finder",
                description: [
                    "A SolidJS app to find chords for stringed instruments.",
                    "Variable constraints allow the algorithm to find fingerable chords for any number of stringed instruments, except for the dratted 5-string banjo.",
                    "Includes a number of chord types, easily extended."
                ],
                url: "https://github.com/leegee/guitar-chords-2",
                image: {
                    alt: '',
                    src: 'https://github.com/leegee/guitar-chords-2/raw/main/screenshot.png',
                }
            },
            {
                title: "Feathered MIDI",
                url: "https://github.com/leegee/webapp-midi-feathered",
                image: {
                    src: "https://github.com/leegee/webapp-midi-feathered/raw/main/.screenshot.png",
                    alt: "Feathered MIDI screenshot",
                },
                description: [
                    "A web app to feather notes played over any and all MIDI inputs, outputting to a device of your choice.",
                    "Inspired by software used by Bear McCreary for the Foundation soundtrack (though developed independently).",
                    "Originally used L-systems to generate notes.",
                ],
            },
            {
                title: "MIDI Phase Experiments",
                url: "https://github.com/leegee/midi-phase-ui-experiment",
                image: {
                    src: "https://github.com/leegee/midi-phase-ui-experiment/raw/main/README/Screenshot%202024-11-05%20154505.png",
                    alt: "Screenshot of MIDI phase UI",
                },
                description: [
                    "A React + Zustand project to experiment with musical phase shifting inspired by Schillinger's resultants.",
                    "My first and last use of Zustand.",
                ],
            },
            {
                title: "MIDI Video",
                url: "https://github.com/leegee/midi-video",
                description: [
                    "A vanilla JavaScript app to generate a video from a MIDI piano roll synced to an audio file."
                ],
                image: {
                    src: 'https://github.com/leegee/midi-video/raw/master/screenshot.png',
                }
            },
            {
                title: "Broadcast Petition",
                url: "https://github.com/leegee/broadcast-petition",
                description: "Uses SolidJS and MapLibreGL to visualise in real-time petition data from the Parliament website, and send as a straem to YouTube.",
                image: {
                    src: "https://github.com/leegee/broadcast-petition/raw/main/README/screenshot1.png"
                }
            },
            {
                title: "Wordnet Binary Search",
                url: "https://github.com/leegee/wordnet-binary-search",
                description: [
                    "Extremely fast binary search of Wordnet DB files, written in TypeScript.",
                ],
            },
            {
                title: "LLM Psychometric Testing",
                url: "https://github.com/leegee/bayes_irt_audit_toy",
                description: [
                    "An experimental toy written in the beautiful Julia language to attempt an elementary audit of LLM bias by simulating scenarios with different demographic profiles and items.",
                    "Results are analysed through Item Response Theory (IRT) using Turing.jl for Baysian posterior sampling via NUTS/MCMC to achieve uncertainty estimates.",
                ],
                // image: {
                //     src: "https://github.com/leegee/etymology-map/raw/main/README.png"
                // }
            },
            {
                title: "Fast data grid",
                url: 'https://github.com/leegee/test-webcomponent-fast-grid',
                description: [
                    "A very fast windowed data grid Web Component written in vanilla JavaScript, accepting data through WebSockets.",
                    "Having worked with several cumbersome and slow grids at various large corporations, I know I could do better by not solving all the world's problems at once.",
                ]
            },
            {
                title: 'MIDI L-systems',
                url: 'https://github.com/leegee/lsys-gui',
                image: {
                    src: 'https://github.com/leegee/lsys-gui/raw/master/readme.png?raw=true',
                    alt: 'Screenshot of the control GUI'
                },
                description: [
                    "Every now and again I revisit the idea of turning Lindenmayer Systems into sound, and maybe even music.",
                    "This version is 2D in Electron and does not include real-time MIDI output."
                ]
            },
            {
                title: "Secure Electron OAuth2.0",
                url: 'https://github.com/leegee/electron-auth-test',
                image: {
                    src: "https://github.com/leegee/electron-auth-test/raw/main/README.png"
                },
                description: `
                    Electron-Vite, TypeScriptm Fully configuraable  modularized OAuth 2.0 PKCE flow fully compliant with RFC 8252,
                    with local  token storage using keytar.
                `
            },

        ]
    },
    {
        title: 'Past Work',
        items: [
            {
                title: 'Companies House Search Engine',
                url: 'https://find-and-update.company-information.service.gov.uk/',
                description: [
                    'Designed and implemented the Companies House register search ElasticSearch and initial front-end interface, integrating with the rest of the Perl system.',
                    "The civil servants, lovely people on the whole, estimated the work at two-years; I had it completed from my initial spec to production in under six months."
                ]
            },
            {
                title: "Thomson Reuters",
                url: "https://legal.thomsonreuters.com/en/products/highq/portfolio-management",
                description: [
                    "I worked on the rewrite of the portfolio tracker/manager, hosted in a bespoke Chromium receiving realtime data through WebSockets, initiating the unit test suite and the full e2e suite, as well as adding layerable keyboard shortcuts and adding optimisations to the Closure engine.",
                    "This project is the best transformation/rewrite I have seen, with sensible use of WebComponents and well-justified use of Angular.",
                    "e2e tests were written before the likes of Playwright and Puppeteer, so Nightwatch was the best option, with a very clear and well-documented suite setup that encouraged buy-in and take-up."
                ],
            },
            {
                title: "BBC Wildlife Finder",
                url: "https://www.bbc.co.uk/programmes/p00bfy8v",
                description: [
                    "The forerunner of BBC Earth — a species-centric catalogue of David Attenborough documentary clips.",
                    "I sourced the data, designed the RDBS and Java service layer, and extended the Spring framework.",
                    "This project helped justify the BBC Forge, which I had previously proposed while consulting at Radio 4.",
                ],
            },
            {
                title: "Electronic Medicines Compendium",
                url: "https://www.medicines.org.uk/emc",
                description: [
                    "Commissioned by the ABPI through the Virtual Health Network.",
                    "I wrote the service for the portal — designed and wrote the code to ingest, validate, and review the legally mandated pharmaceutical safety documents before drug distribution. A vast percentage of documents received failed to meet basic criteria — we automatically flagged those, saving a small fortune in time and money.",
                ],
            },
            {
                title: "BBC Audio Notes",
                description: [
                    "I designed and developed a program to visualise audio files as waveforms and allow users to place comments against points in time.",
                    "This was years before Soundcloud, and was written in three months by me alone, despite the fact that a team of three had failed to produce the project in over two years.",
                    "A simple templated HTML/JS front end, with a backend written in Perl with a MySQL database, and C to visualise the waveform."
                ],
            },
            {
                title: "BBC Digital Curriculum",
                description: [
                    "BBC Jam was the very expensive brand name for what used to known as the Digital Curriculum, and now lives as Bitsize.",
                    "When I joined the project, a Seimans team had been working for two years and had produced no code but thousands of pages of documentation, none of which I used. Instead I was given a brief over a cup of coffee. As the sole developer I finished the SCORM ingestion API, GUI and DB, in a couple of months.",
                    "A fine example of yet another classic public sector project."
                ],
            },
            {
                title: "More...",
                description: "Full details on my Curriculum Vitae linked at the top of this document."
            }
        ]
    },
    {
        title: 'Professional Interests',
        items: [
            {
                title: "Accessibility and Usability",
                description: [
                    "According to numerous industry reports, two-thirds of Americans use correct lenses, and around 10% of the total population have imperfect vision even with corrective lenses. Any website that does not account for this is not only excluding potential audience, but if in the public sector, is potentially breaking the law.",
                    "My personal interest in this matter forces me to advocate for clear typography, high contrast layouts, dark themes, and has done since 1999."
                ],
            },
            {
                title: "Web Mapping",
                description: [
                    "My first maps were created for the BBC Earth project in 2009, representing global distribution of species, genus, and families of animals.",
                    "From then I have found great pleasure in creating performant interactive maps for websites.",
                    "Professional projects have included plant species distribution in the US, custom maps (with bespoke A* search) for the Dubai World Expo, maps of local event-based journalism, maps of English water distribution networks, and real-time maps of terrorist attacks.",
                    "Pro-bono work includes mapping UFO sightings in Norway and around the world, mapping sensor readings with chronological animation, and real-time Open Sky air traffic mapping."
                ],
            },
            {
                title: "API Design",
                description: [
                    "Professional experience of ReST over HTTP and WebDAV, Web Socket scheme, and a little GraphQL and (sigh) SOAP.",
                    "It always surprises me how clearly dysfunctional many APIs are in their initial itteration."
                ],
            },
            {
                title: "Philosophy",
                "description": [
                    "Above all, Keep It Simple and be pragmatic whilst trying to adhere to the Principle of Least Astonishment.",
                    "SoC - clear Separation of Concerns.",
                    "DRY - Do Not Repeat if at all possible.",
                    "SOLID is a good idea but often seems to lead to bloat",
                    "YAGNI - you ain't gonna need it",
                    "Albert Camus, <i>The Myth of Sisyphus</i> (1942)"
                ]
            }
        ]
    },
    {
        title: 'Passtimes',
        items: [
            {
                title: "Family",
                description: [
                    "I was married in 2002, and have two children - one at scondary school, one at Oxford. My wife is a translator, dramaturge, and PhD student of Absurdism.",
                ],
            },
            {
                title: "Renovations",
                description: [
                    "We bought an old house in my wife's native Hungary, and replaced the floors, added a ceiling, built a pond, and are working on taming the rest of the large garden.",
                    "It is a large garden and because of my lack of pigmentation, we have grown it very shady, but that combined with two very large wlnut trees does make it difficult to grow vegetables. Adice always welcomed!"
                ],
            },
            {
                title: "Music",
                description: [
                    "When not feeding my addiction to programming, I play a number of stringed instruments from guitar, through mandola, to sitar and oud.",
                    "I also record at home, and study orchestration &mdash; the former rather like Jane's Addiction meets Maiden, with occasional side-tracks around the Cocteau Twins, the latter theoretically akin to Jóhann Jóhannsson meets Holst."
                ]
            },
            {
                title: "Reading",
                description: [
                    "Despite holding a degree in English literature, I still read widely &mdash; currently 17<sup>th</sup> century pamphlets.",
                    "Samuel Beckett, George Orwell, Michael Moorcock, the Iain Banks, William Blake. Albert Camus.",
                    "I also read slowly a number of works in translation alongside the originals, from Parsha, Luria and Nachman, and Swedish sagor."
                ]
            },
            {
                title: "Language & Etymology",
                description: [
                    "I find I spend at least an hour looking up etymology, something I missed out on at school, as a consequence of which I am currently learning Old English via Norwegian, Swedish and German, and also Ancient Hebrew. I hope to return to studying Hungarian.",
                    "Online support for learnign Old English is so poor that I developed my own version of popular language learning application, linked somewhere on this site."
                ]
            },
            {
                title: "History",
                description: [
                    "I am fascinated by ancient texts, from Buddhist sutras to the Dead Sea Scrolls; I read as much ancient history as I can, and am eagerly following research into pre-historic ancient builder civilisations.",
                    "Currently research pamphlets of the English Civil War"
                ]
            },
        ]
    },

    {
        title: "Contact Details",
        items: [
            {
                title: "",
                description: `<a href='https://www.linkedin.com/in/leegoddard/' target=_blank class='icon-link' title='Linked In'>
                    <i class=" icon-linkedin-squared"/>
                </a>`,
            },
            {
                title: "",
                description: `<a href='https://github.com/leegee' target=_blank class='icon-link' title='Git Hub'>
                    <i class=" icon-github-circled"/>
                </a>`,
            },
            {
                title: '',
                description: `<a href='https://stackoverflow.com/users/418150/lee-goddard' target=_blank class='icon-link' title='Stack Overflow'>
                    <i class=" icon-stackoverflow"/>
                </a>`
            },
        ]
    }
];

export default galleries;
