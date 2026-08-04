export const prerender = true;

import { For } from 'solid-js';

import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { Gallery } from '../components/Gallery';
import { Card } from '../components/Card';
import galleries from '../content';
import { Idea } from '../components/Idea';

import HeroJourneyCircle from '../components/HeroJourneyCircle';

export default function Index() {
  return (
    <>
      <Header />
      <Intro />
      <Idea />

      <article style={{
        "--hj-title-font-size": "18pt",
        "--hj-title-font-family": "Geist",
        "--hj-line-stroke": "var(--clr-highlight2)",
        "--hj-line-stroke-width": 1,
        "--hj-box-fill": "var(--clr-dark)",
        "--hj-box-stroke": "var(--clr-highlight)",
        "--hj-label-fill": "var(--clr-primary)",
        width: '50%',
        height: '50%',
      }}>
        <h2 class="no-space">The Hero's Journey</h2>
        <h3 class="subtitle">
          Through the 17<sup>th</sup> Century Civil War
          <br />
          to the Glorious Revolution
        </h3>

        <HeroJourneyCircle />

        <figure>
          <h3>
            <i title="The peoples safety is the sole soveraignty, or The royalist out-reasoned : calculated for the hopefull recovery of the considerate royalist, from the dangerous infection of the slie sophistry of Iudge Ienkings: in his late legend, published to perswade the people into a voluntary slavery, and obliged servitude to the Kings pleasure: most irrationally asserting, that the King is principium, caput, & finis Parliamenti. That the Parliament hath a power over our lives, liberties, laws, and goods, according to the known laws of the land.">
              “Salus populi solus rex”
            </i>
          </h3>

          <figcaption>
            <cite>
              (From an unlicenced publication written by an author unable to provide his name because England has never had the
              "proud tradition of freedom of speech" that some claim.
              Published in London, October 17, 1648 &mdash; Thomason Tracts collection E.467, EEBO Document A91273, ID 99863437)
            </cite>
          </figcaption>
        </figure>
      </article>

      <For each={galleries}>
        {({ title, items }) => (
          <Gallery title={title}>
            <For each={items}>
              {(item) => <Card {...item} />}
            </For>
          </Gallery>
        )}
      </For>
    </>
  );
};

