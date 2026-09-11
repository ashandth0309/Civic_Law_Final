import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Network,
  UsersRound,
} from 'lucide-react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

import { PARTNERS } from '../../data/constants';

import './PartnersSection.css';

const PARTNER_META = [
  {
    icon: UsersRound,
    tone: 'maroon',
    index: '01',
    shortLabel: 'Implementation',
  },
  {
    icon: Network,
    tone: 'teal',
    index: '02',
    shortLabel: 'Reach',
  },
];

export default function PartnersSection() {
  return (
    <SectionWrapper id="partners">
      <div className="partners-section">
        <SectionHeader
          num="08"
          sub="Implementing Partners"
          title="Who We Are"
        />

        {/* INTRO */}
        <motion.div
          className="partners-intro"
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="partners-intro-copy">
            <span>
              Collaboration behind the initiative
            </span>

            <p>
              Law, Liberty & Civic Responsibility
              is delivered through a partnership
              that combines programme leadership,
              regional coordination, community
              access and public outreach.
            </p>
          </div>

          <div className="partners-intro-mark">
            <strong>02</strong>
            <span>
              Implementing
              <br />
              Partners
            </span>
          </div>
        </motion.div>

        {/* PARTNERS */}
        <div className="partners-grid">
          {PARTNERS.map((partner, index) => {
            const meta = PARTNER_META[index];
            const Icon = meta.icon;

            return (
              <motion.article
                key={partner.name}
                className={`partner-panel partner-panel-${meta.tone}`}
                initial={{
                  opacity: 0,
                  y: 32,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="partner-background-number">
                  {meta.index}
                </span>

                <div className="partner-panel-top">
                  <div className="partner-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.4}
                    />
                  </div>

                  <span className="partner-index">
                    {meta.index}
                  </span>
                </div>

                <div className="partner-panel-content">
                  <span className="partner-short-label">
                    {meta.shortLabel}
                  </span>

                  <h3>
                    {partner.name}
                  </h3>

                  <div className="partner-role">
                    {partner.role}
                  </div>

                  <div className="partner-type">
                    {partner.type}
                  </div>

                  <p>
                    {partner.desc}
                  </p>
                </div>

                <div className="partner-panel-footer">
                  <span className="partner-footer-line" />

                  <span>
                    Working Together
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CONNECTION */}
        <motion.div
          className="partners-connection"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="partners-connection-route">
            <span>Implementation</span>

            <i />

            <span>Coordination</span>

            <i />

            <span>Community Reach</span>
          </div>

          <p>
            Programme leadership and regional
            outreach work together to turn a
            national civic vision into meaningful
            local engagement.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
