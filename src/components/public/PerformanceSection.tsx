import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Users,
  X,
} from 'lucide-react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

import './PerformanceSection.css';

interface WorkshopStory {
  id: number;
  city: string;
  province: string;
  participants: number;
  facilitator: string;
  facilitatorRole: string;
  label: string;
  story: string[];
}

const WORKSHOPS: WorkshopStory[] = [
  {
    id: 1,
    city: 'Kandy',
    province: 'Central Province',
    participants: 30,
    facilitator: 'Mr. Harsha Vidanapathirana',
    facilitatorRole: 'Senior Lecturer in Law',
    label: 'Regional Workshop',
    story: [
      'The Kandy Regional Workshop marked the beginning of the Law, Liberty and Civic Responsibility initiative, bringing together 30 young participants for an engaging conversation on law, civic awareness and responsible citizenship. As the first regional engagement of the initiative, the workshop established the foundation for a series of youth-focused dialogues to be conducted across Sri Lanka.',
      'The session was conducted by Mr. Harsha Vidanapathirana, Senior Lecturer in Law, who guided participants through discussions on the relevance of legal knowledge in everyday life and the role of young citizens in a democratic society. Rather than approaching the law as a purely academic subject, the workshop encouraged participants to consider how legal principles, rights and responsibilities influence their daily lives and their communities.',
      'Through interactive discussions and the exchange of perspectives, participants explored themes including the rule of law, civic responsibility, participation in public life and the importance of an informed citizenry. The workshop also provided an opportunity for participants to identify challenges faced by young people in understanding and engaging with legal and civic institutions.',
      'The Kandy workshop set the tone for the regional consultations that followed, demonstrating the importance of creating spaces where young people can openly discuss the relationship between law, liberty and civic responsibility.',
    ],
  },

  {
    id: 2,
    city: 'Matara',
    province: 'Southern Province',
    participants: 35,
    facilitator: 'Ms. Hasini Ratnamalala',
    facilitatorRole:
      'Dean of the Faculty of Law, Kotelawala Defence University',
    label: 'Regional Workshop',
    story: [
      'The Matara Regional Workshop brought together 35 participants for the second regional engagement of Law, Liberty and Civic Responsibility. Building on the discussions initiated in Kandy, the workshop continued the initiative’s effort to create meaningful spaces for young people to explore legal literacy, civic participation and responsible citizenship.',
      'The session was conducted by Ms. Hasini Ratnamalala, Dean of the Faculty of Law, Kotelawala Defence University, whose experience in legal education provided participants with valuable perspectives on the importance of understanding the law beyond the classroom.',
      'The workshop encouraged participants to reflect on the connection between individual rights and civic responsibilities, and on how informed citizens contribute to stronger democratic institutions. Discussions explored the practical relevance of legal knowledge, the importance of accountability, participation in public affairs and the role of young people in shaping their communities.',
      'Particular emphasis was placed on making legal and civic concepts accessible and relevant to everyday experiences. Participants were encouraged to share their own perspectives, raise questions and identify issues affecting young people in their communities.',
      'The Matara engagement further strengthened the initiative’s regional consultation process, demonstrating the value of bringing together young people from different backgrounds to exchange ideas and develop practical perspectives on the principles of law, liberty and responsible citizenship.',
    ],
  },

  {
    id: 3,
    city: 'Colombo',
    province: 'Western Province',
    participants: 40,
    facilitator: 'Mr. Prasantha Lal de Alwis',
    facilitatorRole:
      'President’s Counsel and Principal of Sri Lanka Law College',
    label: 'Regional Workshop',
    story: [
      'The Colombo Regional Workshop brought together 40 participants, making it one of the largest regional engagements under Law, Liberty and Civic Responsibility. As the initiative moved to the commercial and administrative heart of the country, the workshop provided a broader platform for young people to engage with questions surrounding law, civic participation and democratic responsibility.',
      'The session was conducted by Mr. Prasantha Lal de Alwis, President’s Counsel and Principal of Sri Lanka Law College, whose extensive experience in legal practice and legal education provided participants with an important perspective on the role of law in society.',
      'The workshop explored the practical importance of legal literacy and the responsibilities that accompany the exercise of rights and freedoms. Participants engaged in discussions on the rule of law, accountability, civic participation and the importance of an informed and responsible citizenry.',
      'The session also encouraged participants to move beyond viewing law as something confined to courts and legal professionals. Instead, discussions highlighted how legal awareness can empower individuals to make informed decisions, understand their rights and responsibilities, and participate more meaningfully in society.',
      'With participants bringing diverse academic, professional and social perspectives to the discussion, the Colombo workshop contributed significantly to the initiative’s broader regional consultation process. The ideas and perspectives emerging from the session formed part of the collective body of recommendations carried forward towards the National Culminating Forum.',
    ],
  },

  {
    id: 4,
    city: 'Jaffna',
    province: 'Northern Province',
    participants: 20,
    facilitator: 'Mr. Pradinath Sivaneshan',
    facilitatorRole: 'Senior Lecturer in Law',
    label: 'Regional Workshop',
    story: [
      'The Jaffna Regional Workshop marked the initiative’s engagement in the Northern Province, bringing together 20 participants for a focused discussion on law, liberty and civic responsibility. The workshop formed an important part of the initiative’s commitment to ensuring that youth perspectives from different parts of Sri Lanka contribute to a broader national conversation.',
      'The session was conducted by Mr. Pradinath Sivaneshan, Senior Lecturer in Law, who facilitated discussions on legal awareness, civic responsibility and the role of young people in a democratic society.',
      'Participants were encouraged to reflect on the practical relevance of law in their everyday lives and to consider the relationship between individual rights, responsibilities and participation in public life. The interactive nature of the workshop allowed participants to raise questions, share experiences and discuss challenges relevant to their communities.',
      'The Jaffna engagement also reinforced one of the central principles of Law, Liberty and Civic Responsibility: that meaningful civic dialogue must create space for voices from across the country. By bringing together young people in the Northern Province, the initiative sought to strengthen understanding of shared democratic principles while recognising the importance of diverse regional experiences and perspectives.',
      'The discussions and recommendations emerging from Jaffna became part of the wider regional consultation process, contributing to the collective findings that would ultimately be presented and discussed at the National Culminating Forum.',
    ],
  },

  {
    id: 5,
    city: 'Batticaloa',
    province: 'Eastern Province',
    participants: 25,
    facilitator: 'Mr. Sabishanth Mohan',
    facilitatorRole: 'State Counsel',
    label: 'Regional Workshop',
    story: [
      'The Batticaloa Regional Workshop marked the final regional engagement of Law, Liberty and Civic Responsibility, bringing together 25 participants in the Eastern Province. The workshop represented an important milestone in the initiative, completing a series of regional consultations spanning Kandy, Matara, Colombo, Jaffna and Batticaloa.',
      'The session was conducted by Mr. Sabishanth Mohan, State Counsel, who guided participants through discussions on legal literacy, civic responsibility, individual rights and meaningful participation in democratic society.',
      'Participants were encouraged to examine the practical relationship between law and everyday life, while reflecting on how young citizens can contribute positively to their communities and wider society. The workshop provided a space for participants to share perspectives, raise concerns and discuss the challenges that can affect young people’s ability to understand and engage with legal and civic institutions.',
      'As the final regional workshop, Batticaloa also served as a significant point of reflection on the conversations generated throughout the initiative. The perspectives and recommendations gathered from the Eastern Province complemented those emerging from the other four regional engagements, helping to build a broader picture of youth perspectives across Sri Lanka.',
      'With the completion of the Batticaloa workshop, the regional phase of the initiative concluded, paving the way for the National Culminating Forum, where these diverse regional voices would come together as part of one national dialogue on law, liberty and civic responsibility.',
    ],
  },
];

export default function PerformanceSection() {
  const [selectedWorkshop, setSelectedWorkshop] =
    useState<WorkshopStory | null>(null);

  const closeModal = useCallback(() => {
    setSelectedWorkshop(null);
  }, []);

  useEffect(() => {
    if (!selectedWorkshop) return;

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener(
      'keydown',
      handleEscape,
    );

    return () => {
      document.body.style.overflow = oldOverflow;

      window.removeEventListener(
        'keydown',
        handleEscape,
      );
    };
  }, [selectedWorkshop, closeModal]);

  return (
    <>
      <SectionWrapper id="performance">
        <SectionHeader
          num="05"
          sub="Regional Engagements"
          title="Five Workshops. One National Conversation."
        />

        <div className="workshop-story-intro">
          <p>
            From Kandy to Batticaloa, five regional
            workshops brought together 150 young
            participants to explore legal literacy,
            civic responsibility and meaningful
            participation in democratic society.
          </p>

          <div className="workshop-story-summary">
            <strong>150</strong>
            <span>Participants</span>
          </div>
        </div>

        <div className="workshop-card-grid">
          {WORKSHOPS.map((workshop, index) => (
            <motion.article
              key={workshop.id}
              initial={{
                opacity: 0,
                y: 26,
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
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="workshop-story-card"
            >
              <div className="workshop-card-base">
                <span className="workshop-card-number">
                  {String(workshop.id).padStart(
                    2,
                    '0',
                  )}
                </span>

                <div className="workshop-card-status">
                  <CheckCircle2 size={13} />
                  <span>Completed</span>
                </div>

                <div className="workshop-card-city">
                  <span className="workshop-card-province">
                    {workshop.province}
                  </span>

                  <h3>{workshop.city}</h3>
                </div>

                <div className="workshop-card-bottom">
                  <div>
                    <Users size={15} />
                    <span>
                      {workshop.participants}{' '}
                      participants
                    </span>
                  </div>

                  <div>
                    <MapPin size={15} />
                    <span>
                      {workshop.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="workshop-card-reveal">
                <span className="workshop-reveal-label">
                  Facilitated by
                </span>

                <h4>
                  {workshop.facilitator}
                </h4>

                <p className="workshop-facilitator-role">
                  {workshop.facilitatorRole}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedWorkshop(workshop)
                  }
                  className="workshop-read-more"
                >
                  Read Workshop Story
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="workshop-completion-strip">
          <div>
            <CheckCircle2 size={18} />

            <span>
              Regional phase completed
            </span>
          </div>

          <span>
            Kandy · Matara · Colombo · Jaffna ·
            Batticaloa
          </span>
        </div>
      </SectionWrapper>

      {selectedWorkshop && (
        <div
          className="workshop-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeModal();
            }
          }}
        >
          <article
            className="workshop-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="workshop-modal-title"
          >
            <button
              type="button"
              className="workshop-modal-close"
              onClick={closeModal}
              aria-label="Close workshop story"
            >
              <X size={20} />
            </button>

            <div className="workshop-modal-side">
              <span className="workshop-modal-index">
                {String(
                  selectedWorkshop.id,
                ).padStart(2, '0')}
              </span>

              <div>
                <span className="workshop-modal-side-label">
                  Regional Workshop
                </span>

                <h3>
                  {selectedWorkshop.city}
                </h3>

                <p>
                  {selectedWorkshop.province}
                </p>
              </div>

              <div className="workshop-modal-side-stats">
                <div>
                  <strong>
                    {
                      selectedWorkshop.participants
                    }
                  </strong>

                  <span>
                    Participants
                  </span>
                </div>

                <div>
                  <CheckCircle2 size={17} />
                  <span>
                    Completed
                  </span>
                </div>
              </div>
            </div>

            <div className="workshop-modal-content">
              <div className="workshop-modal-heading">
                <span>
                  Facilitated by
                </span>

                <h2 id="workshop-modal-title">
                  {selectedWorkshop.city} Regional
                  Workshop
                </h2>

                <div className="workshop-modal-facilitator">
                  <strong>
                    {
                      selectedWorkshop.facilitator
                    }
                  </strong>

                  <span>
                    {
                      selectedWorkshop.facilitatorRole
                    }
                  </span>
                </div>
              </div>

              <div className="workshop-modal-story">
                {selectedWorkshop.story.map(
                  (paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ),
                )}
              </div>

              <div className="workshop-modal-footer">
                <span>
                  Law, Liberty & Civic Responsibility
                </span>

                <span>
                  Civic Law Initiative · 2026
                </span>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
