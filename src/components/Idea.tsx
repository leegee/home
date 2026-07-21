import AnimatedText from './AnimatedText(';
import MigrationFlow from './MigrationFlow';

export const Idea = () => {
  return (
    <article id="idea">
      <section class="two-col-responsive">
        <h2>
          <AnimatedText items={[
            "if we understood their language, we would recognise we have been here before",
            "ha megértenénk a nyelvüket, felismernénk, hogy már jártunk itt korábban.",
            "hvis vi forsto språket deres, ville vi gjenkjent at vi har vært her før",
            "om vi ​​förstod deras språk skulle vi inse att vi har varit här förut",
            "wenn wir ihre Sprache verstünden, würden wir erkennen, dass wir schon einmal hier waren.",
            "ווען מיר וואָלטן פֿאַרשטאַנען זייער שפּראַך, וואָלטן מיר דערקענט אַז מיר זענען שוין דאָ געווען פֿריִער",
          ]}
          />
        </h2>

        <MigrationFlow
          width={500}
          particleCount={4_000}
          particleSize={2}
          particleFill={'hsla(357, 100%, 68%, 1)'}
          sourceFill='hsla(337, 100%, 68%, 1)'
          sourceClr='hsla(337, 100%, 68%, 0.4)'
          destinationClr='hsla(26, 100%, 68%, 0.3)'
          destinationFill='hsl(26, 100%, 68%)'
        />

        <p>
          <a target="_blank" href="https://github.com/leegee/mutatis-mutandis">Mutatis Mutandis on GitHub</a>
        </p>
      </section>
    </article>
  );
};