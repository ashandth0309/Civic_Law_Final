import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

import hero01 from '../../assets/hero/hero-01-workshop-discussion.png';
import hero02 from '../../assets/hero/hero-02-batticaloa-group.png';
import hero03 from '../../assets/hero/hero-03-regional-group.png';
import hero04 from '../../assets/hero/hero-04-colombo-group.png';
import hero05 from '../../assets/hero/hero-05-jaffna-speaker.png';

const heroImages = [
  hero01,
  hero02,
  hero03,
  hero04,
  hero05,
];

export default function Hero() {
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero(
        (current) =>
          (current + 1) % heroImages.length
      );
    }, 6500);

    return () =>
      window.clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen border-b-2 border-[var(--ink)] overflow-hidden"
      style={{
        paddingTop: 'calc(44px + 48px)',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] min-h-[calc(100vh-92px)]">

        {/* ========================================
            LEFT HERO
        ======================================== */}
        <div className="relative overflow-hidden bg-[#0b0b0b] flex flex-col justify-end px-6 md:px-10 lg:px-14 py-12 lg:py-16">

          {/* ========================================
              HERO IMAGE SLIDES
          ======================================== */}
          <div
            className="absolute inset-0 z-0 overflow-hidden"
            aria-hidden="true"
          >
            {heroImages.map(
              (image, index) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity:
                      index === activeHero
                        ? 1
                        : 0,

                    transform:
                      index === activeHero
                        ? 'scale(1.055)'
                        : 'scale(1.02)',

                    transition:
                      'opacity 1.4s ease-in-out, transform 7.5s ease-out',

                    objectPosition:
                      'center center',
                  }}
                />
              )
            )}

            {/* LEFT DARK FADE */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    90deg,
                    rgba(5, 7, 7, 0.97) 0%,
                    rgba(5, 7, 7, 0.94) 18%,
                    rgba(5, 7, 7, 0.84) 31%,
                    rgba(5, 7, 7, 0.61) 44%,
                    rgba(5, 7, 7, 0.34) 57%,
                    rgba(5, 7, 7, 0.13) 69%,
                    rgba(5, 7, 7, 0.02) 82%,
                    rgba(5, 7, 7, 0) 100%
                  )
                `,
              }}
            />

            {/* TOP/BOTTOM CINEMATIC VIGNETTE */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    180deg,
                    rgba(0,0,0,0.20) 0%,
                    rgba(0,0,0,0.02) 25%,
                    rgba(0,0,0,0.02) 70%,
                    rgba(0,0,0,0.35) 100%
                  )
                `,
              }}
            />

            {/* VERY SUBTLE MAROON ATMOSPHERE */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    120deg,
                    rgba(140,22,57,0.10) 0%,
                    rgba(140,22,57,0.03) 34%,
                    rgba(140,22,57,0) 65%
                  )
                `,
              }}
            />
          </div>

          {/* ========================================
              CONTENT
          ======================================== */}
          <div className="relative z-10">

            {/* EYEBROW */}
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="block w-8 h-px"
                style={{
                  background:
                    'rgba(255,255,255,0.55)',
                }}
              />

              <span
                style={{
                  fontFamily:
                    "'IBM Plex Mono', monospace",

                  fontSize:
                    'clamp(0.6rem, 1.2vw, 0.75rem)',

                  letterSpacing:
                    '0.22em',

                  color:
                    'rgba(255,255,255,0.66)',

                  textTransform:
                    'uppercase',
                }}
              >
                SUSI Rule of Law Alumni ·
                Civic Program
              </span>
            </motion.div>

            {/* ========================================
                HEADLINE
            ======================================== */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              style={{
                fontFamily:
                  "'Bebas Neue', sans-serif",

                fontSize:
                  'clamp(3.8rem, 10vw, 8.5rem)',

                lineHeight: 0.88,

                letterSpacing:
                  '-0.02em',

                marginBottom:
                  '1.75rem',

                textShadow:
                  '0 4px 28px rgba(0,0,0,0.28)',
              }}
            >
              <span
                style={{
                  color: '#FFFFFF',
                }}
              >
                Law,
              </span>

              <br />

              <span
                style={{
                  color: '#FDBD28',
                }}
              >
                Liberty
              </span>

              <br />

              <span
                style={{
    color: '#06524F',
    textShadow: '0 2px 14px rgba(0,0,0,0.35)',
  }}
              >
                &amp; Civic
              </span>

              <br />

              <span
                style={{
                  color: '#FFFFFF',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Responsibility

                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '-0.08em',
                    width: '18%',
                    height: '0.06em',
                    minHeight: '4px',
                    background:
                      '#FDBD28',
                  }}
                />
              </span>
            </motion.h1>

            {/* ========================================
                SUB COPY
            ======================================== */}
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",

                fontSize:
                  'clamp(1rem, 2vw, 1.25rem)',

                fontWeight: 300,

                lineHeight: 1.7,

                maxWidth: 540,

                color:
                  'rgba(255,255,255,0.84)',

                fontStyle: 'italic',

                borderLeft:
                  '3px solid #FDBD28',

                paddingLeft:
                  '1rem',

                marginBottom:
                  '2rem',

                textShadow:
                  '0 2px 10px rgba(0,0,0,0.35)',
              }}
            >
              Strengthening civic
              engagement, legal literacy,
              and democratic participation
              across Sri Lanka.
            </motion.p>

            {/* ========================================
                CTA BUTTONS
            ======================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                to="/#contact"
                className="
                  no-underline
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  border-2
                  transition-all
                  duration-300
                "
                style={{
                  fontFamily:
                    "'IBM Plex Mono', monospace",

                  fontSize:
                    'clamp(0.7rem, 1.3vw, 0.82rem)',

                  letterSpacing:
                    '0.12em',

                  textTransform:
                    'uppercase',

                  fontWeight: 600,

                  background:
                    '#FDBD28',

                  borderColor:
                    '#FDBD28',

                  color:
                    '#111111',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    '#FFFFFF';

                  e.currentTarget.style.borderColor =
                    '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    '#FDBD28';

                  e.currentTarget.style.borderColor =
                    '#FDBD28';
                }}
              >
                CONTACT US
              </Link>

              <a
                href="#objectives"
                className="
                  no-underline
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  border-2
                  transition-all
                  duration-300
                "
                style={{
                  fontFamily:
                    "'IBM Plex Mono', monospace",

                  fontSize:
                    'clamp(0.7rem, 1.3vw, 0.82rem)',

                  letterSpacing:
                    '0.12em',

                  textTransform:
                    'uppercase',

                  fontWeight: 500,

                  borderColor:
                    'rgba(255,255,255,0.72)',

                  color:
                    '#FFFFFF',

                  background:
                    'rgba(0,0,0,0.12)',

                  backdropFilter:
                    'blur(5px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    '#FFFFFF';

                  e.currentTarget.style.color =
                    '#111111';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    'rgba(0,0,0,0.12)';

                  e.currentTarget.style.color =
                    '#FFFFFF';
                }}
              >
                Learn More
              </a>
            </motion.div>

            {/* ========================================
                STATS ROW
            ======================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="
                flex
                flex-wrap
                gap-8
                pt-6
              "
              style={{
                borderTop:
                  '1px solid rgba(255,255,255,0.25)',
              }}
            >
              {[
                {
                  label:
                    'Program Dates',
                  val:
                    'May – July 2026',
                },
                {
                  label:
                    'Locations',
                  val:
                    '5 Regions',
                },
                {
                  label:
                    'Participants',
                  val:
                    '150 Direct',
                },
              ].map(
                ({
                  label,
                  val,
                }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1"
                  >
                    <span
                      style={{
                        fontFamily:
                          "'IBM Plex Mono', monospace",

                        fontSize:
                          'clamp(0.58rem, 1vw, 0.68rem)',

                        letterSpacing:
                          '0.18em',

                        color:
                          'rgba(255,255,255,0.5)',

                        textTransform:
                          'uppercase',
                      }}
                    >
                      {label}
                    </span>

                    <span
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', Georgia, serif",

                        fontSize:
                          'clamp(1rem, 2vw, 1.2rem)',

                        fontWeight:
                          600,

                        color:
                          '#FFFFFF',
                      }}
                    >
                      {val}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* ========================================
              IMAGE NAVIGATION
          ======================================== */}
          <div
            className="
              absolute
              z-20
              right-6
              md:right-10
              lg:right-12
              bottom-5
              md:bottom-7
              flex
              items-center
              gap-3
            "
          >
            {heroImages.map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setActiveHero(
                      index
                    )
                  }
                  aria-label={`Show hero image ${
                    index + 1
                  }`}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    bg-transparent
                    border-0
                    p-0
                    cursor-pointer
                  "
                >
                  <span
                    style={{
                      fontFamily:
                        "'IBM Plex Mono', monospace",

                      fontSize:
                        '0.48rem',

                      letterSpacing:
                        '0.08em',

                      color:
                        index ===
                        activeHero
                          ? '#FFFFFF'
                          : 'rgba(255,255,255,0.42)',

                      transition:
                        'color 0.3s ease',
                    }}
                  >
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      '0'
                    )}
                  </span>

                  <span
                    style={{
                      display:
                        'block',

                      width:
                        index ===
                        activeHero
                          ? '34px'
                          : '10px',

                      height:
                        '1px',

                      background:
                        index ===
                        activeHero
                          ? '#FDBD28'
                          : 'rgba(255,255,255,0.36)',

                      transition:
                        'all 0.4s ease',
                    }}
                  />
                </button>
              )
            )}
          </div>
        </div>

        {/* ========================================
            RIGHT PANEL
        ======================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 24,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            flex
            flex-col
            justify-end
            px-8
            md:px-10
            py-12
            lg:py-16
          "
          style={{
            background:
              '#8C1639',
          }}
        >
          <span
            style={{
              fontFamily:
                "'IBM Plex Mono', monospace",

              fontSize:
                'clamp(0.6rem, 1.1vw, 0.72rem)',

              letterSpacing:
                '0.18em',

              color:
                'rgba(255,255,255,0.45)',

              textTransform:
                'uppercase',

              marginBottom:
                'auto',

              paddingBottom:
                '2rem',

              display:
                'block',
            }}
          >
            Independent Civic
            Initiative
          </span>

          <div
            style={{
              fontFamily:
                "'Bebas Neue', sans-serif",

              fontSize:
                'clamp(4rem, 8vw, 6.5rem)',

              lineHeight: 1,

              color:
                '#FFFFFF',
            }}
          >
            2026
          </div>

          <div
            style={{
              fontFamily:
                "'IBM Plex Mono', monospace",

              fontSize:
                'clamp(0.65rem, 1.2vw, 0.78rem)',

              letterSpacing:
                '0.12em',

              color:
                'rgba(255,255,255,0.55)',

              textTransform:
                'uppercase',

              marginBottom:
                '1.5rem',
            }}
          >
            Five Regions · One Nation
          </div>

          <div
            className="w-9 h-0.5 mb-5"
            style={{
              background:
                '#FDBD28',
            }}
          />

          <p
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",

              fontSize:
                'clamp(1rem, 1.8vw, 1.15rem)',

              fontWeight:
                300,

              color:
                'rgba(255,255,255,0.78)',

              lineHeight:
                1.7,
            }}
          >
            Kandy · Matara · Jaffna ·
            Colombo · Batticaloa — five
            workshops building toward a
            national conversation on civic
            responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
