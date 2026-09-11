import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Eye,
  Target,
} from 'lucide-react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

import {
  MISSION,
  VISION,
} from '../../data/constants';

import './MissionVisionSection.css';

export default function MissionVisionSection() {
  return (
    <SectionWrapper id="mission">
      <div className="mission-vision-section">
        <SectionHeader
          num="06"
          sub="Purpose"
          title="Mission & Vision"
        />

        {/* INTRO */}
        <motion.div
          className="mission-vision-intro"
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
          <span>
            Why the initiative exists
          </span>

          <p>
            Building stronger civic participation
            requires both an immediate purpose and
            a long-term direction — strengthening
            engagement today while working towards
            a more informed, accountable and
            inclusive democratic society.
          </p>
        </motion.div>

        {/* MAIN DECLARATION */}
        <div className="mission-vision-grid">
          {/* MISSION */}
          <motion.article
            className="purpose-panel purpose-panel-mission"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="purpose-background-word">
              Mission
            </span>

            <div className="purpose-panel-top">
              <div className="purpose-icon">
                <Target
                  size={22}
                  strokeWidth={1.4}
                />
              </div>

              <span className="purpose-index">
                01 / Mission
              </span>
            </div>

            <div className="purpose-panel-content">
              <span className="purpose-kicker">
                Our Purpose
              </span>

              <h3>
                Strengthen.
                <br />
                Engage.
                <br />
                Empower.
              </h3>

              <p>{MISSION}</p>
            </div>

            <div className="purpose-panel-footer">
              <span className="purpose-line" />

              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
              />
            </div>
          </motion.article>

          {/* VISION */}
          <motion.article
            className="purpose-panel purpose-panel-vision"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="purpose-background-word">
              Vision
            </span>

            <div className="purpose-panel-top">
              <div className="purpose-icon">
                <Eye
                  size={22}
                  strokeWidth={1.4}
                />
              </div>

              <span className="purpose-index">
                02 / Vision
              </span>
            </div>

            <div className="purpose-panel-content">
              <span className="purpose-kicker">
                The Future We Envision
              </span>

              <h3>
                Informed.
                <br />
                Confident.
                <br />
                Accountable.
              </h3>

              <p>{VISION}</p>
            </div>

            <div className="purpose-panel-footer">
              <span className="purpose-line" />

              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
              />
            </div>
          </motion.article>
        </div>

        {/* CONNECTING STATEMENT */}
        <motion.div
          className="mission-vision-bridge"
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
          <div className="mission-vision-bridge-label">
            <span>Mission</span>

            <i />

            <span>Vision</span>
          </div>

          <p>
            From creating meaningful spaces for
            civic dialogue today to building a
            society where every citizen can
            confidently participate tomorrow.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
