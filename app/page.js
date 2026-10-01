import Countdown from "./Countdown";
import EntryPopup from "./EntryPopup";
import Header from "./Header";

const FORM_URL = "https://forms.gle/rkHUMTWjmPKj9m8z8";

const ORGANIZERS = ["Arture", "The Wellness Club", "Saudagran Youth Forum"];

function EnterButton({ children = "Submit Your Entry", variant = "primary" }) {
  return (
    <a className={`btn btn--${variant}`} href={FORM_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function RiseLine() {
  // Fall, rise, fall a little, rise higher — the journey the theme describes
  return (
    <svg className="rise" viewBox="0 0 600 270" aria-hidden="true">
      <defs>
        <linearGradient id="riseStroke" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--accent-2)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path
        className="rise-path"
        d="M10 150 C 70 150, 90 225, 150 225 S 220 110, 280 110 S 340 160, 380 160 S 470 40, 560 30"
        fill="none"
        stroke="url(#riseStroke)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <g className="rise-labels">
        <circle cx="150" cy="225" r="8" />
        <text x="150" y="258" textAnchor="middle">I fall</text>
        <circle cx="280" cy="110" r="8" />
        <text x="280" y="88" textAnchor="middle">I rise</text>
        <circle cx="380" cy="160" r="8" />
        <text x="380" y="194" textAnchor="middle">I try again</text>
      </g>
      <circle className="rise-sun" cx="560" cy="30" r="16" />
    </svg>
  );
}

const icons = {
  art: (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3a9 9 0 1 0 0 18c1.1 0 1.5-.8 1.5-1.5 0-.9-.6-1.3-.6-2.1 0-.8.6-1.4 1.5-1.4H16a5 5 0 0 0 5-5C21 6.5 17 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="7.5" cy="11" r="1.3" fill="currentColor" />
      <circle cx="10.5" cy="7" r="1.3" fill="currentColor" />
      <circle cx="15.5" cy="7.5" r="1.3" fill="currentColor" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M13.5 6.5l4 4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5a3.5 3.5 0 0 1-3.5 3.5M12 14v4M8 21h8M9 18h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  certificate: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 8h10M7 11h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 16v5l2-1.2 2 1.2v-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 6.5C10.5 5 8 4.5 4 4.5v14c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-14c-4 0-6.5.5-8 2ZM12 6.5v14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header formUrl={FORM_URL} />

      <main id="main">
        {/* Hero */}
        <section className="hero" id="top">
          <div className="container">
            <div className="hero__inner">
              <div>
                <span className="eyebrow">National &amp; International • Ages 8+</span>
                <h1>
                  Main Na Manu Haar <span className="hero__version">3.0</span>
                </h1>
                <p className="hero__urdu" lang="ur" dir="rtl">
                  میں نہ مانوں ہار
                </p>
                <p>
                  <strong className="hero__tagline">I fall, I rise, I try again.</strong> Our failures are not stop
                  signs — they are steps on the path to our goals.
                </p>
                <p>
                  Share your journey through art or writing, and inspire others to keep going. Submissions close on 25
                  November 2026.
                </p>
                <div className="btn-row">
                  <EnterButton />
                  <a className="btn btn--ghost" href="#categories">
                    Explore Categories
                  </a>
                </div>
              </div>
              <div>
                <div className="media ratio-43 hero-art">
                  <span className="hero-art__label">The Journey</span>
                  <RiseLine />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section className="section section--dark" id="glance">
          <div className="container">
            <div className="section-head">
              <h2>The Competition at a Glance</h2>
            </div>
            <div className="grid grid-4">
              <div className="stat">
                <div className="stat__num">8+</div>
                <div className="stat__label">Minimum Age</div>
              </div>
              <div className="stat">
                <div className="stat__num">2</div>
                <div className="stat__label">Categories</div>
              </div>
              <div className="stat">
                <div className="stat__num">3</div>
                <div className="stat__label">Languages</div>
              </div>
              <div className="stat">
                <div className="stat__num">5,000</div>
                <div className="stat__label">PKR Cash Prizes</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <div className="container">
            <div className="split">
              <div>
                <figure className="media ratio-43 quote-panel">
                  <span className="quote-panel__mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote>
                    <p className="quote-panel__roman">Musalmaan haar nahi maantaa.</p>
                  </blockquote>
                  <figcaption className="quote-panel__en">A believer never gives up.</figcaption>
                </figure>
              </div>
              <div>
                <span className="eyebrow">The Theme</span>
                <h2>Understanding Defeat Is Where True Success Begins</h2>
                <p>
                  <strong>Main Na Manu Haar 3.0</strong> is a creative competition built to cultivate future leaders by
                  developing deep inner strength and emotional resilience.
                </p>
                <p>
                  It champions a simple but vital shift in mindset: the challenges we face are meant to propel us
                  forward, not hold us back. Rooted in the theme <em>&ldquo;Mein Manu Haar — I fall, I rise, I try
                  again,&rdquo;</em> we invite young people to reflect on their yearly journeys, their personal
                  struggles and the victories that followed.
                </p>
                <div className="btn-row">
                  <EnterButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="section section--soft" id="message">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Our Message</span>
              <h2>I Fall. I Rise. I Try Again.</h2>
              <p>
                Every one of us has stumbled — in school, at home, in our dreams. What defines us is not the fall, but
                the decision to stand back up.
              </p>
              <p>
                Main Na Manu Haar gives young people a space to turn those moments into art and words, so that their
                journeys can light the way for someone else who is still finding the strength to rise.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section" id="categories">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Two Ways to Take Part</span>
              <h2>Competition Categories</h2>
            </div>
            <div className="grid grid-2 categories">
              <div className="card">
                <div className="card__icon" aria-hidden="true">
                  {icons.art}
                </div>
                <h3>Visual Art</h3>
                <p>
                  Paint, draw, sketch or design a piece that captures a moment you fell — and the strength it took to
                  rise again.
                </p>
              </div>
              <div className="card">
                <div className="card__icon" aria-hidden="true">
                  {icons.pen}
                </div>
                <h3>Written Works</h3>
                <p>Write a story, poem, essay or reflection about your struggles and the victories that followed.</p>
                <ul className="chips">
                  <li>English</li>
                  <li lang="ur" className="chip--script">
                    اردو
                  </li>
                  <li lang="ar" className="chip--script">
                    العربية
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>Who Can Enter?</h3>
              <ul className="check">
                <li>Anyone aged 8 and above can take part</li>
                <li>Open to participants from Pakistan and anywhere in the world</li>
                <li>Entries are judged across multiple age brackets, so you compete with people your own age</li>
                <li>Written works are accepted in English, Urdu and Arabic</li>
                <li>All entries are submitted through the official online entry form</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to enter */}
        <section className="section section--soft" id="how-to-enter">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">How to Enter</span>
                <h2>Three Simple Steps</h2>
                <ol className="steps">
                  <li className="step">
                    <div>
                      <strong>Reflect</strong>
                      <p>Think of a time you fell short, and how you found the strength to rise again.</p>
                    </div>
                  </li>
                  <li className="step">
                    <div>
                      <strong>Create</strong>
                      <p>Turn that journey into a piece of visual art or writing in English, Urdu or Arabic.</p>
                    </div>
                  </li>
                  <li className="step">
                    <div>
                      <strong>Submit</strong>
                      <p>Send your entry through the official online form before 25 November 2026.</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div>
                <div className="deadline">
                  <span className="eyebrow">Deadline</span>
                  <h3>Time Left to Submit</h3>
                  <Countdown />
                  <p className="deadline__note">Submissions close 25 November 2026, 11:59 PM PKT</p>
                  <div className="btn-row btn-row--center">
                    <EnterButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes */}
        <section className="section" id="prizes">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What You Can Win</span>
              <h2>Prizes &amp; Recognition</h2>
              <p>Your voice deserves to be heard. Winning and inspiring entries are recognised in three ways.</p>
            </div>
            <div className="grid grid-3">
              <div className="card">
                <div className="card__icon" aria-hidden="true">
                  {icons.trophy}
                </div>
                <h3>Cash Prizes</h3>
                <p>
                  <strong className="card__highlight">PKR 5,000</strong> in cash prizes awarded to winning entries.
                </p>
              </div>
              <div className="card">
                <div className="card__icon" aria-hidden="true">
                  {icons.certificate}
                </div>
                <h3>E-Certificates</h3>
                <p>Official recognition for your participation and achievement.</p>
              </div>
              <div className="card">
                <div className="card__icon" aria-hidden="true">
                  {icons.book}
                </div>
                <h3>Digital Anthology</h3>
                <p>Inspiring entries will be featured in the official digital anthology book.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key dates */}
        <section className="section section--soft" id="dates">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Key Dates</span>
              <h2>Mark Your Calendar</h2>
            </div>
            <div className="grid grid-3">
              <div className="card">
                <div className="card__icon card__icon--num">01</div>
                <h3>Now Open</h3>
                <p>Submissions are being accepted through the online entry form.</p>
              </div>
              <div className="card">
                <div className="card__icon card__icon--num">02</div>
                <h3>25 November 2026</h3>
                <p>Last date to submit your entry. Late entries cannot be accepted.</p>
              </div>
              <div className="card">
                <div className="card__icon card__icon--num">03</div>
                <h3>January 2027</h3>
                <p>Winners announced and the digital anthology revealed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Organisers */}
        <section className="section section--dark" id="organisers">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Jointly Organised By</span>
              <h2>Brought to You Together</h2>
              <p>
                Main Na Manu Haar 3.0 is a joint effort to help young people build resilience and share their stories
                with the world.
              </p>
            </div>
            <ul className="grid grid-3 organisers">
              {ORGANIZERS.map((name) => (
                <li className="stat" key={name}>
                  <div className="stat__name">{name}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" id="final-cta">
          <div className="container">
            <div className="card cta-card">
              <h2>Don&rsquo;t Wait for the Perfect Moment</h2>
              <p>
                Your story of falling, rising and trying again could be exactly what someone else needs to hear.
                Submit your entry before 25 November 2026.
              </p>
              <div className="btn-row btn-row--center">
                <EnterButton variant="dark" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <h4>Main Na Manu Haar 3.0</h4>
              <p>
                A national and international creative competition on resilience for ages 8 and above. I fall, I rise,
                I try again.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="footer__links">
                <li>
                  <a href="#top">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#categories">Categories</a>
                </li>
                <li>
                  <a href="#how-to-enter">How to Enter</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Competition</h4>
              <ul className="footer__links">
                <li>
                  <a href="#prizes">Prizes</a>
                </li>
                <li>
                  <a href="#dates">Key Dates</a>
                </li>
                <li>
                  <a href="#organisers">Organisers</a>
                </li>
                <li>
                  <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                    Entry Form
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Key Info</h4>
              <ul className="footer__links">
                <li>Last date: 25 November 2026</li>
                <li>Open to ages 8+</li>
                <li>Results: January 2027</li>
              </ul>
              <EnterButton>Submit Entry</EnterButton>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            © 2026 Main Na Manu Haar 3.0 · Jointly organised by {ORGANIZERS.slice(0, -1).join(", ")} &amp;{" "}
            {ORGANIZERS.at(-1)}.
          </div>
        </div>
      </footer>

      <EntryPopup formUrl={FORM_URL} />
    </>
  );
}
