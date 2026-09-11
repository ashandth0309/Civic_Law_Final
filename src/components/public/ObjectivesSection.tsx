import { motion } from 'framer-motion';
import {
  MessagesSquare,
  Landmark,
  FileCheck2,
  ArrowUpRight,
} from 'lucide-react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import { OBJECTIVES } from '../../data/constants';

import './ObjectivesSection.css';

const icons = [
  MessagesSquare,
  Landmark,
  FileCheck2,
];

export default function ObjectivesSection() {
  return (
    <SectionWrapper id="objectives">
      <div className="objectives-section">
        <SectionHeader
          num="02"
          sub="Program Objectives"
          title="Three Pillars"
        />

        {/* Intro */}
        <motion.div
          className="objectives-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>
            The initiative is built around three connected
            pillars — creating spaces for dialogue, strengthening
            civic participation, and transforming regional
            perspectives into national recommendations.
          </p>

          <div className="objectives-intro-mark">
            <span>03</span>
            <small>Core Pillars</small>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="objectives-grid">
          {OBJECTIVES.map((obj, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={obj.num}
                className={`objective-card objective-card-${index + 1}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="objective-card-top">
                  <span className="objective-number">
                    {obj.num}
                  </span>

                  <Icon
                    size={25}
                    strokeWidth={1.35}
                  />
                </div>

                <div className="objective-card-body">
                  <span className="objective-label">
                    Pillar {index + 1}
                  </span>

                  <h3>{obj.title}</h3>

                  <p>{obj.body}</p>
                </div>

                <div className="objective-card-bottom">
                  <span className="objective-line" />

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="objectives-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
        >
          <span>Dialogue</span>
          <i />
          <span>Participation</span>
          <i />
          <span>National Action</span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
