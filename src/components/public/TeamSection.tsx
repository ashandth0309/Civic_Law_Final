import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, User } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { supabase } from '../../lib/supabase';
import type { TeamMember } from '../../types/database';

const COMMITTEES = [
  'Chairperson',
  'Secretary',
  'Finance',
  'Logistics',
  'PR',
];

export default function TeamSection() {
  const [open, setOpen] = useState<string | null>('Leadership');
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    supabase
      .from('team_members')
      .select('*')
      .order('committee')
      .order('sort_order')
      .then(({ data }) => {
        if (data) setMembers(data as TeamMember[]);
      });
  }, []);

  const grouped = COMMITTEES.map(committee => ({
    category: committee,
    members: members.filter(m => (m.committee || m.department) === committee),
  }));

  return (
    <SectionWrapper id="team">
      <SectionHeader num="08" sub="Our People" title="Team" />
      <div className="flex flex-col gap-0">
        {grouped.map((cat) => {
          const isOpen = open === cat.category;
          return (
            <div key={cat.category} className="border border-b-0 last:border-b border-[var(--line)]">

              {/* Accordion header */}
              <button
                className="w-full flex items-center justify-between px-6 py-5 md:py-6 text-left cursor-pointer hover:bg-[var(--accent)] transition-colors duration-200"
                onClick={() => setOpen(isOpen ? null : cat.category)}
                aria-expanded={isOpen}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}
                >
                  {cat.category}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 'clamp(0.6rem, 1vw, 0.72rem)',
                      letterSpacing: '0.12em',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cat.members.length} {cat.members.length === 1 ? 'member' : 'members'}
                  </span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown size={18} color="var(--muted)" />
                  </motion.div>
                </div>
              </button>

              {/* Accordion body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border-t border-[var(--line)]">
                      {cat.members.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-4 px-6 py-5 md:py-6 bg-[var(--paper)] hover:bg-[var(--accent)] transition-colors duration-200"
                        >
                          {/* Avatar */}
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                            style={{ background: 'var(--accent)', border: '1px solid var(--line)' }}
                          >
                            {member.photo_url ? (
                              <img src={member.photo_url} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                              <User size={18} color="var(--muted)" />
                            )}
                          </div>

                          {/* Name + position */}
                          <div>
                            <span
                              className="block"
                              style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                                fontWeight: 600,
                                color: 'var(--ink)',
                                marginBottom: '0.2rem',
                              }}
                            >
                              {member.name}
                            </span>
                            <span
                              style={{
                                fontFamily: "'IBM Plex Mono', monospace",
                                fontSize: 'clamp(0.58rem, 1vw, 0.68rem)',
                                letterSpacing: '0.1em',
                                color: 'var(--red)',
                                textTransform: 'uppercase',
                              }}
                            >
                              {member.position}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}