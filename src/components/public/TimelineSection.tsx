import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { TIMELINE_ITEMS } from '../../data/constants';

export default function TimelineSection() {
  return (
    <SectionWrapper id="timeline">
      <SectionHeader num="04" sub="Program Schedule" title="May to July 2026" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-[var(--ink)]">
        {TIMELINE_ITEMS.map((item, i) => (
          <motion.div
            key={item.city}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative overflow-hidden border-b border-[var(--ink)] sm:border-b-0 sm:border-r border-[var(--ink)] last:border-r-0 last:border-b-0 p-7 md:p-8"
            style={{ minHeight: 220 }}
          >
            {/* Month */}
            <span
              className="block mb-4"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                letterSpacing: '0.1em',
                color: 'var(--red)',
              }}
            >
              {item.month}
            </span>

            {/* City */}
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '0.6rem',
                lineHeight: 1.2,
              }}
            >
              {item.city}
            </h4>

            {/* Detail */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                fontWeight: 300,
                color: '#3a3530',
                lineHeight: 1.7,
              }}
            >
              {item.detail}
            </p>

            {/* Background number */}
            <span
              className="absolute bottom-3 right-4 opacity-60"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(4rem, 7vw, 5.5rem)',
                lineHeight: 1,
                color: 'var(--accent)',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}