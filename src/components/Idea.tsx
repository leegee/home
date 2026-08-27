import AnimatedText from "./AnimatedText(";
import MigrationFlow from "./MigrationFlow";

export const Idea = () => {
	return (
		<article id="idea">
			<section class="two-col-responsive">
				<h2>
					<AnimatedText
						items={[
							"if we understood their language, we would recognise we have been here before",
							"ha megértenénk a nyelvüket, felismernénk, hogy már jártunk itt korábban.",
							"hvis vi forsto språket deres, ville vi gjenkjent at vi har vært her før",
							"om vi ​​förstod deras språk skulle vi inse att vi har varit här förut",
							"wenn wir ihre Sprache verstünden, würden wir erkennen, dass wir schon einmal hier waren.",
							"ווען מיר וואָלטן פֿאַרשטאַנען זייער שפּראַך, וואָלטן מיר דערקענט אַז מיר זענען שוין דאָ געווען פֿריִער",
						]}
					/>
				</h2>

				<MigrationFlow />
			</section>

			<section style="max-width:30em;margin:auto">
				<p>
					<i>Privacy</i> is not a modern word. In the 1590s it appears in
					English with the meaning "a private or personal matter, a secret," and
					shortly thereafter developed the sense of seclusion or retirement from
					company.
				</p>

				<p>
					That usage reflects earlier Middle English forms such as{" "}
					<i>privauté</i>, <i>privatie</i>, <i>priveté</i>, <i>pryvete</i>, and{" "}
					<i>privitee</i>, derived through Anglo-French/Old French{" "}
					<i>privauté</i> from Latin <i>privatus</i>. These forms were used to
					signify hidden matters, secrets, secret acts, and states of being
					apart from public observation &mdash; including forms of intimacy,
					often amorous.
				</p>

				<p>
					The specifically modern sense of privacy as a "freedom from intrusion
					or interference" does not appear until the early nineteenth century
					(OED, <i>privacy</i>, n., sense 3; first examples from 1814).
				</p>

				<p>
					Accordingly, a lexical search through the surviving historical corpora
					of English law would not uncover the word <i>privacy</i> in any
					document surrounding the 1765 case of <i>Entick v Carrington</i>, a
					case that is now frequently understood through the language of privacy
					because it protected interests that later became central to privacy
					law: the security of personal papers, the home, and freedom from
					arbitrary intrusion.
				</p>
				<p>
					Similarly, a search through historical literature for terms such as
					"child abuse" or "wife beating" might lead a naive researcher to
					conclude that these are modern phenomena, or at least that they were
					not recognised in earlier periods.
				</p>

				<p>
					Turning the question around: who today is using the concept of liberty
					as it was used by Milton, or Hobbes, or Locke?
				</p>

				<p>
					Repeatedly, at certain points in the historical record, new terms
					emerge not necessarily to describe entirely new ideas, but to gather
					together and name a range of experiences, practices and legal or
					social concerns that had previously been expressed through different
					vocabularies. Those earlier terms were themselves products of
					historical development and were not always the ordinary language of
					their time.
				</p>
				<p>
					My project allows a user to trace these moments change to produce a
					kind of lineage that enables modern researchers, academic and lay
					alike, to locate historical examples of phenomena that may have been
					described using terms unfamiliar to contemporary readers.
				</p>

				<p>
					The semantic history of the contestation of the meaning of "liberty"
					is well very well researched. This project allows digitised documents
					from various periods to be compared to the various studies of the
					word.
				</p>

				<p>
					More interesting to me personally is the ability of aligned embeddings
					from models trained on different historical corpora and languages to
					identify in the past concepts for which the modern world has adopted
					terms. My prime example is the medical term "albino" coined in
					Portugese in the early 1600s, and English in the 1770s. I am used to
					seeing "evil albinos" in Umberto Eco and Dan Brown and Ian Flemming,
					less used to seeing positive images of extremely pale people as used
					in the Book of Daniel or The Revelation of St John The Divine of
					Patmos. This project allows the examination of evidence that could
					illustrate that apparent change of emphasis, in context.
				</p>

				<hr style="border:none;height:2em" />

				<p style="opacity:80%">
					<sup>1</sup> This is not intended to diminish cultural continuity
					through long-lived texts and traditions such as the Bible.
				</p>

				<hr style="border:none;height:2em" />

				<p style="text-align:right">
					&mdash;{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/leegee/mutatis-mutandis"
					>
						Mutatis Mutandis on GitHub
					</a>
				</p>
			</section>
		</article>
	);
};
