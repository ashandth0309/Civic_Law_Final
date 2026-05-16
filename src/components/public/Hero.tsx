import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen border-b-2 border-[var(--ink)] overflow-hidden"
      style={{ paddingTop: 'calc(44px + 48px)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] min-h-[calc(100vh-92px)]">

        {/* ── Left ── */}
        <div className="flex flex-col justify-end px-6 md:px-10 lg:px-14 py-12 lg:py-16">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-8 h-px bg-[var(--muted)]" />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 'clamp(0.6rem, 1.2vw, 0.75rem)',
                letterSpacing: '0.22em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
              }}
            >
              SUSI Rule of Law Alumni · Civic Program
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.8rem, 10vw, 8.5rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '1.75rem',
            }}
          >
            Law,<br />
            <span style={{ color: 'var(--red)' }}>Liberty</span><br />
            &amp; Civic<br />
            Responsibility
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: 540,
              color: '#3a3530',
              fontStyle: 'italic',
              borderLeft: '3px solid var(--red)',
              paddingLeft: '1rem',
              marginBottom: '2rem',
            }}
          >
            Strengthening civic engagement, legal literacy, and democratic participation across Sri Lanka.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Link
              to="/apply"
              className="no-underline inline-flex items-center justify-center px-7 py-3.5 border-2 border-[var(--red)] text-[var(--red)] hover:bg-[var(--red)] hover:text-white transition-all duration-200"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 'clamp(0.7rem, 1.3vw, 0.82rem)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Apply Now
            </Link>
            <a
              href="#objectives"
              className="no-underline inline-flex items-center justify-center px-7 py-3.5 border-2 border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all duration-200"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 'clamp(0.7rem, 1.3vw, 0.82rem)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Learn More
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-8 pt-6 border-t border-[var(--line)]"
          >
            {[
              { label: 'Program Dates', val: 'May – July 2026' },
              { label: 'Locations', val: '5 Regions' },
              { label: 'Participants', val: '120 Direct' },
            ].map(({ label, val }) => (
              <div key={label} className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 'clamp(0.58rem, 1vw, 0.68rem)',
                    letterSpacing: '0.18em',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-[var(--blue)] flex flex-col justify-end px-8 md:px-10 py-12 lg:py-16"
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 'clamp(0.6rem, 1.1vw, 0.72rem)',
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              marginBottom: 'auto',
              paddingBottom: '2rem',
              display: 'block',
            }}
          >
            Independent Civic Initiative
          </span>

          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 8vw, 6.5rem)',
              lineHeight: 1,
              color: '#fff',
            }}
          >
            2026
          </div>

          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 'clamp(0.65rem, 1.2vw, 0.78rem)',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Five Regions · One Nation
          </div>

          <div className="w-9 h-0.5 bg-[var(--red)] mb-5" />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.7,
            }}
          >
            Kandy · Matara · Jaffna · Colombo · Batticaloa — five workshops building toward a national conversation on civic responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
}