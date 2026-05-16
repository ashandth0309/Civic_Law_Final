import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ClipboardList,
  BarChart2,
  MessageSquare,
  FileText,
  BookOpen,
} from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { MONITORING_TOOLS } from '../../data/constants';
import { supabase } from '../../lib/supabase';
import type { Kpi } from '../../types/database';

const ICONS: Record<string, React.ElementType> = {
  ClipboardList,
  BarChart2,
  MessageSquare,
  FileText,
  BookOpen,
};

export default function PerformanceSection() {
  const [kpis, setKpis] = useState<Kpi[]>([]);

  useEffect(() => {
    supabase.from('kpis').select('*').order('label').then(({ data }) => {
      if (data) setKpis(data as Kpi[]);
    });
  }, []);

  return (
    <SectionWrapper id="performance">
      <SectionHeader num="06" sub="Results Framework" title="Performance & Accountability" />

      {/* ── KPIs ── */}
      <div className="mb-12">
        <span
          className="block mb-5"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 'clamp(0.62rem, 1.1vw, 0.75rem)',
            letterSpacing: '0.2em',
            color: 'var(--muted)',
            textTransform: 'uppercase',
          }}
        >
          Performance Indicators
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.key}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(14,14,14,0.12)' }}
              className="flex flex-col border border-[var(--line)] p-5 md:p-6 bg-[var(--paper)] cursor-default"
            >
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  lineHeight: 1,
                  color: 'var(--red)',
                  marginBottom: '0.6rem',
                }}
              >
                {kpi.value}
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 'clamp(0.58rem, 1vw, 0.68rem)',
                  letterSpacing: '0.1em',
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  lineHeight: 1.6,
                }}
              >
                {kpi.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Monitoring Tools ── */}
      <div className="mb-12">
        <span
          className="block mb-5"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 'clamp(0.62rem, 1.1vw, 0.75rem)',
            letterSpacing: '0.2em',
            color: 'var(--muted)',
            textTransform: 'uppercase',
          }}
        >
          Monitoring Tools
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {MONITORING_TOOLS.map((tool, i) => {
            const Icon = ICONS[tool.icon];
            return (
              <motion.div
                key={tool.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ backgroundColor: 'var(--blue)', color: '#fff' }}
                className="group flex flex-col items-center gap-3 border border-[var(--line)] p-5 md:p-6 cursor-default text-center"
                style={{ transition: 'background-color 0.3s, color 0.3s' }}
              >
                <Icon size={26} className="text-[var(--blue)] group-hover:text-white transition-colors duration-300" />
                <span
                  className="group-hover:text-white transition-colors duration-300"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 'clamp(0.62rem, 1.1vw, 0.72rem)',
                    letterSpacing: '0.1em',
                    color: 'var(--ink)',
                    textTransform: 'uppercase',
                    lineHeight: 1.5,
                  }}
                >
                  {tool.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Timeline ── */}
      <div>
        <span
          className="block mb-6"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 'clamp(0.62rem, 1.1vw, 0.75rem)',
            letterSpacing: '0.2em',
            color: 'var(--muted)',
            textTransform: 'uppercase',
          }}
        >
          Monitoring Timeline
        </span>
        <div className="relative">
          <div className="absolute top-5 left-5 right-5 h-px hidden lg:block" style={{ background: 'var(--line)' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { month: 'May 2026',  city: 'Kandy',      detail: 'Inaugural workshop — Central Province.' },
              { month: 'May 2026',  city: 'Matara',     detail: 'Southern Province workshop.' },
              { month: 'June 2026', city: 'Jaffna',     detail: 'Northern region workshop.' },
              { month: 'June 2026', city: 'Colombo',    detail: 'National Hub workshop.' },
              { month: 'July 2026', city: 'Batticaloa', detail: 'Eastern Province workshop.' },
            ].map((item, i) => (
              <motion.div
                key={item.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex flex-col"
              >
                {/* Step circle */}
                <div className="w-11 h-11 rounded-full border-2 border-[var(--ink)] bg-[var(--paper)] flex items-center justify-center mb-4 relative z-10">
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                      color: 'var(--red)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Month */}
                <span
                  className="block mb-1"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 'clamp(0.6rem, 1vw, 0.7rem)',
                    letterSpacing: '0.12em',
                    color: 'var(--red)',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.month}
                </span>

                {/* City */}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {item.city}
                </span>

                {/* Detail */}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(0.92rem, 1.6vw, 1.05rem)',
                    fontWeight: 300,
                    color: '#3a3530',
                    lineHeight: 1.65,
                  }}
                >
                  {item.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}