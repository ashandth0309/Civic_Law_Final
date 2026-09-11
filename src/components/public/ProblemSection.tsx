import { motion } from 'framer-motion';
import {
  BookOpen,
  MessagesSquare,
  Scale,
  ArrowDownRight,
} from 'lucide-react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

import './ProblemSection.css';

const challenges = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Civic Education',
    text: 'Gaps remain in structured civic education and practical legal literacy.',
  },
  {
    number: '02',
    icon: MessagesSquare,
    title: 'Public Dialogue',
    text: 'Young citizens need stronger platforms for dialogue with legal professionals and policymakers.',
  },
  {
    number: '03',
    icon: Scale,
    title: 'Equal Access',
    text: 'Regional voices must have meaningful access to national conversations on governance and civic responsibility.',
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <div className="problem-section">
        {/* Background year */}
        <motion.span
          aria-hidden="true"
          className="problem-year"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          2022
        </motion.span>

        <div className="problem-header">
          <SectionHeader
            num="01"
            sub="Problem Statement"
            title="The Democratic Moment Sri Lanka Cannot Miss"
          />
        </div>

        {/* =======================================
            MAIN EDITORIAL GRID
        ======================================= */}
        <div className="problem-main-grid">
          {/* LEFT */}
          <motion.div
            className="problem-story"
            initial={{
              opacity: 0,
              y: 28,
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="problem-story-kicker">
              <span />
              <p>
                From public protest to sustained civic participation
              </p>
            </div>

            <div className="problem-lead">
              <span className="problem-dropcap">
                S
              </span>

              <p>
                ri Lanka is undergoing a period of democratic reflection
                and institutional reform following the political and
                economic crisis of 2022.
              </p>
            </div>

            <p>
              The crisis sparked widespread public protests, particularly
              the Aragalaya movement, where youth demanded accountability,
              transparency, and stronger adherence to the rule of law.
            </p>

            <p>
              While civic engagement was high, these events revealed gaps
              in structured civic education, legal literacy, and platforms
              for dialogue between citizens, legal professionals, and
              policymakers.
            </p>

            <p>
              This is especially true in urban and post-conflict regions
              such as Jaffna and Batticaloa, where youth and early-career
              legal professionals have limited access to national-level
              discussions on governance and civic responsibility.
            </p>

            <div className="problem-editorial-line">
              <span>Context</span>
              <div />
              <span>Sri Lanka · 2022–2026</span>
            </div>
          </motion.div>

          {/* RIGHT STATEMENT PANEL */}
          <motion.aside
            className="problem-statement-panel"
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="problem-panel-top">
              <span>Why this initiative matters</span>

              <ArrowDownRight
                size={22}
                strokeWidth={1.4}
              />
            </div>

            <blockquote>
              “Many young Sri Lankans remain politically engaged but lack
              opportunities to translate civic awareness into meaningful
              participation.”
            </blockquote>

            <div className="problem-panel-divider" />

            <p>
              The challenge is no longer simply whether young people care
              about democracy — it is whether meaningful structures exist
              for them to participate in it.
            </p>

            <div className="problem-panel-index">
              <span>01</span>
              <span>Democratic Context</span>
            </div>
          </motion.aside>
        </div>

        {/* =======================================
            CHALLENGE CARDS
        ======================================= */}
        <div className="problem-challenges">
          <div className="problem-challenges-heading">
            <span>The Gap</span>

            <p>
              Three challenges emerged from this democratic moment.
            </p>
          </div>

          <div className="problem-challenge-grid">
            {challenges.map(
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
                  className="problem-challenge-card"
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="problem-challenge-top">
                    <span>{number}</span>

                    <Icon
                      size={23}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div className="problem-challenge-content">
                    <h3>{title}</h3>

                    <p>{text}</p>
                  </div>

                  <span className="problem-card-line" />
                </motion.article>
              )
            )}
          </div>
        </div>

        {/* =======================================
            BOTTOM TRANSITION
        ======================================= */}
        <motion.div
          className="problem-next"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
        >
          <span>
            The response
          </span>

          <div />

          <span>
            Creating informed, responsible civic participation
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
