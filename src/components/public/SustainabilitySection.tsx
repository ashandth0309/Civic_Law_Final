import { motion } from 'framer-motion';
import {
  Network,
  FileText,
  GraduationCap,
  Megaphone,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

import './SustainabilitySection.css';

const pathways = [
  {
    number: '01',
    icon: Network,
    title: 'Alumni Networks',
    text: 'Continued engagement through SUSI Rule of Law Alumni connections and participant networks.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Policy Brief',
    text: 'Regional discussions, findings and recommendations carried forward into a consolidated national policy brief.',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Academic Reach',
    text: 'Knowledge and recommendations shared with universities, law faculties and civil society organisations.',
  },
  {
    number: '04',
    icon: Megaphone,
    title: 'Public Amplification',
    text: 'Broader public engagement through media, social platforms and digital dissemination.',
  },
];

export default function SustainabilitySection() {
  return (
    <SectionWrapper id="sustainability">
      <div className="sustainability-section">
        <SectionHeader
          num="04"
          sub="Future Outlook"
          title="Sustainability & Amplification"
        />

        {/* INTRO */}
        <motion.div
          className="sustainability-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <span>
              Beyond the workshops
            </span>

            <p>
              The regional engagements were designed not as isolated
              events, but as the beginning of a longer civic network —
              carrying knowledge, dialogue and recommendations forward.
            </p>
          </div>

          <div className="sustainability-mark">
            <strong>→</strong>
            <span>Long-term impact</span>
          </div>
        </motion.div>

        {/* MAIN PANELS */}
        <div className="sustainability-panels">
          {/* SUSTAINABILITY */}
          <motion.article
            className="sustainability-panel sustainability-panel-maroon"
            initial={{
              opacity: 0,
              x: -32,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="sustainability-panel-top">
              <span>01</span>

              <Network
                size={24}
                strokeWidth={1.4}
              />
            </div>

            <div className="sustainability-panel-content">
              <span className="sustainability-panel-label">
                Sustainability Plan
              </span>

              <h3>
                Knowledge that continues beyond the programme
              </h3>

              <p>
                The project is designed to generate lasting impact by
                strengthening knowledge, networks, and continued engagement
                among participants. These connections will continue through
                alumni engagement facilitated by the SUSI Rule of Law Alumni.
              </p>

              <p>
                A key outcome of the national culminating forum will be the
                development of a policy brief summarizing the discussions,
                findings, and recommendations generated throughout the
                regional workshops.
              </p>
            </div>

            <div className="sustainability-panel-footer">
              <span />
              <ArrowUpRight
                size={20}
                strokeWidth={1.4}
              />
            </div>
          </motion.article>

          {/* AMPLIFICATION */}
          <motion.article
            className="sustainability-panel sustainability-panel-teal"
            initial={{
              opacity: 0,
              x: 32,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="sustainability-panel-top">
              <span>02</span>

              <Megaphone
                size={24}
                strokeWidth={1.4}
              />
            </div>

            <div className="sustainability-panel-content">
              <span className="sustainability-panel-label">
                Amplification Plan
              </span>

              <h3>
                Extending the conversation beyond participants
              </h3>

              <p>
                The project will reach secondary and tertiary audiences
                through multiple channels. Secondary audiences include
                academic institutions and law faculties across Sri Lanka,
                civil society organizations, and policy stakeholders.
              </p>

              <p>
                Tertiary audiences include the broader public, reached via
                social media, press coverage, and online dissemination.
              </p>
            </div>

            <div className="sustainability-panel-footer">
              <span />
              <ArrowUpRight
                size={20}
                strokeWidth={1.4}
              />
            </div>
          </motion.article>
        </div>

        {/* CONTINUATION PATH */}
        <div className="sustainability-path">
          <div className="sustainability-path-heading">
            <span>Continuation Path</span>

            <p>
              How the initiative moves from regional dialogue to long-term
              civic impact.
            </p>
          </div>

          <div className="sustainability-path-grid">
            {pathways.map(
              (
                {
                  number,
                  icon: Icon,
                  title,
                  text,
                },
                index
              ) => (
                <motion.article
                  key={title}
                  className="sustainability-path-card"
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="sustainability-path-top">
                    <span>{number}</span>

                    <Icon
                      size={21}
                      strokeWidth={1.35}
                    />
                  </div>

                  <div className="sustainability-path-content">
                    <h4>
                      {title}
                    </h4>

                    <p>
                      {text}
                    </p>
                  </div>

                  <div className="sustainability-path-line" />
                </motion.article>
              )
            )}
          </div>
        </div>

        {/* CLOSING STRIP */}
        <motion.div
          className="sustainability-closing"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <div>
            <CheckCircle2
              size={17}
              strokeWidth={1.6}
            />

            <span>
              Regional engagement completed
            </span>
          </div>

          <i />

          <span>
            Knowledge · Networks · Policy · Public Reach
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
