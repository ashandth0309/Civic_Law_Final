import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { PARTNERS } from '../../data/constants';

export default function PartnersSection() {
  return (
    <SectionWrapper id="partners">
      <SectionHeader num="09" sub="Implementing Partners" title="Who We Are" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PARTNERS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="border border-[var(--line)] p-7 md:p-9 cursor-default"
            style={{ transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(14,14,14,0.1)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ background: 'var(--blue)' }}>
                <Users size={20} color="#fff" />
              </div>
              <div>
                <span
                  className="block"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    lineHeight: 1.3,
                    marginBottom: '0.3rem',
                  }}
                >
                  {p.name}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 'clamp(0.62rem, 1.1vw, 0.74rem)',
                    letterSpacing: '0.1em',
                    color: 'var(--red)',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.role}
                </span>
              </div>
            </div>

            <div className="mb-4 px-3 py-1.5 inline-block" style={{ background: 'var(--accent)' }}>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 'clamp(0.6rem, 1vw, 0.7rem)',
                  letterSpacing: '0.1em',
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                }}
              >
                {p.type}
              </span>
            </div>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                fontWeight: 300,
                lineHeight: 1.85,
                color: '#3a3530',
              }}
            >
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}