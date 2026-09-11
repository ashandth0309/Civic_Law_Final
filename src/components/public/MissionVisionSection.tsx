import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { MISSION, VISION } from '../../data/constants';

export default function MissionVisionSection() {
  return (
    <SectionWrapper id="mission">
      <SectionHeader num="06" sub="Purpose" title="Mission & Vision" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -6 }}
          className="relative p-8 md:p-10 border border-[var(--line)] cursor-default"
          style={{
            background: 'rgba(247,244,239,0.7)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 2px 12px rgba(14,14,14,0.06)',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(14,14,14,0.12)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(14,14,14,0.06)')}
        >
          <div className="flex items-center gap-4 mb-7">
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ background: 'var(--ink)' }}>
              <Target size={20} color="#f7f4ef" />
            </div>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                letterSpacing: '0.06em',
                color: 'var(--ink)',
              }}
            >
              Mission
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#2a2520',
            }}
          >
            {MISSION}
          </p>
          <div
            className="absolute bottom-0 right-0 w-14 h-14"
            style={{ background: 'var(--ink)', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          />
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          whileHover={{ y: -6 }}
          className="relative p-8 md:p-10 border border-[var(--blue)] cursor-default"
          style={{
            background: 'rgba(26,58,92,0.04)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 2px 12px rgba(26,58,92,0.08)',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(26,58,92,0.18)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(26,58,92,0.08)')}
        >
          <div className="flex items-center gap-4 mb-7">
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ background: 'var(--blue)' }}>
              <Eye size={20} color="#fff" />
            </div>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                letterSpacing: '0.06em',
                color: 'var(--blue)',
              }}
            >
              Vision
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#2a2520',
            }}
          >
            {VISION}
          </p>
          <div
            className="absolute bottom-0 right-0 w-14 h-14"
            style={{ background: 'var(--blue)', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          />
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
