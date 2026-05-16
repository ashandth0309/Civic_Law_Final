import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { OBJECTIVES } from '../../data/constants';

export default function ObjectivesSection() {
  return (
    <SectionWrapper id="objectives">
      <SectionHeader num="02" sub="Program Objectives" title="Three Pillars" />
      <div className="flex flex-col">
        {OBJECTIVES.map((obj, i) => (
          <motion.div
            key={obj.num}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group grid border-b border-[var(--line)] transition-all duration-300 hover:bg-[var(--accent)] cursor-default"
            style={{
              gridTemplateColumns: 'clamp(60px, 10vw, 90px) 1fr',
              gap: 'clamp(1rem, 3vw, 2rem)',
              alignItems: 'start',
              padding: '1.75rem 0',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.padding = '1.75rem 1.5rem';
              (e.currentTarget as HTMLElement).style.margin = '0 -1.5rem';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.padding = '1.75rem 0';
              (e.currentTarget as HTMLElement).style.margin = '0';
            }}
          >
            {/* Number */}
            <span
              className="group-hover:text-[var(--red)] transition-colors duration-300"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                lineHeight: 1,
                color: 'var(--line)',
              }}
            >
              {obj.num}
            </span>

            {/* Text */}
            <div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                {obj.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: '#3a3530',
                }}
              >
                {obj.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}