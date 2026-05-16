import { motion } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { LOCATIONS } from '../../data/constants';
import { supabase } from '../../lib/supabase';
import type { Workshop } from '../../types/database';

export default function LocationsSection() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    supabase.from('workshops').select('*').order('date').then(({ data }) => {
      if (data) setWorkshops(data as Workshop[]);
    });
  }, []);

  const getWorkshop = (city: string) => workshops.find(w => w.city === city);

  return (
    <SectionWrapper id="locations">
      <SectionHeader num="03" sub="Geographic Reach" title="Five Regions, One Nation" />
      <p
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          fontWeight: 300,
          lineHeight: 1.8,
          color: '#2a2520',
          maxWidth: 620,
          marginBottom: '2.5rem',
        }}
      >
        By engaging participants across five distinct regions of Sri Lanka, the project builds a truly national conversation on civic responsibility and rule of law.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-[var(--ink)]">
        {LOCATIONS.map((loc, i) => {
          const ws = getWorkshop(loc.name);
          return (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative overflow-hidden cursor-default border-b border-[var(--ink)] sm:border-b-0 sm:border-r border-[var(--ink)] last:border-r-0 last:border-b-0"
              style={{ minHeight: 260 }}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                style={{ background: 'var(--blue)' }}
              />

              <div className="relative z-10 p-6 md:p-7 h-full flex flex-col justify-between">

                {/* Icon */}
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--line)] group-hover:border-white/30 transition-colors duration-300 mb-5"
                  style={{ background: 'var(--accent)' }}
                >
                  <MapPin size={18} className="text-[var(--blue)] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* City / Region / Province */}
                <div>
                  <span
                    className="block group-hover:text-white transition-colors duration-300"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                      letterSpacing: '0.04em',
                      color: 'var(--ink)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {loc.name}
                  </span>
                  <span
                    className="block group-hover:text-white/70 transition-colors duration-300"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 'clamp(0.6rem, 1.1vw, 0.72rem)',
                      letterSpacing: '0.12em',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {loc.region}
                  </span>
                  <span
                    className="block group-hover:text-white/50 transition-colors duration-300"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 'clamp(0.56rem, 1vw, 0.65rem)',
                      letterSpacing: '0.1em',
                      color: 'var(--line)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {loc.province}
                  </span>
                </div>

                {/* Workshop details */}
                {ws && (
                  <div className="mt-5 pt-4 border-t border-[var(--line)] group-hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={13} className="text-[var(--muted)] group-hover:text-white/60 transition-colors duration-300 flex-shrink-0" />
                      <span
                        className="group-hover:text-white/70 transition-colors duration-300"
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 'clamp(0.58rem, 1vw, 0.68rem)',
                          letterSpacing: '0.08em',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {loc.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={13} className="text-[var(--muted)] group-hover:text-white/60 transition-colors duration-300 flex-shrink-0" />
                      <span
                        className="group-hover:text-white/70 transition-colors duration-300"
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 'clamp(0.58rem, 1vw, 0.68rem)',
                          letterSpacing: '0.08em',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Capacity: {ws.capacity}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}