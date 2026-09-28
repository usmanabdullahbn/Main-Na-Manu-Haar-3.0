import Countdown from "./Countdown";

const FORM_URL = "https://forms.gle/rkHUMTWjmPKj9m8z8";

const ORGANIZERS = ["Arture", "The Wellness Club", "Saudagran Youth Forum"];

function EnterButton({ children = "Submit your entry", variant = "primary" }) {
  return (
    <a className={`btn btn-${variant}`} href={FORM_URL} target="_blank" rel="noopener noreferrer">
      {children}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function RiseLine() {
  // Fall, rise, fall a little, rise higher — the journey the theme describes
  return (
    <svg className="rise" viewBox="0 0 600 260" aria-hidden="true">
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
        strokeWidth="5"
        strokeLinecap="round"
      />
      <g className="rise-labels">
        <circle cx="150" cy="225" r="7" />
        <text x="150" y="252" textAnchor="middle">I fall</text>
        <circle cx="280" cy="110" r="7" />
        <text x="280" y="92" textAnchor="middle">I rise</text>
        <circle cx="380" cy="160" r="7" />
        <text x="380" y="190" textAnchor="middle">I try again</text>
      </g>
      <circle className="rise-sun" cx="560" cy="30" r="14" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">
            MNMH <span>3.0</span>
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#about">About</a>
            <a href="#categories">Categories</a>
            <a href="#prizes">Prizes</a>
            <a href="#dates">Dates</a>
          </nav>
          <EnterButton variant="small">Enter now</EnterButton>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">National &amp; International Creative Competition</p>
              <h1>
                Main Na Manu Haar <span className="version">3.0</span>
              </h1>
              <p className="urdu" lang="ur" dir="rtl">
                میں نہ مانوں ہار
              </p>
              <p className="tagline">I fall, I rise, I try again.</p>
              <p className="lede">
                Our failures are not stop signs, they are steps on the path to our goals. Share your journey through
                art or writing, and inspire others to keep going.
              </p>
              <div className="hero-cta">
                <EnterButton />
                <a className="btn btn-ghost" href="#about">
                  Learn more
                </a>
              </div>
              <ul className="hero-facts">
                <li>
                  <strong>Ages 8+</strong>
                  <span>Open to all</span>
                </li>
                <li>
                  <strong>PKR 5,000</strong>
                  <span>Cash prizes</span>
                </li>
                <li>
                  <strong>25 Nov 2026</strong>
                  <span>Last date</span>
                </li>
              </ul>
            </div>
            <div className="hero-visual">
              <RiseLine />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">The theme</p>
              <h2>Understanding defeat is where true success begins.</h2>
            </div>
            <div className="about-copy">
              <p>
                <strong>Main Na Manu Haar 3.0</strong> is a creative competition built to cultivate future leaders by
                developing deep inner strength and emotional resilience. It champions a simple but vital shift in
                mindset: the challenges we face are meant to propel us forward, not hold us back.
              </p>
              <p>
                Rooted in the theme <em>&ldquo;Mein Manu Haar — I fall, I rise, I try again,&rdquo;</em> we invite young
                people to reflect on their yearly journeys, their personal struggles and the victories that followed.
              </p>
            </div>
          </div>
          <div className="container">
            <blockquote className="quote">
              <p className="quote-roman">&ldquo;Musalmaan haar nahi maantaa.&rdquo;</p>
              <p className="quote-en">A believer never gives up.</p>
            </blockquote>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="section section-alt">
          <div className="container">
            <p className="eyebrow">Two ways to take part</p>
            <h2>Tell your story your way.</h2>
            <div className="cards">
              <article className="card">
                <div className="card-icon" aria-hidden="true">
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
                </div>
                <h3>Visual Art</h3>
                <p>
                  Paint, draw, sketch or design a piece that captures a moment you fell — and the strength it took to
                  rise again.
                </p>
              </article>
              <article className="card">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path d="M13.5 6.5l4 4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>Written Works</h3>
                <p>Write a story, poem, essay or reflection about your struggles and victories.</p>
                <ul className="langs">
                  <li>English</li>
                  <li lang="ur">اردو</li>
                  <li lang="ar">العربية</li>
                </ul>
              </article>
            </div>
            <div className="eligibility">
              <strong>Who can enter?</strong> Anyone aged 8 and above, from Pakistan or anywhere in the world. Entries
              are judged across multiple age brackets, so you compete with people your own age.
            </div>
          </div>
        </section>

        {/* Prizes */}
        <section id="prizes" className="section">
          <div className="container">
            <p className="eyebrow">What you can win</p>
            <h2>Your voice, recognised.</h2>
            <div className="prizes">
              <div className="prize prize-main">
                <span className="prize-label">Cash prizes</span>
                <span className="prize-amount">PKR 5,000</span>
                <p>Awarded to winning entries.</p>
              </div>
              <div className="prize">
                <span className="prize-label">Official</span>
                <span className="prize-title">E-certificates</span>
                <p>Recognition for your participation and achievement.</p>
              </div>
              <div className="prize">
                <span className="prize-label">Published</span>
                <span className="prize-title">Digital anthology</span>
                <p>Inspiring entries will be featured in the official digital anthology book.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dates */}
        <section id="dates" className="section section-dark">
          <div className="container dates-grid">
            <div>
              <p className="eyebrow">Key dates</p>
              <h2>Don&rsquo;t wait for the perfect moment.</h2>
              <ol className="timeline">
                <li>
                  <span className="timeline-date">Now open</span>
                  <span className="timeline-text">Submissions accepted</span>
                </li>
                <li>
                  <span className="timeline-date">25 November 2026</span>
                  <span className="timeline-text">Submissions close</span>
                </li>
                <li>
                  <span className="timeline-date">January 2027</span>
                  <span className="timeline-text">Winners announced</span>
                </li>
              </ol>
            </div>
            <div className="dates-cta">
              <p className="dates-cta-title">Time left to submit</p>
              <Countdown />
              <EnterButton />
            </div>
          </div>
        </section>

        {/* Organizers */}
        <section className="section organizers">
          <div className="container">
            <p className="eyebrow center">Jointly organised by</p>
            <ul className="org-list">
              {ORGANIZERS.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            <strong>Main Na Manu Haar 3.0</strong> · I fall, I rise, I try again.
          </p>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
            Entry form →
          </a>
        </div>
      </footer>
    </>
  );
}
