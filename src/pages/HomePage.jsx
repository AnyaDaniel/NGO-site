import SiteHeader from "../components/SiteHeader.jsx";
import { React, Footer, Fe, usePageTitle, Ob, rm, hS, i6 } from "../site.jsx";
import { useHomeMotion } from "../motion.js";
import "../modern-home.css";

function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      {...props}
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M16 8c-4-4-8-4-13-3v21c5-1 9-1 13 3 4-4 8-4 13-3V5c-5-1-9-1-13 3Zm0 0v21M7 10l5 1m-5 4 5 1m8-5 5-1m-5 6 5-1" />
    </svg>
  );
}

const ambitions = [
  {
    value: 3,
    suffix: "M+",
    label: "Young people to reach",
    detail: "Through access to libraries",
  },
  {
    value: 20,
    suffix: "",
    label: "Libraries to build",
    detail: "Spaces that open possibilities",
  },
  {
    value: 30,
    suffix: "+",
    label: "Correctional centres",
    detail: "Learning beyond limitations",
  },
  {
    value: 18,
    suffix: "",
    label: "States across Nigeria",
    detail: "One shared vision for change",
  },
];
const pathways = [
  {
    n: "01",
    title: "Give a little. Change a lot.",
    text: "Help put books, resources, and opportunity into the hands of young people.",
    link: "/donate",
    action: "Support our mission",
  },
  {
    n: "02",
    title: "Your time has real value.",
    text: "Bring your skills, ideas, and energy to a community that cares.",
    link: "/get-involved",
    action: "Become a volunteer",
  },
  {
    n: "03",
    title: "Build something with us.",
    text: "Partner with us to create sustainable learning spaces across Nigeria.",
    link: "/current-focus",
    action: "Explore partnerships",
  },
];
export default function HomePage() {
  usePageTitle();
  const root = React.useRef(null);
  useHomeMotion(root);
  return (
    <div className="modern-home" ref={root}>
      <a className="home-skip-link" href="#home-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="home-content">
        <section
          className="new-hero home-container"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <div className="home-eyebrow hero-enter">
              <span className="status-dot" /> KNOWLEDGE OPENS DOORS
            </div>
            <h1 id="hero-title" className="hero-enter">
              A new chapter.
              <br />
              For <span className="hero-serif">every</span>
              <br />
              <span className="hero-green">young Nigerian.</span>
            </h1>
            <p className="hero-description hero-enter">
              A book. A space to learn. A chance to begin again. We build
              libraries and learning opportunities that turn potential into
              possibility.
            </p>
            <div className="hero-actions hero-enter">
              <Fe href="/get-involved" className="home-button dark">
                Be part of the change <Arrow diagonal />
              </Fe>
              <Fe href="/focus-areas" className="home-text-link">
                Discover our work <Arrow />
              </Fe>
            </div>
            <div className="hero-footnote hero-enter">
              <span className="tiny-cross">✳</span>
              <span>
                Education. Rehabilitation. Reintegration.
                <br />
                <strong>Different journeys. Equal possibilities.</strong>
              </span>
            </div>
          </div>
          <div className="hero-art hero-enter">
            <div className="hero-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <figure className="hero-photo">
              <img
                src={Ob}
                alt="Young Nigerians learning and collaborating around a community library"
                fetchPriority="high"
                width="1024"
                height="1024"
              />
              <figcaption>
                <span className="photo-live-dot" /> THE NEXT CHAPTER STARTS HERE{" "}
                <span>01 / FODADY</span>
              </figcaption>
            </figure>
            <div className="hero-floating-card">
              <span className="floating-icon">
                <BookIcon />
              </span>
              <div>
                Small spaces.
                <br />
                <strong>Extraordinary possibilities.</strong>
              </div>
              <Arrow diagonal />
            </div>
            <div className="hero-image-label">
              <span>Built around people.</span>
              <span>Designed for possibility. ↗</span>
            </div>
          </div>
        </section>
        <section className="ambition-section" aria-labelledby="ambition-title">
          <div className="home-container">
            <div className="ambition-top">
              <h2 id="ambition-title">
                Big ambitions. <span>Real purpose.</span>
              </h2>
              <span className="outline-pill">
                OUR THREE-YEAR AIM <span>↗</span>
              </span>
            </div>
            <div className="ambition-grid">
              {ambitions.map((item) => (
                <div className="ambition-stat" key={item.label}>
                  <p
                    className="stat-number"
                    aria-label={`${item.value}${item.suffix} ${item.label}`}
                  >
                    <span data-count={item.value} aria-hidden="true">
                      {item.value}
                    </span>
                    <span aria-hidden="true">{item.suffix}</span>
                    <span className="stat-spark" aria-hidden="true">
                      ✳
                    </span>
                  </p>
                  <h3>{item.label}</h3>
                  <p className="stat-detail">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="ambition-note">
              Our goals for the next three years — the future we’re working
              towards, together.
            </p>
          </div>
        </section>
        <section className="home-mission home-container section-space">
          <div className="home-eyebrow" data-reveal>
            <span className="label-line" /> THE HUMAN SIDE OF PROGRESS
          </div>
          <div className="mission-main" data-reveal>
            <h2>
              Potential is everywhere.
              <br />
              <span className="muted-heading">Opportunity should be, too.</span>
            </h2>
            <div className="mission-bottom">
              <p>
                We are the Foundation for the Development of Able and Disabled
                Youths. Across public communities and correctional facilities,
                we use libraries and knowledge to support education, restore
                dignity, and make new beginnings possible.
              </p>
              <Fe href="/about" className="home-circle-link">
                <span>Get to know FODADY</span>
                <span className="circle-arrow">
                  <Arrow diagonal />
                </span>
              </Fe>
            </div>
          </div>
        </section>
        <section id="home-programs" className="home-programs section-space">
          <div className="home-container">
            <div className="section-heading" data-reveal>
              <div>
                <div className="home-eyebrow">
                  <span className="label-line" /> OUR WORK, IN THE REAL WORLD
                </div>
                <h2>
                  More than books.
                  <br />
                  <span className="muted-heading">
                    Building blocks for life.
                  </span>
                </h2>
              </div>
              <Fe href="/focus-areas" className="home-text-link">
                Explore our focus areas <Arrow diagonal />
              </Fe>
            </div>
            <div className="program-grid">
              <Fe
                href="/focus-areas"
                className="program-card program-library program-photo-card"
                data-reveal
              >
                <img
                  src={hS}
                  alt="A community library in Nigeria"
                  loading="lazy"
                  width="1024"
                  height="1024"
                />
                <div className="program-image-shade" />
                <span className="card-index">01 / ACCESS</span>
                <div className="program-card-copy">
                  <span className="program-icon">
                    <BookIcon />
                  </span>
                  <h3>
                    Libraries that
                    <br />
                    open up worlds.
                  </h3>
                  <p>
                    Public and community spaces where curiosity becomes
                    opportunity.
                  </p>
                </div>
                <span className="program-action-label">Explore programme</span>
                <span className="program-arrow">
                  <Arrow diagonal />
                </span>
              </Fe>
              <Fe
                href="/prison-libraries"
                className="program-card program-rehabilitation program-photo-card"
                data-reveal
              >
                <img
                  src={rm}
                  alt="Hands learning practical vocational skills"
                  loading="lazy"
                  width="1408"
                  height="768"
                />
                <div className="program-image-shade" aria-hidden="true" />
                <span className="card-index">02 / NEW BEGINNINGS</span>
                <div className="book-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="program-card-copy">
                  <h3>
                    A second chance
                    <br />
                    starts with learning.
                  </h3>
                  <p>
                    Correctional libraries and structured learning for
                    rehabilitation and reintegration.
                  </p>
                </div>
                <span className="program-action-label">Explore programme</span>
                <span className="program-arrow">
                  <Arrow diagonal />
                </span>
              </Fe>
              <Fe
                href="/focus-areas"
                className="program-card program-inclusion program-photo-card"
                data-reveal
              >
                <img
                  src={i6}
                  alt="A young wheelchair user with a supportive educator in an inclusive learning space"
                  loading="lazy"
                  width="1408"
                  height="768"
                />
                <div className="program-image-shade" aria-hidden="true" />
                <span className="card-index">03 / BELONGING</span>
                <div className="inclusion-mark" aria-hidden="true">
                  ✳
                </div>
                <div className="program-card-copy">
                  <h3>
                    No one on
                    <br />
                    the sidelines.
                  </h3>
                  <p>
                    Inclusive, disability-friendly spaces. Equal access. Shared
                    possibilities.
                  </p>
                </div>
                <span className="program-action-label">Explore programme</span>
                <span className="program-arrow">
                  <Arrow diagonal />
                </span>
              </Fe>
            </div>
          </div>
        </section>
        <section className="home-spotlight home-container section-space">
          <div className="spotlight-photo" data-reveal>
            <img
              src={rm}
              alt="Hands working during a vocational training session"
              loading="lazy"
              width="1024"
              height="1024"
            />
            <span className="photo-caption">
              LEARNING A SKILL. REWRITING A FUTURE.
            </span>
          </div>
          <div className="spotlight-copy" data-reveal>
            <div className="home-eyebrow">
              <span className="status-dot" /> PROJECT SPOTLIGHT
            </div>
            <h2>
              Life doesn’t end
              <br />
              at a setback.
              <br />{" "}
              <span className="hero-green">
                Neither should
                <br />
                opportunity.
              </span>
            </h2>
            <p>
              Our Kuje Prison Rehabilitation Project brings together learning,
              practical skills, and library resources to support a meaningful
              path back into society.
            </p>
            <p className="spotlight-note">
              From carpentry and tailoring to agriculture and small-scale
              manufacturing, we’re building on existing programmes to make
              freedom sustainable.
            </p>
            <Fe href="/projects" className="home-button dark">
              See the work behind the words <Arrow diagonal />
            </Fe>
          </div>
        </section>
        <section className="home-involve section-space">
          <div className="home-container">
            <div className="section-heading" data-reveal>
              <div>
                <div className="home-eyebrow">
                  <span className="label-line" /> THERE’S A PLACE FOR YOU HERE
                </div>
                <h2>
                  Good intentions.
                  <br />
                  <span className="muted-heading">Meet meaningful action.</span>
                </h2>
              </div>
              <p>
                Real change takes all of us.
                <br />
                Find your way to make a difference.
              </p>
            </div>
            <div className="pathway-list">
              {pathways.map((p) => (
                <Fe href={p.link} className="pathway" key={p.n} data-reveal>
                  <span className="pathway-number">{p.n}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                  <span className="pathway-action">{p.action}</span>
                  <span className="circle-arrow">
                    <Arrow diagonal />
                  </span>
                </Fe>
              ))}
            </div>
          </div>
        </section>
        <section className="home-cta" data-reveal>
          <div className="home-container cta-inner">
            <div className="cta-orb" aria-hidden="true">
              ✳
            </div>
            <div className="home-eyebrow">
              BETTER FUTURES ARE A SHARED PROJECT
            </div>
            <h2>
              Let’s open
              <br />
              <span>the next door.</span>
            </h2>
            <p>
              For a young person. For a community.
              <br />
              For a future with room for everyone.
            </p>
            <div className="cta-actions">
              <Fe href="/donate" className="home-button lime">
                Help write the next chapter <Arrow diagonal />
              </Fe>
              <Fe href="/contact" className="home-text-link">
                Let’s talk <Arrow />
              </Fe>
            </div>
          </div>
        </section>
        <div className="home-original-link home-container">
          <span>Rooted in inclusion. Moving towards possibility.</span>
          <Fe href="/original-home">
            View our original homepage <Arrow diagonal />
          </Fe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
