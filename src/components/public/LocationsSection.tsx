import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

import { LOCATIONS } from '../../data/constants';
import { supabase } from '../../lib/supabase';
import type { Workshop } from '../../types/database';

export default function LocationsSection() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    supabase
      .from('workshops')
      .select('*')
      .order('date')
      .then(({ data }) => {
        if (data) {
          setWorkshops(data as Workshop[]);
        }
      });
  }, []);

  const getWorkshop = (city: string) =>
    workshops.find(
      (workshop) => workshop.city === city,
    );

  return (
    <SectionWrapper id="locations">
      <SectionHeader
        num="03"
        sub="Geographic Reach"
        title="Five Regions, One Nation"
      />

      <p
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
          fontSize:
            'clamp(1rem, 1.8vw, 1.2rem)',
          fontWeight: 300,
          lineHeight: 1.8,
          color: '#2a2520',
          maxWidth: 680,
          marginBottom: '2.5rem',
        }}
      >
        Through five completed regional workshops
        across Sri Lanka, the project brought
        together participants from diverse
        communities to strengthen civic
        responsibility, legal literacy and the
        rule of law.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-[var(--ink)]">
        {LOCATIONS.map((loc, index) => {
          const workshop = getWorkshop(loc.name);

          return (
            <motion.div
              key={loc.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                cursor-default
                border-b
                border-[var(--ink)]
                sm:border-b-0
                sm:border-r
                last:border-r-0
                last:border-b-0
              "
              style={{
                minHeight: 290,
              }}
            >
              {/* Maroon hover background */}
              <div
                className="
                  absolute
                  inset-0
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform
                  duration-300
                  ease-out
                "
                style={{
                  background: 'var(--blue)',
                }}
              />

              <div className="relative z-10 p-6 md:p-7 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-11
                      h-11
                      rounded-full
                      border
                      border-[var(--line)]
                      group-hover:border-white/30
                      transition-colors
                      duration-300
                    "
                    style={{
                      background: 'var(--accent)',
                    }}
                  >
                    <MapPin
                      size={18}
                      className="
                        text-[var(--blue)]
                        group-hover:text-white
                        transition-colors
                        duration-300
                      "
                    />
                  </div>

                  {/* Completed badge */}
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      px-2.5
                      py-1.5
                      border
                      group-hover:border-white/30
                      transition-colors
                      duration-300
                    "
                    style={{
                      borderColor: 'var(--blue)',
                      color: 'var(--blue)',
                    }}
                  >
                    <CheckCircle2
                      size={12}
                      className="
                        group-hover:text-white
                        transition-colors
                        duration-300
                      "
                    />

                    <span
                      className="
                        group-hover:text-white
                        transition-colors
                        duration-300
                      "
                      style={{
                        fontFamily:
                          "'IBM Plex Mono', monospace",
                        fontSize: '0.48rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Completed
                    </span>
                  </div>
                </div>

                {/* City */}
                <div>
                  <span
                    className="
                      block
                      group-hover:text-white
                      transition-colors
                      duration-300
                    "
                    style={{
                      fontFamily:
                        "'Bebas Neue', sans-serif",
                      fontSize:
                        'clamp(1.6rem, 3vw, 2rem)',
                      letterSpacing: '0.04em',
                      color: 'var(--ink)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {loc.name}
                  </span>

                  <span
                    className="
                      block
                      group-hover:text-white/70
                      transition-colors
                      duration-300
                    "
                    style={{
                      fontFamily:
                        "'IBM Plex Mono', monospace",
                      fontSize:
                        'clamp(0.6rem, 1.1vw, 0.72rem)',
                      letterSpacing: '0.12em',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {loc.region}
                  </span>

                  <span
                    className="
                      block
                      group-hover:text-white/50
                      transition-colors
                      duration-300
                    "
                    style={{
                      fontFamily:
                        "'IBM Plex Mono', monospace",
                      fontSize:
                        'clamp(0.56rem, 1vw, 0.65rem)',
                      letterSpacing: '0.1em',
                      color: 'var(--line)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {loc.province}
                  </span>
                </div>

                {/* Workshop details */}
                <div
                  className="
                    mt-auto
                    pt-4
                    border-t
                    border-[var(--line)]
                    group-hover:border-white/20
                    transition-colors
                    duration-300
                  "
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar
                      size={13}
                      className="
                        text-[var(--muted)]
                        group-hover:text-white/60
                        transition-colors
                        duration-300
                        flex-shrink-0
                      "
                    />

                    <span
                      className="
                        group-hover:text-white/70
                        transition-colors
                        duration-300
                      "
                      style={{
                        fontFamily:
                          "'IBM Plex Mono', monospace",
                        fontSize:
                          'clamp(0.58rem, 1vw, 0.68rem)',
                        letterSpacing: '0.08em',
                        color: 'var(--muted)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {loc.date}
                    </span>
                  </div>

                  {workshop && (
                    <div className="flex items-center gap-2">
                      <Users
                        size={13}
                        className="
                          text-[var(--muted)]
                          group-hover:text-white/60
                          transition-colors
                          duration-300
                          flex-shrink-0
                        "
                      />

                      <span
                        className="
                          group-hover:text-white/70
                          transition-colors
                          duration-300
                        "
                        style={{
                          fontFamily:
                            "'IBM Plex Mono', monospace",
                          fontSize:
                            'clamp(0.58rem, 1vw, 0.68rem)',
                          letterSpacing: '0.08em',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Capacity: {workshop.capacity}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Completion statement */}
      <div
        className="
          mt-5
          flex
          flex-wrap
          items-center
          gap-3
          py-4
          border-y
          border-[var(--line)]
        "
      >
        <CheckCircle2
          size={17}
          style={{
            color: 'var(--blue)',
          }}
        />

        <span
          style={{
            fontFamily:
              "'IBM Plex Mono', monospace",
            fontSize: '0.62rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--blue)',
          }}
        >
          All five regional workshops completed
        </span>

        <span
          className="hidden sm:block"
          style={{
            color: 'var(--line)',
          }}
        >
          —
        </span>

        <span
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'var(--muted)',
          }}
        >
          Kandy · Matara · Jaffna · Colombo ·
          Batticaloa
        </span>
      </div>
    </SectionWrapper>
  );
}
